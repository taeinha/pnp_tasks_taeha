import React, { useState } from 'react';
import diceAssets from '../constants/diceAssets';

// Create a react app to simulate the roll of a 6 sided die.

// Have a button to roll the die.
// Table to display the number of results for each side of the die that was rolled.  
// Only keep track of only the last 10 rolls.  
// Bonus points for visual appeal.

const Dice = props => {
  const [state, setState] = useState({
    rolling: false,
    results: [],
    counts: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }
  });
  const { results, rolling, counts } = state;

  const roll = async () => {
    if (rolling) return;
    let result = Math.floor(Math.random() * 6) + 1;
    await setState({ rolling: true, results, counts });
    await setTimeout(() => addResult(result), 2000);
  };

  const addResult = (roll) => {
    const newResults = Object.assign([], results);
    const newCounts = Object.assign({}, counts);

    if (newResults.length >= 10) {
      newCounts[newResults.pop()]--;
    }

    newResults.unshift(roll);
    newCounts[roll]++;

    setState({
      results: newResults,
      rolling: false,
      counts: newCounts
    });
  };

  const tableResults = () => {
    return (
      <>
        { Object.keys(counts).map((roll, i) => (
          <tr key={`result-${i}`}>
            <td><img src={diceAssets[roll]} alt="dice"/></td>
            <td className="dice-counts">{counts[roll]}</td>
          </tr>
        )) }
      </>
    );
  };

  const renderDice = () => {
    if (rolling) {
      return diceAssets.rollingDice;
    } else if (results.length === 0) {
      return diceAssets.diceRandom;
    } else {
      return diceAssets[results[0]];
    }
  }


  return (
    <div className='dice-container'>
      <h1>Roll the Dice</h1>
      <div className='dice-top'>
        <img src={renderDice()} className='dice-image' alt="dice"/>
        <button
          onClick={roll}
        >
          Roll
        </button>
      </div>

      <div className='dice-bottom'>
        <h3>Last 10 Results</h3>
        <table className='dice-table'>
          <thead>
            <tr>
              <th>Roll</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {tableResults()}
          </tbody>
        </table>
      </div>
    </div>
  )


};

export default Dice;