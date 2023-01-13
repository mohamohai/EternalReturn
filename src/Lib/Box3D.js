import { useState, useEffect, useRef, Component } from "react";
import "./memo.css"
function Box3D(){
    return(
        <div className="Box3D">
           <div className="Box3DZip">
            <div className="Box3DFront">첫번째</div>
            <div className="Box3DFront">두번째</div>
            <div className="Box3DFront">세번째</div>
           </div>
        </div>
    )
}export default Box3D