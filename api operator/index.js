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
            <p> Atmosphric pressure in inches is: ${data.data.current.pressure_in}</p>
            <p> Atmosphric pressure in millibar is: ${data.data.current.pressure_mb}</p> 
            <p> Precipitation in inches is: ${data.data.current.precip_in}</p>
            <p> Precipitation in millimeters is: ${data.data.current.precip_mm}</p>
            <p> Relative Humidity  is: ${data.data.current.humidity}</p>
            <p> Dew point temprature in celcius  is: ${data.data.current.dewpoint_c}</p>
            <p> Dew point tempurature in Fahrenheit is: ${data.data.current.dewpoint_f}</p>
            <p> Feels like temprature in celcius is: ${data.data.current.feelslike_c}</p>
            <p> Feels like temprature in fahrenhiet is: ${data.data.current.feelslike_f}</p>
            <p> day or night is : ${data.data.current.is_day}</p>
            <p> wind gust speed in hour is: ${data.data.current.gust_kph}</p>
            <p> wind gust speed in miles is: ${data.data.current.gust_mph}</p>
            <p>  Heat index in celcius is: ${data.data.current.heatindex_c}</p>
            <p>  Heat index in farenheit is: ${data.data.current.heatindex_f}</p>
            <p> last updated time readabel format is: ${data.data.current.last_updated}</p>
            <p> last updated  epoch time is: ${data.data.current.last_updated_epoch}</p>
            <p>  Vibility in kilometer is: ${data.data.current.vis_kim}</p>
            <p>  visibilty in meter is: ${data.data.current.vis_miles}</p>
            <p>  wind direction in degree is: ${data.data.current.wind_degree}</p>
            <p>  wind   direction compass form is: ${data.data.current.wind_dir}</p>
            <p>  wind speed kilometer per hour is: ${data.data.current.wind_kph}</p>
            <p>  wind speed miles per hour is : ${data.data.current.wind_mph}</p>
            <p>   wind chill celcius is :${data.data.current.windchill_c}</p>
            <p>   wind chill fahrenheit is: ${data.data.current.windchill_f}</p>
         `
        })

        .catch((error) => {
            console.log("catch")
            console.log(error)
        })
}