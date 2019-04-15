import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../APIs/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("Vikkstar");
  }
  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    let filteredVideos = [];
    response.data.items.filter(filterList => {
      // catch the objects without the key 'id'
      if (typeof filterList.id === "undefined") {
        return false;
      } else if (filterList.id.kind === "youtube#video") { // filtering out the youtube channels
        filteredVideos.push(filterList);
      }
      return filteredVideos;
    });

    this.setState({
      videos: filteredVideos
    });
    this.setState({ selectedVideo: this.state.videos[0] });
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
