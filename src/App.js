import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Board } from './components/board';
import { ScoreBoard } from './components/scoreboard';

import './styles/board.css';
import './styles/box.css';
import './styles/buttons.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Route exact path="/" component={ ScoreBoard }></Route>
        <Route exact path="/board" component={ Board }></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
