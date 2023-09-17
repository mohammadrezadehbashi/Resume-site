import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "./Video";

function Slliders(props) {
    var settings = {
        // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1

    //   focusOnSelect: true,
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   speed: 500
    };
    return (
        <div >
            {/* style={{ paddingTop:"10px",paddingBottom:'450px',width:720,height:200,borderRadius:50, background:"red"}}  */}
        <Slider {...settings} className="slider-video">
            <div className="video-div">
           <Video/>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
            <div>
                <h3>5</h3>
            </div>
            <div>
                <h3>6</h3>
            </div>
        </Slider>
        </div>
    );
}
export default Slliders;