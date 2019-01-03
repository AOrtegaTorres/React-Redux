import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './configureStore';

import Home from './containers/Home';
import Generation from './containers/Generation';
import Navbar from './components/Navbar';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/generation/:id' component={Generation} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
