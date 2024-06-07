import { FunctionComponent } from "preact"
import { Video } from "../types.ts"

type Props = {
    video: Video;
    userid: string;
};

const VideoDetail: FunctionComponent<Props> = ({video, userid}) => {
    return(
        <div class="video-detail-container">
            <a href="/videos" class="back-button"> ← Go Back to List </a>
            <div class="video-frame">
                <iframe width="100%" height="400px" 
                    src={`https://www.youtube.com/embed/${video.youtubeid}`} 
                    title={video.title} 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <h2 class="video-detail-title">{video.title}</h2>
                <p class="video-detail-description">{video.description}</p>

            </div>

        </div>
    );
};

//                <Fav id={video.id} fav={video.fav} userid={video.userid} />

export default VideoDetail;

