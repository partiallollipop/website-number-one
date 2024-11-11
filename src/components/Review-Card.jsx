import thumbsUp from "../assets/thumbs_up.png";

export function ReviewCardLeftText ({text, image}) {
    return (
        <div className="row review-card-wrapper">
            <div className="review-left review-text">
                <p>
                {text}
                </p>
            </div>
            <div className="review-right">
            <img className="project-card-item review-image" src={image} alt="A Nice Guy doing a thumbs up and such."/>
            </div>
        </div>
    )
}

export function ReviewCardRightText ({text, image}) {
    return (
        <div className="row review-card-wrapper">
            <div className="review-left">
            <img className="project-card-item review-image" src={image} alt="A Nice Guy doing a thumbs up and such."/>
            </div>
            <div className="review-right review-text">
                <p>
                {text}
                </p>
            </div>
        </div>
    )
}