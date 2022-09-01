import React from "react";
import { useState } from "react";

const Team = ({name, handleBattle, roundNumber, battleNumber}) => {

    const [team, setTeam] = useState('')

    return (
        <div className="Team" onClick={() => handleBattle(roundNumber, battleNumber, name)}>
            <p>{name}</p>
        </div>
    );
}

export default Team;
