(()=>{"use strict";var e={837:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),l=n.n(o)()(i());l.push([e.id,"#editorContainer{position:absolute;bottom:16px;left:16px}.BinderEditor{box-sizing:border-box}.BinderEditor.buttons{display:flex;flex-direction:column}.BinderEditor.panel{background-color:#333;border-radius:6px;color:#fff;padding:8px}.BinderEditor.panel .actions{margin-left:4px;margin-top:8px;margin-bottom:8px}.BinderEditor.panel .actions input{margin-right:4px}.linkForm{padding:4px}.linkForm input{margin-right:4px}.linkForm input:last-child{margin-right:0}",""]);const s=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(l[u]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);r&&l[c[0]]||(void 0!==o&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},237:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(379),i=n.n(r),o=n(795),l=n.n(o),s=n(569),u=n.n(s),a=n(565),c=n.n(a),_=n(216),p=n.n(_),d=n(589),h=n.n(d),f=n(837),v={};v.styleTagTransform=h(),v.setAttributes=c(),v.insert=u().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=p(),i()(f.Z,v);const m=f.Z&&f.Z.locals?f.Z.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},l=[],s=0;s<e.length;s++){var u=e[s],a=r.base?u[0]+r.base:u[0],c=o[a]||0,_="".concat(a," ").concat(c);o[a]=c+1;var p=n(_),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==p)t[p].references++,t[p].updater(d);else{var h=i(d,r);r.byIndex=s,t.splice(s,0,{identifier:_,updater:h,references:1})}l.push(_)}return l}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var l=0;l<o.length;l++){var s=n(o[l]);t[s].references--}for(var u=r(e,i),a=0;a<o.length;a++){var c=n(o[a]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}o=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{var e,t,r,i,o,l={},s=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function _(t,n,r){var i,o,l,s={};for(l in n)"key"==l?i=n[l]:"ref"==l?o=n[l]:s[l]=n[l];if(arguments.length>2&&(s.children=arguments.length>3?e.call(arguments,2):r),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===s[l]&&(s[l]=t.defaultProps[l]);return p(t,s,i,o,null)}function p(e,n,i,o,l){var s={type:e,props:n,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++r:l};return null==l&&null!=t.vnode&&t.vnode(s),s}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function f(e,t){if(null==t)return e.__?f(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?f(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function m(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!g.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||setTimeout)(g)}function g(){for(var e;g.__r=i.length;)e=i.sort((function(e,t){return e.__v.__b-t.__v.__b})),i=[],e.some((function(e){var t,n,r,i,o,l;e.__d&&(o=(i=(t=e).__v).__e,(l=t.__P)&&(n=[],(r=a({},i)).__v=i.__v+1,E(l,i,r,t.__n,void 0!==l.ownerSVGElement,null!=i.__h?[o]:null,n,null==o?f(i):o,i.__h),$(n,i),i.__e!=o&&v(i)))}))}function y(e,t,n,r,i,o,u,a,c,_){var h,v,m,g,y,x,w,S=r&&r.__k||s,C=S.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(g=n.__k[h]=null==(g=t[h])||"boolean"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?p(null,g,null,null,g):Array.isArray(g)?p(d,{children:g},null,null,null):g.__b>0?p(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)){if(g.__=n,g.__b=n.__b+1,null===(m=S[h])||m&&g.key==m.key&&g.type===m.type)S[h]=void 0;else for(v=0;v<C;v++){if((m=S[v])&&g.key==m.key&&g.type===m.type){S[v]=void 0;break}m=null}E(e,g,m=m||l,i,o,u,a,c,_),y=g.__e,(v=g.ref)&&m.ref!=v&&(w||(w=[]),m.ref&&w.push(m.ref,null,g),w.push(v,g.__c||y,g)),null!=y?(null==x&&(x=y),"function"==typeof g.type&&g.__k===m.__k?g.__d=c=b(g,c,e):c=k(e,g,m,S,y,c),"function"==typeof n.type&&(n.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=f(m))}for(n.__e=x,h=C;h--;)null!=S[h]&&F(S[h],S[h]);if(w)for(h=0;h<w.length;h++)M(w[h],w[++h],w[++h])}function b(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t="function"==typeof r.type?b(r,t,n):k(n,r,r,i,r.__e,t));return t}function k(e,t,n,r,i,o){var l,s,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||i!=o||null==i.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(i),l=null;else{for(s=o,u=0;(s=s.nextSibling)&&u<r.length;u+=2)if(s==i)break e;e.insertBefore(i,o),l=o}return void 0!==l?l:i.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function w(e,t,n,r,i){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||x(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||x(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?C:S,o):e.removeEventListener(t,o?C:S,o);else if("dangerouslySetInnerHTML"!==t){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function C(e){this.l[e.type+!0](t.event?t.event(e):e)}function E(e,n,r,i,o,l,s,u,c){var _,p,f,v,m,g,b,k,x,w,S,C,E,$=n.type;if(void 0!==n.constructor)return null;null!=r.__h&&(c=r.__h,u=n.__e=r.__e,n.__h=null,l=[u]),(_=t.__b)&&_(n);try{e:if("function"==typeof $){k=n.props,x=(_=$.contextType)&&i[_.__c],w=_?x?x.props.value:_.__:i,r.__c?b=(p=n.__c=r.__c).__=p.__E:("prototype"in $&&$.prototype.render?n.__c=p=new $(k,w):(n.__c=p=new h(k,w),p.constructor=$,p.render=P),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=w,p.__n=i,f=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=$.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=a({},p.__s)),a(p.__s,$.getDerivedStateFromProps(k,p.__s))),v=p.props,m=p.state;for(_=0;_<p._sb.length;_++)p.__h.push(p._sb[_]),p._sb=[];if(f)null==$.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==$.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,w)||n.__v===r.__v){p.props=k,p.state=p.__s,n.__v!==r.__v&&(p.__d=!1),p.__v=n,n.__e=r.__e,n.__k=r.__k,n.__k.forEach((function(e){e&&(e.__=n)})),p.__h.length&&s.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,g)}))}if(p.context=w,p.props=k,p.__v=n,p.__P=e,S=t.__r,C=0,"prototype"in $&&$.prototype.render)p.state=p.__s,p.__d=!1,S&&S(n),_=p.render(p.props,p.state,p.context);else do{p.__d=!1,S&&S(n),_=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++C<25);p.state=p.__s,null!=p.getChildContext&&(i=a(a({},i),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(g=p.getSnapshotBeforeUpdate(v,m)),E=null!=_&&_.type===d&&null==_.key?_.props.children:_,y(e,Array.isArray(E)?E:[E],n,r,i,o,l,s,u,c),p.base=n.__e,n.__h=null,p.__h.length&&s.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==l&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=T(r.__e,n,r,i,o,l,s,c);(_=t.diffed)&&_(n)}catch(e){n.__v=null,(c||null!=l)&&(n.__e=u,n.__h=!!c,l[l.indexOf(u)]=null),t.__e(e,n,r)}}function $(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function T(t,n,r,i,o,s,u,a){var _,p,d,h=r.props,v=n.props,m=n.type,g=0;if("svg"===m&&(o=!0),null!=s)for(;g<s.length;g++)if((_=s[g])&&"setAttribute"in _==!!m&&(m?_.localName===m:3===_.nodeType)){t=_,s[g]=null;break}if(null==t){if(null===m)return document.createTextNode(v);t=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),s=null,a=!1}if(null===m)h===v||a&&t.data===v||(t.data=v);else{if(s=s&&e.call(t.childNodes),p=(h=r.props||l).dangerouslySetInnerHTML,d=v.dangerouslySetInnerHTML,!a){if(null!=s)for(h={},g=0;g<t.attributes.length;g++)h[t.attributes[g].name]=t.attributes[g].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===t.innerHTML)||(t.innerHTML=d&&d.__html||""))}if(function(e,t,n,r,i){var o;for(o in n)"children"===o||"key"===o||o in t||w(e,o,null,n[o],r);for(o in t)i&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||w(e,o,t[o],n[o],r)}(t,v,h,o,a),d)n.__k=[];else if(g=n.props.children,y(t,Array.isArray(g)?g:[g],n,r,i,o&&"foreignObject"!==m,s,u,s?s[0]:r.__k&&f(r,0),a),null!=s)for(g=s.length;g--;)null!=s[g]&&c(s[g]);a||("value"in v&&void 0!==(g=v.value)&&(g!==t.value||"progress"===m&&!g||"option"===m&&g!==h.value)&&w(t,"value",g,h.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==t.checked&&w(t,"checked",g,h.checked,!1))}return t}function M(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function F(e,n,r){var i,o;if(t.unmount&&t.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||M(i,null,n)),null!=(i=e.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(e){t.__e(e,n)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(o=0;o<i.length;o++)i[o]&&F(i[o],n,r||"function"!=typeof e.type);r||null==e.__e||c(e.__e),e.__=e.__e=e.__d=void 0}function P(e,t,n){return this.constructor(e,n)}e=s.slice,t={__e:function(e,t,n,r){for(var i,o,l;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(e)),l=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(e,r||{}),l=i.__d),l)return i.__E=i}catch(t){e=t}throw e}},r=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=d,i=[],g.__r=0;class I extends h{constructor(e){super(e)}render(){return this.props.condition?this.props.children:""}}var O=function(e,t,n,r){var i;t[0]=0;for(var o=1;o<t.length;o++){var l=t[o++],s=t[o]?(t[0]|=l?1:2,n[t[o++]]):t[++o];3===l?r[0]=s:4===l?r[1]=Object.assign(r[1]||{},s):5===l?(r[1]=r[1]||{})[t[++o]]=s:6===l?r[1][t[++o]]+=s+"":l?(i=e.apply(s,O(e,s,n,["",null])),r.push(i),s[0]?t[0]|=2:(t[o-2]=0,t[o]=i)):r.push(s)}return r},A=new Map,L=function(e){var t=A.get(this);return t||(t=new Map,A.set(this,t)),(t=O(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,r=1,i="",o="",l=[0],s=function(e){1===r&&(e||(i=i.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(0,e,i):3===r&&(e||i)?(l.push(3,e,i),r=2):2===r&&"..."===i&&e?l.push(4,e,0):2===r&&i&&!e?l.push(5,0,!0,i):r>=5&&((i||!e&&5===r)&&(l.push(r,0,i,n),r=6),e&&(l.push(r,e,0,n),r=6)),i=""},u=0;u<e.length;u++){u&&(1===r&&s(),s(u));for(var a=0;a<e[u].length;a++)t=e[u][a],1===r?"<"===t?(s(),l=[l],r=3):i+=t:4===r?"--"===i&&">"===t?(r=1,i=""):i=t+i[0]:o?t===o?o="":i+=t:'"'===t||"'"===t?o=t:">"===t?(s(),r=1):r&&("="===t?(r=5,n=i,i=""):"/"===t&&(r<5||">"===e[u][a+1])?(s(),3===r&&(l=l[0]),r=l,(l=l[0]).push(2,0,r),r=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(s(),r=2):i+=t),3===r&&"!--"===i&&(r=4,l=l[0])}return s(),l}(e)),t),arguments,[])).length>1?t:t[0]}.bind(_);const N=window.document,D=N.querySelector("meta[name=description]").content;function U(){const e=N.title,t=N.querySelector("meta[property='og:image']").content,n=N.querySelectorAll("nav li a"),r=Array.from(n).map((e=>({href:e.getAttribute("href").replace(/#[^#]+$/,""),title:e.dataset.title||e.innerHTML,name:e.innerHTML})));return{title:e,description:D,image:t,links:r}}function H(e){console.log("setSettings()",e);const t=N.querySelector("nav ul");N.querySelector("iframe").src=e.links[0].href+"#view",t.innerHTML="",e.links.forEach((e=>{console.log("link",e);const n=document.createElement("li"),r=document.createElement("a");r.href=e.href+"#view",r.innerHTML=e.name,r.target="display",r.dataset.title=e.title||e.name,n.appendChild(r),t.appendChild(n)}))}n(237);class B extends h{constructor(e){super(e),this.state={href:e.href||"index.html",title:e.title||"No title",name:e.name||"No  name",index:e.index||0},this.linkF={current:null},this.titleF={current:null},this.itemF={current:null},this.onChange=this.onChange.bind(this),this.handler=e.handler||function(e,t){console.log(e,t)},this.deleter=e.del||function(e){console.log("remove",e)}}componentDidUpdate(){}onChange(){console.log("change..."),this.setState({href:this.linkF.current.value,title:this.titleF.current.value,name:this.itemF.current.value}),this.handler({href:this.linkF.current.value,title:this.titleF.current.value,name:this.itemF.current.value},this.props.index)}render(){return L`<div class="linkForm">
    <input type="text" value=${this.state.name} ref=${this.itemF} onChange=${this.onChange}></input>
    <input type="text" value=${this.state.href} ref=${this.linkF} 
    onChange=${this.onChange}></input>
    <input type="button" value="del" onClick=${()=>this.deleter(this.props.index)}></input>
     </div>`}}class j extends h{constructor(e){super(e),this.state={open:!1,links:e.settings.links},this.switchOpen=this.switchOpen.bind(this),this.addItem=this.addItem.bind(this),this.removeItem=this.removeItem.bind(this),this.changeItem=this.changeItem.bind(this)}componentDidUpdate(){console.log("Component updated")}switchOpen(){this.setState({open:!this.state.open})}addItem(e,t,n){const r=this.state.links.map((e=>e));r.push({href:e,title:n,name:t}),this.setState({links:r}),H({links:r})}removeItem(e){const t=this.state.links.filter(((t,n)=>n!=e));this.setState({links:t}),H({links:t})}changeItem(e,t){console.log("chanche item",e,t);const n=this.state.links.map((e=>e));n[t]=e,this.setState({links:n}),H({links:n})}togglePageEditor(){let e=window.currentPage;if(!e)return;const t=e.indexOf("#"),n=-1==t?"":e.substring(t);console.log("cph",n),"#view"===n&&(e=e.replace("#view","")),"#edit"===n&&(e=e.replace("#edit","#view")),n||(e=e+="#view"),console.log("Going to",e);const r=document.querySelector("#display");window.currentPage=e,r.src=e}render(){return L`<${I} condition=${!this.state.open}>
    <div class="BinderEditor buttons" >
    <input type="button" value="Edit binder" onClick=${this.switchOpen}></input>
    <input type="button" value="Edit page" onClick=${this.togglePageEditor}></input>
    </div>
    </${I}><${I} condition=${this.state.open}>
    <!--editor-->
    <div class="BinderEditor panel" >
      ${this.state.links.map(((e,t)=>L`<${B} href=${e.href}
      key=${e.title+e.name+e.href+t}
      title=${e.title}
      name=${e.name}
      del=${this.removeItem}
      handler=${this.changeItem}
      index=${t} />`))}
      <div class="actions">
      <input type="button" value="add" onClick=${()=>this.addItem("href","name","title")}></input>
      <input type="button" value="close" onClick=${this.switchOpen}></input>
      <input type="button" value="save binder" onClick=${this.switchOpen}></input>
      <input type="button" value="toggle page editor" onClick=${this.switchOpen}></input>
      </div>
    </div>
    </${I}>`}}!function(){console.log("editable."),console.log(U()),document.querySelector("#editorScript").remove();const n=document.createElement("div");n.id="editorContainer";const r=_(j,{settings:U()});window.document.body.appendChild(n),function(n,r,i){var o,s,u;t.__&&t.__(n,r),s=(o="function"==typeof i)?null:i&&i.__k||r.__k,u=[],E(r,n=(!o&&i||r).__k=_(d,null,[n]),s||l,l,void 0!==r.ownerSVGElement,!o&&i?[i]:s?null:r.firstChild?e.call(r.childNodes):null,u,!o&&i?i:s?s.__e:r.firstChild,o),$(u,n)}(r,n)}()})()})();