webpackJsonp([0],{21:function(t,e,n){"use strict";function i(t){n(26)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(28),r=n(31),a=n(2),s=i,l=a(o.a,r.a,!1,s,null,null);e.default=l.exports},26:function(t,e,n){var i=n(27);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(19)("6ce44174",i,!0)},27:function(t,e,n){e=t.exports=n(18)(void 0),e.push([t.i,".list-wrapper{background:#eaeaea;margin:0 4px;padding:8px}.list-wrapper p{padding:0 1px;color:#483f3f;font-family:Roboto;font-weight:400;display:inline-block;width:250px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis}.list-complete-item{padding:8px;background:#fff;margin-top:10px;height:80px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 0 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:3px;transition:all .36s}.list-complete-enter,.list-complete-leave-active{opacity:0}.drag-wrapper{overflow-x:scroll;padding:8px 0;-ms-flex-wrap:unset;flex-wrap:unset}.drag-area{height:calc(100vh - 50px);max-height:calc(100vh - 125px);width:250px;overflow-y:scroll}.drag-area .list-complete-item:first-child{margin:0}.drag-area span{display:block;height:100%}",""])},28:function(t,e,n){"use strict";var i=n(1),o=n(29),r=n.n(o);e.a={name:"index",data:function(){return{lists:[{validation:!0,title:"List 1",data:[{name:"111111",valid:!1},{name:"2222222",valid:!1},{name:"33333333",valid:!1}]},{validation:!0,title:"List 2",data:[{name:"444444444",valid:!1}]}]}},computed:{},components:{Draggable:r.a,QLayout:i.f,QToolbar:i.h,QToolbarTitle:i.i,QBtn:i.a,QIcon:i.b,QList:i.g,QItem:i.c,QItemSide:i.e,QItemMain:i.d},methods:{added:function(t){console.log(t)}},mounted:function(){},beforeDestroy:function(){}}},29:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){var i=0===n?t.children[0]:t.children[n-1].nextSibling;t.insertBefore(e,i)}function r(t,e){return t.map(function(t){return t.elm}).indexOf(e)}function a(t,e,n){if(!t)return[];var o=t.map(function(t){return t.elm}),r=[].concat(i(e)).map(function(t){return o.indexOf(t)});return n?r.filter(function(t){return-1!==t}):r}function s(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}function l(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),s.call(e,t,n)}}var c=["Start","Add","Remove","Update","End"],d=["Choose","Sort","Filter","Clone"],u=["Move"].concat(c,d).map(function(t){return"on"+t}),h=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null}},data:function(){return{transitionMode:!1,componentMode:!1}},render:function(t){var e=this.$slots.default;if(e&&1===e.length){var n=e[0];n.componentOptions&&"transition-group"===n.componentOptions.tag&&(this.transitionMode=!0)}var o=e,r=this.$slots.footer;return r&&(o=e?[].concat(i(e),i(r)):[].concat(i(r))),t(this.element,null,o)},mounted:function(){var e=this;if(this.componentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.componentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};c.forEach(function(t){n["on"+t]=l.call(e,t)}),d.forEach(function(t){n["on"+t]=s.bind(e,t)});var i=o({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in i)&&(i.draggable=">*"),this._sortable=new t(this.rootContainer,i),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==u.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.componentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=a(t.getChildrenNodes(),t.rootContainer.children,t.transitionMode)})},getUnderlyingVm:function(t){var e=r(this.getChildrenNodes()||[],t);return-1===e?null:{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(i(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var r=i.realList,a={list:r,component:i};if(e!==n&&r&&i.getUnderlyingVm){var s=i.getUnderlyingVm(n);if(s)return o(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),h=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)return void e(t.clone);var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(i(e.to.children)).filter(function(t){return"none"!==t.style.display}),o=n.indexOf(e.related),r=t.component.getVmIndex(o);return-1==n.indexOf(h)&&e.willInsertAfter?r+1:r},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var i=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(i,t);return o(r,{futureIndex:a}),o(t,{relatedContext:i,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),h=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var r=n(30);t.exports=e(r)}()},30:function(t,e,n){var i,o;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(r){"use strict";i=r,void 0!==(o="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=o)}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=_({},e),t[j]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}};for(var i in n)!(i in e)&&(e[i]=n[i]);at(e);for(var o in this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&Z,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),r(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),ot.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),T&&T.state!==e&&(l(T,"display",e?"none":""),e||T.state&&(t.options.group.revertClone?(E.insertBefore(T,S),t._animate(D,T)):E.insertBefore(T,D)),T.state=e)}function n(t,e,n){if(t){n=n||H;do{if(">*"===e&&t.parentNode===n||m(t,e))return t}while(t=i(t))}return null}function i(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function o(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function r(t,e,n){t.addEventListener(e,n,J)}function a(t,e,n){t.removeEventListener(e,n,J)}function s(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(Q," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(Q," ")}}function l(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return H.defaultView&&H.defaultView.getComputedStyle?n=H.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function c(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,r,a){t=t||e[j];var s=H.createEvent("Event"),l=t.options,c="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=T,s.oldIndex=r,s.newIndex=a,e.dispatchEvent(s),l[c]&&l[c].call(t,s)}function u(t,e,n,i,o,r,a,s){var l,c,d=t[j],u=d.options.onMove;return l=H.createEvent("Event"),l.initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function h(t){t.draggable=!1}function f(){tt=!1}function p(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return e.clientY-(i.top+i.height)>5||e.clientX-(i.left+i.width)>5}function g(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function v(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!m(t,e)||n++;return n}function m(t,e){if(t){e=e.split(".");var n=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function b(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function _(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function y(t){return z?z(t).clone(!0)[0]:G&&G.dom?G.dom(t).cloneNode(!0):t.cloneNode(!0)}function x(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&it.push(i)}}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var D,w,C,T,E,S,I,M,k,N,O,L,A,B,P,R,$,Y,X,F,U={},Q=/\s+/g,V=/left|right|inline/,j="Sortable"+(new Date).getTime(),q=window,H=q.document,W=q.parseInt,z=q.jQuery||q.Zepto,G=q.Polymer,J=!1,Z=!!("draggable"in H.createElement("div")),K=function(t){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(t=H.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),tt=!1,et=Math.abs,nt=Math.min,it=[],ot=[],rt=b(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s,l,c=n[j],d=e.scrollSensitivity,u=e.scrollSpeed,h=t.clientX,f=t.clientY,p=window.innerWidth,g=window.innerHeight;if(k!==n&&(M=e.scroll,k=n,N=e.scrollFn,!0===M)){M=n;do{if(M.offsetWidth<M.scrollWidth||M.offsetHeight<M.scrollHeight)break}while(M=M.parentNode)}M&&(i=M,o=M.getBoundingClientRect(),r=(et(o.right-h)<=d)-(et(o.left-h)<=d),a=(et(o.bottom-f)<=d)-(et(o.top-f)<=d)),r||a||(r=(p-h<=d)-(h<=d),a=(g-f<=d)-(f<=d),(r||a)&&(i=q)),U.vx===r&&U.vy===a&&U.el===i||(U.el=i,U.vx=r,U.vy=a,clearInterval(U.pid),i&&(U.pid=setInterval(function(){if(l=a?a*u:0,s=r?r*u:0,"function"==typeof N)return N.call(c,s,l,t);i===q?q.scrollTo(q.pageXOffset+s,q.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=s)},24)))}},30),at=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};t.prototype={constructor:t,_onTapStart:function(t){var e,i=this,o=this.el,r=this.options,a=r.preventOnFilter,s=t.type,l=t.touches&&t.touches[0],c=(l||t).target,u=t.target.shadowRoot&&t.path&&t.path[0]||c,h=r.filter;if(x(o),!D&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||r.disabled)&&(c=n(c,r.draggable,o))&&I!==c){if(e=v(c,r.draggable),"function"==typeof h){if(h.call(this,t,c,this))return d(i,u,"filter",c,o,e),void(a&&t.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=n(u,t.trim(),o))return d(i,t,"filter",c,o,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(u,r.handle,o)||this._prepareDragStart(t,l,c,e)}},_prepareDragStart:function(t,e,n,i){var o,a=this,l=a.el,u=a.options,f=l.ownerDocument;n&&!D&&n.parentNode===l&&(Y=t,E=l,D=n,w=D.parentNode,S=D.nextSibling,I=n,R=u.group,B=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,D.style["will-change"]="transform",o=function(){a._disableDelayedDrag(),D.draggable=a.nativeDraggable,s(D,u.chosenClass,!0),a._triggerDragStart(t,e),d(a,E,"choose",D,E,B)},u.ignore.split(",").forEach(function(t){c(D,t.trim(),h)}),r(f,"mouseup",a._onDrop),r(f,"touchend",a._onDrop),r(f,"touchcancel",a._onDrop),r(f,"pointercancel",a._onDrop),r(f,"selectstart",a),u.delay?(r(f,"mouseup",a._disableDelayedDrag),r(f,"touchend",a._disableDelayedDrag),r(f,"touchcancel",a._disableDelayedDrag),r(f,"mousemove",a._disableDelayedDrag),r(f,"touchmove",a._disableDelayedDrag),r(f,"pointermove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(o,u.delay)):o())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag),a(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),e?(Y={target:D,clientX:e.clientX,clientY:e.clientY},this._onDragStart(Y,"touch")):this.nativeDraggable?(r(D,"dragend",this),r(E,"dragstart",this._onDragStart)):this._onDragStart(Y,!0);try{H.selection?setTimeout(function(){H.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(E&&D){var e=this.options;s(D,e.ghostClass,!0),s(D,e.dragClass,!1),t.active=this,d(this,E,"start",D,E,B)}else this._nulling()},_emulateDragOver:function(){if(X){if(this._lastX===X.clientX&&this._lastY===X.clientY)return;this._lastX=X.clientX,this._lastY=X.clientY,K||l(C,"display","none");var t=H.elementFromPoint(X.clientX,X.clientY),e=t,n=ot.length;if(e)do{if(e[j]){for(;n--;)ot[n]({clientX:X.clientX,clientY:X.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);K||l(C,"display","")}},_onTouchMove:function(e){if(Y){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=e.touches?e.touches[0]:e,a=r.clientX-Y.clientX+o.x,s=r.clientY-Y.clientY+o.y,c=e.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!t.active){if(i&&nt(et(r.clientX-this._lastX),et(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),F=!0,X=r,l(C,"webkitTransform",c),l(C,"mozTransform",c),l(C,"msTransform",c),l(C,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!C){var t,e=D.getBoundingClientRect(),n=l(D),i=this.options;C=D.cloneNode(!0),s(C,i.ghostClass,!1),s(C,i.fallbackClass,!0),s(C,i.dragClass,!0),l(C,"top",e.top-W(n.marginTop,10)),l(C,"left",e.left-W(n.marginLeft,10)),l(C,"width",e.width),l(C,"height",e.height),l(C,"opacity","0.8"),l(C,"position","fixed"),l(C,"zIndex","100000"),l(C,"pointerEvents","none"),i.fallbackOnBody&&H.body.appendChild(C)||E.appendChild(C),t=C.getBoundingClientRect(),l(C,"width",2*e.width-t.width),l(C,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),R.checkPull(this,this,D,t)&&(T=y(D),T.draggable=!1,T.style["will-change"]="",l(T,"display","none"),s(T,this.options.chosenClass,!1),E.insertBefore(T,D),d(this,E,"clone",D)),s(D,i.dragClass,!0),e?("touch"===e?(r(H,"touchmove",this._onTouchMove),r(H,"touchend",this._onDrop),r(H,"touchcancel",this._onDrop),r(H,"pointermove",this._onTouchMove),r(H,"pointerup",this._onDrop)):(r(H,"mousemove",this._onTouchMove),r(H,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,D)),r(H,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(i){var o,r,a,s,c=this.el,d=this.options,h=d.group,g=t.active,v=R===h,m=!1,b=d.sort;if(void 0!==i.preventDefault&&(i.preventDefault(),!d.dragoverBubble&&i.stopPropagation()),!D.animated&&(F=!0,g&&!d.disabled&&(v?b||(s=!E.contains(D)):$===this||(g.lastPullMode=R.checkPull(this,g,D,i))&&h.checkPut(this,g,D,i))&&(void 0===i.rootEl||i.rootEl===this.el))){if(rt(i,d,this.el),tt)return;if(o=n(i.target,d.draggable,c),r=D.getBoundingClientRect(),$!==this&&($=this,m=!0),s)return e(g,!0),w=E,void(T||S?E.insertBefore(D,T||S):b||E.appendChild(D));if(0===c.children.length||c.children[0]===C||c===i.target&&p(c,i)){if(0!==c.children.length&&c.children[0]!==C&&c===i.target&&(o=c.lastElementChild),o){if(o.animated)return;a=o.getBoundingClientRect()}e(g,v),!1!==u(E,c,D,r,o,a,i)&&(D.contains(c)||(c.appendChild(D),w=c),this._animate(r,D),o&&this._animate(a,o))}else if(o&&!o.animated&&o!==D&&void 0!==o.parentNode[j]){O!==o&&(O=o,L=l(o),A=l(o.parentNode)),a=o.getBoundingClientRect();var _=a.right-a.left,y=a.bottom-a.top,x=V.test(L.cssFloat+L.display)||"flex"==A.display&&0===A["flex-direction"].indexOf("row"),I=o.offsetWidth>D.offsetWidth,M=o.offsetHeight>D.offsetHeight,k=(x?(i.clientX-a.left)/_:(i.clientY-a.top)/y)>.5,N=o.nextElementSibling,B=!1;if(x){var P=D.offsetTop,Y=o.offsetTop;B=P===Y?o.previousElementSibling===D&&!I||k&&I:o.previousElementSibling===D||D.previousElementSibling===o?(i.clientY-a.top)/y>.5:Y>P}else m||(B=N!==D&&!M||k&&M);var X=u(E,c,D,r,o,a,i,B);!1!==X&&(1!==X&&-1!==X||(B=1===X),tt=!0,setTimeout(f,30),e(g,v),D.contains(c)||(B&&!N?c.appendChild(D):o.parentNode.insertBefore(D,B?N:o)),w=D.parentNode,this._animate(r,D),this._animate(a,o))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,l(e,"transition","all "+n+"ms"),l(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(H,"touchmove",this._onTouchMove),a(H,"pointermove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"pointerup",this._onDrop),a(t,"touchcancel",this._onDrop),a(t,"pointercancel",this._onDrop),a(t,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(U.pid),clearTimeout(this._dragStartTimer),a(H,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(H,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(F&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),C&&C.parentNode&&C.parentNode.removeChild(C),E!==w&&"clone"===t.active.lastPullMode||T&&T.parentNode&&T.parentNode.removeChild(T),D&&(this.nativeDraggable&&a(D,"dragend",this),h(D),D.style["will-change"]="",s(D,this.options.ghostClass,!1),s(D,this.options.chosenClass,!1),d(this,E,"unchoose",D,E,B),E!==w?(P=v(D,i.draggable))>=0&&(d(null,w,"add",D,E,B,P),d(this,E,"remove",D,E,B,P),d(null,w,"sort",D,E,B,P),d(this,E,"sort",D,E,B,P)):D.nextSibling!==S&&(P=v(D,i.draggable))>=0&&(d(this,E,"update",D,E,B,P),d(this,E,"sort",D,E,B,P)),t.active&&(null!=P&&-1!==P||(P=B),d(this,E,"end",D,E,B,P),this.save()))),this._nulling()},_nulling:function(){E=D=w=C=S=T=I=M=k=Y=X=F=P=O=L=$=R=t.active=null,it.forEach(function(t){t.checked=!0}),it.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":D&&(this._onDragOver(t),o(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;o<r;o++)t=i[o],n(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||g(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&at(n)},destroy:function(){var t=this.el;t[j]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),a(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),ot.splice(ot.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},r(H,"touchmove",function(e){t.active&&e.preventDefault()});try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){J={capture:!1,passive:!1}}}))}catch(t){}return t.utils={on:r,off:a,css:l,find:c,is:function(t,e){return!!n(t,e,t)},extend:_,throttle:b,closest:n,toggleClass:s,clone:y,index:v},t.create=function(e,n){return new t(e,n)},t.version="1.6.1",t})},31:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{ref:"layout",attrs:{view:"lHh Lpr fff","left-class":{"bg-grey-2":!0}}},[n("q-toolbar",{slot:"header"},[n("q-toolbar-title",[t._v("\n      Quasar App\n      "),n("div",{slot:"subtitle"},[t._v("Running on Quasar v"+t._s(t.$q.version))])])],1),t._v(" "),n("div",{staticClass:"flex row full-width drag-wrapper"},[t._l(t.lists,function(e,i){return[n("div",{staticClass:"flex column list-wrapper"},[n("p",[t._v(t._s(e.title))]),t._v(" "),n("draggable",{staticClass:"drag-area",attrs:{list:e.data,options:{group:{name:"people",put:0!==i}}},on:{add:t.added}},[n("transition-group",{attrs:{name:"list-complete"}},t._l(e.data,function(e,i){return n("div",{key:i,staticClass:"list-complete-item"},[t._v("\n              "+t._s(e.name)+"\n            ")])}))],1)],1)]})],2)],1)},o=[],r={render:i,staticRenderFns:o};e.a=r}});