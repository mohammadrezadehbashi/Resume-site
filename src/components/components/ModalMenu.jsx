import "../MainPage/mainPage.css" 

function ModalMenu({menu,setMenu,handleClick}) {
    return (
        <>
        {
           menu &&
                <ul id="menu-hamburger" className={menu?'menu-hamburger menu-hamburger-t':'menu-hamburger'}>
                    <li onClick={() => handleClick(0)}><a>ارتباط با من</a></li>
                    <li onClick={() => handleClick(1)}><a>نوشته ها</a></li>
                    <li onClick={() => handleClick(2)}><a>تجربه های من</a></li>
                    {/* <li onClick={() => handleClick()}><a>خدمات</a></li> */}
                    <li onClick={() => handleClick(5)}><a>مدارک من</a></li>
                    <li onClick={() => handleClick(3)}><a>تخصص ها</a></li>
                    <li onClick={() => handleClick(4)}><a>درباره من</a></li>
                    <li onClick={()=>setMenu(false)}><a>خروج از منو</a></li>
                </ul> 
                }

        </>
    );
}

export default ModalMenu;