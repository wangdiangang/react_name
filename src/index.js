import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./Home"
import 'element-theme-default';
import RouterIndex from './router/index'
ReactDOM.render(
  <div>
    <Home/>
    <RouterIndex/>
  </div>,
  document.getElementById('root')
);
