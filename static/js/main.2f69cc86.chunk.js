(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),s=n.n(c),i=(n(63),n(3)),o=n(4),l=n(6),j=n(5),h=(n(64),n(32)),u=n(8),p=n(17),b=n.n(p),g=n(18),O=(n(66),n(67),n(1)),d=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)("button",{className:"sidebar-button",id:this.props.genre===this.props.text?"selected":"",onClick:function(){var t=e.props.text;e.props.changeGenre(t)},children:this.props.text})}}]),n}(r.a.Component),v=(n(69),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"side-bar",children:[Object(O.jsx)(d,{text:"All Genre",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Drama",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Crime",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Action",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Mystery",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Sci-Fi",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Fantasy",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Comedy",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Animation",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Romance",genre:this.props.genre,changeGenre:this.props.changeGenre}),Object(O.jsx)(d,{text:"Horror",genre:this.props.genre,changeGenre:this.props.changeGenre})]})}}]),n}(r.a.Component)),x=(n(70),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("button",{className:"nav-bar-button",children:this.props.text})}}]),n}(r.a.Component)),f=(n(71),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"nav-bar",children:[Object(O.jsx)("img",{className:"logo",src:"https://img.icons8.com/glyph-neue/64/000000/movie-projector.png",alt:"logo"}),Object(O.jsx)(x,{text:"Home"}),Object(O.jsx)(x,{text:"Movies"}),Object(O.jsx)(x,{text:"About"})]})}}]),n}(r.a.Component)),m=n(56),N=(n(72),n(115)),y=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.data,t=e.sno,n=e.name,a=e.genre,r=e.trailer,c=e.rating;return Object(O.jsxs)("div",{className:"movies-table-row",style:this.props.header?{fontWeight:"bold",backgroundColor:"#260303",color:"#D94188"}:{},children:[Object(O.jsx)("div",{className:"column serial-number",children:t+"."}),Object(O.jsx)("div",{className:"column movie-name",children:n}),Object(O.jsx)("div",{className:"column genre",children:a}),Object(O.jsx)("div",{className:"column trailer",children:this.props.header?r:Object(O.jsx)("a",{href:r,children:Object(O.jsx)("img",{className:"trailer-image",src:"/trailer2.gif",alt:"trailer"})})}),Object(O.jsx)("div",{className:"column rating",children:this.props.header?c:Object(O.jsx)(N.a,{name:"read-only",value:c,readOnly:!0})})]})}}]),n}(r.a.Component),G=(n(76),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"loader-container",children:Object(O.jsx)("img",{className:"loader",src:"/loader.gif",alt:"loader"})})}}]),n}(r.a.Component)),C=(n(77),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){var e,t=this.props.data,n=[],a=Object(m.a)(t);try{for(a.s();!(e=a.n()).done;){var r=e.value;n.push(Object(O.jsx)(y,{data:r},r.sno))}}catch(c){a.e(c)}finally{a.f()}return Object(O.jsxs)("div",{className:"movies-table",children:[Object(O.jsx)(y,{data:{sno:"S.No",name:"Movie Name",genre:"Genre",trailer:"Trailer",rating:"Rating"},header:!0}),this.props.loader?Object(O.jsx)(G,{}):"",n]})}}]),n}(r.a.Component)),k=(n(78),n(53)),S=n.n(k),w=n(52),A=n.n(w),R=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(o.a)(n,[{key:"render",value:function(){for(var e=this,t=Math.ceil(this.props.totalMovies/5),n=[],a=function(t){e.props.pageNo-1===t?n.push(Object(O.jsx)("button",{className:"pagination-button selected",onClick:function(){e.props.changePage(t+1)},children:t+1})):n.push(Object(O.jsx)("button",{className:"pagination-button",onClick:function(){e.props.changePage(t+1)},children:t+1}))},r=0;r<t;r++)a(r);return Object(O.jsxs)("div",{className:"pagination",children:[Object(O.jsx)("div",{className:"arrows back",onClick:function(){var t=e.props.pageNo;t=t-1>0?t-1:t,e.props.changePage(t)},children:Object(O.jsx)(A.a,{})}),n,Object(O.jsx)("div",{className:"arrows next",onClick:function(){var n=e.props.pageNo;n=n+1<=t?n+1:n,e.props.changePage(n)},children:Object(O.jsx)(S.a,{})})]})}}]),n}(r.a.Component),M=n(54),P=n.n(M),F=function(){var e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://vipinfvrtmovies.free.beeceptor.com/movies");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).changeSearch=function(e){a.setState({pageNo:1,search:e.target.value,flag:!0})},a.changeRating=function(e){a.setState({pageNo:1,flag:!0,rating:"all"===e.target.value?"all":parseInt(e.target.value)})},a.changeGenre=function(e){a.setState({pageNo:1,flag:!0,genre:e.target.value})},a.changeGenreS=function(e){a.setState({pageNo:1,flag:!0,genre:e})},a.changePage=function(e){a.setState({pageNo:e})},a.state={search:"",pageNo:1,flag:!1,rating:"all",genre:"All Genre",data:[],loader:!0},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t,loader:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.data;if(t=(t=(t=t.filter((function(t){return t.name.toLowerCase().includes(e.state.search.toLowerCase())}))).filter((function(t){return"all"===e.state.rating||parseInt(t.rating)===e.state.rating}))).filter((function(t){return"All Genre"===e.state.genre||t.genre===e.state.genre})),this.state.flag){var n=1;t=t.map((function(e){return e.sno=n++,e}))}for(var a=[],r=5*(this.state.pageNo-1);r<5*this.state.pageNo&&r<t.length;r++)a.push(t[r]);return Object(O.jsxs)("div",{className:"main-container",children:[Object(O.jsx)(f,{}),Object(O.jsx)(v,{genre:this.state.genre,changeGenre:this.changeGenreS}),Object(O.jsxs)("div",{className:"movie-table-container",children:[Object(O.jsxs)("div",{className:"filters",children:[Object(O.jsx)("input",{value:this.state.search,placeholder:"Search for movies",className:"movie-search",type:Text,onChange:this.changeSearch}),Object(O.jsxs)("select",{className:"rating-dropdown",name:"rating",onChange:this.changeRating,children:[Object(O.jsx)("option",{value:"all",selected:!0,children:"All Rating"}),Object(O.jsx)("option",{value:0,children:"0 Rating"}),Object(O.jsx)("option",{value:1,children:"1 Rating"}),Object(O.jsx)("option",{value:2,children:"2 Rating"}),Object(O.jsx)("option",{value:3,children:"3 Rating"}),Object(O.jsx)("option",{value:4,children:"4 Rating"}),Object(O.jsx)("option",{value:5,children:"5 Rating"})]}),Object(O.jsxs)("select",{className:"genre-dropdown",name:"genre",onChange:this.changeGenre,children:[Object(O.jsx)("option",{value:"All Genre",selected:!0,children:"All Genre"}),Object(O.jsx)("option",{value:"Animation",children:"Animation"}),Object(O.jsx)("option",{value:"Crime",children:"Crime"}),Object(O.jsx)("option",{value:"Horror",children:"Horror"}),Object(O.jsx)("option",{value:"Mystery",children:"Mystery"}),Object(O.jsx)("option",{value:"Sci-Fi",children:"Sci-Fi"}),Object(O.jsx)("option",{value:"Drama",children:"Drama"}),Object(O.jsx)("option",{value:"Fantasy",children:"Fantasy"}),Object(O.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(O.jsx)("option",{value:"Action",children:"Action"}),Object(O.jsx)("option",{value:"Romance",children:"Romance"})]})]}),Object(O.jsx)(C,{data:a,loader:this.state.loader}),Object(O.jsx)(R,{totalMovies:t.length,pageNo:this.state.pageNo,changePage:this.changePage})]})]})}}]),n}(r.a.Component),I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/",exact:!0,component:H}),Object(O.jsx)(u.a,{path:"/header",exact:!0,component:f}),Object(O.jsx)(u.a,{path:"/sidebar",exact:!0,component:v})]})}}]),n}(a.Component);var J=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(h.a,{children:Object(O.jsx)(I,{})})})}}]),n}(r.a.Component);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root"))},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.2f69cc86.chunk.js.map