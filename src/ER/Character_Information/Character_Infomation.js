import React, { Component } from "react";
import "./Character_Infomation.css";
class Character_Infomation extends Component {
  state = {
    ClickSkill: "P", //스킬창 기본칸 패시브로 설정
    Character_NameK: "", //한국이름으로 편하게 주 된 이름만
    Character_NameE: "Aya", //풀네임 요망  <h2> 주이름 <h5>보조이름
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

    information: [
      //캐릭터, 스킬 설명
      {
        Character_NameK: "", //한국이름으로 편하게 주 된 이름만
        Character_NameE: "",
        Character_NameF: "", //풀네임 요망  <h2> 주이름 <h5>보조이름
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
      },
      {
        Character_NameK: "재키",
        Character_NameE: "Jackie",
        Character_NameF: "Jackie Quilt",
        Character_Icon: "",
        Character_Explanation: "",
        P_Name: "피의축제",
        P_Explanation: "재키가 무기",
        Q_Name: "연참",
        Q_Explanation: "정면으로 무기 두번 타타타",
        W_Name: "아드레날린 분비",
        W_Explanation: "뻠핑",
        E_Name: "습격",
        E_Explanation: "짬푸!",
        R_Name: "전기톱 살인마",
        R_Explanation: "위에에에엥",
        Weapon: "도끼",
      },
      {
        Character_NameK: "아야", //한국이름으로 편하게 주 된 이름만
        Character_NameE: "Aya",
        Character_NameF: "Suzuki Aya",
        Character_Explanation: "빵야빵야", // <h5> 설명 작게
        P_Name: "안찍음",
        P_Explanation: "진짜루",
        Q_Name: "빵야빵야!",
        Q_Explanation: "숙작머신",
        W_name: "타타타타타타타타",
        W_Explanation: "직선맵 꿀자리",
        E_Name: "욥",
        E_Explanation: "ㅌㅌ",
        R_Name: "모두 내게로 모이세요",
        R_Explanation: "뻥",
        Weapon: "권총, 돌소",
      },
    ],
  };

  ClickP = () => this.setState({ ClickSkill: "P" });
  ClickQ = () => this.setState({ ClickSkill: "Q" });
  ClickW = () => this.setState({ ClickSkill: "W" });
  ClickE = () => this.setState({ ClickSkill: "E" });
  ClickR = () => this.setState({ ClickSkill: "R" });

  ClickTest = () => {
    const numbe = this.state.information;
    const testMap = numbe.map((abc, a) => {
      if (abc.Character_NameK == "재키") {
        this.setState({ Character_NameE: abc.Character_NameE });
        console.log(this.state.Character_NameE);
      }
    });
  };
  ClickTesta = () => {
    const numbe = this.state.information;
    const testMap = numbe.map((abc, a) => {
      if (abc.Character_NameK == "아야") {
        this.setState({ Character_NameE: abc.Character_NameE });
        console.log(this.state.Character_NameE);
      }
    });
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
      ["아이솔", "isol"],
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
      ["프리야", "Priva"],
      ["아디나", "Adina"],
      ["마커스", "Markus"],
      ["칼라", "Karla"],
    ];
    let CharacterSort = Character.sort();
    console.log(Character.sort());
    console.log(CharacterSort);

    return (
      <div>
        <div>
          <div className="Character_info">
            <div onClick={this.ClickTest}>재키</div>
            <div onClick={this.ClickTesta}>아야</div>
            <div className="clear"></div>
            <div>
              <img
                id="SkillGif"
                src={require(`../image/Character_Img/${this.state.Character_NameE}/SkillIconGif/${this.state.ClickSkill}.gif`)}
              />
              <div>
                <ul id="SkillIcon">
                  <li>
                    <img
                      id="SkillPImg"
                      className="SkillBtn"
                      onClick={this.ClickP}
                      src={require(`../image/Character_Img/${this.state.Character_NameE}/SkillIcon/P.png`)}
                    />
                  </li>
                  <li>
                    <img
                      id="SkillQImg"
                      className="SkillBtn"
                      onClick={this.ClickQ}
                      src={require(`../image/Character_Img/${this.state.Character_NameE}/SkillIcon/Q.png`)}
                    />
                  </li>
                  <li>
                    <img
                      id="SkillWImg"
                      className="SkillBtn"
                      onClick={this.ClickW}
                      src={require(`../image/Character_Img/${this.state.Character_NameE}/SkillIcon/W.png`)}
                    />
                  </li>
                  <li>
                    <img
                      id="SkillEImg"
                      className="SkillBtn"
                      onClick={this.ClickE}
                      src={require(`../image/Character_Img/${this.state.Character_NameE}/SkillIcon/E.png`)}
                    />
                  </li>
                  <li>
                    <img
                      id="SkillRImg"
                      className="SkillBtn"
                      onClick={this.ClickR}
                      src={require(`../image/Character_Img/${this.state.Character_NameE}/SkillIcon/R.png`)}
                    />
                  </li>
                </ul>
                <ul id="SkillExplanation">
                  <li>스킬이름</li>
                  <div id="SkillExplanationBorder"></div>
                  <li>스킬설명</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Character_Infomation;
