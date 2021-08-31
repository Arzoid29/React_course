import logo from './logo.svg';
import './App.css';
import Componente from './Components/Componente';
import Propioedades from './Components/Propiedades';
import Estado from "./Components/Estado"
import Button from './Components/DropButton';
import Navba from './Components/Navbar';
import RenderizadoCondicional from './Components/RedenrizadoCondicional';
import RenderizadoElementos from './Components/RenderizadoElementos';
import {EventosES6,EventosES7,MasSobreEventos} from './Components/Eventos';
import Padre from './Components/ComunicacionComponentes';
import CicloVida from './Components/CicloVida';
function App() {
  return (
    <div className="App">
        <section>
          <Navba></Navba>
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
         <hr/>
         <RenderizadoCondicional/>
         <hr/>
         <RenderizadoElementos/>
         <hr/>
         <EventosES6/>
         <hr/>
         <EventosES7/>
         <hr/>
         <MasSobreEventos/>
         <hr/>
         <Padre></Padre>
        <hr/>
        <CicloVida/>
      </section>
      </header>
        </section>
      
    </div>
  );
}

export default App;
