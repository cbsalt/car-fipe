import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import CarBrands from './pages/CarBrands';
import CarModels from './pages/CarModels';
import CarData from './pages/CarData';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CarBrands} />
        <Route path="/models/:id" component={CarModels} />
        <Route path="/details" component={CarData} />
      </Switch>
    </BrowserRouter>
  );
}
