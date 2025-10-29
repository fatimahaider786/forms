const weatherRes = new Promise((resolve, reject) => {
    if (5 == 5) {
        resolve()
    } else {
        reject()
    }
})
console.log(weatherRes)

function getweather() {
    const inputRef = document.querySelector("#cityName")
    const cityName = inputRef.value
    const res = axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`)

    res
        .then((data) => {
            const weather = data.data.current.temp_c
            const divRef = document.querySelector("#weather")
            divRef.innerHTML = ` <h2>Weather information</h2>
           <p> Temprature is: ${weather}</p>
           <p> Fahrenheit is: ${data.data.current.temp_f}</p>
         `
        })

        .catch((error) => {
            console.log("catch")
            console.log(error)
        })
}