const main = () => {
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.movie-outline circle')
    const video = document.querySelector('.video-container video')

    // Sounds
    const sounds = document.querySelectorAll('.sound-picker button')
    // Time display
    const timeDisplay = document.querySelector('.time-display')
    const timeSelect = document.querySelectorAll('.time-select button')


    const outLineLength = outline.getTotalLength()
    console.log(outLineLength)

    //Duration
    let fakeDuration = 600

    outline.style.strokeDasharray = outLineLength
    outline.style.strokeDashoffset = outLineLength

    //Pick different sounds
    sounds.forEach(sound =>{
        sound.addEventListener('click', function(){
        song.src = this.getAttribute('data-sound')
        video.src = this.getAttribute('data-video')
        checkPlaying(song)

        })
    })


    //play sound 
    play.addEventListener("click", () => {
        checkPlaying(song)
    })

    //Select sound 
    timeSelect.forEach(option => {
        option.addEventListener("click", function() {
            fakeDuration = this.getAttribute('data-time')
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:
            ${Math.floor(fakeDuration % 60)}`
        })
    })

//function specific sound to stop and play de sounds

const checkPlaying = song => {
    if (song.pause) {
        song.play()
        video.play()
        play.src = './svg/pause.svg'
    } else {
        song.pause()
        video.pause()
        play.src = './svg/play.svg'
    }
}

// We can Animated the circle 
song.ontimeupdate = () => {
    let currentTime = song.currentTime
    let elapsed = fakeDuration - currentTime
    let seconds = Math.floor(elapsed % 60)
    let minutes = Math.floor(elapsed / 60)

    // Animated the circle 
    let progress = outLineLength - (currentTime / fakeDuration) * outLineLength
    outline.style.strokeDashoffset = progress
    timeDisplay.textContent = `${minutes}:${seconds}`

    if(currentTime >= fakeDuration){
        song.pause()
        song.currentTime = 0
        play.src = './svg/play.svg'
        video.pause()
    }
    }

}

main()