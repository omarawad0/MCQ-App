(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{85:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),i=n.n(c),s=(n(85),n(139)),o=n(136),u=n(131),j=n(13),l=n(132),d=n(127),O=n(135),b=n(21),h=n(15),p=function(e){for(var t,n,a=Object(h.a)(e),r=a.length;0!==r;)n=Math.floor(Math.random()*r),t=a[r-=1],a[r]=a[n],a[n]=t;return a},x="ENROLL_STUDENT",f="NEXT_STEP",E="DECREMENT_SCORE",v="SHUFFLE_QUESTIONS",y="RESET_SCORE",S=function(e){return{type:x,payload:e}},m=function(e){return{type:f,payload:e}},w=n(2);var g=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(b.b)(),i=Object(b.c)((function(e){return e})).questions;return Object(w.jsxs)(u.a,{width:"100%",mt:5,children:[Object(w.jsx)(l.a,{fullWidth:!0,mb:5,children:Object(w.jsx)(d.a,{variant:"outlined",label:"Your Name",type:"text",size:"large",value:n,onChange:function(e){var t=e.target.value;r(t)}})}),Object(w.jsx)(u.a,{width:"100%",mt:3,children:Object(w.jsx)(O.a,{variant:"contained",fullWidth:!0,onClick:function(){var e=n.trim();if(e){c(S(e));var t=p(i);c({type:v,payload:t}),c(m("QUESTIONS"))}},children:"Next"})})]})},N=n(134),_=n(130),R=n(126),q=n(137),T=function(e){return e===Math.floor(4*Math.random())};var C=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(j.a)(c,2),s=i[0],l=i[1],d=Object(b.c)((function(e){return e})).questions,h=Object(b.b)(),p=d[n],x=p.question,f=p.answers,v=function(){return n===d.length-1};return Object(w.jsxs)(u.a,{children:[Object(w.jsx)(o.a,{variant:"p",fontSize:"20px",children:x}),Object(w.jsx)(N.a,{sx:{width:"100%"},"aria-label":"contacts",disablePadding:!0,children:f.map((function(e,t){return Object(w.jsx)(_.a,{onClick:function(){l(t)},children:Object(w.jsx)(R.a,{sx:{textAlign:"center"},selected:t===s,children:Object(w.jsx)(q.a,{primary:e})})},e)}))}),Object(w.jsx)(O.a,{variant:"contained",onClick:function(){if(null!=s){var e=T(s);h({type:E,payload:!e}),l(null),v()?h(m("SCORE")):r((function(e){return e+1}))}},children:v()?"Finsih":"Next"})]})},L=n(128),k=n(138);var I=function(){var e=Object(b.c)((function(e){return e})),t=e.score,n=e.questions,a=Object(b.b)();return Object(w.jsxs)(u.a,{children:[Object(w.jsxs)(u.a,{mt:5,children:[Object(w.jsx)(o.a,{variant:"h4",children:"Final Score"}),Object(w.jsxs)(L.a,{severity:function(){var e=Math.floor(n.length/2);return t>=e?"success":"error"}(),children:[Object(w.jsx)(k.a,{children:"Results"}),"You scored \u2014 ",Object(w.jsx)("strong",{children:"".concat(t,"/").concat(n.length)})]})]}),Object(w.jsx)(u.a,{mt:2,children:Object(w.jsx)(O.a,{variant:"contained",onClick:function(){var e;a((e=n.length,{type:y,payload:e})),a(S("")),a(m("ENROLL"))},children:"Reset"})})]})};var M=function(){var e=Object(b.c)((function(e){return e})).currentStep,t={ENROLL:Object(w.jsx)(g,{}),QUESTIONS:Object(w.jsx)(C,{}),SCORE:Object(w.jsx)(I,{})};return Object(w.jsx)(s.a,{maxWidth:"sm",children:Object(w.jsxs)(u.a,{textAlign:"center",mt:10,children:[Object(w.jsx)(o.a,{variant:"h2",fontWeight:"bold",children:"MCQ App"}),t[e]]})})},U=n(69),D=n(24),F={studenName:"",currentStep:"ENROLL",questions:[{question:"What is the best frontend Framework?",id:"1",answers:["React","Angular","Vue","Ember"]},{question:"How many rings are on the Olympic flag?",id:"2",answers:["None","4","5","7"]},{question:"In darts, whats the most points you can score with a single throw?",id:"3",answers:["20","60","100","30"]},{question:"How many holes are on a standard bowling ball?",id:"4",answers:["5","6","7","2"]},{question:"In the nursery rhyme, how many blackbirds were baked in a pie?",id:"5",answers:["11","20","44","24"]}],score:5},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(D.a)(Object(D.a)({},e),{},{studenName:t.payload});case f:return Object(D.a)(Object(D.a)({},e),{},{currentStep:t.payload});case v:return Object(D.a)(Object(D.a)({},e),{},{questions:t.payload});case E:return Object(D.a)(Object(D.a)({},e),{},{score:t.payload?e.score-1:e.score});case y:return Object(D.a)(Object(D.a)({},e),{},{score:t.payload});default:return e}},X=Object(U.a)(W,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(b.a,{store:X,children:Object(w.jsx)(M,{})})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.aa65c718.chunk.js.map