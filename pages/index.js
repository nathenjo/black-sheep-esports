import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    useEffect(() => {

        var data = JSON.stringify({
            "collection": "bankTransactions",
            "database": "important-documents",
            "dataSource": "PersonalCluster",
            "projection": {
                "_id": 1
            }
        });
                    
        var config = {
            method: 'post',
            url: 'https://data.mongodb-api.com/app/data-alxel/endpoint/data/v1/action/findOne',
            headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': process.env.apiKey,
            },
            data: data
        };
                    
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

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