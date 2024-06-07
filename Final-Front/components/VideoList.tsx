import {FreshContext, Handlers, PageProps, RouteConfig } from "$fresh/server.ts"
import { FunctionComponent } from "preact"
import { Video } from "../types.ts"

type Props = {
    videos: Video[];
    userid: string;
}

const VideoList: FunctionComponent<Props> = ({videos, userid}) => {

    return(
        <div class="video-list-container">
            {videos.map((video) => (
                <div key={video.id} class="video-item">
                    <a href={`/video/${video.id}`} class="video-link"> 
                    <img src={video.thumbnail} alt={video.title} class="video-thumbnail"/>
                    <div class="video-info">
                        <h3 class="video-title">{video.title}</h3>
                        <p class="video-description">{video.description}</p>
                        <p class="video-release-date">Release date: {new Date(video.date).toLocaleDateString()}</p>
                    </div>
                    </a>

                </div>
            ))};
        </div>
    );
};

//                <Fav id={video.id} userid={userid} fav={video.fav}/>


export default VideoList;
