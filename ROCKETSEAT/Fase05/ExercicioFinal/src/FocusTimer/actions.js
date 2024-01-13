import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as audio from './sounds.js'

export function toggleRunning(){
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
}

export function stop(){
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateDisplay();
}

export function plus(){
    state.minutes += 5;

    if(state.minutes > 60){
        state.minutes = 60;
    }
    timer.updateDisplay();
}

export function minus(){
    state.minutes -= 5;

    if(state.minutes < 0){
        state.minutes = 0;
    }
    timer.updateDisplay();
}


export function toggleMusic(musicType){
    document.getElementById(musicType).classList.toggle('active');
    
    if(state.isMute){
        state.isMute = false;
        audio[musicType].play();

    }
    else if(!state.isMute){
        //verificacao se há outra música tocando
        for(var i=0; i< 4; i++){
            if(el.sounds.children[i].classList.contains('active') && el.sounds.children[i].id != musicType){
                audio[el.sounds.children[i].id].pause();
                el.sounds.children[i].classList.remove('active');
                audio[musicType].play();
                return;
            }
        }

        //se não houver outra música tocando
        state.isMute = true;
        audio[musicType].pause();

    }




}