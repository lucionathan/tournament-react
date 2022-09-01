import React from "react";
import Team from "./Team";

const Battle = ({ team1, team2, setBracket }) => {
    return (
        <div className="Battle">
            <p>Battle</p>
            <Team name={team1} setBracket={setBracket} />
            <Team name={team2} setBracket={setBracket} />
        </div>
    );
}

export default Battle;