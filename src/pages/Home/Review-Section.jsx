import { ReviewCardLeftText, ReviewCardRightText } from "../../components/Review-Card";
import thumbsUp from "../../assets/thumbs_up.png";
import flowers from "../../assets/flower_planning.png";
import oldMan from "../../assets/codger.png";

const reviewArray = [
    {
        text: "Really focuses on ease-of-use, but doesn’t sacrifice aesthetics to do so. Will recommend to everyone except my business rivals.",
        image: thumbsUp
    },
    {
        text: "Intuitive interface lets me focus on making my piles of plastic flowers look perfect!! Five stars!",
        image: flowers
    },
    {
        text: "Well it’s definitely a website, and it definitely shows up on my computer, but there are no ads. 0/10, anticapitalist drivel.",
        image: oldMan
    }
]

export default function ReviewSection() {
    return (
        <div className="review-section">
            {
                reviewArray.map((item, index) => {
                    const isLeft=index%2===1
                    if(isLeft) return (
                        <ReviewCardRightText text={item.text} image={item.image} />
                    )
                    return (<ReviewCardLeftText text={item.text} image={item.image} />)
                })
            }


        </div>
    )
}