import component from "./component";

document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';

const test = <div>Hello Mr. Courtois!</div>;

let reactDiv = document.createElement('div');

ReactDOM.render(test, reactDiv);

document.body.appendChild(reactDiv);
