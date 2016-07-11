import React from 'react';
import {render} from 'react-dom';
import App from './app';

render(<App count={0} />, document.getElementById('app'));