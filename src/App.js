// import logo from './logo.svg';
import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import './App.css';
import axios from 'axios'
function App() {

  const[temp,setTemp]=useState(0);
  const[humidity,setHumidity]=useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [winSpeed, setWinSpeed] = useState(0);


  const[cityText,setCityText]=useState("")

  async function fetchWeather(){

    console.log('fetch weather of ' + cityText)
    // https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ceb190ec7d2e7450b4d24a84d9e057e
// https://api.openweathermap.org/data/2.5/weather?q=asansol&appid=477b0577b454816f45f8516126ea4bb8
    try {
      let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=477b0577b454816f45f8516126ea4bb8`)
      console.log(response)
      // console.log(response.data.main.humidity);
      // console.log(response.data.main.temp);
      setTemp(response.data.main.temp)
      setHumidity(response.data.main.humidity)
      setLatitude(response.data.coord.lat)
      setLongitude(response.data.coord.lon)
      setWinSpeed(response.data.wind.speed)
    } catch (error) {
      console.log(error);
    }


  }


  return (
    <div className="App">
      <div>
      <h1>Weather App</h1>
        <input value={cityText} onChange={(e)=>{setCityText(e.target.value)}} className='form-control' type="text" placeholder='Enter City'/>
        <button onClick={fetchWeather} style={{ marginTop: "10px" }} className='btn btn-outline-primary'>Search Weather</button>
        {/* This Button for react bootstap we have to import react bootstrap from button */}
        {/* <Button>Search Weather</Button> */}
      </div>

      <div className='box'>
        <h3>Temp : {temp} F</h3>
        <h3>Humidity : {humidity}%</h3>
        <h3>Latitude : {latitude}</h3>
        <h3>Longitude : {longitude}</h3>
        <h3>Wind Speed : {winSpeed}</h3>

      </div>
    </div>
  );
}

export default App;
