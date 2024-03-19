import { addMouseOverEventToFireButton } from "./mouseover/fire-button-mouseover.js";

import { addMouseOutEventToFireButton } from "./mouseout/fire-button-mouseout.js";

import { addMouseDownEventToFireButton } from "./mousedown/fire-button-mousedown.js";

import { addMouseUpEventToFireButton } from "./mouseup/fire-button-mouseup.js";

export function loadFireButton(){
    addMouseOverEventToFireButton();
    addMouseOutEventToFireButton();
    addMouseDownEventToFireButton();
    addMouseUpEventToFireButton();
console.log('Fire button loaded');
}
