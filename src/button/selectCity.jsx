import v from './selectCity.module.css';
import React from 'react';



function Landing(props) {

  
    return (
      <div >
        <div  className={v.dw} >PIJAMA SHOP</div>
        <h4 className='dw'>Выберите город:</h4>
        <select className={v.dww}>
      {props.state.map (state => { return <option className={v.dwww} key={state.id}> {state.name} {state.shop}</option>
  } )}
  </select>
      </div>
    );
  }


export default Landing;