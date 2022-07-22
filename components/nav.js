import React, { useState } from "react";

export default function Nav(props) {
    const { propClassName, statePageLocation, stateSetPageLocation } = props;

    const [showNav, setShowNav] = useState(true);



    const setPageState = (e) => {
        e.preventDefault();
        stateSetPageLocation(String(e.target.innerText).toLowerCase());
    }

    return(
        <div  className={`${propClassName}`}>
            <nav>
                {String(statePageLocation).toLowerCase() != 'home' && <a href='/'>Home</a>}
                <a className='button' onClick={(e) => setPageState(e)}>Teams</a>
                <a className='button' onClick={(e) => setPageState(e)}>About</a>
                <a className='button' onClick={(e) => setPageState(e)}>Socials</a>
                <a className='button' onClick={(e) => setPageState(e)}>Schedule</a>
            </nav>
            <button onClick={() => setShowNav(!showNav)}/>
        </div>
    )
}