import React from 'react';
import { UserProvider } from './contexts/UserContext';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Header from './components/Header'
import Main from './pages/Main'
import Sessoes from './pages/Sessoes'
import Assentos from './pages/Assentos'
import Sucesso from './pages/Sucesso'


export default function App() {

  return (
    <div className='app'>
    <Router> 
      <Header />
      <Switch> 
        <UserProvider> 
          <Route path="/" exact  component={Main}/>
          <Route path="/sessoes"  component={Sessoes}/>
          <Route path="/assentos" component={Assentos}/>
          <Route path="/sucesso" component={Sucesso}/>
        </UserProvider> 
      </Switch>
    </Router>
  </div>
  );
}