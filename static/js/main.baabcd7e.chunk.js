(this["webpackJsonporderandchaos-react-range-slider-example"]=this["webpackJsonporderandchaos-react-range-slider-example"]||[]).push([[0],{12:function(e,t,a){e.exports=a(26)},13:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);a(13);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),o=a(8);var u,s="_1plCk",i="_2yaKK",m="_3o6Pt",v=function(e,t,a){if(void 0===a&&(a=1),0===e)return a;var n=Math.log(a),r=Math.log(t),c=(r-n)/999,l=Math.exp(n+c*(e-1));return console.log("log",e,t,a,n,r,c),console.log("log",l),l},d=function(e,t){switch(e){case u.LINEAR:return t;case u.LOG:return 0}},f=function(e,t){switch(e){case u.LINEAR:return t;case u.LOG:return 1e3}},g=function(e,t,a,n){switch(void 0===n&&(n=0),e){case u.LINEAR:return t;case u.LOG:return function(e,t,a){if(void 0===a&&(a=1),0===e)return a;var n=Math.log(a),r=Math.log(t),c=(r-n)/999,l=(Math.log(e)-n)/c+1;return console.log("inverse",e,t,a,n,r,c),console.log("inverse",l),l}(t,a,n)}},h=function(e,t,a){void 0===a&&(a=10);var n=Math.pow(a||10,t);return Math.round(e*n)/n};!function(e){e[e.LOG=0]="LOG",e[e.LINEAR=1]="LINEAR"}(u||(u={}));var b=function(e,t,a,n,r){return function(c){switch(e){case u.LINEAR:t(h(Number(c.target.value),a));break;case u.LOG:t(h(v(Number(c.target.value),n,r),a))}}},p=function(e,t,a,n,r){return function(c){switch(e){case u.LINEAR:t(Number(c.target.value));break;case u.LOG:t(h(v(Number(c.target.value),a,n),r))}}},E=function(e){var t=e.setValue,a=e.type,r=void 0===a?u.LINEAR:a,c=e.showTab,l=void 0===c||c,o=e.min,v=void 0===o?0:o,h=e.max,E=void 0===h?100:h,O=e.value,L=void 0===O?0:O,N=e.decimalPlaces,x=void 0===N?3:N,w=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["setValue","type","showTab","step","min","max","value","decimalPlaces"]);return Object(n.createElement)("div",{className:s},l&&Object(n.createElement)("span",{className:i}),Object(n.createElement)("input",Object.assign({type:"range",className:m,onChange:b(r,t,x,E,v),onBlur:p(r,t,E,v,x),value:g(r,L,E,v).toFixed(x),min:d(r,v),max:f(r,E)},w)))},O=(a(20),a(3)),L=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(100),s=Object(o.a)(l,2),i=s[0],m=s[1];return r.a.createElement(O.b,{className:O.d.bc_lighterGrey},r.a.createElement(O.c,null,r.a.createElement(O.a,{columnClass:O.d.col6},r.a.createElement("input",{readOnly:!0,value:a}),r.a.createElement(E,{value:a,setValue:c,min:0,max:100,step:1})),r.a.createElement(O.a,{columnClass:O.d.col6},r.a.createElement("input",{readOnly:!0,value:i}),r.a.createElement(E,{value:i,setValue:m,type:u.LOG,min:100,max:1e5,decimalPlaces:0}))))};l.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.baabcd7e.chunk.js.map