type ImgProps = {
    src: string,
    alt: string,
    className:string;
}
const Img = (props: ImgProps)=>{
    const {src,alt,className} = props;
return(
    <img className={className} src={src} alt={alt} />
)
}
export default Img;