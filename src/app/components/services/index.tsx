import Cards from "./services_cards";
import ServicesTitle from "./services_title";
const Services = () => {
    return (
        <section id="services">
            <div className="max-w-[1278px] m-auto bg-mission_bg px-[24px] py-[42px]">
                <ServicesTitle />
                <div>
                <Cards />
                </div>
            </div>
        </section>
    )
}
export default Services;