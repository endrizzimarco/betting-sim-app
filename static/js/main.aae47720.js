(()=>{"use strict";var e={9443:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Y});var n=r(4942),a=r(885),l=r(5004),o=r(2629),i=(0,l.createContext)(),s=function(){return(0,l.useContext)(i)},u=function(e){var t=e.children,r=(0,l.useState)(""),n=(0,a.default)(r,2),s=n[0],u=n[1],d=(0,l.useState)(!1),c=(0,a.default)(d,2),f=c[0],y=c[1],p=(0,l.useState)([{label:"Loading...",value:null}]),b=(0,a.default)(p,2),h=b[0],g=b[1],x=(0,l.useState)(""),j=(0,a.default)(x,2),m=j[0],v=j[1],w=(0,l.useState)(""),S=(0,a.default)(w,2),O=S[0],k=S[1],T=(0,l.useState)(""),C=(0,a.default)(T,2),D=C[0],P=C[1],B=(0,l.useState)("roulette"),L=(0,a.default)(B,2),_=L[0],E=L[1],R=(0,l.useState)("european"),I=(0,a.default)(R,2),M=I[0],F=I[1],U=(0,l.useState)("player"),G=(0,a.default)(U,2),W=G[0],H=G[1],V=(0,l.useState)("no_strategy"),A=(0,a.default)(V,2),N=A[0],z=A[1];return(0,o.jsx)(i.Provider,{value:{form:{strategy:s,showDropDown:f,strategyList:h,bankroll:m,betUnit:O,profitGoal:D,game:_,rouletteType:M,baccaratType:W,blackjackType:N,setStrategy:u,setShowDropDown:y,setStrategyList:g,setBankroll:v,setBetUnit:k,setProfitGoal:P,setGame:E,setRouletteType:F,setBaccaratType:H,setBlackjackType:z},resetFields:function(){u(""),y(!1),v(""),k(""),P(""),E("roulette"),F("european"),H("player"),z("no_strategy")}},children:t})},d=r(6822),c=r(6029),f=r(6792),y=r(9385),p=r(6434),b=r(3358),h=r(4953),g=r(466),x=r(719);const j=f.default.create({page:{flex:1,alignItems:"center",justifyContent:"center",marginHorizontal:10},card:{padding:5},divider:{marginTop:7,marginBottom:15},input:{marginTop:-2,maxWidth:100},row:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"},column:{flexDirection:"column",flexWrap:"wrap"},subtitle:{paddingTop:30}});const m=function(){var e=s().form,t=(0,l.useRef)(null),r=(0,l.useRef)(null);return(0,o.jsxs)(y.default,{children:[(0,o.jsx)(h.default,{variant:"bodyLarge",style:j.subtitle,children:"Session parameters"}),(0,o.jsx)(g.default,{bold:!0,style:j.divider}),(0,o.jsxs)(y.default,{style:j.row,children:[(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{children:"Bankroll"}),(0,o.jsx)(x.default,{dense:!0,mode:"outlined",value:e.bankroll,onChangeText:function(t){return e.setBankroll(t)},keyboardType:"numeric",placeholder:"0",returnKeyType:"next",blurOnSubmit:!1,onSubmitEditing:function(){t.current.focus()},style:j.input})]}),(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{children:"Bet Unit"}),(0,o.jsx)(x.default,{dense:!0,mode:"outlined",value:e.betUnit,onChangeText:function(t){return e.setBetUnit(t)},keyboardType:"numeric",placeholder:"0",returnKeyType:"next",blurOnSubmit:!1,onSubmitEditing:function(){r.current.focus()},ref:t,style:j.input})]}),(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{children:"Profit Goal"}),(0,o.jsx)(x.default,{dense:!0,mode:"outlined",value:e.profitGoal,onChangeText:function(t){return e.setProfitGoal(t)},keyboardType:"numeric",placeholder:"0",ref:r,style:j.input})]})]})]})};var v=r(5729),w=r(2481),S=r(6640);const O=function(e){return e<500?"100%":e<1e3?"50%":e<1500?"33%":"25%"};var k=r(4584),T=r(5861),C=r(9602),D=r(3408),P=function(){var e=(0,T.default)((function*(e){try{var t=yield D.default.get("/",{params:{type:"get_strategies"}});console.log(t);var r=t.data.map((function(e){return{label:e.replace(/_/g," ").replace(/\b\w/g,(function(e){return e.toUpperCase()})),value:e}}));e.setStrategyList(r)}catch(n){console.error("Error calling Lambda:",n)}}));return function(t){return e.apply(this,arguments)}}();const B=function(){var e=s().form;return(0,l.useEffect)((function(){P(e)}),[]),(0,o.jsxs)(y.default,{children:[(0,o.jsx)(h.default,{variant:"bodyLarge",children:" Betting Strategy "}),(0,o.jsx)(g.default,{bold:!0,style:j.divider}),(0,o.jsx)(C.default,{placeholder:"Select a strategy",mode:"outlined",visible:e.showDropDown,showDropDown:function(){return e.setShowDropDown(!0)},onDismiss:function(){return e.setShowDropDown(!1)},value:e.strategy,setValue:e.setStrategy,list:e.strategyList,dropDownItemTextStyle:{color:"#E4DFE3"},dropDownItemStyle:{borderColor:"#E4DFE3",borderWidth:.15,borderRadius:2},dropDownItemSelectedStyle:{borderColor:"#D0BCFF",borderWidth:.4,borderRadius:2}})]})};var L=r(2193),_=function(e){switch(e.game){case"roulette":return"european"==e.rouletteType?2.7.toFixed(2):5.26;case"baccarat":return"player"==e.baccaratType?1.24:1.06;case"blackjack":return"no_strategy"==e.blackjackType?2..toFixed(2):.5.toFixed(2)}},E=function(e){switch(e.game){case"roulette":return(0,o.jsx)(L.default,{value:e.rouletteType,density:"medium",onValueChange:e.setRouletteType,buttons:[{value:"european",label:"European"},{value:"american",label:"American"}]});case"baccarat":return(0,o.jsx)(L.default,{value:e.baccaratType,density:"medium",onValueChange:e.setBaccaratType,buttons:[{value:"player",label:"Player"},{value:"banker",label:"Banker"}]});case"blackjack":return(0,o.jsx)(L.default,{value:e.blackjackType,density:"medium",onValueChange:e.setBlackjackType,buttons:[{value:"no_strategy",label:"Inexperienced"},{value:"strategy",label:"Strategy"}]})}};const R=function(){var e=s().form;return(0,o.jsxs)(y.default,{children:[(0,o.jsx)(h.default,{variant:"bodyLarge",style:j.subtitle,children:"Game"}),(0,o.jsx)(g.default,{bold:!0,style:j.divider}),(0,o.jsxs)(h.default,{style:{marginBottom:10},children:["House edge: ",_(e),"%"]}),(0,o.jsx)(L.default,{value:e.game,onValueChange:e.setGame,style:{marginBottom:10},buttons:[{value:"roulette",label:"Roulette"},{value:"baccarat",label:"Baccarat"},{value:"blackjack",label:"Blackjack"}]}),E(e)]})};const I=function(e){var t=e.startSession,r=(0,l.useState)(null),n=(0,a.default)(r,2),i=n[0],u=n[1],d=s(),c=d.resetFields,f=d.form,y=k.default.get("window").width;return(0,o.jsxs)(w.default,{elevation:2,style:[j.card,{width:O(y)}],children:[(0,o.jsxs)(w.default.Content,{children:[(0,o.jsx)(B,{}),(0,o.jsx)(m,{}),(0,o.jsx)(R,{})]}),(0,o.jsxs)(S.default,{type:"error",visible:i,style:{marginTop:10,marginLeft:5},children:["Select a ",i,"!"]}),(0,o.jsxs)(w.default.Actions,{style:{marginBottom:5},children:[(0,o.jsx)(v.default,{onPress:c,children:"RESET"}),(0,o.jsx)(v.default,{onPress:function(){u(null),""==f.strategy?u("strategy"):""==f.bankroll?u("bankroll"):""==f.betUnit?u("bet unit"):""==f.profitGoal?u("profit goal"):t()},children:"START SESSION"})]})]})};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e){var t=Math.min(100,Math.max(0,e));return"rgb("+Math.round(255-2.55*t)+", "+Math.round(2.55*t)+", 0)"},G={type:"simulate",session_instance:null,won:0,data:{strategy:"labouchere",bankroll:50,bet_unit:5,profit_goal:100}},W={chance:0,round:1,next_bet:5,bankroll:50},H=f.default.create({root:{flex:1,paddingHorizontal:10},centerText:{textAlign:"center"},topRow:{flexDirection:"row",marginTop:40,marginRight:5,justifyContent:"space-between",alignItems:"center"},spinner:{width:70,height:70},metadata:{alignItems:"flex-end"},buttonContent:{paddingVertical:30,paddingHorizontal:45},buttonLabel:{fontSize:20,fontWeight:"bold"},greenBorder:{borderWidth:.5,borderRadius:20,borderColor:"#006400"},redBorder:{borderWidth:.5,borderRadius:20,borderColor:"#8B0000"},gif:{flex:1,resizeMode:"contain",width:void 0,height:void 0},textContainer:{position:"relative"},outlinedText:{fontWeight:"bold",color:"white",textShadowColor:"black",textShadowOffset:{width:-1,height:1},textShadowRadius:.5}});const V=function(){var e=(0,l.useState)(null),t=(0,a.default)(e,2),n=t[0],i=t[1],u=(0,l.useState)(W),d=(0,a.default)(u,2),c=d[0],f=d[1],b=(0,l.useState)(!1),g=(0,a.default)(b,2),x=g[0],m=g[1],S=s().form,C=function(e,t){console.log(e);var r=e.bankroll;return Math.round((t-r)/e.betUnit)}(S,c.bankroll),P=function(){var e=(0,T.default)((function*(e){try{m(!0);var t=F(F({},G),{},{won:e,session_instance:n,data:JSON.stringify(G.data)}),r=yield D.default.get("",{params:t});console.log(r),i(r.data.state),f(r.data.data),m(!1)}catch(a){console.error("Error calling Lambda:",a)}}));return function(t){return e.apply(this,arguments)}}(),B=k.default.get("window").width,L=c.chance.toFixed(2);return(0,o.jsxs)(y.default,{style:[H.root,{width:O(B)}],children:[(0,o.jsxs)(y.default,{style:H.topRow,children:[(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{variant:"headlineSmall",style:H.outlinedText,children:"Current chance"}),(0,o.jsx)(h.default,{variant:"displayLarge",style:F(F({},H.outlinedText),{},{color:U(L)}),children:x?(0,o.jsxs)(y.default,{style:F(F({},j.row),{},{alignItems:"center",marginLeft:3}),children:[(0,o.jsx)(p.default,{style:H.spinner,source:r(4734)}),(0,o.jsx)(h.default,{style:{marginLeft:5},children:" Simulating...."})]}):L+"%"})]}),(0,o.jsxs)(y.default,{style:F(F({},j.column),H.metadata),children:[(0,o.jsx)(h.default,{children:"Session ID: XYZ"}),(0,o.jsx)(h.default,{children:"Duration: 2m"}),(0,o.jsxs)(h.default,{children:["Initial Bankroll: \xa3",S.bankroll]}),(0,o.jsxs)(h.default,{children:["Bet Unit: \xa3",S.betUnit]}),(0,o.jsxs)(h.default,{children:["Profit Goal: \xa3",S.profitGoal]})]})]}),(0,o.jsx)(w.default,{style:{marginTop:20},children:(0,o.jsxs)(w.default.Content,{style:F(F({},j.row),{},{justifyContent:"space-around"}),children:[(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{variant:"bodyLarge",children:"Round"}),(0,o.jsx)(h.default,{variant:"headlineLarge",style:H.centerText,children:c.round})]}),(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{variant:"bodyLarge",children:"Bankroll"}),(0,o.jsxs)(h.default,{variant:"headlineLarge",style:H.centerText,children:["\xa3",c.bankroll]})]}),(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{variant:"bodyLarge",children:"Unit Profit"}),(0,o.jsx)(h.default,{variant:"headlineLarge",style:[H.centerText,{color:C>=0?"green":"red"}],children:C})]}),(0,o.jsxs)(y.default,{style:j.column,children:[(0,o.jsx)(h.default,{variant:"bodyLarge",children:"Next Bet"}),(0,o.jsxs)(h.default,{variant:"headlineLarge",style:H.centerText,children:["\xa3",c.next_bet]})]})]})}),c.progression&&(0,o.jsx)(w.default,{style:{marginVertical:20},children:(0,o.jsxs)(w.default.Content,{children:[(0,o.jsx)(h.default,{variant:"bodyLarge",children:"Progression"}),(0,o.jsx)(h.default,{variant:"headlineMedium",children:c.progression})]})}),(0,o.jsxs)(y.default,{style:F(F({},j.row),{},{marginTop:20}),children:[(0,o.jsx)(v.default,{onPress:function(){return P(1)},disabled:x,mode:"elevated",style:H.greenBorder,contentStyle:H.buttonContent,labelStyle:H.buttonLabel,buttonColor:"#81C784",textColor:"#006400",children:"WON"}),(0,o.jsx)(v.default,{onPress:function(){return P(0)},disabled:x,mode:"elevated",style:H.redBorder,contentStyle:H.buttonContent,labelStyle:H.buttonLabel,buttonColor:"#EF5350",textColor:"#8B0000",children:"LOST"})]}),(0,o.jsx)(p.default,{source:r(1105),style:H.gif})]})};const A=function(){var e=(0,l.useState)(!1),t=(0,a.default)(e,2),r=t[0],n=t[1];return(0,o.jsx)(y.default,{style:j.page,children:!1===r?(0,o.jsx)(I,{startSession:n}):(0,o.jsx)(V,{})})};var N=function(){return(0,o.jsx)(h.default,{children:"History"})};const z=function(){var e=(0,l.useState)(0),t=(0,a.default)(e,2),r=t[0],n=t[1],i=(0,l.useState)([{key:"session",title:"Session",focusedIcon:"slot-machine",unfocusedIcon:"slot-machine-outline"},{key:"optimise",title:"Optimise",focusedIcon:"laptop"},{key:"history",title:"History",focusedIcon:"history"}]),s=(0,a.default)(i,1)[0],u=b.default.SceneMap({session:A,optimise:V,history:N});return(0,o.jsx)(b.default,{navigationState:{index:r,routes:s},onIndexChange:n,renderScene:u,compact:!0,keyboardHidesNavigationBar:!1,sceneAnimationEnabled:!0,sceneAnimationType:"shifting"})};var q=r(3426);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,n.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=J(J({},c.MD3DarkTheme),{},{colors:J(J({},c.MD3DarkTheme.colors),{},{background:"transparent"})});function Y(){return D.default.defaults.baseURL="https://pj3bu6xmsqs3xsfvl5wvltpbtq0hofed.lambda-url.eu-west-1.on.aws/",(0,o.jsx)(d.default,{theme:X,children:(0,o.jsxs)(u,{children:[(0,o.jsx)(q.default,{style:"light",translucent:!0}),(0,o.jsx)(p.default,{source:r(2313),style:Z.container,children:(0,o.jsx)(y.default,{style:Z.overlay,children:(0,o.jsx)(z,{})})})]})})}var Z=f.default.create({container:{flex:1},overlay:{flex:1,backgroundColor:"rgba(0, 0, 0, 0.1)"}})},2313:(e,t,r)=>{e.exports=r.p+"static/media/bg.fdd6e14846e1217d1ef3.jpg"},1105:(e,t,r)=>{e.exports=r.p+"static/media/cheerleader-pom-poms.782f81e231025647cd7a.gif"},4734:(e,t,r)=>{e.exports=r.p+"static/media/spin.56bf5f9d307e76e9d3fe.gif"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,r),l.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,l)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,a,l]=e[d],i=!0,s=0;s<n.length;s++)(!1&l||o>=l)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,l<o&&(o=l));if(i){e.splice(d--,1);var u=a();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,a,l]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var l=Object.create(null);r.r(l);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&n;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>n[e]));return o.default=()=>n,r.d(l,o),l}})(),r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/betting-sim-app/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,l,[o,i,s]=n,u=0;if(o.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var d=s(r)}for(t&&t(n);u<o.length;u++)l=o[u],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[55],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.aae47720.js.map