import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './main/main_container';

const App = () => {
  return (
    <div className="app">
      <Route path="/" component={MainContainer}/>
    </div>
  );
};

export default App;
