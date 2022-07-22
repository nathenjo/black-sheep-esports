import React, { useEffect, useState } from "react";

import DeleteIcon from '@mui/icons-material/Delete';

export default function Nav(props) {
    const { propClassName, statePageLocation, stateSetPageLocation } = props;

    const [showNav, setShowNav] = useState(true);

    useEffect(() => {  
        document.querySelector('#nav-toggle-button').addEventListener('click', function() {
            if (showNav) {
                document.querySelector('#nav-toggle-button').style.left = '6%';
                document.querySelector('nav').classList.add('show-nav');
                document.querySelector('nav').classList.remove('hide-nav');
            } else if(showNav == false) {
                document.querySelector('#nav-toggle-button').style.left = '0';
                document.querySelector('nav').classList.add('hide-nav');
                document.querySelector('nav').classList.remove('show-nav');
            }
        })
    })

    const setPageState = (e) => {
        e.preventDefault();
        stateSetPageLocation(String(e.target.innerText).toLowerCase());
    }

    return(
        <div className={`nav-container ${propClassName}`}>
            <nav>
                {String(statePageLocation).toLowerCase() != 'home' && <a href='/'>Home</a>}
                <a className='button' onClick={(e) => setPageState(e)}>Teams</a>
                <a className='button' onClick={(e) => setPageState(e)}>About</a>
                <a className='button' onClick={(e) => setPageState(e)}>Socials</a>
                <a className='button' onClick={(e) => setPageState(e)}>Schedule</a>
            </nav>
            <button id='nav-toggle-button' className='nav-toggle' onClick={() => setShowNav(!showNav)}>
                <svg data-testid="DeleteIcon"></svg>
            </button>
        </div>
    )
}