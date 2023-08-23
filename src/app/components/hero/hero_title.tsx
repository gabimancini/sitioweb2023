import {League_Gothic} from 'next/font/google';
const league_Gothic = League_Gothic({ subsets: ['latin'] })
const HeroTitle = ()=>{
    const font = "text-white text-2xl md:text-h1 mb-8 md:mb-[49px] md:mt-28 tracking-[2px] md:tracking-[3.4px] " + league_Gothic.className;
    return(
       <h1 className={font}>OPEN YOU BUSINESS TO THE WORLD</h1>
    )
}
export default HeroTitle;