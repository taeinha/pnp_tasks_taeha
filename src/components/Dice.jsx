import React, { useState } from 'react';

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
    let result = Math.floor(Math.random() * 6) + 1;
    setState({
      results: [ result, ...results.slice(0, 9) ]
    });
  };

  const tableResults = () => {
    return results.length > 0 ? (
      <>
        { results.map((num, i) => (
          <tr key={`result-${i}`}>
            <td>{num}</td>
          </tr>
        )) }
      </>
    ) : (
      <tr>
        <td className='dice-table-row'>No rolls yet.</td>
      </tr>
    );
  };


  return (
    <div className='dice-container'>
      <div className='dice-top'>
        { results.length > 0 && <div>
            { results[0] }
          </div> }
        <button
          onClick={roll}
        >
          Roll
        </button>
      </div>

      <div className='dice-bottom'>
        <table className='dice-table'>
          <tbody>
            <tr>
              <th>Last 10 rolls</th>
            </tr>
            {tableResults()}
          </tbody>
        </table>
      </div>
    </div>
  )


};

export default Dice;