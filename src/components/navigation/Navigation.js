import React, { useState } from 'react';
import IconCube from '../../icons/IconCube';
import IconDodecahedron from '../../icons/IconDodecahedron';
import IconTetrahedron from '../../icons/IconTetrahedron';
import IconIcosahedron from '../../icons/IconIcosahedron';
import IconMenu from '../../icons/IconMenu';
import IconClose from '../../icons/IconClose';
import IconInfo from '../../icons/IconInfo';

export default (props) => {
    const [ isExpanded, setIsExpanded ] = useState(false);
    const {
        updateContent,
    } = props;

    return (
        <nav className={`navigation ${isExpanded ? 'navigation-expanded' : ''}`} role='navigation'>
            <div className='navigation-content'>
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-label='Click to toggle navigation menu'
                    className='navigation-button navigation-button-menu'
                    >
                    {isExpanded ? <IconClose /> : <IconMenu /> }
                </button>
                <button 
                    onClick={() => {updateContent('tetrahedron')}}
                    className='navigation-button'
                    >
                        <IconTetrahedron />
                        <span className='navigation-button-label'>
                            Tetrahedron
                        </span>
                </button>
                <button 
                    onClick={() => {updateContent('cube')}}
                    className='navigation-button'
                    >
                        <IconCube />
                        <span className='navigation-button-label'>
                            Cube
                        </span>
                </button>
                <button 
                    onClick={() => {updateContent('dodecahedron')}}
                    className='navigation-button'
                    >
                        <IconDodecahedron />
                        <span className='navigation-button-label'>
                            Dodecahedron
                        </span>
                </button>
                <button 
                    onClick={() => {updateContent('icosahedron')}}
                    className='navigation-button'
                    >
                        <IconIcosahedron />
                        <span className='navigation-button-label'>
                            Icosahedron
                        </span>
                </button>
                <button 
                    onClick={() => {updateContent(false)}}
                    className='navigation-button navigation-button-info'
                    >
                        <IconInfo />
                </button>
            </div>
        </nav>
    )
}