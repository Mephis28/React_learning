import React from 'react';
import logo from './logo.svg';
import './App.css';
import FuncCompon from './components/FuncCompon'
import ReactComp from './components/ReactComp'
import ReactPureComp from './components/ReactPureComp'
import reactCreatElem from './components/ReactCreatElem'

function App() {
  return (
    <div className="App" id={'App'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FuncCompon/>
        <ReactComp/>
        <ReactPureComp/>
        {reactCreatElem}
      </header>
    </div>
  );
}

export default App;
