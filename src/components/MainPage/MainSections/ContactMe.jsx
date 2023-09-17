
function ContactMe({refContact}) {
    return (
        <section ref={refContact}>
            <h1 className="title-head" >ارتباط با من</h1>
            <div className="section d-flex img-bg-contact">

                <div className="left-contact">
                    <div>
                    <img src="./images/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651_546.png" />
                    </div>
                </div>

                <div className="right-contact">
                    <div>
                        <h1>! پیام خود را بنویسید</h1>
                        <p>فرم تماس دوست ندارید؟ پس یک ایمیل به من بفرستید. 👋</p>
                        <p>mrdt71@gmail.com
                            09389490909</p>

                        <form className="message-form">
                            <input className="input" type="text" placeholder="نام"></input>
                            <input className="input" type="text" placeholder="نام خانوادگی"></input>
                            <input className="input" type="text" placeholder="ایمیل"></input>
                            <input className="input" type="text" placeholder="موضوع"></input>
                            <input className="textarea" type="text" placeholder="متن پیام ..." />
                            <div>! پیامو بده بیاد </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactMe;