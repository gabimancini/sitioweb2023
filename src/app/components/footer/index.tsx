import SocialIcons from "../social_icons";
import FooterContact from "./footer_contact";
import FooterLinks from "./footer_links";
import FooterLogo from "./footer_logo";
import FooterBottom from "./footer_bottom";
import FooterNewsletter from "./footer_newsletter";
import FooterSocialIcons from "./footer_social_icons";
import FooterText from "./footer_text";

const Footer = () => {
    return (
        <>
            <div className="bg-main_blue text-white px-[22px] py-[21px] ">
                <div className="max-w-[1500px] m-auto md:flex md:relative">
                    <div className="md:w-[50%]">
                        <FooterLogo />
                        <FooterText />
                    </div>
                    <div className="flex md:w-[50%]">
                        <FooterLinks />
                        <div className="border-l-2 border-footer w-[64%] pl-[15px] md:w-[50%]">
                            <FooterContact />
                            <FooterSocialIcons />
                        </div>
                    </div>
                    <FooterNewsletter />
                </div>
            </div>
            <div>
                <FooterBottom />
            </div>

        </>
    )
}
export default Footer;