const weatherForm = document.querySelector('.form')

const search = document.querySelector('#location')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;

    let url = `http://localhost:3000/weather?address=${location}`;

    fetch(url).then((response) => {
       response.json().then(res=>{
           console.log(res)
           if(!res.err==null)
                displayError(res.err);
            else
                displayWeather(res.data);
       })
    })
});

let displayWeather = (data)=>{
    let fetch_msg = document.querySelector('.fetch-error');
    fetch_msg.innerText = "";

    let fetched_data = document.querySelector('.fetched-data');
    fetched_data.style.display = "block";

    let location = document.querySelector('.location');
    location.innerText = data.query;
    
    let temperature = document.querySelector('.temperature');
    temperature.innerText = data.temperature;
    
    let weather = document.querySelector('.weather');
    weather.innerText = data.weather;
    
    let wind_speed = document.querySelector('.wind');
    wind_speed.innerText = data.wind;

    let pressure = document.querySelector('.pressure');
    pressure.innerText = data.pressure

    let humidity = document.querySelector('.humidity');
    humidity.innerText =  data.humidity
}