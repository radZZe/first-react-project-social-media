import React from 'react';
import store from "./redux/redux-store"
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


let renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)}  store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree()
});
