import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import he from "he";
import { Button, Grid } from "semantic-ui-react";

class App extends Component {
	state = {
		videos: [],
		selectedVideo: null,
		accendingClicked: false,
		onDecendingClicked: true,
	};

	componentDidMount() {
		this.onTermSubmit("ReactJS");
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		const filteredVideos = response.data.items.filter(
			(filterList) =>
				typeof filterList.id !== "undefined" &&
				filterList.id.kind === "youtube#video"
		);

		filteredVideos.forEach((element) => {
			element.snippet.title = he.decode(element.snippet.title);
		});
		filteredVideos.sort((a, b) => {
			let dateA = new Date(a.snippet.publishedAt),
				dateB = new Date(b.snippet.publishedAt);
			return dateB - dateA;
		});
		this.setState({
			videos: filteredVideos,
			selectedVideo: filteredVideos[0],
		});
	};
	onAccendingClick = () => {
		this.setState({
			videos: this.state.videos.sort((a, b) => {
				let dateA = new Date(a.snippet.publishedAt),
					dateB = new Date(b.snippet.publishedAt);
				return dateA - dateB;
			}),
		});
		this.setState({ accendingClicked: true, onDecendingClicked: false });
	};

	onDecendingClick = () => {
		this.setState({
			videos: this.state.videos.sort((a, b) => {
				let dateA = new Date(a.snippet.publishedAt),
					dateB = new Date(b.snippet.publishedAt);
				return dateB - dateA;
			}),
		});
		this.setState({ onDecendingClicked: true, accendingClicked: false });
	};
	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video,
		});
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<Grid stackable>
					<Grid.Row>
						<Grid.Column width={16}>
							<Button.Group floated="right" basic>
								<Button
									attached="left"
									active={this.state.onDecendingClicked}
									onClick={this.onDecendingClick}
								>
									Latest Videos
								</Button>
								<Button
									attached="right"
									active={this.state.accendingClicked}
									onClick={this.onAccendingClick}
								>
									Oldest Videos
								</Button>
							</Button.Group>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={11}>
							<VideoDetail video={this.state.selectedVideo} />
						</Grid.Column>
						<Grid.Column width={5}>
							<VideoList
								onVideoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default App;
