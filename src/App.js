import React from 'react';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />

        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' exact component={Detail}></Route>
      </Provider>
    </BrowserRouter>

  );
}


export default App;
