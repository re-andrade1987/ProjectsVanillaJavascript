window.addEventListener('load', () => {
    let long
    let lat
    let tempatureDescription = document.querySelector('.temperature-description')
    let tempatureDegree = document.querySelector('.temperature-degree')
    let locationTimeZone = document.querySelector('.location-timezone')


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position)
            long = position.coords.longitude
            lat = position.coords.latitude

            const proxy = "https://cors-anywhere.herokuapp.com/"
            const api = `${proxy}https://api.darksky.net/forecast/28b97ad61a4b0d8fbaefe4aa585418bb/${lat},${long}`
            fetch(api)
                .then(response => {
                    return response.json()

                })
                .then(data => {
                    console.log(data)
                    const { temperature, summary } = data.currently
                    tempatureDescription.textContent = temperature
                    tempatureDegree.textContent = summary
                    locationTimeZone.textContent = data.timezone


                })


        })
    }
})