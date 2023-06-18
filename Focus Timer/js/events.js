buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() { 
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSoundUp.addEventListener('click', function() { 
  buttonSoundUp.classList.add('hide')
  buttonSoundDown.classList.remove('hide')
  sound.bgAudio.pause()
})

buttonSoundDown.addEventListener('click', function() { 
  buttonSoundDown.classList.add('hide')
  buttonSoundUp.classList.remove('hide')
  sound.bgAudio.play()
})

buttonStop.addEventListener('click', function(){
 let newMinutes = controls.getMinutes()
  
  if(!newMinutes) {
    timer.reset()
    return
  }
  
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})