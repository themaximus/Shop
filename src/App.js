import React from 'react';
import './App.css';
import Landing from './button/selectCity';
import shops from './redux/shoplist';
import v from './button/selectCity.module.css';

import { useState } from 'react';






class App extends React.Component {



  state = {
    display: false,
    name: '',
    url: ''
  };

   Сlicсk = () => {
    const { display } = this.state;
    this.setState({display: !display})
}

 getTitle = (shops) => {
  console.log(shops);
  const {name, url} = shops;
  this.setState({ name, url, display: false});
}

goToShop = (props) => {
  const {url} = this.state;
  console.log(url);
  this.props.history.push(`/shop/${url}`);
  this.props.boba();


}


  render () {
 
  return (

    <div>
   
   <div  className={v.dw}>PIJAMA SHOP</div>

    <div className="App" >
     
      
      <div className={v.dwwww} onClick={this.Сlicсk}>
    {this.state.name ? this.state.name : 'Пукни'}
      </div>
      

     {this.state.display ? <ul className={v.dww}>
      {shops.map ( shops => { return <li onClick={() => this.getTitle(shops)} className={v.dwwww} key={shops.id}> {shops.name} {shops.shop}</li>
  } )}
  </ul> : null
  }
 </div>

 { this.state.name && !this.state.display ? (
      <Landing goToShop={this.goToShop} shops={shops} />) : null }
    </div>
    
  );
}
}

export default App;
