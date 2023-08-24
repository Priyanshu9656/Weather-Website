import React, { useState } from 'react';
import './Afterhome.css'
import axios from 'axios';

const After=()=>{
    const [city,setcity]=useState("");
    const [data,setdata]=useState("");
    const [error,setError]=useState("");

    const f=(event)=>{
        setcity(event.target.value);
    }
    const req = async () => {
        try {
          const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8b38c2ce8d5ebdef336cab1f51886c01`);
          setdata(res.data);
          setError("");
        } catch (error) {
          setError('An error occurred while fetching data. Please try again later.');
        }
        setcity("");
      };
    return(
        <>
          <div className="box">
          <div className="sbox">
          <h1 className="h"> WEATHER WEBSITE</h1>
          <input type="text" placeholder="Enter city" value={city} onChange={f}/>
          <button className="s" onClick={req}> Submit </button>
          <div className="m">
          {
            (error)?(<p>Invalid City</p>):(
            (data)?(
                <p>
                {data.name}
                <br />
                Cloud-cover={
                    data.weather[0].description
                }
                <br/>
                Wind-Speed=
                {data.wind.speed}
                <br />
                Temperature=
                {data.main.temp}
                </p>
                ):(<p>NO data</p>))
          }
          </div>
          </div>
          </div>
        </>
    )
}

export default After;