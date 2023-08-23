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
            <div className="bg-main_blue text-white">
                <FooterLogo />
                <FooterText />
                <div className="flex">
                    <FooterLinks />
                    <div>
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