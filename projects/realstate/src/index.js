import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import { addHousing } from './actions/housings';
import {agentContact} from './actions/agent';

import housings from "./common/data/housings";
import agents from "./common/data/agents";

const store = configureStore();
setTimeout(()=>{housings.forEach(housing => {
    store.dispatch(addHousing({ ...housing }));
})}, 5000)
setTimeout(()=>{agents.forEach(agent=> {
    store.dispatch(agentContact({ ...agent }));
})}, 5000)



const state = store.getState();

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));
registerServiceWorker();
