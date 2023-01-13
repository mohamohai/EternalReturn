import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "./BusSearch.css";
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import XMLParser from "react-xml-parser";
import { Physics, useBox,usePlane } from "@react-three/cannon/dist";




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




function ThreeBox(props){
    const [ref,api] = useBox(() => ({mass:1, position:[0,2,0]}))
    return(
        <mesh onClick={()=>{
            api.velocity.set(+1,2,0);
        }} ref={ref} position={[0,2,0]}>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

function ThreeBox2(props){
    const [ref,api] = useBox(() => ({mass:1, position:[2,2,0]}))
    return(
        <mesh onClick={()=>{
            api.velocity.set(-1,2,0);
        }} ref={ref} position={[2,2,0]}>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

function ThreeBoxPlane(props){
    const [ref] = usePlane(()=>({
        rotation: [-Math.PI/2,0,0],
    }))
    return(
        <mesh rotation= {[-Math.PI / 2,0,0]}>
            <planeBufferGeometry attach="geometry" args={[100,100]}/>
            <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
    )
}
function ThreeBoxPlane2(props){
    const [ref] = usePlane(()=>({
        rotation: [0,0,0],
        position: [0,2,1]
    }))
    return(
        <mesh rotation= {[0,0,0]} position={[0,2,1]}>
            <planeBufferGeometry attach="geometry" args={[50,50]}/>
            <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
    )
}

    return(
        <div className="CalendarN"  onKeyPress={(e)=>{if(e.key==='Enter') console.log("yoyo") }}>
        <Canvas>
            <Stars/>    
            <OrbitControls autoRotate={false}/>
            <ambientLight intensity={0.5} /> 
            <Physics>
                <ThreeBox/>
                <ThreeBox2/>
                <ThreeBoxPlane/>
            </Physics>
           
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