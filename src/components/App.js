import React from 'react';
import Arcticle from './Arcticles';
import arcticles from '../fixtures';
function App() {
    return ( <div>
        <h1> app name </h1>
         <Arcticle arcticle = {arcticles[1]} foo="bar" flag />
        </div>
    )
}

export default App;

