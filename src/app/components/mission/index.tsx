import DescriptionMission from "./mission_description";
import Subtitle from "./mission_subtitle";
import Cards from "./mission_cards";
import MissionBgText from "./mission_bg_text";
const Mission = () => {
    return (
        <section id="mission" className="bg-gradient-to-r from-mission_blue via-mission_green to-mission_light_green relative">
            <div className="max-w-[1278px] m-auto bg-mission_bg px-[24px] pt-[73px] pb-[130px] text-mission_text">
                <Subtitle />
                <div className="max-w-[954px] m-auto">
                <DescriptionMission />
                <Cards />
                </div>
            </div>
            <MissionBgText />
        </section>
    )
}
export default Mission;