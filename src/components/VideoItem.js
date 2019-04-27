import "./VideoItem.css";
import React from "react";
import { Image } from "semantic-ui-react";

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className="video-item item">
			<Image
				src={video.snippet.thumbnails.high.url}
				alt={video.snippet.description}
			/>
			<div className="content">
				<div>
					<div className="header">{video.snippet.title}</div>
				</div>
			</div>
		</div>
	);
};
export default VideoItem;
