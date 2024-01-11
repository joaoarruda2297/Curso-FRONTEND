import state from './state.js'
import * as el from './elements.js'
import {reset} from './actions.js'
import * as sounds from './sounds.js'

let isPlaying = false;

export function countdown(){
    if(!state.isRunning){
        isPlaying = false;
        return;
    }

    let minutes = Number(el.minutes.textContent);
    let seconds = Number(el.seconds.textContent);

    if(isPlaying){
        if(seconds > 0){
            seconds--;
        }
        else if(minutes > 0){
            minutes--;
            seconds = 59;
        }
        else{
            reset();
            isPlaying = false;
            sounds.kitchenTimer.play();
            return;
        }
    }

    isPlaying = true;

    updateDisplay(minutes, seconds);

    setTimeout(() => {countdown()}, 1000);
}

export function updateDisplay(minutes, seconds){
    minutes = minutes ?? state.minutes;//operador que verifica se o valor é nulo ou undefined, se for, possui um valor depois para caso seja.
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, "0");//padStart adiciona um caractere 0 caso o valor possua menos do que dois caracteres
    el.seconds.textContent = String(seconds).padStart(2, "0");//tambem existe o padEnd
}