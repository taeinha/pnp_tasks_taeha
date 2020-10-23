import React from 'react';
import { withRouter } from "react-router-dom";

const NavBar = props => {
  return (
    <div className='nav-bar-container'>
      <div 
        onClick={() => props.history.push('/pnp_tasks_taeha/')}
        className='nav-bar-task-one'
      >
        Task 1
      </div>
      <div 
        onClick={() => props.history.push('/pnp_tasks_taeha/task-two')}
        className='nav-bar-task-two'
      >
        Task 2
      </div>
    </div>
  )
};

export default withRouter(NavBar);