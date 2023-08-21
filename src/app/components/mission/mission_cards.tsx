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
            text: "Provide our clients with a quality service."
        },
        {
            img: visionImg,
            title: "VISION",
            text: "Provide our clients with a quality service."
        },
        {
            img: valuesImg,
            title: "VISION",
            text: "Provide our clients with a quality service."
        }
    ]
    return (
        <div className="flex justify-around">
        {dataCards.map((data: { text: string; title: string; img: string; },index: any)=>{
            return(
                <Card text={data.text} title={data.title} img={data.img} width={size} height={size}/>
            )
           
        })
    
        }
        </div>
    )
}
export default Cards;