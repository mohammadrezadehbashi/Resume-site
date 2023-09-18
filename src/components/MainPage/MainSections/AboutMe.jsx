
function AboutMe({ refAboutMe }) {

    return (
        <section ref={refAboutMe}>
            <h1 className="title-head" >درباره محمد رضا دهباشی</h1>
            <div className="section d-flex">
                <div className="about-left">
                    <h4 className="about-text">
                        محمد دهباشی هستم . حدود یک سال در شرکت فناوران به عنوان توسعه دهنده ری اکت کار کرده ام و پیش از اون حدود 9 ماه در حال یادگیری فرانت در بوت کمپ و خارج از آن بوده ام ... تکنولوژی هایی که کار کردم رو لطفا (
                        (در رزومه پیوست شده نگاه کنید )) . معمولا آدم صبوری هستم و تلاش مستمر دارم روی کارم ،انرژی مثبت بودن توی روابط کاری برام اهمیت داره ...
                        مهارت های جدید و آدرس گیت پروژه ها توی فایل ضمیمه که براتون ارسال شده است میباشد
                        <br />
                      :  پروژه های تقویتی که انجام داده ام 
                        <br/>
                         https://github.com/mohammadrezadehbashi?tab=repositories :گیت هاب
                        <br/>
                        چهار پروژه اخیر رو لطفا از این لینک بالا بررسی فرمایید , تکنولوژی های مجموع چهار پروژه: 
                        <br/> Ract js , redux toolkit , thunk , next js , css3 , html5 , formik axios , context , formik ,mui ,..., apifake (json-server)  .
                       <br/>
                         https://gitlab.com/mohammadrezadehbashi/blog.git :گیت لب
                       <br/> (تکنولوژی ها :api real , react js , tailwind css , Libraries :react-slick /react-tostify / react-icons /draft-js ,...
                        )                                           
                    </h4>
                    <div className="statistics d-flex">
                        <div><p>+2437</p><h6>پروژه تکمیل شده</h6></div>
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