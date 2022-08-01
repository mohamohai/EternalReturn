return(<div
    style={{margin:"20px"}}>
    {Team1User.nickname}
    {Team1User.damageToPlayer}
    {"킬"+Team1User.playerKill}
    {"데스"+Team1User.playerDeaths}
    {"어시"+Team1User.playerAssistant}
    
    <progress 
    style={{position:"fixed",
    left:"100px",

    width:"150px",
    height:"20px",

  }}
    id="progress" value={Team1User.damageToPlayer} min="0" max="40000"></progress>

  </div>)