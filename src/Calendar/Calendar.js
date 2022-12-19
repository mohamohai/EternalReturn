import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faWater } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { faSnowflake } from "@fortawesome/free-regular-svg-icons";
import { faSmog } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

import { faTemperature1 } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_WEATHER;
const {kakao} = window;

function Calendar(){
const [MyLocation,setMyLocation]=useState({lat:37.55492015596435,lon:126.97000927150914})
const [WeatherTemp, setWeatherTemp]=useState({temp:0,min:0,max:0,like:0})
const [WeatherType, setWeatherType]=useState({main:"기본",description:"기본",id:0,name:"기본",pic:""})
const [WeatherSys, setWeatherSys]=useState({country:"KR", sunrise:0, sunset:0})
const [WeatherEnv, setWeatherEnv]=useState({humidity:0, wind:0})
const [WeatherIcon, setWeatherIcon]=useState("faSun");
 async function getStartData() {                                                                           
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${MyLocation.lat}&lon=${MyLocation.lon}&appid=${API_KEY}&lang=kr&units=metric`
    const SearchWeather =(
        await axios.get(url)
        .then(response=>response)
        )
    //     axios.get(url).then((responseData) => {
    //         const data = responseData.data;
    //         console.log(data)
    //   });
    console.log(SearchWeather)
         setWeatherTemp({temp:SearchWeather.data.main.temp
                        ,min:SearchWeather.data.main.temp_min
                        ,max:SearchWeather.data.main.temp_max
                        ,like:SearchWeather.data.main.feels_like})
        setWeatherType({main:SearchWeather.data.weather[0].main,
                        description:SearchWeather.data.weather[0].description,
                        id:SearchWeather.data.weather[0].id,
                        name:SearchWeather.data.name,
                        pic:SearchWeather.data.weather[0].icon})
        setWeatherSys({
                        country:SearchWeather.data.sys.country,
                        sunrise:SearchWeather.data.sys.sunrise,
                        sunset:SearchWeather.data.sys.sunset})
                        console.log(SearchWeather.data.weather[0].icon)
        setWeatherEnv({
                        humidity:SearchWeather.data.main.humidity,
                        wind:SearchWeather.data.wind.speed
        })
            if(SearchWeather.data.weather[0].icon =="01d" || SearchWeather.data.weather[0].icon =="01n"){
                setWeatherIcon(faSun);
            }else if(SearchWeather.data.weather[0].icon =="02d" || SearchWeather.data.weather[0].icon =="02n"||SearchWeather.data.weather[0].icon =="03d" || SearchWeather.data.weather[0].icon =="03n"||SearchWeather.data.weather[0].icon =="04d" || SearchWeather.data.weather[0].icon =="04n"){
                setWeatherIcon(faCloud);
            }else if(SearchWeather.data.weather[0].icon =="02d" || SearchWeather.data.weather[0].icon =="02n"||SearchWeather.data.weather[0].icon =="03d" || SearchWeather.data.weather[0].icon =="03n"){
                setWeatherIcon(faCloudShowersHeavy);
            }else if(SearchWeather.data.weather[0].icon =="01d" || SearchWeather.data.weather[0].icon =="01n"){
                setWeatherIcon(faBolt);
            }else if(SearchWeather.data.weather[0].icon =="01d" || SearchWeather.data.weather[0].icon =="01n"){
                setWeatherIcon(faSnowflake);
            }else if(SearchWeather.data.weather[0].icon =="01d" || SearchWeather.data.weather[0].icon =="01n"){
                setWeatherIcon(faSmog);
            }
 }  
    
 useEffect(()=>{
    getStartData();

    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스\
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(MyLocation.lat, MyLocation.lon), //지도의 중심좌표.
        level: 6 //지도의 레벨(확대, 축소 정도)
    };
    
    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var zoomControl = new kakao.maps.ZoomControl();

    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    kakao.maps.event.addListener(map, 'dragend', function() {        //좌표 얻는 css
        var latlng = map.getCenter(); // 지도 중심좌표를 얻어옵니다 
     
        setMyLocation({lat:latlng.getLat(), lon:latlng.getLng()})
    });
},[])

useEffect(()=>{//이게 지도 옮길때마다 반응하는 쪽
    getStartData();
},[MyLocation.lat])

    return(
        <div className="CalendarN">
          
            <div id="map" style={{
                width:"500px",
                height:"500px"
            }}>
            </div>
            
            <p id="result" ></p>
           
            <div className="Weather">
                <div className="WeatherTop">
                    <div className="WeatherTopLeft">
                    <FontAwesomeIcon icon={WeatherIcon} color="white" size="5x" />
                     </div>
                    <div className="WeatherTopRight">
                        <div> {WeatherTemp.temp} ℃</div>
                        <div> {WeatherType.description}</div>
                        <div>{WeatherSys.country}, {WeatherType.name} </div>
                    </div>
                </div>
                <div className="WeatherBot">
                    <div>
                        <FontAwesomeIcon icon={faDroplet} color="white" size="2x" /><br></br>
                        {WeatherEnv.humidity}
                    </div>
                    <div>
                    <FontAwesomeIcon icon={faWind} color="white" size="2x" /><br></br>
                        {WeatherEnv.wind}
                    </div>
                </div>
            </div>
        </div>
    )
}export default Calendar