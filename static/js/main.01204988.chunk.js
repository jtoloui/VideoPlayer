(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(47)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),c=a.n(r),s=a(8),o=a.n(s),l=a(16),m=a(2),u=a(3),d=a(5),v=a(4),p=a(6),f=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={term:""},a.onInputChange=function(e){a.setState({term:e.target.value})},a.onFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),t}(n.Component),h=a(17),b=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:10,key:"AIzaSyCtvcrD-K_cqqSvMJ4uKWpFWWizbgnkcb0"}}),E=(a(45),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{className:"ui image",alt:t.snippet.description,src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",null,i.a.createElement("div",{className:"header"},t.snippet.title))))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return i.a.createElement(E,{key:e.id.videoId,onVideoSelect:a,video:e})});return i.a.createElement("div",{className:"ui relaxed divided list"},n," ")},w=(a(46),function(e){var t=e.video;if(!t)return i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"ui active dimmer"},i.a.createElement("div",{className:"ui large text loader"},"Loading")));var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:a,title:t.snippet.title})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",{className:"ui header"},t.snippet.title),i.a.createElement("p",null,t.snippet.description)))}),N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(i)))).state={videos:[],selectedVideo:null},a.onTermSubmit=function(){var e=Object(l.a)(o.a.mark(function e(t){var n,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:n=e.sent,i=[],n.data.items.filter(function(e){return"undefined"!==typeof e.id&&("youtube#video"===e.id.kind&&i.push(e),i)}),a.setState({videos:i}),a.setState({selectedVideo:a.state.videos[0]});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.onTermSubmit("Reactjs")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(f,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:" eleven wide column"},i.a.createElement(w,{video:this.state.selectedVideo})),i.a.createElement("div",{className:" five wide column"},i.a.createElement(S,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})))))}}]),t}(n.Component);c.a.render(i.a.createElement(N,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.01204988.chunk.js.map