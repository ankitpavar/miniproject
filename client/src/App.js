import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ProductPage from './pages/ProductPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path='/' component={ProductPage} />
        <Route path='/success' component={SuccessPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
