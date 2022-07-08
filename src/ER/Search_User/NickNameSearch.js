import { useEffect } from "react";
import { useParams } from "react-router-dom";

function NickNameSearch() {
  const params = useParams();

  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남");
    return () => {
      console.log("컴포넌트가 화면에서 사라짐");
    };
  }, []);

  return (
    <div className="Link">
      {!params.hasOwnProperty("userId") ? "없음" : params.userId} : Content
    </div>
  );
}
export default NickNameSearch;
