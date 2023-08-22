type BgTextProps = {
    text:string;
}
const BgText = (props:BgTextProps)=>{
    const {text} = props;
    return(
        <p className="hidden md:block text-[200px] absolute bottom-0 z-[-1] text-bg_text tracking-[20px]">{text}</p>
    )
}
export default BgText;