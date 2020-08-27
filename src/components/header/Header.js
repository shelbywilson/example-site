import React from 'react';

export default (props) => (
    <header className='header'>
        <h1>
            Polyhedrons {props.subheader ? ` — ${props.subheader}` : ''}
        </h1>
    </header>
)