import Image from 'next/image'
type CardPros = {
    img: string,
    alt: string,
    title: string,
    text: string,
    width: number,
    height: number
}
const Card = (props: CardPros) => {
    const { img, alt, title, text, width, height } = props;
    return (
        <div className={`"
            md:shadow-services_shadow
            md:max-w-[50%] m-auto
            px-[10px] py-[8px] md:px-[10px] md:py-[18px] md:px-[32px] md:py-[26px]
            my-[15px]
            rounded-[8px]
            "`}>
            <div className='flex '>
            <Image className="mb-[11px] lg:mb-0 " src={img} alt={alt} width={width} height={height} />
             <h3 className='leading-[3] text-[18px] mb-[11px]'>{title}</h3>
             </div>
              <p className='text-[14px] text-service_text leading-[14px] md:leading-7'>{text}</p>
        </div>
    )
}
export default Card; 