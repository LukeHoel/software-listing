(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(40)},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),l=n(7),s=n.n(l),o=(n(26),n(8)),i=n(9),u=n(12),m=n(10),d=n(5),f=n(13),E=(n(27),n(28),function(e){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("span",{className:"Title"},"Software Listing"),e.children)}),h=(n(29),n(30),function(e){return r.a.createElement("div",{className:"Card ".concat(e.className||""),style:e.style,onClick:e.onClick},e.children)}),p=function(e){return{animation:"slide ".concat((t=e,Math.min(2,.6+.12*t)),"s ease forwards")};var t},O=n(6),b=(n(35),function(e){return r.a.createElement("div",{className:"LoadingIndicator"},r.a.createElement("div",{className:"LoadingBall First"}),r.a.createElement("div",{className:"LoadingBall Second"}),r.a.createElement("div",{className:"LoadingBall Third"}))}),v=(n(36),function(e){return r.a.createElement("div",{className:"AvailablePlatforms"},r.a.createElement("label",null,"Available Platforms"),e.platforms.sort().map(function(e){return function(e){return r.a.createElement("img",{className:"Platform",src:"svg/".concat(e,".svg"),alt:""})}(e)}))}),C=n(2),N=n(11),g=n(3),j=n(20),S={loading:!1,searchResults:[],modalContent:void 0},y=(a={INIT:function(){return S}},Object(g.a)(a,"START_SEARCH",function(e){return Object(C.a)({},e,{loading:!0,searchResults:[]})}),Object(g.a)(a,"COMPLETE_SEARCH",function(e,t){return Object(C.a)({},e,{loading:!1,searchResults:Object(j.a)(t.searchResults)})}),Object(g.a)(a,"OPEN_MODAL",function(e,t){return Object(C.a)({},e,{modalContent:t.modalContent})}),Object(g.a)(a,"CLOSE_MODAL",function(e){return Object(C.a)({},e,{modalContent:void 0})}),a),R=Object(N.b)(function(e,t){return Object(C.a)({},t.type in y?y[t.type](e,t):e)},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());R.dispatch({type:"INIT"});var T=function(e){return r.a.createElement("div",null,r.a.createElement("b",null,e.name),r.a.createElement(v,{platforms:e.platforms}))},_=Object(O.b)(function(e){return{loading:e.loading,searchResults:e.searchResults}})(function(e){return r.a.createElement("div",{className:"SearchResultList"},0===e.searchResults.length?(t=e.loading,r.a.createElement("div",{className:"ResultPlaceholder"},t?r.a.createElement(b,null):"No Results")):"",e.searchResults.map(function(e,t){return function(e,t){return r.a.createElement(h,{className:"SearchResult",style:p(t),onClick:function(){return R.dispatch({type:"OPEN_MODAL",modalContent:T(e)})}},r.a.createElement("div",{className:"Header"},r.a.createElement("b",null,e.name)),r.a.createElement(v,{platforms:e.platforms}))}(e,t)}));var t}),L=(n(37),Object(O.b)(function(e){return{modalContent:e.modalContent}})(function(e){return r.a.createElement("div",{className:"ModalContainer \n    ".concat(void 0!==e.modalContent?"ModalOpened":"ModalClosed"),onClick:function(){return R.dispatch({type:"CLOSE_MODAL"})}},r.a.createElement(h,{className:"Modal",onClick:function(e){return e.stopPropagation()}},e.modalContent))})),M=(n(38),n(39),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={searchText:""},n.submit=n.submit.bind(Object(d.a)(n)),n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"submit",value:function(e){!function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===this.readyState&&200===this.status&&R.dispatch({type:"COMPLETE_SEARCH",searchResults:JSON.parse(this.responseText)})},t.open("GET","".concat("https://software-listing-backend.herokuapp.com","/").concat(e),!0),R.dispatch({type:"START_SEARCH"}),t.send()}("search/".concat(this.state.searchText)),e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"SearchMenu"},r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("input",{type:"text",value:this.state.searchText,onChange:function(t){return e.setState({searchText:t.target.value})}}),r.a.createElement("input",{type:"submit",value:"Search"})))}}]),t}(r.a.Component)),k=function(e){return r.a.createElement("div",{className:"ContentOffset"},r.a.createElement("div",{className:"Menu"},r.a.createElement(M,null)),r.a.createElement("span",{className:"Content"},e.children))},w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={menuOpen:!0,searchResults:[]},n.toggleMenu=n.toggleMenu.bind(Object(d.a)(n)),n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"toggleMenu",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"search",value:function(e){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(k,null,r.a.createElement(_,null)),r.a.createElement(L,{content:r.a.createElement("div",null,"Test content")}))}}]),t}(r.a.Component),A=document.getElementById("root");A&&(s.a.render(r.a.createElement(O.a,{store:R},r.a.createElement(w,null)),A),document.addEventListener("keydown",function(e){"Escape"===e.key&&void 0!==R.getState().modalContent&&R.dispatch({type:"CLOSE_MODAL"})}))}},[[21,1,2]]]);
//# sourceMappingURL=main.8b369096.chunk.js.map