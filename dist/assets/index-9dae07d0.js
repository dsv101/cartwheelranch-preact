(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function _(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=_(r);fetch(r.href,o)}})();var F,p,Pe,H,ce,Ee,X,xe,A={},ne=[],Oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function S(t,e){for(var _ in e)t[_]=e[_];return t}function Se(t){var e=t.parentNode;e&&e.removeChild(t)}function U(t,e,_){var n,r,o,c={};for(o in e)o=="key"?n=e[o]:o=="ref"?r=e[o]:c[o]=e[o];if(arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)c[o]===void 0&&(c[o]=t.defaultProps[o]);return R(t,c,n,r,null)}function R(t,e,_,n,r){var o={type:t,props:e,key:_,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++Pe,__i:-1,__u:0};return r==null&&p.vnode!=null&&p.vnode(o),o}function z(t){return t.children}function I(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__i+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?D(t):null}function We(t,e,_){var n,r=t.__v,o=r.__e,c=t.__P;if(c)return(n=S({},r)).__v=r.__v+1,p.vnode&&p.vnode(n),re(c,n,r,t.__n,c.ownerSVGElement!==void 0,32&r.__u?[o]:null,e,o??D(r),!!(32&r.__u),_),n.__.__k[n.__i]=n,n.__d=void 0,n.__e!=o&&Le(n),n}function Le(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return Le(t)}}function Y(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!j.__r++||ce!==p.debounceRendering)&&((ce=p.debounceRendering)||Ee)(j)}function j(){var t,e,_,n=[],r=[];for(H.sort(X);t=H.shift();)t.__d&&(_=H.length,e=We(t,n,r)||e,_===0||H.length>_?(Z(n,e,r),r.length=n.length=0,e=void 0,H.sort(X)):e&&p.__c&&p.__c(e,ne));e&&Z(n,e,r),j.__r=0}function He(t,e,_,n,r,o,c,u,s,l,a){var i,h,f,m,b,g=n&&n.__k||ne,v=e.length;for(_.__d=s,Ie(_,e,g),s=_.__d,i=0;i<v;i++)(f=_.__k[i])!=null&&typeof f!="boolean"&&typeof f!="function"&&(h=f.__i===-1?A:g[f.__i]||A,f.__i=i,re(t,f,h,r,o,c,u,s,l,a),m=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&oe(h.ref,null,f),a.push(f.ref,f.__c||m,f)),b==null&&m!=null&&(b=m),65536&f.__u||h.__k===f.__k?s=we(f,s,t):typeof f.type=="function"&&f.__d!==void 0?s=f.__d:m&&(s=m.nextSibling),f.__d=void 0,f.__u&=-196609);_.__d=s,_.__e=b}function Ie(t,e,_){var n,r,o,c,u,s=e.length,l=_.length,a=l,i=0;for(t.__k=[],n=0;n<s;n++)(r=t.__k[n]=(r=e[n])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?R(null,r,null,null,r):K(r)?R(z,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?R(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=t,r.__b=t.__b+1,u=qe(r,_,c=n+i,a),r.__i=u,o=null,u!==-1&&(a--,(o=_[u])&&(o.__u|=131072)),o==null||o.__v===null?(u==-1&&i--,typeof r.type!="function"&&(r.__u|=65536)):u!==c&&(u===c+1?i++:u>c?a>s-c?i+=u-c:i--:i=u<c&&u==c-1?u-c:0,u!==n+i&&(r.__u|=65536))):(o=_[n])&&o.key==null&&o.__e&&(o.__e==t.__d&&(t.__d=D(o)),ee(o,o,!1),_[n]=null,a--);if(a)for(n=0;n<l;n++)(o=_[n])!=null&&!(131072&o.__u)&&(o.__e==t.__d&&(t.__d=D(o)),ee(o,o))}function we(t,e,_){var n,r;if(typeof t.type=="function"){for(n=t.__k,r=0;n&&r<n.length;r++)n[r]&&(n[r].__=t,e=we(n[r],e,_));return e}t.__e!=e&&(_.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function Ue(t,e){return e=e||[],t==null||typeof t=="boolean"||(K(t)?t.some(function(_){Ue(_,e)}):e.push(t)),e}function qe(t,e,_,n){var r=t.key,o=t.type,c=_-1,u=_+1,s=e[_];if(s===null||s&&r==s.key&&o===s.type)return _;if(n>(s!=null&&!(131072&s.__u)?1:0))for(;c>=0||u<e.length;){if(c>=0){if((s=e[c])&&!(131072&s.__u)&&r==s.key&&o===s.type)return c;c--}if(u<e.length){if((s=e[u])&&!(131072&s.__u)&&r==s.key&&o===s.type)return u;u++}}return-1}function ue(t,e,_){e[0]==="-"?t.setProperty(e,_??""):t[e]=_==null?"":typeof _!="number"||Oe.test(e)?_:_+"px"}function W(t,e,_,n,r){var o;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)_&&e in _||ue(t.style,e,"");if(_)for(e in _)n&&_[e]===n[e]||ue(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=_,_?n?_.u=n.u:(_.u=Date.now(),t.addEventListener(e,o?se:le,o)):t.removeEventListener(e,o?se:le,o);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,_))}}function le(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(p.event?p.event(t):t)}}function se(t){if(this.l)return this.l[t.type+!0](p.event?p.event(t):t)}function re(t,e,_,n,r,o,c,u,s,l){var a,i,h,f,m,b,g,v,d,$,x,E,V,M,J,C=e.type;if(e.constructor!==void 0)return null;128&_.__u&&(s=!!(32&_.__u),o=[u=e.__e=_.__e]),(a=p.__b)&&a(e);e:if(typeof C=="function")try{if(v=e.props,d=(a=C.contextType)&&n[a.__c],$=a?d?d.props.value:a.__:n,_.__c?g=(i=e.__c=_.__c).__=i.__E:("prototype"in C&&C.prototype.render?e.__c=i=new C(v,$):(e.__c=i=new I(v,$),i.constructor=C,i.render=je),d&&d.sub(i),i.props=v,i.state||(i.state={}),i.context=$,i.__n=n,h=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),C.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=S({},i.__s)),S(i.__s,C.getDerivedStateFromProps(v,i.__s))),f=i.props,m=i.state,i.__v=e,h)C.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(C.getDerivedStateFromProps==null&&v!==f&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(v,$),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(v,i.__s,$)===!1||e.__v===_.__v)){for(e.__v!==_.__v&&(i.props=v,i.state=i.__s,i.__d=!1),e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(O){O&&(O.__=e)}),x=0;x<i._sb.length;x++)i.__h.push(i._sb[x]);i._sb=[],i.__h.length&&c.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(v,i.__s,$),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(f,m,b)})}if(i.context=$,i.props=v,i.__P=t,i.__e=!1,E=p.__r,V=0,"prototype"in C&&C.prototype.render){for(i.state=i.__s,i.__d=!1,E&&E(e),a=i.render(i.props,i.state,i.context),M=0;M<i._sb.length;M++)i.__h.push(i._sb[M]);i._sb=[]}else do i.__d=!1,E&&E(e),a=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++V<25);i.state=i.__s,i.getChildContext!=null&&(n=S(S({},n),i.getChildContext())),h||i.getSnapshotBeforeUpdate==null||(b=i.getSnapshotBeforeUpdate(f,m)),He(t,K(J=a!=null&&a.type===z&&a.key==null?a.props.children:a)?J:[J],e,_,n,r,o,c,u,s,l),i.base=e.__e,e.__u&=-161,i.__h.length&&c.push(i),g&&(i.__E=i.__=null)}catch(O){e.__v=null,s||o!=null?(e.__e=u,e.__u|=s?160:32,o[o.indexOf(u)]=null):(e.__e=_.__e,e.__k=_.__k),p.__e(O,e,_)}else o==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=Be(_.__e,e,_,n,r,o,c,s,l);(a=p.diffed)&&a(e)}function Z(t,e,_){for(var n=0;n<_.length;n++)oe(_[n],_[++n],_[++n]);p.__c&&p.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(o){o.call(r)})}catch(o){p.__e(o,r.__v)}})}function Be(t,e,_,n,r,o,c,u,s){var l,a,i,h,f,m,b,g=_.props,v=e.props,d=e.type;if(d==="svg"&&(r=!0),o!=null){for(l=0;l<o.length;l++)if((f=o[l])&&"setAttribute"in f==!!d&&(d?f.localName===d:f.nodeType===3)){t=f,o[l]=null;break}}if(t==null){if(d===null)return document.createTextNode(v);t=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,v.is&&v),o=null,u=!1}if(d===null)g===v||u&&t.data===v||(t.data=v);else{if(o=o&&F.call(t.childNodes),g=_.props||A,!u&&o!=null)for(g={},l=0;l<t.attributes.length;l++)g[(f=t.attributes[l]).name]=f.value;for(l in g)f=g[l],l=="children"||(l=="dangerouslySetInnerHTML"?i=f:l==="key"||l in v||W(t,l,null,f,r));for(l in v)f=v[l],l=="children"?h=f:l=="dangerouslySetInnerHTML"?a=f:l=="value"?m=f:l=="checked"?b=f:l==="key"||u&&typeof f!="function"||g[l]===f||W(t,l,f,g[l],r);if(a)u||i&&(a.__html===i.__html||a.__html===t.innerHTML)||(t.innerHTML=a.__html),e.__k=[];else if(i&&(t.innerHTML=""),He(t,K(h)?h:[h],e,_,n,r&&d!=="foreignObject",o,c,o?o[0]:_.__k&&D(_,0),u,s),o!=null)for(l=o.length;l--;)o[l]!=null&&Se(o[l]);u||(l="value",m!==void 0&&(m!==t[l]||d==="progress"&&!m||d==="option"&&m!==g[l])&&W(t,l,m,g[l],!1),l="checked",b!==void 0&&b!==t[l]&&W(t,l,b,g[l],!1))}return t}function oe(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(n){p.__e(n,_)}}function ee(t,e,_){var n,r;if(p.unmount&&p.unmount(t),(n=t.ref)&&(n.current&&n.current!==t.__e||oe(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(o){p.__e(o,e)}n.base=n.__P=null,t.__c=void 0}if(n=t.__k)for(r=0;r<n.length;r++)n[r]&&ee(n[r],e,_||typeof t.type!="function");_||t.__e==null||Se(t.__e),t.__=t.__e=t.__d=void 0}function je(t,e,_){return this.constructor(t,_)}function Ke(t,e,_){var n,r,o,c;p.__&&p.__(t,e),r=(n=typeof _=="function")?null:_&&_.__k||e.__k,o=[],c=[],re(e,t=(!n&&_||e).__k=U(z,null,[t]),r||A,A,e.ownerSVGElement!==void 0,!n&&_?[_]:r?null:e.firstChild?F.call(e.childNodes):null,o,!n&&_?_:r?r.__e:e.firstChild,n,c),t.__d=void 0,Z(o,t,c)}function fe(t,e,_){var n,r,o,c,u=S({},t.props);for(o in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)o=="key"?n=e[o]:o=="ref"?r=e[o]:u[o]=e[o]===void 0&&c!==void 0?c[o]:e[o];return arguments.length>2&&(u.children=arguments.length>3?F.call(arguments,2):_),R(t.type,u,n||t.key,r||t.ref,null)}function De(t,e){var _={__c:e="__cC"+xe++,__:t,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,o;return this.getChildContext||(r=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&r.some(function(u){u.__e=!0,Y(u)})},this.sub=function(c){r.push(c);var u=c.componentWillUnmount;c.componentWillUnmount=function(){r.splice(r.indexOf(c),1),u&&u.call(c)}}),n.children}};return _.Provider.__=_.Consumer.contextType=_}F=ne.slice,p={__e:function(t,e,_,n){for(var r,o,c;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(t)),c=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,n||{}),c=r.__d),c)return r.__E=r}catch(u){t=u}throw t}},Pe=0,I.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},_),this.props)),t&&S(_,t),t!=null&&this.__v&&(e&&this._sb.push(e),Y(this))},I.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Y(this))},I.prototype.render=z,H=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,X=function(t,e){return t.__v.__b-e.__v.__b},j.__r=0,xe=0;var T,y,Q,ae,te=0,Te=[],q=[],k=p,pe=k.__b,he=k.__r,de=k.diffed,ve=k.__c,me=k.unmount,ye=k.__;function G(t,e){k.__h&&k.__h(y,t,te||e),te=0;var _=y.__H||(y.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({__V:q}),_.__[t]}function Re(t,e,_){var n=G(T++,2);if(n.t=t,!n.__c&&(n.__=[_?_(e):Ve(void 0,e),function(u){var s=n.__N?n.__N[0]:n.__[0],l=n.t(s,u);s!==l&&(n.__N=[l,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.u)){var r=function(u,s,l){if(!n.__c.__H)return!0;var a=n.__c.__H.__.filter(function(h){return!!h.__c});if(a.every(function(h){return!h.__N}))return!o||o.call(this,u,s,l);var i=!1;return a.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(i=!0)}}),!(!i&&n.__c.props===u)&&(!o||o.call(this,u,s,l))};y.u=!0;var o=y.shouldComponentUpdate,c=y.componentWillUpdate;y.componentWillUpdate=function(u,s,l){if(this.__e){var a=o;o=void 0,r(u,s,l),o=a}c&&c.call(this,u,s,l)},y.shouldComponentUpdate=r}return n.__N||n.__}function Ae(t,e){var _=G(T++,4);!k.__s&&Ne(_.__H,e)&&(_.__=t,_.i=e,y.__h.push(_))}function L(t){return te=5,ie(function(){return{current:t}},[])}function ie(t,e){var _=G(T++,7);return Ne(_.__H,e)?(_.__V=t(),_.i=e,_.__h=t,_.__V):_.__}function Fe(t){var e=y.context[t.__c],_=G(T++,9);return _.c=t,e?(_.__==null&&(_.__=!0,e.sub(y)),e.props.value):t.__}function ze(){for(var t;t=Te.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(B),t.__H.__h.forEach(_e),t.__H.__h=[]}catch(e){t.__H.__h=[],k.__e(e,t.__v)}}k.__b=function(t){y=null,pe&&pe(t)},k.__=function(t,e){e.__k&&e.__k.__m&&(t.__m=e.__k.__m),ye&&ye(t,e)},k.__r=function(t){he&&he(t),T=0;var e=(y=t.__c).__H;e&&(Q===y?(e.__h=[],y.__h=[],e.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=q,_.__N=_.i=void 0})):(e.__h.forEach(B),e.__h.forEach(_e),e.__h=[],T=0)),Q=y},k.diffed=function(t){de&&de(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Te.push(e)!==1&&ae===k.requestAnimationFrame||((ae=k.requestAnimationFrame)||Ge)(ze)),e.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==q&&(_.__=_.__V),_.i=void 0,_.__V=q})),Q=y=null},k.__c=function(t,e){e.some(function(_){try{_.__h.forEach(B),_.__h=_.__h.filter(function(n){return!n.__||_e(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],k.__e(n,_.__v)}}),ve&&ve(t,e)},k.unmount=function(t){me&&me(t);var e,_=t.__c;_&&_.__H&&(_.__H.__.forEach(function(n){try{B(n)}catch(r){e=r}}),_.__H=void 0,e&&k.__e(e,_.__v))};var ge=typeof requestAnimationFrame=="function";function Ge(t){var e,_=function(){clearTimeout(n),ge&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(_,100);ge&&(e=requestAnimationFrame(_))}function B(t){var e=y,_=t.__c;typeof _=="function"&&(t.__c=void 0,_()),y=e}function _e(t){var e=y;t.__c=t.__(),y=e}function Ne(t,e){return!t||t.length!==e.length||e.some(function(_,n){return _!==t[n]})}function Ve(t,e){return typeof e=="function"?e(t):e}let w;const Je=(t,e)=>{if(w=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return t;const _=e.target.closest("a[href]");if(!_||_.origin!=location.origin||/^#/.test(_.getAttribute("href"))||!/^(_?self)?$/i.test(_.target))return t;w=!0,e.preventDefault(),e=_.href.replace(location.origin,"")}else typeof e=="string"?w=!0:e=location.pathname+location.search;return w===!0?history.pushState(null,"",e):w===!1&&history.replaceState(null,"",e),e},Qe=(t,e,_)=>{t=t.split("/").filter(Boolean),e=(e||"").split("/").filter(Boolean);for(let n=0,r,o;n<Math.max(t.length,e.length);n++){let[,c,u,s]=(e[n]||"").match(/^(:?)(.*?)([+*?]?)$/);if(r=t[n],!(!c&&u==r)){if(!c&&r&&s=="*"){_.rest="/"+t.slice(n).map(decodeURIComponent).join("/");break}if(!c||!r&&s!="?"&&s!="*")return;if(o=s=="+"||s=="*",o?r=t.slice(n).map(decodeURIComponent).join("/"):r&&(r=decodeURIComponent(r)),_.params[u]=r,u in _||(_[u]=r),o)break}}return _};function N(t){const[e,_]=Re(Je,t.url||location.pathname+location.search),n=w===!0,r=ie(()=>{const o=new URL(e,location.origin),c=o.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:c,query:Object.fromEntries(o.searchParams),route:_,wasPush:n}},[e]);return Ae(()=>(addEventListener("click",_),addEventListener("popstate",_),()=>{removeEventListener("click",_),removeEventListener("popstate",_)}),[]),U(N.ctx.Provider,{value:r},t.children)}const Xe=Promise.resolve();function Me(t){const[e,_]=Re(d=>d+1,0),{url:n,query:r,wasPush:o,path:c}=Ye(),{rest:u=c,params:s={}}=Fe(be),l=L(!1),a=L(c),i=L(0),h=L(),f=L(),m=L(),b=L(!1),g=L();g.current=!1,h.current=ie(()=>{this.__v&&this.__v.__k&&this.__v.__k.reverse(),i.current++,f.current=h.current;let d,$,x;return Ue(t.children).some(E=>{if(Qe(u,E.props.path,x={path:u,query:r,params:s,rest:""}))return d=fe(E,x);E.props.default&&($=fe(E,x))}),U(be.Provider,{value:x},d||$)},[n]);const v=f.current;return f.current=null,this.__c=d=>{g.current=!0,f.current=v,t.onLoadStart&&t.onLoadStart(n),l.current=!0;let $=i.current;d.then(()=>{$===i.current&&(f.current=null,Xe.then(_))})},Ae(()=>{const d=this.__v&&this.__v.__e;if(g.current){!b.current&&!m.current&&(m.current=d);return}!b.current&&m.current&&(m.current!==d&&m.current.remove(),m.current=null),b.current=!0,a.current!==c&&(o&&scrollTo(0,0),t.onLoadEnd&&l.current&&t.onLoadEnd(n),t.onRouteChange&&t.onRouteChange(n),l.current=!1,a.current=c)},[c,o,e]),[U(ke,{r:h}),U(ke,{r:f})]}const ke=({r:t})=>t.current;Me.Provider=N;N.ctx=De({});const be=De({}),$e=t=>U(t.component,t),Ye=()=>Fe(N.ctx),Ce=p.__e;p.__e=(t,e,_)=>{if(t&&t.then){let n=e;for(;n=n.__;)if(n.__c&&n.__c.__c)return e.__e==null&&(e.__e=_.__e,e.__k=_.__k),e.__k||(e.__k=[]),n.__c.__c(t,e)}Ce&&Ce(t,e,_)};const Ze="/assets/main-logo-427aa148.svg";var et=0;function P(t,e,_,n,r,o){var c,u,s={};for(u in e)u=="ref"?c=e[u]:s[u]=e[u];var l={type:t,props:s,key:_,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--et,__i:-1,__u:0,__source:r,__self:o};if(typeof t=="function"&&(c=t.defaultProps))for(u in c)s[u]===void 0&&(s[u]=c[u]);return p.vnode&&p.vnode(l),l}const tt=()=>P("div",{children:[P("img",{src:Ze,alt:"Cartwheel Ranch logo"}),P("p",{children:"Coming Soon!"})]});function _t(){return P("section",{children:[P("h1",{children:"404: Not Found"}),P("p",{children:"It's gone :("})]})}function nt(){return P(N,{children:P("main",{children:P(Me,{children:[P($e,{path:"/",component:tt}),P($e,{default:!0,component:_t})]})})})}Ke(P(nt,{}),document.getElementById("app"));
