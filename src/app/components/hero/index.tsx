import HeroTitle from "./hero_title";
import HeroParagraph from "./hero_paragraph";
import HeroButton from "./hero_call";
import HeroInfo from "./hero_info";

const Hero = () => {
    return (
        <div id="hero" className="bg-hero_bg h-hero_mobile z-hero md:h-hero_desktop bg-cover pt-28 relative">
            <div className="container mx-auto px-8 md:px-4 relative">
                <HeroTitle />
                <HeroParagraph />
                <HeroButton />
            </div>
            <div className="container mx-auto px-4 z-10 relative">
                <HeroInfo />
            </div>
            <div className="absolute w-full h-full bg-hero_opacity z-hero_opacity top-0"></div>
        </div>
    )
}
export default Hero
    ;