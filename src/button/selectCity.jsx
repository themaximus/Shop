import v from './selectCity.module.css';
import React from 'react';



const Landing = (props) => {




  
    return (
      <div className={v.conu}>
        
       
       

  <div onClick={props.goToShop} className={v.continue}>
    Продолжить
  </div>
      </div>
    );
  }



export default Landing;