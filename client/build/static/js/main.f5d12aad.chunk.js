(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(11),c=n.n(r),o=(n(99),n(100),n(37)),i=n(180),s=n(184),u=n(183),m=n(185),d=function(e){return l.a.createElement("div",null,l.a.createElement(i.a,{onClick:e.handleMenuClick,selectedKeys:[e.state],mode:"horizontal"},l.a.createElement(i.a.Item,{key:"hot",icon:l.a.createElement(s.a,null)},"Hot"),l.a.createElement(i.a.Item,{key:"new",icon:l.a.createElement(u.a,null)},"New"),l.a.createElement(i.a.Item,{key:"top",icon:l.a.createElement(m.a,null)},"Top")))},h=n(179),p=n(182),f=n(42),E=n.n(f),g=h.a.Meta,w=function(e){var t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2);s[0],s[1];Object(a.useEffect)((function(){console.log("integrated"),E.a.get("".concat("http://localhost:5000","/petitions"),{headers:{"Access-Control-Allow-Origin":"".concat("http://localhost:5000"),"Access-Control-Allow-Credentials":"true"}}).then((function(e){c(e.data)}))}),[]);return l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("div",null,l.a.createElement(h.a,{hoverable:!0,style:{display:"flex"},cover:l.a.createElement("img",{style:{height:"200px",width:"auto"},alt:"example",src:e.imageHref})},l.a.createElement(g,{style:{width:"500px",wordWrap:"break-word"},title:e.title,description:e.description.substr(0,Math.min(500,e.description.length))}),l.a.createElement(p.a,{percent:Math.round(e.signatures/e.goal*100),style:{display:"block"}}),l.a.createElement("p",null," ",e.signatures," signatures out of ",e.goal)))})))},v=n(58),y=n.n(v),k=n(92),b=function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("http://localhost:5000/petitions",{headers:{"Access-Control-Allow-Origin":"http://localhost:3000","Access-Control-Allow-Credentials":"true"}});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=(n(176),function(){var e=Object(a.useState)("hot"),t=Object(o.a)(e,2),n=t[0],r=t[1],c=function(e){};return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(d,{handleClick:function(e){b(),console.log("click ",e),r(e.key),c(n)},state:n}),l.a.createElement("a",{href:"#",onClick:b},"Test")),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignitems:"center"}},l.a.createElement(w,null)))});var O=function(){return console.log("PUBLIC_URL: "),l.a.createElement("div",{className:"App"},l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,n){e.exports=n(177)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.f5d12aad.chunk.js.map