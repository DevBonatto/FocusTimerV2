import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start() {
  timer.updateDisplay()
  events.focusMusicButtons()
  events.registerControls()
  events.toggleMusic()
}