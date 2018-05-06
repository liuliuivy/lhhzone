import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import { addHousing } from './actions/housings';

const store = configureStore();

store.dispatch(addHousing({ description: "presale", price: 4500 }));
store.dispatch(addHousing({ description: "second hand", price: 3000 }));
const state = store.getState();
console.log(state);

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
