const routes = {
    "/about": "/pages/about.html",
    "/contact": "/pages/contact.html",
    "/404": "/pages/404.html",
    "/": "/pages/home.html",
}

function route(event){
    event = event || window.event;//se o evento não existir, ele vai ser igual ao window.event
    event.preventDefault();//nao faça o padrão, que é ir para outra página
    window.history.pushState({}, "", event.target.href)//adiciona o evento ao histórico do navegador

    handle();
}

function handle(){
    //const pathname = window.location.pathname;
    const {pathname} = window.location;//desestruturação
    //const {pathname, href, host, port} = window.location;//desestruturação multipla
    const route = routes[pathname] || routes["/404"];

    fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html;
        });
}

handle();

window.onpopstate = () => handle();
window.route = route;