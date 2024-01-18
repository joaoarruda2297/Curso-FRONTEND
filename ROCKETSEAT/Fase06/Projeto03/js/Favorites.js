import { GthubUser } from "./GitHubUser.js";

export class Favorites{
    constructor(root){
        this.root = document.querySelector(root);
        this.load();
    }
    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || [];

    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries));
    }
    async add(username){
        try{
            const userExists = this.entries.find((user) => {
                return user.login === username;
            });
            if(userExists){
                throw new Error("Usuário já foi adicionado");
            }
            const user = await GthubUser.search(username);
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
            return entry.login !== user.login;
        });

        this.entries = filteredEntries;
        this.save();
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root);//forma de ligar a classe pai com a classe filha
        this.tbody = this.root.querySelector("table tbody");
        this.update()
        this.onadd();
    }

    onadd(){
        const addButton = this.root.querySelector('.search button');
        addButton.onclick = () => {
            const value = this.root.querySelector('.search input').value;
            this.add(value);
            this.root.querySelector('.search input').value = "";
        }
    }
    
    update(){
        this.removeAllTr();

        this.entries.forEach((user) => {
            const row = this.createRow(user);
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`;
            row.querySelector('.user img').alt = `Imagem de ${user.name}`;
            row.querySelector('.user a').href = `https://github.com/${user.login}`;
            row.querySelector('.user p').textContent = user.name;
            row.querySelector('.user span').textContent = user.login;
            row.querySelector('.repositories').textContent = user.public_repos;
            row.querySelector('.followers').textContent = user.followers;

            //nao usamos listener pq é um clique único
            row.querySelector('.remove').onclick = () => {
                const isOk = confirm(`Deseja remover ${user.name}?`);
                if(isOk){
                    this.delete(user);
                    this.update();
                }
            };

            this.tbody.appendChild(row);
        });
    }
    

    createRow(){
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td class="user">
            <img src="https://github.com/joaoarruda2297.png" alt="">
            <a href="https://github.com/joaoarruda2297" target="_blank">
                <p>João Arruda</p>
                <span>joaoarruda2297</span>
            </a>
        </td>
        <td class="repositories">
            76
        </td>
        <td class="followers">
            9589
        </td>
        <td>
            <button class="remove">&times;</button>
        </td>
        `;

        return tr;
    }

    removeAllTr(){
        this.tbody.querySelectorAll("tr")
            .forEach((tr) => {
                tr.remove();
            });
    }
}