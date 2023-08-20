
import Link from "next/link";
const HeroButton = ()=>{
    return(
        <Link href="/contact" className="bg-btn_call rounded-btn_call px-6 md:px-8 py-2 md:py-3 inline-block text-xs md:text-lg">
        Get in touch
      </Link>
    )
}
export default HeroButton;