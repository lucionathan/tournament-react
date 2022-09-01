import React from "react";
import Battle from "./Battle";


const Round = ({ teams, setBracket }) => {

    const renderRound = () => {
        let indents = [];

        for (let i = 0; i < teams.length; i = i + 2) {
            try {
                indents.push(<Battle team1={teams[i]} team2={teams[i + 1]} setBracket={setBracket} />);
            } catch (error) {
                indents.push(<Battle team1={''} team2={''} />);
            }
        }

        return indents;
    }

    return (
        <div className="Round">
            <h1>Round</h1>
            <p>{teams.length}</p>
            {renderRound()}
        </div>
    );

}

export default Round;
