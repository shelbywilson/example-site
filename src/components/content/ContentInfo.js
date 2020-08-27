import React from 'react';
import IconTetrahedron from '../../icons/IconTetrahedron';
import IconDodecahedron from '../../icons/IconDodecahedron';
import IconIcosahedron from '../../icons/IconIcosahedron';
import IconCube from '../../icons/IconCube';

export default () => (
    <div className='content-page-main'>
        <h2>
            Welcome
        </h2>
        <div className='content-page-image'>
            <IconTetrahedron />
            <IconCube />
            <IconDodecahedron />
            <IconIcosahedron />
        </div>
        <p>
            This is a very simple site about various polyhedrons. Click an icon to the left to explore.
        </p>
        <p>
            Reach out to Shelby Wilson with any questions.
        </p>
    </div>
)