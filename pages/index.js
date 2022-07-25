import React, { useState } from 'react';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faFacebook, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';

library.add(fas, far, faTwitter, faInstagram, faFacebook, faTiktok, faDiscord);
dom.watch();

import Nav from '../components/nav';
import Main from '../components/main';
import Footer from '../components/footer';

export default function Home() {

    const [pageLocation, setPageLocation] = useState('home');

    return(
        <div className='home'>
            <Nav
                statePageLocation={pageLocation}
                stateSetPageLocation={setPageLocation}
                propClassName='home__nav'
            />
            <Main />
            <Footer />
        </div>
    )
}