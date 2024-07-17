import * as actions from './actions.js'
import { controls, musicsButtons } from './elements.js'
import * as sounds from './sounds.js'
import './state.js'
import state from './state.js'

export function registerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != 'function') {
      return
    }
    event.target.classList.remove('animate__animated', 'animate__pulse')
    void event.target.offsetWidth
    event.target.classList.add('animate__animated', 'animate__pulse')
    actions[action]()
  } )
}

export function focusMusicButtons() {
  musicsButtons.addEventListener('click', (e) =>{
    if(e.target.tagName === 'BUTTON') {
      sounds.clickToggleMusic.play()
      if(e.target.classList.contains('blue')) {
        e.target.classList.remove('blue')
      }else {
        const buttons = musicsButtons.querySelectorAll('button')
        buttons.forEach(button => button.classList.remove('blue'))

        e.target.classList.toggle('blue')
      }
    }
  })
}

export function toggleMusic() {
  musicsButtons.addEventListener('click', (e) => {
    const action = e.target.dataset.action
    let newSound

    switch(action) {
      case 'treeSound':
        newSound = sounds.florest
        break
      case 'coffee':
        newSound = sounds.coffee
        break
      case 'rain':
        newSound = sounds.rain
        break
      case 'fireplace':
        newSound = sounds.fireplace
        break
      default:
        return
    }

    if(state.currentSound && state.currentSound !== newSound) {
      state.currentSound.pause()
    }

    if(newSound.paused) {
      newSound.play()
    }else {
      newSound.pause()
    }

    state.currentSound = newSound
  })
}