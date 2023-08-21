import Image from 'next/image'
type CardPros = {
    img: string,
    title: string,
    text: string,
    width: number,
    height: number
}
const Card = (props: CardPros)=>{
    const{img,title,text,width,height} = props;
    return(
        <div>
            <Image src={img} alt={img}  width={width} height={height}/>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
export default Card;