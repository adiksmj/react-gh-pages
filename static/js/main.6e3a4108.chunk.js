(this.webpackJsonpadiapp=this.webpackJsonpadiapp||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(4),a=n.n(i),r=(n(9),n(10),n(2)),s=(n(11),n(12),n(0)),d=function(t){return console.log(t.dataTodos),Object(s.jsx)("ul",{children:t.dataTodos.map((function(t){return Object(s.jsx)("li",{children:t.title},t.id)}))})},u=(n(14),function(t){var e=Object(o.useState)(""),n=Object(r.a)(e,2),c=n[0],i=n[1];return Object(s.jsxs)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault();var n={id:Math.floor(100*Math.random())+1,title:c};t.onCreateTodo(n),i("")},children:[Object(s.jsx)("input",{type:"text",value:c,onChange:function(t){i(t.target.value),console.log(c)}}),Object(s.jsx)("button",{type:"submit",children:"Add"})]})}),l=function(){var t=Object(o.useState)([{id:1,title:"Eat"},{id:2,title:"Sleep"},{id:3,title:"Code"}]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Todo List"}),Object(s.jsx)(u,{onCreateTodo:function(t){c(n.concat(t)),console.log(n)}}),Object(s.jsx)(d,{dataTodos:n})]})},j=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(l,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),o(t),c(t),i(t),a(t)}))};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.6e3a4108.chunk.js.map