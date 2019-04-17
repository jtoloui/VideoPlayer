import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("mr beast");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    const filteredVideos = response.data.items.filter(
      filterList =>
        typeof filterList.id !== "undefined" &&
        filterList.id.kind === "youtube#video"
    );
    filteredVideos.sort((a, b) => {
      let dateA = new Date(a.snippet.publishedAt),
        dateB = new Date(b.snippet.publishedAt);
      return dateB - dateA;
    });

    filteredVideos.forEach(element => {
      return (element.snippet.title = element.snippet.title.replace(
        /&#39;/g,
        "'"
      ));
    });

    this.setState({
      videos: filteredVideos,
      selectedVideo: filteredVideos[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className=" eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className=" five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
