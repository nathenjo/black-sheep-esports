import React, { useState } from 'react';
import Nav from '../components/nav';

export default function Home() {

    const [pageLocation, setPageLocation] = useState('home');

    return(
        <div className='home'>
            <div className='button'>Test Text</div>
            <Nav
                statePageLocation={pageLocation}
                stateSetPageLocation={setPageLocation}
                propClassName='home__nav'
            />

        </div>
    )
}