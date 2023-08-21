import Card from "./mission_card";
import misionImg from '../../../../public/images/mission.svg';
import visionImg from '../../../../public/images/vision.svg';
import valuesImg from '../../../../public/images/values.svg';
const Cards = () => {
    let size: 35
    const dataCards = [
        {
            img: misionImg,
            title: "MISSION",
            text: "Provide our clients with a quality service.",
            alt: "mision"
        },
        {
            img: visionImg,
            title: "VISION",
            text: "Provide our clients with a quality service.",
            alt: "vision"
        },
        {
            img: valuesImg,
            title: "VALUE",
            text: "Provide our clients with a quality service.",
            alt: "value"
        }
    ]
    return (
        <div className="flex justify-between flex-wrap">
            {dataCards.map((data: {img: string; alt: string; title: string; text: string;}, index: any) => {
                return (
                    <Card img={data.img} alt={data.alt} title={data.title} text={data.text}  width={size} height={size} />
                )
            })
            }
        </div>
    )
}
export default Cards;