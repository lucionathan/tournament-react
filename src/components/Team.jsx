import React from "react";

const Team = ({name, setBracket}) => {
    return (
        <div className="Team" onClick={setBracket(1, name)}>
            <p>{name}</p>
        </div>
    );
}

export default Team;
