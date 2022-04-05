import React from 'react';
import './App.css';
import Landing from './button/selectCity';
import shops from './redux/shoplist';
import v from './button/selectCity.module.css';

class App extends React.Component {


  state = {
    display: false,
    name: '',
    shop: ''
  };

   Сlicсk = () => {
    const { display } = this.state;
    this.setState({display: !display})
}

getTitle = shops => {
  console.log(shops);
  const {name, shop} = shops;
  this.setState({ name, shop, display: false});
}

goToShop = () => {
  console.log('FEVEE');
}


  render () {
 
  return (

    
   
    <div className="App" >
      <div className={v.dwwww} onClick={this.Сlicсk}>
    {this.state.name ? this.state.name : 'Пукни'}
      </div>
      { this.state.name && !this.state.display ? (
      <Landing goToShop={this.goToShop} shops={shops} />) : null }

     {this.state.display ? <ul className={v.dww}>
      {shops.map ( shops => { return <li onClick={() => this.getTitle(shops)} className={v.dwwww} key={shops.id}> {shops.name} {shops.shop}</li>
  } )}
  </ul> : null
  }

    </div>
  );
}
}

export default App;
