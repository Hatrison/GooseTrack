"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[70],{48070:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var i,a,r,o=t(74165),d=t(15861),l=t(29439),s=t(72791),p=t(59434),c=t(14746),h=t(55705),m=t(71652),u=t(24750),x=t(11347),b=t(97892),f=t.n(b),g=t(29655),v=t(8007),y=/^\+380\d{9}$/,j=/^\S[\S\s]{0,28}\S$/,w=function(){return v.Ry().shape({name:v.Z_().required("Name is required").min(3,"Name is too short").max(16,"Name is too long"),birthday:v.Z_().notRequired(),email:v.Z_().email("Invalid email").required("Email is required"),phone:v.Z_().matches(y,"The phone number must start with +380 and be 9 digits long").min(13,"Phone is too Short!").max(13,"Phone is too Long!").notRequired(),skype:v.Z_().matches(j,"Skype must be between 3 and 16 characters").max(13,"At most 13 digits is required").test("Skype-validation","Skype must be at least 3 characters long",(function(n){return n&&n.replace(/\s/g,"").length>=3}))})},k=t(15667),Z=t(30168),P=t(17691),S=["title","titleId"];function O(){return O=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},O.apply(this,arguments)}function Y(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function N(n,e){var t=n.title,o=n.titleId,d=Y(n,S);return s.createElement("svg",O({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},d),t?s.createElement("title",{id:o},t):null,i||(i=s.createElement("circle",{cx:12,cy:12,r:12,fill:"#3E85F3"})),a||(a=s.createElement("path",{d:"M12 6.75V17.25",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=s.createElement("path",{d:"M6.75 12H17.25",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var _,E,L,M,R,X,B,D,F,q=s.forwardRef(N),A=(t.p,(0,P.ZP)(h.l0)(_||(_=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 59px;\n  padding-bottom: 40px;\n  padding-left: 18px;\n  padding-right: 18px;\n  background-color: ",";\n  border-radius: ",";\n\n  @media (min-width: 768px) {\n    align-items: center;\n    padding-top: 40px;\n  }\n  @media (min-width: 1440px) {\n    padding-top: 60px;\n    padding-bottom: 60px;\n  }\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.bordeRadius}))),C=(0,P.ZP)(h.gN)(E||(E=(0,Z.Z)(["\n  display: none;\n"]))),U=P.ZP.div(L||(L=(0,Z.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-direction: row;\n  }\n  gap: 50px;\n"]))),I=P.ZP.div(M||(M=(0,Z.Z)(["\n  max-width: 375px;\n  padding-bottom: 40px;\n  position: relative;\n  @media (min-width: 768px) {\n    max-width: 100%;\n    min-width: 768px;\n    padding-bottom: 38px;\n  }\n  @media (min-width: 1440px) {\n    max-width: 100%;\n    padding-bottom: 32px;\n  }\n"]))),V=P.ZP.div(R||(R=(0,Z.Z)(["\n  margin-bottom: 14px;\n  width: 72px;\n  height: 72px;\n  position: absolute;\n  left: calc(50% - 36px);\n  top: -36px;\n  fill: rgba(62, 133, 243, 0.18);\n  background-color: ",";\n  border: 2px solid #3e85f3;\n  border-radius: 50%;\n  overflow: hidden;\n\n  @media (min-width: 768px) {\n    position: static;\n    width: 124px;\n    height: 124px;\n  }\n  @media (min-width: 1440px) {\n    margin-bottom: 20px;\n  }\n"])),(function(n){return n.theme.mainBackgroundColor})),T=P.ZP.img(X||(X=(0,Z.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 50% 50%;\n"]))),W=P.ZP.div(B||(B=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),$=(0,P.ZP)(q)(D||(D=(0,Z.Z)(["\n  position: absolute;\n  left: 53%;\n  top: 25px;\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n    top: 147px;\n    left: 52%;\n  }\n  @media (min-width: 1440px) {\n    top: 170px;\n    left: 51%;\n  }\n"]))),H=(P.ZP.div(F||(F=(0,Z.Z)(["\n  width: 100px;\n  height: 100px;\n  display: block;\n  background-color: blue;\n"]))),t(80184)),J=f()(new Date).format("YYYY/MM/DD"),z=function(){var n=(0,p.I0)(),e=(0,p.v9)(c.d),t=(0,s.useState)(null),i=(0,l.Z)(t,2),a=i[0],r=i[1],b=(0,s.useState)(null),v=(0,l.Z)(b,2),y=v[0],j=v[1],Z=function(){var e=(0,d.Z)((0,o.Z)().mark((function e(t){var i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new FormData).append("name",t.name),i.append("email",t.email),t.phone&&i.append("phone",t.phone),t.skype&&i.append("skype",t.skype),i.append("birthday",y?f()(y).format("YYYY/MM/DD"):""),a&&i.append("avatar",a),e.prev=7,e.next=10,n((0,k.N)(i));case 10:g.Am.success("Profile data changed successfully"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),g.Am.error("Something went wrong... Try again!");case 16:case"end":return e.stop()}}),e,null,[[7,13]])})));return function(n){return e.apply(this,arguments)}}();return(0,H.jsx)(I,{children:(0,H.jsx)(h.J9,{validationSchema:w,initialValues:{name:(null===e||void 0===e?void 0:e.name)||"",birthday:(null===e||void 0===e?void 0:e.birthday)||"".concat(y)||"".concat(J),email:(null===e||void 0===e?void 0:e.email)||"",phone:(null===e||void 0===e?void 0:e.phone)||"",skype:(null===e||void 0===e?void 0:e.skype)||""},onSubmit:Z,children:function(n){n.values;var t=n.setFieldValue;return(0,H.jsxs)(A,{children:[(0,H.jsxs)("div",{children:[(0,H.jsx)(V,{children:a?(0,H.jsx)("label",{htmlFor:"avatar",children:(0,H.jsx)(T,{src:URL.createObjectURL(a),alt:"Avatar"})}):null!==e&&void 0!==e&&e.avatarURL?(0,H.jsx)("label",{htmlFor:"avatar",children:(0,H.jsx)(T,{src:null===e||void 0===e?void 0:e.avatarURL,alt:"Avatar"})}):""}),(0,H.jsx)(C,{id:"add-avatar",name:"avatar",type:"file",accept:"image/*, .png,.jpg, .gif",onChange:function(n){r(n.target.files[0])}}),(0,H.jsx)("label",{htmlFor:"add-avatar",children:(0,H.jsx)($,{})})]}),(0,H.jsx)("h1",{children:e.name}),(0,H.jsx)("p",{children:"User"}),(0,H.jsxs)(U,{children:[(0,H.jsxs)(W,{children:[(0,H.jsxs)("label",{children:["User Name",(0,H.jsx)(h.gN,{name:"name"}),(0,H.jsx)(h.Bc,{name:"name",component:"span"})]}),(0,H.jsxs)("label",{children:["Birthday",(0,H.jsx)(m._,{dateAdapter:u.y,children:(0,H.jsx)(x.M,{name:"birthday",type:"date",slotProps:{textField:{placeholder:e.birthday||"".concat(J)}},views:["year","month","day"],format:"YYYY/MM/DD",closeOnSelect:!0,disableFuture:!0,onChange:function(n){n||t("birthday",""),t("birthday",n),j(n)}})})]}),(0,H.jsx)("div",{children:(0,H.jsxs)("label",{children:["Email",(0,H.jsx)(h.gN,{name:"email",type:"email"}),(0,H.jsx)(h.Bc,{name:"email",component:"span"})]})})]}),(0,H.jsxs)(W,{children:[(0,H.jsxs)("label",{children:["Phone",(0,H.jsx)(h.gN,{name:"phone",type:"tel",placeholder:"+380XXXXXXXXX"}),(0,H.jsx)(h.Bc,{name:"phone",component:"span"})]}),(0,H.jsxs)("label",{children:["Skype",(0,H.jsx)(h.gN,{name:"skype",type:"text",placeholder:"Add a skype number"}),(0,H.jsx)(h.Bc,{name:"skype",component:"span"})]})]})]}),(0,H.jsx)("button",{type:"submit",children:"Save changes"})]})}})})},G=function(){return(0,H.jsx)("div",{children:(0,H.jsx)(z,{})})}},14746:function(n,e,t){t.d(e,{d:function(){return i}});var i=function(n){return n.user}}}]);
//# sourceMappingURL=70.47a8ee20.chunk.js.map