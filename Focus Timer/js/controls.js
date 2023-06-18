function play(){
  buttonPlay.classList.add('hide')
  buttonStop.classList.remove('hide')
}


function stop() {
  buttonPlay.classList.remove('hide')
  buttonStop.classList.add('hide')
}

function getMinutes(){
  let newMinutes = prompt('Quantos minutos?') 
  if(!newMinutes){
    return false
  }

  return newMinutes
  }