import Image from 'next/image'
type CardPros = {
    img: string,
    alt: string,
    title: string,
    text: string,
    width: number,
    height: number
}
const Card = (props: CardPros)=>{
    const{img,alt,title,text,width,height} = props;
    return(
        <div className='text-center w-[256px] h-[248px] md:w-[176px] md:h-[170px] lg:w-[256px] lg:h-[248px] px-[32px] py-[26px] lg:px-[32px] lg:py-[26px] md:px-[10px] md:py-[18px] lg:px-[32px] lg:py-[26px] my-[15px] rounded-[23px] bg-mission_card'>
            <Image className="m-auto mb-[11px] md:mb-[5px] md:w-[37px] md:h-[37px] lg:mb-[11px] lg:w-[64px] lg:h-[64px]" src={img} alt={alt} width={width} height={height}/>
            <h3 className='text-[18px] mb-[20px] md:mb-[10px]'>{title}</h3>
            <p className='text-[16px]'>{text}</p>
        </div>
    )
}
export default Card;