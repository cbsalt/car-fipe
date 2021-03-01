import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';
import history from './services/history';
import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
