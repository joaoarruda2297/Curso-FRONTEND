import * as el from './elements.js'
import * as actions from './actions.js';

export function registerControls() {
    el.controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (typeof actions[action] != "function") {
            return;
        }
        actions[action]();
    });
}

export function registerSounds() {
    el.sounds.addEventListener('click', (event) => {
        const sound = event.target.dataset.action;
        const typeSound = event.target.id;

        if (typeof actions[sound] != "function") {
            return;
        }
        actions[sound](typeSound);
    });
}

