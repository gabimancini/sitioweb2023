import Card from "./services_card";
import Description from "../description";
import Design from "../../../../public/images/service_design.svg";
import Dev from "../../../../public/images/service_dev.svg";
import Ecommerce from "../../../../public/images/service_ecommerce.svg";
import Socialmedia from "../../../../public/images/service_socialmedia.svg";
const Cards = ()=>{
    let size = 72;
    const dataCards = [
        {
            title:"Custom Web Design",
            text:  "Crafting digital experiences that resonate. Our custom web design services go beyond aesthetics. We delve into user-centric design, building intuitive interfaces that seamlessly guide visitors. Every pixel and line of code is purposeful, aimed at not just catching eyes, but also engaging minds. Let's create digital journeys that leave lasting impressions.",
            img: Design,
            alt:"Design"
        },
        {
            title:"Web Developer",
            text: "Our web development experts understand your goals and this is one of the many reasons why they focus on exceptional results with a unique approach that is proven to deliver brilliant ROI. Our engineers are in constant training with the latest software technologies, offering a wide range of solutions.",
            img: Dev,
            alt:"Development"
        },
        {
            title:"E-commerce",
            text: "At Design Conversion, we don't just create ecommerce websites, we give you a complete online solution with the main goal of enhancing your yearly revenues double-fold. We aim to give your business the online view more",
            img: Ecommerce,
            alt:"Ecommerce"
        },
        {
            title:"Social media manager",
            text: "Empower your brand's voice. Our social media management services are your key to a captivating online presence. We curate content that sparks conversations, design strategies that foster engagement, and analyze data to refine your digital strategy continuously. Let's elevate your social media game together.",
            img: Socialmedia,
            alt:"Social media"
        }
    ]

    return (
        <div className={`"
            md:flex flex-wrap
            rounded-[8px] lg:rounded-[0]
            bg-light_gray lg:bg-none
        "`}>
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