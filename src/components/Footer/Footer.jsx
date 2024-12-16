import lotus from "../../assets/lotus.jpg"
import footerWiggles from "../../assets/footer_wiggles.png"

export default function Footer() {

    return (
        <div>
            <footer className="footer row stretch-width flex-apart">
                <div className="row center-column footer-logo">
                    <img className="logo-image" src={lotus} alt="A digital drawing of a pink lotus." />
                    <div className="footer-title">
                        <h2>Wesbite</h2>
                        <h2>for Dogs</h2>
                    </div>
                </div>
                <div className="row big-gap footer-links">
                    <div className="column">
                        <h3>About Me</h3>
                        <p>About Page</p>
                        <p>My Mission</p>
                    </div>
                    <div className="column">
                        <h3>My Work</h3>
                        <p>Projects</p>
                        <p>Reviews</p>
                        <p>Services</p>
                    </div>
                    <div className="column">
                        <h3>Contact Me</h3>
                        <p>E-Mail</p>
                        <p>Social Media</p>
                    </div>
                </div>
            </footer>
            <img className="footer-wiggles" src={footerWiggles} alt="Purple, teal, and white wavy horizontal lines." />
        </div>
    )

}