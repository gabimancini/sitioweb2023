import Link from "next/link";
type LinksProps = {
    className: string
}
const Links = (props: LinksProps) => {
    const {className} = props;
    return (
        <>
            <li>
                <Link href="/" className={className}>
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link href="/about" className={className}>
                    <p>About Us</p>
                </Link>
            </li>
            <li>
                <Link href="/services" className={className}>
                    <p>Services</p>
                </Link>
            </li>
            <li>
                <Link href="/contact" className={className}>
                    <p>Contact</p>
                </Link>
            </li>
            <li>
                <Link href="/faq" className={className}>
                    <p>Faq</p>
                </Link>
            </li>
        </>
    )
}
export default Links;