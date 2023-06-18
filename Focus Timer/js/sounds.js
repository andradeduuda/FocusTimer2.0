export default function (){
  const forestAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Floresta.wav?raw=true")
  const rainAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Chuva.wav?raw=true")
  const coffeShopAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Cafeteria.wav?raw=true")
  const fireAudio = new Audio("https://github.com/andradeduuda/musicstimer/blob/main/musics/Lareira.wav?raw=true")


  forestAudio.loop = true
  rainAudio.loop = true
  coffeShopAudio.loop = true
  fireAudio.loop = true

  return{
    forestAudio,
    rainAudio,
    coffeShopAudio,
    fireAudio
  }
}

