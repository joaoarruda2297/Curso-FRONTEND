export class Router{

    routes = {};

    add(routeName, page){
        this.routes[routeName] = page;
    }

    route(event){
        event = event || window.event;//se o evento não existir, ele vai ser igual ao window.event
        event.preventDefault();//nao faça o padrão, que é ir para outra página
        window.history.pushState({}, "", event.target.href)//adiciona o evento ao histórico do navegador
    
        this.handle();
    }

    handle(){
        //const pathname = window.location.pathname;
        const {pathname} = window.location;//desestruturação
        //const {pathname, href, host, port} = window.location;//desestruturação multipla
        const route = this.routes[pathname] || this.routes["/404"];
    
        fetch(route)
            .then(data => data.text())
            .then(html => {
                document.querySelector("#app").innerHTML = html;
            });
    }
}

