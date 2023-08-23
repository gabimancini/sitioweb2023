import Image from "next/image";
const FooterLogo = ()=>{
    return(
        <Image
        src="/images/logo_img.svg"
        alt="Logo"
        width={46}
        height={43}
        className="mb-[17px]"
      />
    )
}
export default FooterLogo;