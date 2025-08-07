import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { SharedContextProvider } from 'sharedContext/SharedContextProvider';

ReactDOM.render(<SharedContextProvider><App /></SharedContextProvider>, document.getElementById('root'));
