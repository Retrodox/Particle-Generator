import {
	fireworkPhysics
} from './fireworks/firework-physics.js'

import {
	confettiPhysics
} from './confetti/confetti-physics.js'

import {
	firePhysics
} from './fire/fire-physics.js'

export function loadPhysics() {
	confettiPhysics();
	fireworkPhysics();
	firePhysics();
}
console.log("physics loaded");