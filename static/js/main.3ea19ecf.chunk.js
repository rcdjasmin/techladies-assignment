(window["webpackJsonptech-assignment"]=window["webpackJsonptech-assignment"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/it me.fe3b302f.JPG"},27:function(e,t,a){e.exports=a(51)},32:function(e,t,a){},33:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),c=(a(32),a(12)),i=a(6),s=a(24),m=a.n(s);a(33);var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Nice to meet you"),r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("div",{className:"about_description"},r.a.createElement("p",null,"Hello there! I'm Celena. I currently work as web designer at TradeGecko."),r.a.createElement("p",null,"My educational background is in multimedia arts and design, but after a few years of working almost exclusively on the design aspect of marketing, UI/UX, and branding, I'm now exploring the ",r.a.createElement("em",null,"building")," part of things. I want to learn how to build usable and beautiful interfaces. This is why I want to be a part of the TechLadies Bootcamp!"),r.a.createElement("p",null,"Around this time last year, I attended a couple of TechLadies' Javascript study group sessions. I found these sessions to be incredibly useful - not only because I get to work out programming tasks with other people (instead of just pulling my hair out in frustration), but because it made me more accountable on my goal to learn."),r.a.createElement("p",null,"I hope I can do the same in an even more hands-on setting with the bootcamp. Being able to work on a real-world project for an NGO is an exciting opportunity that I wish I can be a part of too."),r.a.createElement("p",null,"Outside of design, I spend my free time either trying out a new recipe, doing my nihongo homework, reading, or watching stuff on Netflix. When I'm in a good mood, I go to the gym or do yoga. When I'm not, I just lie in bed and lurk in Reddit.")),r.a.createElement("div",{className:"about_image-wrapper"},r.a.createElement("img",{src:m.a,alt:"me"}))))};var h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Let's get in touch"),r.a.createElement("p",null,"Here's how you can contact me:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://dribbble.com/celenajasmin",target:"_blank",rel:"noopener noreferrer"},"Dribbble")," is where I post small design work here and there"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://codepen.io/celenajasmin/",target:"_blank",rel:"noopener noreferrer"},"Codepen")," is my new favorite place in the internet"),r.a.createElement("li",null,"I have a ",r.a.createElement("a",{href:"https://www.linkedin.com/in/celenajasmin/",target:"_blank",rel:"noopener noreferrer"},"Linkedin")," account too!")))};var d=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/",exact:!0,activeClassName:"selected"},"About me")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/contact/",activeClassName:"selected"},"Contact")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/weather-app/",activeClassName:"selected"},"Weather App"))),r.a.createElement("div",{className:"theme-icon--wrapper"},r.a.createElement("input",{type:"checkbox",className:"theme-toggle",name:"theme-toggle",onClick:function(){document.getElementsByTagName("body")[0].classList.toggle("theme--dark")}}),r.a.createElement("span",{class:"theme-icon"})))},p=a(7),f=a(8),g=a(10),E=a(9),b=a(11),w=a(16),v=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).onMarkerClick=function(e,t,n){a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onMapClicked=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"displayMarkers",value:function(e){var t=this;return e.length>0?e.map((function(e){return r.a.createElement(w.Marker,{key:e.name,id:e.name,forecast:e.forecast,position:{lat:e.location.latitude,lng:e.location.longitude},onClick:t.onMarkerClick})})):void 0}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.Map,{google:this.props.google,zoom:12,initialCenter:{lat:1.3448,lng:103.8224},onClick:this.onMapClicked,style:{width:"965px",height:"720px"}},this.displayMarkers(this.props.areas),r.a.createElement(w.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow},r.a.createElement("div",null,r.a.createElement("h3",{className:"map-marker--area"},this.state.selectedPlace.id),r.a.createElement("p",{className:"map-marker--forecast"},this.state.selectedPlace.forecast)))))}}]),t}(n.Component),k=Object(w.GoogleApiWrapper)({apiKey:"AIzaSyDGhSq5Wnx7WVw8BZxssTGKeThVYvOGfHM"})(v),y=(a(50),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return this.props.areas.length>0?r.a.createElement("div",null,r.a.createElement("ul",null,this.props.areas.map((function(e){return r.a.createElement("li",{key:e.index},e.name,r.a.createElement("br",null),r.a.createElement("small",null,e.forecast))})))):null}}]),t}(n.Component)),I=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(g.a)(this,Object(E.a)(t).call(this))).state={areas:{},names:[],forecasts:[]},e}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.data.gov.sg/v1/environment/2-hour-weather-forecast").then((function(e){return e.json()})).then((function(t){var a=t.area_metadata.map((function(e){return e.name})),n=t.area_metadata.map((function(e,a){return{name:e.name,location:e.label_location,forecast:t.items[0].forecasts[a].forecast}}));e.setState({areas:t.area_metadata,names:a,forecasts:n})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"weather-page-container"},r.a.createElement("div",null,r.a.createElement(y,{areas:this.state.forecasts})),r.a.createElement("div",null,r.a.createElement(k,{areas:this.state.forecasts}))))}}]),t}(n.Component);var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Weather"),r.a.createElement(I,null))};var O=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(i.a,{path:"/",exact:!0,component:u}),r.a.createElement(i.a,{path:"/contact/",component:h}),r.a.createElement(i.a,{path:"/weather-app/",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3ea19ecf.chunk.js.map