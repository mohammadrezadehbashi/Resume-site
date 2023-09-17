import Sliders from "./components/Sliders";

function VideoMe({refVideos}) {
    return (
        <section ref={refVideos} >
            <h1 className="title-head" >ویدیو افتخارات من</h1>
            <div className="video-section img-png ">
                <Sliders/>
                <h1>نام ویدیو</h1>
                <p>1/11</p>
            </div>

            {/* <div style={{background:"red",margin:120}}>
                <img className="banner-img" src="./images/vecteezy_colorful-smoke-explode-png-design_9375077_970.png"/>
            </div> */}
        </section>
    );
}

export default VideoMe;
