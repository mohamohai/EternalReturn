import { useState } from "react";

const BooleanBtn = () => {
  const [isCheck, setIsCheck] = useState(true);

  const ChangeCheck = () => {
    setIsCheck((check :boolean) => !check);
  };

  return (
    <div className="container">
        {isCheck && <h1>트루</h1>}

        
        <button onClick={ChangeCheck}>Change!</button>
      </div>
   
  );
};

export default BooleanBtn;