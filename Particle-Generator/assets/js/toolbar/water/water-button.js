import { addMouseOverEventToWaterButton } from "./mouseover/water-button-mouseover.js";

import { addMouseOutEventToWaterButton } from "./mouseout/water-button-mouseout.js";

import { addMouseDownEventToWaterButton } from "./mousedown/water-button-mousedown.js";

import { addMouseUpEventToWaterButton } from "./mouseup/water-button-mouseup.js";

export function loadWaterButton(){
    addMouseOverEventToWaterButton();
    addMouseOutEventToWaterButton();
    addMouseDownEventToWaterButton();
    addMouseUpEventToWaterButton();
console.log('Water button loaded');
}
