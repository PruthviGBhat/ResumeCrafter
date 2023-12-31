import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {createStore,applyMiddleware} from 'redux'
import rootReducer from './Reducers/Rootrouter.js';
import {composeWithDevTools} from 'redux-devtools-extension'
import { Provider } from 'react-redux';

const reduxStore = createStore(rootReducer,composeWithDevTools);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider store={reduxStore}>
  <React.StrictMode>
   <BrowserRouter>
      <App />
   </BrowserRouter>
  </React.StrictMode>
    </Provider> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
