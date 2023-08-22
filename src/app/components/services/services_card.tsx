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
        <div className='text-center px-[10px] py-[8px] lg:px-[32px] lg:py-[26px] md:px-[10px] md:py-[18px] lg:px-[32px] lg:py-[26px] my-[15px] rounded-[8px]'>
            <Image className="m-auto mb-[11px] md:mb-[5px] w-[118px] lg:mb-[11px] lg:w-[64px] lg:h-[64px]" src={img} alt={alt} width={width} height={height}/>
            <h3 className='text-[18px] mb-[11px] md:mb-[10px]'>{title}</h3>
            <p className='text-[14px] text-service_text'>{text}</p>
        </div>
    )
}
export default Card;