import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  var nome = "Manoportho"
  return (
    <div className="App">
      <HelloWorld /> 
      <SayMyName nome="Portho" />  
      <SayMyName nome="Maria" />  
      <SayMyName nome={nome} /> 
      <Pessoa
       nome="Portho"
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150"
       />
       <List />
    </div>
  );
}

export default App;
