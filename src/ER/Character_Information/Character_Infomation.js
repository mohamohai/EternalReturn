import { getElementError } from "@testing-library/react";
import React, { Component } from "react";
import "./Character_Infomation.css";

class Character_Infomation extends Component {
  state = {
    ClickSkill: "P", //스킬창 기본칸 패시브로 설정
    ClickSkillName: 0,
    ClickSkillExplancation: 0,
    Character_NameK: "", //한국이름으로 편하게 주 된 이름만
    Character_NameE: "Jackie", //풀네임 요망  <h2> 주이름 <h5>보조이름
    Character_NameF: "",
    Character_Explanation: "", // <h5> 설명 작게
    P_Name: "",
    P_Explanation: "",
    Q_Name: "",
    Q_Explanation: "",
    W_name: "",
    W_Explanation: "",
    E_Name: "",
    E_Explanation: "",
    R_Name: "",
    R_Explanation: "",
    Weapon: "",
    mapCnt: 0,
    SkillName: "피의 축제",
    SkillExplancation: "",
  };

  ClickP = () => {
    this.setState({
      ClickSkill: "P",
      ClickSkillName: 0,
      ClickSkillExplancation: 0,
    });
    this.SkillName(this.state.Character_NameE);
  };
  ClickQ = () => {
    this.setState({
      ClickSkill: "Q",
      ClickSkillName: 1,
      ClickSkillExplancation: 1,
    });
    this.SkillName(this.state.Character_NameE);
  };
  ClickW = () => {
    this.setState({
      ClickSkill: "W",
      ClickSkillName: 2,
      ClickSkillExplancation: 2,
    });
    this.SkillName(this.state.Character_NameE);
  };
  ClickE = () => {
    this.setState({
      ClickSkill: "E",
      ClickSkillName: 3,
      ClickSkillExplancation: 3,
    });
    this.SkillName(this.state.Character_NameE);
  };
  ClickR = () => {
    this.setState({
      ClickSkill: "R",
      ClickSkillName: 4,
      ClickSkillExplancation: 4,
    });
    this.SkillName(this.state.Character_NameE);
    console.log(this.state.Character_NameE);
  };

  Character_NameE_Click = (aa) => {
    this.setState({ Character_NameE: aa });
    this.SkillName(aa);
  };
  SkillName = (bb) => {
    console.log(bb);
    let SkillName = [
      [
        "피의 축제",
        "아드레날린 분비",
        "습격",
        "전기톱 살인마",
        "연참",
        "Jackie",
      ],
      ["아야의 정의", "2연발", "고정 사격", "무빙턴", "공포탄", "Aya"],
      ["맷집", "파쇄탄", "17대1", "강타", "폭주 바이크", "Magnus"],
      ["도그파이트", "발 밟기", "허세", "선빵필승", "핵펀치", "Hyunwoo"],
      ["뚜셰", "팡뜨", "아따끄 꽁뽀제", "마르셰 & 롱빼", "플레슈", "Fiora"],
      [
        "야성 & 천리안",
        "황소의 눈",
        "다람쥐 덫",
        "원숭이 와이어",
        "늑대 맹습",
        "Nadine",
      ],
      [
        "사신의 눈",
        "나라야나스트라",
        "간디바",
        "바이바야스트라",
        "바르가바스트라",
        "Zahir",
      ],
      ["Feedback", "Delay", "OverDrive", "Flanger", "Peacemaker", "Hart"],
      ["유격전", "셈텍스 폭탄", "화망", "은밀 기동", "Mok제 폭탄", "Isol"],
      ["취기", "호연각", "술마시기", "술뿌리기", "취호격파산", "LiDailin"],
      [
        "완벽한 옷매무새",
        "머리치기!",
        "옷매무새정리",
        "빗겨치고 일격",
        "화무십일홍",
        "Yuki",
      ],
      ["삼재", "제압부", "흡령부", "이동부", "오대존명왕진", "Hyejin"],
      [
        "요리사의 열정",
        "소스범벅",
        "내려 찍기",
        "웍 돌진",
        "뜨거운 맛",
        "Xiukai",
      ],
      ["낙인", "부정의 손길", "뒤틀린 기도", "집착", "폭주", "Karla"],
      [
        "삶은 고통이에요",
        "월슨! 도와줘",
        "어딨어 윌슨?",
        "나랑 놀자",
        "모두 해방이에요",
        "Sissela",
      ],
      [
        "그란투리스모",
        "스피드건",
        "피니시라인",
        "스페어휠",
        "기동잔",
        "Silvia",
      ], // 앤 추가해야됨
      ["활활", "방화", "기름 뿌리기", "불길 쇄도", "화염 난사", "Adriana"],
      ["부당거래", "표리", "비약", "협상", "무자비", "Shoichi"],
      ["CheerUP", "비둘기 딜러", "폭죽 모자", "마술 토끼", "Change", "Emma"],
      [
        "위풍당당",
        "회오리 비늘",
        "날카로운 독니",
        "휩쓸기",
        "푸른 뱀",
        "Lenox",
      ],
      ["더블샷", "이지샷", "스핀샷", "에어샷", "셈텍스탄 Mk-II", "Rozzi"], //추가
      [
        "청소 완료",
        "클리닝 서비스",
        "강박증",
        "무소음 청소기",
        "애프터 서비스",
        "Luke",
      ],
      [
        "외과 전문의",
        "동맥절제술",
        "엠퓨테이션",
        "수쳐",
        "이머전시 OP",
        "Cathy",
      ],
      [
        "퀸즈 갬빗 디클라인드",
        "프로 모션",
        "나이트 포크",
        "캐슬링",
        "체크메이트",
        "Adela",
      ],
      ["산탄", "레그샷", "사냥 덫", "매의 눈", "올가미 탄", "Bernice"],
      [
        "개조",
        "BT-Mk2 센트리건",
        "이온 레이저",
        "자력 폭풍",
        "오버 클럭",
        "Barbara",
      ], //추가
      ["잠입", "코일건", "타겟 마커", "펄스 스팅", "정밀 폭격", "Alex"], //추가
      ["마음의 양식", "오딧세이", "파랑새", "돈키호테", "기억력", "Sua"],
      ["인간 어뢰", "물길", "물보라 강타", "잠영", "파도타기", "Leon"],
      [
        "힘내자고!",
        "방해하지마!",
        "자~ 집중!",
        "나 불렀어?",
        "다 덤벼보라구!",
        "Eleven",
      ],
      ["카이", "카에유미", "하나레", "비상", "연사/정사필중", "Rio"],
      ["캐치볼", "쉐도우 볼", "와인드업", "슬라이딩 캐치", "위닝샷", "William"],
      [
        "다혈질",
        "격투 액션",
        "가드 & 카운터",
        "강력한 펀치",
        "분노의 어퍼컷",
        "Nicky",
      ],
      [
        "슬로우 셔터",
        "스냅샷",
        "타임 랩스",
        "인스턴트 포토",
        "셔터 찬스",
        "Nathapon",
      ],
      [
        "열혈의 의지",
        "니 스트라이크",
        "토마호크 스핀",
        "위빙",
        "쿼드라곤",
        "Jan",
      ],
      [
        "텔레키네시스",
        "빛의 트라이어드",
        "위상의 소용돌이",
        "자수정의 물결",
        "VF방출",
        "Eva",
      ],
      ["고독한 예술가", "그림자 가위", "영감", "그림자 이동", "걸작", "Daniel"],
      [
        "죽음의 연기",
        "스포트라이트",
        "레드 카펫",
        "페르소나",
        "시상식의 여왕",
        "Jenny",
      ],
      ["올레", "브엘따", "시에레", "알 꼼빠스", "두엔데", "Camilo"],
      [
        "살아 있는 마리오네트",
        "공격 명령",
        "인형극",
        "퀼트 리퍼",
        "생명 공유",
        "Chloe",
      ],
      [
        "빛의 가호",
        "찬란한 광휘",
        "신성의 향로",
        "인도하는 빛",
        "구원의 성역",
        "Johann",
      ],
      ["흡혈귀", "선혈의 투창", "짧은 안식", "순환", "진조의 군림", "Bianca"],
      [
        "폭발물 전문가",
        "플라즈마 폭탄",
        "기폭",
        "블라스트 웨이브",
        "자력 융합",
        "Celine",
      ],
      [
        "카드모스의 부름",
        "독사의 칼날",
        "뒤집힌 비늘",
        "메마른 송곳니",
        "VF 폭주",
        "Echion",
      ],
      ["오뜨꾸뛰르", "드레이프", "숄 장막", "캣 워크", "익스클루시브", "Mai"],
      ["과전하", "뇌격", "전하소산", "백스텝", "낙뢰", "Aiden"],
      [
        "괴도",
        "날카로운 꽃",
        "예고장",
        "우아한 발걸음",
        "황혼의 도둑",
        "Laura",
      ],
      [
        "알록달록 컬러믹스",
        "브러쉬 스트로크",
        "팔레트",
        "색칠놀이",
        "무지개 드로잉",
        "Tia",
      ],
      ["연계 창술", "선풍참", "질풍뇌격", "반월참", "뇌룡격", "Felix"],
      [
        "겨울여왕의 영지",
        "크리스탈 엘레강스",
        "더블 악셀",
        "스파이럴",
        "죽음의 무도",
        "Elena",
      ],
      [
        "자연의 응답",
        "개화의 선율",
        "포르타멘토",
        "프리비티의 노래",
        "대지의 메아리",
        "Priya",
      ],
      [
        "별읽기",
        "루미너리",
        "트라인 에스펙트",
        "폴 디그니티",
        "수정구에 비친 운명",
        "Adina",
      ],
      ["전사의 투지", "전투 교범", "파괴", "전사의 돌격", "지각변동", "Markus"],
      ["작살 장전", "관통 작살", "회수", "작살 기동", "구속의 사슬", "Karla"],
      ["", "", "", "", "", "뮻"],
    ];
    for (let cnt = 0; cnt < SkillName.length; cnt++) {
      if (bb == SkillName[cnt][5]) {
        console.log(SkillName[cnt][this.state.ClickSkillName]);
        this.setState({ SkillName: SkillName[cnt][this.state.ClickSkillName] });
      }
    }
  };
  SkillExplancation = (cc) => {
    let SkillExplancation = [
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Jackie"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Aya"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Magnus"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Hyunwoo"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Fiora"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Nadine"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", ""],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Hart"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Isol"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "LiDailin"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Yuki"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Hyejin"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Xiukai"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Karla"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Sissela"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Silvia"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Adriana"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Shoichi"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Emma"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Lenox"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Rozzi"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Luke"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Cathy"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Adela"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Bernice"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Barbara"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Alex"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Sua"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Leon"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Eleven"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Rio"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "William"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Nicky"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Nathapon"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Jan"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Eva"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Daniel"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Jenny"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Camilo"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Chloe"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Johann"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Bianca"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Celine"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Echion"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Mai"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Aiden"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Laura"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Tia"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Felix"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Elena"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Priya"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Adina"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Markus"],
      ["ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "ㅁㅁㅁ", "Karla"],
      ["", "", "", "", "", ""],
    ];
  };

  render() {
    let Character = [
      ["재키", "Jackie"],
      ["아야", "Aya"],
      ["현우", "Hyunwoo"],
      ["매그너스", "Magnus"],
      ["피오라", "Fiora"],
      ["나딘", "Nadine"],
      ["자히르", "Zahir"],
      ["하트", "Hart"],
      ["아이솔", "Isol"],
      ["리다이린", "LiDailin"],
      ["유키", "Yuki"],
      ["혜진", "Hyejin"],
      ["쇼우", "Xiukai"],
      ["시셀라", "Sissela"],
      ["키아라", "Chiara"],
      ["아드리아나", "Adriana"],
      ["실비아", "Silvia"],
      ["쇼이치", "Shoichi"],
      ["엠마", "Emma"],
      ["레녹스", "Lenox"],
      ["로지", "Rozzi"],
      ["루크", "Luke"],
      ["캐시", "Cathy"],
      ["아델라", "Adela"],
      ["버니스", "Bernice"],
      ["바바라", "Barbara"],
      ["알렉스", "Alex"],
      ["수아", "Sua"],
      ["레온", "Leon"],
      ["일레븐", "Eleven"],
      ["리오", "Rio"],
      ["윌리엄", "William"],
      ["니키", "Nicky"],
      ["나타폰", "Nathapon"],
      ["얀", "Jan"],
      ["이바", "Eva"],
      ["다니엘", "Daniel"],
      ["제니", "Jenny"],
      ["카밀로", "Camilo"],
      ["클로에", "Chloe"],
      ["요한", "Johann"],
      ["비앙카", "Bianca"],
      ["셀린", "Celine"],
      ["에키온", "Echion"],
      ["마이", "Mai"],
      ["에이든", "Aiden"],
      ["라우라", "Laura"],
      ["띠아", "Tia"],
      ["펠릭스", "Felix"],
      ["엘레나", "Elena"],
      ["프리야", "Priya"],
      ["아디나", "Adina"],
      ["마커스", "Markus"],
      ["칼라", "Karla"],
    ];

    let CharacterSort = Character.sort();
    //   console.log(Character.sort());
    //  console.log(CharacterSort);
    let mapCnt = 1;

    return (
      <div id="Character_Infomation">
        <div>
          <div id="Character_SelectBoard">
            <h3>캐릭터 선택</h3>

            <br></br>
            {CharacterSort.map((arrSort, ababab) => {
              return (
                <div>
                  {" "}
                  <div
                    onClick={() => this.Character_NameE_Click(arrSort[1])}
                    id={arrSort[1]}
                    className="CharThumb"
                  >
                    <img
                      className="ThunbnailIcon"
                      src={`image/Character_Img/${arrSort[1]}/Thumbnail/Default/Mini.png`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="clear"></div>
          <div>
            <img
              id="SkillGif"
              src={`image/Character_Img/${this.state.Character_NameE}/SkillIconGif/${this.state.ClickSkill}.gif`}
            />

            <div>
              <ul id="SkillIcon">
                <li>
                  <img
                    id="SkillPImg"
                    className="SkillBtn"
                    onClick={this.ClickP}
                    src={`image/Character_Img/${this.state.Character_NameE}/SkillIcon/P.png`}
                  />
                </li>
                <li>
                  <img
                    id="SkillQImg"
                    className="SkillBtn"
                    onClick={this.ClickQ}
                    src={`image/Character_Img/${this.state.Character_NameE}/SkillIcon/Q.png`}
                  />
                </li>
                <li>
                  <img
                    id="SkillWImg"
                    className="SkillBtn"
                    onClick={this.ClickW}
                    src={`image/Character_Img/${this.state.Character_NameE}/SkillIcon/W.png`}
                  />
                </li>
                <li>
                  <img
                    id="SkillEImg"
                    className="SkillBtn"
                    onClick={this.ClickE}
                    src={`image/Character_Img/${this.state.Character_NameE}/SkillIcon/E.png`}
                  />
                </li>
                <li>
                  <img
                    id="SkillRImg"
                    className="SkillBtn"
                    onClick={this.ClickR}
                    src={`image/Character_Img/${this.state.Character_NameE}/SkillIcon/R.png`}
                  />
                </li>
              </ul>
              <ul id="SkillExplancation">
                <li>{this.state.SkillName}</li>
                <div id="SkillExplancationBorder"></div>
                <li>{Character[41][5]}asd</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Character_Infomation;
