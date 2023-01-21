import { useState, useEffect, useRef, Component } from "react";
import "./memo.css"
function CircleArt(){
    return(
        <div className="CircleArt">
           <div className="CircleArtF">
                <div className="CircleArtRing"></div>
                <div className="CircleArtRing"></div>
                <div className="CircleArtRing"></div>
                
           </div>
           <div className="CircleArtF">
           <svg width="100%" height="100%" className="ohmygodring">
                <defs>
                    <linearGradient id="grad1" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0.2" stop-color="#f37075"/>
                        <stop offset="0.6" stop-color="#5012b1"/>
                        <stop offset="1" stop-color="#08b351"/>
                    </linearGradient>
                </defs>
                <g fill="none">
                    <circle cx="50%" cy="50%" r="100" stroke="url(#grad1)" stroke-width="1" />
                </g>
            </svg>
            <svg width="100%" height="100%" className="ohmygodring">
                <defs>
                    <linearGradient id="grad1" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0.2" stop-color="#f37075"/>
                        <stop offset="0.6" stop-color="#5012b1"/>
                        <stop offset="1" stop-color="#08b351"/>
                    </linearGradient>
                </defs>
                <g fill="none">
                    <circle cx="50%" cy="50%" r="100" stroke="url(#grad1)" stroke-width="1" />
                </g>
            </svg>
            <svg width="100%" height="100%" className="ohmygodring">
                <defs>
                    <linearGradient id="grad1" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0.2" stop-color="#f37075"/>
                        <stop offset="0.6" stop-color="#5012b1"/>
                        <stop offset="1" stop-color="#08b351"/>
                    </linearGradient>
                </defs>
                <g fill="none">
                    <circle cx="50%" cy="50%" r="100" stroke="url(#grad1)" stroke-width="1" />
                </g>
            </svg>
            </div>

          
        </div>
    )
}export default CircleArt