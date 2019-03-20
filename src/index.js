import React from 'react';
import ReactDOM from 'react-dom';
import {Hello, BetterLookingHello} from './A-Basic.js';

const App = ({ name }) => {
return (
<div>
  <Hello name={name} />
  <BetterLookingHello name={name} />
</div>)
}


ReactDOM.render(<App name='test' />, document.getElementById('root'));
