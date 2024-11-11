import cake from "../../assets/birthday_cake.png"
import ghosts from "../../assets/ghosties.png"
import truck from "../../assets/truck_life.png"
import geometry from "../../assets/shapes_uwu.png"

export default function Projects() {

    return (
        <div className="column section center-column project-section big-gap">
            <div className="project-card row center-column gap">
                <img className="project-card-item" src={cake} alt="A Delightful Birthday Cake."/>
                <h2 className="project-card-item">Design centered on <a>innovation, customization,</a> and the need to go <a>above and beyond.</a></h2>
                <img className="project-card-item" src={ghosts} alt="Multiple ghosts based off (but not from) a popular video game franchise."/>
            </div>    

            <div className="project-card row center-column gap project-card-blue">
                <img className="project-card-item big-project-card-item" src={truck} alt="A Delightful Birthday Cake."/>
                <h2 className="project-card-item small-project-card-item">Detail-oriented, grounded in art, color theory, and the <a>vague concept of what a truck looks like.</a></h2>
            </div>    

            <div className="project-card row center-column gap">
                <div className="big-project-card-item">
                    <h2 className="project-card-item">Whether you're looking for something <a>simple</a> or a bit more <a>abstract,</a> it's important to ensure your website is broadly accessible. Our goal is to help you do that.</h2>
                    <div className="row center-row">
                        <button className="secondary-button paired-button">
                            Examples</button>
                        <button className="hero-button">
                            Learn More
                        </button>
                    </div>
                </div>
                <img className="project-card-item small-project-card-item" src={geometry} alt="A Delightful Birthday Cake."/>
            </div>
        </div>
    )
}