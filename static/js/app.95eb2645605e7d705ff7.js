webpackJsonp([1],{CdCN:function(t,e){},HhR9:function(t,e){},J2xx:function(t,e){},NHnr:function(t,e,a){"use strict";function s(t){a("WEje")}function r(t){a("J2xx")}function i(t){a("CdCN")}function n(t){a("HhR9")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),l={data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"LOVE",route:"/"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vue me and I vue you"}},methods:{goTo:function(t){this.$router.replace(t||"/")}},computed:{menuItems:function(){return console.log("Routes ",this.$router.options.routes),this.$router.options.routes.filter(function(t){return void 0===t.redirect&&!0===t.meta.menu})}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-navigation-drawer",{attrs:{fixed:"","mini-variant":t.miniVariant,clipped:t.clipped,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,function(e,s){return a("v-list-tile",{key:s,attrs:{value:"true"},on:{click:function(a){t.goTo(e.route)}}},[a("v-list-tile-action",[a("v-icon",{attrs:{dark:""},domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),t._v(" "),a("v-list",t._l(t.menuItems,function(e,s){return a("v-list-tile",{key:s,attrs:{value:"true"},on:{click:function(a){t.goTo(e.path)}}},[a("v-list-tile-action",[e.meta.icon?a("v-icon",{attrs:{dark:""},domProps:{innerHTML:t._s(e.meta.icon)}}):t._e()],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.name)}})],1)],1)}))],1),t._v(" "),a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[a("v-icon",{domProps:{innerHTML:t._s(t.miniVariant?"chevron_right":"chevron_left")}})],1),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[a("v-icon",[t._v("web")])],1),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[a("v-icon",[t._v("remove")])],1),t._v(" "),a("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[a("v-icon",[t._v("menu")])],1)],1),t._v(" "),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("router-view")],1)],1)],1)],1),t._v(" "),a("v-navigation-drawer",{attrs:{temporary:"",fixed:"",right:t.right,app:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[a("v-list",[a("v-list-tile",{nativeOn:{click:function(e){t.right=!t.right}}},[a("v-list-tile-action",[a("v-icon",{attrs:{dark:""}},[t._v("compare_arrows")])],1),t._v(" "),a("v-list-tile-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),a("v-footer",{attrs:{fixed:t.fixed,app:""}},[a("span",[t._v("© 2017")])])],1)},u=[],v={render:c,staticRenderFns:u},d=v,p=a("VU/8"),m=p(l,d,!1,null,null,null),f=m.exports,g=a("/ocq"),h=a("Sazm"),_=a.n(h),x={name:"HelloWorld",data:function(){return{user:{}}},methods:{logout:function(){var t=this;_.a.auth().signOut().then(function(){t.$router.replace("login")})}},created:function(){var t=this,e=_.a.auth().currentUser;_.a.database().ref("/users/"+e.uid).once("value").then(function(e){t.user=e.val()||"NOBODY"})}},b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",{attrs:{col12:""}},[a("v-card-title",[t._v("\n          "+t._s(t.user.username)+"\n        ")]),t._v(" "),a("v-card-text",[t._v("\n          "+t._s(t.user.email)+"\n        ")]),t._v(" "),a("v-card-actions",[a("v-btn",{staticClass:"primary",on:{click:t.logout}},[t._v("Log ut")])],1)],1)],1)],1)],1)},k=[],w={render:b,staticRenderFns:k},y=w,C=a("VU/8"),E=s,D=C(x,y,!1,E,"data-v-52d33719",null),L=D.exports,$={name:"Login",data:function(){return{v1:!0,user:{name:"",password:"",email:""}}},methods:{login:function(t){var e=this;_.a.auth().signInWithEmailAndPassword(this.user.email,this.user.password).then(function(t){console.log(t),e.$router.replace("hello")},function(t){console.error(t.message)})}}},P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"login"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("Epost")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{name:"email",label:"Skriv epostadressen din"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("Passord")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{name:"password",label:"Skriv passordet ditt",min:"8","append-icon":t.v1?"visibility":"visibility_off","append-icon-cb":function(){return t.v1=!t.v1},type:t.v1?"password":"text"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)],1),t._v(" "),a("v-layout",{staticClass:"text-xs-center",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.login(e)}}},[t._v("Log på")])],1)],1),t._v(" "),a("v-layout",{staticClass:"text-xs-center",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{flat:"",color:"primary",href:"#/signup"}},[t._v("Eller registrer deg her")])],1)],1)],1)],1)],1)},A=[],S={render:P,staticRenderFns:A},T=S,V=a("VU/8"),U=r,R=V($,T,!1,U,null,null),j=R.exports,M={name:"SignUp",data:function(){return{v1:!0,v2:!0,user:{name:"",email:"",password:"",password2:""},matchPassword:!1}},methods:{signUp:function(){var t=this;_.a.auth().createUserWithEmailAndPassword(this.user.email,this.user.password).then(function(e){t.$router.replace("hello")},function(t){console.log(t)})}}},H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"login"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("Navn")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{name:"name",label:"Skriv navnet ditt"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("Epost")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{name:"email",label:"Skriv epostadressen din"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("Passord")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{name:"password",label:"Skriv passordet ditt",min:"8","append-icon":t.v1?"visibility":"visibility_off","append-icon-cb":function(){return t.v1=!t.v1},type:t.v1?"password":"text"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-subheader",[t._v("Bekreft Passord")])],1),t._v(" "),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{name:"password",label:"Gjenta passordet ditt",min:"8","append-icon":t.v2?"visibility":"visibility_off","append-icon-cb":function(){return t.v2=!t.v2},type:t.v2?"password":"text",rules:[function(){return t.user.password===t.user.password2||"Passord er ikke like"}]},model:{value:t.user.password2,callback:function(e){t.$set(t.user,"password2",e)},expression:"user.password2"}})],1)],1),t._v(" "),a("v-layout",{staticClass:"text-xs-center",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"primary"},on:{click:t.signUp}},[t._v("Registrer deg")])],1)],1),t._v(" "),a("v-layout",{staticClass:"text-xs-center",attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{flat:"",color:"primary",href:"#/login"}},[t._v("Eller gå til log inn")])],1)],1)],1)],1)],1)},N=[],W={render:H,staticRenderFns:N},q=W,I=a("VU/8"),B=i,O=I(M,q,!1,B,null,null),z=O.exports,F=a("DAYN"),J=a.n(F),G={name:"ListTest",components:{VueDraggable:J.a},methods:{startDrag:function(t){this.isDragging=!0},endDrag:function(t){this.isDragging=!1},onMove:function(t){}},data:function(){return{items:[],items2:[],items3:[],options:{group:"tall",draggable:".item",sort:!1},isDragging:!1}},created:function(){for(var t=0;t<10;t++)this.items.push(t)},mounted:function(){var t=this.$el;console.log("ELEMENT",t);var e=t.querySelectorAll(".list-ul span");console.log(e),e.forEach(function(t){t.addEventListener("dragover",function(t){t.target.classList.add("highlight")}),t.addEventListener("dragend",function(){event.target.classList.contains("highlight")&&event.target.classList.remove("highlight")}),t.addEventListener("drop",function(){event.target.classList.contains("highlight")&&event.target.classList.remove("highlight")}),t.addEventListener("dragleave",function(){event.target.classList.contains("highlight")&&event.target.classList.remove("highlight")})})}},K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-test"},[a("div",{staticClass:"list list1"},[a("vue-draggable",{staticClass:"list-ul",class:{highlight:t.isDragging},attrs:{move:t.onMove,options:t.options,element:"ul"},on:{start:t.startDrag,end:t.endDrag},model:{value:t.items,callback:function(e){t.items=e},expression:"items"}},[a("transition-group",t._l(t.items,function(e,s){return a("li",{key:s,staticClass:"item"},[t._v(t._s(e))])}))],1)],1),t._v(" "),a("div",{staticClass:"list list2"},[a("vue-draggable",{staticClass:"list-ul",class:{highlight:t.isDragging},attrs:{move:t.onMove,options:{group:"tall"}},on:{start:t.startDrag,end:t.endDrag},model:{value:t.items2,callback:function(e){t.items2=e},expression:"items2"}},[a("transition-group",t._l(t.items2,function(e,s){return a("div",{key:s,staticClass:"item li"},[t._v(t._s(e))])}))],1),t._v(" "),t._m(0,!1,!1)],1),t._v(" "),a("div",{staticClass:"list list3"},[a("vue-draggable",{staticClass:"list-ul",class:{highlight:t.isDragging},attrs:{move:t.onMove,options:{group:"tall"}},on:{start:t.startDrag,end:t.endDrag},model:{value:t.items3,callback:function(e){t.items3=e},expression:"items3"}},[a("transition-group",t._l(t.items3,function(e,s){return a("div",{key:s,staticClass:"item li"},[t._v(t._s(e))])}))],1),t._v(" "),t._m(1,!1,!1)],1)])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"solid"},[a("a",{attrs:{href:"#/hello"}},[t._v("TEST")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"solid"},[a("a",{attrs:{href:"#/hello"}},[t._v("TEST")])])}],Y={render:K,staticRenderFns:Q},X=Y,Z=a("VU/8"),tt=n,et=Z(G,X,!1,tt,null,null),at=et.exports;o.a.use(g.a);var st=new g.a({routes:[{path:"*",redirect:"/login"},{path:"/",redirect:"/login"},{path:"/hello",name:"HelloWorld",component:L,meta:{requireAuth:!0,icon:"language",menu:!0}},{path:"/login",name:"Login",component:j,meta:{requireAuth:!1,icon:"lock",menu:!0}},{path:"/signup",name:"SignUp",component:z,meta:{requireAuth:!1,icon:"person_add",menu:!1}},{path:"/list",name:"ListTest",component:at,meta:{requireAuth:!0,icon:"view_list",menu:!0}}]});st.beforeEach(function(t,e,a){var s=_.a.auth().currentUser,r=t.matched.some(function(t){return t.meta.requireAuth});r&&!s?a("login"):!r&&s?a("hello"):a()});var rt=st,it=a("3EgV"),nt=a.n(it),ot=(a("QCv7"),{apiKey:"AIzaSyB2DRgBWrMAEA2Le9nhWNfpzfBVwLvTUGk",authDomain:"kajakkpadler.firebaseapp.com",databaseURL:"https://kajakkpadler.firebaseio.com",projectId:"kajakkpadler",storageBucket:"kajakkpadler.appspot.com",messagingSenderId:"711276345265"}),lt={config:ot};o.a.use(nt.a),o.a.config.productionTip=!1;var ct=void 0;_.a.initializeApp(lt.config);var ut=_.a.initializeApp(lt.config,"Kajakkpadler");console.log(ut.name),_.a.auth().onAuthStateChanged(function(t){ct||(ct=new o.a({el:"#app",router:rt,template:"<App/>",components:{App:f}}))})},QCv7:function(t,e){},WEje:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.95eb2645605e7d705ff7.js.map