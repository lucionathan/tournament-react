import React, { useState } from "react";
import './App.css';
import Round from "./components/Round";

const App = () => {
  const [bracket, setBracket] = useState([["p3dro","vini","yuri","anathan","tomazela","luva","marcos","ocimar"], [], []]);

  const handlex = (round, nome) => {
    bracket[round + 1].push(nome)
    setBracket(bracket)
  }

  const renderRoundsAux = (teams) => {
    let indents = [];
   
    teams.forEach(round => {
      console.log(round)
      indents.push(<Round key={} teams={round} setBracket={handlex}/>);
    });

    return indents;
  }

  return (
    <div className="App">
      <h1>Aaaaaaaaaaaaaaaaaaa</h1>
      {renderRoundsAux(bracket)}
    </div>
  );
}

export default App;
