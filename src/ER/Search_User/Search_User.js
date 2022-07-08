import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./Search_User.css";

class Search_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: process.env.REACT_APP_ERKEY,
      arr: [],
      characterNum: "", //사용 캐릭터
      gameRank: "", // 현게임 등수
      playerKill: "", // 현게임 킬수
      playerAssistant: "", // 현게임 어시
      playerDeaths: "", // 현게임 데스
      damageToPlayer: "", // 현게임 총딜량
      bestWeapon: "", // 무숙
      skillLevelInfo: "", // 스킬별 레벨
      skillOrderInfo: "", // 스킬 찍은 순서
      routeIdOfStart: "", // 루트 번호
      matchingMode: "", //플레이한 게임 모드 2,3,6  노말 랭크 코발
      equipment: "", // 사용 아이템 6배열 좌상우하순서
      characterNumArr: [
        "캐릭터이름",
        "재키",
        "아야",
        "피오라",
        "매그너스",
        "자히르",
        "나딘",
        "현우",
        "하트",
        "아이솔",
        "리다이린",
        "유키",
        "혜진",
        "쇼우",
        "키아라",
        "시셀라",
        "실비아",
        "아드리아나",
        "쇼이치",
        "엠마",
        "레녹스",
        "로지",
        "루크",
        "캐시",
        "아델라",
        "버니스",
        "바바라",
        "알렉스",
        "수아",
        "레온",
        "일레븐",
        "리오",
        "윌리엄",
        "니키",
        "나타폰",
        "얀",
        "이바",
        "다니엘",
        "제니",
        "카밀로",
        "클로에",
        "요한",
        "비앙카",
        "셀린",
        "에키온",
        "마이",
        "에이든",
        "라우라",
        "띠아",
        "펠릭스",
        "엘레나",
        "프리야",
        "아디나",
        "마커스",
        "칼라",
        "에스텔",
        "피올로",
      ],
      WeaponDagger: [
        { ItemCode: "101101", ItemName: "가위" },
        { ItemCode: "101102", ItemName: "만년필" },
        { ItemCode: "101104", ItemName: "식칼" },
        { ItemCode: "101201", ItemName: "군용 나이프" },
        { ItemCode: "101202", ItemName: "메스" },
        { ItemCode: "101203", ItemName: "자마다르" },
        { ItemCode: "101301", ItemName: "장미칼" },
        { ItemCode: "101302", ItemName: "스위스 아미 나이프" },
        { ItemCode: "101303", ItemName: "카라페이스 카타르" },
        { ItemCode: "101401", ItemName: "카른웬난" },
        { ItemCode: "101402", ItemName: "파산검" },
        { ItemCode: "101404", ItemName: "초진동나이프" },
        { ItemCode: "101405", ItemName: "프라가라흐" },
        { ItemCode: "101406", ItemName: "다마스커스 가시" },
        { ItemCode: "101407", ItemName: "마하라자" },
      ],
      WeaponTwoHanedeSword: [
        { ItemCode: "102101", ItemName: "녹슨 검" },
        { ItemCode: "102201", ItemName: "샴쉬르" },
        { ItemCode: "102301", ItemName: "일본도" },
        { ItemCode: "102401", ItemName: "마사무네" },
        { ItemCode: "102402", ItemName: "무라마사" },
        { ItemCode: "102403", ItemName: "바스타드 소드" },
        { ItemCode: "102404", ItemName: "보검" },
        { ItemCode: "102405", ItemName: "뚜언 띠엔" },
        { ItemCode: "102406", ItemName: "아론다이트" },
        { ItemCode: "102407", ItemName: "엑스칼리버" },
        { ItemCode: "102408", ItemName: "플라즈마 소드" },
        { ItemCode: "102409", ItemName: "레바테인" },
        { ItemCode: "102410", ItemName: "모노호시자오" },
        { ItemCode: "102411", ItemName: "호푸어드" },
        { ItemCode: "102412", ItemName: "빛의 검" },
        { ItemCode: "102501", ItemName: "다인슬라이프" },
      ],
      WeaponDualSwords: [
        { ItemCode: "103201", ItemName: "쌍칼" },
        { ItemCode: "103202", ItemName: "조잡한 쌍검" },
        { ItemCode: "103301", ItemName: "피렌체식 쌍검" },
        { ItemCode: "103302", ItemName: "쌍둥이 검" },
        { ItemCode: "103401", ItemName: "이천일류" },
        { ItemCode: "103402", ItemName: "자웅일대검" },
        { ItemCode: "103403", ItemName: "아수라" },
        { ItemCode: "103501", ItemName: "디오스쿠로이" },
        { ItemCode: "103502", ItemName: "로이거 차르" },
        { ItemCode: "103503", ItemName: "간장과 막야" },
      ],
      WeaponHammer: [
        { ItemCode: "104101", ItemName: "망치" },
        { ItemCode: "104201", ItemName: "워해머" },
        { ItemCode: "104301", ItemName: "모닝 스타" },
        { ItemCode: "104302", ItemName: "사슴 망치" },
        { ItemCode: "104303", ItemName: "운명의 망치" },
        { ItemCode: "104401", ItemName: "낭아봉" },
        { ItemCode: "104402", ItemName: "다그다의 망치" },
        { ItemCode: "104403", ItemName: "토르의 망치" },
        { ItemCode: "104404", ItemName: "개밥바라기" },
        { ItemCode: "104405", ItemName: "마법봉" },
        { ItemCode: "104406", ItemName: "천근추" },
        { ItemCode: "104501", ItemName: "피스브링어" },
      ],
      WeaponAxe: [
        { ItemCode: "105102", ItemName: "곡괭이" },
        { ItemCode: "105103", ItemName: "손도끼" },
        { ItemCode: "105201", ItemName: "사슬 낫" },
        { ItemCode: "105202", ItemName: "전투 도끼" },
        { ItemCode: "105301", ItemName: "경량화 도끼" },
        { ItemCode: "105302", ItemName: "사신의 낫" },
        { ItemCode: "105401", ItemName: "대부" },
        { ItemCode: "105402", ItemName: "빔 엑스" },
        { ItemCode: "105403", ItemName: "산타 무에르테" },
        { ItemCode: "105404", ItemName: "스퀴테" },
        { ItemCode: "105405", ItemName: "파라슈" },
        { ItemCode: "105406", ItemName: "하르페" },
        { ItemCode: "105407", ItemName: "저거너트" },
      ],
      WeaponSpear: [
        { ItemCode: "107101", ItemName: "단창" },
        { ItemCode: "107201", ItemName: "죽창" },
        { ItemCode: "107301", ItemName: "바이던트" },
        { ItemCode: "107302", ItemName: "파이크" },
        { ItemCode: "107303", ItemName: "도끼창" },
        { ItemCode: "107401", ItemName: "강창" },
        { ItemCode: "107402", ItemName: "애각창" },
        { ItemCode: "107403", ItemName: "장팔사모" },
        { ItemCode: "107404", ItemName: "코스믹 바이던트" },
        { ItemCode: "107405", ItemName: "트리아이나" },
        { ItemCode: "107406", ItemName: "화첨창" },
        { ItemCode: "107407", ItemName: "방천화극" },
        { ItemCode: "107408", ItemName: "청룡언월도" },
        { ItemCode: "107409", ItemName: "나기나타" },
        { ItemCode: "107501", ItemName: "롱기누스의 창" },
      ],
      WeaponBat: [
        { ItemCode: "108101", ItemName: "나뭇가지" },
        { ItemCode: "108102", ItemName: "단봉" },
        { ItemCode: "108103", ItemName: "대나무" },
        { ItemCode: "108104", ItemName: "인체모형" },
        { ItemCode: "108201", ItemName: "먼지털이개" },
        { ItemCode: "108202", ItemName: "장봉" },
        { ItemCode: "108301", ItemName: "도깨비 방망이" },
        { ItemCode: "108401", ItemName: "우산" },
        { ItemCode: "108402", ItemName: "횃불" },
        { ItemCode: "108405", ItemName: "몽둥이" },
        { ItemCode: "108403", ItemName: "구원의 여신상" },
        { ItemCode: "108404", ItemName: "타구봉" },
        { ItemCode: "108501", ItemName: "스파이의 우산" },
        { ItemCode: "104407", ItemName: "금강저" },
        { ItemCode: "108502", ItemName: "여의봉" },
      ],
      WeaponWhip: [
        { ItemCode: "109101", ItemName: "채찍" },
        { ItemCode: "109201", ItemName: "오랏줄" },
        { ItemCode: "109202", ItemName: "철편" },
        { ItemCode: "109301", ItemName: "바람 채찍" },
        { ItemCode: "109401", ItemName: "뇌룡편" },
        { ItemCode: "109402", ItemName: "벽력편" },
        { ItemCode: "109403", ItemName: "글레이프니르" },
        { ItemCode: "109404", ItemName: "플라즈마 윕" },
        { ItemCode: "109501", ItemName: "혈화구절편" },
      ],
      WeaponGlove: [
        { ItemCode: "110101", ItemName: "너클" },
        { ItemCode: "110102", ItemName: "목장갑" },
        { ItemCode: "110201", ItemName: "글러브" },
        { ItemCode: "110202", ItemName: "아이언 너클" },
        { ItemCode: "110301", ItemName: "건틀릿" },
        { ItemCode: "110302", ItemName: "윙 너클" },
        { ItemCode: "110401", ItemName: "귀골 장갑" },
        { ItemCode: "110402", ItemName: "벽력귀투" },
        { ItemCode: "110403", ItemName: "유리 너클" },
        { ItemCode: "110404", ItemName: "회단 장갑" },
        { ItemCode: "110405", ItemName: "단영촌천투" },
        { ItemCode: "110406", ItemName: "디바인 피스트" },
        { ItemCode: "110407", ItemName: "블러드윙 너클" },
        { ItemCode: "110408", ItemName: "빙화현옥수" },
        { ItemCode: "110409", ItemName: "여래수투" },
        { ItemCode: "110410", ItemName: "브레이질 건틀릿" },
        { ItemCode: "110411", ItemName: "소수" },
        { ItemCode: "110412", ItemName: "천잠장갑" },
        { ItemCode: "110501", ItemName: "주작자문" },
        { ItemCode: "110502", ItemName: "프로스트팽" },
      ],
      WeaponTonfa: [
        { ItemCode: "111101", ItemName: "맷손" },
        { ItemCode: "111201", ItemName: "톤파" },
        { ItemCode: "111301", ItemName: "경찰봉" },
        { ItemCode: "111401", ItemName: "류큐톤파" },
        { ItemCode: "111402", ItemName: "택티컬 톤파" },
        { ItemCode: "111403", ItemName: "마이쏙" },
        { ItemCode: "111404", ItemName: "플라즈마 톤파" },
        { ItemCode: "111405", ItemName: "윈드러너" },
        { ItemCode: "111501", ItemName: "흑요석 짓테" },
      ],
      WeaponThrow: [
        { ItemCode: "112101", ItemName: "돌멩이" },
        { ItemCode: "112103", ItemName: "쇠구슬" },
        { ItemCode: "112104", ItemName: "유리병" },
        { ItemCode: "401215", ItemName: "달궈진 돌멩이" }, // 아니},이게 왜 여깃냐고
        { ItemCode: "112105", ItemName: "야구공" },
        { ItemCode: "112202", ItemName: "수류탄" },
        { ItemCode: "112203", ItemName: "화염병" },
        { ItemCode: "112204", ItemName: "슬링" },
        { ItemCode: "112205", ItemName: "싸인볼" },
        { ItemCode: "112301", ItemName: "밀가루 폭탄" },
        { ItemCode: "112302", ItemName: "소이탄" },
        { ItemCode: "112303", ItemName: "볼 라이트닝" },
        { ItemCode: "112304", ItemName: "플러버" },
        { ItemCode: "112305", ItemName: "안티오크의 수류탄" },
        { ItemCode: "112306", ItemName: "필럼" },
        { ItemCode: "112401", ItemName: "다비드슬링" },
        { ItemCode: "112402", ItemName: "연막탄" },
        { ItemCode: "112403", ItemName: "가시 탱탱볼" },
        { ItemCode: "112404", ItemName: "고폭 수류탄" },
        { ItemCode: "112501", ItemName: "루테늄 구슬" },
        { ItemCode: "112405", ItemName: "파이어 볼" },
        { ItemCode: "112406", ItemName: "프리즘 볼" },
        { ItemCode: "112407", ItemName: "아스트라페" },
      ],
      WeaponShuriken: [
        { ItemCode: "113101", ItemName: "면도칼" },
        { ItemCode: "113102", ItemName: "트럼프 카드" },
        { ItemCode: "113103", ItemName: "CD" },
        { ItemCode: "113104", ItemName: "분필" },
        { ItemCode: "113201", ItemName: "다트" },
        { ItemCode: "113202", ItemName: "부적" },
        { ItemCode: "113203", ItemName: "빈티지 카드" },
        { ItemCode: "113204", ItemName: "토마호크" },
        { ItemCode: "113205", ItemName: "표창" },
        { ItemCode: "113206", ItemName: "흑건" },
        { ItemCode: "113207", ItemName: "유엽비도" },
        { ItemCode: "113301", ItemName: "챠크람" },
        { ItemCode: "113302", ItemName: "매화비표" },
        { ItemCode: "113401", ItemName: "미치광이왕의 카드" },
        { ItemCode: "113402", ItemName: "독침" },
        { ItemCode: "113403", ItemName: "법륜" },
        { ItemCode: "113404", ItemName: "플럼바타" },
        { ItemCode: "113405", ItemName: "옥전결" },
        { ItemCode: "113406", ItemName: "풍마 수리검" },
        { ItemCode: "113407", ItemName: "본크러셔" },
        { ItemCode: "113408", ItemName: "빙백은침" },
        { ItemCode: "113409", ItemName: "푸른색 단도" },
        { ItemCode: "113410", ItemName: "플레솃" },
        { ItemCode: "113411", ItemName: "건곤권" },
        { ItemCode: "113412", ItemName: "생사부" },
        { ItemCode: "113501", ItemName: "수다르사나" },
        { ItemCode: "113502", ItemName: "만천화우" },
      ],
      WeaponBow: [
        { ItemCode: "114101", ItemName: "양궁" },
        { ItemCode: "114201", ItemName: "목궁" },
        { ItemCode: "114202", ItemName: "장궁" },
        { ItemCode: "114203", ItemName: "컴포지트 보우" },
        { ItemCode: "114301", ItemName: "강궁" },
        { ItemCode: "114302", ItemName: "국궁" },
        { ItemCode: "114303", ItemName: "벽력궁" },
        { ItemCode: "114304", ItemName: "탄궁" },
        { ItemCode: "114401", ItemName: "편전" },
        { ItemCode: "114402", ItemName: "화전" },
        { ItemCode: "114403", ItemName: "골든래쇼 보우" },
        { ItemCode: "114404", ItemName: "큐피드의 활" },
        { ItemCode: "114405", ItemName: "트윈보우" },
        { ItemCode: "114406", ItemName: "제베의 활" },
        { ItemCode: "114501", ItemName: "엘리멘탈 보우" },
        { ItemCode: "114502", ItemName: "페일노트" },
        { ItemCode: "114503", ItemName: "아르기로톡소스" },
        { ItemCode: "114407", ItemName: "아르테미스" },
      ],
      WeaponCrossbow: [
        { ItemCode: "115101", ItemName: "석궁" },
        { ItemCode: "115201", ItemName: "쇠뇌" },
        { ItemCode: "115202", ItemName: "크로스보우" },
        { ItemCode: "115301", ItemName: "노" },
        { ItemCode: "115302", ItemName: "저격궁" },
        { ItemCode: "115303", ItemName: "헤비 크로스보우" },
        { ItemCode: "115401", ItemName: "철궁" },
        { ItemCode: "115402", ItemName: "대황" },
        { ItemCode: "115403", ItemName: "발리스타" },
        { ItemCode: "115404", ItemName: "저격 크로스보우" },
        { ItemCode: "115405", ItemName: "영광금귀신기노" },
        { ItemCode: "115501", ItemName: "샤릉가" },
      ],
      WeaponPistol: [
        { ItemCode: "116101", ItemName: "발터 PPK" },
        { ItemCode: "116201", ItemName: "매그넘-파이선" },
        { ItemCode: "116202", ItemName: "베레타 M92F" },
        { ItemCode: "116301", ItemName: "FN57" },
        { ItemCode: "116401", ItemName: "더블 리볼버 SP" },
        { ItemCode: "116402", ItemName: "매그넘-아나콘다" },
        { ItemCode: "116408", ItemName: "데린저" },
        { ItemCode: "116403", ItemName: "마탄의 사수" },
        { ItemCode: "116404", ItemName: "엘레강스" },
        { ItemCode: "116405", ItemName: "일렉트론 블라스터" },
        { ItemCode: "116406", ItemName: "매그넘-보아" },
        { ItemCode: "116407", ItemName: "글록 48" },
        { ItemCode: "116409", ItemName: "스탬피드" },
        { ItemCode: "116501", ItemName: "악켈테" },
      ],
      WeaponAssaultRifle: [
        { ItemCode: "117101", ItemName: "페도로프 자동소총" },
        { ItemCode: "117201", ItemName: "STG-44" },
        { ItemCode: "117301", ItemName: "AK-47" },
        { ItemCode: "117401", ItemName: "M16A1" },
        { ItemCode: "117402", ItemName: "개틀링 건" },
        { ItemCode: "117403", ItemName: "95식 자동 소총" },
        { ItemCode: "117404", ItemName: "AK-12" },
        { ItemCode: "117405", ItemName: "XCR" },
        { ItemCode: "117406", ItemName: "저지먼트" },
        { ItemCode: "117501", ItemName: "아그니" },
      ],
      WeaponSniperRifle: [
        { ItemCode: "118101", ItemName: "화승총" },
        { ItemCode: "118201", ItemName: "스프링필드" },
        { ItemCode: "118301", ItemName: "하푼건" },
        { ItemCode: "118401", ItemName: "금교전" },
        { ItemCode: "118402", ItemName: "레일건" },
        { ItemCode: "118403", ItemName: "Tac-50" },
        { ItemCode: "118404", ItemName: "인터벤션" },
        { ItemCode: "118405", ItemName: "NTW-20" },
        { ItemCode: "118406", ItemName: "폴라리스" },
        { ItemCode: "118501", ItemName: "사사성광" },
        { ItemCode: "118502", ItemName: "현자총통" },
      ],
      WeaponNunchaku: [
        { ItemCode: "119101", ItemName: "쇠사슬" },
        { ItemCode: "119201", ItemName: "눈차크" },
        { ItemCode: "119301", ItemName: "샤퍼" },
        { ItemCode: "119302", ItemName: "블리더" },
        { ItemCode: "119401", ItemName: "대소반룡곤" },
        { ItemCode: "119402", ItemName: "초진동눈차크" },
        { ItemCode: "119403", ItemName: "케르베로스" },
        { ItemCode: "119501", ItemName: "히드라" },
      ],
      WeaponRapier: [
        { ItemCode: "120101", ItemName: "바늘" },
        { ItemCode: "120201", ItemName: "레이피어" },
        { ItemCode: "120301", ItemName: "매화검" },
        { ItemCode: "120302", ItemName: "활빈검" },
        { ItemCode: "120303", ItemName: "에스톡" },
        { ItemCode: "120401", ItemName: "듀랜달 Mk2" },
        { ItemCode: "120402", ItemName: "미스틸테인" },
        { ItemCode: "120403", ItemName: "볼틱레토" },
        { ItemCode: "120404", ItemName: "유성검" },
        { ItemCode: "120405", ItemName: "주와이외즈" },
        { ItemCode: "120406", ItemName: "레드 팬서" },
        { ItemCode: "120407", ItemName: "에스프리" },
      ],
      WeaponGuitar: [
        { ItemCode: "121101", ItemName: "보급형 기타" },
        { ItemCode: "121201", ItemName: "골든 브릿지" },
        { ItemCode: "121202", ItemName: "싱글 픽업" },
        { ItemCode: "121301", ItemName: "루비 스페셜" },
        { ItemCode: "121302", ItemName: "험버커 픽업" },
        { ItemCode: "121303", ItemName: "King-V" },
        { ItemCode: "121304", ItemName: "노캐스터" },
        { ItemCode: "121305", ItemName: "슈퍼스트랫" },
        { ItemCode: "121306", ItemName: "야생마" },
        { ItemCode: "121401", ItemName: "보헤미안" },
        { ItemCode: "121402", ItemName: "천국의 계단" },
        { ItemCode: "121403", ItemName: "퍼플 헤이즈" },
        { ItemCode: "121404", ItemName: "새티스팩션" },
        { ItemCode: "121405", ItemName: "원더풀 투나잇" },
        { ItemCode: "121406", ItemName: "더 월" },
        { ItemCode: "121407", ItemName: "틴 스피릿" },
      ],
      WeaponCamera: [
        { ItemCode: "122101", ItemName: "렌즈" },
        { ItemCode: "122201", ItemName: "카메라 건" },
        { ItemCode: "122301", ItemName: "컴팩트 카메라 " },
        { ItemCode: "122302", ItemName: "레인지파인더 " },
        { ItemCode: "122303", ItemName: "카메라 라이플 " },
        { ItemCode: "122401", ItemName: "미러리스" },
        { ItemCode: "122402", ItemName: "컴파운드 사이트" },
        { ItemCode: "122403", ItemName: "카메라 캐논" },
        { ItemCode: "122404", ItemName: "V.I.C.G " },
      ],
      WeaponArcana: [
        { ItemCode: "130101", ItemName: "유리구슬" },
        { ItemCode: "130201", ItemName: "거울구슬" },
        { ItemCode: "130202", ItemName: "얼음구슬" },
        { ItemCode: "130301", ItemName: "의지의 지팡이" },
        { ItemCode: "130302", ItemName: "감정의 컵" },
        { ItemCode: "130303", ItemName: "이성의 칼" },
        { ItemCode: "130304", ItemName: "소유의 펜타클" },
        { ItemCode: "130401", ItemName: "은둔자" },
        { ItemCode: "130402", ItemName: "운명의 수레바퀴" },
        { ItemCode: "130403", ItemName: "절제" },
        { ItemCode: "130404", ItemName: "더 스타" },
        { ItemCode: "130405", ItemName: "더 문" },
      ],
      WeaponVFProsthetic: [],

      equipmentArr: [
        //배열을 장비위치나 재료별로 종류별로 세팅해서 맵을 최대한 적게 돌리게끔 설정?
      ],
    };
  }
  WeaponSearch = () => {
    console.log("abc");
    console.log(this.state.arr[0][2].equipment[0]);
    var testcode = this.state.arr[0][2].equipment[0];
    let WeaponCode = testcode.substring(0, 3);
    console.log(WeaponCode + "여기에영");
    let WeaponCode1 = "123";
    switch (WeaponCode1) {
      case "101": {
        for (let a = 0; a <= this.state.WeaponDagger.length - 1; a++) {
          if (this.state.WeaponDagger[a].ItemCode == testcode)
            console.log(this.state.WeaponDagger[a].ItemName);
          break;
        }
      }
      case "102": {
        for (let a = 0; a <= this.state.WeaponTwoHanedeSword.length - 1; a++) {
          if (this.state.WeaponTwoHanedeSword[a].ItemCode == testcode)
            console.log(this.state.WeaponTwoHanedeSword[a].ItemName);
          break;
        }
      }
      case "103": {
        for (let a = 0; a <= this.state.WeaponDualSwords.length - 1; a++) {
          if (this.state.WeaponDualSwords[a].ItemCode == testcode)
            console.log(this.state.WeaponDualSwords[a].ItemName);
          break;
        }
      }
      case "104": {
        for (let a = 0; a <= this.state.WeaponHammer.length - 1; a++) {
          if (this.state.WeaponHammer[a].ItemCode == testcode)
            console.log(this.state.WeaponHammer[a].ItemName);
          break;
        }
      }
      case "105": {
        for (let a = 0; a <= this.state.WeaponAxe.length - 1; a++) {
          if (this.state.WeaponAxe[a].ItemCode == testcode)
            console.log(this.state.WeaponAxe[a].ItemName);
          break;
        }
      }
      case "107": {
        for (let a = 0; a <= this.state.WeaponSpear.length - 1; a++) {
          if (this.state.WeaponSpear[a].ItemCode == testcode)
            console.log(this.state.WeaponSpear[a].ItemName);
          break;
        }
      }
      case "108": {
        for (let a = 0; a <= this.state.WeaponBat.length - 1; a++) {
          if (this.state.WeaponBat[a].ItemCode == testcode)
            console.log(this.state.WeaponBat[a].ItemName);
          break;
        }
      }
      case "109": {
        for (let a = 0; a <= this.state.WeaponWhip.length - 1; a++) {
          if (this.state.WeaponWhip[a].ItemCode == testcode)
            console.log(this.state.WeaponWhip[a].ItemName);
          break;
        }
      }
      case "110": {
        for (let a = 0; a <= this.state.WeaponGlove.length - 1; a++) {
          if (this.state.WeaponGlove[a].ItemCode == testcode)
            console.log(this.state.WeaponGlove[a].ItemName);
          break;
        }
      }
      case "111": {
        for (let a = 0; a <= this.state.WeaponTonfa.length - 1; a++) {
          if (this.state.WeaponTonfa[a].ItemCode == testcode)
            console.log(this.state.WeaponTonfa[a].ItemName);
          break;
        }
      }
      case "112": {
        for (let a = 0; a <= this.state.WeaponThrow.length - 1; a++) {
          if (this.state.WeaponThrow[a].ItemCode == testcode)
            console.log(this.state.WeaponThrow[a].ItemName);
          break;
        }
      }
      case "113": {
        for (let a = 0; a <= this.state.WeaponShuriken.length - 1; a++) {
          if (this.state.WeaponShuriken[a].ItemCode == testcode)
            console.log(this.state.WeaponShuriken[a].ItemName);
          break;
        }
      }
      case "114": {
        for (let a = 0; a <= this.state.WeaponBow.length - 1; a++) {
          if (this.state.WeaponBow[a].ItemCode == testcode)
            console.log(this.state.WeaponBow[a].ItemName);
          break;
        }
      }
      case "115": {
        for (let a = 0; a <= this.state.WeaponCrossbow.length - 1; a++) {
          if (this.state.WeaponCrossbow[a].ItemCode == testcode)
            console.log(this.state.WeaponCrossbow[a].ItemName);
          break;
        }
      }
      case "116": {
        for (let a = 0; a <= this.state.WeaponPistol.length - 1; a++) {
          if (this.state.WeaponPistol[a].ItemCode == testcode)
            console.log(this.state.WeaponPistol[a].ItemName);
          break;
        }
      }
      case "117": {
        for (let a = 0; a <= this.state.WeaponAssaultRifle.length - 1; a++) {
          if (this.state.WeaponAssaultRifle[a].ItemCode == testcode)
            console.log(this.state.WeaponAssaultRifle[a].ItemName);
          break;
        }
      }
      case "118": {
        for (let a = 0; a <= this.state.WeaponSniperRifle.length - 1; a++) {
          if (this.state.WeaponSniperRifle[a].ItemCode == testcode)
            console.log(this.state.WeaponSniperRifle[a].ItemName);
          break;
        }
      }
      case "119": {
        for (let a = 0; a <= this.state.WeaponNunchaku.length - 1; a++) {
          if (this.state.WeaponNunchaku[a].ItemCode == testcode)
            console.log(this.state.WeaponNunchaku[a].ItemName);
          break;
        }
      }
      case "120": {
        for (let a = 0; a <= this.state.WeaponRapier.length - 1; a++) {
          if (this.state.WeaponRapier[a].ItemCode == testcode)
            console.log(this.state.WeaponRapier[a].ItemName);
          break;
        }
      }
      case "121": {
        for (let a = 0; a <= this.state.WeaponGuitar.length - 1; a++) {
          if (this.state.WeaponGuitar[a].ItemCode == testcode)
            console.log(this.state.WeaponGuitar[a].ItemName);
          break;
        }
      }
      case "122": {
        for (let a = 0; a <= this.state.WeaponCamera.length - 1; a++) {
          if (this.state.WeaponCamera[a].ItemCode == testcode)
            console.log(this.state.WeaponCamera[a].ItemName);
          break;
        }
      }
      case "130": {
        for (let a = 0; a <= this.state.WeaponArcana.length - 1; a++) {
          if (this.state.WeaponArcana[a].ItemCode == testcode)
            console.log(this.state.WeaponArcana[a].ItemName);
          break;
        }
      }
    }
  };
  componentDidMount = () => {
    this.pass2();
    this.conlog();
  };
  conlog = () => {
    //금강저 확인

    for (let a = 0; a <= this.state.equipmentArr.length - 1; a++)
      if (this.state.equipmentArr[a].ItemCode == "130405")
        console.log(this.state.equipmentArr[a].ItemName);
  };
  passaa = () => {
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai";
    const res = axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "",
      },
    });
  };
  pass = () => {
    const urlq = "https://lostark.game.onstove.com/Profile/Character/abcdefg";
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai"; //여기가 그냥 닉으로 가져오는거?
    const url2 = "https://open-api.bser.io/v1/user/games/2604769"; //유저의 게임내용 단판? 가져옿기
    const url4 = "https://open-api.bser.io/v1/games/19102821"; //게임모두? 잠깐대기
    const url5 = "https://open-api.bser.io/v1/data/Skill";
    const url6 = "https://open-api.bser.io/v1/data/Trait/Name/"; ////특성
    const url7 = "https://open-api.bser.io/v1/data/Emotion";
    const res = axios.get(url6, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(res);
  };
  pass2 = async () => {
    const url0 = "https://open-api.bser.io/v1/user/nickname?query=사텐";
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai"; //닉넴으로 서치
    const urlUserNum = "https://open-api.bser.io/v1/user/games/2604769";
    const url4 = "https://open-api.bser.io/v1/games/19102821"; //게임모두? 잠깐대기
    const url6 = "https://open-api.bser.io/v1/weaponRoutes/recommend/532117"; ////특성
    const url7 = "https://open-api.bser.io/v1/data/Emotion";

    const abc = axios.get(url6, {
      //기본형
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(abc);
    /////여기서부터  쿼리문에 닉네임을 통해 userNum을 뜯어서 param을 써서 한 번 더 돌려 유저데이터 출력 예정
    const {
      data: {
        user: { userNum },
      },
    } = await axios.get(url, {
      // 여기에 e.target text로 데이터 받아서 유저네임 검색
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(userNum);
    const urlUserNumt = `https://open-api.bser.io/v1/user/games/${userNum}`;
    const {
      data: { userGames },
    } = await axios.get(urlUserNumt, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(userGames);
    this.state.arr.push(userGames);

    for (let a = 0; a <= 2; a++) {
      console.log(
        "캐릭 : " + this.state.characterNumArr[userGames[a].characterNum]
      );
      //여기 첫배열 뒤에부분에 원하는거 적으면 나옴
      console.log("순위 : " + userGames[a].gameRank);
      console.log("킬수 : " + userGames[a].playerKill);
      console.log("어시 : " + userGames[a].playerAssistant);
      console.log("데스 : " + userGames[a].playerDeaths);
      console.log("딜량 : " + userGames[a].damageToPlayer);
      console.log("무숙 : " + userGames[a].bestWeapon);
      console.log(userGames[a].skillLevelInfo);
      console.log(userGames[a].skillOrderInfo);
      this.WeaponSearch(userGames[a].equipment[0]);
      console.log("장비순서 : " + userGames[a].equipment[0]);

      console.log("장비순서 : " + userGames[a].equipment[1]);
      console.log("장비순서 : " + userGames[a].equipment[2]);
      console.log("장비순서 : " + userGames[a].equipment[3]);
      console.log("장비순서 : " + userGames[a].equipment[4]);
      console.log("장비순서 : " + userGames[a].equipment[5]);
    }
    console.log(
      "캐릭 : " + this.state.characterNumArr[userGames[0].characterNum]
    ); //여기 첫배열 뒤에부분에 원하는거 적으면 나옴
    console.log("-------------------------------------");
    console.log("순위 : " + userGames[0].gameRank);
    console.log("킬수 : " + userGames[0].playerKill);
    console.log("어시 : " + userGames[0].playerAssistant);
    console.log("데스 : " + userGames[0].playerDeaths);
    console.log("딜량 : " + userGames[0].damageToPlayer);
    console.log("무숙 : " + userGames[0].bestWeapon);
    console.log(userGames[0].skillLevelInfo);
    console.log(userGames[0].skillOrderInfo);
    console.log("장비순서 : " + userGames[0].equipment[0]);
    console.log("장비순서 : " + userGames[0].equipment[1]);
    console.log("장비순서 : " + userGames[0].equipment[2]);
    console.log("장비순서 : " + userGames[0].equipment[3]);
    console.log("장비순서 : " + userGames[0].equipment[4]);
    console.log("장비순서 : " + userGames[0].equipment[5]);

    //   const url8 = `https://open-api.bser.io/v1/games/${userGames[1].gameId}`;
    //   const res = await axios.get(url8, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "x-api-key": this.state.API_KEY,
    //     },
    //   });
    //   console.log(res);
  };
  getMovies2 = async () => {
    //나를 도와준 착한 블로그야
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
  };

  render() {
    return (
      <div className="Search_User">
        <div onClick={() => this.WeaponSearch(this.state.arr)}>asd</div>
      </div>
    );
  }
}

export default Search_User;
