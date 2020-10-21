import React from 'react';
import { MovieProvider } from './contexts/MoviesContext';

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
        <MovieProvider> 
          
          <Route path="/sessoes"  component={Sessoes}/>
          <Route path="/assentos" component={Assentos}/>
          <Route path="/sucesso" component={Sucesso}/>
          <Route path="/" component={Main}/>
        </MovieProvider> 
      </Switch>
    </Router>
  </div>
  );
}