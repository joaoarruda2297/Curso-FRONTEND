import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning(){
    //veja que nessa linha eu atribuo um valor à propriedade enquanto adiciono a classe ao elemento
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function set(){
    el.minutes.setAttribute('contenteditable', true);//faz com que os minutos sejam editaveis
    el.minutes.focus();//focou nos minutos
}

export function reset(){
    //verificar se essas duas linhas nao podem ser trocadas por toggleRunning
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
    sounds.buttonPressAudio.play();
}

export function toggleMusic(){
    //análogo ao toggle Running
    state.isMute = document.documentElement.classList.toggle('music-on');

    if(state.isMute){
        sounds.bgAudio.play();
        return;
    }

    sounds.bgAudio.pause();
}