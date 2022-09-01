import './App.css';
import data from "./data.json";
import { useState } from "react";
import Round from "./components/Round";

const App = () => {

  const [bracket, setBracket] = useState([data, ["", "", "", ""], ["", ""]]);

  const handleBattle = (round, battle, name) => {
    let bracketAux = [...bracket];
    bracketAux[round+1][battle] = name;

    setBracket(bracketAux);
  }

  const renderRoundsAux = (teams) => {
    let indents = [];

    let roundNumber = 0;

    bracket.forEach((round) => {
      indents.push(<Round numberOfBattles={round.length} teams={round} handleBattle={handleBattle} roundNumber={roundNumber}/>);
      roundNumber++;
    });
    

    return indents;
  }

  return (
    <div className="App">
      <h1>{data.length}</h1>
      {renderRoundsAux(data)}


    </div>
  );
}

export default App;
