(this["webpackJsonpclone-reddit"]=this["webpackJsonpclone-reddit"]||[]).push([[0],[,,,,,,function(t,e){t.exports={thumbnailExists:function(t){return t.length>0&&"self"!==t}}},,,,,,,,,function(t,e,n){t.exports=n.p+"static/media/comment.4c471c20.svg"},,function(t,e,n){t.exports=n(33)},,,,,function(t,e,n){},,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r,a,s,o,i,c=n(0),l=n.n(c),u=n(10),m=n.n(u),p=(n(22),n(4)),d=n(7),b=n.n(d),f=n(11),h=n(5),v=n(12),E=n(13),g=n(3),O=(n(24),n(1));function j(t,e,n){for(var r=0;r<t.length;r++)if(t[r].id===e){t[r]=Object.assign(t[r],n);break}return t}function y(t){var e="".concat("'https://whispering-castle-81716.herokuapp.com/';","/api/v1/posts");return e+=t?"?subreddit=".concat(t):"",fetch(e).then((function(t){return t.json()}))}var P=(r=function(){function t(){Object(v.a)(this,t),Object(h.a)(this,"posts",a,this),Object(h.a)(this,"postSelected",s,this),Object(h.a)(this,"isFetching",o,this),Object(h.a)(this,"subreddit",i,this)}return Object(E.a)(t,[{key:"getPosts",value:function(){var t=Object(f.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.isFetching=!0,this.subreddit=e,t.next=5,y(this.subreddit);case 5:n=t.sent,this.posts=n,this.selectPost(n[0]),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),this.cleanPostList();case 13:return t.prev=13,this.isFetching=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[0,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()},{key:"selectPost",value:function(t){var e=function(t,e){return{posts:j(t,e.id,{visited:!0}),postSelected:e}}(this.posts,t),n=e.posts,r=e.postSelected;this.posts=n,this.postSelected=r}},{key:"dismissPost",value:function(t){var e=function(t,e,n){var r=t.filter((function(t){return t.id!==n}));return{posts:r,postSelected:e.id===n?r[0]:e}}(this.posts,this.postSelected,t.id),n=e.posts,r=e.postSelected;this.posts=n,this.postSelected=r}},{key:"cleanPostList",value:function(){this.posts=[],this.postSelected=null}}]),t}(),a=Object(g.a)(r.prototype,"posts",[O.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),s=Object(g.a)(r.prototype,"postSelected",[O.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=Object(g.a)(r.prototype,"isFetching",[O.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),i=Object(g.a)(r.prototype,"subreddit",[O.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"reactjs"}}),Object(g.a)(r.prototype,"getPosts",[O.f],Object.getOwnPropertyDescriptor(r.prototype,"getPosts"),r.prototype),Object(g.a)(r.prototype,"selectPost",[O.f],Object.getOwnPropertyDescriptor(r.prototype,"selectPost"),r.prototype),Object(g.a)(r.prototype,"dismissPost",[O.f],Object.getOwnPropertyDescriptor(r.prototype,"dismissPost"),r.prototype),Object(g.a)(r.prototype,"cleanPostList",[O.f],Object.getOwnPropertyDescriptor(r.prototype,"cleanPostList"),r.prototype),r),S=n(16),k=(n(26),n(27),n(14)),w=n.n(k),N=n(15),x=n.n(N);n(29);function C(){return l.a.createElement("span",{className:"dot"})}function D(t){var e=t.thumbnail,n=t.interactive;return void 0!==n&&n?l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{alt:"thumbnail",src:e})):l.a.createElement("img",{alt:"thumbnail",src:e})}var L=n(6);function F(t){var e=t.post,n=t.onClickHandler,r=t.onDismissPost,a=t.isSelected,s=w.a.unix(e.created_utc).utc().fromNow(),o="post-list".concat(a?" selected":"");return l.a.createElement("div",{className:o,onClick:function(){return n(e)}},l.a.createElement("h4",{className:"title"},!e.visited&&l.a.createElement(C,null),e.title),l.a.createElement("p",{className:"author"},"by ",e.author),l.a.createElement("div",null,Object(L.thumbnailExists)(e.thumbnail)&&l.a.createElement(D,{thumbnail:e.thumbnail,interactive:!1})),l.a.createElement("p",{className:"comments"},l.a.createElement("img",{className:"comment-icon",alt:"comment-icon",src:x.a}),e.num_comments," comments"),l.a.createElement("p",{className:"date-created"},"Created: ",s),l.a.createElement("button",{onClick:function(t){return function(t,e){t.stopPropagation(),r(e)}(t,e)},className:"dismiss-button"},"Dismiss"))}n(30);function z(){return l.a.createElement("div",{className:"loader"})}n(31);var _=Object(p.b)((function(t){return{postStore:t.postStore}}))(Object(p.c)((function(t){var e=t.postStore,n=e.posts,r=e.isFetching,a=e.postSelected,s=e.subreddit;function o(t){e.selectPost(t)}function i(t){e.dismissPost(t)}return l.a.createElement("aside",null,r?l.a.createElement(z,null):n.length?n.map((function(t){return l.a.createElement(F,{isSelected:a.id===t.id,onDismissPost:i,onClickHandler:o,key:t.id,post:t})})):l.a.createElement("button",{onClick:function(){e.getPosts(s)},className:"refresh-button"},"Refresh List"))})));n(32);function B(t){var e=t.post;return l.a.createElement("div",{className:"post-home"},l.a.createElement("h3",null,e.title),Object(L.thumbnailExists)(e.thumbnail)&&l.a.createElement(D,{thumbnail:e.thumbnail,interactive:!0}),l.a.createElement("a",{className:"post-link",href:e.url,target:"_blank",rel:"noopener noreferrer"},"Go To Post Link"))}function H(t){var e=t.post;return l.a.createElement(B,{post:e})}var J=Object(p.b)((function(t){return{postStore:t.postStore}}))(Object(p.c)((function(t){var e=t.postStore,n=e.postSelected,r=e.posts,a=e.subreddit,s=Object(c.useState)(a),o=Object(S.a)(s,2),i=o[0],u=o[1];function m(){e.getPosts(i)}return Object(c.useEffect)((function(){m()}),[e]),l.a.createElement("div",{className:"main-container"},l.a.createElement(_,null),l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar"},!!r.length&&l.a.createElement("button",{onClick:function(){e.cleanPostList()},className:"dismiss-all-button"},"Dismiss All"),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),m()}},l.a.createElement("label",{htmlFor:"subreddit"},"Subreddit"),l.a.createElement("input",{name:"subreddit",id:"subreddit",value:i,type:"text",onChange:function(t){return u(t.target.value.trim())}}),l.a.createElement("input",{type:"submit",value:"Search!"}))),l.a.createElement("h1",{className:"app-title"},"CloneReddit"),n&&l.a.createElement(H,{post:n})))})));var R=function(){return l.a.createElement(p.a,{postStore:new P},l.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.8b092f5d.chunk.js.map