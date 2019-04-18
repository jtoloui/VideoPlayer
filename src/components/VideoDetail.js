import React from 'react';
import './loader.scss';
import ReactPlayer from 'react-player'


const VideoDetail = ({ video }) => {
    if (!video) {
        return (
            <div className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui large text loader">Loading</div>
                </div>
            </div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <ReactPlayer
                    className='react-player'
                    url={videoSrc}
                    width='100%'
                    height='100%'
                    controls={true}
                    pip={true}
                />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>
                    {video.snippet.description}
                </p>
            </div>

        </div>
    );
};
export default VideoDetail;