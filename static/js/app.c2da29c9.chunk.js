(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{322:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Zt}));var r=n(323),o=n(7),c=n(82),a=n(34),i=n(190),s="#011936",u="#F4FFFD",l="#F9DC5C",d="#ED254E",f="#011936",p="#F7A1B2",j="#EB1E47",b="#ffffbf",g="rgba(0, 0, 0, 0)",O="#EBEBE4",h=n(80),m=n(79),y=n.n(m),x=n(90),w=n(5),v=n.n(w),C=n(22),P=n.n(C);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){return{username:e.username,token:e.access_token,tokenType:e.token_type,refreshToken:e.refresh_token,expiresIn:1e3*e.expires_in,createdAt:1e3*(e.created_at+7200)}},D=function(e,t){var n,r,o,c,a;return P.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n="https://smart-home-dec.herokuapp.com/"+(t?"oauth/token":"users"),i.next=3,P.a.awrap(fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k(k({},e),{},{client_id:"cM4aXYQfMj6rJK1CMZOAsqP1BveXQT40AtdFzU3tRU0",grant_type:"password"}))}));case 3:if((r=i.sent).ok){i.next=10;break}return i.next=7,P.a.awrap(r.json());case 7:throw o=i.sent,console.log(o),new Error("Something went wrong, response not ok");case 10:return i.next=12,P.a.awrap(r.json());case 12:return c=i.sent,a=L(k(k({},t?c:c.user),{},{username:e.username})),i.abrupt("return",a);case 15:case"end":return i.stop()}}),null,null,null,Promise)},T=n(215),E=n(10),I=n(214),A=function(){var e=y()((function*(){var e="web"===E.default.OS?I.default.getItem:T.getItemAsync;try{var t=yield e("authData");if(console.log(t),null!==t)return JSON.parse(t)}catch(n){console.log(n)}return null}));return function(){return e.apply(this,arguments)}}(),z=function(){var e=y()((function*(e){var t="web"===E.default.OS?I.default.setItem:T.setItemAsync,n=JSON.stringify(e);try{yield t("authData",n)}catch(r){return!1}return!0}));return function(t){return e.apply(this,arguments)}}(),R=Object(h.createAsyncThunk)("auth/checkLoginData",y()((function*(){try{return(yield A())||M}catch(e){throw new Error(e)}}))),B=Object(h.createAsyncThunk)("auth/login",function(){var e=y()((function*(e){try{var t=yield function(e){return P.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",D(e,!0));case 1:case"end":return t.stop()}}),null,null,null,Promise)}(e);return yield z(t),t}catch(n){throw new Error(n)}}));return function(t){return e.apply(this,arguments)}}()),F=Object(h.createAsyncThunk)("auth/logout",y()((function*(){z(M)}))),M={username:"",token:"",tokenType:"",refreshToken:"",createdAt:0,expiresIn:0,isLoading:!1},W=Object(h.createSlice)({name:"auth",initialState:M,reducers:{setState:function(e,t){t.payload.token=t.payload.token}},extraReducers:function(e){e.addCase(R.pending,(function(e){e.isLoading=!0})),e.addCase(R.fulfilled,(function(e,t){e.createdAt=t.payload.createdAt,e.expiresIn=t.payload.expiresIn,e.token=t.payload.token,e.refreshToken=t.payload.refreshToken,e.tokenType=t.payload.tokenType,e.isLoading=!1})),e.addCase(R.rejected,(function(e,t){console.log(t),x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(B.pending,(function(e){e.isLoading=!0})),e.addCase(B.fulfilled,(function(e,t){e.createdAt=t.payload.createdAt,e.expiresIn=t.payload.expiresIn,e.token=t.payload.token,e.refreshToken=t.payload.refreshToken,e.tokenType=t.payload.tokenType,z(t.payload),e.isLoading=!1})),e.addCase(B.rejected,(function(e,t){console.log(t),x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(F.fulfilled,(function(e){e.createdAt=M.createdAt,e.expiresIn=M.expiresIn,e.token=M.token,e.refreshToken=M.refreshToken,e.tokenType=M.tokenType})),e.addCase(F.rejected,(function(e,t){x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}])}))}}),H=(W.actions.setState,W.reducer),V=[{points:[[0,0],[990,0]]},{points:[[0,0],[0,100]]},{points:[[0,100],[270,100]]},{points:[[270,100],[270,260]]},{points:[[270,260],[460,260]]},{points:[[460,470],[460,780]]},{points:[[460,100],[460,400]]},{points:[[370,260],[370,520]]},{points:[[370,520],[460,520]]},{points:[[460,360],[490,360]]},{points:[[550,360],[910,360]]},{points:[[970,360],[990,360]]},{points:[[990,0],[990,780]]},{points:[[460,520],[490,520]]},{points:[[550,520],[830,520]]},{points:[[890,360],[890,520]]},{points:[[870,520],[898,520]]},{points:[[650,520],[650,780]]},{points:[[460,780],[998,780]]}],N=[{properties:{id:"Hall 1",name:"Hall 1",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[0,0],[0,100],[270,0],[270,100]]]}},{properties:{id:"Kitchen",name:"Kitchen",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[270,0],[270,260],[460,0],[460,260]]]}},{properties:{id:"Living",name:"Living",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[460,0],[460,360],[990,0],[990,360]]]}},{properties:{id:"Empty 1",name:"Empty 1",isLightOn:!1,empty:!0},geometry:{type:"Polygon",coordinates:[[[370,260],[370,330],[460,260],[460,330]]]}},{properties:{id:"Bath 1",name:"Bath 1",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[370,330],[370,520],[460,330],[460,520]]]}},{properties:{id:"Hall 2",name:"Hall 2",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[460,360],[460,520],[560,360],[560,520]]]}},{properties:{id:"Empty 2",name:"Empty 2",isLightOn:!1,empty:!0},geometry:{type:"Polygon",coordinates:[[[560,360],[560,520],[650,360],[650,520]]]}},{properties:{id:"Empty 3",name:"Empty 3",isLightOn:!1,empty:!0},geometry:{type:"Polygon",coordinates:[[[650,360],[650,380],[890,360],[890,380]]]}},{properties:{id:"Bath 2",name:"Bath 2",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[650,380],[650,520],[890,380],[890,520]]]}},{properties:{id:"Office",name:"Office",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[460,520],[460,780],[650,520],[650,780]]]}},{properties:{id:"Room",name:"Room",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[890,360],[890,520],[990,360],[990,520]],[[650,520],[650,780],[990,520],[990,780]]]}}],U=(Object(h.createAsyncThunk)("home/fetchData",(function(){return N})),Object(h.createSlice)({name:"home",initialState:{rooms:[]},reducers:{setState:function(e,t){e.rooms=N},toggleLight:function(e,t){var n=e.rooms.findIndex((function(e){return e.properties.id===t.payload.roomId}));e.rooms[n].properties.isLightOn=!e.rooms[n].properties.isLightOn}},extraReducers:function(e){}})),J=U.actions,_=(J.setState,J.toggleLight),X=U.reducer,Y=["auto","heat","cool","dry","fan"],K=["low","medium","high","auto"],Q=function(e){var t,n;switch(e){case"cool":t=19,n=30;break;case"heat":t=17,n=28;break;case"auto":t=17,n=30;break;case"fan":default:return null}return{min:t,max:n}},q=function(e){return Object(h.createAsyncThunk)("ac/"+e,function(){var t=y()((function*(t){console.log(e+" in the state")}));return function(e){return t.apply(this,arguments)}}())},G=q("raiseTemperature"),Z=q("lowerTemperature"),$=q("togglePower"),ee=q("changeFanSpeed"),te=q("changeMode"),ne=Object(h.createSlice)({name:"ac",initialState:{isLoading:!0,correctionMode:!1,settings:{power:!1,mode:"cool",temperatures:{cool:21,dry:21,heat:28,auto:22,fan:0},fanSpeed:"low"}},reducers:{toggleCorrectionMode:function(e){e.correctionMode=!e.correctionMode},methodFromReducer:function(e,t){console.log("payload",t.payload);var n=t.payload;e.settings.power=n.power,e.settings.mode=n.mode,e.settings.fanSpeed=n.fanSpeed,e.settings.temperatures=n.temperatures}},extraReducers:function(e){e.addCase($.pending,(function(e){e.isLoading=!0})),e.addCase($.fulfilled,(function(e,t){e.settings.power=!e.settings.power,e.isLoading=!1})),e.addCase($.rejected,(function(e,t){console.log(t),x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(G.pending,(function(e){e.isLoading=!0})),e.addCase(G.fulfilled,(function(e){var t,n=null==(t=Q(e.settings.mode))?void 0:t.max,r=e.settings.temperatures[e.settings.mode];n&&r&&r<n&&(e.settings.temperatures[e.settings.mode]+=1),e.isLoading=!1})),e.addCase(G.rejected,(function(e,t){console.log(t),x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(Z.pending,(function(e){e.isLoading=!0})),e.addCase(Z.fulfilled,(function(e){var t,n=null==(t=Q(e.settings.mode))?void 0:t.min,r=e.settings.temperatures[e.settings.mode];n&&r&&r>n&&(e.settings.temperatures[e.settings.mode]-=1),e.isLoading=!1})),e.addCase(Z.rejected,(function(e,t){console.log(t),x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(ee.pending,(function(e){e.isLoading=!0})),e.addCase(ee.fulfilled,(function(e){var t=K.findIndex((function(t){return t===e.settings.fanSpeed}));e.settings.fanSpeed=K[(t+1)%K.length],e.isLoading=!1})),e.addCase(ee.rejected,(function(e,t){console.log(t),x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(te.pending,(function(e){e.isLoading=!0})),e.addCase(te.fulfilled,(function(e){var t=Y.findIndex((function(t){return t===e.settings.mode}));e.settings.mode=Y[(t+1)%Y.length],e.isLoading=!1})),e.addCase(te.rejected,(function(e,t){console.log(t),x.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1}))}}),re=ne.actions,oe=re.toggleCorrectionMode,ce=re.methodFromReducer,ae=ne.reducer,ie=Object(h.configureStore)({reducer:{auth:H,home:X,ac:ae}}),se=n(11),ue=n.n(se),le=n(487),de=n(480),fe=n(0),pe=n(8),je=n(38),be=n(267),ge=n(63),Oe=n(52),he=n(6);function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=function(e){var t=e.onPress,n=e.isLoading,r=(e.disabled,e.children),o=e.margin,c=ye(ye({},we.button),{},{margin:o});return Object(he.jsx)(ge.default,{style:function(e){var t=e.pressed;return[c,t&&we.pressed]},onPress:t,disabled:!!n,children:Object(he.jsx)(pe.default,{children:n?Object(he.jsx)(be.default,{size:"small",color:f}):Object(he.jsx)(Oe.default,{style:we.buttonText,children:r})})})},we=o.default.create({button:{borderRadius:6,paddingVertical:8,paddingHorizontal:12,backgroundColor:s,elevation:2,shadowColor:"black",shadowOffset:{width:1,height:1},shadowOpacity:.25,shadowRadius:4},pressed:{opacity:.7},buttonText:{textAlign:"center",color:u,fontSize:16,fontWeight:"500"}}),ve=n(173);function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(e){var t=e.label,n=e.keyboardType,r=e.secure,o=e.onUpdateValue,c=e.value,a=e.isInvalid;return Object(he.jsxs)(pe.default,{style:ke.inputContainer,children:[Object(he.jsx)(Oe.default,{style:[ke.label,a&&ke.labelInvalid],children:t}),Object(he.jsx)(ve.default,Pe({style:[ke.input,a&&ke.inputInvalid],autoCapitalize:"none",keyboardType:n,secureTextEntry:r,onChangeText:o,value:c},e))]})},ke=o.default.create({inputContainer:{marginVertical:8,borderBottomColor:s,borderBottomWidth:1},label:{color:s,marginBottom:4},labelInvalid:{color:j},input:{paddingVertical:8,paddingHorizontal:6,backgroundColor:u,borderRadius:4,fontSize:16},inputInvalid:{backgroundColor:p}});function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te=function(e){var t=e.isLogin,n=e.onSubmit,r=e.credentialsInvalid,o=Object(fe.useState)({username:"Username#1",password:"admin123@"}),c=ue()(o,2),i=c[0],s=c[1],u=Object(a.useSelector)((function(e){return e.auth.isLoading})),l=r.username,d=r.password,f=function(e,t){s((function(n){return De(De({},n),{},v()({},e,t))}))};return Object(he.jsx)(pe.default,{style:Ee.form,children:Object(he.jsxs)(pe.default,{children:[Object(he.jsx)(Se,{label:"Username",onUpdateValue:function(e){return f("username",e)},value:i.username,isInvalid:l}),Object(he.jsx)(Se,{label:"Password",onUpdateValue:function(e){return f("password",e)},secure:!0,value:i.password,isInvalid:d}),Object(he.jsx)(pe.default,{style:Ee.buttons,children:Object(he.jsx)(xe,{onPress:function(){return P.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n({username:i.username,password:i.password}),e.next=8;break;case 4:throw e.prev=4,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 8:case"end":return e.stop()}}),null,null,[[0,4]],Promise)},isLoading:u,children:t?"Log In":"Sign Up"})})]})})},Ee=o.default.create({form:{},buttons:{marginTop:12}}),Ie=function(e){var t=e.isLogin,n=e.onAuthenticate,r=(Object(je.useNavigation)().navigate,Object(fe.useState)({username:!1,password:!1})),o=ue()(r,2),c=o[0],a=o[1];return Object(he.jsx)(pe.default,{style:Ae.authContent,children:Object(he.jsx)(Te,{isLogin:t,onSubmit:function(e){var t=e.username,r=e.password;t=t.trim(),r=r.trim();var o=t.length>=3,c=r.length>6;if(!o||!c)return x.default.alert("Invalid input","Please check your entered credentials."),void a({username:!o,password:!c});n({username:t,password:r})},credentialsInvalid:c})})},Ae=o.default.create({authContent:{marginTop:64,marginHorizontal:32,padding:16,borderRadius:8,backgroundColor:u,elevation:2,shadowColor:"black",shadowOffset:{width:1,height:1},shadowOpacity:.35,shadowRadius:4},buttons:{marginTop:8}}),ze=function(e){var t=Object(a.useDispatch)();return Object(he.jsx)(Ie,{isLogin:!0,onAuthenticate:function(e){return P.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:try{t(B(e))}catch(r){console.log(r)}case 1:case"end":return n.stop()}}),null,null,null,Promise)}})},Re=n(269),Be=function(e){var t=e.onPress,n=e.isLoading,r=e.disabled;e.children;return Object(he.jsx)(ge.default,{style:function(e){var t=e.pressed;return[Fe.button,t&&Fe.pressed]},onPress:t,disabled:n||r,children:Object(he.jsx)(Re.default,{name:"user",size:24,color:f})})},Fe=o.default.create({button:{borderRadius:12,borderColor:f,borderWidth:1,elevation:2,shadowColor:"black",shadowOffset:{width:1,height:1},shadowOpacity:.25,shadowRadius:4},pressed:{opacity:.7},buttonText:{textAlign:"center",color:f,fontSize:16,fontWeight:"bold"}}),Me=n(60),We=function(e,t,n){return o.default.create({component:{position:"absolute",top:e[0][0]-2,start:e[0][1]-2,width:t,height:n,backgroundColor:f}})},He=function(e){var t=e.points,n=t[0][0]===t[1][0]&&t[0][1]!==t[1][1],r=n?t[1][1]-t[0][1]+2:4,o=n?4:t[1][0]-t[0][0]+2,c=We(t,r,o);return Object(he.jsx)(pe.default,{style:c.component})};function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ue=function(e){var t=0,n=0;return e.forEach((function(e){return e.geometry.coordinates.forEach((function(e){return e.forEach((function(e){t<e[0]&&(t=e[0]),n<e[1]&&(n=e[1])}))}))})),{maxX:t,maxY:n}},Je=function(e,t){return function(e,t){var n=Ue(t),r=n.maxX,o=n.maxY;return t.map((function(t){var n=t.geometry.coordinates.map((function(t){return t.map((function(t,n){return[(t[0]-r/2)/e+1*n,(t[1]-o/2)/e+1*n]}))}));return Ne(Ne({},t),{},{geometry:{type:t.geometry.type,coordinates:n}})}))}(2.1,e)},_e=function(e,t,n){return function(e,t,n){var r=Ue(n),o=r.maxX,c=r.maxY;return t.map((function(t,n){return{points:t.points.map((function(t){return[(t[0]-o/2)/e+0*n,(t[1]-c/2)/e+0*n]}))}}))}(n,e,t)},Xe=(o.default.create({component:{}}),function(e){return Object(he.jsx)(he.Fragment,{children:_e(V,N,2.1).map((function(e){return Object(he.jsx)(He,{points:e.points},""+e.points[0][0]+e.points[0][1]+e.points[1][0]+e.points[1][1])}))})});function Ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ye(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Qe=function(e){var t=Math.abs(e[0][0]-e[2][0]),n=Math.abs(e[0][1]-e[1][1]);return o.default.create({polygon:{width:n,height:t}}).polygon},qe=o.default.create({component:{justifyContent:"center",alignItems:"center"},label:{color:f,fontSize:8}}),Ge=function(e){var t,n=Object(a.useDispatch)(),r=e.coordinates,c=e.properties,i=Object(a.useSelector)((function(e){var t;return!(null==(t=e.home.rooms.find((function(e){return e.properties.id===c.id})))||!t.properties.isLightOn)})),u=i?b:void 0;return u=c.empty?f:u,Object(he.jsx)(ge.default,{onPress:function(){c.empty||n(_({roomId:c.id}))},style:(t=r,o.default.create({polygon:{position:"absolute",top:t[0][0],start:t[0][1]}}).polygon),children:Object(he.jsx)(pe.default,{style:Ke(Ke(Ke({},Qe(r)),qe.component),{},{backgroundColor:u}),children:Object(he.jsx)(Oe.default,{style:Ke(Ke({},qe.label),{},{color:i?s:f}),children:c.name})})})},Ze=(o.default.create({component:{}}),function(e){return Object(he.jsx)(he.Fragment,{children:Je(N).map((function(e){return e.geometry.coordinates.map((function(t,n){return Object(he.jsx)(Ge,{coordinates:t,properties:e.properties},e.properties.name+n)}))}))})}),$e=o.default.create({component:{flex:1,justifyContent:"center",alignItems:"center"},imageContainer:{position:"absolute",end:"10%",top:"10%",height:150,width:150},image:{height:150,width:150}}),et=function(e){var t=Object(je.useNavigation)().navigate;return Object(he.jsxs)(pe.default,{style:$e.component,children:[Object(he.jsx)(ge.default,{onPress:function(){return t("AcRemote")},style:$e.imageContainer,children:Object(he.jsx)(Me.default,{source:n(370),style:$e.image})}),Object(he.jsxs)(pe.default,{children:[Object(he.jsx)(Ze,{}),Object(he.jsx)(Xe,{})]})]})},tt=o.default.create({rootContainer:{flex:1},title:{fontSize:20,fontWeight:"bold",marginBottom:8},imageContainer:{height:50,width:50,backgroundColor:"pink"},image:{height:50,width:50}}),nt=function(e){var t=e.navigation;return Object(fe.useLayoutEffect)((function(){t.setOptions({headerRight:function(){return Object(he.jsx)(Be,{onPress:function(){return t.navigate("Profile")}})}})}),[t]),Object(he.jsx)(pe.default,{style:tt.rootContainer,children:Object(he.jsx)(et,{})})},rt=o.default.create({screen:{flex:1,justifyContent:"center",alignItems:"center"}}),ot=function(e){e.navigation;var t=Object(a.useDispatch)();return Object(he.jsx)(pe.default,{style:rt.screen,children:Object(he.jsx)(xe,{onPress:function(){return t(F())},children:"Logout"})})},ct=n(477),at=o.default.create({component:{paddingHorizontal:11}}),it=function(e){var t=Object(a.useDispatch)(),n=Object(a.useSelector)((function(e){return e.ac.correctionMode}));return Object(he.jsx)(ge.default,{onPress:function(){return t(oe())},style:at.component,children:Object(he.jsx)(ct.default,{name:n?"ios-settings":"ios-settings-outline",size:24,color:u})})},st=function(e){return o.default.create({component:{width:112,height:64,borderRadius:8,justifyContent:"center",alignItems:"center",backgroundColor:e?g:u,outlineStyle:"none",shadowRadius:8,shadowOpacity:e?0:.4,shadowOffset:{height:4,width:0},elevation:e?0:1}}).component},ut=function(e){var t=e.children,n=e.dispatchAction,r=e.empty,o=Object(a.useDispatch)(),c=Object(a.useSelector)((function(e){return e.ac.correctionMode}));return Object(he.jsx)(ge.default,{onPress:function(){o(n(c))},onLongPress:function(){o(n(!0))},style:st(r),children:t})},lt=n(488),dt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:ee,empty:!t,children:Object(he.jsx)(lt.default,{name:"fan",size:48,color:f})})},ft=n(478),pt=o.default.create({text:{color:f,fontWeight:"bold"},mainContainer:{flexDirection:"column",flex:1,width:"100%",justifyContent:"space-around"},topContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center"},bottomContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center"},icon:{marginHorizontal:2}}),jt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:te,empty:!t,children:Object(he.jsxs)(pe.default,{style:pt.mainContainer,children:[Object(he.jsxs)(pe.default,{style:pt.topContainer,children:[Object(he.jsx)(lt.default,{name:"snowflake",size:18,color:f,style:pt.icon}),Object(he.jsx)(ct.default,{name:"water",size:18,color:f,style:pt.icon}),Object(he.jsx)(lt.default,{name:"fan",size:18,color:f,style:pt.icon})]}),Object(he.jsxs)(pe.default,{style:pt.bottomContainer,children:[Object(he.jsx)(lt.default,{name:"sun",size:18,color:f,style:pt.icon}),Object(he.jsx)(ft.default,{name:"brightness-auto",size:18,color:f,style:pt.icon})]})]})})},bt=o.default.create({image:{height:48,width:48}}),gt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:$,children:t?Object(he.jsx)(Me.default,{source:n(373),style:bt.image}):Object(he.jsx)(Me.default,{source:n(374),style:bt.image})})};function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ht(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ot(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var mt=o.default.create({arrow:{width:0,height:0,borderStartWidth:16,borderStartColor:"rgba(0, 0, 0, 0)",borderEndWidth:16,borderEndColor:"rgba(0, 0, 0, 0)",borderBottomWidth:16,borderBottomColor:f},up:{transform:[{rotate:"0deg"}]},down:{transform:[{rotate:"180deg"}]}}),yt=function(e){var t=e.direction;return Object(he.jsx)(pe.default,{style:ht(ht({},mt.arrow),mt[t])})},xt=o.default.create({imageContainer:{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",paddingLeft:12},image:{height:48,width:48,marginLeft:8}}),wt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:Z,empty:!t,children:Object(he.jsxs)(pe.default,{style:xt.imageContainer,children:[Object(he.jsx)(yt,{direction:"down"}),Object(he.jsx)(Me.default,{source:n(375),style:xt.image})]})})},vt=o.default.create({imageContainer:{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",paddingLeft:12},image:{height:48,width:48,marginLeft:8}}),Ct=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:G,empty:!t,children:Object(he.jsxs)(pe.default,{style:vt.imageContainer,children:[Object(he.jsx)(yt,{direction:"up"}),Object(he.jsx)(Me.default,{source:n(376),style:vt.image})]})})},Pt=o.default.create({buttons:{flexDirection:"row",width:"100%",height:"55%",paddingVertical:32},powerButtonContainer:{flexDirection:"row-reverse",width:"100%",height:"55%"},buttonsColumn:{flexDirection:"column",flex:1,alignItems:"center",justifyContent:"space-between"},emptySpace:{width:128,height:64}}),St=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(he.Fragment,{children:Object(he.jsx)(pe.default,{style:Pt.buttons,children:Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(pe.default,{style:Pt.buttonsColumn,children:t&&Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Ct,{}),Object(he.jsx)(wt,{}),Object(he.jsx)(jt,{})]})}),Object(he.jsxs)(pe.default,{style:Pt.buttonsColumn,children:[Object(he.jsx)(gt,{}),t&&Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(dt,{}),Object(he.jsx)(pe.default,{style:Pt.emptySpace})]})]})]})})})},kt=o.default.create({component:{flexDirection:"row",justifyContent:"flex-start"},generalText:{fontWeight:"bold"},temperatureText:{fontSize:128},units:{fontSize:32,fontWeight:"bold"}}),Lt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.temperatures[e.ac.settings.mode]})),n=Object(a.useSelector)((function(e){return e.ac.settings.mode})),r=Object(fe.useState)({}),o=ue()(r,2),c=o[0],i=o[1];return Object(fe.useEffect)((function(){i(["fan"===n?{color:O}:{color:f}])}),[n]),Object(he.jsxs)(pe.default,{style:kt.component,children:[Object(he.jsx)(Oe.default,{style:[kt.generalText,kt.temperatureText,c],children:"fan"===n?"N/A":t}),Object(he.jsx)(Oe.default,{style:[kt.generalText,kt.units,c],children:"fan"!==n&&"\xb0C"})]})},Dt=n(479),Tt=o.default.create({component:{flexDirection:"row",height:"100%",alignItems:"flex-end"},text:{color:f},icon:{margin:5}}),Et=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.fanSpeed}));return"auto"===t?Object(he.jsx)(pe.default,{style:Tt.component,children:Object(he.jsx)(Dt.default,{name:"fan-auto",size:32,color:f,style:Tt.icon})}):Object(he.jsxs)(pe.default,{style:Tt.component,children:[Object(he.jsx)(pe.default,{children:Object(he.jsx)(lt.default,{name:"fan",size:16,color:f,style:Tt.icon})}),("medium"===t||"high"===t)&&Object(he.jsx)(pe.default,{children:Object(he.jsx)(lt.default,{name:"fan",size:24,color:f,style:Tt.icon})}),"high"===t&&Object(he.jsx)(pe.default,{children:Object(he.jsx)(lt.default,{name:"fan",size:32,color:f,style:Tt.icon})})]})},It=o.default.create({component:{flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}),At=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.mode}));return Object(he.jsxs)(pe.default,{style:It.component,children:["cool"===t&&Object(he.jsx)(lt.default,{name:"snowflake",size:32,color:f}),"dry"===t&&Object(he.jsx)(ct.default,{name:"water",size:32,color:f}),"fan"===t&&Object(he.jsx)(lt.default,{name:"fan",size:32,color:f}),"heat"===t&&Object(he.jsx)(lt.default,{name:"sun",size:32,color:f}),"auto"===t&&Object(he.jsx)(ft.default,{name:"brightness-auto",size:32,color:f})]})},zt=o.default.create({component:{flex:1,width:"100%",padding:32,justifyContent:"center",alignItems:"center",backgroundColor:u,borderRadius:8,shadowColor:"black",shadowRadius:8,shadowOpacity:.4,shadowOffset:{height:4,width:0},elevation:1},bottomBar:{width:"100%",height:42,marginTop:32,justifyContent:"space-between",flexDirection:"row"},offText:{fontSize:32,color:f},infoText:{fontSize:18,fontWeight:"bold",textAlignVertical:"center",color:l}}),Rt=function(e){var t=Object(a.useSelector)((function(e){return e.ac}));return Object(he.jsx)(pe.default,{style:zt.component,children:t.settings.power?Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Lt,{}),Object(he.jsxs)(pe.default,{style:zt.bottomBar,children:[Object(he.jsx)(Et,{}),t.correctionMode&&Object(he.jsx)(Oe.default,{style:zt.infoText,children:"CORRECTION MODE!"}),Object(he.jsx)(At,{})]})]}):Object(he.jsx)(Oe.default,{style:zt.offText,children:"Turn me on, baby!"})})},Bt=o.default.create({component:{flex:1,marginHorizontal:"6%",marginVertical:"12%",justifyContent:"center",alignItems:"center"},display:{flexDirection:"row",width:"100%",height:"35%",borderWidth:1,borderColor:"white"}}),Ft=function(e){return Object(he.jsxs)(pe.default,{style:Bt.component,children:[Object(he.jsx)(Rt,{}),Object(he.jsx)(St,{})]})},Mt=(o.default.create({component:{}}),function(e){var t=e.navigation,n=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(fe.useLayoutEffect)((function(){t.setOptions({headerRight:function(){return n&&Object(he.jsx)(it,{})}})}),[n,t]),Object(he.jsx)(Ft,{})}),Wt=n(481),Ht=n(295),Vt=n(294),Nt=n(297),Ut=n(311);function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _t(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Jt(Object(n),!0).forEach((function(t){v()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Xt=Object(de.default)(),Yt=Object(Wt.default)(),Kt=function(){return Object(he.jsx)(Xt.Navigator,{screenOptions:{headerStyle:{backgroundColor:s},headerTintColor:f,headerShadowVisible:!1,contentStyle:{backgroundColor:s}},children:Object(he.jsx)(Xt.Screen,{name:"Login",component:ze})})},Qt=function(e){return Object(he.jsxs)(Ht.default,{children:[Object(he.jsx)(Vt.default,_t({},e)),Object(he.jsx)(Nt.default,{label:"Logout",inactiveTintColor:d,onPress:function(){return console.log("LOGOUT")}})]})},qt=function(){return Object(he.jsxs)(Yt.Navigator,{screenOptions:{headerStyle:{backgroundColor:s},headerShadowVisible:!1,headerTintColor:f,drawerContentStyle:{backgroundColor:u},sceneContainerStyle:{backgroundColor:s},headerLeft:function(){return Object(he.jsx)(Ut.default,{tintColor:u})}},drawerContent:function(e){return Object(he.jsx)(Qt,_t({},e))},children:[Object(he.jsx)(Yt.Screen,{name:"Air Conditioner",component:Mt}),Object(he.jsx)(Yt.Screen,{name:"Home",component:nt}),Object(he.jsx)(Yt.Screen,{name:"Profile",component:ot})]})},Gt=function(){var e=Object(a.useDispatch)(),t=Object(fe.useState)(!1),n=ue()(t,2),r=n[0],o=n[1],c=Object(fe.useRef)(new WebSocket("rediss://:p62df3b83168720303eeb439f01a7e24880531fc1af86e69aeab500a2ccb093e4@ec2-52-86-129-199.compute-1.amazonaws.com:9860/cable/")).current,s=Object(a.useSelector)((function(e){return(t=e.auth).token&&t.createdAt+t.expiresIn>Date.now();var t}));return Object(fe.useLayoutEffect)((function(){(function(){var t=y()((function*(){yield e(R()),o(!0),Object(i.hideAsync)()}));return function(){return t.apply(this,arguments)}})()()}),[]),Object(fe.useEffect)((function(){c.onopen=function(){console.log("connected"),c.send('{"command":"subscribe","identifier": "{\\"channel\\":\\"AirConditionerChannel\\"}"}')},c.onmessage=function(t){var n,r=JSON.parse(t.data);console.log(r),null!=(n=r.message)&&n.state&&(console.log("passed if check"),e(ce(r.message.state)))},c.onerror=function(e){console.log(e)},c.onclose=function(e){console.log(e.code,e.reason)}}),[]),r?Object(he.jsx)(le.default,{children:s?Object(he.jsx)(qt,{}):Object(he.jsx)(Kt,{})}):null};function Zt(){return Object(he.jsxs)(c.SafeAreaProvider,{children:[Object(he.jsx)(r.StatusBar,{style:"light"}),Object(he.jsx)(a.Provider,{store:ie,children:Object(he.jsx)(Gt,{})})]})}Object(i.preventAutoHideAsync)();o.default.create({container:{flex:1,backgroundColor:s,color:f}})},331:function(e,t,n){e.exports=n(461)},370:function(e,t,n){e.exports=n.p+"static/media/air-conditioner-colored.f53f3bbe.png"},373:function(e,t,n){e.exports=n.p+"static/media/off.a5b38215.png"},374:function(e,t,n){e.exports=n.p+"static/media/on.c7cf9c21.png"},375:function(e,t,n){e.exports=n.p+"static/media/cold.28e49a1b.png"},376:function(e,t,n){e.exports=n.p+"static/media/hot.a3bc03ae.png"}},[[331,1,2]]]);
//# sourceMappingURL=app.c2da29c9.chunk.js.map