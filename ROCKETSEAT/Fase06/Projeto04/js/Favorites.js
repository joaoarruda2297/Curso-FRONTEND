import { GithubUser } from "./GithubUser.js";

//um objeto para tratar do funcionamento interno
export class Favorites{
    constructor(root){
        this.root = document.querySelector(root);
        this.load();
    }
    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];
    }
    async add(username){
        try{
            const userExists = this.entries.find((user) => {
                return user.login === username;
            });
            if(userExists){
                throw new Error("Usuário já foi adicionado");
            }
            const user = await GithubUser.search(username);
            if(user.login === undefined){
                throw new Error("Usuário não encontrado");
            }
            this.entries = [user, ...this.entries];
            this.update();
            this.save();

        } catch(error){
            alert(error.message);
        }
    }
    delete(user){
        const filteredEntries = this.entries.filter((entry) => {
            return entry.login != user.login;
        })

        this.entries = filteredEntries;
        this.save();
    }
    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries));
    }
} 

//um objeto para arrumar a visualização
export class FavoritesView extends Favorites{
    constructor(root){
        super(root);//forma de ligar a classe pai com a classe filha
        this.openTbody = this.root.querySelector("table #opened-list");
        this.emptyTbody = this.root.querySelector("table #empty-list");
        this.update();
        this.onadd();
    }

    onadd(){
        const favoriteButton = document.querySelector(".search button");
        favoriteButton.onclick = () => {
            const username = document.querySelector(".search input").value;
            this.add(username);
            document.querySelector(".search input").value = "";
        }
    }
    //funcao de atualizar a tela
    update(){
        this.removeAllTr();

        this.entries.forEach((user) => {
            const tableRow = this.createRow();
            tableRow.querySelector("img").src = `https://github.com/${user.login}.png`;
            tableRow.querySelector("a").href = `https://github.com/${user.name}`;
            tableRow.querySelector("p").innerText = user.name;
            tableRow.querySelector("span").innerText = user.login;
            tableRow.querySelector(".repositories").innerText = user.public_repos;
            tableRow.querySelector(".followers").innerText = user.followers;

            tableRow.querySelector(".remove-button").onclick = () => {
                const isOk = confirm(`Tem certeza que deseja excluir ${user.name}?`)
                if(isOk){
                    this.delete(user);
                    this.update();
                }
            }
            this.openTbody.appendChild(tableRow);
        })
        this.toggleList();

    }

    toggleList(){
        if((this.entries.length > 0  && this.openTbody.classList.contains('hide')) || 
           (this.entries.length == 0 && this.emptyTbody.classList.contains('hide'))){
            
            this.openTbody.classList.toggle('hide');
            this.emptyTbody.classList.toggle('hide');
        }
    }

    createRow(){
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td class="user">
                        <img src="https://github.com/maykbrito.png">
                        <a href="https://github.com/maykbrito" target="_blank">
                            <p>Mayk Brito</p>
                            <span>/maykbrito</span>
                        </a>
                    </td>
                    <td class="repositories">20</td>
                    <td class="followers">300</td>
                    <td>
                        <button class="remove-button">Remover</button>
                    </td>
        `
        return row;
    }
    
    //funcao de remover todas as linhas
    removeAllTr(){
        this.openTbody.querySelectorAll("tr")
            .forEach(element => {
                element.remove();
        });
    }
}