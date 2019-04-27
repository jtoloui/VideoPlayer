import React from "react";
import "./loader.scss";
import YouTubePlayer from "react-player/lib/players/YouTube";
import { Embed, Segment, Header } from "semantic-ui-react";

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
			<Embed
				hd={true}
				autoplay={true}
				aspectRatio="16:9"
				id={video.id.videoId}
				placeholder={video.snippet.thumbnails.high.url}
				source="youtube"
			/>
			<Segment>
				<Header as="h4">{video.snippet.title}</Header>
				<p>{video.snippet.description}</p>
			</Segment>
		</div>
	);
};
export default VideoDetail;
