import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import WeatherDetails from "./WeatherDetails";
import "./style.css";
import { BiSearchAlt } from "react-icons/bi";

export const Info = createContext();
export default function Form() {
  const api_key = "6f7f54260241bac7396c2f2a6a5bc81f";
  const apiKey = "d652b59465ba4678bdd151433232008";
  const [place, setPlace] = useState("chandannagar");
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${place}&callback=test&appid=${api_key}`
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=no`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => alert("Please enter valid location"));
  }, []);

  const handlePlace = (event) => {
    setPlace(event.target.value);
  };

  const handleSubmit = async () => {
    console.log(place);
    await axios
      .get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${place}&callback=test&appid=${api_key}`
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=no`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => alert("Please enter valid location"));
  };

  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://api.openweathermap.org/data/2.5/weather?q=${place}&callback=test&appid=${api_key}`
  //         // `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=no`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   }, [place]);

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter location"
          onChange={handlePlace}
          style={{
            borderRadius: "30px",
            width: "350px",
            height: "50px",
            fontSize: "25px",
            paddingLeft: "25px",
          }}
        />
        <button
          style={{ borderRadius: "30px", marginLeft: "4px" }}
          type="submit"
          onClick={handleSubmit}
        >
          <BiSearchAlt style={{ width: "40px", height: "45px" }} />
        </button>
      </div>
      {console.log("hi " + data.length + " " + data.current)}
      {data.current !== undefined ? (
        data.current.is_day === 1 ? (
          <div className="weather-day">
            {data.current === undefined ? (
              <p>Enter location</p>
            ) : (
              <div className="weather-details">
                <WeatherDetails data={data} />
              </div>
            )}
          </div>
        ) : (
          <div className="weather-night">
            {data.current === undefined ? (
              <p>Enter location</p>
            ) : (
              <div className="weather-details">
                <WeatherDetails data={data} />
              </div>
            )}
          </div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}
