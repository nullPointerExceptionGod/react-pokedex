import React, {Component} from 'react';
import Particles from 'react-particles-js';
import App from '../App';
import {parameters, style} from './particlesproperties';

class ParticlesBackground extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <App />
                <Particles params={parameters}
                           style={style}
                />
            </div>
        )
    }
}

export default ParticlesBackground;