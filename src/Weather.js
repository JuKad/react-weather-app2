import React from "react";
import axios from "axios";
import WeatherIcon from 'react-icons-weather';
import Loader from "react-loader-spinner";


export default function Weather(props){

    function showTemperature(response){
    alert (`The weather in ${response.data.name} is ${response.data.main.temp}°C.`)
    }

    let apiKey = "63c0356d5ea58f413b8af4b34fb11290";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    


   
    return (
        <div>
        <Loader type="Rings" color="#00BFFF" height={100} width={100} />
        <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
        </div>
    );

}