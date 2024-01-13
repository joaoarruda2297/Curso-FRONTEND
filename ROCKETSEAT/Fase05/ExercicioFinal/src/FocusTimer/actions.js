import state from './state.js'
import * as timer from './timer.js'

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
    if(state.isMute){
        state.isMute = false;
        state.musicType = musicType;
        console.log(state.musicType);
    }
    
}