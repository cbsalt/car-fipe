import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CarBrands from './pages/CarBrands';
import CarModels from './pages/CarModels';
import CarData from './pages/CarData';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={CarBrands} />
      <Route path="/models" exact component={CarModels} />
      <Route path="/details" exact component={CarData} />
    </Switch>
  );
}
