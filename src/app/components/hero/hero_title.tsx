import {League_Gothic} from 'next/font/google';
const league_Gothic = League_Gothic({ subsets: ['latin'] })
const HeroTitle = ()=>{
    const font = "text-h1 mb-9 mt-28 " + league_Gothic.className;
    return(
       <h1 className={font}>OPEN YOU BUSINESS TO THE WORLD</h1>
    )
}
export default HeroTitle;