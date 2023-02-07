import { useState, useEffect, useRef, Component } from "react";
import "./Gallery.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faSun,faMoon } from "@fortawesome/free-solid-svg-icons";
import { faTwitter,faYoutube,faFacebook, } from '@fortawesome/free-brands-svg-icons'



function Gallery(){

    const [xy,setXY]=useState({x:0,y:0});
    const [trnaslateX,setTrnaslateX]=useState(0);

    var winX = window.innerWidth;
    const GalleryViewer = document.getElementsByClassName("GalleryViewer")

    const handleMouseMove=(e)=>{
        console.log()
        setTimeout(()=>{
            setXY({x:e.clientX-10,y:e.clientY-10});
        },100)
    }

    
    const GalleryRef = useRef();

    useEffect(()=>{
        let scrollLocation = document.documentElement.scrollTop;
        var pageHeight = window.innerHeight;
        var winY = window.pageYOffset;



        const wheelHandler = (e) =>{
            e.preventDefault();
            if(e.delta<1){
                console.log("내려")
            }
            setTrnaslateX(trnaslateX+1)
           console.log("wheelact"+trnaslateX);
           changeMove();
        }
        const GalleryCurrent = GalleryRef.current;
        GalleryCurrent.addEventListener("wheel", wheelHandler);
    },[]);

    const changeMove=()=>{
        GalleryViewer[0].style.transform=`translate(${trnaslateX+1}%,0px)`;

    }
    
    return(
        <div className="Gallery"  onMouseMove={(e)=>handleMouseMove(e)} ref={GalleryRef}>
        <div className="GalleryCircle" style={{left:xy.x, top:xy.y}} onMouseMove={()=>handleMouseMove}></div>
            <div className="GalleryViewer">
                <div className="GalleryArticle GalleryPic">a</div>
                <div className="GalleryArticle GalleryOpacity">s</div>
                <div className="GalleryArticle GalleryPic">d</div>
                <div className="GalleryArticle GalleryOpacity">f</div>
            </div>
        </div>
    )
}export default Gallery;