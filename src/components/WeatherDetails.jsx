import React, { useContext } from "react";
import { Info } from "./Form";
import "./style.css";
import sunny from "../assets/sunny.gif";
import mist from "../assets/mist.png";
import partlyCloudy from "../assets/partly-cloudy.gif";
import partly_cloudy from "../assets/partly_cloudy.gif";
import cloudy from "../assets/cloudy.gif";
import light_rain from "../assets/light-rain.gif";
import heavy_rain from "../assets/heavy-rain.gif";
import heavy_rain_thunder from "../assets/heavy-rain-thunderstorm.gif";
import light_rain_thunderstorm from "../assets/light-rain-thunder.png";
import snow from "../assets/snowy.gif";
import thunder from "../assets/thunder.gif";
import blizzard from "../assets/blizzard.gif";
import fog from "../assets/fog.webp";
import sleet from "../assets/sleet.webp";
import defaultgif from "../assets/default.gif.gif";

export default function WeatherDetails({ data }) {
  let icon = null;
  let f = 0;
  if (data.current.condition.code === 1000) {
    if (data.current.is_day === 1) icon = sunny;
    else {
      f = 1;
      icon = sunny;
    }
  } else if (data.current.condition.code === 1030) {
    icon = mist;
  } else if (data.current.condition.code === 1003) {
    // icon = partlyCloudy;
    icon = partly_cloudy;
  } else if (
    data.current.condition.code === 1006 ||
    data.current.condition.code === 1009 ||
    data.current.condition.code === 1063
  ) {
    icon = cloudy;
  } else if (
    data.current.condition.code === 1183 ||
    data.current.condition.code === 1186 ||
    data.current.condition.code === 1189 ||
    data.current.condition.code === 1240
  ) {
    icon = light_rain;
  } else if (
    data.current.condition.code === 1192 ||
    data.current.condition.code === 1195 ||
    data.current.condition.code === 1243 ||
    data.current.condition.code === 1246
  ) {
    icon = heavy_rain;
  } else if (data.current.condition.code === 1276) {
    icon = heavy_rain_thunder;
  } else if (data.current.condition.code === 1273) {
    icon = light_rain_thunderstorm;
  } else if (
    data.current.condition.code === 1210 ||
    data.current.condition.code === 1213 ||
    data.current.condition.code === 1216 ||
    data.current.condition.code === 1219 ||
    data.current.condition.code === 1222 ||
    data.current.condition.code === 1225 ||
    data.current.condition.code === 1237 ||
    data.current.condition.code === 1114
  ) {
    icon = snow;
  } else if (data.current.condition.code === 1087) {
    icon = thunder;
  } else if (data.current.condition.code === 1117) {
    icon = blizzard;
  } else if (data.current.condition.code === 1135) {
    icon = fog;
  } else if (
    data.current.condition.code === 1069 ||
    data.current.condition.code === 1204 ||
    data.current.condition.code === 1207 ||
    data.current.condition.code === 1249 ||
    data.current.condition.code === 1252
  ) {
    icon = sleet;
  } else {
    icon = defaultgif;
  }
  // icon = defaultgif;
  return (
    <div>
      <div className="city">{data.location.name}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
          fontWeight: "bold",
          color: "red",
          fontFamily: "Merienda",
        }}
      >
        {data.location.country}
      </div>
      <div className="details">
        <div>
          <p className="status">{data.current.condition.text}</p>
          {f===0 ? (
            <img
              src={icon}
              alt="image"
              style={{ height: "150px", width: "150px", marginLeft: "50px" }}
            />
          ) : (
            <img
              src={icon}
              alt="image"
              style={{ height: "150px", width: "150px", marginLeft: "50px", visibility:"hidden" }}
            />
          )}
        </div>
        <div className="data">
          <p className="data-title">Temp</p>
          <p className="data-details">{Math.floor(data.current.temp_c)}°C</p>
        </div>
        <div className="data">
          <p className="data-title">Feels Like</p>
          <p className="data-details">
            {Math.floor(data.current.feelslike_c)}°C
          </p>
        </div>
        <div className="data">
          <p className="data-title">Humidity</p>
          <p className="data-details">{data.current.humidity}%</p>
        </div>
        <div className="data">
          <p className="data-title">Visibility</p>
          <p className="data-details">{data.current.vis_km} km</p>
        </div>
        <div className="data">
          <p className="data-title">{data.current.wind_dir} Wind</p>
          <p className="data-details">{data.current.wind_kph} km/h</p>
        </div>
        <div className="data">
          <p className="data-title">Air pressure</p>
          <p className="data-details">{data.current.pressure_mb} hPa</p>
        </div>
        <div className="data">
          <p className="data-title">UV Index</p>
          <p className="data-details">{data.current.uv}</p>
        </div>
      </div>
      {/* <div className="extra">
        <p style={{ margin: "0px" }}>UV Index</p>
        <p style={{ margin: "0px", fontSize: "25px", fontWeight: "bold" }}>
          {data.current.uv}
        </p>
      </div> */}
    </div>
  );
}
