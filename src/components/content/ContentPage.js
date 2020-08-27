import React from 'react';
import ContentCube from './ContentCube';
import ContentTetrahedron from './ContentTetrahedron';
import ContentIcosahedron from './ContentIcosahedron';
import ContentDodecahedron from './ContentDodecahedron';

export default (props) => {

    const getContent = () => {
        switch(props.id){
            case 'cube': 
                return <ContentCube />;
            case 'icosahedron': 
                return <ContentIcosahedron />;
            case 'dodecahedron': 
                return <ContentDodecahedron />;
            case 'tetrahedron': 
                return <ContentTetrahedron />;
            default:
                return null;
        }
    }

    return (
        <div className='content-page'>
            <div className='content-page-main'>
                {getContent()}
            </div>
        </div>
    )
}
