const main = () =>{
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.movie-outline circle')
    const video = document.querySelector('.video-container video')

    // Sounds
    const sounds = document.querySelectorAll('.sound-picker button')
    // Time display
    const timeDisplay = document.querySelector('.time-display')

    const outLineLength = outline.getTotalLength()
    console.log(outLineLength)

    //Duration
    let fakeDuration = 600

    outline.style.strokeDasharray = outLineLength
    outline.style.strokeDashoffset = outLineLength

    //play sound 
    play.addEventListener("click", () =>{
        song.play()
    })








}

main()