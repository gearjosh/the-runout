import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
// import thunkMiddleware from 'redux-thunk';

import './styles/index.scss';

import App from './App';

const store = createStore(rootReducer);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
    document.getElementById('root')
  );
};

render(App);

// add <Provider/> inside <HashRouter/> but outside <Component/> once store is up and running
