import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./Search_User.css";
import NickNameSearch from "./NickNameSearch";
import { useParams, withRouter } from "react-router-dom";

class Search_User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      API_KEY: process.env.REACT_APP_ERKEY,
      NickName: "",
      SearchData: [], //10개 넘어옴
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
        { ItemCode: 101101, ItemName: "가위" },
        { ItemCode: 101102, ItemName: "만년필" },
        { ItemCode: 101104, ItemName: "식칼" },
        { ItemCode: 101201, ItemName: "군용 나이프" },
        { ItemCode: 101202, ItemName: "메스" },
        { ItemCode: 101203, ItemName: "자마다르" },
        { ItemCode: 101301, ItemName: "장미칼" },
        { ItemCode: 101302, ItemName: "스위스 아미 나이프" },
        { ItemCode: 101303, ItemName: "카라페이스 카타르" },
        { ItemCode: 101401, ItemName: "카른웬난" },
        { ItemCode: 101402, ItemName: "파산검" },
        { ItemCode: 101404, ItemName: "초진동나이프" },
        { ItemCode: 101405, ItemName: "프라가라흐" },
        { ItemCode: 101406, ItemName: "다마스커스 가시" },
        { ItemCode: 101407, ItemName: "마하라자" },
      ],
      WeaponTwoHanedeSword: [
        { ItemCode: 102101, ItemName: "녹슨 검" },
        { ItemCode: 102201, ItemName: "샴쉬르" },
        { ItemCode: 102301, ItemName: "일본도" },
        { ItemCode: 102401, ItemName: "마사무네" },
        { ItemCode: 102402, ItemName: "무라마사" },
        { ItemCode: 102403, ItemName: "바스타드 소드" },
        { ItemCode: 102404, ItemName: "보검" },
        { ItemCode: 102405, ItemName: "뚜언 띠엔" },
        { ItemCode: 102406, ItemName: "아론다이트" },
        { ItemCode: 102407, ItemName: "엑스칼리버" },
        { ItemCode: 102408, ItemName: "플라즈마 소드" },
        { ItemCode: 102409, ItemName: "레바테인" },
        { ItemCode: 102410, ItemName: "모노호시자오" },
        { ItemCode: 102411, ItemName: "호푸어드" },
        { ItemCode: 102412, ItemName: "빛의 검" },
        { ItemCode: 102501, ItemName: "다인슬라이프" },
      ],
      WeaponDualSwords: [
        { ItemCode: 103201, ItemName: "쌍칼" },
        { ItemCode: 103202, ItemName: "조잡한 쌍검" },
        { ItemCode: 103301, ItemName: "피렌체식 쌍검" },
        { ItemCode: 103302, ItemName: "쌍둥이 검" },
        { ItemCode: 103401, ItemName: "이천일류" },
        { ItemCode: 103402, ItemName: "자웅일대검" },
        { ItemCode: 103403, ItemName: "아수라" },
        { ItemCode: 103501, ItemName: "디오스쿠로이" },
        { ItemCode: 103502, ItemName: "로이거 차르" },
        { ItemCode: 103503, ItemName: "간장과 막야" },
      ],
      WeaponHammer: [
        { ItemCode: 104101, ItemName: "망치" },
        { ItemCode: 104201, ItemName: "워해머" },
        { ItemCode: 104301, ItemName: "모닝 스타" },
        { ItemCode: 104302, ItemName: "사슴 망치" },
        { ItemCode: 104303, ItemName: "운명의 망치" },
        { ItemCode: 104401, ItemName: "낭아봉" },
        { ItemCode: 104402, ItemName: "다그다의 망치" },
        { ItemCode: 104403, ItemName: "토르의 망치" },
        { ItemCode: 104404, ItemName: "개밥바라기" },
        { ItemCode: 104405, ItemName: "마법봉" },
        { ItemCode: 104406, ItemName: "천근추" },
        { ItemCode: 104407, ItemName: "금강저" }, //무기군은 봉인에 해머쪽 코드로 작성되어있음
        { ItemCode: 104501, ItemName: "피스브링어" },
      ],
      WeaponAxe: [
        { ItemCode: 105102, ItemName: "곡괭이" },
        { ItemCode: 105103, ItemName: "손도끼" },
        { ItemCode: 105201, ItemName: "사슬 낫" },
        { ItemCode: 105202, ItemName: "전투 도끼" },
        { ItemCode: 105301, ItemName: "경량화 도끼" },
        { ItemCode: 105302, ItemName: "사신의 낫" },
        { ItemCode: 105401, ItemName: "대부" },
        { ItemCode: 105402, ItemName: "빔 엑스" },
        { ItemCode: 105403, ItemName: "산타 무에르테" },
        { ItemCode: 105404, ItemName: "스퀴테" },
        { ItemCode: 105405, ItemName: "파라슈" },
        { ItemCode: 105406, ItemName: "하르페" },
        { ItemCode: 105407, ItemName: "저거너트" },
      ],
      WeaponSpear: [
        { ItemCode: 107101, ItemName: "단창" },
        { ItemCode: 107201, ItemName: "죽창" },
        { ItemCode: 107301, ItemName: "바이던트" },
        { ItemCode: 107302, ItemName: "파이크" },
        { ItemCode: 107303, ItemName: "도끼창" },
        { ItemCode: 107401, ItemName: "강창" },
        { ItemCode: 107402, ItemName: "애각창" },
        { ItemCode: 107403, ItemName: "장팔사모" },
        { ItemCode: 107404, ItemName: "코스믹 바이던트" },
        { ItemCode: 107405, ItemName: "트리아이나" },
        { ItemCode: 107406, ItemName: "화첨창" },
        { ItemCode: 107407, ItemName: "방천화극" },
        { ItemCode: 107408, ItemName: "청룡언월도" },
        { ItemCode: 107409, ItemName: "나기나타" },
        { ItemCode: 107501, ItemName: "롱기누스의 창" },
      ],
      WeaponBat: [
        { ItemCode: 108101, ItemName: "나뭇가지" },
        { ItemCode: 108102, ItemName: "단봉" },
        { ItemCode: 108103, ItemName: "대나무" },
        { ItemCode: 108104, ItemName: "인체모형" },
        { ItemCode: 108201, ItemName: "먼지털이개" },
        { ItemCode: 108202, ItemName: "장봉" },
        { ItemCode: 108301, ItemName: "도깨비 방망이" },
        { ItemCode: 108401, ItemName: "우산" },
        { ItemCode: 108402, ItemName: "횃불" },
        { ItemCode: 108405, ItemName: "몽둥이" },
        { ItemCode: 108403, ItemName: "구원의 여신상" },
        { ItemCode: 108404, ItemName: "타구봉" },
        { ItemCode: 108501, ItemName: "스파이의 우산" },
        { ItemCode: 104407, ItemName: "금강저" }, //이거만 추가
        { ItemCode: 108502, ItemName: "여의봉" },
      ],
      WeaponWhip: [
        { ItemCode: 109101, ItemName: "채찍" },
        { ItemCode: 109201, ItemName: "오랏줄" },
        { ItemCode: 109202, ItemName: "철편" },
        { ItemCode: 109301, ItemName: "바람 채찍" },
        { ItemCode: 109401, ItemName: "뇌룡편" },
        { ItemCode: 109402, ItemName: "벽력편" },
        { ItemCode: 109403, ItemName: "글레이프니르" },
        { ItemCode: 109404, ItemName: "플라즈마 윕" },
        { ItemCode: 109501, ItemName: "혈화구절편" },
      ],
      WeaponGlove: [
        { ItemCode: 110101, ItemName: "너클" },
        { ItemCode: 110102, ItemName: "목장갑" },
        { ItemCode: 110201, ItemName: "글러브" },
        { ItemCode: 110202, ItemName: "아이언 너클" },
        { ItemCode: 110301, ItemName: "건틀릿" },
        { ItemCode: 110302, ItemName: "윙 너클" },
        { ItemCode: 110401, ItemName: "귀골 장갑" },
        { ItemCode: 110402, ItemName: "벽력귀투" },
        { ItemCode: 110403, ItemName: "유리 너클" },
        { ItemCode: 110404, ItemName: "회단 장갑" },
        { ItemCode: 110405, ItemName: "단영촌천투" },
        { ItemCode: 110406, ItemName: "디바인 피스트" },
        { ItemCode: 110407, ItemName: "블러드윙 너클" },
        { ItemCode: 110408, ItemName: "빙화현옥수" },
        { ItemCode: 110409, ItemName: "여래수투" },
        { ItemCode: 110410, ItemName: "브레이질 건틀릿" },
        { ItemCode: 110411, ItemName: "소수" },
        { ItemCode: 110412, ItemName: "천잠장갑" },
        { ItemCode: 110501, ItemName: "주작자문" },
        { ItemCode: 110502, ItemName: "프로스트팽" },
      ],
      WeaponTonfa: [
        { ItemCode: 111101, ItemName: "맷손" },
        { ItemCode: 111201, ItemName: "톤파" },
        { ItemCode: 111301, ItemName: "경찰봉" },
        { ItemCode: 111401, ItemName: "류큐톤파" },
        { ItemCode: 111402, ItemName: "택티컬 톤파" },
        { ItemCode: 111403, ItemName: "마이쏙" },
        { ItemCode: 111404, ItemName: "플라즈마 톤파" },
        { ItemCode: 111405, ItemName: "윈드러너" },
        { ItemCode: 111501, ItemName: "흑요석 짓테" },
      ],
      WeaponThrow: [
        { ItemCode: 112101, ItemName: "돌멩이" },
        { ItemCode: 112103, ItemName: "쇠구슬" },
        { ItemCode: 112104, ItemName: "유리병" },
        { ItemCode: 401215, ItemName: "달궈진 돌멩이" }, // 아니},이게 왜 여깃냐고
        { ItemCode: 112105, ItemName: "야구공" },
        { ItemCode: 112202, ItemName: "수류탄" },
        { ItemCode: 112203, ItemName: "화염병" },
        { ItemCode: 112204, ItemName: "슬링" },
        { ItemCode: 112205, ItemName: "싸인볼" },
        { ItemCode: 112301, ItemName: "밀가루 폭탄" },
        { ItemCode: 112302, ItemName: "소이탄" },
        { ItemCode: 112303, ItemName: "볼 라이트닝" },
        { ItemCode: 112304, ItemName: "플러버" },
        { ItemCode: 112305, ItemName: "안티오크의 수류탄" },
        { ItemCode: 112306, ItemName: "필럼" },
        { ItemCode: 112401, ItemName: "다비드슬링" },
        { ItemCode: 112402, ItemName: "연막탄" },
        { ItemCode: 112403, ItemName: "가시 탱탱볼" },
        { ItemCode: 112404, ItemName: "고폭 수류탄" },
        { ItemCode: 112501, ItemName: "루테늄 구슬" },
        { ItemCode: 112405, ItemName: "파이어 볼" },
        { ItemCode: 112406, ItemName: "프리즘 볼" },
        { ItemCode: 112407, ItemName: "아스트라페" },
      ],
      WeaponShuriken: [
        { ItemCode: 113101, ItemName: "면도칼" },
        { ItemCode: 113102, ItemName: "트럼프 카드" },
        { ItemCode: 113103, ItemName: "CD" },
        { ItemCode: 113104, ItemName: "분필" },
        { ItemCode: 113201, ItemName: "다트" },
        { ItemCode: 113202, ItemName: "부적" },
        { ItemCode: 113203, ItemName: "빈티지 카드" },
        { ItemCode: 113204, ItemName: "토마호크" },
        { ItemCode: 113205, ItemName: "표창" },
        { ItemCode: 113206, ItemName: "흑건" },
        { ItemCode: 113207, ItemName: "유엽비도" },
        { ItemCode: 113301, ItemName: "챠크람" },
        { ItemCode: 113302, ItemName: "매화비표" },
        { ItemCode: 113401, ItemName: "미치광이왕의 카드" },
        { ItemCode: 113402, ItemName: "독침" },
        { ItemCode: 113403, ItemName: "법륜" },
        { ItemCode: 113404, ItemName: "플럼바타" },
        { ItemCode: 113405, ItemName: "옥전결" },
        { ItemCode: 113406, ItemName: "풍마 수리검" },
        { ItemCode: 113407, ItemName: "본크러셔" },
        { ItemCode: 113408, ItemName: "빙백은침" },
        { ItemCode: 113409, ItemName: "푸른색 단도" },
        { ItemCode: 113410, ItemName: "플레솃" },
        { ItemCode: 113411, ItemName: "건곤권" },
        { ItemCode: 113412, ItemName: "생사부" },
        { ItemCode: 113501, ItemName: "수다르사나" },
        { ItemCode: 113502, ItemName: "만천화우" },
      ],
      WeaponBow: [
        { ItemCode: 114101, ItemName: "양궁" },
        { ItemCode: 114201, ItemName: "목궁" },
        { ItemCode: 114202, ItemName: "장궁" },
        { ItemCode: 114203, ItemName: "컴포지트 보우" },
        { ItemCode: 114301, ItemName: "강궁" },
        { ItemCode: 114302, ItemName: "국궁" },
        { ItemCode: 114303, ItemName: "벽력궁" },
        { ItemCode: 114304, ItemName: "탄궁" },
        { ItemCode: 114401, ItemName: "편전" },
        { ItemCode: 114402, ItemName: "화전" },
        { ItemCode: 114403, ItemName: "골든래쇼 보우" },
        { ItemCode: 114404, ItemName: "큐피드의 활" },
        { ItemCode: 114405, ItemName: "트윈보우" },
        { ItemCode: 114406, ItemName: "제베의 활" },
        { ItemCode: 114501, ItemName: "엘리멘탈 보우" },
        { ItemCode: 114502, ItemName: "페일노트" },
        { ItemCode: 114503, ItemName: "아르기로톡소스" },
        { ItemCode: 114407, ItemName: "아르테미스" },
      ],
      WeaponCrossbow: [
        { ItemCode: 115101, ItemName: "석궁" },
        { ItemCode: 115201, ItemName: "쇠뇌" },
        { ItemCode: 115202, ItemName: "크로스보우" },
        { ItemCode: 115301, ItemName: "노" },
        { ItemCode: 115302, ItemName: "저격궁" },
        { ItemCode: 115303, ItemName: "헤비 크로스보우" },
        { ItemCode: 115401, ItemName: "철궁" },
        { ItemCode: 115402, ItemName: "대황" },
        { ItemCode: 115403, ItemName: "발리스타" },
        { ItemCode: 115404, ItemName: "저격 크로스보우" },
        { ItemCode: 115405, ItemName: "영광금귀신기노" },
        { ItemCode: 115501, ItemName: "샤릉가" },
      ],
      WeaponPistol: [
        { ItemCode: 116101, ItemName: "발터 PPK" },
        { ItemCode: 116201, ItemName: "매그넘-파이선" },
        { ItemCode: 116202, ItemName: "베레타 M92F" },
        { ItemCode: 116301, ItemName: "FN57" },
        { ItemCode: 116401, ItemName: "더블 리볼버 SP" },
        { ItemCode: 116402, ItemName: "매그넘-아나콘다" },
        { ItemCode: 116408, ItemName: "데린저" },
        { ItemCode: 116403, ItemName: "마탄의 사수" },
        { ItemCode: 116404, ItemName: "엘레강스" },
        { ItemCode: 116405, ItemName: "일렉트론 블라스터" },
        { ItemCode: 116406, ItemName: "매그넘-보아" },
        { ItemCode: 116407, ItemName: "글록 48" },
        { ItemCode: 116409, ItemName: "스탬피드" },
        { ItemCode: 116501, ItemName: "악켈테" },
      ],
      WeaponAssaultRifle: [
        { ItemCode: 117101, ItemName: "페도로프 자동소총" },
        { ItemCode: 117201, ItemName: "STG-44" },
        { ItemCode: 117301, ItemName: "AK-47" },
        { ItemCode: 117401, ItemName: "M16A1" },
        { ItemCode: 117402, ItemName: "개틀링 건" },
        { ItemCode: 117403, ItemName: "95식 자동 소총" },
        { ItemCode: 117404, ItemName: "AK-12" },
        { ItemCode: 117405, ItemName: "XCR" },
        { ItemCode: 117406, ItemName: "저지먼트" },
        { ItemCode: 117501, ItemName: "아그니" },
      ],
      WeaponSniperRifle: [
        { ItemCode: 118101, ItemName: "화승총" },
        { ItemCode: 118201, ItemName: "스프링필드" },
        { ItemCode: 118301, ItemName: "하푼건" },
        { ItemCode: 118401, ItemName: "금교전" },
        { ItemCode: 118402, ItemName: "레일건" },
        { ItemCode: 118403, ItemName: "Tac-50" },
        { ItemCode: 118404, ItemName: "인터벤션" },
        { ItemCode: 118405, ItemName: "NTW-20" },
        { ItemCode: 118406, ItemName: "폴라리스" },
        { ItemCode: 118501, ItemName: "사사성광" },
        { ItemCode: 118502, ItemName: "현자총통" },
      ],
      WeaponNunchaku: [
        { ItemCode: 119101, ItemName: "쇠사슬" },
        { ItemCode: 119201, ItemName: "눈차크" },
        { ItemCode: 119301, ItemName: "샤퍼" },
        { ItemCode: 119302, ItemName: "블리더" },
        { ItemCode: 119401, ItemName: "대소반룡곤" },
        { ItemCode: 119402, ItemName: "초진동눈차크" },
        { ItemCode: 119403, ItemName: "케르베로스" },
        { ItemCode: 119501, ItemName: "히드라" },
      ],
      WeaponRapier: [
        { ItemCode: 120101, ItemName: "바늘" },
        { ItemCode: 120201, ItemName: "레이피어" },
        { ItemCode: 120301, ItemName: "매화검" },
        { ItemCode: 120302, ItemName: "활빈검" },
        { ItemCode: 120303, ItemName: "에스톡" },
        { ItemCode: 120401, ItemName: "듀랜달 Mk2" },
        { ItemCode: 120402, ItemName: "미스틸테인" },
        { ItemCode: 120403, ItemName: "볼틱레토" },
        { ItemCode: 120404, ItemName: "유성검" },
        { ItemCode: 120405, ItemName: "주와이외즈" },
        { ItemCode: 120406, ItemName: "레드 팬서" },
        { ItemCode: 120407, ItemName: "에스프리" },
      ],
      WeaponGuitar: [
        { ItemCode: 121101, ItemName: "보급형 기타" },
        { ItemCode: 121201, ItemName: "골든 브릿지" },
        { ItemCode: 121202, ItemName: "싱글 픽업" },
        { ItemCode: 121301, ItemName: "루비 스페셜" },
        { ItemCode: 121302, ItemName: "험버커 픽업" },
        { ItemCode: 121303, ItemName: "King-V" },
        { ItemCode: 121304, ItemName: "노캐스터" },
        { ItemCode: 121305, ItemName: "슈퍼스트랫" },
        { ItemCode: 121306, ItemName: "야생마" },
        { ItemCode: 121401, ItemName: "보헤미안" },
        { ItemCode: 121402, ItemName: "천국의 계단" },
        { ItemCode: 121403, ItemName: "퍼플 헤이즈" },
        { ItemCode: 121404, ItemName: "새티스팩션" },
        { ItemCode: 121405, ItemName: "원더풀 투나잇" },
        { ItemCode: 121406, ItemName: "더 월" },
        { ItemCode: 121407, ItemName: "틴 스피릿" },
      ],
      WeaponCamera: [
        { ItemCode: 122101, ItemName: "렌즈" },
        { ItemCode: 122201, ItemName: "카메라 건" },
        { ItemCode: 122301, ItemName: "컴팩트 카메라 " },
        { ItemCode: 122302, ItemName: "레인지파인더 " },
        { ItemCode: 122303, ItemName: "카메라 라이플 " },
        { ItemCode: 122401, ItemName: "미러리스" },
        { ItemCode: 122402, ItemName: "컴파운드 사이트" },
        { ItemCode: 122403, ItemName: "카메라 캐논" },
        { ItemCode: 122404, ItemName: "V.I.C.G " },
      ],
      WeaponArcana: [
        { ItemCode: 130101, ItemName: "유리구슬" },
        { ItemCode: 130201, ItemName: "거울구슬" },
        { ItemCode: 130202, ItemName: "얼음구슬" },
        { ItemCode: 130301, ItemName: "의지의 지팡이" },
        { ItemCode: 130302, ItemName: "감정의 컵" },
        { ItemCode: 130303, ItemName: "이성의 칼" },
        { ItemCode: 130304, ItemName: "소유의 펜타클" },
        { ItemCode: 130401, ItemName: "은둔자" },
        { ItemCode: 130402, ItemName: "운명의 수레바퀴" },
        { ItemCode: 130403, ItemName: "절제" },
        { ItemCode: 130404, ItemName: "더 스타" },
        { ItemCode: 130405, ItemName: "더 문" },
      ],
      WeaponVFProsthetic: [
        { ItemCode: 131201, ItemName: "바이퍼" },
        { ItemCode: 131301, ItemName: "데스애더" },
        { ItemCode: 131302, ItemName: "블랙맘바" },
        { ItemCode: 131303, ItemName: "사이드와인더" },
        { ItemCode: 131401, ItemName: "데스애더퀸" },
        { ItemCode: 131402, ItemName: "블랙맘바킹" },
        { ItemCode: 131403, ItemName: "슈퍼사이드와인더" },
        { ItemCode: 131501, ItemName: "데스애더퀸-MT" },
        { ItemCode: 131502, ItemName: "데스애더퀸-FC" },
        { ItemCode: 131503, ItemName: "데스애더퀸-VBS" },
        { ItemCode: 131504, ItemName: "블랙맘바킹-TL" },
        { ItemCode: 131505, ItemName: "블랙맘바킹-FC" },
        { ItemCode: 131506, ItemName: "블랙맘바킹-VBS" },
        { ItemCode: 131507, ItemName: "슈퍼사이드와인더-ML" },
        { ItemCode: 131508, ItemName: "슈퍼사이드와인더-FC" },
        { ItemCode: 131509, ItemName: "슈퍼사이드와인더-VBS" },
      ],
      HatEquipmentArr: [
        { ItemCode: 201101, ItemName: "머리띠" },
        { ItemCode: 201102, ItemName: "모자" },
        { ItemCode: 201104, ItemName: "자전거 헬멧" },
        { ItemCode: 201201, ItemName: "가면" },
        { ItemCode: 201202, ItemName: "머리테" },
        { ItemCode: 201203, ItemName: "베레모" },
        { ItemCode: 201204, ItemName: "사슬 코이프" },
        { ItemCode: 201205, ItemName: "안전모" },
        { ItemCode: 201301, ItemName: "방탄모" },
        { ItemCode: 201302, ItemName: "소방 헬멧" },
        { ItemCode: 201303, ItemName: "티아라" },
        { ItemCode: 201304, ItemName: "로빈" },
        { ItemCode: 201401, ItemName: "왕관" },
        { ItemCode: 201402, ItemName: "투구" },
        { ItemCode: 201403, ItemName: "미스릴 투구" },
        { ItemCode: 201404, ItemName: "수정 티아라" },
        { ItemCode: 201405, ItemName: "오토바이 헬멧" },
        { ItemCode: 201406, ItemName: "전술-OPS 헬멧" },
        { ItemCode: 201407, ItemName: "기사단장의 투구" },
        { ItemCode: 201408, ItemName: "월계관" },
        { ItemCode: 201409, ItemName: "제국 왕관" },
        { ItemCode: 201410, ItemName: "황실 부르고넷" },
        { ItemCode: 201411, ItemName: "변검" },
        { ItemCode: 201412, ItemName: "모호크 헬멧" },
        { ItemCode: 201413, ItemName: "비질란테" },
        { ItemCode: 201414, ItemName: "다이아뎀" },
        { ItemCode: 201501, ItemName: "천사의 고리" },
        { ItemCode: 201502, ItemName: "빛의 증표" },
      ],
      TopEquipmentArr: [
        { ItemCode: 202101, ItemName: "바람막이" },
        { ItemCode: 202103, ItemName: "승복" },
        { ItemCode: 202104, ItemName: "의사가운" },
        { ItemCode: 202105, ItemName: "전신 수영복" },
        { ItemCode: 202106, ItemName: "천 갑옷" },
        { ItemCode: 202201, ItemName: "가죽 갑옷" },
        { ItemCode: 202202, ItemName: "가죽 자켓" },
        { ItemCode: 202203, ItemName: "거북 도복" },
        { ItemCode: 202205, ItemName: "군복" },
        { ItemCode: 202206, ItemName: "덧댄 로브" },
        { ItemCode: 202207, ItemName: "드레스" },
        { ItemCode: 202208, ItemName: "드레스 셔츠" },
        { ItemCode: 202209, ItemName: "비키니" },
        { ItemCode: 202210, ItemName: "잠수복" },
        { ItemCode: 202211, ItemName: "사제복" },
        { ItemCode: 202301, ItemName: "라이더 자켓" },
        { ItemCode: 202302, ItemName: "사슬 갑옷" },
        { ItemCode: 202303, ItemName: "정장" },
        { ItemCode: 202304, ItemName: "치파오" },
        { ItemCode: 202305, ItemName: "판금 갑옷" },
        { ItemCode: 202306, ItemName: "한복" },
        { ItemCode: 202307, ItemName: "고위 사제복" },
        { ItemCode: 202401, ItemName: "방탄조끼" },
        { ItemCode: 202402, ItemName: "석양의 갑옷" },
        { ItemCode: 202404, ItemName: "어사의" },
        { ItemCode: 202405, ItemName: "광학미채 슈트" },
        { ItemCode: 202406, ItemName: "락커의 자켓" },
        { ItemCode: 202407, ItemName: "미스릴 갑옷" },
        { ItemCode: 202408, ItemName: "성기사의 갑옷" },
        { ItemCode: 202409, ItemName: "아름다운 갑옷" },
        { ItemCode: 202410, ItemName: "아마조네스 아머" },
        { ItemCode: 202411, ItemName: "용의 도복" },
        { ItemCode: 202412, ItemName: "지휘관의 갑옷" },
        { ItemCode: 202413, ItemName: "집사복" },
        { ItemCode: 202415, ItemName: "배틀 슈트" },
        { ItemCode: 202416, ItemName: "불꽃 드레스" },
        { ItemCode: 202417, ItemName: "EOD 슈트" },
        { ItemCode: 202418, ItemName: "턱시도" },
        { ItemCode: 202419, ItemName: "제사장의 예복" },
        { ItemCode: 202420, ItemName: "창파오" },
        { ItemCode: 202501, ItemName: "카바나" },
        { ItemCode: 202502, ItemName: "퀸 오브 하트" },
        { ItemCode: 202503, ItemName: "성법의" },
        { ItemCode: 202504, ItemName: "버건디 47" },
      ],
      ArmEquipmentArr: [
        { ItemCode: 203101, ItemName: "손목시계" },
        { ItemCode: 203102, ItemName: "붕대" },
        { ItemCode: 203103, ItemName: "토시" },
        { ItemCode: 203104, ItemName: "팔찌" },
        { ItemCode: 203201, ItemName: "가죽 방패" },
        { ItemCode: 203202, ItemName: "분대장 완장" },
        { ItemCode: 203203, ItemName: "브레이서" },
        { ItemCode: 203204, ItemName: "고장난 시계" },
        { ItemCode: 203301, ItemName: "검집" },
        { ItemCode: 203302, ItemName: "금팔찌" },
        { ItemCode: 203303, ItemName: "바주반드" },
        { ItemCode: 203304, ItemName: "진홍 팔찌" },
        { ItemCode: 203305, ItemName: "바브드 블로섬" },
        { ItemCode: 203306, ItemName: "포이즌드" },
        { ItemCode: 203401, ItemName: "강철 방패" },
        { ItemCode: 203402, ItemName: "소드 스토퍼" },
        { ItemCode: 203403, ItemName: "드라우프니르" },
        { ItemCode: 203404, ItemName: "미스릴 방패" },
        { ItemCode: 203405, ItemName: "바이탈 센서" },
        { ItemCode: 203406, ItemName: "기사의 신조" },
        { ItemCode: 203407, ItemName: "샤자한의 검집" },
        { ItemCode: 203408, ItemName: "큐브 워치" },
        { ItemCode: 203409, ItemName: "아이기스" },
        { ItemCode: 203410, ItemName: "틴달로스의 팔찌" },
        { ItemCode: 203411, ItemName: "나이팅게일" },
        { ItemCode: 203412, ItemName: "플라즈마 아크" },
        { ItemCode: 203413, ItemName: "텔루리안 타임피스" },
        { ItemCode: 203414, ItemName: "스마트 밴드" },
        { ItemCode: 203501, ItemName: "스카디의 팔찌" },
        { ItemCode: 203502, ItemName: "레이더" },
        { ItemCode: 203503, ItemName: "오토-암즈" },
        { ItemCode: 203504, ItemName: "프로미넌스" },
      ],
      ShoesEquipmentArr: [
        { ItemCode: 204101, ItemName: "슬리퍼" },
        { ItemCode: 204102, ItemName: "운동화" },
        { ItemCode: 204103, ItemName: "타이즈" },
        { ItemCode: 204201, ItemName: "무릎 보호대" },
        { ItemCode: 204202, ItemName: "체인 레깅스" },
        { ItemCode: 204203, ItemName: "하이힐" },
        { ItemCode: 204204, ItemName: "힐리스" },
        { ItemCode: 204205, ItemName: "나막신" },
        { ItemCode: 204301, ItemName: "덧댄 슬리퍼" },
        { ItemCode: 204302, ItemName: "부츠" },
        { ItemCode: 204303, ItemName: "등산화" },
        { ItemCode: 204401, ItemName: "강철 무릎 보호대" },
        { ItemCode: 204402, ItemName: "경량화 부츠" },
        { ItemCode: 204403, ItemName: "매버릭 러너" },
        { ItemCode: 204404, ItemName: "전투화" },
        { ItemCode: 204405, ItemName: "킬힐" },
        { ItemCode: 204406, ItemName: "풍화륜" },
        { ItemCode: 204407, ItemName: "미스릴 부츠" },
        { ItemCode: 204408, ItemName: "부케팔로스" },
        { ItemCode: 204409, ItemName: "EOD 부츠" },
        { ItemCode: 204410, ItemName: "글레이셜 슈즈" },
        { ItemCode: 204411, ItemName: "클링온 부츠" },
        { ItemCode: 204412, ItemName: "타키온 브레이스" },
        { ItemCode: 204413, ItemName: "탭루트" },
        { ItemCode: 204501, ItemName: "헤르메스의 부츠" },
        { ItemCode: 204502, ItemName: "분홍신" },
      ],
      AccessoriesEquipmentArr: [
        { ItemCode: 205101, ItemName: "깃털" },
        { ItemCode: 205102, ItemName: "꽃" },
        { ItemCode: 205103, ItemName: "리본" },
        { ItemCode: 205105, ItemName: "부채" },
        { ItemCode: 205106, ItemName: "불경" },
        { ItemCode: 205107, ItemName: "상자" },
        { ItemCode: 205108, ItemName: "성배" },
        { ItemCode: 205109, ItemName: "십자가" },
        { ItemCode: 205110, ItemName: "쌍안경" },
        { ItemCode: 205201, ItemName: "백우선" },
        { ItemCode: 205202, ItemName: "성자의 유산" },
        { ItemCode: 205203, ItemName: "운명의 꽃" },
        { ItemCode: 205204, ItemName: "유리 조각" },
        { ItemCode: 205205, ItemName: "인형" },
        { ItemCode: 205206, ItemName: "저격 스코프" },
        { ItemCode: 205207, ItemName: "진신사리" },
        { ItemCode: 205208, ItemName: "화살통" },
        { ItemCode: 205209, ItemName: "먼지털이개" },
        { ItemCode: 205210, ItemName: "군선" },
        { ItemCode: 205211, ItemName: "비파단도" },
        { ItemCode: 205212, ItemName: "캐리비안 장식총" },
        { ItemCode: 205213, ItemName: "사격 교본" },
        { ItemCode: 205301, ItemName: " 생명의 가루" },
        { ItemCode: 205302, ItemName: "우치와" },
        { ItemCode: 205303, ItemName: "탄창" },
        { ItemCode: 205304, ItemName: "궁기병의 화살통" },
        { ItemCode: 205305, ItemName: "월왕구천" },
        { ItemCode: 205306, ItemName: "해적의 증표" },
        { ItemCode: 205307, ItemName: "호크 아이" },
        { ItemCode: 205308, ItemName: "해적 깃발" },
        { ItemCode: 205309, ItemName: "오르골" },
        { ItemCode: 205310, ItemName: "능동 위장" },
        { ItemCode: 205311, ItemName: "마도서" },
        { ItemCode: 205312, ItemName: "아이테르 깃털" },
        { ItemCode: 205401, ItemName: " 달빛 펜던트" },
        { ItemCode: 205402, ItemName: "만년빙" },
        { ItemCode: 205403, ItemName: "삼매진화" },
        { ItemCode: 205404, ItemName: "슈뢰딩거의 상자" },
        { ItemCode: 205405, ItemName: "진리는 나의 빛" },
        { ItemCode: 205406, ItemName: "요명월" },
        { ItemCode: 205407, ItemName: "미스릴 퀴버" },
        { ItemCode: 205501, ItemName: "에메랄드 타블렛" },
        { ItemCode: 205502, ItemName: "파초선" },
        { ItemCode: 205503, ItemName: "쿤달라" },
        { ItemCode: 205504, ItemName: "아티팩트" },
        { ItemCode: 205505, ItemName: "호루스의 눈" },
        { ItemCode: 205506, ItemName: "쿤달라MK2" },
        { ItemCode: 205507, ItemName: "네크로노미콘" },
        { ItemCode: 705504, ItemName: "쿤달라" },
        { ItemCode: 705601, ItemName: "미니어쳐솔라시스템" },
        { ItemCode: 705602, ItemName: "코발트블루" },
      ],
      equipmentArr: [
        //배열을 장비위치나 재료별로 종류별로 세팅해서 맵을 최대한 적게 돌리게끔 설정?
      ],
    };
  }
  masterkey = () => {
    this.state.SearchData[0].map((arrdata, b) => {
      console.log(this.state.characterNumArr[arrdata.characterNum]);
      console.log("순위 : " + arrdata.gameRank + "여기맞지?");
      console.log("킬수 : " + arrdata.playerKill);
      console.log("어시 : " + arrdata.playerAssistant);
      console.log("데스 : " + arrdata.playerDeaths);
      console.log("딜량 : " + arrdata.damageToPlayer);
      console.log("무숙 : " + arrdata.bestWeapon);
      this.WeaponSearch(arrdata.equipment[0]);
      this.TopEquipmentSearch(arrdata.equipment[1]);
      this.HatEquipmentSearch(arrdata.equipment[2]);
      this.ArmEquipmentSearch(arrdata.equipment[3]);
      this.ShoesEquipmentSearch(arrdata.equipment[4]);
      this.AccessoriesEquipmentSearch(arrdata.equipment[5]); //여기 추가값

      console.log("");
      console.log("");
    });
  };
  WeaponSearch = (inData) => {
    var WeaponSearchCode = inData;
    let WeaponCode = Math.floor(WeaponSearchCode / 1000);

    switch (WeaponCode) {
      case 101: {
        for (let a = 0; a <= this.state.WeaponDagger.length - 1; a++) {
          if (this.state.WeaponDagger[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponDagger[a].ItemName);
        }
        break;
      }
      case 102: {
        for (let a = 0; a <= this.state.WeaponTwoHanedeSword.length - 1; a++) {
          if (this.state.WeaponTwoHanedeSword[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponTwoHanedeSword[a].ItemName);
        }
        break;
      }
      case 103: {
        for (let a = 0; a <= this.state.WeaponDualSwords.length - 1; a++) {
          if (this.state.WeaponDualSwords[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponDualSwords[a].ItemName);
        }
        break;
      }
      case 104: {
        for (let a = 0; a <= this.state.WeaponHammer.length - 1; a++) {
          if (this.state.WeaponHammer[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponHammer[a].ItemName);
        }
        break;
      }
      case 105: {
        for (let a = 0; a <= this.state.WeaponAxe.length - 1; a++) {
          if (this.state.WeaponAxe[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponAxe[a].ItemName);
        }
        break;
      }
      case 107: {
        for (let a = 0; a <= this.state.WeaponSpear.length - 1; a++) {
          if (this.state.WeaponSpear[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponSpear[a].ItemName);
        }
        break;
      }
      case 108: {
        for (let a = 0; a <= this.state.WeaponBat.length - 1; a++) {
          if (this.state.WeaponBat[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponBat[a].ItemName);
        }
        break;
      }
      case 109: {
        for (let a = 0; a <= this.state.WeaponWhip.length - 1; a++) {
          if (this.state.WeaponWhip[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponWhip[a].ItemName);
        }
        break;
      }
      case 110: {
        for (let a = 0; a <= this.state.WeaponGlove.length - 1; a++) {
          if (this.state.WeaponGlove[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponGlove[a].ItemName);
        }
        break;
      }
      case 111: {
        for (let a = 0; a <= this.state.WeaponTonfa.length - 1; a++) {
          if (this.state.WeaponTonfa[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponTonfa[a].ItemName);
        }
        break;
      }
      case 112: {
        for (let a = 0; a <= this.state.WeaponThrow.length - 1; a++) {
          if (this.state.WeaponThrow[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponThrow[a].ItemName);
        }
        break;
      }
      case 113: {
        for (let a = 0; a <= this.state.WeaponShuriken.length - 1; a++) {
          if (this.state.WeaponShuriken[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponShuriken[a].ItemName);
        }
        break;
      }
      case 114: {
        for (let a = 0; a <= this.state.WeaponBow.length - 1; a++) {
          if (this.state.WeaponBow[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponBow[a].ItemName);
        }
        break;
      }
      case 115: {
        for (let a = 0; a <= this.state.WeaponCrossbow.length - 1; a++) {
          if (this.state.WeaponCrossbow[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponCrossbow[a].ItemName);
        }
        break;
      }
      case 116: {
        for (let a = 0; a <= this.state.WeaponPistol.length - 1; a++) {
          if (this.state.WeaponPistol[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponPistol[a].ItemName);
        }
        break;
      }
      case 117: {
        for (let a = 0; a <= this.state.WeaponAssaultRifle.length - 1; a++) {
          if (this.state.WeaponAssaultRifle[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponAssaultRifle[a].ItemName);
        }
        break;
      }
      case 118: {
        for (let a = 0; a <= this.state.WeaponSniperRifle.length - 1; a++) {
          if (this.state.WeaponSniperRifle[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponSniperRifle[a].ItemName);
        }
        break;
      }
      case 119: {
        for (let a = 0; a <= this.state.WeaponNunchaku.length - 1; a++) {
          if (this.state.WeaponNunchaku[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponNunchaku[a].ItemName);
        }
        break;
      }
      case 120: {
        for (let a = 0; a <= this.state.WeaponRapier.length - 1; a++) {
          if (this.state.WeaponRapier[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponRapier[a].ItemName);
        }
        break;
      }
      case 121: {
        for (let a = 0; a <= this.state.WeaponGuitar.length - 1; a++) {
          if (this.state.WeaponGuitar[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponGuitar[a].ItemName);
        }
        break;
      }
      case 122: {
        for (let a = 0; a <= this.state.WeaponCamera.length - 1; a++) {
          if (this.state.WeaponCamera[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponCamera[a].ItemName);
        }
        break;
      }
      case 130: {
        for (let a = 0; a <= this.state.WeaponArcana.length - 1; a++) {
          if (this.state.WeaponArcana[a].ItemCode == WeaponSearchCode)
            console.log(this.state.WeaponArcana[a].ItemName);
        }
        break;
      }
    }
  };
  TopEquipmentSearch = (inData) => {
    var TopEquipmentSearch = inData; //이거 굳이 안해도됨 무기는 종류가 많아서 해야했지만

    for (let a = 0; a <= this.state.TopEquipmentArr.length - 1; a++) {
      if (this.state.TopEquipmentArr[a].ItemCode == TopEquipmentSearch)
        console.log(this.state.TopEquipmentArr[a].ItemName);
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

    for (let a = 0; a <= this.state.ShoesEquipmentArr.length - 1; a++) {
      if (this.state.ShoesEquipmentArr[a].ItemCode == ShoesEquipmentSearch)
        console.log(this.state.ShoesEquipmentArr[a].ItemName);
    }
  };
  AccessoriesEquipmentSearch = (inData) => {
    var AccessoriesEquipmentSearch = inData;

    for (let a = 0; a <= this.state.AccessoriesEquipmentArr.length - 1; a++) {
      if (
        this.state.AccessoriesEquipmentArr[a].ItemCode ==
        AccessoriesEquipmentSearch
      )
        console.log(this.state.AccessoriesEquipmentArr[a].ItemName);
    }
  };

  componentDidMount = () => {
    this.SearchNickName();
  };
  conlog = () => {
    //테스트용 모아두기
  };
  SearchNickName = () => {
    //닉네임 받아서 서치함수 실행
    let Nic = decodeURIComponent(window.location.search);
    Nic = Nic.substring(10, Nic.length);
    this.setState({ NickName: Nic });
    console.log(Nic);
    this.SearchHistory(Nic);
  };
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
    console.log(res);

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
    console.log(userGames); //여기가 그거 어우 책상 없으니까 너무 힘들다   // 게임아이디를 뜯어서
    //https://open-api.bser.io/v1/games/`${gameid}` 넣으면 그 게임에 다른 사람들도 나오니까 그거 맞춰서 캐릭터 뜯기나 이런거
    this.state.SearchData.push(userGames);

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
      this.TopEquipmentSearch(userGames[a].equipment[1]);
      console.log("모자 : " + userGames[a].equipment[2]);
      this.HatEquipmentSearch(userGames[a].equipment[2]);
      console.log("팔 : " + userGames[a].equipment[3]);
      this.ArmEquipmentSearch(userGames[a].equipment[3]);
      console.log("신발 : " + userGames[a].equipment[4]);
      this.ShoesEquipmentSearch(userGames[a].equipment[4]);
      console.log("악세 : " + userGames[a].equipment[5]);
      this.AccessoriesEquipmentSearch(userGames[a].equipment[5]); //여기 추가값

      console.log("");
      console.log("");
    }
    return this.makeDiv();
  };

  passaa = () => {};

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
  makeDiv = () => {
    return (
      <div>
        <img id="SkillGif" src={require(`../image/Item/Weapon/104404.png`)} />

        {/* //      src={require(`../image/Item/Weapon/${this.state.SearchData[1].equipment[0]}.png`) */}
      </div>
    );
  };
  render() {
    return (
      <div className="Search_User">
        <div onClick={() => this.masterkey(this.state.arr)}>asd</div>
        <div onClick={() => this.conlog()}>asdsad</div>
        <NickNameSearch />
      </div>
    );
  }
}

export default Search_User;
