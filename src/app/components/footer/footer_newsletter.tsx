const FooterNewsletter = () => {
    return (
        <form className="mt-[14px] text-[14px] md:absolute md:bottom-0 md:max-w-[440px] md:w-[100%]">
            <label>Subscribe to our Newsletter</label>
            <div className="flex relative mt-[17px]">
                <input type="email" placeholder="Enter you email" className="rounded-[8px] p-[5px] w-[100%] bg-bg_newsletter_input"/>
                <button type="submit" className="absolute bg-white px-[28px] py-[5px] text-main_black inline-block right-[0] rounded-[8px]">Sucsribe</button>
            </div>
        </form>
    )
}
export default FooterNewsletter;