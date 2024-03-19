import { addMouseOverEventToFireworkButton } from "./mouseover/firework-button-mouseover.js";

import { addMouseOutEventToFireworkButton } from "./mouseout/firework-button-mouseout.js";

import { addMouseDownEventToFireworkButton } from "./mousedown/firework-button-mousedown.js";

import { addMouseUpEventToFireworkButton } from "./mouseup/firework-button-mouseup.js";

export function loadFireworkButton(){
    addMouseOverEventToFireworkButton();
    addMouseOutEventToFireworkButton();
    addMouseDownEventToFireworkButton();
    addMouseUpEventToFireworkButton();
console.log('firework button loaded');
}
