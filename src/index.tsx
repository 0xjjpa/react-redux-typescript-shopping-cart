import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore } from 'redux';
import { shop } from './reducers/index';
import { ShoppingCartState } from './types/index';

// Ideally this data is retrieved from a server either on load
// or triggered by an action in the system.
const dynamicallyLoadedItems = [
  { name: 'Cherries 🍒', price: 0.25 },
  { name: 'Kiwis 🥝', price: 0.40 },
  { name: 'Apples 🍎', price: 0.35 },
  { name: 'Peaches 🍑', price: 0.60 },
  { name: 'Grapes 🍇', price: 0.30 }
];

const store = createStore<ShoppingCartState>(
  shop, {
    availableItems: dynamicallyLoadedItems,
    items: [],
    total: 0
  }, 
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

import ShoppingCart from './containers/ShoppingCart';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <ShoppingCart />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
