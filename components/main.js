import React from "react";

import Logo from '../images/bsg-logos/1.jpg';

export default function Main(props) {
    return (
        <div className='main'>
            <img src='../images/bsg-logos/1.jpg'></img>
            <section className="heading">
                <h1>Black Sheep eSports</h1>
                <h3>Teams</h3>
            </section>
            <section className="image-grid">
                <div className='game-card'>
                    <img src='https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f'></img>
                    <label>League of Legends</label></div>
                <div className='game-card'>
                    <img src='https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg'></img>
                    <label>Apex Legends</label></div>
                <div className='game-card'>
                    <img src='https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S1_2560x1440-96ba21c538cda908e69be34b1e539c1a'></img>
                    <label>Rocket League</label></div>
                <div className='game-card'>
                    <img src='https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/5a52c72d-80fc-4c3f-bc24-52b09ab9896a_2560x1440-12a1d9b80efd050055faa72feee71f8e?h=270&resize=1&w=480'></img>
                    <label>Valorant</label></div>
                <div className='game-card'>
                    <img src='https://wallpapercave.com/wp/wp1809698.jpg'></img>
                    <label>Overwatch</label></div>
                <div className='game-card'>
                    <img src='https://cdn2.unrealengine.com/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg'></img>
                    <label>Fortnite</label></div>
            </section>
        </div>
    )
}