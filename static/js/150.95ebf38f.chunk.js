"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[150],{35150:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ze}});var r,i,o,a,l,s,d,c,u,p=t(59434),h=t(24805),f=t(30168),x=t(17691),m=x.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 14px 18px;\n\n  border-radius: 8px;\n  border: 1px solid ",";\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    padding: 10px 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    padding: 10px 46px;\n  }\n"])),(function(n){return n.theme.tasksColumnBorder}),(function(n){return n.theme.mainBackgroundColor})),g=x.ZP.ul(i||(i=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  list-style: none;\n"]))),b=x.ZP.ul(o||(o=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n\n  list-style: none;\n"]))),w=x.ZP.li(a||(a=(0,f.Z)(["\n  font-family: 'InterSemiBold', sans-serif;\n  font-size: 16px;\n  line-height: 1.13;\n  width: calc(100% / 7);\n  text-align: center;\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.28;\n  }\n"])),(function(n){return n.theme.weekCalendarText})),j=x.ZP.li(l||(l=(0,f.Z)(["\n  color: ",";\n  font-family: 'InterBold', sans-serif;\n  font-size: 12px;\n  line-height: 1.17;\n  width: calc(100% / 7);\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.13;\n  }\n"])),(function(n){return n.theme.headerBurgerIcon})),y=x.ZP.p(s||(s=(0,f.Z)(["\n  display: inline;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 4px 6px;\n\n  color: ",";\n  background: ",";\n  border-radius: 6px;\n\n  @media screen and (min-width: 768px) {\n    padding: 4px 8px;\n  }\n"])),(function(n){return n.theme.CurrentDate}),(function(n){return n.theme.accentColor})),k=t(13629),v=t(39040),Z=t(54690),C=t(91951),O=t(95952),P=t(80184),L=function(n){var e=n.date,t=(0,h.useMediaQuery)({maxWidth:767}),r=new Date(e),i=O.Z,o=(0,k.default)(r,{locale:i}),a=Array.from({length:7},(function(n,e){return(0,v.default)(o,e)}));return(0,P.jsxs)(m,{children:[(0,P.jsx)(b,{children:t?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{children:"M"}),(0,P.jsx)(w,{children:"T"}),(0,P.jsx)(w,{children:"W"}),(0,P.jsx)(w,{children:"T"}),(0,P.jsx)(w,{children:"F"}),(0,P.jsx)(w,{children:"S"}),(0,P.jsx)(w,{children:"S"})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(w,{children:"MON"}),(0,P.jsx)(w,{children:"TUE"}),(0,P.jsx)(w,{children:"WED"}),(0,P.jsx)(w,{children:"THU"}),(0,P.jsx)(w,{children:"FRI"}),(0,P.jsx)(w,{children:"SAT"}),(0,P.jsx)(w,{children:"SUN"})]})}),(0,P.jsx)(g,{children:a.map((function(n,e){return(0,P.jsx)(j,{children:(0,Z.default)(n,r)?(0,P.jsx)(y,{children:(0,C.default)(n,"d",{locale:i})}):(0,C.default)(n,"d",{locale:i})},e)}))})]})},I=x.ZP.ul(d||(d=(0,f.Z)(["\n  display: flex;\n  gap: 16px;\n  margin-top: 14px;\n\n  list-style: none;\n\n  overflow: hidden;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n\n  @media screen and (min-width: 1440px) {\n    gap: 27px;\n  }\n"]))),E=x.ZP.li(c||(c=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 14px;\n  padding-top: 18px;\n  padding-right: 18px;\n  padding-bottom: 10px;\n\n  min-width: 335px;\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  border: 1px solid ",";\n  background: ",";\n\n  @media (min-width: 768px) {\n    min-width: 344px;\n  }\n\n  @media (min-width: 1440px) {\n    min-width: 344px;\n  }\n"])),(function(n){return n.theme.tasksColumnBorder}),(function(n){return n.theme.mainBackgroundColor})),T=t(29439),S=t(72791),B=t(61541),M=["title","titleId"];function D(){return D=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},D.apply(this,arguments)}function z(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function W(n,e){var t=n.title,r=n.titleId,i=z(n,M);return S.createElement("svg",D({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?S.createElement("title",{id:r},t):null,u||(u=S.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var _,H,N,R,F,U,A,V=S.forwardRef(W),J=(t.p,(0,x.ZP)(V)(_||(_=(0,f.Z)(["\n  width: 22px;\n  height: 22px;\n\n  stroke: ",";\n\n  transition: stroke 250ms ease-in-out;\n\n  @media screen and (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:hover,\n  &:focus {\n    stroke: #3e85f3;\n  }\n"])),(function(n){return n.theme.mainTextColor}))),Q=x.ZP.button(H||(H=(0,f.Z)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  ","\n"])),(function(n){return n.disabled&&(0,x.iv)(N||(N=(0,f.Z)(["\n      cursor: not-allowed;\n      pointer-events: none;\n    "])))})),q=x.ZP.div(R||(R=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n\n  width: 100%;\n\n  @media (min-width: 768px) {\n    margin-bottom: 28px;\n  }\n"]))),G=x.ZP.h3(F||(F=(0,f.Z)(["\n  font-family: 'InterSemiBolt', sans-serif;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 1.11;\n  color: ",";\n\n  @media (min-width: 768px) {\n    font-size: 20px;\n    line-height: 1.2;\n  }\n"])),(function(n){return n.theme.mainTextColor})),K=t(11899),X=function(n){var e=n.title,t=(0,S.useState)(!1),r=(0,T.Z)(t,2),i=r[0],o=r[1],a=function(){return o((function(n){return!n}))},l=(0,p.v9)(B.i),s=new Date;s.setHours(0,0,0,0);var d=new Date(l)>=s;return(0,P.jsxs)(q,{children:[(0,P.jsx)(G,{children:e}),(0,P.jsx)(Q,{onClick:a,disabled:!d,children:(0,P.jsx)(J,{})}),i&&(0,P.jsx)(K.Z,{handlerCloseModal:a,category:function(n){var e=n.toLowerCase();return n=e.split(" ").join("-")}(e)})]})},Y=t(1413),$=["title","titleId"];function nn(){return nn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},nn.apply(this,arguments)}function en(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function tn(n,e){var t=n.title,r=n.titleId,i=en(n,$);return S.createElement("svg",nn({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?S.createElement("title",{id:r},t):null,U||(U=S.createElement("g",{clipPath:"url(#clip0_362_1001)"},S.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),S.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),S.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),A||(A=S.createElement("defs",null,S.createElement("clipPath",{id:"clip0_362_1001"},S.createElement("rect",{width:16,height:16,fill:"white"})))))}var rn,on=S.forwardRef(tn),an=(t.p,["title","titleId"]);function ln(){return ln=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ln.apply(this,arguments)}function sn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function dn(n,e){var t=n.title,r=n.titleId,i=sn(n,an);return S.createElement("svg",ln({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?S.createElement("title",{id:r},t):null,rn||(rn=S.createElement("path",{d:"M1.66675 14.3333L5.36626 12.9104C5.60289 12.8194 5.7212 12.7739 5.83189 12.7145C5.93022 12.6617 6.02395 12.6008 6.11211 12.5324C6.21136 12.4554 6.301 12.3657 6.48027 12.1865L14.0001 4.66665C14.7365 3.93027 14.7365 2.73636 14.0001 1.99998C13.2637 1.2636 12.0698 1.2636 11.3334 1.99998L3.8136 9.51979C3.63433 9.69906 3.5447 9.7887 3.46768 9.88795C3.39926 9.97611 3.33835 10.0698 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6338L1.66675 14.3333ZM1.66675 14.3333L3.03883 10.766C3.13701 10.5107 3.1861 10.383 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0863C5.6132 12.2797 5.7099 12.3764 5.72913 12.4771C5.74593 12.5651 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3333Z",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}var cn,un,pn,hn=S.forwardRef(dn),fn=(t.p,["title","titleId"]);function xn(){return xn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},xn.apply(this,arguments)}function mn(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function gn(n,e){var t=n.title,r=n.titleId,i=mn(n,fn);return S.createElement("svg",xn({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?S.createElement("title",{id:r},t):null,cn||(cn=S.createElement("path",{d:"M6 2H10",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),un||(un=S.createElement("path",{d:"M2 4H14",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),pn||(pn=S.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})))}var bn,wn,jn,yn,kn,vn,Zn,Cn,On,Pn,Ln,In=S.forwardRef(gn),En=(t.p,(0,x.ZP)(on)(bn||(bn=(0,f.Z)(["\n  width: 16px;\n  height: 16px;\n\n  stroke: ",";\n  transition: stroke 250ms ease-in-out;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.mainTextColor}),(function(n){return n.theme.accentColor}))),Tn=x.ZP.div(wn||(wn=(0,f.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  /* background-color: yellow; */\n"]))),Sn=(0,x.ZP)(hn)(jn||(jn=(0,f.Z)(["\n  width: 16px;\n  height: 16px;\n\n  stroke: ",";\n  transition: stroke 250ms ease-in-out;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.mainTextColor}),(function(n){return n.theme.accentColor})),Bn=(0,x.ZP)(In)(yn||(yn=(0,f.Z)(["\n  width: 16px;\n  height: 16px;\n\n  stroke: ",";\n  transition: stroke 250ms ease-in-out;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.mainTextColor}),(function(n){return n.theme.accentColor})),Mn=x.ZP.ul(kn||(kn=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n\n  position: relative;\n\n  width: 62px;\n  list-style: none;\n\n  @media screen and (min-width: 768px) {\n    width: 68px;\n  }\n"]))),Dn=x.ZP.button(vn||(vn=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n\n  background-color: inherit;\n  border: none;\n"]))),zn=x.ZP.div(Zn||(Zn=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 14px 14px;\n\n  position: absolute;\n  top: -56px;\n  right: 80px;\n\n  width: 115px;\n  background-color: ",";\n  transition: ",";\n  border-radius: 8px;\n  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);\n  z-index: 1;\n\n  @media (min-width: 768px) {\n    padding: 20px 24px;\n    width: 147px;\n  }\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.defaultTransition})),Wn=x.ZP.ul(Cn||(Cn=(0,f.Z)(["\n  li {\n    display: flex;\n    justify-content: space-between;\n\n    width: 87px;\n    color: ",";\n    cursor: pointer;\n\n    &:not(:last-child) {\n      margin-bottom: 12px;\n    }\n\n    @media (min-width: 768px) {\n      width: 99px;\n    }\n  }\n"])),(function(n){return n.theme.mainTextColor})),_n=(0,x.ZP)(on)(On||(On=(0,f.Z)(["\n  width: 16px;\n  height: 16px;\n\n  stroke: ",";\n\n  transition: stroke 250ms ease-in-out;\n"])),(function(n){return n.theme.mainTextColor})),Hn=x.ZP.button(Pn||(Pn=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0;\n\n  font-family: 'InterNormal', sans-serif;\n  font-size: 12px;\n  line-height: 1.17;\n  color: ",";\n  width: 100%;\n  background-color: ",";\n  border: 0;\n  cursor: pointer;\n\n  transition: color 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n  &:hover ",", &:focus "," {\n    stroke: #3e85f3;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.28;\n  }\n"])),(function(n){return n.theme.mainTextColor}),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.accentColor}),_n,_n),Nn=t(58427),Rn=function(n){var e=n.handleDeleteTask,t=n.item,r=n.title,i=(0,S.useState)(!1),o=(0,T.Z)(i,2),a=o[0],l=o[1],s=(0,p.I0)(),d=function(n){var e=[];switch(n){case"To do":e=["In progress","Done"];break;case"In progress":e=["To do","Done"];break;case"Done":e=["To do","In progress"]}return e}(r),c=d.map((function(n){return(0,Y.Z)((0,Y.Z)({},t),{},{category:n})})),u=function(){l((function(n){return!n}))},h=(0,S.useState)(!1),f=(0,T.Z)(h,2),x=f[0],m=f[1],g=function(){return m((function(n){return!n}))};return(0,P.jsxs)(Mn,{children:[(0,P.jsxs)("li",{children:[(0,P.jsx)(Dn,{onClick:u,children:(0,P.jsx)(En,{})}),a&&(0,P.jsxs)("div",{children:[(0,P.jsx)(Tn,{onClick:function(n){n.target===n.currentTarget&&u()}}),(0,P.jsx)(je,{children:c.map((function(n){return(0,P.jsx)("li",{children:(0,P.jsxs)(Hn,{onClick:function(){return s((0,Nn.xJ)(function(n){var e=n.category.toLowerCase().split(" ").join("-");return(0,Y.Z)((0,Y.Z)({},n),{},{category:e})}(n)))},children:[n.category,(0,P.jsx)(_n,{})]})},n.category)}))})]})]}),(0,P.jsxs)("li",{children:[(0,P.jsx)(Dn,{onClick:g,children:(0,P.jsx)(Sn,{})}),x&&(0,P.jsx)(K.Z,{task:t,handlerCloseModal:g,category:t.category})]}),(0,P.jsx)("li",{children:(0,P.jsx)(Dn,{onClick:function(){return e(t._id)},children:(0,P.jsx)(Bn,{})})})]})},Fn=["title","titleId"];function Un(){return Un=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Un.apply(this,arguments)}function An(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function Vn(n,e){var t=n.title,r=n.titleId,i=An(n,Fn);return S.createElement("svg",Un({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},i),t?S.createElement("title",{id:r},t):null,Ln||(Ln=S.createElement("path",{d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var Jn,Qn,qn,Gn,Kn,Xn,Yn,$n,ne,ee,te,re,ie=S.forwardRef(Vn),oe=(t.p,(0,x.ZP)(ie)(Jn||(Jn=(0,f.Z)(["\n  width: 24px;\n  height: 24px;\n\n  stroke: ",";\n\n  transition: stroke 250ms ease-in-out;\n"])),(function(n){return n.theme.mainTextColor}))),ae=x.ZP.button(Qn||(Qn=(0,f.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  padding-top: 14px;\n  padding-bottom: 14px;\n\n  width: 100%;\n\n  font-family: 'InterSemiBolt', sans-serif;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.28;\n  color: ",";\n\n  background-color: ",";\n  border: 1px dashed #3e85f3;\n  border-radius: 8px;\n  cursor: pointer;\n\n  transition: background-color 250ms ease-in-out, color 250ms ease-in-out;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 32px;\n\n    height: 52px;\n  }\n\n  &:hover,\n  &:focus {\n    background-color: #2b78ef;\n    color: #ffffff;\n  }\n\n  &:hover ",", &:focus "," {\n    stroke: #ffffff;\n  }\n\n  ","\n"])),(function(n){return n.theme.mainTextColor}),(function(n){return n.theme.buttonBackgroundColorAddTask}),oe,oe,(function(n){return n.disabled&&(0,x.iv)(qn||(qn=(0,f.Z)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: 8px;\n      background-color: #80808045;\n      color: ",";\n      border: none;\n      cursor: not-allowed;\n      pointer-events: none;\n\n      @media screen and (max-width: 767px) {\n        height: 48px;\n      }\n\n      @media screen and (min-width: 768px) {\n        margin-top: 32px;\n\n        height: 52px;\n      }\n    "])),(function(n){return n.theme.mainTextColor}))})),le=function(n){var e=n.category,t=(0,S.useState)(!1),r=(0,T.Z)(t,2),i=r[0],o=r[1],a=function(){return o((function(n){return!n}))},l=(0,p.v9)(B.i),s=new Date;s.setHours(0,0,0,0);var d=new Date(l)>=s;return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(ae,{onClick:a,disabled:!d,children:[(0,P.jsx)(oe,{})," Add task"]}),i&&(0,P.jsx)(K.Z,{handlerCloseModal:a,category:function(n){var e=n.toLowerCase();return n=e.split(" ").join("-")}(e)})]})},se=x.ZP.li(Gn||(Gn=(0,f.Z)(["\n  display: block;\n  padding-top: 14px;\n  padding-right: 14px;\n  padding-bottom: 18px;\n  padding-left: 15px;\n\n  min-width: 296px;\n  width: 100%;\n  min-height: 108px;\n  border-radius: 8px;\n  border: 1px solid ",";\n  background: ",";\n\n  &:not(:last-child) {\n    margin-bottom: 14px;\n  }\n\n  @media (min-width: 768px) {\n    min-height: 112px;\n    padding-left: 14px;\n    min-width: 300px;\n\n    &:not(:last-child) {\n      margin-bottom: 18px;\n    }\n  }\n"])),(function(n){return n.theme.tasksColumnBorder}),(function(n){return n.theme.secondaryBackgroundColor})),de=x.ZP.p(Kn||(Kn=(0,f.Z)(["\n  margin-bottom: 28px;\n\n  font-family: 'InterMedium', sans-serif;\n  font-size: 14px;\n  line-height: 1.28;\n  color: ",";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n  @media (min-width: 768px) {\n    margin-bottom: 30px;\n  }\n"])),(function(n){return n.theme.mainTextColor})),ce=x.ZP.div(Xn||(Xn=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),ue=x.ZP.div(Yn||(Yn=(0,f.Z)(["\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n"]))),pe=x.ZP.img($n||($n=(0,f.Z)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 32px;\n  border: 1.8px solid #3e85f3;\n"]))),he=x.ZP.p(ne||(ne=(0,f.Z)(["\n  padding: 4px 12px;\n  border-radius: 4px;\n  max-height: 20px;\n\n  font-family: 'InterSemiBolt', sans-serif;\n  font-size: 10px;\n  line-height: 1.2;\n  color: ",";\n\n  background-color: #72c2f8;\n"])),(function(n){return n.theme.priorTextColor})),fe=x.ZP.p(ee||(ee=(0,f.Z)(["\n  padding: 4px 12px;\n  border-radius: 4px;\n  max-height: 20px;\n\n  font-family: 'InterSemiBolt', sans-serif;\n  font-size: 10px;\n  line-height: 1.2;\n  color: ",";\n\n  background-color: #f3b249;\n"])),(function(n){return n.theme.priorTextColor})),xe=x.ZP.p(te||(te=(0,f.Z)(["\n  padding: 4px 12px;\n  border-radius: 4px;\n  max-height: 20px;\n\n  font-family: 'InterSemiBolt', sans-serif;\n  font-size: 10px;\n  line-height: 1.2;\n  color: ",";\n\n  background-color: #ea3d65;\n"])),(function(n){return n.theme.priorTextColor})),me=t(14746),ge=function(n){var e=n.item,t=n.title,r=(0,p.v9)(me.d),i=r.avatarURL,o=r.name,a=(0,p.I0)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(se,{children:[(0,P.jsx)(de,{children:e.title}),(0,P.jsxs)(ce,{children:[(0,P.jsxs)(ue,{children:[(0,P.jsx)(pe,{src:i,alt:o}),"high"===e.priority&&(0,P.jsx)(xe,{children:e.priority}),"medium"===e.priority&&(0,P.jsx)(fe,{children:e.priority}),"low"===e.priority&&(0,P.jsx)(he,{children:e.priority})]}),(0,P.jsx)(Rn,{item:e,title:t,handleDeleteTask:function(n){a((0,Nn._5)(n))}})]})]},e._id)})},be=x.ZP.ul(re||(re=(0,f.Z)(["\n  max-height: 298px;\n  overflow-y: scroll;\n\n  @media (min-width: 768px) {\n    max-height: 381px;\n  }\n"]))),we=function(n){var e=n.tasks,t=n.title;return(0,P.jsx)(be,{children:null===e||void 0===e?void 0:e.map((function(n){return(0,P.jsx)(ge,{item:n,title:t},n._id)}))})},je=function(n){var e=n.children,t=n.propList;return(0,P.jsx)(zn,{children:(0,P.jsx)(Wn,{list:t,children:e})})},ye=function(n){var e=n.tasks,t=n.taskName;return(0,P.jsxs)(E,{children:[(0,P.jsx)(X,{title:t}),(0,P.jsx)(we,{tasks:e,title:t}),(0,P.jsx)(le,{category:t})]})},ke=function(n){var e=n.tasks,t=n.actualDate,r=e.filter((function(n){return"to-do"===n.category&&n.date===t})),i=e.filter((function(n){return"in-progress"===n.category&&n.date===t})),o=e.filter((function(n){return"done"===n.category&&n.date===t}));return(0,P.jsxs)(I,{children:[(0,P.jsx)(ye,{taskName:"To do",tasks:r}),(0,P.jsx)(ye,{taskName:"In progress",tasks:i}),(0,P.jsx)(ye,{taskName:"Done",tasks:o})]})},ve=t(92553),Ze=function(){var n=(0,p.v9)(ve.U).tasks,e=(0,p.v9)(B.i);return(0,P.jsxs)("div",{children:[(0,P.jsx)(L,{date:e}),(0,P.jsx)(ke,{tasks:n,actualDate:e})]})}},14746:function(n,e,t){t.d(e,{d:function(){return r}});var r=function(n){return n.user}}}]);
//# sourceMappingURL=150.95ebf38f.chunk.js.map