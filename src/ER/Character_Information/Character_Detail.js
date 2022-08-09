import React from 'react';
import { useParams } from 'react-router-dom';
import "./Character_Detail.css"


function Character_Detail() {
    const { CharName } = useParams();
    console.log({CharName})






  return (
    <div>
        <img
                  
                      src={`/image/Character_Img/${CharName}/Thumbnail/Default/Half.png`}
                    />
    </div>
  );

  }
export default Character_Detail;