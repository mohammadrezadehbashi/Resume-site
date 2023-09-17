
import { Player } from 'video-react';

function Video(props) {
    
    return (
        <>
             <Player >
                  <source poster="/assets/poster.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
             </Player>
        </>
    );
    }
export default Video;