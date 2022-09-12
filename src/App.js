import './App.css';
import data from "./data.json";
import { useEffect, useState } from "react";
import Round from "./components/Round";
import Team from "./components/Team";
import { Space } from "react-zoomable-ui";

const App = () => {

  const [bracket, setBracket] = useState([]);

  useEffect(() => {
    setBracket(generateArrays(shuffleData(data)));
  }, [])

  
  // TODO refactor this function
  const generateArrays = (arr) => {

    let dataSize = Math.pow(2, Math.ceil(Math.log(arr.length)/Math.log(2)));

    let testData = [];

    for(let i = 0; i < dataSize; i++) {
      testData.push(null);
    }

    let counter = 0;

    for(let i = 0; i < dataSize; i = i+2) {
      testData[i] = arr[counter];
      counter++;
    }

    for(let i = 1; i < dataSize; i = i+2) {
      testData[i] = arr[counter];
      counter++;
    }

    let returnArr = [testData];



    
    console.log(testData)

    while(dataSize != 1) {
      let aux = [];
      for (let index = 0; index < dataSize/2; index++) {
        aux.push("");
      }
      returnArr.push(aux);
      dataSize = dataSize/2;
    }

    dataSize = Math.pow(2, Math.ceil(Math.log(arr.length)/Math.log(2)));

    for(let i = 0; i < dataSize-1; i = i+2) {
      
      if (typeof returnArr[0][i+1] === 'undefined') {
        returnArr[1][i/2] = returnArr[0][i];
        returnArr[0][i] = undefined;
      }

    }

    returnArr[0] = returnArr[0].filter(item => item)

    return returnArr;
  }

  const shuffleData = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  const shuffle = () => {
    setBracket(generateArrays(shuffleData(data)));

  }

  const reset = () => {
    setBracket(generateArrays(data));
  }

  const handleBattle = (round, battle, name) => {
    let bracketAux = [...bracket];
    bracketAux[round+1][battle] = name;
    setBracket(bracketAux);
  }

  const renderRoundsAux = () => {
    let indents = [];
    console.log("click2")

    let roundNumber = 0;
    bracket.forEach((round) => {
      if(round.length > 1) {
        indents.push(<Round numberOfBattles={round.length} teams={round} handleBattle={handleBattle} roundNumber={roundNumber}/>);
        roundNumber++;
      } else {
        indents.push(<Team name={round[0]}/>)
      }
    });
    

    return indents;
  }

  return (
    <Space>
      <div className="App">
        {renderRoundsAux()}

        <button className="Button aux" onClick={reset}>RESET</button>
        <button className="Button aux" onClick={shuffle}>SHUFFLE</button>
      </div>
    </Space>
  );
}

export default App;
