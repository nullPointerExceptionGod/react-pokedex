import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ParticlesBackground from './components/particles/particlesbackground'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ParticlesBackground />, document.getElementById('root'));

serviceWorker.unregister();