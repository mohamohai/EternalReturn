import { useState, useEffect, useRef, Component } from "react";
import Aos from "aos";
import './E1.css'
import E1GNB from './E1GNB.js'
import E1PageOne from "./E1PageOne";
function E1(){
    const E1FirstBox = document.getElementsByClassName("E1FirstBox");
    const E1SecBox = document.getElementsByClassName("E1SecBox");
    const E1Ref = useRef();
    const [SliderCnt,SetSliderCnt] = useState(0)

    
    const SliderContainer = document.getElementsByClassName("SliderContainer");
    const E1E1ContentSliderOneTitleLine = document.getElementsByClassName("E1E1ContentSliderOneTitleLine");
    const E1ContentSliderOneProgress = document.getElementsByClassName("E1ContentSliderOneProgressa");
    


    const MoveTopBox = () =>{
        E1FirstBox[0].style.transform= `translateY(${-window.innerHeight}px)`
        E1SecBox[0].style.opacity=  "1"
    }
    const MoveTopBoxReturn = () =>{
        E1FirstBox[0].style.transform= `translateY(0px)`;
        E1SecBox[0].style.opacity= "0"
    }
   
    useEffect(()=>{
        SliderContainer[0].style.transform=` translateX(${SliderCnt*-310}px)`;
        E1E1ContentSliderOneTitleLine[0].style.transform=`translateY(${SliderCnt*1.5}rem)`;
        E1ContentSliderOneProgress[0].style.width=`${(SliderCnt+1)*30}px`
    },[SliderCnt])
    useEffect(()=>{ 
        Aos.init({
            duration : 500
        });
        
        const wheelHandler = (e) =>{
        let scrollLocation = document.documentElement.scrollTop; //이게 뭐더라 맨위
        var pageHeight = window.innerHeight; //모니터
        var winY = window.pageYOffset; //내위치 scrollY이것도 내 위치 그 기;준이 달라서 그럼 
             if(window.scrollY>=100){
                MoveTopBox()
            }if(window.scrollY<100){
                MoveTopBoxReturn()
            }
        }
        const E1Current = E1Ref.current;
        E1Current.addEventListener("wheel", wheelHandler);
    });

    return(
        <div className="E1Full" ref={E1Ref}>
            <E1GNB></E1GNB>
                <div className="E1FirstBox" >
                    <p>ENERGY LEADER <br></br>
                    LIFE PARTNER</p>
                </div>
                <div className="E1SecBox" >
                    <p>ENERGY LEADER <br></br>
                     LIFE PARTNER</p>
                </div>
            <div className="E1VideoContainer">
                <video className="E1Video" muted autoPlay loop>
                    <source src="/video/E1.mp4" type="video/mp4" />
                </video>
            </div>
            <E1PageOne></E1PageOne>
            <div className="E1PageTwo">
                <div className="E1ContentContainerHead">
                    <p data-aos="fade-up">Relation</p>
                    <p data-aos="fade-up">지속 가능한 미래를 열어가는 친환경 에너지 기업 E1의 다양한<br></br>소식을 만나보세요</p>
                </div>
                <div className="E1ContentSliderOne"  data-aos="fade-up">
                    <div className="E1ContentSliderOneFream2">
                        <div className="E1E1ContentSliderOneEx2">
                            <div className="SliderContainer2">
                                <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">희망충전 봉사단 임직원 <br></br>봉사활동 재개</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">과천충전소에 '티티'만나러오세요.. 캐릭터 테마 충전소 운영</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    [㈜E1=2022.11.25] E1이 경기도 과천 소재 복합충전소(LPG, 수소, 전기)를 캐릭터 티티 테마충전소로 새롭게 단장하고 다양한 이벤트를 진행한다고 25일 밝혔다. 티티는 E1의 브랜드 캐릭터로 친환경 에너지 요정의 의미를 담고 있다.E1은 과천 복합충전소를 친환경 컨셉의 티티 벽화와 인형으로 새롭게 단장하고, 우산, 담요 등 다양한 티티 굿즈를 구매할 수 있는 홍보 부스를 운영한다. 또한 충전소 내 티티 카페를 운영하여 오렌지카드 회원 및 충전소 이용 고객에게 무료 음료를 제공한다. 티티 카페는 오는 26일부터 12월 17일까지 4주간 주말마다 오전 11시부터 오후 4시까지 운영된다.E1은 테마충전소 오픈을 기념하여 E1 멤버십인 오렌지카드 회원을 대상으로 다양한 이벤트도 진행한다. 테마충전소 곳곳에 숨어있는 티티와 인증 사진을 찍고 SNS에 공유하면 최대 21만 오렌지포인트가 제공되며, 충전소 방문 후기를 남기면 최대 50만 오렌지포인트와 영화 티켓 혜택도 주어진다. 테마충전소 이름 짓기 이벤트도 진행되는데, 1등에게는 50만 오렌지포인트가 증정된다. 이벤트는 11월 25일부터 오렌지카드 홈페이지 및 App에서 응모할 수 있다.E1 관계자는 “E1의 브랜드 캐릭터 티티가 고객들에게 조금 더 가까이 다가갈 수 있도록 테마충전소를 기획했다”며, “앞으로도 고객들이 더욱 편리하고 즐겁게 충전소를 이용할 수 있도록 지속 노력할 것”이라고 전했다.
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">희망충전 봉사단 임직원 <br></br>봉사활동 재개</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">과천충전소에 '티티'만나러오세요.. 캐릭터 테마 충전소 운영</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    [㈜E1=2022.11.25] E1이 경기도 과천 소재 복합충전소(LPG, 수소, 전기)를 캐릭터 티티 테마충전소로 새롭게 단장하고 다양한 이벤트를 진행한다고 25일 밝혔다. 티티는 E1의 브랜드 캐릭터로 친환경 에너지 요정의 의미를 담고 있다.E1은 과천 복합충전소를 친환경 컨셉의 티티 벽화와 인형으로 새롭게 단장하고, 우산, 담요 등 다양한 티티 굿즈를 구매할 수 있는 홍보 부스를 운영한다. 또한 충전소 내 티티 카페를 운영하여 오렌지카드 회원 및 충전소 이용 고객에게 무료 음료를 제공한다. 티티 카페는 오는 26일부터 12월 17일까지 4주간 주말마다 오전 11시부터 오후 4시까지 운영된다.E1은 테마충전소 오픈을 기념하여 E1 멤버십인 오렌지카드 회원을 대상으로 다양한 이벤트도 진행한다. 테마충전소 곳곳에 숨어있는 티티와 인증 사진을 찍고 SNS에 공유하면 최대 21만 오렌지포인트가 제공되며, 충전소 방문 후기를 남기면 최대 50만 오렌지포인트와 영화 티켓 혜택도 주어진다. 테마충전소 이름 짓기 이벤트도 진행되는데, 1등에게는 50만 오렌지포인트가 증정된다. 이벤트는 11월 25일부터 오렌지카드 홈페이지 및 App에서 응모할 수 있다.E1 관계자는 “E1의 브랜드 캐릭터 티티가 고객들에게 조금 더 가까이 다가갈 수 있도록 테마충전소를 기획했다”며, “앞으로도 고객들이 더욱 편리하고 즐겁게 충전소를 이용할 수 있도록 지속 노력할 것”이라고 전했다.
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">희망충전 봉사단 임직원 <br></br>봉사활동 재개</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">과천충전소에 '티티'만나러오세요.. 캐릭터 테마 충전소 운영</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    [㈜E1=2022.11.25] E1이 경기도 과천 소재 복합충전소(LPG, 수소, 전기)를 캐릭터 티티 테마충전소로 새롭게 단장하고 다양한 이벤트를 진행한다고 25일 밝혔다. 티티는 E1의 브랜드 캐릭터로 친환경 에너지 요정의 의미를 담고 있다.E1은 과천 복합충전소를 친환경 컨셉의 티티 벽화와 인형으로 새롭게 단장하고, 우산, 담요 등 다양한 티티 굿즈를 구매할 수 있는 홍보 부스를 운영한다. 또한 충전소 내 티티 카페를 운영하여 오렌지카드 회원 및 충전소 이용 고객에게 무료 음료를 제공한다. 티티 카페는 오는 26일부터 12월 17일까지 4주간 주말마다 오전 11시부터 오후 4시까지 운영된다.E1은 테마충전소 오픈을 기념하여 E1 멤버십인 오렌지카드 회원을 대상으로 다양한 이벤트도 진행한다. 테마충전소 곳곳에 숨어있는 티티와 인증 사진을 찍고 SNS에 공유하면 최대 21만 오렌지포인트가 제공되며, 충전소 방문 후기를 남기면 최대 50만 오렌지포인트와 영화 티켓 혜택도 주어진다. 테마충전소 이름 짓기 이벤트도 진행되는데, 1등에게는 50만 오렌지포인트가 증정된다. 이벤트는 11월 25일부터 오렌지카드 홈페이지 및 App에서 응모할 수 있다.E1 관계자는 “E1의 브랜드 캐릭터 티티가 고객들에게 조금 더 가까이 다가갈 수 있도록 테마충전소를 기획했다”며, “앞으로도 고객들이 더욱 편리하고 즐겁게 충전소를 이용할 수 있도록 지속 노력할 것”이라고 전했다.
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentTitle">희망충전 봉사단 임직원 <br></br>봉사활동 재개</p>
                                    <p className="ContentImg">
                                        <img src="./image/E1/Slider1.png"/>
                                    </p>
                                </div>
                                <div>
                                    <p className="ContentTitle">과천충전소에 '티티'만나러오세요.. 캐릭터 테마 충전소 운영</p>
                                    <p className="ContentData">2022.12.13</p>
                                    <p className="ContentCon">
                                    [㈜E1=2022.11.25] E1이 경기도 과천 소재 복합충전소(LPG, 수소, 전기)를 캐릭터 티티 테마충전소로 새롭게 단장하고 다양한 이벤트를 진행한다고 25일 밝혔다. 티티는 E1의 브랜드 캐릭터로 친환경 에너지 요정의 의미를 담고 있다.E1은 과천 복합충전소를 친환경 컨셉의 티티 벽화와 인형으로 새롭게 단장하고, 우산, 담요 등 다양한 티티 굿즈를 구매할 수 있는 홍보 부스를 운영한다. 또한 충전소 내 티티 카페를 운영하여 오렌지카드 회원 및 충전소 이용 고객에게 무료 음료를 제공한다. 티티 카페는 오는 26일부터 12월 17일까지 4주간 주말마다 오전 11시부터 오후 4시까지 운영된다.E1은 테마충전소 오픈을 기념하여 E1 멤버십인 오렌지카드 회원을 대상으로 다양한 이벤트도 진행한다. 테마충전소 곳곳에 숨어있는 티티와 인증 사진을 찍고 SNS에 공유하면 최대 21만 오렌지포인트가 제공되며, 충전소 방문 후기를 남기면 최대 50만 오렌지포인트와 영화 티켓 혜택도 주어진다. 테마충전소 이름 짓기 이벤트도 진행되는데, 1등에게는 50만 오렌지포인트가 증정된다. 이벤트는 11월 25일부터 오렌지카드 홈페이지 및 App에서 응모할 수 있다.E1 관계자는 “E1의 브랜드 캐릭터 티티가 고객들에게 조금 더 가까이 다가갈 수 있도록 테마충전소를 기획했다”며, “앞으로도 고객들이 더욱 편리하고 즐겁게 충전소를 이용할 수 있도록 지속 노력할 것”이라고 전했다.
                                    </p>
                                </div>
                                
                            </div>

                            <div className="leftright">
                                <span onClick={()=>SliderCnt==0? SetSliderCnt(4) : SetSliderCnt(SliderCnt-1)  }>&lt;</span>
                                <span onClick={()=>SliderCnt==4? SetSliderCnt(0) : SetSliderCnt(SliderCnt+1)}>&gt;</span>
                                <div className="E1ContentSliderOneProgress">
                                    <div className="E1ContentSliderOneProgressa"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            
      
          
        </div>
    )
}export default E1