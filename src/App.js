import './App.css';
import OutraLista from './components/OutraLista';
//import HelloWorld from './components/HelloWorld';
//import SayMyName from './components/SayMyName';
//import Pessoa from './components/Pessoa';
//import List from './components/List';
//import Evento from './components/Evento';
//import Form from './components/Form';
//import Conditional from './components/Condicional';

function App() {
  //var nome = "Manoportho"
  const meusItems = ['React','Vue','Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItems} />
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
