type ButtonProps={
    type?:'submit' | 'reset' | 'button';
    onclick: () => void; 
    className : string;
    children: any;
}
const Button = (props:ButtonProps)=>{
    const {type, onclick,className,children}=props;
    return(
        <button className={className} type={type} onClick={onclick}>{children}</button>
    )
}
export default Button;