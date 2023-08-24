import Cards from "./services_cards";
import ServicesTitle from "./services_title";
import Description from "../description";
const Services = () => {
    return (
        <section id="services">
            <div className="max-w-[1440px] m-auto bg-mission_bg px-[24px] py-[42px]">
                <ServicesTitle />
                <Description text="These are some of the most important services we offer" />
                <div>
                <Cards />
                </div>
            </div>
        </section>
    )
}
export default Services;