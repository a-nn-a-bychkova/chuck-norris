(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],[,function(e,t,n){e.exports={Title:"Categories_Title__10Lnd",List:"Categories_List__272rL",Item:"Categories_Item__2Z5qT",ActiveItem:"Categories_ActiveItem__2qfKL",ItemText:"Categories_ItemText__1vhjw",ChuckContainer:"Categories_ChuckContainer__1ysev",Img:"Categories_Img__2QISx",Joke:"Categories_Joke__2_y7Y"}},,function(e,t,n){e.exports={Header:"AppBar_Header__2V7uW",Img:"AppBar_Img__1qfIg",Text:"AppBar_Text__3_jw0"}},,,,,function(e,t,n){e.exports={Container:"Container_Container__5ohiO"}},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(7),i=n.n(a),s=(n(14),n(15),n(3)),o=n.n(s),u=n(0);function h(){return Object(u.jsxs)("header",{className:o.a.Header,children:[Object(u.jsx)("img",{src:"https://assets.chucknorris.host/img/avatar/chuck-norris.png",alt:"logo",width:"43px",height:"43px",className:o.a.Img}),Object(u.jsx)("span",{className:o.a.Text,children:"Chuck Norris"})]})}var j=n(8),l=n.n(j);function m(e){var t=e.children;return Object(u.jsx)("div",{className:l.a.Container,children:t})}var d=n(4),g=n(1),_=n.n(g),x=n.p+"static/media/chuck.e2e70346.png",f=n(6),p=n.n(f),b=n(9),C="https://api.chucknorris.io/jokes/";function O(){return v.apply(this,arguments)}function v(){return v=Object(b.a)(p.a.mark((function e(){var t,n,c,r=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,n);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function k(){return O("".concat(C,"random"))}function I(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(d.a)(a,2),s=i[0],o=i[1],h=Object(c.useState)(""),j=Object(d.a)(h,2),l=j[0],m=j[1];function g(e){var t;m(e.currentTarget.innerHTML),(t=e.currentTarget.innerHTML,O("".concat(C,"random?category=").concat(t))).then((function(e){return o(e.value)}))}return Object(c.useEffect)((function(){O("".concat(C,"categories")).then((function(e){return r(e)})),k().then((function(e){return o(e.value)}))}),[]),Object(u.jsxs)("section",{children:[Object(u.jsxs)("div",{className:_.a.CategoriesContainer,children:[Object(u.jsx)("h1",{className:_.a.Title,children:"Categories"}),n&&Object(u.jsxs)("ul",{className:_.a.List,children:[n.map((function(e){return Object(u.jsx)("li",{className:l===e?"".concat(_.a.Item," ").concat(_.a.ActiveItem):_.a.Item,onClick:g,children:e},e)})),Object(u.jsx)("li",{className:"random"===l?"".concat(_.a.Item," ").concat(_.a.ActiveItem):_.a.Item,onClick:function(e){m(e.currentTarget.innerHTML),k().then((function(e){return o(e.value)}))},children:"random"},"random")]})]}),Object(u.jsxs)("div",{className:_.a.ChuckContainer,children:[Object(u.jsx)("div",{className:_.a.Joke,children:s}),Object(u.jsx)("img",{src:x,width:"122px",height:"258px",alt:"Chuck Norris",className:_.a.Img})]})]})}var T=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(h,{}),Object(u.jsx)(m,{children:Object(u.jsx)(I,{})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),N()}],[[18,1,2]]]);
//# sourceMappingURL=main.9ece50dc.chunk.js.map