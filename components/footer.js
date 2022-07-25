import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer(props) {
    return (
        <footer>
            <section className="section-1">
                <h4>Black Sheep Gaming (BSG)</h4>
                <p>Black Sheep Gaming strives for excellence in all games through gameplay, sportsmanship, discipline, and cooperation</p>
            </section>
            <section className="section-2">
                <h4>Teams</h4>
                <ul>
                    <li>League of Legneds</li>
                    <li>Apex Legneds</li>
                    <li>Rocket League</li>
                    <li>Valorant</li>
                    <li>Overwatch</li>
                    <li>Fortnite</li>
                </ul>
            </section>
            <section className="section-3">
                <a><FontAwesomeIcon icon="fa-brands fa-discord" /><p>Discord</p></a>
                <a><FontAwesomeIcon icon="fa-brands fa-facebook" /><p>Facebook</p></a>
                <a><FontAwesomeIcon icon="fa-brands fa-twitter" /><p>Twitter</p></a>
                <a><FontAwesomeIcon icon="fa-brands fa-instagram" /><p>Instagram</p></a>
                <a><FontAwesomeIcon icon="fa-brands fa-tiktok" /><p>Tik Tok</p></a>
            </section>
        </footer>
    )
}