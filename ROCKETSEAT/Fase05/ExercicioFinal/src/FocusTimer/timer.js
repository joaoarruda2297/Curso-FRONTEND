import * as el from './elements.js'
import state from './state.js';

//funcao de update display
export function updateDisplay(minutes,seconds){
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    //preciso do elemendo minutes e seconds no html
    el.minutes.textContent = String(minutes).padStart(2,'0');
    el.seconds.textContent = String(seconds).padStart(2,'0');
}

let isPlaying = false;

//funcao de cronometro
export function countdown(){

    clearTimeout(state.countdownId);

    if(state.isRunning == false){
        isPlaying = false;
        return;
    }
    //preciso olhar os números dos elements
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
            isPlaying = false;
            return;
        }
    }
    isPlaying = true;

    updateDisplay(minutes,seconds);
    state.countdownId = setTimeout(() => countdown(),1000);
}