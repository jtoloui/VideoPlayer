import axios from "axios";
const KEY = "AIzaSyCtvcrD-K_cqqSvMJ4uKWpFWWizbgnkcb0";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 10,
		key: KEY,
	},
});
