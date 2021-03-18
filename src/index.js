// import React, { createElement } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// // ReactDOM.render(
// //   React.createElement("h1", null, "dfsfdfsa"),
// //   document.getElementById('root')
// // );
// const v = "jsdb;;;";
// ReactDOM.render(
//   <>
//     <h1>skja {v +" " + 68 } </h1>
//     <p>jshjshj {`$(v) $(5+6)`}</p>
//     <ol>
//       <li>dsd</li>
//       <li>ks</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// <>
  //   <h1 style = {head} > {` my name is ${v} ${m}`}</h1>
  //   <p style = {head} > current date is {date} and time is {time} </p>
  // </>,
  // <h1> hello <span style ={cssStyle} >{string} </span></h1>
  


const head = {

  color: '#282c34',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  fontFamily: '"Roboto", sans-serif'
}
var date = new Date().toLocaleDateString();
var time = new Date().toLocaleTimeString();
ReactDOM.render( <App/>,document.getElementById('root'));