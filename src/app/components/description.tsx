type DescriptionProps = {
    text: string
}
const Description = (props: DescriptionProps)=>{
    const{text}=props
    return(
        <p>{text}</p>
    )
}
export default Description;