(this["webpackJsonptank-tactics"]=this["webpackJsonptank-tactics"]||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(11),r=a.n(c),i=(a(154),a(155),a(38)),s=a(14),o=a(12),l=a(267),j=a(213),d=a(67),u=a(18),p=a.n(u),b=a(40),h=a(59),x=a.n(h),O="https://TankTacticsService.drewcolgin.repl.co/",m="api/check/",g="api/gamestate/";function f(e){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(O).concat(m).concat(t)).catch((function(){return!1}));case 2:return a=e.sent,e.abrupt("return",200===a.status);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(O).concat(g).concat(t));case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=a(82),k=a(127),w=a.n(k),N=a(1),S=Object(n.createContext)({player:{name:"loading",supply:0,health:0}});function D(e){var t=e.children,a=Object(s.i)().id,c=Object(n.useState)(),r=Object(o.a)(c,2),i=r[0],l=r[1],j=Object(n.useState)(),d=Object(o.a)(j,2),u=d[0],h=d[1],x=Object(n.useState)(!0),O=Object(o.a)(x,2),m=O[0],g=O[1],f=Object(s.g)(),v=Object(C.b)().enqueueSnackbar;return Object(n.useEffect)((function(){g(!0),function(e){return y.apply(this,arguments)}(a).then((function(e){return l(e)})).finally((function(){return g(!1)}))}),[a]),Object(n.useEffect)((function(){var e=w()("https://TankTacticsService.drewcolgin.repl.co");e.on("connect",Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:h(e),e.emit("register",a);case 2:case"end":return t.stop()}}),t)})))),e.on("gameStateUpdate",(function(e){if(l(e),e&&e.history){var t=e.history[e.history.length-1];v(t.message,{variant:"info"})}g(!1)})),e.on("invalid",(function(e){v("Invalid ".concat(e.action," Action"),{variant:"error",autoHideDuration:1e3}),g(!1)})),e.on("unlog",(function(){f.push("/")}))}),[v,f,a,l]),Object(N.jsx)(S.Provider,{value:{gameState:i,setGameState:l,socket:u,isLoading:m,setIsLoading:g},children:t})}var I=a(133),T=a.n(I),M=a(274),F=a(211),P=a(253),L=a(270);function H(e){var t=e.open,a=e.setOpen,c=Object(n.useContext)(S).gameState,r=R();return Object(N.jsx)(M.a,{open:t,anchor:"left",onClose:function(){return a(!1)},classes:{paper:r.drawer},children:Object(N.jsx)(F.a,{className:r.container,children:c&&c.history.map((function(e){return Object(N.jsxs)(F.a,{className:r.paper,children:[Object(N.jsx)(L.a,{tooltip:!0,date:new Date(e.time),locale:"en-US"})," | ".concat(e.message)]},e.time)})).reverse()})})}var R=Object(P.a)({container:{backgroundColor:"transparent",height:"100%"},paper:{padding:5,margin:5},drawer:{backgroundColor:"slategray"}});var E=a(94),z=a(252),A=a(260),B=a(254),W=a(255),_=a(256),J=a(275),V=a(257),U=a(272),G=a(258),K=a(259);var q=Object(n.createContext)({});function Y(e){var t=e.children,a=function(){var e=Object(n.useContext)(S),t=e.socket,a=e.setIsLoading;return{socket:t,sendAction:function(e,n,c,r){t.emit("action",{actor:e,action:n,targetSpace:c,upgrades:r}),a(!0)}}}().sendAction;return Object(N.jsx)(q.Provider,{value:{sendAction:a},children:t})}var Q=a(83),X=a(77),Z=a.n(X);function $(e){var t=e.name,a=e.health,n=e.supply,c=e.votes,r=e.vertical,i=ee({vertical:void 0!==r&&r});return Object(N.jsxs)("div",{className:i.playerInfo,children:[Object(N.jsx)(d.a,{align:"center",children:t}),Object(N.jsxs)("div",{className:i.statContainer,children:[Object(N.jsxs)("div",{className:i.stat,children:[Object(N.jsx)("img",{src:"https://static.thenounproject.com/png/2111027-200.png",className:i.img,alt:"supply"}),Object(N.jsx)(d.a,{children:n})]}),Object(N.jsxs)("div",{className:i.stat,children:[0!==a?Object(N.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",className:i.img,alt:"health"}):Object(N.jsx)("img",{src:"https://www.freeiconspng.com/uploads/healthcare-skull-icon-5.png",className:i.img,alt:"death"}),Object(N.jsx)(d.a,{children:a})]}),void 0!==c&&Object(N.jsxs)("div",{className:i.stat,children:[Object(N.jsx)(Z.a,{}),Object(N.jsxs)(d.a,{children:[c," / 3"]})]})]})]})}var ee=Object(P.a)((function(){return{playerInfo:{display:"flex",flexDirection:"column",alignSelf:"center"},statContainer:{display:"flex",flexDirection:function(e){return e.vertical?"column":"row"},placeContent:"space-around"},stat:{display:"flex",flexDirection:"row",placeContent:"space-between"},img:{maxHeight:20,maxWidth:20,alignSelf:"center",placeContent:"center"}}})),te=a(80),ae=a.n(te);function ne(e){var t,a=e.position,c=Object(n.useState)("move"),r=Object(o.a)(c,2),i=r[0],l=r[1],j=ce(),u=Object(n.useContext)(S),p=u.gameState,b=u.isLoading,h=Object(s.i)().id,x=Object(n.useContext)(q).sendAction,O=Object(o.a)(a,2),m=O[0],g=O[1],f=null;(null===p||void 0===p?void 0:p.userData.filter((function(e){return e.position&&e.position===[m,g]})))&&(f=p.userData.filter((function(e){return e.position&&e.position[0]===m&&e.position[1]===g}))[0]),Object(n.useEffect)((function(){"move"===i&&f?l("fireRound"):"move"===i||f||l("move")}),[i,p,f]);var v=Object(n.useMemo)((function(){if(p){var e=Math.abs(p.player.position[1]-a[1]),t=Math.abs(p.player.position[0]-a[0]);return Math.max(Math.max(t,e)-2,0)}return 0}),[p,a]),y=!((null===p||void 0===p||null===(t=p.player)||void 0===t?void 0:t.supply)>0),C=v>(null===p||void 0===p?void 0:p.player.supply)-1||y,k=p?Math.max(p.player.supply-1,0):0;return Object(N.jsxs)("div",{children:[Object(N.jsxs)(d.a,{children:["(",a[1],",",a[0],")"]}),Object(N.jsxs)(W.a,{component:"fieldset",children:[Object(N.jsx)(_.a,{component:"legend",children:"Actions (base cost 1)"}),Object(N.jsxs)(J.a,{row:!0,onChange:function(e){return l(e.target.value)},value:i,children:[Object(N.jsx)(V.a,{value:"move",control:Object(N.jsx)(U.a,{color:"primary"}),label:"Move",disabled:y||f,labelPlacement:"top"}),Object(N.jsx)(V.a,{value:"fireRound",control:Object(N.jsx)(U.a,{color:"primary"}),label:"Fire Round",disabled:y||!f,labelPlacement:"top"}),Object(N.jsx)(V.a,{value:"fireSupply",control:Object(N.jsx)(U.a,{color:"primary"}),label:"Fire Supply",disabled:y||!f,labelPlacement:"top"})]})]}),Object(N.jsxs)("div",{className:j.bottomContainer,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(_.a,{component:"legend",children:"Upgrades"}),Object(N.jsxs)(d.a,{children:["Required: ",v]}),Object(N.jsxs)(d.a,{children:["Available: ",k]}),Object(N.jsxs)("div",{className:j.submitContainer,children:[Object(N.jsxs)("div",{className:j.loadingButtonContainer,children:[Object(N.jsx)(G.a,{type:"submit",variant:"contained",color:"primary",disabled:C||b,onClick:function(){x(h,i,a,v)},children:"Submit"}),b&&Object(N.jsx)(K.a,{size:24,className:j.buttonProgress})]}),C?Object(N.jsx)(d.a,{className:j.submitErrorMessage,children:"Insufficient Supply!"}):""]})]}),f&&Object(N.jsxs)("div",{className:j.comparisonContainer,children:[Object(N.jsx)($,{name:f.name,health:f.health,supply:f.supply}),Object(N.jsx)(ae.a,{className:j.icon}),Object(N.jsx)($,{name:f.name,health:"fireRound"===i?f.health-1:f.health,supply:"fireSupply"===i?f.supply+1:f.supply})]})]})]})}var ce=Object(P.a)((function(){return{submitContainer:{display:"flex",flexDirection:"row"},submitErrorMessage:{alignSelf:"center",color:"red",margin:"2px"},loadingButtonContainer:{position:"relative"},buttonProgress:{color:Q.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},bottomContainer:{display:"flex",placeContent:"space-between"},img:{maxHeight:20,maxWidth:20,alignSelf:"center",placeContent:"center"},comparisonContainer:{display:"flex",flexDirection:"row"},icon:{margin:"auto"}}}));function re(e){var t=e.position,a=Object(n.useContext)(S),c=a.gameState,r=a.isLoading,i=Object(n.useContext)(q).sendAction,l=Object(s.i)().id,j=ie(),u=Object(o.a)(t,2),p=u[0],b=u[1],h=null;return(null===c||void 0===c?void 0:c.userData.filter((function(e){return e.position&&e.position===[p,b]})))&&(h=c.userData.filter((function(e){return e.position&&e.position[0]===p&&e.position[1]===b}))[0]),Object(N.jsx)(N.Fragment,{children:h?Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(N.jsx)(d.a,{align:"center",children:"You have ".concat(c.player.votes," vote").concat(1===c.player.votes?"":"s")}),Object(N.jsxs)("div",{className:j.comparisonContainer,children:[Object(N.jsx)($,{name:h.name,health:h.health,supply:h.supply,votes:h.votesForToday,vertical:!0}),Object(N.jsx)(ae.a,{className:j.icon}),Object(N.jsx)($,{name:h.name,vertical:!0,health:h.health,votes:2===h.votesForToday?0:h.votesForToday+1,supply:2===h.votesForToday?h.supply+1:h.supply})]}),Object(N.jsxs)("div",{className:j.loadingButtonContainer,children:[Object(N.jsxs)(G.a,{onClick:function(){i(l,"vote",t,0)},color:"primary",variant:"contained",disabled:c.player.votes<1||r,children:["Vote For ",h.name]}),r&&Object(N.jsx)(K.a,{size:24,className:j.buttonProgress})]})]}):"Select a Player's Position to Vote for Them"})}var ie=Object(P.a)({buttonProgress:{color:Q.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},loadingButtonContainer:{position:"relative",alignSelf:"center"},comparisonContainer:{display:"flex",flexDirection:"row"},icon:{margin:"auto"}});function se(e){var t=e.position,a=e.children,c=Object(n.useState)(!1),r=Object(o.a)(c,2),i=r[0],s=r[1],l=Object(n.useState)(null),j=Object(o.a)(l,2),d=j[0],u=j[1],p=Object(n.useContext)(S).gameState,b=oe();return Object(N.jsxs)("div",{className:b.container,children:[i&&Object(N.jsx)("img",{src:"https://freepngimg.com/thumb/target/6-2-target-picture.png",className:b.target,alt:"target"}),Object(N.jsx)("div",{onClick:function(e){u(e.currentTarget),s(!i)},className:b.anchor,children:a}),i&&Object(N.jsx)(z.a,{onClickAway:function(){s(!1)},children:Object(N.jsx)(A.a,{open:i,transition:!0,anchorEl:d,children:function(e){var a=e.TransitionProps;return Object(N.jsx)(B.a,Object(E.a)(Object(E.a)({},a),{},{children:Object(N.jsx)(F.a,{className:b.paper,children:(null===p||void 0===p?void 0:p.player.alive)?Object(N.jsx)(ne,{position:t}):Object(N.jsx)(re,{position:t})})}))}})})]},"".concat(t[1],"_").concat([t[0]]))}var oe=Object(P.a)({anchor:{height:"100%",width:"100%"},container:{position:"relative",height:"100%",width:"100%"},target:{maxWidth:50,position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},paper:{padding:"10px"}}),le=a(273);function je(e){var t=e.health,a=e.supply,n=e.name,c=e.id,r=de();return Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:2,backgroundColor:"rgb(211,211,211,0.8)"},children:[Object(N.jsxs)("div",{className:r.topContainer,children:[Object(N.jsx)("img",{src:"https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/28562/tank-1-clipart-md.png",className:r.img,alt:"Tank"}),Object(N.jsx)(le.a,{smDown:!0,children:Object(N.jsx)(d.a,{className:r.name,children:n})})]}),Object(N.jsxs)("div",{style:{display:"flex",flexWrap:"nowrap",alignSelf:"center"},children:[Object(N.jsx)("div",{className:r.statContainer,children:Object(N.jsxs)(le.a,{mdDown:!0,children:[Object(N.jsx)("img",{src:"https://static.thenounproject.com/png/2111027-200.png",className:r.img,alt:"supply"}),Object(N.jsx)(d.a,{children:a})]})}),Object(N.jsx)("div",{className:r.statContainer,children:Object(N.jsxs)(le.a,{mdDown:!0,children:[Object(N.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",className:r.img,alt:"health"}),Object(N.jsx)(d.a,{children:t})]})})]})]},c)}var de=Object(P.a)((function(){return{statContainer:{display:"flex",flexWrap:"wrap"},topContainer:{display:"inline-flex",alignSelf:"center",flexWrap:"wrap"},name:{flex:1},img:{maxHeight:20,maxWidth:20,alignSelf:"center",placeContent:"center"}}}));function ue(){var e=Object(s.g)(),t=new URLSearchParams(Object(s.h)().search);return{params:t,updateParams:function(){e.replace({search:t.toString()})}}}function pe(){var e=Object(n.useContext)(S).gameState,t=ue().params,a=be({gameState:e}),c=Object(n.useMemo)((function(){var n=t.has("darkMode"),c=n?"#000000":"#D3D3D3",r=function(e){return"repeating-linear-gradient(-45deg,  ".concat(e,",  ").concat(e," 10px,  ").concat(c," 10px, ").concat(c," 20px)")},i=[r("#5C8248FF"),r("#FFB862"),r("#FF6262")],s=[],o=function(r){for(var o=function(o){var l=null;(null===e||void 0===e?void 0:e.userData.filter((function(e){return e.position&&e.position===[r,o]})))&&(l=e.userData.filter((function(e){return e.position&&e.position[0]===r&&e.position[1]===o}))[0]);var j=function(e,t){if(!e)return 1e3;var a=Math.abs(e[1]-t[1]),n=Math.abs(e[0]-t[0]);return Math.max(a,n)}(null===e||void 0===e?void 0:e.player.position,[r,o]),d=c,u="";t.has("rangeIndicator")&&j<3?d=i[j]:0===j?u=n?"thick solid blue":"thin solid blue":n&&(u="thin dotted lightgray");var p,b,h=Object(N.jsx)(F.a,{style:{textAlign:"center",flex:1,background:d,cursor:"pointer",boxSizing:"border-box",height:"100%",width:"100%",border:u},children:(p=[r,o],b=l?Object(N.jsx)(je,{health:l.health,supply:l.supply,name:l.name,id:"".concat(o).concat(r)}):Object(N.jsx)("div",{className:a.blankSpace,id:"".concat(o).concat(r)},"".concat(o).concat(r)),Object(N.jsx)(se,{position:p,children:b}))},"".concat(o,"_").concat(r));if(-1===o||-1===r)if(-1===o&&-1===r)h=Object(N.jsx)("div",{style:{width:"20px"}},"".concat(o," ").concat(r));else{var x=-1===o?r:o,O=-1===r?"100%":"20px";h=Object(N.jsxs)("div",{style:{flex:1,alignSelf:"center",maxWidth:O,color:"white"},id:"".concat(o).concat(r),children:[" ",x," "]},"".concat(o," ").concat(r))}s.push(h)},l=-1;l<e.bounds[1];l++)o(l);return[]};if(e)for(var l=-1;l<e.bounds[0];l++)o(l);return s}),[a.blankSpace,e,t]);return Object(N.jsx)("div",{className:a.containerGrid,children:c})}var be=Object(P.a)({containerGrid:{backgroundColor:"slategray",height:"100%",display:"grid",gridTemplateColumns:function(e){var t=e.gameState;return"20px repeat(".concat(t?t.bounds[1]:"auto-fill",", 1fr)")},gridTemplateRows:function(e){var t=e.gameState;return"20px repeat(".concat(t?t.bounds[0]:"auto-fill",", 1fr)")}},paper:{height:"100%",width:"100%"},blankSpace:{height:"100%",width:"100%",minWidth:"30px"}}),he=a(261),xe=a(276),Oe=a(129),me=a.n(Oe);function ge(e){var t=e.open,a=e.setOpen,c=Object(n.useContext)(S).gameState,r=fe(),i=Object(n.useMemo)((function(){return c?c.userData.filter((function(e){return!e.alive})):[]}),[c]),s=Object(n.useMemo)((function(){return c?c.userData.filter((function(e){return e.alive})):[]}),[c]);return Object(N.jsx)(M.a,{open:t,anchor:"left",onClose:function(){return a(!1)},classes:{paper:r.drawer},children:Object(N.jsxs)(F.a,{className:r.container,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{className:r.type,children:"The Esteemed Jury"}),Object(N.jsx)(he.a,{}),i.map((function(e){return Object(N.jsxs)(F.a,{className:r.paper,children:[Object(N.jsx)(d.a,{className:r.playerName,children:e.name}),Object(N.jsx)(xe.a,{icon:Object(N.jsx)(me.a,{}),variant:"outlined",label:e.votes})]},e.name)}))]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{className:r.type,children:"Votes For the Living"}),Object(N.jsx)(he.a,{}),s.map((function(e){return Object(N.jsxs)(F.a,{className:r.paper,children:[Object(N.jsx)(d.a,{className:r.playerName,children:e.name}),Object(N.jsx)(xe.a,{icon:Object(N.jsx)(Z.a,{}),variant:"outlined",label:"".concat(e.votesForToday," / 3 ")})]},e.name)}))]})]})})}var fe=Object(P.a)({container:{backgroundColor:"transparent",padding:"10px",height:"100%"},drawer:{backgroundColor:"slategray"},paper:{padding:5,margin:5,display:"flex",placeContent:"space-evenly"},type:{color:"white",placeContent:"center"},chip:{justifyContent:"center"},playerName:{alignSelf:"center",marginRight:"10px"}}),ve=a(263),ye=a(264),Ce=a(265),ke=a(266),we=a(130),Ne=a.n(we),Se=a(131),De=a.n(Se),Ie=a(132),Te=a.n(Ie),Me=a(262);function Fe(){var e=ue(),t=e.params,a=e.updateParams,n=Pe();return Object(N.jsxs)("div",{className:n.container,children:[Object(N.jsx)(d.a,{className:n.text,children:"Range Indicator"}),Object(N.jsx)(Me.a,{checked:t.get("rangeIndicator"),onChange:function(e){e.target.checked?(t.set("rangeIndicator","1"),a()):(t.delete("rangeIndicator"),a())},name:"checkedA",inputProps:{"aria-label":"secondary checkbox"},color:"primary"})]})}var Pe=Object(P.a)({container:{margin:10,display:"inline-flex",marginTop:"auto"},text:{alignSelf:"center",color:"white",marginRight:"auto"}});function Le(){var e=ue(),t=e.params,a=e.updateParams,n=He();return Object(N.jsxs)("div",{className:n.container,children:[Object(N.jsx)(d.a,{className:n.text,children:"Dark Mode"}),Object(N.jsx)(Me.a,{checked:t.get("darkMode"),onChange:function(e){e.target.checked?(t.set("darkMode","1"),a()):(t.delete("darkMode"),a())},inputProps:{"aria-label":"secondary checkbox"},color:"primary"})]})}var He=Object(P.a)({container:{margin:10,display:"inline-flex"},text:{alignSelf:"center",color:"white",marginRight:"auto"}});function Re(e){var t=e.open,a=e.setIsOpen,n=e.setIsJuryOpen,c=e.setIsStatsOpen,r=e.setIsHistoryOpen,i=Ee();return Object(N.jsx)(M.a,{open:t,anchor:"left",onClose:function(){return a(!1)},classes:{paper:i.drawer},children:Object(N.jsxs)(F.a,{className:i.container,children:[Object(N.jsxs)(ve.a,{children:[Object(N.jsxs)(ye.a,{button:!0,className:i.icon,onClick:function(){r(!0),a(!1)},children:[Object(N.jsx)(Ce.a,{className:i.icon,children:Object(N.jsx)(Ne.a,{})}),Object(N.jsx)(ke.a,{primary:"History"})]},"history"),Object(N.jsxs)(ye.a,{button:!0,className:i.icon,onClick:function(){a(!1),n(!0)},children:[Object(N.jsx)(Ce.a,{className:i.icon,children:Object(N.jsx)(De.a,{})}),Object(N.jsx)(ke.a,{primary:"Jury"})]},"jury"),Object(N.jsxs)(ye.a,{button:!0,className:i.icon,onClick:function(){a(!1),c(!0)},children:[Object(N.jsx)(Ce.a,{className:i.icon,children:Object(N.jsx)(Te.a,{})}),Object(N.jsx)(ke.a,{primary:"Stats"})]},"stats")]}),Object(N.jsx)(Fe,{}),Object(N.jsx)(Le,{})]})})}var Ee=Object(P.a)({container:{backgroundColor:"transparent",height:"100%",display:"contents"},paper:{padding:5,margin:5},drawer:{backgroundColor:"slategray",width:"200px"},icon:{color:"white"}});function ze(e){var t=e.isOpen,a=e.setIsOpen,c=Object(n.useContext)(S).gameState,r=Ae();return Object(N.jsx)(M.a,{open:t,anchor:"left",onClose:function(){return a(!1)},classes:{paper:r.drawer},children:Object(N.jsxs)(F.a,{className:r.container,children:[Object(N.jsx)(d.a,{children:"Commanders"}),Object(N.jsx)("div",{className:r.gridContainer,children:c&&c.userData.filter((function(e){return e.alive})).map((function(e){return Object(N.jsx)(F.a,{className:r.paper,children:Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{align:"center",children:e.name}),Object(N.jsxs)("div",{className:r.statContainer,children:[Object(N.jsxs)("div",{className:r.statContainer,children:[Object(N.jsx)("img",{src:"https://static.thenounproject.com/png/2111027-200.png",className:r.img,alt:"supply"}),Object(N.jsx)(d.a,{children:e.supply})]}),Object(N.jsxs)("div",{className:r.statContainer,children:[Object(N.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png",className:r.img,alt:"health"}),Object(N.jsx)(d.a,{children:e.health})]}),Object(N.jsxs)("div",{className:r.statContainer,children:[Object(N.jsx)("img",{src:"https://www.freeiconspng.com/uploads/healthcare-skull-icon-5.png",className:r.img,alt:"kills"}),Object(N.jsx)(d.a,{children:e.kills})]})]})]})},e.name)}))}),Object(N.jsx)(d.a,{children:"Jury"}),Object(N.jsx)("div",{className:r.gridContainer,children:c&&c.userData.filter((function(e){return!e.alive})).map((function(e){return Object(N.jsx)(F.a,{className:r.paper,children:Object(N.jsxs)("div",{children:[Object(N.jsx)(d.a,{align:"center",children:e.name}),Object(N.jsxs)("div",{className:r.statContainer,children:[Object(N.jsxs)("div",{className:r.statContainer,children:[Object(N.jsx)("img",{src:"https://static.thenounproject.com/png/981735-200.png",className:r.img,alt:"votes"}),Object(N.jsx)(d.a,{children:e.votes})]}),Object(N.jsxs)("div",{className:r.statContainer,children:[Object(N.jsx)("img",{src:"https://www.freeiconspng.com/uploads/healthcare-skull-icon-5.png",className:r.img,alt:"kills"}),Object(N.jsx)(d.a,{children:e.kills})]})]})]})},e.name)}))})]})})}var Ae=Object(P.a)({text:{color:"white"},container:{backgroundColor:"transparent",height:"100%"},paper:{padding:5,margin:5},drawer:{backgroundColor:"slategray"},gridContainer:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)"},statContainer:{display:"flex",flexDirection:"row",placeContent:"space-around"},img:{maxHeight:20,maxWidth:20,alignSelf:"center",placeContent:"center"}}),Be=a(81);function We(){var e=Object(n.useContext)(S).gameState,t=Object(n.useMemo)((function(){return e.ceasefire.active?"Ceasefire Ends In:":"Ceasefire Starts In:"}),[e]),a=(null===e||void 0===e?void 0:e.ceasefire.active)?e.ceasefire.end:e.ceasefire.start;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(d.a,{style:{padding:5,marginLeft:"auto"},children:t}),Object(N.jsx)("div",{style:{padding:5},children:Object(N.jsx)(Be.a,{date:Date.parse(a)})})]})}function _e(){var e=Object(n.useContext)(S).gameState;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(d.a,{style:{padding:5,marginLeft:"auto"},children:"Resupply In:"}),Object(N.jsx)("div",{style:{padding:5},children:Object(N.jsx)(Be.a,{date:Date.parse(e.nextResupplyTime)})})]})}function Je(){var e=Object(n.useContext)(S),t=e.gameState,a=e.isLoading,c=Object(n.useState)(!1),r=Object(o.a)(c,2),i=r[0],s=r[1],u=Object(n.useState)(!1),p=Object(o.a)(u,2),b=p[0],h=p[1],x=Object(n.useState)(!1),O=Object(o.a)(x,2),m=O[0],g=O[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),y=v[0],C=v[1];return Object(N.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[Object(N.jsx)(l.a,{position:"sticky",style:{flex:0},children:Object(N.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(N.jsx)(j.a,{style:{color:"white"},size:"small",onClick:function(){g((function(e){return!e}))},children:Object(N.jsx)(T.a,{})}),(!a||t)&&Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(d.a,{style:{padding:5},children:null===t||void 0===t?void 0:t.player.name}),(null===t||void 0===t?void 0:t.player.alive)?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(d.a,{style:{padding:5},children:["Supply: ",null===t||void 0===t?void 0:t.player.supply]}),Object(N.jsxs)(d.a,{style:{padding:5},children:["Health: ",null===t||void 0===t?void 0:t.player.health]})]}):Object(N.jsxs)(d.a,{style:{padding:5},children:["Votes: ",null===t||void 0===t?void 0:t.player.votes]}),(null===t||void 0===t?void 0:t.player.alive)?"":Object(N.jsx)(d.a,{style:{padding:5},children:"You are dead"})]}),(null===t||void 0===t?void 0:t.nextResupplyTime)&&Object(N.jsx)(_e,{}),(null===t||void 0===t?void 0:t.ceasefire)&&Object(N.jsx)(We,{})]})}),Object(N.jsx)(ze,{isOpen:y,setIsOpen:C}),Object(N.jsx)(Re,{open:m,setIsOpen:g,setIsHistoryOpen:s,setIsJuryOpen:h,setIsStatsOpen:C}),Object(N.jsx)(H,{open:i,setOpen:s}),Object(N.jsx)(ge,{open:b,setOpen:h}),Object(N.jsx)(pe,{})]})}var Ve=a(269);function Ue(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(o.a)(r,2),l=i[0],j=i[1],d=Object(n.useState)(""),u=Object(o.a)(d,2),h=u[0],x=u[1];function O(){return(O=Object(b.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==t.keyCode){e.next=5;break}return e.next=3,f(t.target.value);case 3:e.sent?j(t.target.value):x("Invalid Player ID");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(N.jsxs)("div",{style:{backgroundColor:"lightslategrey",height:"100vh"},children:[Object(N.jsx)(Ve.a,{style:{position:"absolute",top:"50%",transform:"translate(-50%, -50%)"},onSubmit:function(){return console.log("tada")},onKeyDown:function(e){return O.apply(this,arguments)},value:a,onChange:function(e){c(e.target.value)},error:""!==h,helperText:h}),l?Object(N.jsx)(s.a,{to:"".concat(l)}):""]})}function Ge(e){var t=e.children,a=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!0),s=Object(o.a)(i,2),l=s[0],j=s[1];return Object(n.useEffect)((function(){e&&f(e).then((function(e){r(e)})).finally((function(){return j(!1)}))}),[e,r]),{isValidID:c,isLoading:l}}(Object(s.i)().id),c=a.isValidID,r=a.isLoading;return Object(N.jsxs)("div",{children:[!r&&c&&t,!1===c&&!r&&Object(N.jsx)(s.a,{to:"/"}),r&&Object(N.jsx)(K.a,{})]})}function Ke(){var e="https://TankTacticsService.drewcolgin.repl.co/",t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],r=a[1];function i(){return(i=Object(b.a)(p.a.mark((function t(){var a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("".concat(e,"api/generate"));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return(l=Object(b.a)(p.a.mark((function t(a,n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.put("".concat(e,"api/register/").concat(a),{name:n});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){(function(){return i.apply(this,arguments)})().then((function(e){return function(e,t){return l.apply(this,arguments)}(e,e).then((function(){return r(e)}))}))}),[]),Object(N.jsx)("div",{children:c&&Object(N.jsx)(s.a,{to:"/".concat(c)})})}function qe(e){var t=e.children,a=ue(),c=a.params,r=a.updateParams,i=Object(n.useCallback)((function(e){!function(e){console.log(e.code),"KeyD"===e.code?(c.has("darkMode")?c.delete("darkMode"):c.set("darkMode","1"),r()):"KeyR"===e.code&&(c.has("rangeIndicator")?c.delete("rangeIndicator"):c.set("rangeIndicator","1"),r())}(e)}),[c,r]);return Object(n.useEffect)((function(){return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}}),[i]),t}function Ye(){return Object(N.jsx)(i.a,{style:{height:"100%"},basename:"/tank-tactics",children:Object(N.jsxs)(s.d,{style:{height:"100%"},children:[Object(N.jsx)(s.b,{exact:!0,path:"/",style:{height:"100%"},children:Object(N.jsx)(Ue,{})}),Object(N.jsx)(s.b,{exact:!0,path:"/admin",children:Object(N.jsx)(Ke,{})}),Object(N.jsx)(s.b,{exact:!0,path:"/:id",children:Object(N.jsx)(Ge,{children:Object(N.jsx)(C.a,{anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(N.jsx)(D,{children:Object(N.jsx)(Y,{children:Object(N.jsx)(qe,{children:Object(N.jsx)(Je,{})})})})})})})]})})}var Qe=function(){return Object(N.jsx)("div",{className:"App",style:{height:"100%"},children:Object(N.jsx)(Ye,{})})},Xe=a(268),Ze=a(134);Xe.a.addDefaultLocale(Ze),r.a.render(Object(N.jsx)(Qe,{}),document.getElementById("root"))}},[[210,1,2]]]);
//# sourceMappingURL=main.cafcaf7f.chunk.js.map