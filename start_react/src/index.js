import React from 'react';
import ReactDOM from 'react-dom';


const message ='Hello World меня зовут: Eliezer Master'
const element = <h1>{message}</h1>
console.log(element)

ReactDOM.render(
  element,
  document.getElementById('root')
);



