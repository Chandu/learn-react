import React from 'react'
import ReactDOM from 'react-dom'
import * as components from './components.jsx' 

var RootElement = components.RootElement;

 
ReactDOM.render(<RootElement/>, document.getElementById('mount-point'));