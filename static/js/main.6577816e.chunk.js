(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),a=n(23),s=n.n(a),r=(n(30),n(14)),i=n(10),l=n(9),j=n(1),u=o.a.createContext(),b=function(e){var t=e.children,n=Object(c.useState)(localStorage.getItem("notes")?JSON.parse(localStorage.getItem("notes")):[]),o=Object(l.a)(n,2),a=o[0],s=o[1],r=Object(c.useState)(localStorage.getItem("trashNotes")?JSON.parse(localStorage.getItem("trashNotes")):[]),b=Object(l.a)(r,2),h=b[0],d=b[1],O=Object(c.useState)("grid"),x=Object(l.a)(O,2),f=x[0],N=x[1],m=Object(c.useState)(!1),p=Object(l.a)(m,2),g=p[0],v=p[1],I=Object(c.useState)(""),S=Object(l.a)(I,2),T=S[0],C=S[1],w=Object(c.useState)(""),y=Object(l.a)(w,2),k=y[0],D=y[1],A=Object(c.useState)(!1),J=Object(l.a)(A,2),L=J[0],E=J[1],V=Object(c.useState)(null),R=Object(l.a)(V,2),B=R[0],F=R[1],M=Object(c.useState)(!1),G=Object(l.a)(M,2),U=G[0],Y=G[1],P=Object(c.useState)(""),q=Object(l.a)(P,2),z=q[0],H=q[1],K=function(e){var t=h.filter((function(t){return t.noteId!==e}));d(t),localStorage.setItem("trashNotes",JSON.stringify(t))};return Object(j.jsx)(u.Provider,{value:{layout:f,isOptionsActive:g,setIsOptionsActive:v,handleChangeLayout:function(){N("grid"===f?"list":"grid"),v(!1)},notes:a,trashNotes:h,handleAddNote:function(){if(L)a.map((function(e){if(e.noteId===B){a.splice(a.indexOf(e),1);var t=new Date,n=t.getDate(),c=t.getMonth(),o=t.getFullYear(),r={noteId:e.noteId,noteTitle:T||"Unnamed",noteText:k,noteDate:"".concat(n,".").concat(c,".").concat(o,".")};s([].concat(Object(i.a)(a),[r])),localStorage.setItem("notes",JSON.stringify([].concat(Object(i.a)(a),[r])))}}));else{var e=new Date,t=e.getDate(),n=e.getMonth(),c=e.getFullYear(),o={noteId:a.length+1,noteTitle:T||"Unnamed",noteText:k,noteDate:"".concat(t,".").concat(n,".").concat(c,".")};0===a.length?o.noteId=1:o.noteId=a[a.length-1].noteId+1,s([].concat(Object(i.a)(a),[o])),localStorage.setItem("notes",JSON.stringify([].concat(Object(i.a)(a),[o]))),D(""),C("")}},newText:k,newTitle:T,setNewText:D,setNewTitle:C,handleRemoveNote:function(e){var t=a.filter((function(t){return t.noteId===e}))[0],n=a.filter((function(t){return t.noteId!==e}));s(n),localStorage.setItem("notes",JSON.stringify(n)),0===h.length?t.noteId=1:t.noteId=h[h.length-1].noteId+1,d([].concat(Object(i.a)(h),[t])),localStorage.setItem("trashNotes",JSON.stringify([].concat(Object(i.a)(h),[t])))},handleDeleteNote:K,handleRestoreNote:function(e){var t=h.filter((function(t){return t.noteId===e}))[0];K(e),0===a.length?t.noteId=1:t.noteId=a[a.length-1].noteId+1,s([].concat(Object(i.a)(a),[t])),localStorage.setItem("notes",JSON.stringify([].concat(Object(i.a)(a),[t])))},handleEditNote:function(e,t,n){E(!0),F(e),C(t),D(n)},isEditingNote:L,isTrashOpen:U,setIsTrashOpen:Y,searchValue:z,setSearchValue:H,handleGoBack:function(){window.history.back(),C(""),D("")}},children:t})},h=function(){return Object(c.useContext)(u)},d=n(8),O=function(e){var t=e.props,n=t.noteId,c=t.noteTitle,o=t.noteText,a=t.noteDate,s=h(),i=s.handleRemoveNote,l=s.handleEditNote;return Object(j.jsxs)("div",{className:"note-thumbnail",children:[Object(j.jsx)("button",{className:"remove-note-btn",onClick:function(){return i(n)},children:Object(j.jsx)(r.a,{})}),Object(j.jsxs)(d.b,{to:"/note",style:{textDecoration:"none",color:"#000"},onClick:function(){return l(n,c,o)},children:[Object(j.jsx)("h1",{className:"thumbnail-title",children:c}),Object(j.jsx)("p",{className:"thumbnail-content",children:o}),Object(j.jsx)("p",{className:"thumbnail-date",children:a})]})]})},x=n(15),f=function(){var e=h(),t=e.layout,n=e.notes,o=e.setIsTrashOpen,a=e.searchValue;Object(c.useEffect)((function(){o(!1)}),[]);var s=n;return 0===n.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{className:"no-notes-notification",children:"No notes."}),Object(j.jsx)(d.b,{to:"/note",children:Object(j.jsx)("button",{className:"open-new-note-btn",children:Object(j.jsx)(x.a,{})})})]}):(""!==a&&(s=n.filter((function(e){return e.noteTitle.toLowerCase().includes(a.toLowerCase())||e.noteText.toLowerCase().includes(a.toLowerCase())}))),Object(j.jsxs)("div",{className:"notes-container ".concat("list"===t&&"notes-container-list"),children:[s.map((function(e,t){return Object(j.jsx)(O,{props:e},t)})),Object(j.jsx)(d.b,{to:"/note",children:Object(j.jsx)("button",{className:"open-new-note-btn",children:Object(j.jsx)(x.a,{})})})]}))},N=function(){var e=h(),t=e.searchValue,n=e.setSearchValue;return Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)("button",{className:"search-btn",children:Object(j.jsx)(x.b,{})}),Object(j.jsx)("input",{type:"text",className:"search-input",placeholder:"Search notes",value:t,onChange:function(e){return n(e.target.value)}})]})},m=n(17),p=n(25),g=function(){var e=h(),t=e.layout,n=e.handleChangeLayout,c=e.isOptionsActive,o=e.setIsOptionsActive,a=e.isTrashOpen;return Object(j.jsxs)("ul",{className:"options-container ".concat(c&&"options-container-active"),children:[Object(j.jsxs)("li",{onClick:function(){return n()},children:["Show ","grid"===t?"list":"grid"]}),Object(j.jsx)(d.b,{to:"".concat(a?"/":"/trash"),style:{color:"#000",textDecoration:"none"},onClick:function(){return o(!1)},children:Object(j.jsx)("li",{children:a?"Notes":"Trash"})})]})},v=function(){var e=h(),t=e.isOptionsActive,n=e.setIsOptionsActive;return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)(N,{}),Object(j.jsx)("button",{className:"nav-options-btn",onClick:function(){return n(!t)},children:t?Object(j.jsx)(p.a,{}):Object(j.jsx)(m.b,{})}),Object(j.jsx)(g,{})]})},I=function(){var e=h().isOptionsActive;return Object(j.jsx)("div",{className:"overlay ".concat(e&&"overlay-active")})},S=function(e){var t=e.props,n=t.noteId,c=t.noteTitle,o=t.noteText,a=t.noteDate,s=h(),i=s.handleDeleteNote,l=s.handleRestoreNote;return Object(j.jsxs)("div",{className:"trash-note-thumbnail",children:[Object(j.jsx)("button",{className:"delete-note-btn",onClick:function(){return i(n)},children:Object(j.jsx)(r.a,{})}),Object(j.jsx)("button",{className:"restore-note-btn",onClick:function(){return l(n)},children:Object(j.jsx)(r.b,{})}),Object(j.jsx)("h1",{className:"thumbnail-title",children:c}),Object(j.jsx)("p",{className:"thumbnail-content",children:o}),Object(j.jsx)("p",{className:"thumbnail-date",children:a})]})},T=function(){var e=h(),t=e.layout,n=e.trashNotes,o=(e.isTrashOpen,e.setIsTrashOpen),a=e.searchValue;Object(c.useEffect)((function(){o(!0)}),[]);var s=n;return 0===n.length?Object(j.jsx)("p",{className:"no-notes-notification",children:"No notes in trash."}):(""!==a&&(s=n.filter((function(e){return e.noteTitle.toLowerCase().includes(a.toLowerCase())||e.noteText.toLowerCase().includes(a.toLowerCase())}))),Object(j.jsx)("div",{className:"trash-container ".concat("list"===t&&"trash-container-list"),children:s.map((function(e,t){return Object(j.jsx)(S,{props:e},t)}))}))},C=n(3),w=function(){var e=h(),t=e.handleAddNote,n=e.newText,c=e.newTitle,o=e.setNewText,a=e.setNewTitle,s=e.isEditingNote,r=e.handleGoBack;return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("button",{className:"back-btn",onClick:function(){return r()},children:Object(j.jsx)(m.a,{})}),Object(j.jsx)("input",{type:"text",className:"note-title",placeholder:"Title",value:c,onChange:function(e){return a(e.target.value)}}),Object(j.jsx)("div",{className:"note-content",children:Object(j.jsx)("textarea",{placeholder:"Note...",className:"note-text",value:n,onChange:function(e){return o(e.target.value)}})}),Object(j.jsx)(d.b,{to:"/",style:n?null:{userSelect:"none",pointerEvents:"none",backgroundColor:"rgb(255, 215, 82)"},children:Object(j.jsx)("button",{className:"add-note-btn",style:n?null:{pointerEvents:"none",backgroundColor:"rgb(255, 215, 82)"},onClick:function(){return t()},children:s?"Save changes":"Add note"})})]})};var y=function(){return Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{}),Object(j.jsxs)(C.c,{children:[Object(j.jsx)(C.a,{path:"/",exact:!0,component:f}),Object(j.jsx)(C.a,{path:"/trash",exact:!0,component:T}),Object(j.jsx)(C.a,{path:"/note",exact:!0,component:w})]}),Object(j.jsx)(I,{})]})})};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(b,{children:Object(j.jsx)(y,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6577816e.chunk.js.map