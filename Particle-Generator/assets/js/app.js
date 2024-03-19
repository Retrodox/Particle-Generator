import { loadToolbar } from './toolbar/toolbar.js';
import { buttonSelection } from './toolbar/buttons/button-selection.js';
import { spawnConfetti } from './engines/spawners/confetti/confetti-spawner.js';
import { spawnFireworks } from './engines/spawners/fireworks/firework-spawner.js';
import { loadPhysics } from './engines/physics/physics-engine.js';
import { spawnFire } from './engines/spawners/fire/fire-spawner.js';
document.addEventListener('DOMContentLoaded', function() {
    buttonSelection();
    loadToolbar();
    spawnConfetti();
    spawnFireworks();
    spawnFire();
    loadPhysics();

    console.log("TEST SUCCESS!");
});
