import React from 'react';
import ReactDOM from 'react-dom';
import Acordation from '../components/Accordation';

import './exercise4.css';

function App() {
    return (
        <div className='App'>
            <Accordation
                title='What is your return policy?'
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do edisum tempor incididunt ut labore et dolore magna aliqua."
                />
            <Accordation
                title='What is your return policy?'
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do edisum tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do edisum tempor incididunt ut labore et dolore magna aliqua."
            />
            <Accordation
                title='What is your return policy?'
                content="
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do edisum tempor incididunt ut labore et dolore magna aliqua.</p>
                </br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do edisum tempor incididunt ut labore et dolore magna aliqua.</p>
                </br>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do edisum tempor incididunt ut labore et dolore magna aliqua.</p>

                "
            />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
