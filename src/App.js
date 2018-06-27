import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";


const API_KEY = "787c4e4d6999260131fe9c49caf97752";

class App extends React.Component {
  async getWeather(e) {
    e.preventDefault();
    const city = e.target.element.name.city.value;
    const country = e.target.element.name.country.value;

    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await apiCall.json();
    console.log(data);
  }

  render() {
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
};

export default App;
