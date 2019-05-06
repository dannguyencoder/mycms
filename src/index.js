import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import Index from './components/pages/Index';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.querySelector('#root'));
