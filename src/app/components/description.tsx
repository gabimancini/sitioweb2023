type DescriptionProps = {
    text: string
}
const Description = (props: DescriptionProps)=>{
    const{text}=props
    return(
        <p className="text-[14px] mb-[40px] lg:text-[18px]">{text}</p>
    )
}
export default Description;