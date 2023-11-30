import './mainPage.css';
import { BsMouse } from "react-icons/bs";
import { FaSquareXmark, FaBarsStaggered, FaLaptopCode, FaTelegram, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useState } from 'react';
import ModalMenu from '../components/ModalMenu';
import TextIntro from "../components/TextIntro"

function Header({ handleClick , setMenu , menu }) {

    // const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
    }
    console.log(menu);


    return (
        <header onClick={()=>menu===true ? setMenu(false):null}>

            <nav className='d-flex' style={{ position: "relative" }}>
                <ul className='d-flex'>
                    <li onClick={() => handleClick(0)}><a>ارتباط با من</a></li>
                    <li onClick={() => handleClick(1)}><a>نوشته ها</a></li>
                    {/* <li><a>تجربه های من</a></li> */}
                    <li onClick={() => handleClick(2)}><a>ویدیو های من</a></li>
                    <li onClick={() => handleClick(3)}><a>تخصص ها</a></li>
                    <li onClick={() => handleClick(4)}><a>درباره من</a></li>
                    <li onClick={() => handleClick(5)}><a>مدارک من</a></li>
                </ul>

                <div className='dis-block'>
                    {menu ?
                        <FaSquareXmark onClick={handleMenu} size={40} color='white' style={{ position: "absolute", left: 45 }} />
                        :
                        <FaBarsStaggered onClick={handleMenu} size={40} color='white' style={{ position: "absolute", left: 45 }} />
                    }
                </div>

                <div className='Logo-nav'>
                    <FaLaptopCode size={40} />
                </div>
            </nav>
            {
                <ModalMenu menu={menu} setMenu={setMenu} handleClick={handleClick}/>
            }

            <section className='container-header'>

                <div className='header-left d-flex'>
                    <img src='images/vecteezy_happy-3d-student-boy-with-books-on-white-background-png_22484651_546.png' className='img-person' />
                    <div className='scroll-div'>
                        <div className='scroll-divTwo'>
                            <BsMouse className='mouse' />
                            <h2>اسکرول کنید</h2>
                        </div>

                    </div>
                </div>


                <div className='header-right'>
                    <h1>محمد رضا دهباشی زاده</h1>
                    {/* <h6>! هستم Junior React Developer من </h6> */}
                    <h6>
                        <TextIntro/>
                    </h6>
                    <div className='link-resume-social '>
                        <div className="d-flex">
                            <ul className='social-link d-flex'>
                                <li><a href=""><FaTelegram className='icon-social' /></a></li>
                                <li><a href="https://www.instagram.com/mohammad.reza.dehbashi/"><FaInstagram className='icon-social' /></a></li>
                                <li><a href=""><FaTwitter className='icon-social' /></a></li>
                                <li><a href="https://www.linkedin.com/in/mohammadreza-dehbashi-61984a22b/"><FaLinkedin className='icon-social' /></a></li>
                            </ul>
                            <a className='btn' href={"./document/Blue-White-Professional-Training-Acting-Resume.pdf"} download><div ><FaCloudDownloadAlt className='icon' /> <p>دانلود رزومه </p></div></a>
                        </div>
                    </div>
                </div>
            </section>

        </header>
    );
}

export default Header;