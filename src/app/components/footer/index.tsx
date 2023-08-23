import SocialIcons from "../social_icons";
import FooterContact from "./footer_contact";
import FooterLinks from "./footer_links";
import FooterLogo from "./footer_logo";
import FooterBottom from "./fotter_bottom";
import FooterNewsletter from "./footer_newsletter";
import FooterSocialIcons from "./footer_social_icons";
import FooterText from "./footer_text";

const Footer = () => {
    return (
        <>
            <div className="bg-main_blue text-white px-[22px] py-[21px]">
                <FooterLogo />
                <FooterText />
                <div className="flex">
                    <FooterLinks />
                    <div className="border-l-2 border-footer w-[65%] pl-[15px]">
                        <FooterContact />
                        <FooterSocialIcons />
                    </div>
                </div>
                <FooterNewsletter />
            </div>
            <FooterBottom />
        </>
    )
}
export default Footer;