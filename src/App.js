import './App.css';
//import HelloWorld from './components/HelloWorld';
//import SayMyName from './components/SayMyName';
//import Pessoa from './components/Pessoa';
//import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  //var nome = "Manoportho"
  return (
    <div className="App">
      <h1>Testando evento</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Form />
    </div>
  );
}

export default App;
