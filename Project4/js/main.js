// Get dom elements

const time = document.getElementById('time')
greeting = document.getElementById('greeting')
name = document.getElementById('name')
focus = document.getElementById('focus')

// Show time

showTime = () => {
    let today = new Date()
    hour = today.getHours()
    min = today.getMinutes()
    seconds = today.getSeconds()

    // Set AM or PM 
    const amPm = hour >= 12 ? 'PM' : 'AM'

    // 12hr Format
    hour = hour % 12 || 12

    // Output Time
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)}<span>:</span>${amPm}`

    setTimeout(showTime, 1000)
}

addZero = (n) =>{
    return (Number(n, 10) < 10 ? '0' : '') + n
}

showTime()

// Set background e Greeting

setBgGreet = () => {
    let today = new Date()
    hour = today.getHours()

    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('./img/morning.jpg')"
        greeting.textContent = 'Good Morning'


    } else if (hour > 12) {
        // afternoon
        document.body.style.backgroundImage = "url('./img/tree.jpg')"
        greeting.textContent = 'Good Afternoon'

    } else {
        // Evening
        document.body.style.backgroundImage = "url('./img/night.jpg')"
        greeting.textContent = 'Good Evening'

    }
}
setBgGreet()

// Get Name 
getName = () => {
    if(localStorage.getItem('name') === null ){
        name.textContent = '[Enter Name]'
    }else{
        name.textContent = localStorage.getItem('name')
    }
}

getName()