(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),o=(n(18),n(3)),r=n(25),u=n(2),l=n(21),d=n(22),b=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(l.a)(this,e),this._baseUrl=n,this._headers=a}return Object(d.a)(e,[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkStatus(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._checkStatus(t)}))}},{key:"updateUserData",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkStatus(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkStatus(e)}))}},{key:"updateAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._checkStatus(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then((function(e){return n._checkStatus(e)}))}}]),e}())({baseUrl:"https://api.mesto-full.nomoredomains.work"}),j=c.a.createContext(),p=n(0),m=function(e){var t=e.onCardClick,n=e.onCardLike,c=e.onCardDelete,s=e.card,i=Object(a.useContext)(j).currentUser,o=s.likes.some((function(e){return e._id===i._id})),r=s.owner._id===i._id,u="list__like ".concat(o?"list__like_active":""),l="list__basket ".concat(r?"":"list__basket_inactive");return Object(p.jsxs)("li",{className:"list__element",children:[Object(p.jsx)("img",{src:s&&s.link,alt:s&&s.name,className:"list__image",onClick:function(){t(s)}}),Object(p.jsxs)("div",{className:"list__group",children:[Object(p.jsx)("h2",{className:"list__name",children:s&&s.name}),Object(p.jsx)("button",{className:u,type:"button","aria-label":"Like",onClick:function(){n(s)},children:Object(p.jsx)("p",{className:"list__likes-counter",children:s.likes?s.likes.length:"0"})}),Object(p.jsx)("button",{className:l,type:"button","aria-label":"delete image",onClick:function(){c(s)}})]})]})},h=n.p+"static/media/header-logo.bbe2a6ea.svg",O=n(9),f=function(e){var t=e.buttonText,n=e.userEmail,c=e.endPoint,s=e.signOut,i=Object(a.useContext)(j),o=i.isBurgerMenuOpen,r=i.setIsBurgerMenuOpen;return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)(O.c,{to:"/main",className:"logo",children:Object(p.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"})}),Object(p.jsx)("div",{className:"header__burger ".concat(o?"active":""),onClick:function(){o?(r(!1),console.log(o)):(r(!0),console.log(o))},children:Object(p.jsx)("span",{className:"header__burger_span ".concat(o?"active":"")})}),Object(p.jsxs)("div",{className:"header__menu ".concat(o?"active":""),children:[n&&Object(p.jsx)("p",{className:"header__item ".concat(o?"active":""),children:n}),Object(p.jsx)("p",{className:"header__item ".concat(o?"active":""),children:Object(p.jsx)(O.c,{className:"header__link",to:c,onClick:s,children:t})})]})]})},_=function(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__text",children:"\xa9 2020 Mesto Russia"})})};var g=function(e){var t=e.onAddPlace,n=e.onCardClick,c=e.onEditAvatar,s=e.onEditProfile,i=e.cards,o=e.onLikeClick,r=e.onDeleteClick,u=e.signOut,l=e.userEmail,d=Object(a.useContext)(j).currentUser;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{userEmail:l,buttonText:"\u0412\u044b\u0439\u0442\u0438",endPoint:"/sign-in",signOut:u}),Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("button",{type:"button","aria-label":"profile__avatar",className:"profile__avatar",style:{backgroundImage:"url(".concat(d.avatar,")")},onClick:c}),Object(p.jsxs)("div",{className:"profile-info",children:[Object(p.jsx)("h1",{className:"profile-info__name",id:"name",children:d.name}),Object(p.jsx)("button",{className:"profile-info__edit",type:"button","aria-label":"Edit",onClick:s}),Object(p.jsx)("p",{className:"profile-info__text",id:"job",children:d.about})]}),Object(p.jsx)("button",{type:"button",className:"profile__add","aria-label":"add profile",onClick:t})]}),Object(p.jsx)("section",{className:"elements",children:Object(p.jsx)("ul",{className:"list",children:i.map((function(e){return Object(p.jsx)(m,{card:e,onCardClick:n,onCardLike:o,onCardDelete:r},e._id)}))})})]}),Object(p.jsx)(_,{})]})},x=function(e){var t=e.isOpen,n=e.onClose,a=e.data;return Object(p.jsx)("div",{className:"popup popup_type_image ".concat(t?"popup_is-opened":""),children:Object(p.jsxs)("div",{className:"popup__content popup__content_image",id:"picture-popup",onClick:n,children:[Object(p.jsx)("button",{className:"popup__close",type:"button","aria-label":"close popupImage",onClick:n}),Object(p.jsx)("img",{src:a&&a.link,alt:a&&a.name,className:"popup__imgPic"}),Object(p.jsx)("h3",{className:"popup__imgText",children:a&&a.name})]})})};var v=function(e){var t=e.name,n=e.title,a=e.isOpen,c=e.onClose,s=e.onSubmit,i=e.children,o=e.button,r=e.idSubmitted;return Object(p.jsx)("div",{className:"popup ".concat(a?"popup_is-opened":""),id:"edit-".concat(t),onClick:c,children:Object(p.jsxs)("div",{className:"popup__content",children:[Object(p.jsx)("button",{type:"button","aria-label":"close popup",className:"popup__close",onClick:c}),Object(p.jsx)("h3",{className:"popup__title",children:n}),Object(p.jsxs)("form",{action:"#",id:"".concat(t),name:"".concat(t),className:"popup__form",onSubmit:s,children:[i,Object(p.jsx)("button",{"aria-label":"submit form",className:"popup__submit popup__submit_disabled",type:"submit",disabled:r,children:o})]})]})})},C=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=e.isSubmitted,i=Object(a.useRef)("");return Object(p.jsx)(v,{name:"user-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s||(c({avatar:i.current.value}),i.current.value="")},idSubmitted:s,children:Object(p.jsxs)("label",{className:"popup__field",htmlFor:"avatar-link-input",children:[Object(p.jsx)("input",{ref:i,type:"url",className:"popup__input",id:"avatar-link-input",name:"avatarLinkInput",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",required:!0}),Object(p.jsx)("span",{className:"form__input-error",id:"avatar-link-input-error"})]})})},S=function(e){return Object(p.jsxs)("label",{className:"popup__field",htmlFor:"".concat(e.id,"-input"),children:[Object(p.jsx)("input",Object(o.a)(Object(o.a)({},e),{},{className:"popup__input",id:"".concat(e.id,"-input")})),Object(p.jsx)("span",{className:"popup__input-error",id:"".concat(e.id,"-input-error")})]})},k=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=e.isSubmitted,i=Object(a.useContext)(j).currentUser,o=Object(a.useState)(""),r=Object(u.a)(o,2),l=r[0],d=r[1],b=Object(a.useState)(""),m=Object(u.a)(b,2),h=m[0],O=m[1];Object(a.useEffect)((function(){d(i.name),O(i.about)}),[i,t]);return Object(p.jsxs)(v,{name:"user-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s||c({name:l,about:h})},idSubmitted:s,children:[Object(p.jsx)(S,{type:"text",value:l||"",id:"user-name",name:"userNameInput",placeholder:"\u0418\u043c\u044f",required:!0,maxLength:"40",minLength:"2",onChange:function(e){d(e.target.value)}}),Object(p.jsx)(S,{type:"text",value:h||"",id:"user-job",name:"userNameInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,maxLength:"200",minLength:"2",onChange:function(e){O(e.target.value)}})]})},N=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.isSubmitted,i=Object(a.useState)(""),o=Object(u.a)(i,2),r=o[0],l=o[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),j=b[0],m=b[1];Object(a.useEffect)((function(){s||(l(""),m(""))}),[s]);return Object(p.jsxs)(v,{name:"user-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s||c({name:r,link:j})},idSubmitted:s,children:[Object(p.jsx)(S,{type:"text",value:r||"",id:"place-name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeNameInput",required:!0,maxLength:"30",minLength:"2",onChange:function(e){l(e.target.value)}}),Object(p.jsx)(S,{type:"url",value:j||"",id:"place-link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",name:"placeLinkInput",required:!0,onChange:function(e){m(e.target.value)}})]})},y=function(e){var t=e.isOpen,n=e.onClose,a=e.deleteCard,c=e.isSubmitted,s=e.data;return Object(p.jsx)(v,{name:"user-submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button:c?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c||a(s)},idSubmitted:c})},w=n(4),T=n(11),U=function(e){var t=e.name,n=e.title,a=e.onSubmit,c=e.children,s=e.button,i=e.isSubmitted,o=e.userSignUp;return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h2",{className:"login__title",children:n}),Object(p.jsxs)("form",{className:"login__form",id:"".concat(t),name:"".concat(t),autoComplete:"off",onSubmit:a,children:[c,Object(p.jsx)("button",{"arial-lable":"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"submit",className:"login__submit ".concat(i?"login__submit_inactive":""),disabled:i,children:s}),o&&Object(p.jsx)("div",{className:"login__footer",children:Object(p.jsxs)("p",{className:"login__subtitle",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(p.jsx)(O.b,{className:"login__subtitle login__link",to:"/sign-in",children:o})]})})]})]})},P=function(e){var t=e.handleLogin,n=e.isSubmitted,c=Object(a.useState)({email:"",password:""}),s=Object(u.a)(c,2),i=s[0],r=s[1],l=function(e){var t=e.target,n=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},i),{},Object(T.a)({},n,a)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{buttonText:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",endPoint:"/sign-up"}),Object(p.jsxs)(U,{name:"user-sign-in",title:"\u0412\u043e\u0439\u0442\u0438",button:n?"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0432\u0445\u043e\u0434":"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e){e.preventDefault(),i.email&&i.password&&t(i.password,i.email)},isSubmitted:n,children:[Object(p.jsx)("input",{className:"login__input",type:"email",value:i.email,id:"email",placeholder:"Email",name:"email",required:!0,onChange:l}),Object(p.jsx)("input",{className:"login__input",type:"password",value:i.password,id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",required:!0,onChange:l})]})]})},E=function(e){var t=e.handleRegister,n=e.isSubmitted,c=Object(a.useState)({email:"",password:"",confirmPassword:""}),s=Object(u.a)(c,2),i=s[0],r=s[1],l=function(e){var t=e.target,n=t.name,a=t.value;r(Object(o.a)(Object(o.a)({},i),{},Object(T.a)({},n,a)))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{mix:"page__header section",buttonText:"\u0412\u043e\u0439\u0442\u0438",endPoint:"/sign-in"}),Object(p.jsxs)(U,{name:"user-sign-up",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",button:n?"\u0418\u0434\u0435\u0442 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e){e.preventDefault(),i.password&&i.email&&t(i.email,i.password,i.confirmPassword)},userSignUp:"\u0412\u043e\u0439\u0442\u0438",isSubmitted:n,children:[Object(p.jsx)("input",{className:"login__input",type:"email",value:i.email,id:"email",name:"email",placeholder:"Email",colormodifier:"form__login-input",required:!0,minLength:"2",onChange:l}),Object(p.jsx)("input",{className:"login__input",type:"password",value:i.password,id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:l}),Object(p.jsx)("input",{className:"login__input",type:"password",value:i.confirmPassword,id:"confirmPassword",name:"confirmPassword",placeholder:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",colormodifier:"form__login-input",required:!0,onChange:l})]})]})},L=n(26),D=["component"],I=function(e){var t=e.component,n=Object(L.a)(e,D),c=Object(a.useContext)(j).isLoggedIn;return Object(p.jsx)(w.b,{children:function(){return c?Object(p.jsx)(t,Object(o.a)({},n)):Object(p.jsx)(w.a,{to:n.to})}})},A=function(e){var t=e.isOpen,n=e.onClose,c=e.name,s=Object(a.useContext)(j),i=s.authUserData,o=s.isSignedUp;return Object(p.jsx)("section",{className:"popup ".concat(t?"popup_is-opened":""),id:"edit-".concat(c),onClick:n,children:Object(p.jsxs)("div",{className:"popup__content popup__content_size-s",children:[Object(p.jsx)("div",{className:"popup__icon ".concat(o?"popup__icon_status_ok":"popup__icon_status_err")}),Object(p.jsx)("h2",{className:"popup__title",children:i.message}),Object(p.jsx)("button",{"arial-lable":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445",tittle:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",type:"button",className:"popup__close",onClick:n})]})})},q="https://api.mesto-full.nomoredomains.work",F=function(e){return e.ok?e.json():Promise.reject("".concat(e.status," ").concat(e.statusText))};var B=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(u.a)(s,2),l=i[0],d=i[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),O=h[0],f=h[1],_=Object(a.useState)(!1),v=Object(u.a)(_,2),S=v[0],T=v[1],U=Object(a.useState)(!1),L=Object(u.a)(U,2),D=L[0],B=L[1],J=Object(a.useState)(!1),M=Object(u.a)(J,2),R=M[0],z=M[1],G=Object(a.useState)(null),H=Object(u.a)(G,2),K=H[0],Q=H[1],V=Object(a.useState)(!1),W=Object(u.a)(V,2),X=W[0],Y=W[1],Z=Object(a.useState)({}),$=Object(u.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)({}),ae=Object(u.a)(ne,2),ce=ae[0],se=ae[1],ie=Object(a.useState)(!1),oe=Object(u.a)(ie,2),re=oe[0],ue=oe[1],le=Object(a.useState)(!1),de=Object(u.a)(le,2),be=de[0],je=de[1],pe=Object(a.useState)(!1),me=Object(u.a)(pe,2),he=me[0],Oe=me[1],fe=Object(a.useState)({}),_e=Object(u.a)(fe,2),ge=_e[0],xe=_e[1],ve=Object(a.useState)({}),Ce=Object(u.a)(ve,2),Se=Ce[0],ke=Ce[1],Ne=Object(a.useState)(!1),ye=Object(u.a)(Ne,2),we=ye[0],Te=ye[1],Ue=Object(a.useState)(!1),Pe=Object(u.a)(Ue,2),Ee=Pe[0],Le=Pe[1],De=Object(w.g)();Object(a.useEffect)((function(){b.getInitialCards().then((function(e){c(e)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: ".concat(e.status," ").concat(e.statusText))}))}),[]),Object(a.useEffect)((function(){b.getUserData().then((function(e){te(e)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))}),[]),Object(a.useEffect)((function(){Ie()}),[De]);var Ie=function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(q,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return F(e)}))}(e).then((function(e){var t=e.data;ke(t.email),je(!0),De.push("/main")})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0442\u043e\u043a\u0435\u043d\u0430:".concat(e)),De.push("/sign-in"),xe(Object(o.a)(Object(o.a)({},ge),{},{message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u043e\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u0434 \u0441\u0432\u043e\u0435\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u044c\u044e"})),ue(!0)}))},Ae=function(e){d(!1),T(!1),f(!1),z(!1),ue(!1)},qe=function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&Ae()},Fe=function(e){27===e.keyCode&&Ae()};return Object(a.useEffect)((function(){return(l||O||S||R||D)&&document.addEventListener("keydown",Fe),function(){document.removeEventListener("keydown",Fe)}}),[l,O,S,R,D]),Object(p.jsx)(j.Provider,{value:{currentUser:ee,authUserData:ge,isLoggedIn:be,setIsShowPassword:Te,isShowPassword:we,isSignedUp:he,isBurgerMenuOpen:Ee,setIsBurgerMenuOpen:Le},children:Object(p.jsxs)("div",{className:"page",children:[Object(p.jsxs)(w.d,{children:[Object(p.jsx)(I,{path:"/main",component:g,onEditProfile:function(){d(!0)},onEditAvatar:function(){T(!0)},onAddPlace:function(){f(!0)},onCardClick:function(e){z(!0),Q(e)},cards:n,onLikeClick:function(e){var t=e.likes.some((function(e){return e._id===ee._id}));b.changeLikeCardStatus(e._id,!t).then((function(t){c((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u043b\u0430\u0439\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}))},onDeleteClick:function(e){B(!0),se(e)},signOut:function(){je(!1),localStorage.removeItem("jwt"),ke({}),De.push("/sign-in")},to:"/sign-in",userEmail:Se}),Object(p.jsx)(w.b,{path:"/sign-in",children:Object(p.jsx)(P,{handleLogin:function(e,t){Y(!0),function(e,t){return fetch("".concat(q,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return F(e)})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))}(e,t).then((function(e){e.token&&(xe(Object(o.a)(Object(o.a)({},ge),{},{email:"",password:""})),je(!0),ke(t),Te(!1),De.push("/main"),setTimeout((function(){return Y(!1)}),3e3))})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status)),xe(Object(o.a)(Object(o.a)({},ge),{},{message:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: \u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})),je(!1),ue(!0),Y(!1),Te(!1),ke({})})),setTimeout((function(){return Y(!1)}),2e3)},isSubmitted:X})}),Object(p.jsx)(w.b,{path:"/sign-up",children:Object(p.jsx)(E,{handleRegister:function(e,t,n){t===n?(Y(!0),function(e,t){return fetch("".concat(q,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return F(e)}))}(t,e).then((function(e){e?(xe(Object(o.a)(Object(o.a)({},ge),{},{message:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})),ue(!0),Oe(!0),Te(!1),De.push("/sign-in")):(xe(Object(o.a)(Object(o.a)({},ge),{},{message:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})),ue(!0),Oe(!1),Te(!1),Y(!1))})).catch((function(e){var t=String(e);console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(t.split(":")[1])),xe(Object(o.a)(Object(o.a)({},ge),{},{message:"".concat(t.split(":")[1],"!")})),ue(!0),Oe(!1),setTimeout((function(){return Y(!1)}),3e3)}))):(xe(Object(o.a)(Object(o.a)({},ge),{},{password:"",confirmPassword:"",message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437"})),Oe(!1),Te(!1),ue(!0)),setTimeout((function(){return Y(!1)}),2e3)},isSubmitted:X})}),Object(p.jsx)(w.b,{path:"/",children:be?Object(p.jsx)(w.a,{to:"/main"}):Object(p.jsx)(w.a,{to:"/sign-in"})})]}),Object(p.jsx)(C,{isOpen:S,onClose:qe,onUpdateAvatar:function(e){Y(!0),b.updateAvatar(e).then((function(e){te(Object.assign(ee,{avatar:e.avatar})),T(!1),setTimeout((function(){return Y(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:X}),Object(p.jsx)(k,{isOpen:l,onClose:qe,onUpdateUser:function(e){Y(!0),b.updateUserData(e).then((function(e){te(e),d(!1),setTimeout((function(){return Y(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:X}),Object(p.jsx)(N,{isOpen:O,onClose:qe,onAddPlace:function(e){Y(!0),b.addCard(e).then((function(e){c([e].concat(Object(r.a)(n))),f(!1),setTimeout((function(){return Y(!1)}),1e3)})).catch((function(e){console.log("\u041d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ".concat(e.status," ").concat(e.statusText))}))},isSubmitted:X}),Object(p.jsx)(x,{isOpen:R,data:K,onClose:qe}),Object(p.jsx)(y,{isOpen:D,onClose:qe,isSubmitted:X,deleteCard:function(e){Y(!0),b.deleteCard(e._id).then((function(){c(n.filter((function(t){return t._id!==e._id}))),B(!1),setTimeout((function(){return Y(!1)}),1e3)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: ".concat(e.status," ").concat(e.statusText))}))},data:ce}),Object(p.jsx)(A,{isOpen:re,onClose:qe,name:"infoToolTip"})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(O.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.842ec7b7.chunk.js.map