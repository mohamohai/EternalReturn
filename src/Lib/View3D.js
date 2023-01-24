import { useState, useEffect, useRef, Component } from "react";
import "./memo.css"
import "./memo.scss"
function View3D(){
    return(
        <div className="View3D">
            <div className="View3DFrame">
                <div className="View3DBorder"></div>
                <div className="View3DText">
                    <p>skeleton loading을 찾던 중 개인 블로그에서 본 디자인 <br></br>
                    https://seons-dev.tistory.com/entry/Skeleton-Loading-JS</p>
                </div>
            </div>
        </div>
    )
}export default View3D