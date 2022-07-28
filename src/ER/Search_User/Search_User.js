import React, { Component, useState, useEffect } from "react";

import axios from "axios";
import "./Search_User.css";
import NickNameSearch from "./NickNameSearch";
import GameInfo from "./gameInfo.js";

import { useParams, withRouter } from "react-router-dom";

class Search_User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: process.env.REACT_APP_ERKEY,
      NickName: decodeURIComponent(window.location.search).substring(10),
      SearchData: [], //10개 넘어옴
      characterNum: "", //사용 캐릭터
      gameRank: "", // 현게임 등수
      playerKill: "", // 현게임 킬수
      playerAssistant: "", // 현게임 어시
      playerDeaths: "", // 현게임 데스
      damageToPlayer: "", // 현게임 총딜량
      bestWeapon: "", // 무숙
      skillLevelInfo: "", // 스킬별 레벨B
      skillOrderInfo: "", // 스킬 찍은 순서  //함수로 다시 배열 어딘가에 쏘옥 하고 넣엉
      skillOrderInfoArr: [],

      routeIdOfStart: "", // 루트 번호
      matchingMode: "", //플레이한 게임 모드 2,3,6  노말 랭크 코발
      equipment: "", // 사용 아이템 6배열 좌상우하순서
      next: 1,
      abc: "a",

      nexta: 0,
      PlusUserNum: 0,
      PlusNext:0,
      TierArr : [3],
      CharacterArr: [
        ["한글", "영어"],
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

        ["키아라", "Chiara"],
        ["시셀라", "Sissela"],

        ["실비아", "Silvia"],
        ["아드리아나", "Adriana"],
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
        ["에스텔", "Estelle"],
        ["", "Estelle"],
        ["", ""],
        ["", ""],
      ],
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
        { ItemCode: 101101, ItemName: "가위", ItemTier: 1 },
        { ItemCode: 101102, ItemName: "만년필", ItemTier: 1 },
        { ItemCode: 101104, ItemName: "식칼", ItemTier: 1 },
        { ItemCode: 101201, ItemName: "군용 나이프", ItemTier: 2 },
        { ItemCode: 101202, ItemName: "메스", ItemTier: 2 },
        { ItemCode: 101203, ItemName: "자마다르", ItemTier: 2 },
        { ItemCode: 101301, ItemName: "장미칼", ItemTier: 3 },
        { ItemCode: 101302, ItemName: "스위스 아미 나이프", ItemTier: 3 },
        { ItemCode: 101303, ItemName: "카라페이스 카타르", ItemTier: 3 },
        { ItemCode: 101401, ItemName: "카른웬난", ItemTier: 4 },
        { ItemCode: 101402, ItemName: "파산검", ItemTier: 4 },
        { ItemCode: 101404, ItemName: "초진동나이프", ItemTier: 4 },
        { ItemCode: 101405, ItemName: "프라가라흐", ItemTier: 5 },
        { ItemCode: 101406, ItemName: "다마스커스 가시", ItemTier: 4 },
        { ItemCode: 101407, ItemName: "마하라자", ItemTier: 4 },
      ],
      WeaponTwoHanedeSword: [
        { ItemCode: 102101, ItemName: "녹슨 검", ItemTier: 1 },
        { ItemCode: 102201, ItemName: "샴쉬르", ItemTier: 2 },
        { ItemCode: 102301, ItemName: "일본도", ItemTier: 3 },
        { ItemCode: 102401, ItemName: "마사무네", ItemTier: 3 },
        { ItemCode: 102402, ItemName: "무라마사", ItemTier: 3 },
        { ItemCode: 102403, ItemName: "바스타드 소드", ItemTier: 3 },
        { ItemCode: 102404, ItemName: "보검", ItemTier: 3 },
        { ItemCode: 102405, ItemName: "뚜언 띠엔", ItemTier: 4 },
        { ItemCode: 102406, ItemName: "아론다이트", ItemTier: 4 },
        { ItemCode: 102407, ItemName: "엑스칼리버", ItemTier: 4 },
        { ItemCode: 102408, ItemName: "플라즈마 소드", ItemTier: 4 },
        { ItemCode: 102409, ItemName: "레바테인", ItemTier: 5 },
        { ItemCode: 102410, ItemName: "모노호시자오", ItemTier: 4 },
        { ItemCode: 102411, ItemName: "호푸어드", ItemTier: 4 },
        { ItemCode: 102412, ItemName: "빛의 검", ItemTier: 5 },
        { ItemCode: 102501, ItemName: "다인슬라이프", ItemTier: 5 },
      ],
      WeaponDualSwords: [
        { ItemCode: 103201, ItemName: "쌍칼", ItemTier: 1 },
        { ItemCode: 103202, ItemName: "조잡한 쌍검", ItemTier: 2 },
        { ItemCode: 103301, ItemName: "피렌체식 쌍검", ItemTier: 3 },
        { ItemCode: 103302, ItemName: "쌍둥이 검", ItemTier: 3 },
        { ItemCode: 103401, ItemName: "이천일류", ItemTier: 4 },
        { ItemCode: 103402, ItemName: "자웅일대검", ItemTier: 4 },
        { ItemCode: 103403, ItemName: "아수라", ItemTier: 4 },
        { ItemCode: 103501, ItemName: "디오스쿠로이", ItemTier: 4 },
        { ItemCode: 103502, ItemName: "로이거 차르", ItemTier: 5 },
        { ItemCode: 103503, ItemName: "간장과 막야", ItemTier: 5 },
      ],
      WeaponHammer: [
        { ItemCode: 104101, ItemName: "망치", ItemTier: 1 },
        { ItemCode: 104201, ItemName: "워해머", ItemTier: 2 },
        { ItemCode: 104301, ItemName: "모닝 스타", ItemTier: 3 },
        { ItemCode: 104302, ItemName: "사슴 망치", ItemTier: 3 },
        { ItemCode: 104303, ItemName: "운명의 망치", ItemTier: 3 },
        { ItemCode: 104401, ItemName: "낭아봉", ItemTier: 4 },
        { ItemCode: 104402, ItemName: "다그다의 망치", ItemTier: 4 },
        { ItemCode: 104403, ItemName: "토르의 망치", ItemTier: 4 },
        { ItemCode: 104404, ItemName: "개밥바라기", ItemTier: 5 },
        { ItemCode: 104405, ItemName: "마법봉", ItemTier: 4 },
        { ItemCode: 104406, ItemName: "천근추", ItemTier: 4 },
        { ItemCode: 104407, ItemName: "금강저", ItemTier: 4 }, //무기군은 봉인에 해머쪽 코드로 작성되어있음
        { ItemCode: 104501, ItemName: "피스브링어", ItemTier: 5 },
        { ItemCode: 104407, ItemName: "금강저", ItemTier: 4 },
      ],
      WeaponAxe: [
        { ItemCode: 105102, ItemName: "곡괭이", ItemTier: 1 },
        { ItemCode: 105103, ItemName: "손도끼", ItemTier: 1 },
        { ItemCode: 105201, ItemName: "사슬 낫", ItemTier: 2 },
        { ItemCode: 105202, ItemName: "전투 도끼", ItemTier: 2 },
        { ItemCode: 105301, ItemName: "경량화 도끼", ItemTier: 3 },
        { ItemCode: 105302, ItemName: "사신의 낫", ItemTier: 3 },
        { ItemCode: 105401, ItemName: "대부", ItemTier: 3 },
        { ItemCode: 105402, ItemName: "빔 엑스", ItemTier: 4 },
        { ItemCode: 105403, ItemName: "산타 무에르테", ItemTier: 4 },
        { ItemCode: 105404, ItemName: "스퀴테", ItemTier: 4 },
        { ItemCode: 105405, ItemName: "파라슈", ItemTier: 4 },
        { ItemCode: 105406, ItemName: "하르페", ItemTier: 4 },
        { ItemCode: 105407, ItemName: "저거너트", ItemTier: 4 },
        { ItemCode: 105501, ItemName: "반고부", ItemTier: 5 },
      ],
      WeaponSpear: [
        { ItemCode: 107101, ItemName: "단창", ItemTier: 1 },
        { ItemCode: 107201, ItemName: "죽창", ItemTier: 2 },
        { ItemCode: 107301, ItemName: "바이던트", ItemTier: 3 },
        { ItemCode: 107302, ItemName: "파이크", ItemTier: 3 },
        { ItemCode: 107303, ItemName: "도끼창", ItemTier: 3 },
        { ItemCode: 107401, ItemName: "강창", ItemTier: 3 },
        { ItemCode: 107402, ItemName: "애각창", ItemTier: 5 },
        { ItemCode: 107403, ItemName: "장팔사모", ItemTier: 4 },
        { ItemCode: 107404, ItemName: "코스믹 바이던트", ItemTier: 5 },
        { ItemCode: 107405, ItemName: "트리아이나", ItemTier: 4 },
        { ItemCode: 107406, ItemName: "화첨창", ItemTier: 5 },
        { ItemCode: 107407, ItemName: "방천화극", ItemTier: 4 },
        { ItemCode: 107408, ItemName: "청룡언월도", ItemTier: 4 },
        { ItemCode: 107409, ItemName: "나기나타", ItemTier: 4 },
        { ItemCode: 107501, ItemName: "롱기누스의 창", ItemTier: 5 },
      ],
      WeaponBat: [
        { ItemCode: 108101, ItemName: "나뭇가지", ItemTier: 1 },
        { ItemCode: 108102, ItemName: "단봉", ItemTier: 1 },
        { ItemCode: 108103, ItemName: "대나무", ItemTier: 1 },
        { ItemCode: 108104, ItemName: "인체모형", ItemTier: 1 },
        { ItemCode: 108201, ItemName: "먼지털이개", ItemTier: 2 },
        { ItemCode: 108202, ItemName: "장봉", ItemTier: 2 },
        { ItemCode: 108301, ItemName: "도깨비 방망이", ItemTier: 3 },
        { ItemCode: 108401, ItemName: "우산", ItemTier: 3 },
        { ItemCode: 108402, ItemName: "횃불", ItemTier: 3 },
        { ItemCode: 108405, ItemName: "몽둥이", ItemTier: 3 },
        { ItemCode: 108403, ItemName: "구원의 여신상", ItemTier: 4 },
        { ItemCode: 108404, ItemName: "타구봉", ItemTier: 4 },
        { ItemCode: 108501, ItemName: "스파이의 우산", ItemTier: 4 },
        { ItemCode: 104407, ItemName: "금강저", ItemTier: 4 }, //이거만 추가
        { ItemCode: 108502, ItemName: "여의봉", ItemTier: 5 },
      ],
      WeaponWhip: [
        { ItemCode: 109101, ItemName: "채찍", ItemTier: 1 },
        { ItemCode: 109201, ItemName: "오랏줄", ItemTier: 2 },
        { ItemCode: 109202, ItemName: "철편", ItemTier: 2 },
        { ItemCode: 109301, ItemName: "바람 채찍", ItemTier: 3 },
        { ItemCode: 109401, ItemName: "뇌룡편", ItemTier: 4 },
        { ItemCode: 109402, ItemName: "벽력편", ItemTier: 4 },
        { ItemCode: 109403, ItemName: "글레이프니르", ItemTier: 4 },
        { ItemCode: 109404, ItemName: "플라즈마 윕", ItemTier: 4 },
        { ItemCode: 109501, ItemName: "혈화구절편", ItemTier: 5 },
      ],
      WeaponGlove: [
        { ItemCode: 110101, ItemName: "너클", ItemTier: 1 },
        { ItemCode: 110102, ItemName: "목장갑", ItemTier: 1 },
        { ItemCode: 110201, ItemName: "글러브", ItemTier: 2 },
        { ItemCode: 110202, ItemName: "아이언 너클", ItemTier: 2 },
        { ItemCode: 110301, ItemName: "건틀릿", ItemTier: 3 },
        { ItemCode: 110302, ItemName: "윙 너클", ItemTier: 3 },
        { ItemCode: 110401, ItemName: "귀골 장갑", ItemTier: 3 },
        { ItemCode: 110402, ItemName: "벽력귀투", ItemTier: 3 },
        { ItemCode: 110403, ItemName: "유리 너클", ItemTier: 3 },
        { ItemCode: 110404, ItemName: "회단 장갑", ItemTier: 3 },
        { ItemCode: 110405, ItemName: "단영촌천투", ItemTier: 4 },
        { ItemCode: 110406, ItemName: "디바인 피스트", ItemTier: 4 },
        { ItemCode: 110407, ItemName: "블러드윙 너클", ItemTier: 4 },
        { ItemCode: 110408, ItemName: "빙화현옥수", ItemTier: 4 },
        { ItemCode: 110409, ItemName: "여래수투", ItemTier: 4 },
        { ItemCode: 110410, ItemName: "브레이질 건틀릿", ItemTier: 4 },
        { ItemCode: 110411, ItemName: "소수", ItemTier: 4 },
        { ItemCode: 110412, ItemName: "천잠장갑", ItemTier: 5 },
        { ItemCode: 110501, ItemName: "주작자문", ItemTier: 5 },
        { ItemCode: 110502, ItemName: "프로스트팽", ItemTier: 5 },
      ],
      WeaponTonfa: [
        { ItemCode: 123123, ItemName: "대나무", ItemTier: 1 }, //찾
        { ItemCode: 111101, ItemName: "맷손", ItemTier: 1 },
        { ItemCode: 111201, ItemName: "톤파", ItemTier: 2 },
        { ItemCode: 111301, ItemName: "경찰봉", ItemTier: 3 },
        { ItemCode: 111401, ItemName: "류큐톤파", ItemTier: 3 },
        { ItemCode: 111402, ItemName: "택티컬 톤파", ItemTier: 4 },
        { ItemCode: 111403, ItemName: "마이쏙", ItemTier: 4 },
        { ItemCode: 111404, ItemName: "플라즈마 톤파", ItemTier: 4 },
        { ItemCode: 111405, ItemName: "윈드러너", ItemTier: 5 },
        { ItemCode: 111501, ItemName: "흑요석 짓테", ItemTier: 5 },
      ],
      WeaponThrow: [
        { ItemCode: 112101, ItemName: "돌멩이", ItemTier: 1 },
        { ItemCode: 112103, ItemName: "쇠구슬", ItemTier: 1 },
        { ItemCode: 112104, ItemName: "유리병", ItemTier: 1 },
        { ItemCode: 401215, ItemName: "달궈진 돌멩이", ItemTier: 2 }, // 아니},이게 왜 여깃냐고
        { ItemCode: 112105, ItemName: "야구공", ItemTier: 1 },
        { ItemCode: 112202, ItemName: "수류탄", ItemTier: 2 },
        { ItemCode: 112203, ItemName: "화염병", ItemTier: 2 },
        { ItemCode: 112204, ItemName: "슬링", ItemTier: 3 },
        { ItemCode: 112205, ItemName: "싸인볼", ItemTier: 2 },
        { ItemCode: 112301, ItemName: "밀가루 폭탄", ItemTier: 3 },
        { ItemCode: 112302, ItemName: "소이탄", ItemTier: 4 },
        { ItemCode: 112303, ItemName: "볼 라이트닝", ItemTier: 3 },
        { ItemCode: 112304, ItemName: "플러버", ItemTier: 3 },
        { ItemCode: 112305, ItemName: "안티오크의 수류탄", ItemTier: 4 },
        { ItemCode: 112306, ItemName: "필럼", ItemTier: 3 },
        { ItemCode: 112401, ItemName: "다비드슬링", ItemTier: 4 },
        { ItemCode: 112402, ItemName: "연막탄", ItemTier: 4 },
        { ItemCode: 112403, ItemName: "가시 탱탱볼", ItemTier: 3 },
        { ItemCode: 112404, ItemName: "고폭 수류탄", ItemTier: 3 },
        { ItemCode: 112501, ItemName: "루테늄 구슬", ItemTier: 4 },
        { ItemCode: 112405, ItemName: "파이어 볼", ItemTier: 4 },
        { ItemCode: 112406, ItemName: "프리즘 볼", ItemTier: 5 },
        { ItemCode: 112407, ItemName: "아스트라페", ItemTier: 4 },
      ],
      WeaponShuriken: [
        { ItemCode: 113101, ItemName: "면도칼", ItemTier: 1 },
        { ItemCode: 113102, ItemName: "트럼프 카드", ItemTier: 1 },
        { ItemCode: 113103, ItemName: "CD", ItemTier: 1 },
        { ItemCode: 113104, ItemName: "분필", ItemTier: 1 },
        { ItemCode: 113201, ItemName: "다트", ItemTier: 2 },
        { ItemCode: 113202, ItemName: "부적", ItemTier: 3 },
        { ItemCode: 113203, ItemName: "빈티지 카드", ItemTier: 2 },
        { ItemCode: 113204, ItemName: "토마호크", ItemTier: 3 },
        { ItemCode: 113205, ItemName: "표창", ItemTier: 2 },
        { ItemCode: 113206, ItemName: "흑건", ItemTier: 2 },
        { ItemCode: 113207, ItemName: "유엽비도", ItemTier: 3 },
        { ItemCode: 113301, ItemName: "챠크람", ItemTier: 3 },
        { ItemCode: 113302, ItemName: "매화비표", ItemTier: 3 },
        { ItemCode: 113401, ItemName: "미치광이왕의 카드", ItemTier: 4 },
        { ItemCode: 113402, ItemName: "독침", ItemTier: 3 },
        { ItemCode: 113403, ItemName: "법륜", ItemTier: 3 },
        { ItemCode: 113404, ItemName: "플럼바타", ItemTier: 3 },
        { ItemCode: 113405, ItemName: "옥전결", ItemTier: 4 },
        { ItemCode: 113406, ItemName: "풍마 수리검", ItemTier: 4 },
        { ItemCode: 113407, ItemName: "본크러셔", ItemTier: 4 },
        { ItemCode: 113408, ItemName: "빙백은침", ItemTier: 4 },
        { ItemCode: 113409, ItemName: "푸른색 단도", ItemTier: 4 },
        { ItemCode: 113410, ItemName: "플레솃", ItemTier: 4 },
        { ItemCode: 113411, ItemName: "건곤권", ItemTier: 4 },
        { ItemCode: 113412, ItemName: "생사부", ItemTier: 5 },
        { ItemCode: 113501, ItemName: "수다르사나", ItemTier: 5 },
        { ItemCode: 113502, ItemName: "만천화우", ItemTier: 5 },
      ],
      WeaponBow: [
        { ItemCode: 114101, ItemName: "양궁", ItemTier: 1 },
        { ItemCode: 114201, ItemName: "목궁", ItemTier: 2 },
        { ItemCode: 114202, ItemName: "장궁", ItemTier: 2 },
        { ItemCode: 114203, ItemName: "컴포지트 보우", ItemTier: 3 },
        { ItemCode: 114301, ItemName: "강궁", ItemTier: 3 },
        { ItemCode: 114302, ItemName: "국궁", ItemTier: 3 },
        { ItemCode: 114303, ItemName: "벽력궁", ItemTier: 3 },
        { ItemCode: 114304, ItemName: "탄궁", ItemTier: 3 },
        { ItemCode: 114401, ItemName: "편전", ItemTier: 4 },
        { ItemCode: 114402, ItemName: "화전", ItemTier: 3 },
        { ItemCode: 114403, ItemName: "골든래쇼 보우", ItemTier: 4 },
        { ItemCode: 114404, ItemName: "큐피드의 활", ItemTier: 4 },
        { ItemCode: 114405, ItemName: "트윈보우", ItemTier: 4 },
        { ItemCode: 114406, ItemName: "제베의 활", ItemTier: 4 },
        { ItemCode: 114501, ItemName: "엘리멘탈 보우", ItemTier: 4 },
        { ItemCode: 114502, ItemName: "페일노트", ItemTier: 5 },
        { ItemCode: 114503, ItemName: "아르기로톡소스", ItemTier: 5 },
        { ItemCode: 114407, ItemName: "아르테미스", ItemTier: 5 },
      ],
      WeaponCrossbow: [
        { ItemCode: 115101, ItemName: "석궁", ItemTier: 1 },
        { ItemCode: 115201, ItemName: "쇠뇌", ItemTier: 2 },
        { ItemCode: 115202, ItemName: "크로스보우", ItemTier: 2 },
        { ItemCode: 115301, ItemName: "노", ItemTier: 3 },
        { ItemCode: 115302, ItemName: "저격궁", ItemTier: 3 },
        { ItemCode: 115303, ItemName: "헤비 크로스보우", ItemTier: 3 },
        { ItemCode: 115401, ItemName: "철궁", ItemTier: 3 },
        { ItemCode: 115402, ItemName: "대황", ItemTier: 4 },
        { ItemCode: 115403, ItemName: "발리스타", ItemTier: 4 },
        { ItemCode: 115404, ItemName: "저격 크로스보우", ItemTier: 4 },
        { ItemCode: 115405, ItemName: "영광금귀신기노", ItemTier: 4 },
        { ItemCode: 115501, ItemName: "샤릉가", ItemTier: 5 },
      ],
      WeaponPistol: [
        { ItemCode: 116101, ItemName: "발터 PPK", ItemTier: 1 },
        { ItemCode: 116201, ItemName: "매그넘-파이선", ItemTier: 2 },
        { ItemCode: 116202, ItemName: "베레타 M92F", ItemTier: 2 },
        { ItemCode: 116301, ItemName: "FN57", ItemTier: 3 },
        { ItemCode: 116401, ItemName: "더블 리볼버 SP", ItemTier: 3 },
        { ItemCode: 116402, ItemName: "매그넘-아나콘다", ItemTier: 3 },
        { ItemCode: 116408, ItemName: "데린저", ItemTier: 3 },
        { ItemCode: 116403, ItemName: "마탄의 사수", ItemTier: 5 },
        { ItemCode: 116404, ItemName: "엘레강스", ItemTier: 4 },
        { ItemCode: 116405, ItemName: "일렉트론 블라스터", ItemTier: 4 },
        { ItemCode: 116406, ItemName: "매그넘-보아", ItemTier: 4 },
        { ItemCode: 116407, ItemName: "글록 48", ItemTier: 4 },
        { ItemCode: 116409, ItemName: "스탬피드", ItemTier: 4 },
        { ItemCode: 116501, ItemName: "악켈테", ItemTier: 5 },
      ],
      WeaponAssaultRifle: [
        { ItemCode: 117101, ItemName: "페도로프 자동소총", ItemTier: 1 },
        { ItemCode: 117201, ItemName: "STG-44", ItemTier: 2 },
        { ItemCode: 117301, ItemName: "AK-47", ItemTier: 3 },
        { ItemCode: 117401, ItemName: "M16A1", ItemTier: 3 },
        { ItemCode: 117402, ItemName: "개틀링 건", ItemTier: 3 },
        { ItemCode: 117403, ItemName: "95식 자동 소총", ItemTier: 4 },
        { ItemCode: 117404, ItemName: "AK-12", ItemTier: 4 },
        { ItemCode: 117405, ItemName: "XCR", ItemTier: 4 },
        { ItemCode: 117406, ItemName: "저지먼트", ItemTier: 5 },
        { ItemCode: 117501, ItemName: "아그니", ItemTier: 4 },
      ],
      WeaponSniperRifle: [
        { ItemCode: 118101, ItemName: "화승총", ItemTier: 1 },
        { ItemCode: 118201, ItemName: "스프링필드", ItemTier: 2 },
        { ItemCode: 118301, ItemName: "하푼건", ItemTier: 3 },
        { ItemCode: 118401, ItemName: "금교전", ItemTier: 3 },
        { ItemCode: 118402, ItemName: "레일건", ItemTier: 3 },
        { ItemCode: 118403, ItemName: "Tac-50", ItemTier: 4 },
        { ItemCode: 118404, ItemName: "인터벤션", ItemTier: 4 },
        { ItemCode: 118405, ItemName: "NTW-20", ItemTier: 4 },
        { ItemCode: 118406, ItemName: "폴라리스", ItemTier: 4 },
        { ItemCode: 118501, ItemName: "사사성광", ItemTier: 5 },
        { ItemCode: 118502, ItemName: "현자총통", ItemTier: 5 },
      ],
      WeaponNunchaku: [
        { ItemCode: 119101, ItemName: "쇠사슬", ItemTier: 1 },
        { ItemCode: 119201, ItemName: "눈차크", ItemTier: 2 },
        { ItemCode: 119301, ItemName: "샤퍼", ItemTier: 3 },
        { ItemCode: 119302, ItemName: "블리더", ItemTier: 3 },
        { ItemCode: 119401, ItemName: "대소반룡곤", ItemTier: 4 },
        { ItemCode: 119402, ItemName: "초진동눈차크", ItemTier: 4 },
        { ItemCode: 119403, ItemName: "케르베로스", ItemTier: 4 },
        { ItemCode: 119501, ItemName: "히드라", ItemTier: 5 },
      ],
      WeaponRapier: [
        { ItemCode: 120101, ItemName: "바늘", ItemTier: 1 },
        { ItemCode: 120201, ItemName: "레이피어", ItemTier: 2 },
        { ItemCode: 120301, ItemName: "매화검", ItemTier: 3 },
        { ItemCode: 120302, ItemName: "활빈검", ItemTier: 4 },
        { ItemCode: 120303, ItemName: "에스톡", ItemTier: 3 },
        { ItemCode: 120401, ItemName: "듀랜달 Mk2", ItemTier: 4 },
        { ItemCode: 120402, ItemName: "미스틸테인", ItemTier: 5 },
        { ItemCode: 120403, ItemName: "볼틱레토", ItemTier: 4 },
        { ItemCode: 120404, ItemName: "유성검", ItemTier: 5 },
        { ItemCode: 120405, ItemName: "주와이외즈", ItemTier: 5 },
        { ItemCode: 120406, ItemName: "레드 팬서", ItemTier: 4 },
        { ItemCode: 120407, ItemName: "에스프리", ItemTier: 4 },
      ],
      WeaponGuitar: [
        { ItemCode: 121101, ItemName: "보급형 기타", ItemTier: 1 },
        { ItemCode: 121201, ItemName: "골든 브릿지", ItemTier: 2 },
        { ItemCode: 121202, ItemName: "싱글 픽업", ItemTier: 2 },
        { ItemCode: 121301, ItemName: "루비 스페셜", ItemTier: 3 },
        { ItemCode: 121302, ItemName: "험버커 픽업", ItemTier: 3 },
        { ItemCode: 121303, ItemName: "King-V", ItemTier: 3 },
        { ItemCode: 121304, ItemName: "노캐스터", ItemTier: 3 },
        { ItemCode: 121305, ItemName: "슈퍼스트랫", ItemTier: 3 },
        { ItemCode: 121306, ItemName: "야생마", ItemTier: 3 },
        { ItemCode: 121401, ItemName: "보헤미안", ItemTier: 4 },
        { ItemCode: 121402, ItemName: "천국의 계단", ItemTier: 4 },
        { ItemCode: 121403, ItemName: "퍼플 헤이즈", ItemTier: 4 },
        { ItemCode: 121404, ItemName: "새티스팩션", ItemTier: 4 },
        { ItemCode: 121405, ItemName: "원더풀 투나잇", ItemTier: 5 },
        { ItemCode: 121406, ItemName: "더 월", ItemTier: 4 },
        { ItemCode: 121407, ItemName: "틴 스피릿", ItemTier: 4 },
      ],
      WeaponCamera: [
        { ItemCode: 122101, ItemName: "렌즈", ItemTier: 1 },
        { ItemCode: 122201, ItemName: "카메라 건", ItemTier: 2 },
        { ItemCode: 122301, ItemName: "컴팩트 카메라 ", ItemTier: 3 },
        { ItemCode: 122302, ItemName: "레인지파인더 ", ItemTier: 3 },
        { ItemCode: 122303, ItemName: "카메라 라이플 ", ItemTier: 3 },
        { ItemCode: 122401, ItemName: "미러리스", ItemTier: 4 },
        { ItemCode: 122402, ItemName: "컴파운드 사이트", ItemTier: 4 },
        { ItemCode: 122403, ItemName: "카메라 캐논", ItemTier: 4 },
        { ItemCode: 122404, ItemName: "V.I.C.G", ItemTier: 4 },
        { ItemCode: 131313, ItemName: "울트라비전 ", ItemTier: 5 }, //찾
      ],
      WeaponArcana: [
        { ItemCode: 130101, ItemName: "유리구슬", ItemTier: 1 },
        { ItemCode: 130201, ItemName: "거울구슬", ItemTier: 2 },
        { ItemCode: 130202, ItemName: "얼음구슬", ItemTier: 2 },
        { ItemCode: 130301, ItemName: "의지의 지팡이", ItemTier: 3 },
        { ItemCode: 130302, ItemName: "감정의 컵", ItemTier: 3 },
        { ItemCode: 130303, ItemName: "이성의 칼", ItemTier: 3 },
        { ItemCode: 130304, ItemName: "소유의 펜타클", ItemTier: 3 },
        { ItemCode: 130401, ItemName: "은둔자", ItemTier: 4 },
        { ItemCode: 130402, ItemName: "운명의 수레바퀴", ItemTier: 4 },
        { ItemCode: 130403, ItemName: "절제", ItemTier: 4 },
        { ItemCode: 130404, ItemName: "더 스타", ItemTier: 4 },
        { ItemCode: 130405, ItemName: "더 문", ItemTier: 5 },
        { ItemCode: 141414, ItemName: "여제", ItemTier: 5 }, //찾
      ],
      WeaponVFProsthetic: [
        { ItemCode: 131201, ItemName: "바이퍼", ItemTier: 2 },
        { ItemCode: 131301, ItemName: "데스애더", ItemTier: 3 },
        { ItemCode: 131302, ItemName: "블랙맘바", ItemTier: 3 },
        { ItemCode: 131303, ItemName: "사이드와인더", ItemTier: 3 },
        { ItemCode: 131401, ItemName: "데스애더퀸", ItemTier: 4 },
        { ItemCode: 131402, ItemName: "블랙맘바킹", ItemTier: 4 },
        { ItemCode: 131403, ItemName: "슈퍼사이드와인더", ItemTier: 4 },
        { ItemCode: 131501, ItemName: "데스애더퀸-MT", ItemTier: 5 },
        { ItemCode: 131502, ItemName: "데스애더퀸-FC", ItemTier: 5 },
        { ItemCode: 131503, ItemName: "데스애더퀸-VBS", ItemTier: 5 },
        { ItemCode: 131504, ItemName: "블랙맘바킹-TL", ItemTier: 5 },
        { ItemCode: 131505, ItemName: "블랙맘바킹-FC", ItemTier: 5 },
        { ItemCode: 131506, ItemName: "블랙맘바킹-VBS", ItemTier: 5 },
        { ItemCode: 131507, ItemName: "슈퍼사이드와인더-ML", ItemTier: 5 },
        { ItemCode: 131508, ItemName: "슈퍼사이드와인더-FC", ItemTier: 5 },
        { ItemCode: 131509, ItemName: "슈퍼사이드와인더-VBS", ItemTier: 5 },
        
      ],
      HatEquipmentArr: [
        { ItemCode: 201101, ItemName: "머리띠", ItemTier: 1 },
        { ItemCode: 201102, ItemName: "모자", ItemTier: 1 },
        { ItemCode: 201104, ItemName: "자전거 헬멧", ItemTier: 1 },
        { ItemCode: 201201, ItemName: "가면", ItemTier: 2 },
        { ItemCode: 201202, ItemName: "머리테", ItemTier: 2 },
        { ItemCode: 201203, ItemName: "베레모", ItemTier: 2 },
        { ItemCode: 201204, ItemName: "사슬 코이프", ItemTier: 2 },
        { ItemCode: 201205, ItemName: "안전모", ItemTier: 2 },
        { ItemCode: 201301, ItemName: "방탄모", ItemTier: 3 },
        { ItemCode: 201302, ItemName: "소방 헬멧", ItemTier: 3 },
        { ItemCode: 201303, ItemName: "티아라", ItemTier: 3 },
        { ItemCode: 201304, ItemName: "로빈", ItemTier: 4 },
        { ItemCode: 201401, ItemName: "왕관", ItemTier: 3 },
        { ItemCode: 201402, ItemName: "투구", ItemTier: 3 },
        { ItemCode: 201403, ItemName: "미스릴 투구", ItemTier: 5 },
        { ItemCode: 201404, ItemName: "수정 티아라", ItemTier: 4 },
        { ItemCode: 201405, ItemName: "오토바이 헬멧", ItemTier: 3 },
        { ItemCode: 201406, ItemName: "전술-OPS 헬멧", ItemTier: 4 },
        { ItemCode: 201407, ItemName: "기사단장의 투구", ItemTier: 4 },
        { ItemCode: 201408, ItemName: "월계관", ItemTier: 5 },
        { ItemCode: 201409, ItemName: "제국 왕관", ItemTier: 4 },
        { ItemCode: 201410, ItemName: "황실 부르고넷", ItemTier: 4 },
        { ItemCode: 201411, ItemName: "변검", ItemTier: 5 },
        { ItemCode: 201412, ItemName: "모호크 헬멧", ItemTier: 4 },
        { ItemCode: 201413, ItemName: "비질란테", ItemTier: 4 },
        { ItemCode: 201414, ItemName: "다이아뎀", ItemTier: 4 },
        { ItemCode: 201501, ItemName: "천사의 고리", ItemTier: 5 },
        { ItemCode: 201502, ItemName: "빛의 증표", ItemTier: 5 },
        { ItemCode: 701451, ItemName: "택티컬 바이저", ItemTier: 6 },
        { ItemCode: "empty",   ItemName: "empty", ItemTier: 0 },
      ],
      ChestEquipmentArr: [
        { ItemCode: 202101, ItemName: "바람막이", ItemTier: 1 },
        { ItemCode: 202103, ItemName: "승복", ItemTier: 1 },
        { ItemCode: 202104, ItemName: "의사가운", ItemTier: 1 },
        { ItemCode: 202105, ItemName: "전신 수영복", ItemTier: 1 },
        { ItemCode: 202106, ItemName: "천 갑옷", ItemTier: 1 },
        { ItemCode: 202201, ItemName: "가죽 갑옷", ItemTier: 2 },
        { ItemCode: 202202, ItemName: "가죽 자켓", ItemTier: 2 },
        { ItemCode: 202203, ItemName: "거북 도복", ItemTier: 2 },
        { ItemCode: 202205, ItemName: "군복", ItemTier: 2 },
        { ItemCode: 202206, ItemName: "덧댄 로브", ItemTier: 2 },
        { ItemCode: 202207, ItemName: "드레스", ItemTier: 2 },
        { ItemCode: 202208, ItemName: "드레스 셔츠", ItemTier: 2 },
        { ItemCode: 202209, ItemName: "비키니", ItemTier: 2 },
        { ItemCode: 202210, ItemName: "잠수복", ItemTier: 2 },
        { ItemCode: 202211, ItemName: "사제복", ItemTier: 2 },
        { ItemCode: 202301, ItemName: "라이더 자켓", ItemTier: 3 },
        { ItemCode: 202302, ItemName: "사슬 갑옷", ItemTier: 3 },
        { ItemCode: 202303, ItemName: "정장", ItemTier: 3 },
        { ItemCode: 202304, ItemName: "치파오", ItemTier: 3 },
        { ItemCode: 202305, ItemName: "판금 갑옷", ItemTier: 3 },
        { ItemCode: 202306, ItemName: "한복", ItemTier: 3 },
        { ItemCode: 202307, ItemName: "고위 사제복", ItemTier: 3 },
        { ItemCode: 202401, ItemName: "방탄조끼", ItemTier: 3 },
        { ItemCode: 202402, ItemName: "석양의 갑옷", ItemTier: 4 },
        { ItemCode: 202404, ItemName: "어사의", ItemTier: 3 },
        { ItemCode: 202405, ItemName: "광학미채 슈트", ItemTier: 4 },
        { ItemCode: 202406, ItemName: "락커의 자켓", ItemTier: 4 },
        { ItemCode: 202407, ItemName: "미스릴 갑옷", ItemTier: 5 },
        { ItemCode: 202421, ItemName: "미스릴 크롭", ItemTier: 5 },
        { ItemCode: 202408, ItemName: "성기사의 갑옷", ItemTier: 4 },
        { ItemCode: 202409, ItemName: "아름다운 갑옷", ItemTier: 4 },
        { ItemCode: 202410, ItemName: "아마조네스 아머", ItemTier: 4 },
        { ItemCode: 202411, ItemName: "용의 도복", ItemTier: 4 },
        { ItemCode: 202412, ItemName: "지휘관의 갑옷", ItemTier: 4 },
        { ItemCode: 202413, ItemName: "집사복", ItemTier: 4 },
        { ItemCode: 202415, ItemName: "배틀 슈트", ItemTier: 4 },
        { ItemCode: 202416, ItemName: "불꽃 드레스", ItemTier: 5 },
        { ItemCode: 202417, ItemName: "EOD 슈트", ItemTier: 4 },
        { ItemCode: 202418, ItemName: "턱시도", ItemTier: 4 },
        { ItemCode: 202419, ItemName: "제사장의 예복", ItemTier: 4 },
        { ItemCode: 202420, ItemName: "창파오", ItemTier: 4 },
        { ItemCode: 202501, ItemName: "카바나", ItemTier: 5 },
        { ItemCode: 202502, ItemName: "퀸 오브 하트", ItemTier: 5 },
        { ItemCode: 202503, ItemName: "성법의", ItemTier: 5 },
        { ItemCode: 702503, ItemName: "성법의Mk-2", ItemTier: 5 },
        { ItemCode: 202504, ItemName: "버건디 47", ItemTier: 5 },
        { ItemCode: 202505, ItemName: "아오자이", ItemTier:5},
        { ItemCode: 202601, ItemName: "이단심판관", ItemTier:6},
        { ItemCode: "empty",   ItemName: "empty", ItemTier: 0 },
        //찾  //마이템이랑 없네
      ],
      ArmEquipmentArr: [
        { ItemCode: 203101, ItemName: "손목시계", ItemTier: 1 },
        { ItemCode: 203102, ItemName: "붕대", ItemTier: 1 },
        { ItemCode: 203103, ItemName: "토시", ItemTier: 1 },
        { ItemCode: 203104, ItemName: "팔찌", ItemTier: 1 },
        { ItemCode: 203201, ItemName: "가죽 방패", ItemTier: 2 },
        { ItemCode: 203202, ItemName: "분대장 완장", ItemTier: 2 },
        { ItemCode: 203203, ItemName: "브레이서", ItemTier: 2 },
        { ItemCode: 203204, ItemName: "고장난 시계", ItemTier: 2 },
        { ItemCode: 203301, ItemName: "검집", ItemTier: 3 },
        { ItemCode: 203302, ItemName: "금팔찌", ItemTier: 3 },
        { ItemCode: 203303, ItemName: "바주반드", ItemTier: 3 },
        { ItemCode: 203304, ItemName: "진홍 팔찌", ItemTier: 3 },
        { ItemCode: 203305, ItemName: "바브드 블로섬", ItemTier: 3 },
        { ItemCode: 203306, ItemName: "포이즌드", ItemTier: 3 },
        { ItemCode: 203401, ItemName: "강철 방패", ItemTier: 3 },
        { ItemCode: 203402, ItemName: "소드 스토퍼", ItemTier: 4 },
        { ItemCode: 203403, ItemName: "드라우프니르", ItemTier: 4 },
        { ItemCode: 203404, ItemName: "미스릴 방패", ItemTier: 5 },
        { ItemCode: 203405, ItemName: "바이탈 센서", ItemTier: 3 },
        { ItemCode: 203406, ItemName: "기사의 신조", ItemTier: 4 },
        { ItemCode: 203407, ItemName: "샤자한의 검집", ItemTier: 4 },
        { ItemCode: 203408, ItemName: "큐브 워치", ItemTier: 5 },
        { ItemCode: 203409, ItemName: "아이기스", ItemTier: 4 },
        { ItemCode: 203410, ItemName: "틴달로스의 팔찌", ItemTier: 4 },
        { ItemCode: 203411, ItemName: "나이팅게일", ItemTier: 4 },
        { ItemCode: 203412, ItemName: "플라즈마 아크", ItemTier: 4 },
        { ItemCode: 203413, ItemName: "텔루리안 타임피스", ItemTier: 5 },
        { ItemCode: 203414, ItemName: "스마트 밴드", ItemTier: 4 },
        { ItemCode: 203501, ItemName: "스카디의 팔찌", ItemTier: 5 },
        { ItemCode: 203502, ItemName: "레이더", ItemTier: 4 },
        { ItemCode: 203503, ItemName: "오토-암즈", ItemTier: 5 },
        { ItemCode: 203504, ItemName: "프로미넌스", ItemTier: 5 },
        { ItemCode: "empty",   ItemName: "empty", ItemTier: 0 },
      ],
      LegEquipmentArr: [
        { ItemCode: 204101, ItemName: "슬리퍼", ItemTier: 1 },
        { ItemCode: 204102, ItemName: "운동화", ItemTier: 1 },
        { ItemCode: 204103, ItemName: "타이즈", ItemTier: 1 },
        { ItemCode: 204201, ItemName: "무릎 보호대", ItemTier: 2 },
        { ItemCode: 204202, ItemName: "체인 레깅스", ItemTier: 2 },
        { ItemCode: 204203, ItemName: "하이힐", ItemTier: 2 },
        { ItemCode: 204204, ItemName: "힐리스", ItemTier: 2 },
        { ItemCode: 204205, ItemName: "나막신", ItemTier: 2 },
        { ItemCode: 204301, ItemName: "덧댄 슬리퍼", ItemTier: 2 },
        { ItemCode: 204302, ItemName: "부츠", ItemTier: 2 },
        { ItemCode: 204303, ItemName: "등산화", ItemTier: 3 },
        { ItemCode: 204401, ItemName: "강철 무릎 보호대", ItemTier: 3 },
        { ItemCode: 204402, ItemName: "경량화 부츠", ItemTier: 4 },
        { ItemCode: 204403, ItemName: "매버릭 러너", ItemTier: 4 },
        { ItemCode: 204404, ItemName: "전투화", ItemTier: 3 },
        { ItemCode: 204405, ItemName: "킬힐", ItemTier: 3 },
        { ItemCode: 204406, ItemName: "풍화륜", ItemTier: 4 },
        { ItemCode: 204407, ItemName: "미스릴 부츠", ItemTier: 5 },
        { ItemCode: 204408, ItemName: "부케팔로스", ItemTier: 4 },
        { ItemCode: 204409, ItemName: "EOD 부츠", ItemTier: 4 },
        { ItemCode: 204410, ItemName: "글레이셜 슈즈", ItemTier: 5 },
        { ItemCode: 204411, ItemName: "클링온 부츠", ItemTier: 4 },
        { ItemCode: 204412, ItemName: "타키온 브레이스", ItemTier: 4 },
        { ItemCode: 204413, ItemName: "탭루트", ItemTier: 5 },
        { ItemCode: 204501, ItemName: "헤르메스의 부츠", ItemTier: 5 },
        { ItemCode: 204502, ItemName: "분홍신", ItemTier: 5 },
        { ItemCode: "empty",   ItemName: "empty", ItemTier: 0 },
        //찾   아이젠
      ],
      AccessoryEquipmentArr: [
        { ItemCode: 205101, ItemName: "깃털", ItemTier: 1 },
        { ItemCode: 205102, ItemName: "꽃", ItemTier: 1 },
        { ItemCode: 205103, ItemName: "리본", ItemTier: 1 },
        { ItemCode: 205105, ItemName: "부채", ItemTier: 1 },
        { ItemCode: 205106, ItemName: "불경", ItemTier: 1 },
        { ItemCode: 205107, ItemName: "상자", ItemTier: 1 },
        { ItemCode: 205108, ItemName: "성배", ItemTier: 1 },
        { ItemCode: 205109, ItemName: "십자가", ItemTier: 1 },
        { ItemCode: 205110, ItemName: "쌍안경", ItemTier: 1 },
        { ItemCode: 205201, ItemName: "백우선", ItemTier: 3 },
        { ItemCode: 205202, ItemName: "성자의 유산", ItemTier: 2 },
        { ItemCode: 205203, ItemName: "운명의 꽃", ItemTier: 2 },
        { ItemCode: 205204, ItemName: "유리 조각", ItemTier: 2 },
        { ItemCode: 205205, ItemName: "인형", ItemTier: 2 },
        { ItemCode: 205206, ItemName: "저격 스코프", ItemTier: 2 },
        { ItemCode: 205207, ItemName: "진신사리", ItemTier: 2 },
        { ItemCode: 205208, ItemName: "화살통", ItemTier: 2 },
        { ItemCode: 205209, ItemName: "먼지털이개", ItemTier: 2 },
        { ItemCode: 205210, ItemName: "군선", ItemTier: 2 },
        { ItemCode: 205211, ItemName: "비파단도", ItemTier: 2 },
        { ItemCode: 205212, ItemName: "캐리비안 장식총", ItemTier: 2 },
        { ItemCode: 205213, ItemName: "사격 교본", ItemTier: 2 },
        { ItemCode: 205301, ItemName: " 생명의 가루", ItemTier: 2 },
        { ItemCode: 205302, ItemName: "우치와", ItemTier: 3 },
        { ItemCode: 205303, ItemName: "탄창", ItemTier: 3 },
        { ItemCode: 205304, ItemName: "궁기병의 화살통", ItemTier: 3 },
        { ItemCode: 205305, ItemName: "월왕구천", ItemTier: 3 },
        { ItemCode: 205306, ItemName: "해적의 증표", ItemTier: 3 },
        { ItemCode: 205307, ItemName: "호크 아이", ItemTier: 3 },
        { ItemCode: 205308, ItemName: "해적 깃발", ItemTier: 3 },
        { ItemCode: 205309, ItemName: "오르골", ItemTier: 3 },
        { ItemCode: 205310, ItemName: "능동 위장", ItemTier: 3 },
        { ItemCode: 205311, ItemName: "마도서", ItemTier: 3 },
        { ItemCode: 205312, ItemName: "아이테르 깃털", ItemTier: 3 },
        { ItemCode: 205401, ItemName: " 달빛 펜던트", ItemTier: 5 },
        { ItemCode: 205402, ItemName: "만년빙", ItemTier: 4 },
        { ItemCode: 205403, ItemName: "삼매진화", ItemTier: 4 },
        { ItemCode: 205404, ItemName: "슈뢰딩거의 상자", ItemTier: 3 },
        { ItemCode: 205405, ItemName: "진리는 나의 빛", ItemTier: 3 },
        { ItemCode: 205406, ItemName: "요명월", ItemTier: 5 },
        { ItemCode: 205407, ItemName: "미스릴 퀴버", ItemTier: 5 },
        { ItemCode: 205408, ItemName: "살라딘의 화살통", ItemTier: 5 },
        { ItemCode: 205409, ItemName: "살라딘의 화살통 MK2", ItemTier: 5 },
        { ItemCode: 205501, ItemName: "에메랄드 타블렛", ItemTier: 5 },
        { ItemCode: 205502, ItemName: "파초선", ItemTier: 5 },
        { ItemCode: 205503, ItemName: "쿤달라", ItemTier: 5 },
        { ItemCode: 205504, ItemName: "아티팩트", ItemTier: 5 },
        { ItemCode: 205505, ItemName: "호루스의 눈", ItemTier: 5 },
        { ItemCode: 205506, ItemName: "쿤달라MK2", ItemTier: 5 },
        { ItemCode: 205507, ItemName: "네크로노미콘", ItemTier: 5 },
        { ItemCode: 705504, ItemName: "쿤달라", ItemTier: 5 },
        { ItemCode: 705601, ItemName: "미니어쳐솔라시스템", ItemTier: 6 },
        { ItemCode: 705602, ItemName: "코발트블루", ItemTier: 6 },
        { ItemCode: "empty",   ItemName: "empty", ItemTier: 0 },
      ],
      equipmentArr: [
        //배열을 장비위치나 재료별로 종류별로 세팅해서 맵을 최대한 적게 돌리게끔 설정?
      ],
    };

    ///////
  }
  masterkey = () => {
   
  };
  WeaponSearch = (inData) => {
    var WeaponSearchCode = inData;
    let WeaponCode = Math.floor(WeaponSearchCode / 1000);
    console.log(WeaponCode)

    switch (WeaponCode) {
      case 101: {
        for (let a = 0; a <= this.state.WeaponDagger.length - 1; a++) {
          if (this.state.WeaponDagger[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponDagger[a])
        }
        break;
      }
      case 102: {
        for (let a = 0; a <= this.state.WeaponTwoHanedeSword.length - 1; a++) {
          if (this.state.WeaponTwoHanedeSword[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponTwoHanedeSword[a])
        }
        break;
      }
      case 103: {
        for (let a = 0; a <= this.state.WeaponDualSwords.length - 1; a++) {
          if (this.state.WeaponDualSwords[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponDualSwords[a])
        }
        break;
      }
      case 104: {
        for (let a = 0; a <= this.state.WeaponHammer.length - 1; a++) {
          if (this.state.WeaponHammer[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponHammer[a])
        }
        break;
      }
      case 105: {
        for (let a = 0; a <= this.state.WeaponAxe.length - 1; a++) {
          if (this.state.WeaponAxe[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponAxe[a])
        }
        break;
      }
      case 107: {
        for (let a = 0; a <= this.state.WeaponSpear.length - 1; a++) {
          if (this.state.WeaponSpear[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponSpear[a])
        }
        break;
      }
      case 108: {
        for (let a = 0; a <= this.state.WeaponBat.length - 1; a++) {
          if (this.state.WeaponBat[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponBat[a])
        }
        break;
      }
      case 109: {
        for (let a = 0; a <= this.state.WeaponWhip.length - 1; a++) {
          if (this.state.WeaponWhip[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponWhip[a])
        }
        break;
      }
      case 110: {
        for (let a = 0; a <= this.state.WeaponGlove.length - 1; a++) {
          if (this.state.WeaponGlove[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponGlove[a])
        }
        break;
      }
      case 111: {
        for (let a = 0; a <= this.state.WeaponTonfa.length - 1; a++) {
          if (this.state.WeaponTonfa[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponTonfa[a])
        }
        break;
      }
      case 112: {
        for (let a = 0; a <= this.state.WeaponThrow.length - 1; a++) {
          if (this.state.WeaponThrow[a].ItemCode == WeaponSearchCode){

            return(this.state.WeaponThrow[a])
          }
        }
        break;
      }
      case 113: {
        for (let a = 0; a <= this.state.WeaponShuriken.length - 1; a++) {
          if (this.state.WeaponShuriken[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponShuriken[a])
        }
        break;
      }
      case 114: {
        for (let a = 0; a <= this.state.WeaponBow.length - 1; a++) {
          if (this.state.WeaponBow[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponBow[a])
            
        }
        break;
      }
      case 115: {
        for (let a = 0; a <= this.state.WeaponCrossbow.length - 1; a++) {
          if (this.state.WeaponCrossbow[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponCrossbow[a])
        }
        break;
      }
      case 116: {
        for (let a = 0; a <= this.state.WeaponPistol.length - 1; a++) {
          if (this.state.WeaponPistol[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponPistol[a])
        }
        break;
      }
      case 117: {
        for (let a = 0; a <= this.state.WeaponAssaultRifle.length - 1; a++) {
          if (this.state.WeaponAssaultRifle[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponAssaultRifle[a])
        }
        break;
      }
      case 118: {
        for (let a = 0; a <= this.state.WeaponSniperRifle.length - 1; a++) {
          if (this.state.WeaponSniperRifle[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponSniperRifle[a])
        }
        break;
      }
      case 119: {
        for (let a = 0; a <= this.state.WeaponNunchaku.length - 1; a++) {
          if (this.state.WeaponNunchaku[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponNunchaku[a])
        }
        break;
      }
      case 120: {
        for (let a = 0; a <= this.state.WeaponRapier.length - 1; a++) {
          if (this.state.WeaponRapier[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponRapier[a])
        }
        break;
      }
      case 121: {
        for (let a = 0; a <= this.state.WeaponGuitar.length - 1; a++) {
          if (this.state.WeaponGuitar[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponGuitar[a])
        }
        break;
      }
      case 122: {
        for (let a = 0; a <= this.state.WeaponCamera.length - 1; a++) {
          if (this.state.WeaponCamera[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponCamera[a])
        }
        break;
      }
      case 130: {
        for (let a = 0; a <= this.state.WeaponArcana.length - 1; a++) {
          if (this.state.WeaponArcana[a].ItemCode == WeaponSearchCode)
          return(this.state.WeaponArcana[a])
        }
        break;
      }
    }
  };
  ChestEquipmentSearch = (inData) => {
    var ChestEquipmentSearch = inData; //이거 굳이 안해도됨 무기는 종류가 많아서 해야했지만

    for (let a = 0; a <= this.state.ChestEquipmentArr.length - 1; a++) {
      if (this.state.ChestEquipmentArr[a].ItemCode == ChestEquipmentSearch)
        console.log(this.state.ChestEquipmentArr[a].ItemName);
    }
  };
  HatEquipmentSearch = (inData) => {
    var HatEquipmentSearchCode = inData;

    for (let a = 0; a <= this.state.HatEquipmentArr.length - 1; a++) {
      if (this.state.HatEquipmentArr[a].ItemCode == HatEquipmentSearchCode)
        console.log(this.state.HatEquipmentArr[a].ItemName);
    }
  };
  ArmEquipmentSearch = (inData) => {
    var ArmEquipmentSearch = inData;

    for (let a = 0; a <= this.state.ArmEquipmentArr.length - 1; a++) {
      if (this.state.ArmEquipmentArr[a].ItemCode == ArmEquipmentSearch)
        console.log(this.state.ArmEquipmentArr[a].ItemName);
    }
  };
  ShoesEquipmentSearch = (inData) => {
    var ShoesEquipmentSearch = inData;

    for (let a = 0; a <= this.state.LegEquipmentArr.length - 1; a++) {
      if (this.state.LegEquipmentArr[a].ItemCode == ShoesEquipmentSearch)
        console.log(this.state.LegEquipmentArr[a].ItemName);
    }
  };

  AccessoryEquipmentSearch = (inData) => {
    var AccessoryEquipmentSearch = inData;

    for (let a = 0; a <= this.state.AccessoryEquipmentArr.length - 1; a++) {
      if (
        this.state.AccessoryEquipmentArr[a].ItemCode == AccessoryEquipmentSearch
      )
        console.log(this.state.AccessoryEquipmentArr[a].ItemName);
    }
  };

  componentDidMount = () => {
    this.passaa(this.state.NickName, 0, 0);
  };

  conlog = () => {
    this.state.SearchData.length != 0 ? (
      this.state.SearchData.map((abc, xxx) =>
        abc.map((xx, cc) => {
          return <div>"카운트"</div>;
        })
      )
    ) : (
      <h1>리액트가 아니다.</h1>
    );
  };
  consoleData = (userGames) =>{
    for (let a = 0; a <= userGames.length - 1; a++) {
      //배열 슥 보고 안에 내용 알맞게 적어주기   이걸 div랑 css로 꾸며서 출력해주고 안에 다시 팀적 코드 따서 돌려주기
      console.log(
        "캐릭 : " +
          this.state.characterNumArr[userGames[a].characterNum] +
          "//////////////////"
      );
      //여기 첫배열 뒤에부분에 원하는거 적으면 나옴
      console.log("순위 : " + userGames[a].gameRank + "여기맞지?");
      console.log("킬수 : " + userGames[a].playerKill);
      console.log("어시 : " + userGames[a].playerAssistant);
      console.log("데스 : " + userGames[a].playerDeaths);
      console.log("딜량 : " + userGames[a].damageToPlayer);
      console.log("무숙 : " + userGames[a].bestWeapon);
      // console.log(userGames[a].skillLevelInfo);
      // console.log(userGames[a].skillOrderInfo);
      console.log("무기 : " + userGames[a].equipment[0]);
      this.WeaponSearch(userGames[a].equipment[0]);
      console.log("상의 : " + userGames[a].equipment[1]);
      this.ChestEquipmentSearch(userGames[a].equipment[1]);
      console.log("모자 : " + userGames[a].equipment[2]);
      this.HatEquipmentSearch(userGames[a].equipment[2]);
      console.log("팔 : " + userGames[a].equipment[3]);
      this.ArmEquipmentSearch(userGames[a].equipment[3]);
      console.log("신발 : " + userGames[a].equipment[4]);
      this.ShoesEquipmentSearch(userGames[a].equipment[4]);
      console.log("악세 : " + userGames[a].equipment[5]);
      this.AccessoryEquipmentSearch(userGames[a].equipment[5]); //여기 추가값
      console.log("");
      console.log("");
    }
  }
  SearchHistory = async (Nic) => {
    //서치해서 해당 게임까지 서치
    const url0 = "https://open-api.bser.io/v1/user/nickname?query=사텐";
    const url = "https://open-api.bser.io/v1/user/nickname?query=mohai"; //닉넴으로 서치
    const urlUserNum = "https://open-api.bser.io/v1/user/games/2604769";
    const url4 = "https://open-api.bser.io/v1/games/19345023"; //게임모두? 잠깐대기
    const url6 = "https://open-api.bser.io/v1/weaponRoutes/recommend/532117"; ////특성
    const url7 = "https://open-api.bser.io/v1/data/Emotion";

    const SearchUserNum = `https://open-api.bser.io/v1/user/nickname?query=${Nic}`; //닉넴으로 서치
    const res = axios.get(url4, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(res); //기본형
    //여ㅑ기서부터 시작
    const {
      data: {
        user: { userNum },
      },
    } = await axios.get(SearchUserNum, {
      // 여기에 e.target text로 데이터 받아서 유저네임 검색
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    
    const urlUserNumt = `https://open-api.bser.io/v1/user/games/${userNum}`;
    let urlUserNumtt = `https://open-api.bser.io/v1/user/games/${userNum}?next=19488020`;
    let {
      data: { userGames },
      data: { next },
    } = await axios.get(urlUserNumt, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
   
    this.state.SearchData.push(userGames);
    this.consoleData(userGames)
  };
  passaa = async (Nic, nexta, cnt) => {
    //서치해서 해당 게임까지 서치
    //내 num 2604769
    //여러번 출력하는 내용은 개인용 api가 1초에 1번의 request만 되기 때문에 불가능해 버튼 클릭 시 다음 내용을 가져오게 구성
    //만약 기업용 api를 사용할 경우 next 유무에 따라 데이터를 받아오고 출력하는 부분에서 페이징 기능을 추가해 타 전적검색 사이트처럼 사용이 가능하다.

    let SearchUserNumUrl = `https://open-api.bser.io/v1/user/nickname?query=${this.state.NickName}`;
    const {
      data: {
        user: { userNum },
      },
    } = await axios.get(SearchUserNumUrl, {
      // 여기에 e.target text로 데이터 받아서 유저네임 검색
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    }); //유저넘버를 긁음
    
    this.setState({PlusUserNum:userNum})
    let urlUserNumt = "";
    if (cnt == 0) {
      urlUserNumt = `https://open-api.bser.io/v1/user/games/${userNum}`;
    } else {
      urlUserNumt = `https://open-api.bser.io/v1/user/games/${userNum}?next=${nexta}`;
    } //위에 타 전적검색 사이트 이야기의 코드가 이 부분
    
    let {
      data: { userGames },
      data: { next },
    } = await axios.get(urlUserNumt, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });

    this.setState({PlusNext:next})
    this.state.SearchData.push(userGames);
 
    this.consoleData(userGames)

    cnt++;

    // if (cnt < 1) this.passaa(Nic, next, cnt);
    //else console.log("끝");
    this.conlog();
    this.makeDiv(); //이걸 해야 로딩에서 state가 변경되면서 화면의 삼항연산자가 작동
  
   
  };

  PlusSearchGameInfo = async (gameid) =>{
    const SearchGameId =`https://open-api.bser.io/v1/games/${gameid}`; 
   console.log(SearchGameId)
   let {
    data: { userGames },
  
  } = await axios.get(SearchGameId, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": this.state.API_KEY,
    },
  });
  console.log(userGames[2].characterNum)
  console.log(userGames[2].nickname)
  console.log(userGames[2].damageToPlayer) //여기서 위에 본인 서치와 같이 뽑기
  return(<div>홀리몰리
    <div>몰리홀리</div>
    <div>몰리홀리</div>
  </div>)
  }
  PlusSearchGame = async (Nic, nexta, cnt) => {
    let urlUserNumt = `https://open-api.bser.io/v1/user/games/${this.state.PlusUserNum}?next=${this.state.PlusNext}`;
    //pass에서 setState를 설정하여 이용 cnt 류는 위에 서술과 같이 기업용 api의 경우 사용가능 
    let {
      data: { userGames },
      data: { next },
    } = await axios.get(urlUserNumt, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });

    this.setState({PlusNext:next}) // 플러스 세팅
    this.state.SearchData.push(userGames);

    if (this.state.SearchData != undefined) console.log("왜안되는걸까요");
  

    cnt++;

   // if (cnt < 1) this.passaa(Nic, next, cnt);
    //else console.log("끝");
    this.conlog();
    this.makeDiv();
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
      //기본형
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.state.API_KEY,
      },
    });
    console.log(res);
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
  makeDiv = () => {
    this.setState({ abc: "b" });
  };

  OrderInfoArr = (inputArr) => {
    for (let a = 1; a <= 25; a++) {
      if (inputArr[a] === undefined) {
        break;
      } else console.log(inputArr[a]);
    }
  };

  GameRank = (GameRank, matchingMode, matchingTeamMode, totalTime) => {
    let MatchingMode = "게임 모드";
    let MatchingTeamMode = "";
    let TotalTime = totalTime;

    if (matchingMode == 2) {
      MatchingMode = "노말";
    } else if (matchingMode == 3) {
      MatchingMode = "랭크";
    } else {
      MatchingMode = "코발트";
    }

    if (matchingTeamMode == 1) {
      MatchingTeamMode = "솔로";
    } else if (matchingTeamMode == 2) {
      MatchingTeamMode = "듀오";
    } else if (matchingTeamMode == 3) {
      MatchingTeamMode = "스쿼드";
    }

    let TotalTimeMin = TotalTime / 60;
    TotalTimeMin = Math.floor(TotalTimeMin);
    let TotalTimeSec = TotalTime % 60;

    if (TotalTimeMin < 10) {
      TotalTimeMin = "0" + TotalTimeMin;
    }
    if (TotalTimeSec < 10) {
      TotalTimeSec = "0" + TotalTimeSec;
    }

    TotalTime = TotalTimeMin + ":" + TotalTimeSec;

    if (matchingMode < 4) {
      return GameRank <= 3 ? (
        <div className="GameRecordWinLose left">
          <div
            style={{
              color: "yellowgreen",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >{`#${GameRank}`}</div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
              float: "left",
            }}
          >
            {MatchingMode}&nbsp;
          </div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
              marginRight: "3px",
              marginBottom: "5px",
            }}
          >
            {MatchingTeamMode}
          </div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
            }}
          >
            {TotalTime}
          </div>
        </div>
      ) : (
        <div className="GameRecordWinLose left">
          <div
            style={{
              color: "red",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >{`#${GameRank}`}</div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
              float: "left",
              marginRight: "3px",
            }}
          >
            {MatchingMode}
          </div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
              marginBottom: "5px",
            }}
          >
            {MatchingTeamMode}
          </div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
            }}
          >
            {TotalTime}
          </div>
        </div>
      );
    } else {
      return GameRank == 1 ? (
        <div className="GameRecordWinLose left">
          <div
            style={{
              color: "yellowgreen",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >{`#${GameRank}`}</div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
              float: "left",
            }}
          >
            {MatchingMode}&nbsp;&nbsp;
          </div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
              marginRight: "3px",
              marginBottom: "5px",
            }}
          >
            {MatchingTeamMode}
          </div>
          <br></br>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
            }}
          >
            {TotalTime}
          </div>
        </div>
      ) : (
        <div className="GameRecordWinLose left">
          <div
            style={{
              color: "red",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >{`#${GameRank}`}</div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
              float: "left",
              marginRight: "3px",
            }}
          >
            {MatchingMode}
          </div>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
            }}
          >
            {MatchingTeamMode}
          </div>
          <br></br>
          <div
            style={{
              fontFamily: "NEXON Lv1 Gothic OTF Bold",
              fontSize: "11px",
            }}
          >
            {TotalTime}
          </div>
        </div>
      );
    }
  };

  GameDetail = (
    playerKill,
    playerDeaths,
    playerAssistant,
    killMonsters,
    damageToPlayer
  ) => {
    let killMonstersCnt = 0;

    for (let cnt = 0; cnt <= 15; cnt++) {
      if (killMonsters[cnt] != undefined)
        killMonstersCnt = killMonstersCnt + killMonsters[cnt];
    }
    return (
      <div className="GameDetail">
        <ul>
          <li>{playerKill}</li>
          <li>{playerDeaths}</li>
          <li>{playerAssistant}</li>
          <li>{killMonstersCnt}</li>
          <li style={{ width: "15px" }}></li>
          <li>{damageToPlayer}</li>
        </ul>
        <ul className="GameDetailEx">
          <li>K</li>
          <li>D</li>
          <li>A</li>
          <li>H</li>
          <li ></li>
          <li>피해량</li>
        </ul>
      </div>
    );
  };
  routeIdOfStart = (routeIdOfStart) => {
    if (routeIdOfStart != 0) {
      return <div className="GameRecordRoute">{routeIdOfStart}</div>;
    } else {
      return <div></div>;
    }
  };
  ItemIcon = (Weapon, Chest, Hat, Arm, Leg, Accessory) => {
   let TierArr = []
    TierArr.push(this.WeaponSearch(Weapon))
    for (let a = 0; a < this.state.ChestEquipmentArr.length; a++) {
      if (Chest == this.state.ChestEquipmentArr[a].ItemCode){
        TierArr.push(this.state.ChestEquipmentArr[a]) 
        break;
      }else  if(a==this.state.ChestEquipmentArr.length-1)TierArr.push(this.state.ChestEquipmentArr[a])
    }
    for (let a = 0; a < this.state.HatEquipmentArr.length; a++) {
      if (Hat == this.state.HatEquipmentArr[a].ItemCode) {
        TierArr.push(this.state.HatEquipmentArr[a])
        break;
      }else  if(a==this.state.HatEquipmentArr.length-1)TierArr.push(this.state.ArmEquipmentArr[a])
    }
    for (let a = 0; a < this.state.ArmEquipmentArr.length; a++) {
      if (Arm == this.state.ArmEquipmentArr[a].ItemCode){
        TierArr.push(this.state.ArmEquipmentArr[a])
        break;
      }else  if(a==this.state.ArmEquipmentArr.length-1)TierArr.push(this.state.ArmEquipmentArr[a])
    }
    for (let a = 0; a < this.state.LegEquipmentArr.length; a++) {
      if (Leg == this.state.LegEquipmentArr[a].ItemCode){
      TierArr.push(this.state.LegEquipmentArr[a])
      break;
    }else  if(a==this.state.LegEquipmentArr.length-1)TierArr.push(this.state.LegEquipmentArr[a])
    }
    for (let a = 0; a < this.state.AccessoryEquipmentArr.length; a++) {
      if (Accessory == this.state.AccessoryEquipmentArr[a].ItemCode) {
        TierArr.push(this.state.AccessoryEquipmentArr[a])
        break;
      }else  if(a==this.state.AccessoryEquipmentArr.length-1)TierArr.push(this.state.AccessoryEquipmentArr[a])
      }
    
    console.log(TierArr)
    return(<div>
      <img
      className={`ItemIcon ItemTier${TierArr[0].ItemTier}`}
      src={`/image/Item/Weapon/${TierArr[0].ItemCode}.png`}
        />
      <img
      className={`ItemIcon ItemTier${TierArr[1].ItemTier}`}
      src={`/image/Item/Chest/${TierArr[1].ItemCode}.png`}
        />
      <img
      className={`ItemIcon ItemTier${TierArr[2].ItemTier}`}
      src={`/image/Item/Hat/${TierArr[2].ItemCode}.png`}
        ></img><br></br>
        <img
      className={`ItemIcon ItemTier${TierArr[3].ItemTier}`}
      src={`/image/Item/Arm/${TierArr[3].ItemCode}.png`}
        />
         <img
      className={`ItemIcon ItemTier${TierArr[4].ItemTier}`}
      src={`/image/Item/Leg/${TierArr[4].ItemCode}.png`}
        />
        <img
      className={`ItemIcon ItemTier${TierArr[5].ItemTier}`}
      src={`/image/Item/Accessory/${TierArr[5].ItemCode}.png`}
        />
    </div>)
  };
  render() {
    return (
      <div className="Search_User"> 
        {this.state.abc != "a" ? (
          this.state.SearchData.map((abc, xxx) =>
            abc.map((xx, cc) => {
              return (
                <div className="GameRecord">
                  <div>
                    <div className="GameRecordLeft">
                      {this.GameRank(
                        xx.gameRank,
                        xx.matchingMode,
                        xx.matchingTeamMode,
                        xx.totalTime
                      )}
                      <div className="left">
                        {console.log(xx.characterNum)}
                        <img
                          className="CharThum"
                          src={`/image/Character_Img/${
                            this.state.CharacterArr[xx.characterNum][1]
                          }/Thumbnail/Default/Mini.png`}
                        />
        
                      </div>
                      {this.GameDetail(
                        xx.playerKill,
                        xx.playerDeaths,
                        xx.playerAssistant,
                        xx.killMonsters,
                        xx.damageToPlayer
                      )}

                      <br></br>
                    </div>
                    <div className="GameRecordRight">
                      {this.ItemIcon(
                        xx.equipment[0],
                        xx.equipment[1],
                        xx.equipment[2],
                        xx.equipment[3],
                        xx.equipment[4],
                        xx.equipment[5]
                      )}
                      
                    </div>
                  </div>
                    <div onClick={() => this.PlusSearchGameInfo(xx.gameId)}>더보기</div>     
                  <div className="clear"></div>
                  <div className="GameRecordUnder">
                    {this.routeIdOfStart(xx.routeIdOfStart)}
                  </div>{" "}
                    
                </div>
                
              );
            })
          )
        ) : (
          <h1>loading...</h1>
        )}
        <div onClick={() => this.makeDiv()}>메이크디비</div>
        <div onClick={() => this.PlusSearchGame()}>플러스 플러스</div>

        <div id="GameRecord">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Search_User;
