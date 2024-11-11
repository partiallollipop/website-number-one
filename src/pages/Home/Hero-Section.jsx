import { useState } from "react";
import penguin from "../../assets/penguinstare.png";


export default function HeroSection() {
    // var coins = 69
    const [coins, setCoins] = useState(69)

    return (
        <div className="row big-gap center-column center-row section hero-section">
            <div className="column right-align">
                <h1>Whatever you expect,</h1>
                <h1>this won't be that.</h1>
                <h3>It'll be some other thing.</h3>
                <button className="hero-button"
                    onClick={() => {
                        setCoins(old => old + 1);
                        setCoins(old => old + 1);
                        setCoins(old => old + 1);
                }}
                >Find out what</button>
            </div>
            <img className="hero-image" src={penguin} alt="A Regal Penguin staring at the user." />    
        </div>
    )
}



