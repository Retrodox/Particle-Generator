import {
	addMouseOverEventToConfettiButton
}	from './mouseover/confetti-button-mouseover.js'

import {
    addMouseOutEventToConfettiButton
} from './mouseout/confetti-button-mouseout.js'

import {
    addMouseDownEventToConfettiButton
}   from './mousedown/confetti-button-mousedown.js'

import {
   addMouseUpEventToConfettiButton
} from './mouseup/confetti-button-mouseup.js'

export function loadConfettiButton(){
    addMouseOverEventToConfettiButton();
    addMouseOutEventToConfettiButton();
    addMouseDownEventToConfettiButton();
    addMouseUpEventToConfettiButton();
    console.log('Confetti Button Loaded!');
}