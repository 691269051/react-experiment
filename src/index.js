import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './controller';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './routers';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept();
// }

registerServiceWorker();
