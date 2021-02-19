import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Components/Home';
import reportWebVitals from './reportWebVitals';
import MainManu from './Components/MainManu';
import { HashRouter, Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Book from './Components/Book';



ReactDOM.render(
  <React.StrictMode>
    <MainManu></MainManu>
    <BrowserRouter>
      <Switch>
        <Route path="/home/" component={Home}></Route>
        <Route path="/book/:id" component={Book}></Route>
        <Redirect from="/" to="/home/" />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
