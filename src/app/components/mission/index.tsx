import DescriptionMission from "./description";
import Subtitle from "./subtitle";
import Cards from "./cards";
const Mission = () => {
    return (
        <section id="mission" className="bg-gradient-to-r from-mission_blue via-mission_green to-mission_light_green">
            <div className="max-w-[1278px] m-auto bg-mission_bg">
                <Subtitle />
                <DescriptionMission />
                <Cards />
            </div>
        </section>
    )
}
export default Mission;