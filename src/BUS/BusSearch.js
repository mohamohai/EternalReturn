import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./BusSearch.css";
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import XMLParser from "react-xml-parser";
import { Physics } from "@react-three/cannon";


// npm install three
// npm install @react-three/fiber
// npm install @react-three/drei

function BusSearch(){
useEffect(()=>{
    getStartDataBus();
},[])
async function getStartDataBus() {
    const API_KEY = process.env.REACT_APP_BUS;
    
    let urlll = `https://apis.data.go.kr/6410000/busrouteservice/getBusRouteList?serviceKey=${API_KEY}&keyword=3-1`;

    const SearchWeather2=(
        await axios.get(urlll)
        .then(response=>response.data)
        .catch(err => {
           console.log(err)
          })
    )

    const dataArr = new XMLParser().parseFromString(SearchWeather2).children;
    dataArr[2].children.map((aa,bb)=>{
        console.log(aa.children)
    })
    console.log(dataArr[2].children[0].children); 
  }




function ThreeBox(){
    return(
        <mesh position={[0,2,0]}>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

function ThreeBoxPlane(){
    return(
        <mesh position={[0,0,0]} rotation={[-Math.PI / 2,0,0]}>
            <planeBufferGeometry attach="geometry" args={[5,5]}/>
            <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
    )
}

    return(
        <div className="CalendarN">
        <Canvas>
            <Stars/>    
            <OrbitControls autoRotate={true}/>
            <ambientLight intensity={0.5} /> 
            <Physics>
                <ThreeBox/>
            </Physics>
            <ThreeBoxPlane/>
            <spotLight position={[10,15,5]} angle={0.2}/>
        </Canvas>
           
        {/* <Canvas>
            <OrbitControls autoRotate={true}/>
            <mesh>
                <ambientLight intensity={2} />
                <directionalLight position={[0,0.5,1]} intensity={1} />
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial attach="material" color={0xa3b18a}/>
            </mesh>
      </Canvas> */}

                
        </div>
    )
}export default BusSearch