type SubTitleProps = {
    text: string;
  };
const SubTitleh2 = (props:SubTitleProps) => {
    const {text} = props;
    return(
        <h2 className="">{text}</h2>
    )
}
export default SubTitleh2;