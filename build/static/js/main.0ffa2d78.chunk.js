(this["webpackJsonpvalidation-form"]=this["webpackJsonpvalidation-form"]||[]).push([[0],{30:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var a,i,o,l,r,c,d,s,u,b,p,j,O,x,f,g,v,h,m,y,w=t(0),S=t.n(w),k=t(16),z=t.n(k),A=t(5),E=t(6),C=t(3),Z=t(4),$=t(9),q="#0075ff",P="#ec4646",R="#1bbc29",B="#fbbfbf",F=Z.b.form(a||(a=Object(C.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n\n  @media (max-width: 800px) {\n    grid-template-columns: 1fr;\n  }\n"]))),I=Z.b.label(i||(i=Object(C.a)(["\n  display: block;\n  font-weight: 700;\n  padding: 10px;\n  min-height: 40px;\n  cursor: pointer;\n\n  ","\n"])),(function(e){return"false"===e.valid&&Object(Z.a)(o||(o=Object(C.a)(["\n      color: ",";\n    "])),P)})),J=Z.b.div(l||(l=Object(C.a)(["\n  position: relative;\n  z-index: 90;\n"]))),T=Z.b.input(r||(r=Object(C.a)(["\n  width: 100%;\n  background: #fff;\n  border-radius: 2px;\n  height: 45px;\n  line-height: 45px;\n  padding: 0 40px 0 10px;\n  transition: 0.3s ease all;\n  border: 3px solid transparent;\n\n  &:focus {\n    border: 3px solid ",";\n    outline: none;\n    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);\n  }\n\n  ","\n\n  ","\n"])),q,(function(e){return"true"===e.valid&&Object(Z.a)(c||(c=Object(C.a)(["\n      border: 3px solid transparent;\n    "])))}),(function(e){return"false"===e.valid&&Object(Z.a)(d||(d=Object(C.a)(["\n      border: 3px solid "," !important;\n    "])),P)})),U=Z.b.p(s||(s=Object(C.a)(["\n  font-size: 12px;\n  margin-bottom: 0;\n  color: ",";\n  display: none;\n\n  ","\n\n  ","\n"])),P,(function(e){return"true"===e.valid&&Object(Z.a)(u||(u=Object(C.a)(["\n      display: none;\n    "])))}),(function(e){return"false"===e.valid&&Object(Z.a)(b||(b=Object(C.a)(["\n      display: block;\n    "])))})),_=Object(Z.b)($.a)(p||(p=Object(C.a)(["\n  position: absolute;\n  right: 10px;\n  bottom: 14px;\n  z-index: 100;\n  font-size: 16px;\n  opacity: 0;\n\n  ","\n\n  ","\n"])),(function(e){return"false"===e.valid&&Object(Z.a)(j||(j=Object(C.a)(["\n      opacity: 1;\n      color: ",";\n    "])),P)}),(function(e){return"true"===e.valid&&Object(Z.a)(O||(O=Object(C.a)(["\n      opacity: 1;\n      color: ",";\n    "])),R)})),D=Z.b.div(x||(x=Object(C.a)(["\n  grid-column: span 2;\n\n  input {\n    margin-right: 10px;\n  }\n\n  @media (max-width: 800px) {\n    grid-column: span 1;\n  }\n"]))),K=Z.b.div(f||(f=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  grid-column: span 2;\n\n  @media (max-width: 800px) {\n    grid-column: span 1;\n  }\n"]))),L=Z.b.button(g||(g=Object(C.a)(["\n  height: 45px;\n  line-height: 45px;\n  width: 30%;\n  background: #000;\n  color: #fff;\n  font-weight: bold;\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: 0.1s ease all;\n\n  &:hover {\n    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);\n  }\n"]))),M=Z.b.p(v||(v=Object(C.a)(["\n  font-size: 14px;\n  margin-bottom: 0;\n  color: ",";\n\n  ","\n  ","\n"])),R,(function(e){return"true"===e.valid&&Object(Z.a)(h||(h=Object(C.a)(["\n      display: block;\n    "])))}),(function(e){return"false"===e.valid&&Object(Z.a)(m||(m=Object(C.a)(["\n      display: none;\n    "])))})),N=Z.b.div(y||(y=Object(C.a)(["\n  height: 45px;\n  line-height: 45px;\n  background: ",";\n  color: ",";\n  padding: 0px 15px;\n  border-radius: 2px;\n  grid-column: span 2;\n  p {\n    margin: 0;\n  }\n  b {\n    margin-left: 10px;\n  }\n"])),B,P),G=t(7),H=t(1),Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.status,t=e.changeStatus,a=e.id,i=e.type,o=void 0===i?"text":i,l=e.label,r=e.placeholder,c=void 0===r?"":r,d=e.legend,s=void 0===d?"":d,u=e.regex,b=void 0===u?"":u,p=e.validRepeatPassword,j=void 0===p?null:p,O=function(e){console.log(e.target.value),t(Object(A.a)(Object(A.a)({},n),{},{field:e.target.value}))},x=function(){if(b){if(!b.test(n.field))return console.log("input incorrecto"),void t(Object(A.a)(Object(A.a)({},n),{},{valid:"false"}));t(Object(A.a)(Object(A.a)({},n),{},{valid:"true"})),console.log("input correcto")}j&&j()};return Object(H.jsxs)("div",{children:[Object(H.jsx)(I,{htmlFor:a,valid:null===n||void 0===n?void 0:n.valid,children:l}),Object(H.jsxs)(J,{children:[Object(H.jsx)(T,{type:o,placeholder:c,id:a,value:null===n||void 0===n?void 0:n.field,onChange:O,onKeyUp:x,onBlur:x,valid:null===n||void 0===n?void 0:n.valid,autoComplete:"false"}),Object(H.jsx)(_,{valid:null===n||void 0===n?void 0:n.valid,icon:"true"===(null===n||void 0===n?void 0:n.valid)?G.a:G.c})]}),Object(H.jsx)(U,{valid:null===n||void 0===n?void 0:n.valid,children:s})]})},V=function(){var e=Object(w.useState)({field:"",valid:null}),n=Object(E.a)(e,2),t=n[0],a=n[1],i=Object(w.useState)({field:"",valid:null}),o=Object(E.a)(i,2),l=o[0],r=o[1],c=Object(w.useState)({field:"",valid:null}),d=Object(E.a)(c,2),s=d[0],u=d[1],b=Object(w.useState)({field:"",valid:null}),p=Object(E.a)(b,2),j=p[0],O=p[1],x=Object(w.useState)({field:"",valid:null}),f=Object(E.a)(x,2),g=f[0],v=f[1],h=Object(w.useState)({field:"",valid:null}),m=Object(E.a)(h,2),y=m[0],S=m[1],k=Object(w.useState)(!1),z=Object(E.a)(k,2),C=z[0],Z=z[1],q=Object(w.useState)(null),P=Object(E.a)(q,2),R=P[0],B=P[1],J={user:/^[a-zA-Z0-9_-]{4,16}$/,name:/^[a-zA-Z\xc0-\xff\s]{2,40}$/,password:/^.{4,12}$/,email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,phone:/^\d{7,14}$/},T="El usuario tiene que ser de 4 a 16 digitos y solo pueden contener numeros, letras y guion bajo",U="El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.",_="La contrase\xf1a tiene que ser de 4 a 12 d\xedgitos. ",V="Ambas contrase\xf1as deben ser iguales.",W="El nombre tiene que ser de 2 a 40 digitos y solo pueden contener letras y espacios, asimismo pueden llevar acentos",X="El telefono solo puede contener numeros y el maximo son 14 d\xedgitos.";return Object(H.jsx)("main",{children:Object(H.jsxs)(F,{onSubmit:function(e){e.preventDefault();var n=[t,l,s,j,g,y],i=[a,r,u,O,v,S],o=n.filter((function(e){return e.valid})).length===n.length&&C;B(o),o&&(i.map((function(e){return e({field:"",valid:null})})),Z(!1))},children:[Object(H.jsx)(Q,{status:t,changeStatus:a,id:"alan123",label:"Usuario",placeholder:"Ingrese su usuario",legend:T,regex:J.user}),Object(H.jsx)(Q,{status:l,changeStatus:r,id:"name",label:"Nombre",placeholder:"Alan",legend:W,regex:J.name}),Object(H.jsx)(Q,{status:s,changeStatus:u,id:"password",type:"password",label:"Contrase\xf1a",placeholder:"",legend:_,regex:J.password}),Object(H.jsx)(Q,{status:j,changeStatus:O,id:"password2",type:"password",label:"Repita contrase\xf1a",placeholder:"",legend:V,validRepeatPassword:function(){0!==s.field.length&&(s.field===j.field?O((function(e){return Object(A.a)(Object(A.a)({},e),{},{valid:"true"})})):O((function(e){return Object(A.a)(Object(A.a)({},e),{},{valid:"false"})})))}}),Object(H.jsx)(Q,{status:g,changeStatus:v,id:"email",type:"email",label:"Correo",placeholder:"alan@corre.com",legend:U,regex:J.email}),Object(H.jsx)(Q,{status:y,changeStatus:S,id:"phone",type:"tel",label:"Telefono",placeholder:"987654321",legend:X,regex:J.phone}),Object(H.jsx)(D,{children:Object(H.jsxs)(I,{children:[Object(H.jsx)("input",{type:"checkbox",name:"terms",id:"terms",checked:C,onChange:function(e){Z(e.target.checked)}}),"Acepto los Terminos y Condiciones"]})}),!1===R&&Object(H.jsx)(N,{children:Object(H.jsxs)("div",{children:[Object(H.jsx)($.a,{icon:G.b}),Object(H.jsx)("b",{children:" Error: "})," Por favor rellene correctamente el formulario"]})}),Object(H.jsxs)(K,{children:[Object(H.jsx)(L,{type:"submit",children:"Enviar"}),!0===R&&Object(H.jsx)(M,{valid:R,children:"Formulario enviado exitosamente"})]})]})})};t(30);z.a.render(Object(H.jsx)(S.a.StrictMode,{children:Object(H.jsx)(V,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.0ffa2d78.chunk.js.map