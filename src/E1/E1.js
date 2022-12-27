import { useState, useEffect, useRef, Component } from "react";
import './E1.css'
import E1GNB from './E1GNB.js'
import Vivi from './E1.mp4'
import Aos from "aos";
function E1(){
    const E1FirstBox = document.getElementsByClassName("E1FirstBox");
    const E1SecBox = document.getElementsByClassName("E1SecBox");
    const E1Ref = useRef();
    const [SliderCnt,SetSliderCnt] = useState(0)

    
    const SliderContainer = document.getElementsByClassName("SliderContainer");
    const E1E1ContentSliderOneTitleLine = document.getElementsByClassName("E1E1ContentSliderOneTitleLine");
    


    const MoveTopBox = () =>{
        E1FirstBox[0].style.transform= `translateY(${-window.innerHeight}px)`
        E1SecBox[0].style.opacity=  "1"
    }
    const MoveTopBoxReturn = () =>{
        E1FirstBox[0].style.transform= `translateY(0px)`;
        E1SecBox[0].style.opacity= "0"
    }
   
    useEffect(()=>{
        SliderContainer[0].style.transform=` translateX(${SliderCnt*-310}px)`
        E1E1ContentSliderOneTitleLine[0].style.transform=`translateY(${SliderCnt*1.5}rem)`
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
            <div className="E1ContentContainer"  style={{background:`url('/image/E1/bg_sec0${SliderCnt}.jpg')`}}>
                <div className="E1ContentContainerHead">
                    <p data-aos="fade-up">Business</p>
                    <p data-aos="fade-up">지속가능한 성장모델을 통해 고객과 함께하는 가치를 <br></br>창조해 나가고 있습니다.</p>
                </div>
                <div className="E1ContentSliderOne"  data-aos="fade-up">
                    <div className="E1ContentSliderOneFream">
                        <div className="E1E1ContentSliderOneEx">
                            <div className="SliderContainer">
                                <div>
                                    <p>0{SliderCnt+1}</p>
                                    <p>탄소중립 시대를 여는 <br></br>우리 곁의 가장 첫번째 에너지, LPG</p>
                                    <p>
                                    E1은 산유국에서 소비자까지 LPG의 전 유통과정을 아우르는 종합 LPG 사업을 전개합니다. 산유국으로부터 LPG를
                                    수입하여 저장, 판매, 서비스하는 것은 물론 수입한 LPG의 재수출과 중계무역까지 수행하는 세계 최고 수준의 LPG 사업
                                    역량을 보유하고 있습니다.
                                    </p>
                                    <p>LPG사업 자세히 보기</p>
                                </div>
                                <div>
                                    <p>0{SliderCnt+1}</p>
                                    <p>더 밝고 깨끗한 미래 <br></br>자연에서 만들어갑니다.</p>
                                    <p>
                                    E1은 다양한 신재생 에너지 사업을 통해서 부지 발굴, 인허가, Project Financing, 공정관리, 운영관리 등
                                    사업 전 과정에 풍부한 경험을 축적하였습니다. 이를 바탕으로, 초기 단계의 사업에 참여하는 것은 물론, 이미 운영 중이거나
                                    운영 계획 단계에 있는 사업의 지분 인수, 그리고 Repowering까지 신재생에너지 사업의 모든 단계에 참여할 수 있는
                                    역량을 갖추게 되었습니다.
                                    </p>
                                    <p>신재생 에너지 사업 자세히 보기</p>
                                </div>
                                <div>
                                    <p>0{SliderCnt+1}</p>
                                    <p>친환경 수소 사업으로<br></br>또 한번 새로운 시대를 시작합니다.</p>
                                    <p>
                                    수소는 온실가스나 미세먼지 등 오염물질을 배출하지 않고 지속 가능한 에너지 생태계를 조성할 수 있는 친환경 에너지원입니다.
국내 최초로 LPG를 도입하여 청정 에너지 시대의 새 장을 열었던 E1은, 친환경 수소 사업을 통해 또 한 번 이 땅에
새로운 미래를 열어 나가고자 합니다.
                                    </p>
                                    <p>수소 사업 자세히 보기</p>
                                </div>
                                <div>
                                    <p>0{SliderCnt+1}</p>
                                    <p>전동화 시대를 선도하는<br></br>원스탑 솔루션을 제공합니다.</p>
                                    <p>
                                    E1은 오랜 기간 쌓아 온 LPG 충전소 구축 및 운영 노하우와 LS그룹 각 계열사 간의 시너지를 바탕으로 전기차 충전기
운영, 제조, 설치 등 전기차 충전 생태계 전반에 걸친 원스탑 토탈 솔루션을 제공하고 있습니다.
                                    </p>
                                    <p>전기차 충전 사업 자세히 보기</p>
                                </div>
                                <div>
                                    <p>0{SliderCnt+1}</p>
                                    <p>글로벌 트렌드에<br></br>부응하여 성장 동력을 확보합니다.</p>
                                    <p>
                                    오랜 기간 에너지 업계에서 구축한 E1만의 네트워크와 신뢰를 바탕으로, 국내외 유수의 Venture Capital 및 투자
기관들과 함께 친환경 미래 기술과 첨단 스마트 솔루션을 발굴 및 육성하고 있습니다.
                                    </p>
                                    <p>친환경 미래 벤처투자 자세히 보기</p>
                                </div>
                            </div>
                            <div>
                                <span onClick={()=>SliderCnt==0? SetSliderCnt(4) : SetSliderCnt(SliderCnt-1)  }>&lt;</span>
                                <span onClick={()=>SliderCnt==4? SetSliderCnt(0) : SetSliderCnt(SliderCnt+1)}>&gt;</span>
                            </div>
                        </div>
                        <div className="E1E1ContentSliderOneTitle">
                        <div className="E1E1ContentSliderOneTitleLine"></div>
                        <p>LPG 사업 <br></br>
                        신재생 에너지 사업 <br></br>
                        수소 사업<br></br>
                        전기차 충전 사업<br></br>
                        친환경 미래 벤처투자</p>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}export default E1