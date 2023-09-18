import { useState } from "react";
import Doc from "./components/Doc";

function Honors({ refDoc }) {

    const [selectBtn,setSelectBtn]=useState(0);

const docBtnHanlde=(numBtn)=>{
    setSelectBtn(numBtn)
}
console.log(selectBtn);

    return (
        <section ref={refDoc}>
            <h1 className="title-head" > مدارک و تقدیرنامه ها</h1>

            <div className="buttons">
                <div className={selectBtn===0 ? "btn-select":"buttons-doc"} onClick={()=>docBtnHanlde(0)}>مدارک</div>
                <div className={selectBtn===1 ? "btn-select":"buttons-doc"} onClick={()=>docBtnHanlde(1)}>تقدیرنامه</div>
                <div className={selectBtn===2 ? "btn-select":"buttons-doc"} onClick={()=>docBtnHanlde(2)}>افتخارات</div>
            </div>

            <div className="section sectionTwo row-item ">
                
                {selectBtn===0 ?
                [...Array(9)].map(item => {
                    return (
                        <Doc />
                    )
                })
                :selectBtn===1 ?
                [...Array(5)].map(item => {
                    return (
                        <Doc />
                    )
                })
                :
                [...Array(1)].map(item => {
                    return (
                        <Doc />
                    )
                })
}
            </div>
        </section>
    );
}

export default Honors;

