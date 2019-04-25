import React from "react";
import "./loader.scss";
import YouTubePlayer from "react-player/lib/players/YouTube";

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

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<div>
			<div className="ui embed">
				<YouTubePlayer
					className="react-player"
					url={videoSrc}
				  	controls
					pip={true}
					// Other ReactPlayer props will work here
				/>
			</div>
			<div className="ui segment">
				<h4 className="ui header">{video.snippet.title}</h4>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};
export default VideoDetail;
