import { useState, useEffect, useRef, Component } from "react";
function NeonForm(){
    return(
        <div className="memoDiv">
            <form className="neonBox">
             <div className="neonBoxOne"></div> 
             <div className="neonLogin">
                <div className="neonLoginId">
                    <input type="text" className="neonLoginIdInput neoninput" required></input>
                    <span className="neonLoginIdText neonLoginText">ID</span>
                </div>
                <div className="neonLoginPw">
                    <input type="password" className="neonLoginIdInput neoninput" required ></input>
                    <span className="neonLoginPwText neonLoginText">PassWord</span>
                </div>
             </div>
          </form>
        </div>
    )
}export default NeonForm