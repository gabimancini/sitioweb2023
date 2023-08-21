type DescriptionProps = {
    text: string
}
const Description = (props: DescriptionProps)=>{
    const{text}=props
    return(
        <p className="text-[12px] mb-[40px] md:text-[14px] lg:text-[18px]">{text}</p>
    )
}
export default Description;