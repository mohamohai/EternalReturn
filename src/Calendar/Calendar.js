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
const [WordT, setWordT]=useState("서울역");

const [pressBtn,setpressBtn]=useState(0);

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
},[])

useEffect(()=>{//이게 지도 옮길때마다 반응하는 쪽
    getStartData();
    
},[MyLocation.lat])

useEffect(()=>{
    console.log("왜")
    getStartData();

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
        console.log(latlng.getLat(),latlng.getLng())
    });
},[pressBtn])

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
                <input type="text"  onChange={(e)=>setWordT(e.target.value)}></input>

                <input type="button" value={"찾기"} onClick={()=>setpressBtn(pressBtn+1)}></input>
            <input type="button" value="길찾기" onClick={()=>window.location.href=`	https://map.kakao.com/link/to/${WordT},${MyLocation.lat},${MyLocation.lon}`}></input>
                        
                 
        </div>
    )
}export default Calendar