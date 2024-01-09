export const ModalError = {
    error: document.querySelector('.alert-error'),

    open(){
        ModalError.error.classList.add('open');

        //se eu nao espero esse tempo, o navegador ignora a reinicialização!
        setTimeout(() => {
            ModalError.close();
        }, 3000);//valor em ms
    },
    close(){
        ModalError.error.classList.remove('open');
    }
}

window.addEventListener('keydown', handleKeydown);
function handleKeydown(event) {
    if(event.key === 'Escape')
    {
        ModalError.close();
    }
}