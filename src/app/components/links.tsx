import Link from "next/link";
const Links = () => {
    return (
        <>
            <li>
                <Link href="/">
                    <p>Home</p>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <p>About Us</p>
                </Link>
            </li>
            <li>
                <Link href="/services">
                    <p>Services</p>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <p>Contact</p>
                </Link>
            </li>
            <li>
                <Link href="/faq">
                    <p>Faq</p>
                </Link>
            </li>
        </>
    )
}
export default Links;