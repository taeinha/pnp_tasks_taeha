import React from 'react';

const NavBar = ({ setStep }) => {
  return (
    <div className='nav-bar-container'>
      <div 
        onClick={() => setStep(1)}
        className='nav-bar-task-one'
      >
        Task 1
      </div>
      <div 
        onClick={() => setStep(2)}
        className='nav-bar-task-two'
      >
        Task 2
      </div>
    </div>
  )
};

export default NavBar;