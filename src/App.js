import './App.css';
import Landing from './button/selectCity';
import state from './redux/shoplist';

function App() {

  state.map (state => {
    console.log(state.name);
  } )
  return (

   
    <div className="App">
      <Landing state={state} />
      

  
     
    </div>
  );
}

export default App;
