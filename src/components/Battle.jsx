import React from "react";
import Team from "./Team";

const Battle = ({teams, handleBattle, roundNumber, battleNumber}) => {
    return (
        <div className="Battle">
            <p>Battle {battleNumber}</p>
            
            <Team name={teams[0]} handleBattle={handleBattle} battleNumber={battleNumber} roundNumber={roundNumber}/>
            <Team name={teams[1]} handleBattle={handleBattle} battleNumber={battleNumber} roundNumber={roundNumber}/>
        </div>
    );
}

export default Battle;