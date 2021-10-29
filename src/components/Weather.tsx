import React from 'react';


class Weather extends React.Component {
    constructor(props : any) {
      super(props);
    }
    submit(e : any){
      e.preventDefault();
      fetch("https://api.openweathermap.org/data/2.5/weather?q="+e.target[0].value+"&appid=76d61b890bc6889c08395f813560fc9d")
      .then(res => res.json())
      .then(
        (result) => {
          if(!result.main) return alert("Error!");
          let temp = Math.round(result.main.temp - 273);
          let weather = result.weather[0].main;
          alert("Temp: "+temp+"\nWeather: "+weather);
        },
        (error) => {
          console.log(error);
        }
      )
    }
    render() {
      if(!localStorage.getItem('email')){
        window.location.href="/login";
      } else {
        return (
          <div className="flex flex-col items-center justify-center w-screen mt-40  ">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="/" onSubmit={this.submit}>
              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                  City
                  </label>
                  <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City" />
              </div>
  
              <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Get weather
                  </button>
              </div>
              
          </form>
      </div>    
        );
      }
      
    }
}
export default Weather;