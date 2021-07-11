let request = require('postman-request');

let fetchWeather = (address,callback)=>{

    let access_key = "2fc1b499b5bbaf3d8eb95ccc644fe778";
    let query = address;

    let url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`;
    request({url:url,json:true},(err,res)=>{
        let data={
            query: res.body.request.query,
            temperature: res.body.current.temperature,
            wind: res.body.current.wind_speed,
            pressure: res.body.current.pressure,
            humidity: res.body.current.humidity,
            weather: res.body.current.weather_descriptions
        }
        callback(err,data);
    })
}
module.exports = {
    fetchWeather
}