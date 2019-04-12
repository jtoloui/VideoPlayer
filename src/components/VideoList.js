import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderList = videos.map((video) => {
        // checking if the search return object has an property id
        if (video.hasOwnProperty('id')) {
            // check if the return search is a video and not a channel
            if (video.id.kind === 'youtube#video') {
                return <VideoItem
                    key={video.id.videoId}
                    onVideoSelect={onVideoSelect}
                    video={video}
                />
            } else {
                return false;
            }
        } else {
            return false;
        };
    });
    return <div className="ui relaxed divided list">{renderList} </div>
};
export default VideoList;