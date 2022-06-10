import React from 'react';


import './exercise4.css'

function Accordion(props) {
    return (
        <div className='accordion_section'>
            <button className='accordion'>
                <p className='accordion_title'>{proops.title}</p>
            </button>
            <div className="accordion_context">
                <div
                    className="accordion_text"
                    dangerouslySetInnerHTML={{ __html: proops.context }}
                    />
            </div>
        </div>
    );
}

export default Accordion
