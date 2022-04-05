import v from './selectCity.module.css';
import React from 'react';
import state from '../redux/shoplist';



const Landing = (props) => {





  
    return (
      <div >
        <div  className={v.dw} >PIJAMA SHOP</div>
        <div className={v.dwww}>Выберите город:</div>
       

  <div onClick={props.goToShop} className={v.continue}>
    Продолжить
  </div>
      </div>
    );
  }



export default Landing;