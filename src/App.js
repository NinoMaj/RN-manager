import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

// eslint-disable-next-line no-console
console.ignoredYellowBox = [
  'Setting a timer',
];

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDx5HFWodn84Fl1xsYffm14vH_enKHpRys',
      authDomain: 'manager-1acf5.firebaseapp.com',
      databaseURL: 'https://manager-1acf5.firebaseio.com',
      projectId: 'manager-1acf5',
      storageBucket: 'manager-1acf5.appspot.com',
      messagingSenderId: '46537765677',
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
