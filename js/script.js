//* import only the data needed:
// import { sounds } from './data.js';
//* import all data:
//! if this is done all referanses to sounds need to have data.sounds instead of just sounds
import * as data from './data.js';

//* deconstructing some properties from the imported data:
//* const { sounds } = data;
//! if this is done you can again write just sounds

const drumkitContainer = document.querySelector('#drumkit');




// create a drum component:
const drumComponent = (sound) => {
    // const soundRef = `${data.sounds.folder}/${sound.file}`
    const buttonEl = document.createElement('button');
    buttonEl.textContent = `${sound.file.slice(0, -4)}\n(${sound.key})`;

    //! koden under gir heller hvilken key som skal trykkes på
    // buttonEl.textContent = sound.key

    const audioEl = document.createElement('audio');
    // create an id for each audio element (not needed to make this work, but just for the example)
    audioEl.id = `hotkey-${sound.key}`
    audioEl.src = `${data.sounds.folder}/${sound.file}`
    // audioEl.src = soundRef

    buttonEl.addEventListener('focus', () => {
        audioEl.play()
    })

    // buttonEl.addEventListener('pointerup', () => {
    //     audioEl.pause()
    //     audioEl.currentTime = 0
    // })

    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        if (key === sound.key.toLowerCase()) {
            audioEl.play()
        }

    })


    document.addEventListener('keyup', () => {
        audioEl.pause()
        audioEl.currentTime = 0
    })
    drumkitContainer.append(buttonEl, audioEl)
}

const createDrumKit = () => {
    data.sounds.soundsFiles.forEach((sound) => {
        drumComponent(sound)
    })
}

createDrumKit();



