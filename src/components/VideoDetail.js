import React from "react";
import "./loader.scss";
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
	return (
		<div>
			<Embed
				hd={true}
				autoplay={false}
				aspectRatio="16:9"
				id={video.id.videoId}
				placeholder={video.snippet.thumbnails.high.url}
				source="youtube"
				active={true}
			/>
			<Segment>
				<Header as="h4">{video.snippet.title}</Header>
				<p>{video.snippet.description}</p>
			</Segment>
		</div>
	);
};
export default VideoDetail;
