webpackJsonp([1],{20:function(r,t,e){"use strict";function o(r){e(22)}Object.defineProperty(t,"__esModule",{value:!0});var n=e(24),i=e(25),a=e(2),c=o,s=a(n.a,i.a,!1,c,null,null);t.default=s.exports},22:function(r,t,e){var o=e(23);"string"==typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);e(19)("44642612",o,!0)},23:function(r,t,e){t=r.exports=e(18)(void 0),t.push([r.i,".error-page .error-code{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card{border-radius:2px;margin-top:-50px;width:80vw;max-width:600px;padding:25px}.error-page .error-card>i{font-size:5rem}",""])},24:function(r,t,e){"use strict";var o=e(1);t.a={components:{QBtn:o.a,QIcon:o.b},data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},25:function(r,t,e){"use strict";var o=function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("div",{staticClass:"error-page window-height window-width bg-light column items-center no-wrap"},[e("div",{staticClass:"error-code bg-primary flex items-center justify-center"},[r._v("\n    404\n  ")]),r._v(" "),e("div",[e("div",{staticClass:"error-card shadow-4 bg-white column items-center justify-center no-wrap"},[e("q-icon",{attrs:{name:"error_outline",color:"grey-5"}}),r._v(" "),e("p",{staticClass:"caption text-center"},[r._v("Oops. Nothing here...")]),r._v(" "),e("p",{staticClass:"text-center group"},[r.canGoBack?e("q-btn",{attrs:{color:"primary",push:"",icon:"keyboard_arrow_left"},on:{click:r.goBack}},[r._v("\n          Go back\n        ")]):r._e(),r._v(" "),e("q-btn",{attrs:{color:"primary",push:"","icon-right":"home"},on:{click:function(t){r.$router.replace("/")}}},[r._v("\n          Go home\n        ")])],1)],1)])])},n=[],i={render:o,staticRenderFns:n};t.a=i}});