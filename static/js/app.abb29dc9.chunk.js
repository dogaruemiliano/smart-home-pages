(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{321:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Zt}));var r=n(322),o=n(7),i=n(82),a=n(34),c="#011936",s="#F4FFFD",u="#F9DC5C",l="#ED254E",d="#011936",f="#F7A1B2",p="#EB1E47",j="#ffffbf",b="rgba(0, 0, 0, 0)",g="#EBEBE4",O=n(79),h=n(93),y=n.n(h),m=n(80),x=n(5),w=n.n(x),v=n(22),C=n.n(v);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){return e.token&&e.createdAt+e.expiresIn>Date.now()},L=function(e){return{username:e.username,token:e.access_token,tokenType:e.token_type,refreshToken:e.refresh_token,expiresIn:1e3*e.expires_in,createdAt:1e3*(e.created_at+7200)}},D=function(e,t){var n,r,o,i,a;return C.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n="https://smart-home-dec.herokuapp.com/"+(t?"oauth/token":"users"),c.next=3,C.a.awrap(fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(S(S({},e),{},{client_id:"3X_onJKKrCXR1gldoptCO6xD7jnHL0Qeqw4gN1JjKik",grant_type:"password"}))}));case 3:if((r=c.sent).ok){c.next=10;break}return c.next=7,C.a.awrap(r.json());case 7:throw o=c.sent,console.log(o),new Error("Something went wrong, response not ok");case 10:return c.next=12,C.a.awrap(r.json());case 12:return i=c.sent,a=L(S(S({},t?i:i.user),{},{username:e.username})),c.abrupt("return",a);case 15:case"end":return c.stop()}}),null,null,null,Promise)},T=n(214),E=n(10),I=n(213),z=function(){var e=y()((function*(){var e="web"===E.default.OS?I.default.getItem:T.getItemAsync;try{var t=yield e("authData");if(console.log(t),null!==t)return JSON.parse(t)}catch(n){console.log(n)}return null}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=y()((function*(e){var t="web"===E.default.OS?I.default.setItem:T.setItemAsync,n=JSON.stringify(e);try{yield t("authData",n)}catch(r){return!1}return!0}));return function(t){return e.apply(this,arguments)}}(),R=Object(O.createAsyncThunk)("auth/checkLoginData",y()((function*(){try{return(yield z())||W}catch(e){throw new Error(e)}}))),B=Object(O.createAsyncThunk)("auth/login",function(){var e=y()((function*(e){try{var t=yield function(e){return C.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",D(e,!0));case 1:case"end":return t.stop()}}),null,null,null,Promise)}(e);return yield A(t),t}catch(n){throw new Error(n)}}));return function(t){return e.apply(this,arguments)}}()),F=Object(O.createAsyncThunk)("auth/logout",y()((function*(){A(W)}))),W={username:"",token:"",tokenType:"",refreshToken:"",createdAt:0,expiresIn:0,isLoading:!1},H=Object(O.createSlice)({name:"auth",initialState:W,reducers:{setState:function(e,t){t.payload.token=t.payload.token}},extraReducers:function(e){e.addCase(R.pending,(function(e){e.isLoading=!0})),e.addCase(R.fulfilled,(function(e,t){e.createdAt=t.payload.createdAt,e.expiresIn=t.payload.expiresIn,e.token=t.payload.token,e.refreshToken=t.payload.refreshToken,e.tokenType=t.payload.tokenType,e.isLoading=!1})),e.addCase(R.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(B.pending,(function(e){e.isLoading=!0})),e.addCase(B.fulfilled,(function(e,t){e.createdAt=t.payload.createdAt,e.expiresIn=t.payload.expiresIn,e.token=t.payload.token,e.refreshToken=t.payload.refreshToken,e.tokenType=t.payload.tokenType,A(t.payload),e.isLoading=!1})),e.addCase(B.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(F.fulfilled,(function(e){e.createdAt=W.createdAt,e.expiresIn=W.expiresIn,e.token=W.token,e.refreshToken=W.refreshToken,e.tokenType=W.tokenType})),e.addCase(F.rejected,(function(e,t){m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}])}))}}),M=H.actions.setState,V=H.reducer,N=[{points:[[0,0],[990,0]]},{points:[[0,0],[0,100]]},{points:[[0,100],[270,100]]},{points:[[270,100],[270,260]]},{points:[[270,260],[460,260]]},{points:[[460,470],[460,780]]},{points:[[460,100],[460,400]]},{points:[[370,260],[370,520]]},{points:[[370,520],[460,520]]},{points:[[460,360],[490,360]]},{points:[[550,360],[910,360]]},{points:[[970,360],[990,360]]},{points:[[990,0],[990,780]]},{points:[[460,520],[490,520]]},{points:[[550,520],[830,520]]},{points:[[890,360],[890,520]]},{points:[[870,520],[898,520]]},{points:[[650,520],[650,780]]},{points:[[460,780],[998,780]]}],_=[{properties:{id:"Hall 1",name:"Hall 1",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[0,0],[0,100],[270,0],[270,100]]]}},{properties:{id:"Kitchen",name:"Kitchen",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[270,0],[270,260],[460,0],[460,260]]]}},{properties:{id:"Living",name:"Living",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[460,0],[460,360],[990,0],[990,360]]]}},{properties:{id:"Empty 1",name:"Empty 1",isLightOn:!1,empty:!0},geometry:{type:"Polygon",coordinates:[[[370,260],[370,330],[460,260],[460,330]]]}},{properties:{id:"Bath 1",name:"Bath 1",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[370,330],[370,520],[460,330],[460,520]]]}},{properties:{id:"Hall 2",name:"Hall 2",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[460,360],[460,520],[560,360],[560,520]]]}},{properties:{id:"Empty 2",name:"Empty 2",isLightOn:!1,empty:!0},geometry:{type:"Polygon",coordinates:[[[560,360],[560,520],[650,360],[650,520]]]}},{properties:{id:"Empty 3",name:"Empty 3",isLightOn:!1,empty:!0},geometry:{type:"Polygon",coordinates:[[[650,360],[650,380],[890,360],[890,380]]]}},{properties:{id:"Bath 2",name:"Bath 2",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[650,380],[650,520],[890,380],[890,520]]]}},{properties:{id:"Office",name:"Office",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[460,520],[460,780],[650,520],[650,780]]]}},{properties:{id:"Room",name:"Room",isLightOn:!1,empty:!1},geometry:{type:"Polygon",coordinates:[[[890,360],[890,520],[990,360],[990,520]],[[650,520],[650,780],[990,520],[990,780]]]}}],J=(Object(O.createAsyncThunk)("home/fetchData",(function(){return _})),Object(O.createSlice)({name:"home",initialState:{rooms:[]},reducers:{setState:function(e,t){e.rooms=_},toggleLight:function(e,t){var n=e.rooms.findIndex((function(e){return e.properties.id===t.payload.roomId}));e.rooms[n].properties.isLightOn=!e.rooms[n].properties.isLightOn}},extraReducers:function(e){}})),U=J.actions,K=(U.setState,U.toggleLight),X=J.reducer,Y=["auto","heat","cool","dry","fan"],q=["low","medium","high","auto"],G=function(e){var t,n;switch(e){case"cool":t=19,n=30;break;case"heat":t=17,n=28;break;case"auto":t=17,n=30;break;case"fan":default:return null}return{min:t,max:n}},Q=function(e){return Object(O.createAsyncThunk)("ac/"+e,function(){var t=y()((function*(t){t||console.log(e+" on the server"),console.log(e+" in the state")}));return function(e){return t.apply(this,arguments)}}())},Z=Q("raiseTemperature"),$=Q("lowerTemperature"),ee=Q("turnOn"),te=Q("turnOff"),ne=Q("changeFanSpeed"),re=Q("changeMode"),oe=Object(O.createSlice)({name:"ac",initialState:{isLoading:!0,correctionMode:!1,settings:{power:!1,mode:"cool",temperature:{cool:21,dry:21,heat:28,auto:22,fan:0},fanSpeed:"low"}},reducers:{toggleCorrectionMode:function(e){e.correctionMode=!e.correctionMode}},extraReducers:function(e){e.addCase(ee.pending,(function(e){e.isLoading=!0})),e.addCase(ee.fulfilled,(function(e){e.settings.power=!0,e.isLoading=!1})),e.addCase(ee.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(te.pending,(function(e){e.isLoading=!0})),e.addCase(te.fulfilled,(function(e,t){e.settings.power=!1,e.isLoading=!1})),e.addCase(te.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(Z.pending,(function(e){e.isLoading=!0})),e.addCase(Z.fulfilled,(function(e){var t,n=null==(t=G(e.settings.mode))?void 0:t.max,r=e.settings.temperature[e.settings.mode];n&&r&&r<n&&(e.settings.temperature[e.settings.mode]+=1),e.isLoading=!1})),e.addCase(Z.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase($.pending,(function(e){e.isLoading=!0})),e.addCase($.fulfilled,(function(e){var t,n=null==(t=G(e.settings.mode))?void 0:t.min,r=e.settings.temperature[e.settings.mode];n&&r&&r>n&&(e.settings.temperature[e.settings.mode]-=1),e.isLoading=!1})),e.addCase($.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(ne.pending,(function(e){e.isLoading=!0})),e.addCase(ne.fulfilled,(function(e){var t=q.findIndex((function(t){return t===e.settings.fanSpeed}));e.settings.fanSpeed=q[(t+1)%q.length],e.isLoading=!1})),e.addCase(ne.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1})),e.addCase(re.pending,(function(e){e.isLoading=!0})),e.addCase(re.fulfilled,(function(e){var t=Y.findIndex((function(t){return t===e.settings.mode}));e.settings.mode=Y[(t+1)%Y.length],e.isLoading=!1})),e.addCase(re.rejected,(function(e,t){console.log(t),m.default.alert("There was an error",t.error.message,[{text:"Close",style:"cancel"}]),e.isLoading=!1}))}}),ie=oe.actions.toggleCorrectionMode,ae=oe.reducer,ce=Object(O.configureStore)({reducer:{auth:V,home:X,ac:ae}}),se=n(486),ue=n(479),le=n(0),de=n(11),fe=n.n(de),pe=n(8),je=n(38),be=n(266),ge=n(63),Oe=n(52),he=n(6);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=function(e){var t=e.onPress,n=e.isLoading,r=(e.disabled,e.children),o=e.margin,i=me(me({},we.button),{},{margin:o});return Object(he.jsx)(ge.default,{style:function(e){var t=e.pressed;return[i,t&&we.pressed]},onPress:t,disabled:!!n,children:Object(he.jsx)(pe.default,{children:n?Object(he.jsx)(be.default,{size:"small",color:d}):Object(he.jsx)(Oe.default,{style:we.buttonText,children:r})})})},we=o.default.create({button:{borderRadius:6,paddingVertical:8,paddingHorizontal:12,backgroundColor:c,elevation:2,shadowColor:"black",shadowOffset:{width:1,height:1},shadowOpacity:.25,shadowRadius:4},pressed:{opacity:.7},buttonText:{textAlign:"center",color:s,fontSize:16,fontWeight:"500"}}),ve=n(173);function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(e){var t=e.label,n=e.keyboardType,r=e.secure,o=e.onUpdateValue,i=e.value,a=e.isInvalid;return Object(he.jsxs)(pe.default,{style:ke.inputContainer,children:[Object(he.jsx)(Oe.default,{style:[ke.label,a&&ke.labelInvalid],children:t}),Object(he.jsx)(ve.default,Pe({style:[ke.input,a&&ke.inputInvalid],autoCapitalize:"none",keyboardType:n,secureTextEntry:r,onChangeText:o,value:i},e))]})},ke=o.default.create({inputContainer:{marginVertical:8,borderBottomColor:c,borderBottomWidth:1},label:{color:c,marginBottom:4},labelInvalid:{color:p},input:{paddingVertical:8,paddingHorizontal:6,backgroundColor:s,borderRadius:4,fontSize:16},inputInvalid:{backgroundColor:f}});function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Te=function(e){var t=e.isLogin,n=e.onSubmit,r=e.credentialsInvalid,o=Object(le.useState)({username:"Username#1",password:"admin123@"}),i=fe()(o,2),c=i[0],s=i[1],u=Object(a.useSelector)((function(e){return e.auth.isLoading})),l=r.username,d=r.password,f=function(e,t){s((function(n){return De(De({},n),{},w()({},e,t))}))};return Object(he.jsx)(pe.default,{style:Ee.form,children:Object(he.jsxs)(pe.default,{children:[Object(he.jsx)(Se,{label:"Username",onUpdateValue:function(e){return f("username",e)},value:c.username,isInvalid:l}),Object(he.jsx)(Se,{label:"Password",onUpdateValue:function(e){return f("password",e)},secure:!0,value:c.password,isInvalid:d}),Object(he.jsx)(pe.default,{style:Ee.buttons,children:Object(he.jsx)(xe,{onPress:function(){return C.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n({username:c.username,password:c.password}),e.next=8;break;case 4:throw e.prev=4,e.t0=e.catch(0),console.log(e.t0),new Error(e.t0);case 8:case"end":return e.stop()}}),null,null,[[0,4]],Promise)},isLoading:u,children:t?"Log In":"Sign Up"})})]})})},Ee=o.default.create({form:{},buttons:{marginTop:12}}),Ie=function(e){var t=e.isLogin,n=e.onAuthenticate,r=(Object(je.useNavigation)().navigate,Object(le.useState)({username:!1,password:!1})),o=fe()(r,2),i=o[0],a=o[1];return Object(he.jsx)(pe.default,{style:ze.authContent,children:Object(he.jsx)(Te,{isLogin:t,onSubmit:function(e){var t=e.username,r=e.password;t=t.trim(),r=r.trim();var o=t.length>=3,i=r.length>6;if(!o||!i)return m.default.alert("Invalid input","Please check your entered credentials."),void a({username:!o,password:!i});n({username:t,password:r})},credentialsInvalid:i})})},ze=o.default.create({authContent:{marginTop:64,marginHorizontal:32,padding:16,borderRadius:8,backgroundColor:s,elevation:2,shadowColor:"black",shadowOffset:{width:1,height:1},shadowOpacity:.35,shadowRadius:4},buttons:{marginTop:8}}),Ae=function(e){var t=Object(a.useDispatch)();return Object(he.jsx)(Ie,{isLogin:!0,onAuthenticate:function(e){return C.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:try{t(B(e))}catch(r){console.log(r)}case 1:case"end":return n.stop()}}),null,null,null,Promise)}})},Re=n(268),Be=function(e){var t=e.onPress,n=e.isLoading,r=e.disabled;e.children;return Object(he.jsx)(ge.default,{style:function(e){var t=e.pressed;return[Fe.button,t&&Fe.pressed]},onPress:t,disabled:n||r,children:Object(he.jsx)(Re.default,{name:"user",size:24,color:d})})},Fe=o.default.create({button:{borderRadius:12,borderColor:d,borderWidth:1,elevation:2,shadowColor:"black",shadowOffset:{width:1,height:1},shadowOpacity:.25,shadowRadius:4},pressed:{opacity:.7},buttonText:{textAlign:"center",color:d,fontSize:16,fontWeight:"bold"}}),We=n(59),He=function(e,t,n){return o.default.create({component:{position:"absolute",top:e[0][0]-2,start:e[0][1]-2,width:t,height:n,backgroundColor:d}})},Me=function(e){var t=e.points,n=t[0][0]===t[1][0]&&t[0][1]!==t[1][1],r=n?t[1][1]-t[0][1]+2:4,o=n?4:t[1][0]-t[0][0]+2,i=He(t,r,o);return Object(he.jsx)(pe.default,{style:i.component})};function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _e=function(e){var t=0,n=0;return e.forEach((function(e){return e.geometry.coordinates.forEach((function(e){return e.forEach((function(e){t<e[0]&&(t=e[0]),n<e[1]&&(n=e[1])}))}))})),{maxX:t,maxY:n}},Je=function(e,t){return function(e,t){var n=_e(t),r=n.maxX,o=n.maxY;return t.map((function(t){var n=t.geometry.coordinates.map((function(t){return t.map((function(t,n){return[(t[0]-r/2)/e+1*n,(t[1]-o/2)/e+1*n]}))}));return Ne(Ne({},t),{},{geometry:{type:t.geometry.type,coordinates:n}})}))}(2.1,e)},Ue=function(e,t,n){return function(e,t,n){var r=_e(n),o=r.maxX,i=r.maxY;return t.map((function(t,n){return{points:t.points.map((function(t){return[(t[0]-o/2)/e+0*n,(t[1]-i/2)/e+0*n]}))}}))}(n,e,t)},Ke=(o.default.create({component:{}}),function(e){return Object(he.jsx)(he.Fragment,{children:Ue(N,_,2.1).map((function(e){return Object(he.jsx)(Me,{points:e.points},""+e.points[0][0]+e.points[0][1]+e.points[1][0]+e.points[1][1])}))})});function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qe=function(e){var t=Math.abs(e[0][0]-e[2][0]),n=Math.abs(e[0][1]-e[1][1]);return o.default.create({polygon:{width:n,height:t}}).polygon},Ge=o.default.create({component:{justifyContent:"center",alignItems:"center"},label:{color:d,fontSize:8}}),Qe=function(e){var t,n=Object(a.useDispatch)(),r=e.coordinates,i=e.properties,s=Object(a.useSelector)((function(e){var t;return!(null==(t=e.home.rooms.find((function(e){return e.properties.id===i.id})))||!t.properties.isLightOn)})),u=s?j:void 0;return u=i.empty?d:u,Object(he.jsx)(ge.default,{onPress:function(){i.empty||n(K({roomId:i.id}))},style:(t=r,o.default.create({polygon:{position:"absolute",top:t[0][0],start:t[0][1]}}).polygon),children:Object(he.jsx)(pe.default,{style:Ye(Ye(Ye({},qe(r)),Ge.component),{},{backgroundColor:u}),children:Object(he.jsx)(Oe.default,{style:Ye(Ye({},Ge.label),{},{color:s?c:d}),children:i.name})})})},Ze=(o.default.create({component:{}}),function(e){return Object(he.jsx)(he.Fragment,{children:Je(_).map((function(e){return e.geometry.coordinates.map((function(t,n){return Object(he.jsx)(Qe,{coordinates:t,properties:e.properties},e.properties.name+n)}))}))})}),$e=o.default.create({component:{flex:1,justifyContent:"center",alignItems:"center"},imageContainer:{position:"absolute",end:"10%",top:"10%",height:150,width:150},image:{height:150,width:150}}),et=function(e){var t=Object(je.useNavigation)().navigate;return Object(he.jsxs)(pe.default,{style:$e.component,children:[Object(he.jsx)(ge.default,{onPress:function(){return t("AcRemote")},style:$e.imageContainer,children:Object(he.jsx)(We.default,{source:n(369),style:$e.image})}),Object(he.jsxs)(pe.default,{children:[Object(he.jsx)(Ze,{}),Object(he.jsx)(Ke,{})]})]})},tt=o.default.create({rootContainer:{flex:1},title:{fontSize:20,fontWeight:"bold",marginBottom:8},imageContainer:{height:50,width:50,backgroundColor:"pink"},image:{height:50,width:50}}),nt=function(e){var t=e.navigation;return Object(le.useLayoutEffect)((function(){t.setOptions({headerRight:function(){return Object(he.jsx)(Be,{onPress:function(){return t.navigate("Profile")}})}})}),[t]),Object(he.jsx)(pe.default,{style:tt.rootContainer,children:Object(he.jsx)(et,{})})},rt=o.default.create({screen:{flex:1,justifyContent:"center",alignItems:"center"}}),ot=function(e){e.navigation;var t=Object(a.useDispatch)();return Object(he.jsx)(pe.default,{style:rt.screen,children:Object(he.jsx)(xe,{onPress:function(){return t(F())},children:"Logout"})})},it=n(476),at=o.default.create({component:{paddingHorizontal:11}}),ct=function(e){var t=Object(a.useDispatch)(),n=Object(a.useSelector)((function(e){return e.ac.correctionMode}));return Object(he.jsx)(ge.default,{onPress:function(){return t(ie())},style:at.component,children:Object(he.jsx)(it.default,{name:n?"ios-settings":"ios-settings-outline",size:24,color:s})})},st=function(e){return o.default.create({component:{width:112,height:64,borderRadius:8,justifyContent:"center",alignItems:"center",backgroundColor:e?b:s,outlineStyle:"none",shadowRadius:8,shadowOpacity:e?0:.4,shadowOffset:{height:4,width:0},elevation:e?0:1}}).component},ut=function(e){var t=e.children,n=e.dispatchAction,r=e.empty,o=Object(a.useDispatch)(),i=Object(a.useSelector)((function(e){return e.ac.correctionMode}));return Object(he.jsx)(ge.default,{onPress:function(){o(n(i))},onLongPress:function(){o(n(!0))},style:st(r),children:t})},lt=n(487),dt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:ne,empty:!t,children:Object(he.jsx)(lt.default,{name:"fan",size:48,color:d})})},ft=n(477),pt=o.default.create({text:{color:d,fontWeight:"bold"},mainContainer:{flexDirection:"column",flex:1,width:"100%",justifyContent:"space-around"},topContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center"},bottomContainer:{flexDirection:"row",justifyContent:"center",alignItems:"center"},icon:{marginHorizontal:2}}),jt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:re,empty:!t,children:Object(he.jsxs)(pe.default,{style:pt.mainContainer,children:[Object(he.jsxs)(pe.default,{style:pt.topContainer,children:[Object(he.jsx)(lt.default,{name:"snowflake",size:18,color:d,style:pt.icon}),Object(he.jsx)(it.default,{name:"water",size:18,color:d,style:pt.icon}),Object(he.jsx)(lt.default,{name:"fan",size:18,color:d,style:pt.icon})]}),Object(he.jsxs)(pe.default,{style:pt.bottomContainer,children:[Object(he.jsx)(lt.default,{name:"sun",size:18,color:d,style:pt.icon}),Object(he.jsx)(ft.default,{name:"brightness-auto",size:18,color:d,style:pt.icon})]})]})})},bt=o.default.create({image:{height:48,width:48}}),gt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:t?te:ee,children:t?Object(he.jsx)(We.default,{source:n(372),style:bt.image}):Object(he.jsx)(We.default,{source:n(373),style:bt.image})})};function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ht(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ot(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var yt=o.default.create({arrow:{width:0,height:0,borderStartWidth:16,borderStartColor:"rgba(0, 0, 0, 0)",borderEndWidth:16,borderEndColor:"rgba(0, 0, 0, 0)",borderBottomWidth:16,borderBottomColor:d},up:{transform:[{rotate:"0deg"}]},down:{transform:[{rotate:"180deg"}]}}),mt=function(e){var t=e.direction;return Object(he.jsx)(pe.default,{style:ht(ht({},yt.arrow),yt[t])})},xt=o.default.create({imageContainer:{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",paddingLeft:12},image:{height:48,width:48,marginLeft:8}}),wt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:$,empty:!t,children:Object(he.jsxs)(pe.default,{style:xt.imageContainer,children:[Object(he.jsx)(mt,{direction:"down"}),Object(he.jsx)(We.default,{source:n(374),style:xt.image})]})})},vt=o.default.create({imageContainer:{flex:1,justifyContent:"center",alignItems:"center",flexDirection:"row",paddingLeft:12},image:{height:48,width:48,marginLeft:8}}),Ct=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(ut,{dispatchAction:Z,empty:!t,children:Object(he.jsxs)(pe.default,{style:vt.imageContainer,children:[Object(he.jsx)(mt,{direction:"up"}),Object(he.jsx)(We.default,{source:n(375),style:vt.image})]})})},Pt=o.default.create({buttons:{flexDirection:"row",width:"100%",height:"55%",paddingVertical:32},powerButtonContainer:{flexDirection:"row-reverse",width:"100%",height:"55%"},buttonsColumn:{flexDirection:"column",flex:1,alignItems:"center",justifyContent:"space-between"},emptySpace:{width:128,height:64}}),St=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(he.jsx)(he.Fragment,{children:Object(he.jsx)(pe.default,{style:Pt.buttons,children:Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(pe.default,{style:Pt.buttonsColumn,children:t&&Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Ct,{}),Object(he.jsx)(wt,{}),Object(he.jsx)(jt,{})]})}),Object(he.jsxs)(pe.default,{style:Pt.buttonsColumn,children:[Object(he.jsx)(gt,{}),t&&Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(dt,{}),Object(he.jsx)(pe.default,{style:Pt.emptySpace})]})]})]})})})},kt=o.default.create({component:{flexDirection:"row",justifyContent:"flex-start"},generalText:{fontWeight:"bold"},temperatureText:{fontSize:128},units:{fontSize:32,fontWeight:"bold"}}),Lt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.temperature[e.ac.settings.mode]})),n=Object(a.useSelector)((function(e){return e.ac.settings.mode})),r=Object(le.useState)({}),o=fe()(r,2),i=o[0],c=o[1];return Object(le.useEffect)((function(){c(["fan"===n?{color:g}:{color:d}])}),[n]),Object(he.jsxs)(pe.default,{style:kt.component,children:[Object(he.jsx)(Oe.default,{style:[kt.generalText,kt.temperatureText,i],children:"fan"===n?"N/A":t}),Object(he.jsx)(Oe.default,{style:[kt.generalText,kt.units,i],children:"fan"!==n&&"\xb0C"})]})},Dt=n(478),Tt=o.default.create({component:{flexDirection:"row",height:"100%",alignItems:"flex-end"},text:{color:d},icon:{margin:5}}),Et=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.fanSpeed}));return"auto"===t?Object(he.jsx)(pe.default,{style:Tt.component,children:Object(he.jsx)(Dt.default,{name:"fan-auto",size:32,color:d,style:Tt.icon})}):Object(he.jsxs)(pe.default,{style:Tt.component,children:[Object(he.jsx)(pe.default,{children:Object(he.jsx)(lt.default,{name:"fan",size:16,color:d,style:Tt.icon})}),("medium"===t||"high"===t)&&Object(he.jsx)(pe.default,{children:Object(he.jsx)(lt.default,{name:"fan",size:24,color:d,style:Tt.icon})}),"high"===t&&Object(he.jsx)(pe.default,{children:Object(he.jsx)(lt.default,{name:"fan",size:32,color:d,style:Tt.icon})})]})},It=o.default.create({component:{flexDirection:"column",justifyContent:"space-between",alignItems:"center"}}),zt=function(e){var t=Object(a.useSelector)((function(e){return e.ac.settings.mode}));return Object(he.jsxs)(pe.default,{style:It.component,children:["cool"===t&&Object(he.jsx)(lt.default,{name:"snowflake",size:32,color:d}),"dry"===t&&Object(he.jsx)(it.default,{name:"water",size:32,color:d}),"fan"===t&&Object(he.jsx)(lt.default,{name:"fan",size:32,color:d}),"heat"===t&&Object(he.jsx)(lt.default,{name:"sun",size:32,color:d}),"auto"===t&&Object(he.jsx)(ft.default,{name:"brightness-auto",size:32,color:d})]})},At=o.default.create({component:{flex:1,width:"100%",padding:32,justifyContent:"center",alignItems:"center",backgroundColor:s,borderRadius:8,shadowColor:"black",shadowRadius:8,shadowOpacity:.4,shadowOffset:{height:4,width:0},elevation:1},bottomBar:{width:"100%",height:42,marginTop:32,justifyContent:"space-between",flexDirection:"row"},offText:{fontSize:32,color:d},infoText:{fontSize:18,fontWeight:"bold",textAlignVertical:"center",color:u}}),Rt=function(e){var t=Object(a.useSelector)((function(e){return e.ac}));return Object(he.jsx)(pe.default,{style:At.component,children:t.settings.power?Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Lt,{}),Object(he.jsxs)(pe.default,{style:At.bottomBar,children:[Object(he.jsx)(Et,{}),t.correctionMode&&Object(he.jsx)(Oe.default,{style:At.infoText,children:"CORRECTION MODE!"}),Object(he.jsx)(zt,{})]})]}):Object(he.jsx)(Oe.default,{style:At.offText,children:"Turn me on, baby!"})})},Bt=o.default.create({component:{flex:1,marginHorizontal:"6%",marginVertical:"12%",justifyContent:"center",alignItems:"center"},display:{flexDirection:"row",width:"100%",height:"35%",borderWidth:1,borderColor:"white"}}),Ft=function(e){return Object(he.jsxs)(pe.default,{style:Bt.component,children:[Object(he.jsx)(Rt,{}),Object(he.jsx)(St,{})]})},Wt=(o.default.create({component:{}}),function(e){var t=e.navigation,n=Object(a.useSelector)((function(e){return e.ac.settings.power}));return Object(le.useLayoutEffect)((function(){t.setOptions({headerRight:function(){return n&&Object(he.jsx)(ct,{})}})}),[n,t]),Object(he.jsx)(Ft,{})}),Ht=n(480),Mt=n(294),Vt=n(293),Nt=n(296),_t=n(310);function Jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ut(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Jt(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Kt=Object(ue.default)(),Xt=Object(Ht.default)(),Yt=function(){return Object(he.jsx)(Kt.Navigator,{screenOptions:{headerStyle:{backgroundColor:c},headerTintColor:d,headerShadowVisible:!1,contentStyle:{backgroundColor:c}},children:Object(he.jsx)(Kt.Screen,{name:"Login",component:Ae})})},qt=function(e){return Object(he.jsxs)(Mt.default,{children:[Object(he.jsx)(Vt.default,Ut({},e)),Object(he.jsx)(Nt.default,{label:"Logout",inactiveTintColor:l,onPress:function(){return console.log("LOGOUT")}})]})},Gt=function(){return Object(he.jsxs)(Xt.Navigator,{screenOptions:{headerStyle:{backgroundColor:c},headerShadowVisible:!1,headerTintColor:d,drawerContentStyle:{backgroundColor:s},sceneContainerStyle:{backgroundColor:c},headerLeft:function(){return Object(he.jsx)(_t.default,{tintColor:s})}},drawerContent:function(e){return Object(he.jsx)(qt,Ut({},e))},children:[Object(he.jsx)(Xt.Screen,{name:"Home",component:nt}),Object(he.jsx)(Xt.Screen,{name:"Air Conditioner",component:Wt}),Object(he.jsx)(Xt.Screen,{name:"Profile",component:ot})]})},Qt=function(){var e=Object(a.useDispatch)(),t=Object(a.useSelector)((function(e){return k(e.auth)}));!function(){var e=y()((function*(){var e=yield z();console.log("authData in navigation",e),e&&e.token&&(k(e)?M(e):console.log("Calling refresh function because token is expired"))}))}();return Object(le.useLayoutEffect)((function(){e(R())}),[]),Object(he.jsx)(se.default,{children:t?Object(he.jsx)(Gt,{}):Object(he.jsx)(Yt,{})})};function Zt(){return Object(he.jsxs)(i.SafeAreaProvider,{children:[Object(he.jsx)(r.StatusBar,{style:"light"}),Object(he.jsx)(a.Provider,{store:ce,children:Object(he.jsx)(Qt,{})})]})}o.default.create({container:{flex:1,backgroundColor:c,color:d}})},330:function(e,t,n){e.exports=n(460)},369:function(e,t,n){e.exports=n.p+"static/media/air-conditioner-colored.f53f3bbe.png"},372:function(e,t,n){e.exports=n.p+"static/media/off.a5b38215.png"},373:function(e,t,n){e.exports=n.p+"static/media/on.c7cf9c21.png"},374:function(e,t,n){e.exports=n.p+"static/media/cold.28e49a1b.png"},375:function(e,t,n){e.exports=n.p+"static/media/hot.a3bc03ae.png"}},[[330,1,2]]]);
//# sourceMappingURL=app.abb29dc9.chunk.js.map