import {
	spawnFireworks
} from './confetti/confetti-spawner.js'

import {
	spawnFireworks
} from './fireworks/firework-spawner.js'

import {
	spawnFire
} from './fire/fire-spawner.js'
console.log("fire loaded")

export function loadSpawners() {
	spawnConfetti();
	spawnFireworks();
	spawnFire();
}