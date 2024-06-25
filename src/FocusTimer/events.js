import { controls } from './elements.js';
import * as actions from './actions.js';
import state from './state.js';
import * as el from './elements.js';
import { updateDisplay } from './timer.js';

export function registerControls(){
  controls.addEventListener('click', function (event){
    const action = event.target.dataset.action;

    if(typeof(actions[action]) != 'function'){
      return;
    }

    actions[action]();
  })
}

export function setMinutes(){
  el.minutes.addEventListener('focus', function(event){
    el.minutes.textContent = "";
  })

  // Lógica para aceitar apenas números (Aula "Aceitar apenas números" - Conteúdo "FocusTmer" - Nível 6 "Avançando no JavaScrip" - Programa "Explorer"):
  el.minutes.onkeypress = (event) => /\d/.test(event.key);

  el.minutes.addEventListener('blur', function (event){
    let time = event.currentTarget.textContent;
    if(time > 60){
      time = 60;
    }

    state.minutes = time;
    state.seconds = 0;

    updateDisplay();
    el.minutes.removeAttribute('contenteditable');
  })
}