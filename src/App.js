import './App.css';

function sum(a, b){
  return a + b;
}

const url = 'https://via.placeholder.com/150'

function App() {
  const name = 'Portho'

  return (
    <div className="App">
      <h1>Olá React</h1>
      <h2>Meu nome é {name}</h2>
      <p>Este é meu primeiro app em react</p>
      <p>A soma de 2+2 é {sum(2,2)}</p>
      <img src={url} alt='Minha imagem'></img>     
    </div>
  );
}

export default App;
