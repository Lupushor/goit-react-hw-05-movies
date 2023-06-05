"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871],{839:function(n,e,t){t.d(e,{a:function(){return c}});var r=t(243),a=t(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.rj,{color:"#00BFFF",height:80,width:80,wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})}},871:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var r,a,c,i,s=t(861),o=t(439),u=t(757),p=t.n(u),l=t(839),d=t(168),f=t(444),x=f.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  gap: 15px;\n  margin-left: 10px;\n"]))),h=f.ZP.p(a||(a=(0,d.Z)(["\n  width: 640px;\n"]))),v=t(184),g=function(n){var e=n.movie,t=e.title,r=e.genres,a=e.original_title,c=e.overview,i=e.poster_path,s=e.vote_average,o="https://image.tmdb.org/t/p/w300".concat(i);return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(x,{children:[(0,v.jsx)("img",{src:i?o:"https://sd.keepcalms.com/i-w300/keep-calm-poster-not-found.jpg",alt:t}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:t||a}),(0,v.jsxs)("p",{children:["Use Score: ",s]}),(0,v.jsx)("b",{children:"Overview"}),(0,v.jsx)(h,{children:c}),(0,v.jsx)("b",{children:"Genres:"}),(0,v.jsx)("p",{children:r.map((function(n){return n.name})).join(", ")})]})]})})},m=t(87),w=(0,f.ZP)(m.rU)(c||(c=(0,d.Z)(["\n  display: inline-flex;\n  margin: 10px;\n  gap: 5px;\n  padding: 5px 10px 5px 8px;\n  border: 1px solid black;\n  border-radius: 6px;\n  width: 60px;\n  align-items: center;\n  text-decoration: none;\n\n  &:hover {\n    background-color: tomato;\n    color: white;\n  }\n"]))),j=(0,f.ZP)(m.rU)(i||(i=(0,d.Z)(["\n  display: inline-flex;\n  margin: 10px;\n  padding: 5px 15px;\n  border: 1px solid black;\n  border-radius: 6px;\n  width: 50px;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  color: black;\n  text-transform: uppercase;\n\n  &:hover {\n    background-color: tomato;\n    color: white;\n  }\n"]))),b=t(791),k=t(689),y=t(874),Z=t(752),_=function(){var n,e,t=(0,k.UO)().movieId,r=(0,b.useState)({}),a=(0,o.Z)(r,2),c=a[0],i=a[1],u=(0,k.TH)(),d=(0,b.useState)("idle"),f=(0,o.Z)(d,2),x=f[0],h=f[1],m=(0,b.useRef)(null!==(n=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,b.useEffect)((function(){h("pending");var n=function(){var n=(0,s.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,y.Y5)(t);case 3:e=n.sent,i(e),h("responded"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h("rejected");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(w,{to:m.current,children:[(0,v.jsx)(Z.jTe,{})," Back"]}),"responded"===x&&(0,v.jsx)(g,{movie:c}),(0,v.jsxs)("nav",{children:[(0,v.jsx)(j,{to:"cast",children:"Cast"}),(0,v.jsx)(j,{to:"reviews",children:"Reviews"})]}),"pending"===x&&(0,v.jsx)(l.a,{}),"rejected"===x&&(0,v.jsx)("p",{children:"Something went wrong ..."}),(0,v.jsx)(b.Suspense,{fallback:(0,v.jsx)(l.a,{}),children:(0,v.jsx)(k.j3,{})})]})}},874:function(n,e,t){t.d(e,{FE:function(){return p},Hx:function(){return v},Y5:function(){return d},wr:function(){return o},xc:function(){return x}});var r=t(861),a=t(757),c=t.n(a),i=t(924);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="2d241d2c03071ceb6548b913b9b2401a";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US&external_source=imdb_id"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=871.00833ecf.chunk.js.map