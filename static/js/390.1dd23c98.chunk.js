"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[390],{390:function(t,n,e){e.r(n);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(839),s=e(791),o=e(689),p=e(874),f=e(184);n.default=function(){var t=(0,o.UO)().movieId,n=(0,s.useState)(null),e=(0,a.Z)(n,2),c=e[0],l=e[1],d=(0,s.useState)("idle"),h=(0,a.Z)(d,2),g=h[0],v=h[1];return(0,s.useEffect)((function(){v("pending");var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.xc)(t);case 3:e=n.sent,l(e),v("responded"),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v("rejected");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,f.jsxs)(f.Fragment,{children:["pending"===g&&(0,f.jsx)(i.a,{}),"rejected"===g&&(0,f.jsx)("p",{children:"Something went wrong ..."}),"responded"===g&&(0,f.jsx)("ul",{children:c.map((function(t){var n=t.id,e=t.profile_path,r=t.original_name,a=t.character;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w200".concat(e):"https://kartinkin.net/uploads/posts/2022-03/1647018833_14-kartinkin-net-p-anonim-kartinki-20.jpg",alt:r,width:200}),(0,f.jsxs)("p",{children:["\u0418\u043c\u044f: ",r]}),(0,f.jsxs)("p",{children:["\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436: ",a]})]},n)}))})]})}},839:function(t,n,e){e.d(n,{a:function(){return c}});var r=e(243),a=e(184),c=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.rj,{color:"#00BFFF",height:80,width:80,wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})}},874:function(t,n,e){e.d(n,{FE:function(){return p},Hx:function(){return v},Y5:function(){return l},wr:function(){return s},xc:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(924);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="2d241d2c03071ceb6548b913b9b2401a";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/all/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US&external_source=imdb_id"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=390.1dd23c98.chunk.js.map