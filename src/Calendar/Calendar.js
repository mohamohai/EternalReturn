import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
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
const [WordT, setWordT]=useState("서울역");

const [pressBtn,setpressBtn]=useState(0);


const [WeatherArr,setWeatherArr] = useState([]);

const iconName = (insertName) =>{
  
    if(insertName =="01d" || insertName =="01n"){
        return(<FontAwesomeIcon icon={faSun} color="white" size="3x" />)
    }else if(insertName =="02d" || insertName =="02n"||insertName =="03d" || insertName =="03n"||insertName =="04d" || insertName =="04n"){
        return(<FontAwesomeIcon icon={faCloud} color="white" size="3x" />)
    }else if(insertName =="02d" || insertName =="02n"||insertName =="03d" || insertName =="03n"){
        return(<FontAwesomeIcon icon={faCloudShowersHeavy} color="white" size="3x" />)
    }else if(insertName =="09d" || insertName =="09n"|| insertName =="10d"|| insertName =="10n"){
        return(<FontAwesomeIcon icon={faBolt} color="white" size="3x" />)
    }else if(insertName =="13d" || insertName =="13n"){
        return(<FontAwesomeIcon icon={faSnowflake} color="white" size="3x" />)
    }else if(insertName =="50d" || insertName =="50n"){
        return(<FontAwesomeIcon icon={faSmog} color="white" size="3x" />)
    }
}
async function getStartData() {                                                                           
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${MyLocation.lat}&lon=${MyLocation.lon}&appid=${API_KEY}&lang=kr&units=metric`
const url4day=`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${MyLocation.lat}&lon=${MyLocation.lon}&appid=${API_KEY}`
const urlllll=`https://api.openweathermap.org/data/2.5/forecast?lat=${MyLocation.lat}&lon=${MyLocation.lon}&appid=${API_KEY}&lang=kr&units=metric`
   
const SearchWeather =(
    await axios.get(url)
    .then(response=>response)
)
const SearchWeather2=(
    await axios.get(urlllll)
    .then(response=>response)
)

    setWeatherArr(SearchWeather2.data.list);

    //     axios.get(url).then((responseData) => {
    //         const data = responseData.data;
    //         console.log(data)
    //   });

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
    }else if(SearchWeather.data.weather[0].icon =="09d" || SearchWeather.data.weather[0].icon =="09n"|| SearchWeather.data.weather[0].icon =="10d"|| SearchWeather.data.weather[0].icon =="10n"){
        setWeatherIcon(faBolt);
    }else if(SearchWeather.data.weather[0].icon =="13d" || SearchWeather.data.weather[0].icon =="13n"){
        setWeatherIcon(faSnowflake);
    }else if(SearchWeather.data.weather[0].icon =="50d" || SearchWeather.data.weather[0].icon =="50n"){
        setWeatherIcon(faSmog);
    }
 }  
    
 useEffect(()=>{
    getStartData();
    mapArr();
    
},[])

useEffect(()=>{//이게 지도 옮길때마다 반응하는 쪽
    getStartData();
    
},[MyLocation.lat])
const mapArr = () => {

    var infowindow = new kakao.maps.InfoWindow({zIndex:1});

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };  
    
    // 지도를 생성합니다    
    var map = new kakao.maps.Map(mapContainer, mapOption); 
    
    // 장소 검색 객체를 생성합니다
    var ps = new kakao.maps.services.Places(); 
    var geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(WordT, function(result, status) {

        // 정상적으로 검색이 완료됐으면 
         if (status === kakao.maps.services.Status.OK) {
    
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
    
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            var infowindow = new kakao.maps.InfoWindow({
                
            });
            infowindow.open(map, marker);
    
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } 
    });
    // 키워드로 장소를 검색합니다
    ps.keywordSearch(WordT, placesSearchCB); 
    
    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
    
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();
            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }       
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        } 
        
    }
    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place) {
        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });
        setMyLocation({lat:place.y, lon: place.x})
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
    }


    kakao.maps.event.addListener(map, 'dragend', function() {        //좌표 얻는 css
        var latlng = map.getCenter(); // 지도 중심좌표를 얻어옵니다 
     
        setMyLocation({lat:latlng.getLat(), lon:latlng.getLng()})
    });
}
useEffect(()=>{
    getStartData();
    mapArr();
},[pressBtn])

    return(
        <div className="CalendarN">
            <div className="mapContainer">
            <div id="map" >
            </div>
            <div className="inputContainer">
                <input type="text"  onChange={(e)=>setWordT(e.target.value)} onKeyPress={(e)=>{if(e.key==='Enter') setpressBtn(pressBtn+1) }}></input>
                <input type="button" value={"찾기"} onClick={()=>setpressBtn(pressBtn+1)}></input>
                <input type="button" value="길찾기" onClick={()=>window.location.href=`	https://map.kakao.com/link/to/${WordT},${MyLocation.lat},${MyLocation.lon}`}></input>
            </div>           
            </div>
          
            <div className="forecastCon">
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

            <div className="Weather5Day">
                {WeatherArr.map((row, index)=>{
                    return (index%8==4? <div className="Weather3Hour">
                        <div>{iconName(row.weather[0].icon)}</div>

                        <div>{row.main.temp}</div>
                        <div>{row.dt_txt.substring(0,10) }</div>

                    </div>:
                    "")
                })}
            </div>
            </div>

          
                
        </div>
    )
}export default Calendar