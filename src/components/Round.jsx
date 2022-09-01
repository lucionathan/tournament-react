import React from "react";
import Battle from "./Battle";


const Round = ({numberOfBattles, teams, handleBattle, roundNumber}) => {

    const renderRound = (numberOfBattles) => {
        let indents = [];

        for (let i = 0; i < numberOfBattles; i = i+2) {
            indents.push(<Battle teams={[teams[i], teams[i+1]]} handleBattle={handleBattle} battleNumber={i/2} roundNumber={roundNumber}/>);
        }   

        return indents;
    }


    return  (
        <div className="Round">
                <h1>Round {roundNumber+1}</h1>
                {renderRound(numberOfBattles)}
        </div>
    );

}

export default Round;
