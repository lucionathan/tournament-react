import React, { useCallback } from "react";
import Team from "./Team";

const Battle = ({teams, handleBattle, roundNumber, battleNumber}) => {

    const checkBothBattles = () => {
        if(teams[0] !== "" && teams[1] !== "") {
            return true;
        } else {
            return false;
        }
    }

    const aux = () => {
        return;
    }

    return (
        <div className="Battle">
            <p>Battle {battleNumber}</p>
            
            <Team name={teams[0]} handleBattle={checkBothBattles() ? handleBattle : ()=>{}} battleNumber={battleNumber} roundNumber={roundNumber}/>
            <Team name={teams[1]} handleBattle={checkBothBattles() ? handleBattle : ()=>{}} battleNumber={battleNumber} roundNumber={roundNumber}/>
        </div>
    );
}

export default Battle;