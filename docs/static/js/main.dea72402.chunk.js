(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(37)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a,c=n(0),s=n.n(c),r=n(7),u=n.n(r),i=(n(26),n(8)),l=n(9),o=n(12),m=n(10),h=n(3),d=n(13),p=(n(27),n(28),n(5)),f=n(11),E=n(6),O=n(20),b={menuOpen:!0,loading:!1,searchResults:[]},v=(a={INIT:function(){return b}},Object(E.a)(a,"TOGGLE_MENU",function(e){return Object(p.a)({},e,{menuOpen:!e.menuOpen})}),Object(E.a)(a,"START_SEARCH",function(e){return Object(p.a)({},e,{loading:!0,searchResults:[]})}),Object(E.a)(a,"COMPLETE_SEARCH",function(e,t){return Object(p.a)({},e,{loading:!1,searchResults:Object(O.a)(t.searchResults)})}),a),j=Object(f.b)(function(e,t){return Object(p.a)({},t.type in v?v[t.type](e,t):e)},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());j.dispatch({type:"INIT"});var y=function(e){return s.a.createElement("div",{className:"Navbar"},s.a.createElement("i",{onClick:function(){return j.dispatch({type:"TOGGLE_MENU"})},className:"MenuButton material-icons"},"menu"),s.a.createElement("span",{className:"Title"},"Software Listing"),e.children)},R=(n(30),n(31),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={searchText:""},n.submit=n.submit.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"submit",value:function(e){!function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&j.dispatch({type:"COMPLETE_SEARCH",searchResults:JSON.parse(this.responseText).results.other})},t.open("GET","https://software-listing-backend.herokuapp.com/".concat(e),!0),j.dispatch({type:"START_SEARCH"}),t.send()}("debian/".concat(this.state.searchText)),e.preventDefault()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"SearchMenu",style:{width:N}},s.a.createElement("form",{onSubmit:this.submit},s.a.createElement("input",{type:"text",value:this.state.searchText,onChange:function(t){return e.setState({searchText:t.target.value})}}),s.a.createElement("input",{type:"submit",value:"Search"})))}}]),t}(s.a.Component)),g=n(4),N="200px",S=Object(g.b)(function(e){return{menuOpen:e.menuOpen}})(function(e){return s.a.createElement("div",{className:"ContentOffset"},s.a.createElement("div",{className:"Menu",style:{width:e.menuOpen?N:0}},s.a.createElement(R,null)),s.a.createElement("span",{className:"Content"},e.children))}),T=(n(35),n(36),function(e){return s.a.createElement("div",{className:"Card ".concat(e.class||""),style:e.style},e.children)}),_=function(e){return Math.min(2,.6+.12*e)},w=function(e){return{animation:"slide ".concat(_(e),"s ease forwards")}},C=Object(g.b)(function(e){return{loading:e.loading,searchResults:e.searchResults}})(function(e){return s.a.createElement("div",{className:"SearchResultList",style:(n=e.searchResults.length,{animation:"enableScroll ".concat(_(n),"s linear forwards")})},0===e.searchResults.length?(t=e.loading,s.a.createElement("div",{style:{margin:"10px"}},t?"Loading":"No Results")):"",e.searchResults.map(function(e,t){return function(e,t){return s.a.createElement(T,{class:"SearchResult",style:w(t)},s.a.createElement("div",{className:"Header"},s.a.createElement("b",null,e.name)))}(e,t)}));var t,n}),M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={menuOpen:!0,searchResults:[]},n.toggleMenu=n.toggleMenu.bind(Object(h.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"search",value:function(e){}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(y,null),s.a.createElement(S,null,s.a.createElement(C,null)))}}]),t}(s.a.Component);u.a.render(s.a.createElement(g.a,{store:j},s.a.createElement(M,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.dea72402.chunk.js.map