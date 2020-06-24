(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(3),r=a.n(i),s=a(1),c=a(4),o=a(2);const u=Object(s.atom)({key:"questionAtom",default:[{id:1,title:"div height always return 0",date:"6 days ago",question:"I have a div and inside it renders a certain paragraph. This paragraph can vary according to user.\n\n      i want to calculate the number of lines inside this div. For that i have used a function like this\n      \n      Here 20 is my lineHeight.\n      \n      Even if i have content inside my div it always returns the divHeight as 0. What seems to be the issue here and how do i fix it?\n      ",favorited:!0,tags:["javascript","html","css"]},{id:2,title:"react-native-settings-list showing up empty",date:"1 day ago",question:"I'm trying to use react-native-settings-list. So I used part of the code over there and tried to create two items for my settings list. However they look empty on my app? Why?",favorited:!1,tags:["javascript","react","react-native"]}]}),m=Object(s.atom)({key:"searchAtom",default:""}),d=Object(s.selector)({key:"filterNames",get:({get:e})=>{const t=e(u),a=e(m);return t.filter(e=>e.title.toLowerCase().includes(a.toLowerCase()))}}),h=({question:e,setFavorite:t})=>{var a;return l.a.createElement("li",null,l.a.createElement("div",{className:"question-header"},l.a.createElement("h3",{className:"question-title"},e.title)),l.a.createElement("p",null,e.question),l.a.createElement("div",{className:"question-tags"},(null===(a=e.tags)||void 0===a?void 0:a.length)&&e.tags.map(t=>l.a.createElement("a",{key:t+e.id,href:"/",className:"tag",rel:"tag"},t))),l.a.createElement("hr",{className:"divider"}),l.a.createElement("div",{className:"question-footer"},l.a.createElement("span",null,l.a.createElement("span",{onClick:()=>t(e.id)},e.favorited?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"question-favorite",width:"24",height:"24",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z"})):l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",className:"question-favorite",viewBox:"0 0 24 24",fillRule:"evenodd",clipRule:"evenodd"},l.a.createElement("path",{d:"M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"}))),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",className:"question-comment",viewBox:"-21 -47 682.66669 682",width:"24px"},l.a.createElement("path",{d:"m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.472656-87.988281 87.988281v283.972656c0 48.421875 39.300781 87.824219 87.675781 87.988282v128.871093l185.183594-128.859375h279.152344c48.515625 0 87.988281-39.472656 87.988281-88v-283.972656c0-48.515625-39.472656-87.988281-87.988281-87.988281zm-83.308594 330.011719h-297.40625v-37.5h297.40625zm0-80h-297.40625v-37.5h297.40625zm0-80h-297.40625v-37.5h297.40625zm0 0"}))),l.a.createElement("span",{className:"question-text"},e.date)),l.a.createElement("div",null))},v=({handleQuestion:e,title:t,questionText:a,tagsList:n})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Ask a questions"),l.a.createElement("form",{onSubmit:e},l.a.createElement("input",{id:"title",type:"text",ref:t,placeholder:"Title"}),l.a.createElement("hr",{className:"divider"}),l.a.createElement("textarea",{id:"question",ref:a,placeholder:"Question"}),l.a.createElement("span",{className:"character-count"},"0/250"),l.a.createElement("input",{id:"tags",ref:n,type:"text",placeholder:"Add tags..."}),l.a.createElement("input",{type:"submit",value:"Submit",id:"question-submit"}))),E=({searchValue:e,setSearchValue:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{"aria-hidden":"true",className:"iconSearch",width:"18",height:"18",viewBox:"0 0 18 18",fill:"gray"},l.a.createElement("path",{d:"M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"})),l.a.createElement("input",{id:"search",type:"text",value:e,placeholder:"Search ...",onChange:e=>t(e.target.value)}));a(22);const g=({page:e,setPage:t})=>l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("p",null,"+")," questions",l.a.createElement("a",{href:"/#",className:"questions-favorited",id:e?"selected":"",onClick:()=>t(1)},"favorited"),l.a.createElement("a",{href:"/#",className:"questions-favorited",id:e?"":"selected",onClick:()=>t(0)},"home"))),p=({searchValue:e,filtered:t,setFavorite:a})=>l.a.createElement(l.a.Fragment,null,l.a.createElement("main",null,l.a.createElement("h1",null,"Favorite questions"),l.a.createElement("ul",null,(null===t||void 0===t?void 0:t.length)?t.map(e=>e.favorited&&l.a.createElement(h,{key:e.id,question:e,setFavorite:a})):e?l.a.createElement("div",null,"Nothing matches your search..."):l.a.createElement("div",null," No questions yet..."))));function f(){const e=Object(s.useRecoilState)(u),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(s.useRecoilState)(m),r=Object(o.a)(i,2),f=r[0],w=r[1],y=Object(s.useRecoilValue)(d),q=l.a.useRef(null),N=l.a.useRef(null),b=l.a.useRef(null),x=l.a.useState(0),k=Object(o.a)(x,2),j=k[0],S=k[1],F=e=>{n(()=>a.map((t,a)=>t.id===e?Object(c.a)(Object(c.a)({},t),{},{favorited:!t.favorited}):t))};return l.a.createElement("div",{className:"App"},l.a.createElement(g,{page:j,setPage:S}),l.a.createElement(E,{searchValue:f,setSearchValue:w}),l.a.createElement("hr",{className:"divider"}),j?l.a.createElement(p,{searchValue:f,filtered:y,setFavorite:F}):l.a.createElement(l.a.Fragment,null,l.a.createElement("main",null,l.a.createElement("h1",null,"Recently added"),l.a.createElement("ul",null,(null===y||void 0===y?void 0:y.length)?y.map(e=>l.a.createElement(h,{key:e.id,question:e,setFavorite:F})):f?l.a.createElement("div",null,"Nothing matches your search..."):l.a.createElement("div",null," No questions yet..."))),l.a.createElement("hr",{className:"divider"}),l.a.createElement(v,{handleQuestion:e=>{e.preventDefault();let t=b.current.value?b.current.value.split(","):null,l={year:"numeric",month:"long",day:"numeric"};n(()=>[...a,{id:a.length+1,title:q.current.value,date:(new Date).toLocaleDateString("en-US",l),question:N.current.value,favorited:!1,tags:t}]),q.current.value="",N.current.value="",b.current.value=""},title:q,questionText:N,tagsList:b})))}const w=document.getElementById("root");r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.RecoilRoot,null,l.a.createElement(f,null))),w)},7:function(e,t,a){e.exports=a(23)}},[[7,1,2]]]);
//# sourceMappingURL=main.5f4a8c40.chunk.js.map