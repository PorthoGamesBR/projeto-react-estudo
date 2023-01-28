import './App.css';
//import HelloWorld from './components/HelloWorld';
//import SayMyName from './components/SayMyName';
//import Pessoa from './components/Pessoa';
//import List from './components/List';
//import Evento from './components/Evento';
//import Form from './components/Form';
//import Conditional from './components/Condicional';
//import OutraLista from './components/OutraLista';

//import { useState } from 'react'
//import SeuNome from './components/SeuNome';
//import Saudacao from './components/Saudacao';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  //var nome = "Manoportho"
  //const meusItems = ['React','Vue','Angular']

  //const [nome, setNome] = useState()

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
