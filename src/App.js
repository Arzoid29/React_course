import logo from './logo.svg';
import './App.css';
import Componente from './Components/Componente';
import Propioedades from './Components/Propiedades';
import Estado from "./Components/Estado"
import Button from './Components/DropButton';

function App() {
  return (
    <div className="App">
        <section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
        <Componente msg="hola soy asasydeo"></Componente>
        <hr/>
        <Propioedades 
          cadena="Esto es una cadena " 
          numero={19} 
          booleano={true}
          
          />
          <Button></Button>
         <hr></hr>
         <Estado></Estado>
      </section>
      </header>
        </section>
      
    </div>
  );
}

export default App;
