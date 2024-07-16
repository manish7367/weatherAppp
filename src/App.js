import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {


  const [data, setdata] = useState({})
  const [city, setcity] = useState('')


  const apiKey = "31770f209861fd4978e4e82f0197b7eb"


  const getWeatherDetails = (cityName) => {
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiUrl).then((res) => {
      console.log("response", res.data)
      setdata((res.data))
    }).catch((err) => {
      console.log("err", err)
    })
  }

  useEffect(() => {
    getWeatherDetails('Delhi')
  }, [])


  const handlechange = (e) => {
    setcity(e.target.value)
  }
  const cityChange = () => {
    getWeatherDetails(city)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='Main'>
          <h1>
            Weather
          </h1>


          <input type='text' Value={city} className='textField' onChange={handlechange} />


          <button onClick={cityChange}>Submit</button>

          <div className='weatherCity'>
            <h2>{data?.name}
            </h2>

          </div>
          <div className='weatherTemp'><h3>{data?.main?.temp}+'F'</h3></div>
        </div>

      </header>
    </div>
  );
}

export default App;
