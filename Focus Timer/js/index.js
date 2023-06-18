import Sound from "./sounds.js"

const buttonPlay =  document.querySelector('.play')
const buttonStop =  document.querySelector('.stop')
const buttonUp =  document.querySelector('.up')
const buttonDown =  document.querySelector('.down')
const buttonForest =  document.querySelector('.forest')
const buttonRain =  document.querySelector('.rain')
const buttonCoffe =  document.querySelector('.coffe')
const buttonFireplace =  document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number (minutesDisplay.textContent)
let timerTimeOut

const sound = Sound()
function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
  if (isPaused) {
    myAudio.play()
  } else {
    myAudio.pause()
  }
}
function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if (isFinished) {
      updateDisplay(minutes, seconds)
      return
    }

    if (seconds <= 0) {
      seconds = 60

      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}



buttonPlay.addEventListener('click', function(){
  countdown()
})

buttonStop.addEventListener('click', function() { 
  reset()
})
 

buttonUp.addEventListener('click', function(){
 let minutes = Number(minutesDisplay.textContent)
 minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
})

buttonDown.addEventListener('click', function(){
  minutes = Number(minutesDisplay.textContent)
  if (minutes < 5 ) {
    minutes = 5
  }

  updateTimerDisplay(String(minutes - 5),0)
})
 
buttonForest.addEventListener('click', function() {
  buttonForest.classList.toggle('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffe.classList.remove('onFocus')
  buttonFireplace.classList.remove('onFocus')
  toggleAudioPlay(sound.forestAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonCoffe.classList.remove('onFocus')
  buttonFireplace.classList.remove('onFocus')
  toggleAudioPlay(sound.rainAudio)
  sound.forestAudio.pause()
  sound.coffeShopAudio.pause()
  sound.fireAudio.pause()
})

buttonCoffe.addEventListener('click', function() {
  buttonCoffe.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonFireplace.classList.remove('onFocus')
  toggleAudioPlay(sound.coffeShopAudio)
  sound.rainAudio.pause()
  sound.forestAudio.pause()
  sound.fireAudio.pause()
})

buttonFireplace.addEventListener('click', function() {
  buttonFireplace.classList.toggle('onFocus')
  buttonForest.classList.remove('onFocus')
  buttonRain.classList.remove('onFocus')
  buttonCoffe.classList.remove('onFocus')
  toggleAudioPlay(sound.fireAudio)
  sound.rainAudio.pause()
  sound.coffeShopAudio.pause()
  sound.forestAudio.pause()
})