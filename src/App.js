import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Board } from './components/board';
import { ScoreBoard } from './components/scoreboard';
import { Navbar } from './components/navbar';
import { User } from './components/user';

import './styles/board.css';
import './styles/box.css';
import './styles/buttons.css';
import './App.css';

function App() {

  const routes = [
    {
      path: '/',
      component: Navbar,
      name: 'Barra de navigación',
      childRoutes: [
        {
          path: 'scoreboard',
          component: ScoreBoard
        },
        {
          path: 'board',
          component: Board
        }
      ]
    }
  ]

  return (
    <div className="app">
      
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/scoreboard" component={ScoreBoard}></Route>
        <Route exact path="/board" component={Board}></Route>
      </Switch>
        
    </div>
  );
}

export default App;
