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
  });
  const { results, rolling } = state;

  const roll = async () => {
    if (rolling) return;
    let result = Math.floor(Math.random() * 6) + 1;
    await setState({ rolling: true, results });
    await setTimeout(() => setState({
      results: [ result, ...results.slice(0, 9) ],
      rolling: false,
    }), 2000);
    
  };

  const tableResults = () => {
    return results.length > 0 ? (
      <>
        { results.map((num, i) => (
          <tr key={`result-${i}`}>
            <td>
              <img src={diceAssets[num]} alt="dice"/> {num}
            </td>
          </tr>
        )) }
      </>
    ) : (
      <tr>
        <td>No rolls yet.</td>
      </tr>
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
      <img src={renderDice()} className='dice-image' alt="dice"/>
      <div className='dice-top'>
        <button
          onClick={roll}
        >
          Roll
        </button>
      </div>

      <div className='dice-bottom'>
        <table className='dice-table'>
          <thead>
            <tr>
              <th>Last 10 rolls</th>
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