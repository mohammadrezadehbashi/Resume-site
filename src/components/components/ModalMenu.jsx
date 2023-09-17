import "../MainPage/mainPage.css" 

function ModalMenu({menu,setMenu}) {
    return (
        <>
        {
           menu &&
                <ul className='menu-hamburger'>
                    <li><a>ارتباط با من</a></li>
                    <li><a>نوشته ها</a></li>
                    <li><a>تجربه های من</a></li>
                    <li><a>خدمات</a></li>
                    <li><a>مدارک من</a></li>
                    <li><a>تخصص ها</a></li>
                    <li><a>درباره من</a></li>
                    <li onClick={()=>setMenu(false)}><a>خروج از منو</a></li>
                </ul> 
                }

        </>
    );
}

export default ModalMenu;