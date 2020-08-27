import React from 'react';
import ContentPage from './ContentPage';
import Header from '../header/Header';
import ContentInfo from './ContentInfo';

export default (props) => {
    const getContent = () => {
        switch(props.activeContent) {
            case 'cube':
            case 'icosahedron':
            case 'dodecahedron':
            case 'tetrahedron':
                return <ContentPage 
                    id={props.activeContent}
                    />;
            default:
                return <ContentInfo />
        }
    }

    return (
        <div className='content'>
            <Header 
                subheader={props.activeContent}
                />
            <main role='main' className='layout-content-scroll'>
                {getContent()}    
            </main>
        </div>
    )
}