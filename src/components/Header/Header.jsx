import lotus from "../../assets/lotus.jpg"
import bar from "../../assets/header bar.png"


export default function Header() {
    return (
        <div className="header-wrapper stretch-width">
            <header className="header column stretch-width flex-apart">
                <div className="header row stretch-width flex-apart header-text">
                    <div className="logo row gap center-column">
                        <img className="logo-image" src={lotus} alt="A digital drawing of a pink lotus." />
                        <div>
                            <h1 className="logo-title">Wesbite</h1>
                            <h1 className="logo-title">for Dogs</h1>
                        </div>
                    </div>
                    <div className="row big-gap center-column">
                        <a>Projects</a>
                        <a>About Me</a>
                        <a>Reviews</a>
                    </div>
                </div>
                <img className="header-bar" src={bar} alt="Wiggles" />
            </header>
        </div>
    )
}