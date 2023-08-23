import Card from "./services_card";
import Design from "../../../../public/images/service_design.svg";
import Dev from "../../../../public/images/service_dev.svg";
import Ecommerce from "../../../../public/images/service_ecommerce.svg";
import Socialmedia from "../../../../public/images/service_socialmedia.svg";
const Cards = ()=>{
    let size = 400;
    const dataCards = [
        {
            title:"Custom Web Design",
            text: "Our Web Development experts understand your objectives and this is one of the many reasons why they focus on exceptional results with a unique approach proven to create brilliant ROI.",
            img: Design,
            alt:"Design"
        },
        {
            title:"Web Developer",
            text: "At Design Conversion, we don't just create ecommerce websites, we give you a complete online solution with the main goal of enhancing your yearly revenues double-fold. We aim to give your business the online exposure and brand acknowledgement that will help you in achieving increased conversions.",
            img: Dev,
            alt:"Development"
        },
        {
            title:"E-commerce",
            text: "At Design Conversion, we don't just create ecommerce websites, we give you a complete online solution with the main goal of enhancing your yearly revenues double-fold. We aim to give your business the online exposure and brand acknowledgement that will help you in achieving increased conversions.",
            img: Ecommerce,
            alt:"Ecommerce"
        },
        {
            title:"Social media manager",
            text: "Our Web Development experts understand your objectives and this is one of the many reasons why they focus on exceptional results with a unique approach proven to create brilliant ROI.",
            img: Socialmedia,
            alt:"Social media"
        }
    ]

    return (
        <div className="md:grid md:grid-cols-2 rounded-[8px] lg:rounded-[0] bg-gradient-to-b from-services_blue to-services_light_blue lg:bg-none shadow-services_shadow lg:shadow-none">
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