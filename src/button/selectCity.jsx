import v from './selectCity.module.css';
import React from 'react';



function Landing(props) {

  
    return (
      <div >
        <div className={v.dw} >PIGAMA SHOP</div>
        <h4 className='dw'>Выберите город:</h4>
        <select className='dw'>
      {props.state.map (state => { return <option key={state.id}> {state.name} {state.shop}</option>
  } )}
  </select>
      </div>
    );
  }


export default Landing;