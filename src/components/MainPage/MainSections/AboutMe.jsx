
function AboutMe({refAboutMe}) {

    return (
        <section ref={refAboutMe}>
            <h1 className="title-head" >درباره محمد رضا دهباشی</h1>
            <div className="section d-flex">
                <div className="about-left">
                    <h2 className="about-text">Lorem ipsum
                        dolor sit amet consectetur adipisicing elit
                        . Voluptate quas laudantium adipisci quasi
                        dignissimos repellendus voluptates,
                        dicta sint error illo soluta non nisi ipsa
                        exercitationem fugiat inventore vero nam
                        ipsum?
                        <br />
                        dolor sit amet consectetur adipisicing elit
                        . Voluptate quas laudantium adipisci quasi
                        dignissimos repellendus voluptates,
                        dicta sint error illo soluta non nisi ipsa
                        exercitationem fugiat inventore vero nam
                        ipsum?
                        <br />
                        dolor sit amet consectetur adipisicing elit
                        . Voluptate quas laudantium adipisci quasi
                        dignissimos repellendus voluptates,
                        dicta sint error illo soluta non nisi ipsa
                        exercitationem fugiat inventore vero nam
                        ipsum?
                        <br />
                        dolor sit amet consectetur adipisicing elit
                        . Voluptate quas laudantium adipisci quasi
                        dignissimos repellendus voluptates,
                        dicta sint error illo soluta non nisi ipsa
                        exercitationem fugiat inventore vero nam
                        ipsum?
                    </h2>
                    <div className="statistics d-flex">
                        <div><p>+2437</p><h6>پروژه های تکمیل شده</h6></div>
                        <div><p>+247</p><h6>فنجان قهوه</h6></div>
                        <div><p>+2427</p><h6>مشتری خوشحال</h6></div>
                    </div>
                </div>
                <div className="about-right">
                    <img src="./images/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651_546.png"
                        className="about-img" />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;