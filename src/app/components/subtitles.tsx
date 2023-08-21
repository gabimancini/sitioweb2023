type SubTitleProps = {
    text: string;
  };
const SubTitleh2 = (props:SubTitleProps) => {
    const {text} = props;
    return(
        <h2 className="text-center text-[22px] md:text[32px] lg:text-[42px] mb-[16px]">{text}</h2>
    )
}
export default SubTitleh2;