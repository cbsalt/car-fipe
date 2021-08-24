import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import { store, persistor } from './store';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
