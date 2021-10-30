import React from 'react';
import Async from 'react-async';

class Weather extends React.Component {
    constructor(props : any) {
      super(props);
    }
    loadWeather(){
      const cities = [
        'Kiev', 'Dnipro', 'Odesa'
      ]
      const promises = cities.map((city:string) => fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=76d61b890bc6889c08395f813560fc9d"))
      return Promise.all(promises).then(res => res)
      .then(res => {
        let jsons = res.map(r => r.json());
        return Promise.all(jsons);
      });
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
          <div className="container flex justify-center mx-auto">
    <div className="flex flex-col">
        <div className="w-full">
            <div className="border-b border-gray-200 shadow">
                <table>
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                City
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Temp
                            </th>
                            <th className="px-6 py-2 text-xs text-gray-500">
                                Weather
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        <Async promiseFn={this.loadWeather}>
                          {({ data }) => {
                            if (data)
                              return data.map(w => {
                                return (
                                  <tr key={w.name} className="bg-white">
                                    <td className="px-6 py-4 text-sm text-gray-500">{w.name}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{Math.round(w.main.temp - 273)}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{w.weather[0].main}</td>
                                  </tr>
                                )
                              });
                          }}
                        </Async>
                       

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
      </div>    
        );
      }
      
    }
}
export default Weather;