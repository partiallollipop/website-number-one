import portrait from "../../assets/contemplative_penguin.png";

export default function AboutMe (){

    return (
        <div className="column center-column project-section big-gap">
            <h1 className="title-phrase about-me-section center-row">Design so intuitive, even a penguin could use it.</h1>
            <div className="row center-column big-gap about-me-section">
                <div className="stretch-height flex-apart">
                    <h3 className="about-text">Having battled through the web design of the early 2000s and beyond, we know the value of a user-friendly, intuitive website when it comes to doing business.</h3>
                    <h3 className="about-text">For an entire half a year, we've been busting our booties to learn coding and web design, purely because we wanted to join the growing movement of people who take into account their user's needs first, rather than whatever “avant-garde” vision they pull out of their asses to make things flashier, take longer to load, and more useless than anything else.</h3>
                    <h2 className="about-text center-column">As my grandpappy always said...</h2>
                </div>
                <img className="hero-image" src={portrait} alt="A black and white photo of a thoughtful penguin staring off into the distance." />
            </div>
            <h1>Bad UI... is bad for U and I</h1>
            <button className="hero-button">
                My Work
            </button>
        </div>
    )

}