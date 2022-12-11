import { useState, useEffect, useRef, Component } from "react";
import "./Zip.css";
import "./Zip.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb,faGears,faBriefcase,faHeadset,faFurniture,faBook} from "@fortawesome/free-solid-svg-icons";
import { faFileZipper} from "@fortawesome/free-regular-svg-icons";

function Zip(){
  const [CircleNum, setCircleNum]=useState(50);
  const CircleMove = document.getElementsByClassName("FlowCircle");
  const [XY,setXY]=useState({X:0,Y:0});
  const ZipRef = useRef();
  const Zip1Ref = useRef();






   
  const Zip1 = document.getElementsByClassName("Zip1");
  var target = document.getElementById("element");


  const IntroducePack = document.getElementsByClassName("IntroducePack");

  useEffect((e)=>{
    // console.log(window.innerHeight)//브라우저 y값
    // console.log(window.pageYOffset);//휠 위치에 따라서 zip 이 부분 퍼센트 내리기 at 50% 100%
    // console.log(Zip1Ref.current.getBoundingClientRect().height); //요소 크기 잡
        Zip1[0].style.clipPath=`circle(${(120-(window.pageYOffset/12))}% at 50% 100%)`
    if(window.pageYOffset>window.innerHeight){
    }
  })

//   useEffect(()=>{ 이거 키면 살짝 렉걸린다
//     let scrollLocation = document.documentElement.scrollTop; //이게 뭐더라 맨위
//     var pageHeight = window.innerHeight; //모니터
//     var winY = window.pageYOffset; //내위치 scrollY이것도 내 위치 그 기;준이 달라서 그럼 
    

//     const wheelHandler = (e) =>{
//         console.log(window.scrollY)
//         //이벤트리스너
//         if(window.scrollY+300>window.innerHeight*2){
//           IntroducePack[0].classList.add("dududunga")
//           IntroducePack[1].classList.add("dududunga")
//           IntroducePack[2].classList.add("dududunga")
//           IntroducePack[3].classList.add("dududunga")
//           IntroducePack[4].classList.add("dududunga")
          
//         }
//     }
//     const ZipFullCurrent = ZipRef.current;
//     ZipFullCurrent.addEventListener("wheel", wheelHandler);
// },[window.scrollY]);

const Page2Insert = () =>{

  IntroducePack[0].classList.add("dududunga")
  IntroducePack[1].classList.add("dududunga")
  IntroducePack[2].classList.add("dududunga")
  IntroducePack[3].classList.add("dududunga")
  IntroducePack[4].classList.add("dududunga")
  

}
  const handleMouseMove=(e)=>{
    setXY({X:e.clientX -50,Y:e.clientY-50});
  }


    return(
        <div className="Zip" onMouseMove={(e)=>handleMouseMove(e)} ref={ZipRef}>
          <div className="ZipGNB">
            <ul>
            <a href="#Zip_Part1"> <li>가나다</li></a>
            <a href="#Zip_Part2" onClick={()=>console.log("2move")}> <li>Title</li></a>
            <a href="#Zip_Part3"> <li>Body</li></a>
            <a href="#Zip_Part4"> <li>Footer</li></a>
            </ul>
          </div>
          <div id="Zip_Part1" className="Zip1 Page100" ref={Zip1Ref}>
            <div className="FlowBox">
              <div className="FlowSection">
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div> 
                <div className="FlowCircle"   ></div>
              </div>
              <div className="FlowSection2">
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>  
                <div className="FlowCircle"   ></div>
                <div className="FlowCircle"   ></div>
              </div>
            </div>
          </div>        

          
                 
          <div id="Zip_Part2"className="Zip2 Page100" onMouseEnter={()=>Page2Insert()} >
            <div className="Zip2Container">
             
                <div className="IntroducePack">
                  <div className="IntroduceFront IntroBox">
                    <div className="FrontImg1">
                      {/* 이미지 배경으로 div */}
                    </div>
                    <p>EternalReturn이라는 게임에서 제공하는 openAPI를 활용하여 만든 사이트</p>
                    <div>Open API</div>
                  </div>
                  <div className="IntroduceBack IntroBox"><a href="/ER">GOGO</a></div>
                </div>


                <div className="IntroducePack">
                  <div className="IntroduceFront IntroBox">
                    <div className="FrontImg2">
                      {/* 이미지 배경으로 div */}
                    </div>
                    <p>Vhom회사의 사이트 클론코딩</p>
                    <div>+ cssArt</div>
                  </div>
                  <div className="IntroduceBack IntroBox"><a href="/Vhom">GOGO</a></div>
                </div>

                <div className="IntroducePack">
                  <div className="IntroduceFront IntroBox">
                    <div className="FrontImg3">
                      {/* 이미지 배경으로 div */}
                    </div>
                    <p>Stealien회사의 사이트 클론코딩 </p>
                    <div>+ Fortawesome</div>
                  </div>
                  <div className="IntroduceBack IntroBox"><a href="/Stealien">GOGO</a></div>
                </div>

                <div className="IntroducePack">
                  <div className="IntroduceFront IntroBox">
                    <div className="FrontImg4">
                      {/* 이미지 배경으로 div */}
                    </div>
                    <p>404notfound 페이지</p>
                    <div>svg</div>
                  </div>
                  <div className="IntroduceBack IntroBox"><a href="/ohmygod">GOGO</a></div>
                </div>

                <div className="IntroducePack">
                  <div className="IntroduceFront IntroBox">
                    <div className="FrontImg5">
                      {/* 이미지 배경으로 div */}
                    </div>
                    <p>PixelNetwork 회사의 사이트 클론코딩</p>
                    <div>+ Slick Slider</div>
                  </div>
                  <div className="IntroduceBack IntroBox"><a href="/Pixel">Pixel</a></div>
                </div>


            </div>
          </div>




          {/* <div id="Zip_Part3"className="Zip3 Page100">
          <div className="lineT">
            <div className="CloneWeb"></div>
          </div>



          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          <div className="lineT"></div>
          
          </div> */}
       
        
        </div>
    )
} export default Zip;