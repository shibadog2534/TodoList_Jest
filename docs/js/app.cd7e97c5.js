(function(){"use strict";var n={55:function(n,o,t){var e=t(963),r=t(252);function u(n,o,t,e,u,i){const a=(0,r.up)("DisplayTodo");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(a)])}var i=t(577);const a=(0,r.Uk)(" Display "),l=["onClick"];function c(n,o,t,e,u,c){const s=(0,r.up)("InputTodo"),p=(0,r.up)("PropTest");return(0,r.wg)(),(0,r.iD)("div",null,[a,(0,r.Wm)(s,{onInpDATA:n.inpDATA},null,8,["onInpDATA"]),(0,r._)("div",null,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.todos,((o,t)=>((0,r.wg)(),(0,r.iD)("li",{key:t},[(0,r.Uk)((0,i.zw)(o)+" ",1),(0,r._)("button",{onClick:e=>n.removeTodo(t,o)},"delete",8,l)])))),128))])]),(0,r.Wm)(p,{saveData:n.todos},null,8,["saveData"])])}var s=t(262);function p(n,o,t,u,i,a){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":o[0]||(o[0]=o=>n.todoValue=o),"input-todo":""},null,512),[[e.nr,n.todoValue]]),(0,r._)("button",{onClick:o[1]||(o[1]=(...o)=>n.sendTodo&&n.sendTodo(...o))},"送信")])}var v=(0,r.aZ)({name:"InputTodo",setup(n,o){const t=(0,s.iH)(),e=()=>{o.emit("inpDATA",t.value),t.value=""};return{todoValue:t,sendTodo:e}}}),d=t(744);const f=(0,d.Z)(v,[["render",p]]);var g=f;function m(n,o,t,e,u,a){return(0,r.wg)(),(0,r.iD)("div",null," props:"+(0,i.zw)(n.saveData),1)}var T=(0,r.aZ)({name:"PropTest",props:{saveData:{type:String}}});const D=(0,d.Z)(T,[["render",m]]);var h=D,w=(0,r.aZ)({name:"DisplayTodo",components:{InputTodo:g,PropTest:h},setup(){const n="todos",o=(0,s.iH)([]),t=(0,r.bv)((()=>{if(localStorage.getItem(n))try{o.value=JSON.parse(localStorage.getItem(n)||"{}")}catch(t){localStorage.removeItem(n)}})),e=n=>{n&&(o.value.push(n),u())},u=()=>{const t=JSON.stringify(o.value);localStorage.setItem(n,t)},i=(n,t)=>{confirm(t+"を削除しますか？")&&(o.value.splice(n,1),u())};return{todos:o,inpDATA:e,saveStorage:u,removeTodo:i,getStorage:t}}});const y=(0,d.Z)(w,[["render",c]]);var b=y,O={name:"App",components:{DisplayTodo:b}};const k=(0,d.Z)(O,[["render",u]]);var A=k;(0,e.ri)(A).mount("#app")}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var u=o[e]={exports:{}};return n[e](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(o,e,r,u){if(!e){var i=1/0;for(s=0;s<n.length;s++){e=n[s][0],r=n[s][1],u=n[s][2];for(var a=!0,l=0;l<e.length;l++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](e[l])}))?e.splice(l--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var c=r();void 0!==c&&(o=c)}}return o}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[e,r,u]}}(),function(){t.d=function(n,o){for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){var n={143:0};t.O.j=function(o){return 0===n[o]};var o=function(o,e){var r,u,i=e[0],a=e[1],l=e[2],c=0;if(i.some((function(o){return 0!==n[o]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var s=l(t)}for(o&&o(e);c<i.length;c++)u=i[c],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},e=self["webpackChunkvue3_todo"]=self["webpackChunkvue3_todo"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(55)}));e=t.O(e)})();
//# sourceMappingURL=app.cd7e97c5.js.map