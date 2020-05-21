import React from 'react';
import Authentication from './containers/Authentication/Authentication';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Authentication />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
