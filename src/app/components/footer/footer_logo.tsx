import Image from "next/image";
const FooterLogo = ()=>{
    return(
        <Image
        src="/images/logo_img.svg"
        alt="Logo"
        width={45}
        height={45}
        className="relative"
      />
    )
}
export default FooterLogo;