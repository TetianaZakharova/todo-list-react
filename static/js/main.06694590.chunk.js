(window["webpackJsonptodo-list-react"]=window["webpackJsonptodo-list-react"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(4),r=a.n(c),u=a(1),l=a(2),i=(a(10),function(e){var t=e.todo,a=e.index,n=e.removeTodo;return o.a.createElement("div",{className:"todo"},t.text,o.a.createElement("div",null,o.a.createElement("button",{className:"removeButton",onClick:function(){return n(a)}},"x")))}),d=function(e){var t=e.addTodo,a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],u=c[1];return o.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),r&&(t(r),u(""))}},o.a.createElement("div",{className:"inputForm"},o.a.createElement("input",{type:"text",className:"input",placeholder:"I want to do...",value:r,onChange:function(e){return u(e.target.value)}}),o.a.createElement("button",{className:"addButton"},"+")))},m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=function(e){var t=Object(u.a)(a);t.splice(e,1),c(t)};return o.a.createElement("div",{className:"app"},o.a.createElement("div",{className:"todo-list"},o.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(u.a)(a),[{text:e}]);c(t)}}),a.map(function(e,t){return o.a.createElement(i,{key:t,index:t,todo:e,removeTodo:r})})))};r.a.render(o.a.createElement(m,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.06694590.chunk.js.map