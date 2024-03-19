import {
	loadConfettiButton
}	from './confetti/confetti-button.js'

import {
	loadFireworkButton
} 	from './fireworks/firework-button.js'

import {
	loadWaterButton
} 	from './water/water-button.js'

import {
	loadFireButton
} 	from './fire/fire-button.js'

export function loadToolbar(){
	loadConfettiButton();
	loadFireworkButton();
	loadWaterButton();
	loadFireButton();
	console.log("Toolbar Loaded!");
}