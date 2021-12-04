import React from 'react';
import store from "./redux/redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextStore from './Context';
import {Provider} from './Context'


let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
                {/* dispatch={store.dispatch.bind(store)}  store={store} */}
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree()
});
