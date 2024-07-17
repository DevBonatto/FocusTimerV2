import state from "./state.js"
import * as timer from './timer.js'
import * as elements from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  sounds.clickToggleSound.play()

  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
  elements.alert.classList.remove('popUp')
}

export function plus5Minutes() {
  const alertSection = elements.alert

  if(state.isRunning) {
    alertSection.classList.remove('popUp')
    void alertSection.offsetWidth
    alertSection.classList.add('popUp')
    sounds.alertSound.play()
   
    return
  }

  let minutes = Number(elements.minutes.textContent)

  if(minutes % 5 !== 0) {
    minutes = Math.ceil(minutes / 5) * 5
  }else {
    minutes += 5
  }

  if(minutes > 60) {
    minutes = 60
  }

  timer.updateDisplay(minutes)
  sounds.clickPlusSound.play()
}

export function minus5Minutes() {
  const alertSection = elements.alert

  if(state.isRunning) {
    alertSection.classList.remove('popUp')
    void alertSection.offsetWidth
    alertSection.classList.add('popUp')
    sounds.alertSound.play()
   
    return
  }
  elements.alert.classList.remove('popUp')

  let minutes = Number(elements.minutes.textContent)


  if(minutes % 5 !== 0) {
    minutes = Math.ceil(minutes / 5) * 5
  } else {
    minutes -= 5
  }

  if(minutes < 0) {
    minutes = 0
  }

  timer.updateDisplay(minutes)
  sounds.clickMinusSound.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}