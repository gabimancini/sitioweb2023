import DescriptionMission from "./mission_description";
import Subtitle from "./mission_subtitle";
import Cards from "./mission_cards";
const Mission = () => {
    return (
        <section id="mission" className="bg-gradient-to-r from-mission_blue via-mission_green to-mission_light_green">
            <div className="max-w-[1278px] m-auto bg-mission_bg px-[24px] py-[42px]">
                <Subtitle />
                <DescriptionMission />
                <Cards />
            </div>
        </section>
    )
}
export default Mission;