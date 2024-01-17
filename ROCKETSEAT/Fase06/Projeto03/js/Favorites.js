export class Favorites{
    constructor(root){
        this.root = document.querySelector(root);
        this.load();
    }
    load(){
        this.entries = [
            {
                login: 'joaoarruda2297',
                name: "João Arruda",
                public_repos: '76',
                followers: '9589',
            },
            {
                login: 'diego3g',
                name: "Diego Fernandes",
                public_repos: '50',
                followers: '22500',
            }
        ];
    }
}

export class FavoritesView extends Favorites{
    constructor(root){
        super(root);
        this.tbody = this.root.querySelector("table tbody");
        this.update()
        //forma de ligar a classe pai com a classe filha
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