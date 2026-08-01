var Vb=Object.defineProperty,Hb=Object.defineProperties;var zb=Object.getOwnPropertyDescriptors;var e_=Object.getOwnPropertySymbols;var Gb=Object.prototype.hasOwnProperty,jb=Object.prototype.propertyIsEnumerable;var t_=(n,e,t)=>e in n?Vb(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Tt=(n,e)=>{for(var t in e||={})Gb.call(e,t)&&t_(n,t,e[t]);if(e_)for(var t of e_(e))jb.call(e,t)&&t_(n,t,e[t]);return n},vn=(n,e)=>Hb(n,zb(e));var _n=null,xl=!1,is=1,Wb=null,ti=Symbol("SIGNAL");function Be(n){let e=_n;return _n=n,e}function Sl(){return _n}var Ta={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Rh(n){if(xl)throw new Error("");if(_n===null)return;_n.consumerOnSignalRead(n);let e=_n.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=_n.recomputing;if(i&&(t=e!==void 0?e.nextProducer:_n.producers,t!==void 0&&t.producer===n)){_n.producersTail=t,t.lastReadVersion=n.version,t.knownValidAtEpoch=is;return}let r=n.consumersTail;if(r!==void 0&&r.consumer===_n&&(!i||r.knownValidAtEpoch===is))return;let s=so(_n),o={producer:n,consumer:_n,nextProducer:t,prevConsumer:void 0,knownValidAtEpoch:is,lastReadVersion:n.version,nextConsumer:void 0};_n.producersTail=o,e!==void 0?e.nextProducer=o:_n.producers=o,s&&s_(n,o)}function n_(){is++}function Nh(n){if(!(so(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===is)){if(!n.producerMustRecompute(n)&&!Fh(n)){El(n);return}n.producerRecomputeValue(n),El(n)}}function Ph(n){if(n.consumers===void 0)return;let e=xl;xl=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||$b(i)}}finally{xl=e}}function Lh(){return _n?.consumerAllowSignalWrites!==!1}function $b(n){n.dirty=!0,Ph(n),n.consumerMarkedDirty?.(n)}function El(n){n.dirty=!1,n.lastCleanEpoch=is}function Ml(n){return n&&i_(n),Be(n)}function i_(n){if(n.producersTail?.knownValidAtEpoch===is){let e=n.producers;for(;e!==void 0;)e.knownValidAtEpoch=null,e=e.nextProducer}n.producersTail=void 0,n.recomputing=!0}function Oh(n,e){Be(e),n&&r_(n)}function r_(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(so(n))do t=kh(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Fh(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(Nh(t),i!==t.version))return!0}return!1}function bl(n){if(so(n)){let e=n.producers;for(;e!==void 0;)e=kh(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function s_(n,e){let t=n.consumersTail,i=so(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let r=n.producers;r!==void 0;r=r.nextProducer)s_(r.producer,r)}function kh(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,r=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(e.consumers=i,!so(e)){let s=e.producers;for(;s!==void 0;)s=kh(s)}return t}function so(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Uh(n){Wb?.(n)}function Bh(n,e){return Object.is(n,e)}function qb(){throw new Error}var o_=qb;function a_(n){o_(n)}function Vh(n){o_=n}var Xb=null;function Hh(n,e){let t=Object.create(l_);t.value=n,e!==void 0&&(t.equal=e);let i=()=>c_(t);return i[ti]=t,Uh(t),[i,o=>Tl(t,o),o=>zh(t,o)]}function c_(n){return Rh(n),n.value}function Tl(n,e){Lh()||a_(n),n.equal(n.value,e)||(n.value=e,Yb(n))}function zh(n,e){Lh()||a_(n),Tl(n,e(n.value))}var l_=vn(Tt({},Ta),{equal:Bh,value:void 0,kind:"signal"});function Yb(n){n.version++,n_(),Ph(n),Xb?.(n)}var Gh;function wl(){return Gh}function Si(n){let e=Gh;return Gh=n,e}var u_=Symbol("NotFound");function oo(n){return n===u_||n?.name==="\u0275NotFound"}function d_(n){let e=Be(null);try{return n()}finally{Be(e)}}function Je(n){return typeof n=="function"}function Dl(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Cl=Dl(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function rs(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var nn=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Je(i))try{i()}catch(s){e=s instanceof Cl?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{f_(s)}catch(o){e=e??[],o instanceof Cl?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Cl(e)}}add(e){var t;if(e&&e!==this)if(this.closed)f_(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&rs(t,e)}remove(e){let{_finalizers:t}=this;t&&rs(t,e),e instanceof n&&e._removeParent(this)}};nn.EMPTY=(()=>{let n=new nn;return n.closed=!0,n})();var jh=nn.EMPTY;function Al(n){return n instanceof nn||n&&"closed"in n&&Je(n.remove)&&Je(n.add)&&Je(n.unsubscribe)}function f_(n){Je(n)?n():n.unsubscribe()}var ni={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ao={setTimeout(n,e,...t){let{delegate:i}=ao;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=ao;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Il(n){ao.setTimeout(()=>{let{onUnhandledError:e}=ni;if(e)e(n);else throw n})}function wa(){}var h_=Wh("C",void 0,void 0);function p_(n){return Wh("E",void 0,n)}function m_(n){return Wh("N",n,void 0)}function Wh(n,e,t){return{kind:n,value:e,error:t}}var ss=null;function co(n){if(ni.useDeprecatedSynchronousErrorHandling){let e=!ss;if(e&&(ss={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=ss;if(ss=null,t)throw i}}else n()}function g_(n){ni.useDeprecatedSynchronousErrorHandling&&ss&&(ss.errorThrown=!0,ss.error=n)}var os=class extends nn{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Al(e)&&e.add(this)):this.destination=tT}static create(e,t,i){return new lo(e,t,i)}next(e){this.isStopped?qh(m_(e),this):this._next(e)}error(e){this.isStopped?qh(p_(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?qh(h_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},Qb=Function.prototype.bind;function $h(n,e){return Qb.call(n,e)}var Xh=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Rl(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Rl(i)}else Rl(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Rl(t)}}},lo=class extends os{constructor(e,t,i){super();let r;if(Je(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&ni.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&$h(e.next,s),error:e.error&&$h(e.error,s),complete:e.complete&&$h(e.complete,s)}):r=e}this.destination=new Xh(r)}};function Rl(n){ni.useDeprecatedSynchronousErrorHandling?g_(n):Il(n)}function eT(n){throw n}function qh(n,e){let{onStoppedNotification:t}=ni;t&&ao.setTimeout(()=>t(n,e))}var tT={closed:!0,next:wa,error:eT,complete:wa};var uo=typeof Symbol=="function"&&Symbol.observable||"@@observable";function y_(n){return n}function v_(n){return n.length===0?y_:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var tt=class n{constructor(e){e&&(this._subscribe=e)}lift(e){let t=new n;return t.source=this,t.operator=e,t}subscribe(e,t,i){let r=iT(e)?e:new lo(e,t,i);return co(()=>{let{operator:s,source:o}=this;r.add(s?s.call(r,o):o?this._subscribe(r):this._trySubscribe(r))}),r}_trySubscribe(e){try{return this._subscribe(e)}catch(t){e.error(t)}}forEach(e,t){return t=__(t),new t((i,r)=>{let s=new lo({next:o=>{try{e(o)}catch(a){r(a),s.unsubscribe()}},error:r,complete:i});this.subscribe(s)})}_subscribe(e){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(e)}[uo](){return this}pipe(...e){return v_(e)(this)}toPromise(e){return e=__(e),new e((t,i)=>{let r;this.subscribe(s=>r=s,s=>i(s),()=>t(r))})}};tt.create=n=>new tt(n);function __(n){var e;return(e=n??ni.Promise)!==null&&e!==void 0?e:Promise}function nT(n){return n&&Je(n.next)&&Je(n.error)&&Je(n.complete)}function iT(n){return n&&n instanceof os||nT(n)&&Al(n)}function rT(n){return Je(n?.lift)}function qt(n){return e=>{if(rT(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Xt(n,e,t,i,r){return new Yh(n,e,t,i,r)}var Yh=class extends os{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var x_=Dl(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Wn=class extends tt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let t=new Nl(this,this);return t.operator=e,t}_throwIfClosed(){if(this.closed)throw new x_}next(e){co(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let t of this.currentObservers)t.next(e)}})}error(e){co(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:t}=this;for(;t.length;)t.shift().error(e)}})}complete(){co(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:t,isStopped:i,observers:r}=this;return t||i?jh:(this.currentObservers=null,r.push(e),new nn(()=>{this.currentObservers=null,rs(r,e)}))}_checkFinalizedStatuses(e){let{hasError:t,thrownError:i,isStopped:r}=this;t?e.error(i):r&&e.complete()}asObservable(){let e=new tt;return e.source=this,e}};Wn.create=(n,e)=>new Nl(n,e);var Nl=class extends Wn{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:jh}};var Da=class extends Wn{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var Zh={now(){return(Zh.delegate||Date).now()},delegate:void 0};var Pl=class extends nn{constructor(e,t){super()}schedule(e,t=0){return this}};var Ca={setInterval(n,e,...t){let{delegate:i}=Ca;return i?.setInterval?i.setInterval(n,e,...t):setInterval(n,e,...t)},clearInterval(n){let{delegate:e}=Ca;return(e?.clearInterval||clearInterval)(n)},delegate:void 0};var Ll=class extends Pl{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var i;if(this.closed)return this;this.state=e;let r=this.id,s=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(s,r,t)),this.pending=!0,this.delay=t,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(s,this.id,t),this}requestAsyncId(e,t,i=0){return Ca.setInterval(e.flush.bind(e,this),i)}recycleAsyncId(e,t,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return t;t!=null&&Ca.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(e,t);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let i=!1,r;try{this.work(e)}catch(s){i=!0,r=s||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:e,scheduler:t}=this,{actions:i}=t;this.work=this.state=this.scheduler=null,this.pending=!1,rs(i,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}};var Kh=(()=>{class n{constructor(t,i=n.now){this.schedulerActionCtor=t,this.now=i}schedule(t,i=0,r){return new this.schedulerActionCtor(this,t).schedule(r,i)}}return n.now=Zh.now,n})();var Ol=class extends Kh{constructor(e,t=Kh.now){super(e,t),this.actions=[],this._active=!1}flush(e){let{actions:t}=this;if(this._active){t.push(e);return}let i;this._active=!0;do if(i=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,i){for(;e=t.shift();)e.unsubscribe();throw i}}};var sT=new Ol(Ll),E_=sT;var Fl=new tt(n=>n.complete());function kl(n){return n&&Je(n.schedule)}function S_(n){return n[n.length-1]}function M_(n){return Je(S_(n))?n.pop():void 0}function b_(n){return kl(S_(n))?n.pop():void 0}function w_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function T_(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function as(n){return this instanceof as?(this.v=n,this):new as(n)}function D_(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(m){return Promise.resolve(m).then(h,d)}}function a(h,m){i[h]&&(r[h]=function(v){return new Promise(function(g,p){s.push([h,v,g,p])>1||c(h,v)})},m&&(r[h]=m(r[h])))}function c(h,m){try{l(i[h](m))}catch(v){f(s[0][3],v)}}function l(h){h.value instanceof as?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){c("next",h)}function d(h){c("throw",h)}function f(h,m){h(m),s.shift(),s.length&&c(s[0][0],s[0][1])}}function C_(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof T_=="function"?T_(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Ul=(n=>n&&typeof n.length=="number"&&typeof n!="function");function Bl(n){return Je(n?.then)}function Vl(n){return Je(n[uo])}function Hl(n){return Symbol.asyncIterator&&Je(n?.[Symbol.asyncIterator])}function zl(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function oT(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Gl=oT();function jl(n){return Je(n?.[Gl])}function Wl(n){return D_(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield as(t.read());if(r)return yield as(void 0);yield yield as(i)}}finally{t.releaseLock()}})}function $l(n){return Je(n?.getReader)}function Yt(n){if(n instanceof tt)return n;if(n!=null){if(Vl(n))return aT(n);if(Ul(n))return cT(n);if(Bl(n))return lT(n);if(Hl(n))return A_(n);if(jl(n))return uT(n);if($l(n))return dT(n)}throw zl(n)}function aT(n){return new tt(e=>{let t=n[uo]();if(Je(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function cT(n){return new tt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function lT(n){return new tt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Il)})}function uT(n){return new tt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function A_(n){return new tt(e=>{fT(n,e).catch(t=>e.error(t))})}function dT(n){return A_(Wl(n))}function fT(n,e){var t,i,r,s;return w_(this,void 0,void 0,function*(){try{for(t=C_(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function $n(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function ql(n,e=0){return qt((t,i)=>{t.subscribe(Xt(i,r=>$n(i,n,()=>i.next(r),e),()=>$n(i,n,()=>i.complete(),e),r=>$n(i,n,()=>i.error(r),e)))})}function Xl(n,e=0){return qt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function I_(n,e){return Yt(n).pipe(Xl(e),ql(e))}function R_(n,e){return Yt(n).pipe(Xl(e),ql(e))}function N_(n,e){return new tt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function P_(n,e){return new tt(t=>{let i;return $n(t,e,()=>{i=n[Gl](),$n(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Je(i?.return)&&i.return()})}function Yl(n,e){if(!n)throw new Error("Iterable cannot be null");return new tt(t=>{$n(t,e,()=>{let i=n[Symbol.asyncIterator]();$n(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function L_(n,e){return Yl(Wl(n),e)}function O_(n,e){if(n!=null){if(Vl(n))return I_(n,e);if(Ul(n))return N_(n,e);if(Bl(n))return R_(n,e);if(Hl(n))return Yl(n,e);if(jl(n))return P_(n,e);if($l(n))return L_(n,e)}throw zl(n)}function F_(n,e){return e?O_(n,e):Yt(n)}function Jh(...n){let e=b_(n);return F_(n,e)}function k_(n){return n instanceof Date&&!isNaN(n)}function un(n,e){return qt((t,i)=>{let r=0;t.subscribe(Xt(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:hT}=Array;function pT(n,e){return hT(e)?n(...e):n(e)}function U_(n){return un(e=>pT(n,e))}var{isArray:mT}=Array,{getPrototypeOf:gT,prototype:yT,keys:vT}=Object;function B_(n){if(n.length===1){let e=n[0];if(mT(e))return{args:e,keys:null};if(_T(e)){let t=vT(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function _T(n){return n&&typeof n=="object"&&gT(n)===yT}function V_(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function H_(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,f=()=>{d&&!c.length&&!l&&e.complete()},h=v=>l<i?m(v):c.push(v),m=v=>{s&&e.next(v),l++;let g=!1;Yt(t(v,u++)).subscribe(Xt(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{g=!0},void 0,()=>{if(g)try{for(l--;c.length&&l<i;){let p=c.shift();o?$n(e,o,()=>m(p)):m(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(Xt(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Zl(n,e,t=1/0){return Je(e)?Zl((i,r)=>un((s,o)=>e(i,s,r,o))(Yt(n(i,r))),t):(typeof e=="number"&&(t=e),qt((i,r)=>H_(i,r,n,t)))}function Qh(...n){let e=M_(n),{args:t,keys:i}=B_(n),r=new tt(s=>{let{length:o}=t;if(!o){s.complete();return}let a=new Array(o),c=o,l=o;for(let u=0;u<o;u++){let d=!1;Yt(t[u]).subscribe(Xt(s,f=>{d||(d=!0,l--),a[u]=f},()=>c--,void 0,()=>{(!c||!d)&&(l||s.next(i?V_(i,a):a),s.complete())}))}});return e?r.pipe(U_(e)):r}function ep(n=0,e,t=E_){let i=-1;return e!=null&&(kl(e)?t=e:i=e),new tt(r=>{let s=k_(n)?+n-t.now():n;s<0&&(s=0);let o=0;return t.schedule(function(){r.closed||(r.next(o++),0<=i?this.schedule(void 0,i):r.complete())},s)})}function tp(n,e){return qt((t,i)=>{let r=0;t.subscribe(Xt(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Aa(n){return qt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(Xt(t,void 0,void 0,o=>{s=Yt(n(o,Aa(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function np(n,e){return Je(e)?Zl(n,e,1):Zl(n,1)}function ip(n){return qt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Kl(n,e){return qt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(Xt(i,c=>{r?.unsubscribe();let l=0,u=s++;Yt(n(c,u)).subscribe(r=Xt(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function rp(n){return qt((e,t)=>{Yt(n).subscribe(Xt(t,()=>t.complete(),wa)),!t.closed&&e.subscribe(t)})}var nu="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",Ce=class extends Error{code;constructor(e,t){super(Pa(e,t)),this.code=e}};function xT(n){return`NG0${Math.abs(n)}`}function Pa(n,e){return`${xT(n)}${e?": "+e:""}`}function ht(n){for(let e in n)if(n[e]===ht)return e;throw Error("")}function iu(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(iu).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function xp(n,e){return n?e?`${n} ${e}`:n:e||""}var ET=ht({__forward_ref__:ht});function ru(n){return n.__forward_ref__=ru,n}function dn(n){return $_(n)?n():n}function $_(n){return typeof n=="function"&&n.hasOwnProperty(ET)&&n.__forward_ref__===ru}function nt(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function su(n){return ST(n,ou)}function ST(n,e){return n.hasOwnProperty(e)&&n[e]||null}function MT(n){let e=n?.[ou]??null;return e||null}function op(n){return n&&n.hasOwnProperty(Ql)?n[Ql]:null}var ou=ht({\u0275prov:ht}),Ql=ht({\u0275inj:ht}),ke=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=nt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Ep(n){return n&&!!n.\u0275providers}var Sp=ht({\u0275cmp:ht}),Mp=ht({\u0275dir:ht}),bp=ht({\u0275pipe:ht});var ap=ht({\u0275fac:ht}),ps=ht({__NG_ELEMENT_ID__:ht}),z_=ht({__NG_ENV_ID__:ht});function ms(n){return wp(n,"@Component"),n[Sp]||null}function Tp(n){return wp(n,"@Directive"),n[Mp]||null}function q_(n){return wp(n,"@Pipe"),n[bp]||null}function wp(n,e){if(n==null)throw new Ce(-919,!1)}function Dp(n){return typeof n=="string"?n:n==null?"":String(n)}var X_=ht({ngErrorCode:ht}),bT=ht({ngErrorMessage:ht}),TT=ht({ngTokenPath:ht});function Cp(n,e){return Y_("",-200,e)}function au(n,e){throw new Ce(-201,!1)}function Y_(n,e,t){let i=new Ce(e,n);return i[X_]=e,i[bT]=n,t&&(i[TT]=t),i}function wT(n){return n[X_]}var cp;function Z_(){return cp}function xn(n){let e=cp;return cp=n,e}function Ap(n,e,t){let i=su(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;au(n,"")}var Qi=globalThis;var DT={},cs=DT,CT="__NG_DI_FLAG__",lp=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=ls(t)||0;try{return this.injector.get(e,i&8?null:cs,i)}catch(r){if(oo(r))return r;throw r}}};function AT(n,e=0){let t=wl();if(t===void 0)throw new Ce(-203,!1);if(t===null)return Ap(n,void 0,e);{let i=IT(e),r=t.retrieve(n,i);if(oo(r)){if(i.optional)return null;throw r}return r}}function Ze(n,e=0){return(Z_()||AT)(dn(n),e)}function ve(n,e){return Ze(n,ls(e))}function ls(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function IT(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function up(n){let e=[];for(let t=0;t<n.length;t++){let i=dn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new Ce(900,!1);let r,s=0;for(let o=0;o<i.length;o++){let a=i[o],c=RT(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Ze(r,s))}else e.push(Ze(i))}return e}function RT(n){return n[CT]}function us(n,e){let t=n.hasOwnProperty(ap);return t?n[ap]:null}function K_(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let r=n[i],s=e[i];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function J_(n){return n.flat(Number.POSITIVE_INFINITY)}function cu(n,e){n.forEach(t=>Array.isArray(t)?cu(t,e):e(t))}function Ip(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function La(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Q_(n,e,t,i){let r=n.length;if(r==e)n.push(t,i);else if(r===1)n.push(i,n[0]),n[0]=t;else{for(r--,n.push(n[r-1],n[r]);r>e;){let s=r-2;n[r]=n[s],r--}n[e]=t,n[e+1]=i}}function e0(n,e,t){let i=po(n,e);return i>=0?n[i|1]=t:(i=~i,Q_(n,i,e,t)),i}function lu(n,e){let t=po(n,e);if(t>=0)return n[t|1]}function po(n,e){return NT(n,e,1)}function NT(n,e,t){let i=0,r=n.length>>t;for(;r!==i;){let s=i+(r-i>>1),o=n[s<<t];if(e===o)return s<<t;o>e?r=s:i=s+1}return~(r<<t)}var gs={},Er=[],mo=new ke(""),Oa=new ke("",-1),Rp=new ke(""),ho=class{get(e,t=cs){if(t===cs){let r=Y_("",-201);throw r.name="\u0275NotFound",r}return t}};function ys(n){return{\u0275providers:n}}function t0(n){return ys([{provide:mo,multi:!0,useValue:n}])}function n0(...n){return{\u0275providers:Np(!0,n),\u0275fromNgModule:!0}}function Np(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return cu(e,o=>{let a=o;eu(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&i0(r,s),t}function i0(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];Pp(r,s=>{e(s,i)})}}function eu(n,e,t,i){if(n=dn(n),!n)return!1;let r=null,s=op(n),o=!s&&ms(n);if(!s&&!o){let c=n.ngModule;if(s=op(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)eu(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;cu(s.imports,u=>{eu(u,e,t,i)&&(l||=[],l.push(u))}),l!==void 0&&i0(l,e)}if(!a){let l=us(r)||(()=>new r);e({provide:r,useFactory:l,deps:Er},r),e({provide:Rp,useValue:r,multi:!0},r),e({provide:mo,useValue:()=>Ze(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;Pp(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function Pp(n,e){for(let t of n)Ep(t)&&(t=t.\u0275providers),Array.isArray(t)?Pp(t,e):e(t)}var PT=ht({provide:String,useValue:ht});function r0(n){return n!==null&&typeof n=="object"&&PT in n}function LT(n){return!!(n&&n.useExisting)}function OT(n){return!!(n&&n.useFactory)}function ds(n){return typeof n=="function"}function s0(n){return!!n.useClass}var Fa=new ke(""),Jl={},G_={},sp;function ka(){return sp===void 0&&(sp=new ho),sp}var En=class{},fs=class extends En{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,fp(e,o=>this.processProvider(o)),this.records.set(Oa,fo(void 0,this)),r.has("environment")&&this.records.set(En,fo(void 0,this));let s=this.records.get(Fa);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Rp,Er,{self:!0}))}retrieve(e,t){let i=ls(t)||0;try{return this.get(e,cs,i)}catch(r){if(oo(r))return r;throw r}}destroy(){Ia(this),this._destroyed=!0;let e=Be(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Be(e)}}onDestroy(e){return Ia(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Ia(this);let t=Si(this),i=xn(void 0),r;try{return e()}finally{Si(t),xn(i)}}get(e,t=cs,i){if(Ia(this),e.hasOwnProperty(z_))return e[z_](this);let r=ls(i),s,o=Si(this),a=xn(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=VT(e)&&su(e);u&&this.injectableDefInScope(u)?l=fo(dp(e),Jl):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?ka():this.parent;return t=r&8&&t===cs?null:t,c.get(e,t)}catch(c){let l=wT(c);throw l===-200||l===-201?new Ce(l,null):c}finally{xn(a),Si(o)}}resolveInjectorInitializers(){let e=Be(null),t=Si(this),i=xn(void 0),r;try{let s=this.get(mo,Er,{self:!0});for(let o of s)o()}finally{Si(t),xn(i),Be(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=dn(e);let t=ds(e)?e:dn(e&&e.provide),i=kT(e);if(!ds(e)&&e.multi===!0){let r=this.records.get(t);r||(r=fo(void 0,Jl,!0),r.factory=()=>up(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let r=Be(null);try{if(t.value===G_)throw Cp("");return t.value===Jl&&(t.value=G_,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&BT(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Be(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=dn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function dp(n){let e=su(n),t=e!==null?e.factory:us(n);if(t!==null)return t;if(n instanceof ke)throw new Ce(-204,!1);if(n instanceof Function)return FT(n);throw new Ce(-204,!1)}function FT(n){if(n.length>0)throw new Ce(-204,!1);let t=MT(n);return t!==null?()=>t.factory(n):()=>new n}function kT(n){if(r0(n))return fo(void 0,n.useValue);{let e=Lp(n);return fo(e,Jl)}}function Lp(n,e,t){let i;if(ds(n)){let r=dn(n);return us(r)||dp(r)}else if(r0(n))i=()=>dn(n.useValue);else if(OT(n))i=()=>n.useFactory(...up(n.deps||[]));else if(LT(n))i=(r,s)=>Ze(dn(n.useExisting),s!==void 0&&s&8?8:void 0);else{let r=dn(n&&(n.useClass||n.provide));if(UT(n))i=()=>new r(...up(n.deps));else return us(r)||dp(r)}return i}function Ia(n){if(n.destroyed)throw new Ce(-205,!1)}function fo(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function UT(n){return!!n.deps}function BT(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function VT(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function fp(n,e){for(let t of n)Array.isArray(t)?fp(t,e):t&&Ep(t)?fp(t.\u0275providers,e):e(t)}function go(n,e){let t;n instanceof fs?(Ia(n),t=n):t=new lp(n);let i,r=Si(t),s=xn(void 0);try{return e()}finally{Si(r),xn(s)}}function o0(){return Z_()!==void 0||wl()!=null}var ii=0,Ae=1,Le=2,Zt=3,qn=4,Pn=5,Ua=6,yo=7,fn=8,er=9,ri=10,Vt=11,vo=12,Op=13,Sr=14,si=15,Mr=16,vs=17,Mi=18,tr=19,Fp=20,Yi=21,uu=22,Ba=23,Ln=24,du=25,br=26,Kt=27,a0=1;var _s=7,Va=8,xs=9,rn=10;function Tr(n){return Array.isArray(n)&&typeof n[a0]=="object"}function Xn(n){return Array.isArray(n)&&n[a0]===!0}function kp(n){return(n.flags&4)!==0}function wr(n){return n.componentOffset>-1}function fu(n){return(n.flags&1)===1}function Dr(n){return!!n.template}function _o(n){return(n[Le]&512)!==0}function Es(n){return(n[Le]&256)===256}var hu=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n[n.ATTRIBUTE_NO_BINDING=6]="ATTRIBUTE_NO_BINDING",n})(hu||{});var c0="svg",l0="math";function sn(n){for(;Array.isArray(n);)n=n[ii];return n}function Up(n,e){return sn(e[n])}function bi(n,e){return sn(e[n.index])}function pu(n,e){return n.data[e]}function u0(n,e){return n[e]}function Bp(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function Ti(n,e){let t=e[n];return Tr(t)?t:t[ii]}function d0(n){return(n[Le]&4)===4}function mu(n){return(n[Le]&128)===128}function f0(n){return Xn(n[Zt])}function Cr(n,e){return e==null?null:n[e]}function Vp(n){n[vs]=0}function Hp(n){n[Le]&1024||(n[Le]|=1024,mu(n)&&za(n))}function h0(n,e){for(;n>0;)e=e[Sr],n--;return e}function Ha(n){return!!(n[Le]&9216||n[Ln]?.dirty)}function gu(n){n[ri].changeDetectionScheduler?.notify(8),n[Le]&64&&(n[Le]|=1024),Ha(n)&&za(n)}function za(n){n[ri].changeDetectionScheduler?.notify(0);let e=Zi(n);for(;e!==null&&!(e[Le]&8192||(e[Le]|=8192,!mu(e)));)e=Zi(e)}function yu(n,e){if(Es(n))throw new Ce(911,!1);n[Yi]===null&&(n[Yi]=[]),n[Yi].push(e)}function p0(n,e){if(n[Yi]===null)return;let t=n[Yi].indexOf(e);t!==-1&&n[Yi].splice(t,1)}function Zi(n){let e=n[Zt];return Xn(e)?e[Zt]:e}function zp(n){return n[yo]??=[]}function Gp(n){return n.cleanup??=[]}function m0(n,e,t,i){let r=zp(e);r.push(t),n.firstCreatePass&&Gp(n).push(i,r.length-1)}var Qe={lFrame:I0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var hp=!1;function g0(){return Qe.lFrame.elementDepthCount}function y0(){Qe.lFrame.elementDepthCount++}function jp(){Qe.lFrame.elementDepthCount--}function v0(){return Qe.bindingsEnabled}function _0(){return Qe.skipHydrationRootTNode!==null}function Wp(n){return Qe.skipHydrationRootTNode===n}function $p(){Qe.skipHydrationRootTNode=null}function lt(){return Qe.lFrame.lView}function Mn(){return Qe.lFrame.tView}function oi(){let n=qp();for(;n!==null&&n.type===64;)n=n.parent;return n}function qp(){return Qe.lFrame.currentTNode}function x0(){let n=Qe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function xo(n,e){let t=Qe.lFrame;t.currentTNode=n,t.isParent=e}function Xp(){return Qe.lFrame.isParent}function E0(){Qe.lFrame.isParent=!1}function Yp(){return hp}function Zp(n){let e=hp;return hp=n,e}function S0(){let n=Qe.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function M0(n){return Qe.lFrame.bindingIndex=n}function Ga(){return Qe.lFrame.bindingIndex++}function b0(n){let e=Qe.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function T0(){return Qe.lFrame.inI18n}function w0(n,e){let t=Qe.lFrame;t.bindingIndex=t.bindingRootIndex=n,vu(e)}function D0(){return Qe.lFrame.currentDirectiveIndex}function vu(n){Qe.lFrame.currentDirectiveIndex=n}function C0(n){let e=Qe.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function Kp(){return Qe.lFrame.currentQueryIndex}function _u(n){Qe.lFrame.currentQueryIndex=n}function HT(n){let e=n[Ae];return e.type===2?e.declTNode:e.type===1?n[Pn]:null}function Jp(n,e,t){if(t&4){let r=e,s=n;for(;r=r.parent,r===null&&!(t&1);)if(r=HT(s),r===null||(s=s[Sr],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=Qe.lFrame=A0();return i.currentTNode=e,i.lView=n,!0}function xu(n){let e=A0(),t=n[Ae];Qe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function A0(){let n=Qe.lFrame,e=n===null?null:n.child;return e===null?I0(n):e}function I0(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function R0(){let n=Qe.lFrame;return Qe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Qp=R0;function Eu(){let n=R0();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function N0(n){return(Qe.lFrame.contextLView=h0(n,Qe.lFrame.contextLView))[fn]}function Ss(){return Qe.lFrame.selectedIndex}function Ar(n){Qe.lFrame.selectedIndex=n}function em(){let n=Qe.lFrame;return pu(n.tView,n.selectedIndex)}function tm(){return Qe.lFrame.currentNamespace}var P0=!0;function Su(){return P0}function Mu(n){P0=n}function pp(n,e=null,t=null,i){let r=L0(n,e,t,i);return r.resolveInjectorInitializers(),r}function L0(n,e=null,t=null,i,r=new Set){let s=[t||Er,n0(n)],o;return new fs(s,e||ka(),o||null,r)}var Ki=class n{static THROW_IF_NOT_FOUND=cs;static NULL=new ho;static create(e,t){if(Array.isArray(e))return pp({name:""},t,e,"");{let i=e.name??"";return pp({name:i},e.parent,e.providers,i)}}static \u0275prov=nt({token:n,providedIn:"any",factory:()=>Ze(Oa)});static __NG_ELEMENT_ID__=-1},on=new ke(""),Nn=class{static __NG_ELEMENT_ID__=zT;static __NG_ENV_ID__=e=>e},mp=class extends Nn{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Es(this._lView)}onDestroy(e){let t=this._lView;return yu(t,e),()=>p0(t,e)}};function zT(){return new mp(lt())}var O0=!1,F0=new ke(""),Ms=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Da(!1);debugTaskTracker=ve(F0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new tt(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=nt({token:n,providedIn:"root",factory:()=>new n})}return n})(),gp=class extends Wn{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,o0()&&(this.destroyRef=ve(Nn,{optional:!0})??void 0,this.pendingTasks=ve(Ms,{optional:!0})??void 0)}emit(e){let t=Be(null);try{super.next(e)}finally{Be(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof nn&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Xi=gp;function tu(...n){}function nm(n){let e,t;function i(){n=tu;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function k0(n){return queueMicrotask(()=>n()),()=>{n=tu}}var im="isAngularZone",Ra=im+"_ID",GT=0,Sn=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Xi(!1);onMicrotaskEmpty=new Xi(!1);onStable=new Xi(!1);onError=new Xi(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=O0}=e;if(typeof Zone>"u")throw new Ce(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,$T(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(im)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new Ce(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new Ce(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,jT,tu,tu);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},jT={};function rm(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function WT(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){nm(()=>{n.callbackScheduled=!1,yp(n),n.isCheckStableRunning=!0,rm(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),yp(n)}function $T(n){let e=()=>{WT(n)},t=GT++;n._inner=n._inner.fork({name:"angular",properties:{[im]:!0,[Ra]:t,[Ra+t]:!0},onInvokeTask:(i,r,s,o,a,c)=>{if(qT(c))return i.invokeTask(s,o,a,c);try{return j_(n),i.invokeTask(s,o,a,c)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),W_(n)}},onInvoke:(i,r,s,o,a,c,l)=>{try{return j_(n),i.invoke(s,o,a,c,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!XT(c)&&e(),W_(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,yp(n),rm(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function yp(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function j_(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function W_(n){n._nesting--,rm(n)}var Na=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Xi;onMicrotaskEmpty=new Xi;onStable=new Xi;onError=new Xi;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function qT(n){return U0(n,"__ignore_ng_zone__")}function XT(n){return U0(n,"__scheduler_tick__")}function U0(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Ji=class{_console=console;handleError(e){this._console.error("ERROR",e)}},nr=new ke("",{factory:()=>{let n=ve(Sn),e=ve(En),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(Ji),t.handleError(i))})}}}),B0={provide:mo,useValue:()=>{let n=ve(Ji,{optional:!0})},multi:!0},YT=new ke("",{factory:()=>{let n=ve(on).defaultView;if(!n)return;let e=ve(nr),t=s=>{e(s.reason),s.preventDefault()},i=s=>{s.error?e(s.error):e(new Error(s.message,{cause:s})),s.preventDefault()},r=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(r):r(),ve(Nn).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function sm(){return ys([t0(()=>{ve(YT)})])}function wi(n,e){let[t,i,r]=Hh(n,e?.equal),s=t,o=s[ti];return s.set=i,s.update=r,s.asReadonly=V0.bind(s),s}function V0(){let n=this[ti];if(n.readonlyFn===void 0){let e=()=>this();e[ti]=n,n.readonlyFn=e}return n.readonlyFn}var ja=new ke("",{factory:()=>ZT}),ZT="ng";var bu=new ke(""),Wa=new ke("",{providedIn:"platform",factory:()=>"unknown"});var $a=new ke("",{factory:()=>ve(on).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var hs=class{},qa=new ke("",{factory:()=>!0});var om=new ke(""),am=(()=>{class n{static \u0275prov=nt({token:n,providedIn:"root",factory:()=>new vp})}return n})(),vp=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},_p=class{[ti];constructor(e){this[ti]=e}destroy(){this[ti].destroy()}};var Xa=(()=>{class n{internalPendingTasks=ve(Ms);scheduler=ve(hs);errorHandler=ve(nr);add(){let t=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(t)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(t))}}run(t){let i=this.add();try{t().catch(this.errorHandler).finally(i)}catch(r){this.errorHandler(r),i()}}static \u0275prov=nt({token:n,providedIn:"root",factory:()=>new n})}return n})();function vx(n){return{toString:n}.toString()}var rt=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(rt||{}),Ru=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function _x(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var xx=null,ju=(()=>{xx=H0;let n=()=>H0;return n.ngInherit=!0,n})();function pw(){return xx}function H0(n){return n.type.prototype.ngOnChanges&&(n.setInput=gw),mw}function mw(){let n=Ex(this),e=n?.current;if(e){let t=n.previous;if(t===gs)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function gw(n,e,t,i,r){let s=this.declaredInputs[i],o=Ex(n)||yw(n,{previous:gs,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Ru(l&&l.currentValue,t,c===gs),_x(n,e,r,t)}var ym="__ngSimpleChanges__";function Ex(n){return Object.hasOwn(n,ym)&&n[ym]||null}function yw(n,e){return n[ym]=e}var z0=[];var pt=function(n,e=null,t){for(let i=0;i<z0.length;i++){let r=z0[i];r(n,e,t)}};function vw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=pw()(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function _w(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Du(n,e,t){Sx(n,e,3,t)}function Cu(n,e,t,i){(n[Le]&3)===t&&Sx(n,e,t,i)}function cm(n,e){let t=n[Le];(t&3)===e&&(t&=16383,t+=1,n[Le]=t)}function Sx(n,e,t,i){let r=i!==void 0?n[vs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[vs]+=65536),(a<s||s==-1)&&(xw(n,t,e,c),n[vs]=(n[vs]&4294901760)+c+2),c++}function G0(n,e){pt(rt.LifecycleHookStart,n,e);let t=Be(null);try{e.call(n)}finally{Be(t),pt(rt.LifecycleHookEnd,n,e)}}function xw(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Le]>>14<n[vs]>>16&&(n[Le]&3)===e&&(n[Le]+=16384,G0(a,s)):G0(a,s)}var So=-1,Ts=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=i}};function Ew(n){return(n.flags&8)!==0}function Sw(n){return(n.flags&16)!==0}function Mw(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];Tw(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function bw(n){return n===3||n===4||n===6}function Tw(n){return n.charCodeAt(0)===64}function Wu(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?j0(n,t,r,null,e[++i]):j0(n,t,r,null,null))}}return n}function j0(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){r!==null&&(n[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),r!==null&&n.splice(s++,0,r)}function Mx(n){return n!==So}function Nu(n){return n&32767}function ww(n){return n>>16}function Pu(n,e){let t=ww(n),i=e;for(;t>0;)i=i[Sr],t--;return i}var vm=!0;function Lu(n){let e=vm;return vm=n,e}var Dw=256,bx=Dw-1,Tx=5,Cw=0,Di={};function Aw(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(ps)&&(i=t[ps]),i==null&&(i=t[ps]=Cw++);let r=i&bx,s=1<<r;e.data[n+(r>>Tx)]|=s}function Ou(n,e){let t=wx(n,e);if(t!==-1)return t;let i=e[Ae];i.firstCreatePass&&(n.injectorIndex=e.length,lm(i.data,n),lm(e,null),lm(i.blueprint,null));let r=Bm(n,e),s=n.injectorIndex;if(Mx(r)){let o=Nu(r),a=Pu(r,e),c=a[Ae].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function lm(n,e){n.push(0,0,0,0,0,0,0,0,e)}function wx(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Bm(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=Rx(r),i===null)return So;if(t++,r=r[Sr],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return So}function _m(n,e,t){Aw(n,e,t)}function Dx(n,e,t){if(t&8||n!==void 0)return n;au(e,"NodeInjector")}function Cx(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let r=n[er],s=xn(void 0);try{return r?r.get(e,i,t&8):Ap(e,i,t&8)}finally{xn(s)}}return Dx(i,e,t)}function Ax(n,e,t,i=0,r){if(n!==null){if(e[Le]&2048&&!(i&2)){let o=Pw(n,e,t,i,Di);if(o!==Di)return o}let s=Ix(n,e,t,i,Di);if(s!==Di)return s}return Cx(e,t,i,r)}function Ix(n,e,t,i,r){let s=Rw(t);if(typeof s=="function"){if(!Jp(e,n,i))return i&1?Dx(r,t,i):Cx(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&8))au(t);else return o}finally{Qp()}}else if(typeof s=="number"){let o=null,a=wx(n,e),c=So,l=i&1?e[si][Pn]:null;for((a===-1||i&4)&&(c=a===-1?Bm(n,e):e[a+8],c===So||!$0(i,!1)?a=-1:(o=e[Ae],a=Nu(c),e=Pu(c,e)));a!==-1;){let u=e[Ae];if(W0(s,a,u.data)){let d=Iw(a,e,t,o,i,l);if(d!==Di)return d}c=e[a+8],c!==So&&$0(i,e[Ae].data[a+8]===l)&&W0(s,a,e)?(o=u,a=Nu(c),e=Pu(c,e)):a=-1}}return r}function Iw(n,e,t,i,r,s){let o=e[Ae],a=o.data[n+8],c=i==null?wr(a)&&vm:i!=o&&(a.type&3)!==0,l=r&1&&s===a,u=Au(a,o,t,c,l);return u!==null?Qa(e,o,u,a,r):Di}function Au(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:l;for(let h=d;h<f;h++){let m=o[h];if(h<c&&t===m||h>=c&&m.type===t)return h}if(r){let h=o[c];if(h&&Dr(h)&&h.type===t)return c}return null}function Qa(n,e,t,i,r){let s=n[t],o=e.data;if(s instanceof Ts){let a=s;if(a.resolving)throw Cp("");let c=Lu(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?xn(a.injectImpl):null,f=Jp(n,i,0);try{s=n[t]=a.factory(void 0,r,o,n,i),e.firstCreatePass&&t>=i.directiveStart&&vw(t,o[t],e)}finally{d!==null&&xn(d),Lu(c),a.resolving=!1,Qp()}}return s}function Rw(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(ps)?n[ps]:void 0;return typeof e=="number"?e>=0?e&bx:Nw:e}function W0(n,e,t){let i=1<<n;return!!(t[e+(n>>Tx)]&i)}function $0(n,e){return!(n&2)&&!(n&1&&e)}var Ir=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Ax(this._tNode,this._lView,e,ls(i),t)}};function Nw(){return new Ir(oi(),lt())}function Pw(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Le]&2048&&!_o(o);){let a=Ix(s,o,t,i|2,Di);if(a!==Di)return a;let c=s.parent;if(!c){let l=o[Fp];if(l){let u=l.get(t,Di,i&-5);if(u!==Di)return u}c=Rx(o),o=o[Sr]}s=c}return r}function Rx(n){let e=n[Ae],t=e.type;return t===2?e.declTNode:t===1?n[Pn]:null}function Rr(n){return{token:n.token,providedIn:n.autoProvided===!1?null:"root",factory:n.factory,value:void 0}}function Lw(){return Do(oi(),lt())}function Do(n,e){return new Co(bi(n,e))}var Co=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Lw}return n})();function Ow(n){return n instanceof Co?n.nativeElement:n}function Fw(){return this._results[Symbol.iterator]()}var Fu=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Wn}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=J_(e);(this._changesDetected=!K_(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=Fw};function Nx(n){return(n.flags&128)===128}var Vm=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(Vm||{}),Px=new Map,kw=0;function Uw(){return kw++}function Bw(n){Px.set(n[tr],n)}function xm(n){Px.delete(n[tr])}var q0="__ngContext__";function Mo(n,e){Tr(e)?(n[q0]=e[tr],Bw(e)):n[q0]=e}function Lx(n){return Fx(n[vo])}function Ox(n){return Fx(n[qn])}function Fx(n){for(;n!==null&&!Xn(n);)n=n[qn];return n}var Em;function Hm(n){Em=n}function kx(){if(Em!==void 0)return Em;if(typeof document<"u")return document;throw new Ce(210,!1)}var Ux=!1,Bx=new ke("",{factory:()=>Ux});var X0=new WeakMap;function Vw(n,e){if(n==null||typeof n!="object")return;let t=X0.get(n);t||(t=new WeakSet,X0.set(n,t)),t.add(e)}var Hw=(n,e,t,i)=>{};function zw(n,e,t,i){Hw(n,e,t,i)}function zm(n){return(n.flags&32)===32}var Gw=()=>null;function Vx(n,e,t=!1){return Gw(n,e,t)}function Hx(n,e){let t=n.contentQueries;if(t!==null){let i=Be(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];_u(s),a.contentQueries(2,e[o],o)}}}finally{Be(i)}}}function Sm(n,e,t){_u(0);let i=Be(null);try{e(n,t)}finally{Be(i)}}function zx(n,e,t){if(kp(e)){let i=Be(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{Be(i)}}}var ci=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(ci||{});var Tu;function jw(){if(Tu===void 0&&(Tu=null,Qi.trustedTypes))try{Tu=Qi.trustedTypes.createPolicy("angular",{createHTML:n=>n,createScript:n=>n,createScriptURL:n=>n})}catch{}return Tu}function Ww(n){return jw()?.createScriptURL(n)||n}var ku=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${nu})`}};function Gm(n){return n instanceof ku?n.changingThisBreaksApplicationSecurity:n}function Gx(n,e){let t=jx(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${nu})`)}return t===e}function jx(n){return n instanceof ku&&n.getTypeName()||null}var $w=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Wx(n){return n=String(n),n.match($w)?n:"unsafe:"+n}function qw(n,e){return n.createText(e)}function Xw(n,e,t){n.setValue(e,t)}function $x(n,e,t){return n.createElement(e,t)}function bs(n,e,t,i,r){n.insertBefore(e,t,i,r)}function qx(n,e,t){n.appendChild(e,t)}function Y0(n,e,t,i,r){i!==null?bs(n,e,t,i,r):qx(n,e,t)}function Yw(n,e,t,i){n.removeChild(null,e,t,i)}function Zw(n,e,t){n.setAttribute(e,"style",t)}function Kw(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Xx(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Mw(n,e,i),r!==null&&Kw(n,e,r),s!==null&&Zw(n,e,s)}function jm(n){let e=Jw();return e?e.sanitize(hu.URL,n)||"":Gx(n,"URL")?Gm(n):Wx(Dp(n))}function Wm(n){return Ww(n[0])}function Jw(){let n=lt();return n&&n[ri].sanitizer}function Qw(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var Yx="ng-template";function eD(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Qw(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if($m(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function $m(n){return n.type===4&&n.value!==Yx}function tD(n,e,t){let i=n.type===4&&!t?Yx:n.value;return e===i}function nD(n,e,t){let i=4,r=n.attrs,s=r!==null?sD(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!ai(i)&&!ai(c))return!1;if(o&&ai(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!tD(n,c,t)||c===""&&e.length===1){if(ai(i))return!1;o=!0}}else if(i&8){if(r===null||!eD(n,r,c,t)){if(ai(i))return!1;o=!0}}else{let l=e[++a],u=iD(c,r,$m(n),t);if(u===-1){if(ai(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(ai(i))return!1;o=!0}}}}return ai(i)||o}function ai(n){return(n&1)===0}function iD(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return oD(e,n)}function rD(n,e,t=!1){for(let i=0;i<e.length;i++)if(nD(n,e[i],t))return!0;return!1}function sD(n){for(let e=0;e<n.length;e++){let t=n[e];if(bw(t))return e}return n.length}function oD(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Z0(n,e){return n?":not("+e.trim()+")":e}function aD(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!ai(o)&&(e+=Z0(s,r),r=""),i=o,s=s||!ai(i);t++}return r!==""&&(e+=Z0(s,r)),e}function cD(n){return n.map(aD).join(",")}function lD(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!ai(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Ai={},Ci=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(Ci||{}),uD;function qm(n,e){return uD(n,e)}var zV=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var Mm=new WeakMap;function Zx(n){return n?n[Sr]??n:null}var Za=new WeakSet;function dD(n,e,t){let i=Mm.get(n);if(!i||i.length===0)return;let r=e.parentNode,s=e.previousSibling,o=Zx(t);for(let a=i.length-1;a>=0;a--){let{el:c,declarationView:l}=i[a],u=c.parentNode;c===e?(i.splice(a,1),Za.add(c),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):s&&c===s?(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c)):u&&r&&u!==r&&(o===null||l===null||o===l)&&(i.splice(a,1),c.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),c.parentNode?.removeChild(c))}}function fD(n,e,t){let i=Zx(t),r=Mm.get(n);r?r.some(s=>s.el===e)||r.push({el:e,declarationView:i}):Mm.set(n,[{el:e,declarationView:i}])}var ws=new Set,Xm=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(Xm||{}),Rs=new ke(""),K0=new Set;function sc(n){K0.has(n)||(K0.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var Kx=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=nt({token:n,providedIn:"root",factory:()=>new n})}return n})();var Jx=new ke("",{factory:()=>{let n=ve(En),e=new Set;return n.onDestroy(()=>e.clear()),{queue:e,isScheduled:!1,scheduler:null,injector:n}}});function Qx(n,e,t){let i=n.get(Jx);if(Array.isArray(e))for(let r of e)i.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function hD(n,e){let t=n.get(Jx);if(Array.isArray(e))for(let i of e)t.queue.delete(i);else t.queue.delete(e)}function pD(n,e){for(let[t,i]of e)Qx(n,i.animateFns)}function J0(n,e,t,i){let r=n?.[br]?.enter;e!==null&&r&&r.has(t.index)&&pD(i,r)}function Q0(n,e,t,i){try{t.get(Oa)}catch{return i(!1)}let r=n?.[br];r?.enter?.has(e.index)&&hD(t,r.enter.get(e.index).animateFns);let s=mD(n,e,r);if(s.size===0){let o=!1;if(n){let a=[];$u(n,e,a),o=a.length>0}if(!o)return i(!1)}n&&ws.add(n[tr]),Qx(t,()=>gD(n,e,r||void 0,s,i),r||void 0)}function mD(n,e,t){let i=new Map,r=t?.leave;if(r&&r.has(e.index)&&i.set(e.index,r.get(e.index)),n&&r)for(let[s,o]of r){if(i.has(s))continue;let c=n[Ae].data[s].parent;for(;c;){if(c===e){i.set(s,o);break}c=c.parent}}return i}function gD(n,e,t,i,r){let s=[];if(t&&t.leave)for(let[o]of i){if(!t.leave.has(o))continue;let a=t.leave.get(o);for(let c of a.animateFns){let{promise:l}=c();s.push(l)}t.detachedLeaveAnimationFns=void 0}if(n&&$u(n,e,s),s.length>0){let o=t||n?.[br];if(o){let a=o.running;a&&s.push(a),o.running=Promise.allSettled(s),vD(n,o.running,r)}else Promise.allSettled(s).then(()=>{n&&ws.delete(n[tr]),r(!0)})}else n&&ws.delete(n[tr]),r(!1)}function $u(n,e,t){if(e.type&12){let r=n[e.index];if(Xn(r))for(let s=rn;s<r.length;s++){let o=r[s];o[Ae].type===2&&yD(o,t)}}let i=e.child;for(;i;)$u(n,i,t),i=i.next}function yD(n,e){let t=n[br];if(t&&t.leave)for(let r of t.leave.values())for(let s of r.animateFns){let{promise:o}=s();e.push(o)}let i=n[Ae].firstChild;for(;i;)$u(n,i,e),i=i.next}function vD(n,e,t){e.then(()=>{n[br]?.running===e&&(n[br].running=void 0,ws.delete(n[tr])),t(!0)})}function Eo(n,e,t,i,r,s,o,a){if(r!=null){let c,l=!1;Xn(r)?c=r:Tr(r)&&(l=!0,r=r[ii]);let u=sn(r);n===0&&i!==null?(J0(a,i,s,t),o==null?qx(e,i,u):bs(e,i,u,o||null,!0)):n===1&&i!==null?(J0(a,i,s,t),bs(e,i,u,o||null,!0),dD(s,u,a)):n===2?(a?.[br]?.leave?.has(s.index)&&fD(s,u,a),Za.delete(u),Q0(a,s,t,d=>{if(Za.has(u)){Za.delete(u);return}Yw(e,u,l,d)})):n===3&&(Za.delete(u),Q0(a,s,t,()=>{e.destroyNode(u)})),c!=null&&RD(e,n,t,c,s,i,o)}}function _D(n,e){eE(n,e),e[ii]=null,e[Pn]=null}function xD(n,e,t,i,r,s){i[ii]=r,i[Pn]=e,qu(n,i,t,1,r,s)}function eE(n,e){e[ri].changeDetectionScheduler?.notify(9),qu(n,e,e[Vt],2,null,null)}function ED(n){let e=n[vo];if(!e)return um(n[Ae],n);for(;e;){let t=null;if(Tr(e))t=e[vo];else{let i=e[rn];i&&(t=i)}if(!t){for(;e&&!e[qn]&&e!==n;)Tr(e)&&um(e[Ae],e),e=e[Zt];e===null&&(e=n),Tr(e)&&um(e[Ae],e),t=e&&e[qn]}e=t}}function Ym(n,e){let t=n[xs],i=t.indexOf(e);t.splice(i,1)}function Zm(n,e){if(Es(e))return;let t=e[Vt];t.destroyNode&&qu(n,e,t,3,null,null),ED(e)}function um(n,e){if(Es(e))return;let t=Be(null);try{e[Le]&=-129,e[Le]|=256,e[Ln]&&bl(e[Ln]),MD(n,e),SD(n,e),e[Ae].type===1&&e[Vt].destroy();let i=e[Mr];if(i!==null&&Xn(e[Zt])){i!==e[Zt]&&Ym(i,e);let r=e[Mi];r!==null&&r.detachView(n)}xm(e)}finally{Be(t)}}function SD(n,e){let t=n.cleanup,i=e[yo];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[yo]=null);let r=e[Yi];if(r!==null){e[Yi]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[Ba];if(s!==null){e[Ba]=null;for(let o of s)o.destroy()}}function MD(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof Ts)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];pt(rt.LifecycleHookStart,a,c);try{c.call(a)}finally{pt(rt.LifecycleHookEnd,a,c)}}else{pt(rt.LifecycleHookStart,r,s);try{s.call(r)}finally{pt(rt.LifecycleHookEnd,r,s)}}}}}function bD(n,e,t){return TD(n,e.parent,t)}function TD(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ii];if(wr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ci.None||r===ci.Emulated)return null}return bi(i,t)}function wD(n,e,t){return CD(n,e,t)}function DD(n,e,t){return n.type&40?bi(n,t):null}var CD=DD,ex;function Km(n,e,t,i){let r=bD(n,i,e),s=e[Vt],o=i.parent||e[Pn],a=wD(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Y0(s,r,t[c],a,!1);else Y0(s,r,t,a,!1);ex!==void 0&&ex(s,i,e,t,r)}function Ka(n,e){if(e!==null){let t=e.type;if(t&3)return bi(e,n);if(t&4)return bm(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Ka(n,i);{let r=n[e.index];return Xn(r)?bm(-1,r):sn(r)}}else{if(t&128)return Ka(n,e.next);if(t&32)return qm(e,n)()||sn(n[e.index]);{let i=tE(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=Zi(n[si]);return Ka(r,i)}else return Ka(n,e.next)}}}return null}function tE(n,e){if(e!==null){let i=n[si][Pn],r=e.projection;return i.projection[r]}return null}function bm(n,e){let t=rn+n+1;if(t<e.length){let i=e[t],r=i[Ae].firstChild;if(r!==null)return Ka(i,r)}return e[_s]}function Jm(n,e,t,i,r,s,o){for(;t!=null;){let a=i[er];if(t.type===128){t=t.next;continue}let c=i[t.index],l=t.type;if(o&&e===0&&(c&&Mo(sn(c),i),t.flags|=2),!zm(t))if(l&8)Jm(n,e,t.child,i,r,s,!1),Eo(e,n,a,r,c,t,s,i);else if(l&32){let u=qm(t,i),d;for(;d=u();)Eo(e,n,a,r,d,t,s,i);Eo(e,n,a,r,c,t,s,i)}else l&16?ID(n,e,i,t,r,s):Eo(e,n,a,r,c,t,s,i);t=o?t.projectionNext:t.next}}function qu(n,e,t,i,r,s){n.type===3?AD(t,i,e,r,s):Jm(t,i,n.firstChild,e,r,s,!1)}function AD(n,e,t,i,r){let o=t[Ae].firstChild,a=o.next,c=sn(t[o.index]),l=sn(t[a.index]),u=a.index+1,d=t[u];if(e===1||e===0)i!==null&&(d&&d.hasChildNodes()?bs(n,i,d,r,!0):(bs(n,i,c,r,!0),bs(n,i,l,r,!0)));else if(e===2){if(d||(d=document.createDocumentFragment(),t[u]=d),c&&c.parentNode===d)return;let f=c;for(;f!==null;){let h=f.nextSibling;if(d.appendChild(f),f===l)break;f=h}}}function ID(n,e,t,i,r,s){let o=t[si],c=o[Pn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Eo(e,n,t[er],r,u,i,s,t)}else{let l=c,u=o[Zt];Nx(i)&&(l.flags|=128),Jm(n,e,l,u,r,s,!0)}}function RD(n,e,t,i,r,s,o){let a=i[_s],c=sn(i);if(a!==c&&Eo(e,n,t,s,a,r,o),(i[Le]&4)===0)for(let l=rn;l<i.length;l++){let u=i[l];qu(u[Ae],u,n,e,s,a)}}function ND(n,e,t,i,r){if(e)r?n.addClass(t,i):n.removeClass(t,i);else{let s=i.indexOf("-")===-1?void 0:Ci.DashCase;r==null?n.removeStyle(t,i,s):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),s|=Ci.Important),n.setStyle(t,i,r,s))}}function Qm(n,e,t,i,r,s,o,a,c,l,u){let d=Kt+i,f=d+r,h=PD(d,f),m=typeof l=="function"?l():l;return h[Ae]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:m,incompleteFirstPass:!1,ssrId:u}}function PD(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ai);return t}function LD(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=Qm(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function eg(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[ii]=r,d[Le]=i|4|128|8|64|1024,(l!==null||n&&n[Le]&2048)&&(d[Le]|=2048),Vp(d),d[Zt]=d[Sr]=n,d[fn]=t,d[ri]=o||n&&n[ri],d[Vt]=a||n&&n[Vt],d[er]=c||n&&n[er]||null,d[Pn]=s,d[tr]=Uw(),d[Ua]=u,d[Fp]=l,d[si]=e.type==2?n[si]:d,d}function OD(n,e,t){let i=bi(e,n),r=LD(t),s=n[ri].rendererFactory,o=tg(n,eg(n,r,null,nE(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function nE(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function iE(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function tg(n,e){return n[vo]?n[Op][qn]=e:n[vo]=e,n[Op]=e,e}function On(n=1){rE(Mn(),lt(),Ss()+n,!1)}function rE(n,e,t,i){if(!i)if((e[Le]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Du(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Cu(e,s,0,t)}Ar(t)}var Xu=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(Xu||{});function Tm(n,e,t,i){let r=Be(null);try{let[s,o,a]=n.inputs[t],c=null;(o&Xu.SignalBased)!==0&&(c=e[s][ti]),c!==null&&c.transformFn!==void 0?i=c.transformFn(i):a!==null&&(i=a.call(e,i)),n.setInput!==null?n.setInput(e,c,i,t,s):_x(e,c,s,i)}finally{Be(r)}}function sE(n,e,t,i,r){let s=Ss(),o=i&2;try{Ar(-1),o&&e.length>Kt&&rE(n,e,Kt,!1);let a=o?rt.TemplateUpdateStart:rt.TemplateCreateStart;pt(a,r,t),t(i,r)}finally{Ar(s);let a=o?rt.TemplateUpdateEnd:rt.TemplateCreateEnd;pt(a,r,t)}}function oE(n,e,t){zD(n,e,t),(t.flags&64)===64&&GD(n,e,t)}function ng(n,e,t=bi){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function FD(n,e,t,i){let s=i.get(Bx,Ux)||t===ci.ShadowDom||t===ci.ExperimentalIsolatedShadowDom,o=n.selectRootElement(e,s);return kD(o),o}function kD(n){UD(n)}var UD=()=>null;function BD(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function VD(n,e,t,i,r,s){let o=e[Ae];if(ig(n,o,e,t,i)){wr(n)&&HD(e,n.index);return}n.type&3&&(t=BD(t)),aE(n,e,t,i,r,s)}function aE(n,e,t,i,r,s){if(n.type&3){let o=bi(n,e);i=s!=null?s(i,n.value||"",t):i,r.setProperty(o,t,i)}else n.type&12}function HD(n,e){let t=Ti(e,n);t[Le]&16||(t[Le]|=64)}function zD(n,e,t){let i=t.directiveStart,r=t.directiveEnd;wr(t)&&OD(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||Ou(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],c=Qa(e,n,o,t);if(Mo(c,e),s!==null&&$D(e,o-i,c,a,t,s),Dr(a)){let l=Ti(t.index,e);l[fn]=Qa(e,n,o,t)}}}function GD(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=D0();try{Ar(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];vu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&jD(c,l)}}finally{Ar(-1),vu(o)}}function jD(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function WD(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];rD(e,s.selectors,!1)&&(i??=[],Dr(s)?i.unshift(s):i.push(s))}return i}function $D(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Tm(i,t,c,l)}}function cE(n,e,t,i,r){let s=Kt+t,o=e[Ae],a=r(o,e,n,i,t);e[s]=a,xo(n,!0);let c=n.type===2;return c?(Xx(e[Vt],a,n),(g0()===0||fu(n))&&Mo(a,e),y0()):Mo(a,e),Su()&&(!c||!zm(n))&&Km(o,e,a,n),n}function lE(n){let e=n;return Xp()?E0():(e=e.parent,xo(e,!1)),e}function qD(n,e){let t=n[er];if(!t)return;let i;try{i=t.get(nr,null)}catch{i=null}i?.(e)}function ig(n,e,t,i,r){let s=n.inputs?.[i],o=n.hostDirectiveInputs?.[i],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Tm(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Tm(u,l,i,r),a=!0}return a}function XD(n,e){let t=Ti(e,n),i=t[Ae];YD(i,t);let r=t[ii];r!==null&&t[Ua]===null&&(t[Ua]=Vx(r,t[er])),pt(rt.ComponentStart);try{rg(i,t,t[fn])}finally{pt(rt.ComponentEnd,t[fn])}}function YD(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function rg(n,e,t){xu(e);try{let i=n.viewQuery;i!==null&&Sm(1,i,t);let r=n.template;r!==null&&sE(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Mi]?.finishViewCreation(n),n.staticContentQueries&&Hx(n,e),n.staticViewQueries&&Sm(2,n.viewQuery,t);let s=n.components;s!==null&&ZD(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Le]&=-5,Eu()}}function ZD(n,e){for(let t=0;t<e.length;t++)XD(n,e[t])}function uE(n,e,t,i){let r=Be(null);try{let s=e.tView,a=n[Le]&4096?4096:16,c=eg(n,s,t,a,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];c[Mr]=l;let u=n[Mi];return u!==null&&(c[Mi]=u.createEmbeddedView(s)),rg(s,c,t),c}finally{Be(r)}}function wm(n,e){return!e||e.firstChild===null||Nx(n)}function ec(n,e,t,i,r=!1){if(n.type===3){let s=n.firstChild,o=s.next,a=sn(e[s.index]),c=sn(e[o.index]),l=a;for(;l!==null&&(i.push(l),l!==c);)l=l.nextSibling;return i}for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];if(s!==null)if(Xn(s)){let a=s[_s];a!==s[ii]&&i.push(sn(s)),s[Le]&4||dE(s,i),i.push(a)}else i.push(sn(s));let o=t.type;if(o&8)ec(n,e,t.child,i);else if(o&32){let a=qm(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=tE(e,t);if(Array.isArray(a))i.push(...a);else{let c=Zi(e[si]);ec(c[Ae],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function dE(n,e){for(let t=rn;t<n.length;t++){let i=n[t],r=i[Ae].firstChild;r!==null&&ec(i[Ae],i,r,e)}}function fE(n){if(n[du]!==null){for(let e of n[du])e.impl.addSequence(e);n[du].length=0}}var hE=[];function KD(n){return n[Ln]??JD(n)}function JD(n){let e=hE.pop()??Object.create(eC);return e.lView=n,e}function QD(n){n.lView[Ln]!==n&&(n.lView=null,hE.push(n))}var eC=vn(Tt({},Ta),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{za(n.lView)},consumerOnSignalRead(){this.lView[Ln]=this}});function tC(n){let e=n[Ln]??Object.create(nC);return e.lView=n,e}var nC=vn(Tt({},Ta),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=Zi(n.lView);for(;e&&!pE(e[Ae]);)e=Zi(e);e&&Hp(e)},consumerOnSignalRead(){this.lView[Ln]=this}});function pE(n){return n.type!==2}function mE(n){if(n[Ba]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[Ba])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[Le]&8192)}}var iC=100;function gE(n,e=0){let i=n[ri].rendererFactory,r=!1;r||i.begin?.();try{rC(n,e)}finally{r||i.end?.()}}function rC(n,e){let t=Yp();try{Zp(!0),Dm(n,e);let i=0;for(;Ha(n);){if(i===iC)throw new Ce(103,!1);i++,Dm(n,1)}}finally{Zp(t)}}function sC(n,e,t,i){if(Es(e))return;let r=e[Le],s=!1,o=!1;xu(e);let a=!0,c=null,l=null;s||(pE(n)?(l=KD(e),c=Ml(l)):Sl()===null?(a=!1,l=tC(e),c=Ml(l)):e[Ln]&&(bl(e[Ln]),e[Ln]=null));try{Vp(e),M0(n.bindingStartIndex),t!==null&&sE(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&Du(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Cu(e,h,0,null),cm(e,0)}if(o||oC(e),mE(e),yE(e,0),n.contentQueries!==null&&Hx(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&Du(e,h)}else{let h=n.contentHooks;h!==null&&Cu(e,h,1),cm(e,1)}cC(n,e);let d=n.components;d!==null&&_E(e,d,0);let f=n.viewQuery;if(f!==null&&Sm(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&Du(e,h)}else{let h=n.viewHooks;h!==null&&Cu(e,h,2),cm(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[uu]){for(let h of e[uu])h();e[uu]=null}s||(fE(e),e[Le]&=-73)}catch(u){throw s||za(e),u}finally{l!==null&&(Oh(l,c),a&&QD(l)),Eu()}}function yE(n,e){for(let t=Lx(n);t!==null;t=Ox(t))for(let i=rn;i<t.length;i++){let r=t[i];vE(r,e)}}function oC(n){for(let e=Lx(n);e!==null;e=Ox(e)){if(!(e[Le]&2))continue;let t=e[xs];for(let i=0;i<t.length;i++){let r=t[i];Hp(r)}}}function aC(n,e,t){pt(rt.ComponentStart);let i=Ti(e,n);try{vE(i,t)}finally{pt(rt.ComponentEnd,i[fn])}}function vE(n,e){mu(n)&&Dm(n,e)}function Dm(n,e){let i=n[Ae],r=n[Le],s=n[Ln],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Fh(s)),o||=!1,s&&(s.dirty=!1),n[Le]&=-9217,o)sC(i,n,i.template,n[fn]);else if(r&8192){let a=Be(null);try{mE(n),yE(n,1);let c=i.components;c!==null&&_E(n,c,1),fE(n)}finally{Be(a)}}}function _E(n,e,t){for(let i=0;i<e.length;i++)aC(n,e[i],t)}function cC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Ar(~r);else{let s=r,o=t[++i],a=t[++i];w0(o,s);let c=e[s];pt(rt.HostBindingsUpdateStart,c);try{a(2,c)}finally{pt(rt.HostBindingsUpdateEnd,c)}}}}finally{Ar(-1)}}function sg(n,e){let t=Yp()?64:1088;for(n[ri].changeDetectionScheduler?.notify(e);n;){n[Le]|=t;let i=Zi(n);if(_o(n)&&!i)return n;n=i}return null}function xE(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function lC(n,e){let t=rn+e;if(t<n.length)return n[t]}function EE(n,e,t,i=!0){let r=e[Ae];if(dC(r,e,n,t),i){let o=bm(t,n),a=e[Vt],c=a.parentNode(n[_s]);c!==null&&xD(r,n[Pn],a,e,c,o)}let s=e[Ua];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function uC(n,e){let t=Uu(n,e);return t!==void 0&&Zm(t[Ae],t),t}function Uu(n,e){if(n.length<=rn)return;let t=rn+e,i=n[t];if(i){let r=i[Mr];r!==null&&r!==n&&Ym(r,i),e>0&&(n[t-1][qn]=i[qn]);let s=La(n,rn+e);_D(i[Ae],i);let o=s[Mi];o!==null&&o.detachView(s[Ae]),i[Zt]=null,i[qn]=null,i[Le]&=-129}return i}function dC(n,e,t,i){let r=rn+i,s=t.length;i>0&&(t[r-1][qn]=e),i<s-rn?(e[qn]=t[r],Ip(t,rn+i,e)):(t.push(e),e[qn]=null),e[Zt]=t;let o=e[Mr];o!==null&&t!==o&&SE(o,e);let a=e[Mi];a!==null&&a.insertView(n),gu(e),e[Le]|=128}function SE(n,e){let t=n[xs],i=e[Zt];if(Tr(i))n[Le]|=2;else{let r=i[Zt][si];e[si]!==r&&(n[Le]|=2)}t===null?n[xs]=[e]:t.push(e)}var bo=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Ae];return ec(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[fn]}set context(e){this._lView[fn]=e}get destroyed(){return Es(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[Zt];if(Xn(e)){let t=e[Va],i=t?t.indexOf(this):-1;i>-1&&(Uu(e,i),La(t,i))}this._attachedToViewContainer=!1}Zm(this._lView[Ae],this._lView)}onDestroy(e){yu(this._lView,e)}markForCheck(){sg(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Le]&=-129}reattach(){gu(this._lView),this._lView[Le]|=128}detectChanges(){this._lView[Le]|=1024,gE(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new Ce(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=_o(this._lView),t=this._lView[Mr];t!==null&&!e&&Ym(t,this._lView),eE(this._lView[Ae],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Ce(902,!1);this._appRef=e;let t=_o(this._lView),i=this._lView[Mr];i!==null&&!t&&SE(i,this._lView),gu(this._lView)}};var To=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=fC;constructor(t,i,r){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,r){let s=uE(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:r});return new bo(s)}}return n})();function fC(){return og(oi(),lt())}function og(n,e){return n.type&4?new To(e,n,Do(n,e)):null}function Yu(n,e,t,i,r){let s=n.data[e];if(s===null)s=hC(n,e,t,i,r),T0()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=x0();s.injectorIndex=o===null?-1:o.injectorIndex}return xo(s,!0),s}function hC(n,e,t,i,r){let s=qp(),o=Xp(),a=o?s:s&&s.parent,c=n.data[e]=mC(n,a,t,e,i,r);return pC(n,c,s,o),c}function pC(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function mC(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return _0()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,namespace:tm(),attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var gC=()=>null,yC=()=>null;function tx(n,e){return gC(n,e)}function vC(n,e,t){return yC(n,e,t)}var ME=class{},Ds=class{};var bE=(()=>{class n{static \u0275prov=nt({token:n,providedIn:"root",factory:()=>null})}return n})();function TE(n){return n.debugInfo?.className||n.type.name||null}var Iu={},Bu=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let r=this.injector.get(e,Iu,i);return r!==Iu||t===Iu?r:this.parentInjector.get(e,t,i)}};function _C(n,e,t){return n[e]=t}function Cs(n,e,t){if(t===Ai)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function xC(n,e,t,i){let r=Cs(n,e,t);return Cs(n,e+1,i)||r}function EC(n,e,t){return function i(r){let s=i.__ngNativeEl__;s!==void 0&&Vw(r,s);let o=wr(n)?Ti(n.index,e):e;sg(o,5);let a=e[fn],c=nx(e,a,t,r),l=i.__ngNextListenerFn__;for(;l;)c=nx(e,a,l,r)&&c,l=l.__ngNextListenerFn__;return c}}function nx(n,e,t,i){let r=Be(null);try{return pt(rt.OutputStart,e,t),t(i)!==!1}catch(s){return qD(n,s),!1}finally{pt(rt.OutputEnd,e,t),Be(r)}}function SC(n,e,t,i,r,s,o,a){let c=fu(n),l=!1,u=null;if(!i&&c&&(u=bC(e,t,s,n.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=bi(n,t),f=i?i(d):d;zw(t,f,s,a),i||(a.__ngNativeEl__=d);let h=r.listen(f,s,a);if(!MC(s)){let m=i?v=>i(sn(v[n.index])):n.index;TC(m,e,t,s,a,h,!1)}}return l}function MC(n){return n.startsWith("animation")||n.startsWith("transition")}function bC(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[yo],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function TC(n,e,t,i,r,s,o){let a=e.firstCreatePass?Gp(e):null,c=zp(t),l=c.length;c.push(r,s),a&&a.push(i,n,l,(l+1)*(o?-1:1))}var Cm=Symbol("BINDING");var Ns=new ke("");function Vu(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=xp(r,a);else if(s==2){let c=a,l=e[++o];i=xp(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}function ir(n,e=0){let t=lt();if(t===null)return Ze(n,e);let i=oi();return Ax(i,t,dn(n),e)}function wC(n,e,t,i,r){let s=i===null?null:{"":-1},o=r(n,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}AC(n,e,t,a,s,c,l)}s!==null&&i!==null&&DC(t,i,s)}function DC(n,e,t){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new Ce(-301,!1);i.push(e[r],s)}}function CC(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function AC(n,e,t,i,r,s,o){let a=i.length,c=null;for(let f=0;f<a;f++){let h=i[f];c===null&&Dr(h)&&(c=h,CC(n,t,f)),_m(Ou(t,e),n,h.type)}OC(t,n.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let f=0;f<a;f++){let h=i[f];h.providersResolver&&h.providersResolver(h)}let l=!1,u=!1,d=iE(n,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let f=0;f<a;f++){let h=i[f];if(t.mergedAttrs=Wu(t.mergedAttrs,h.hostAttrs),RC(n,t,e,d,h),LC(d,h,r),o!==null&&o.has(h)){let[v,g]=o.get(h);t.directiveToIndex.set(h.type,[d,v+t.directiveStart,g+t.directiveStart])}else(s===null||!s.has(h))&&t.directiveToIndex.set(h.type,d);h.contentQueries!==null&&(t.flags|=4),(h.hostBindings!==null||h.hostAttrs!==null||h.hostVars!==0)&&(t.flags|=64);let m=h.type.prototype;!l&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!u&&(m.ngOnChanges||m.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}IC(n,t,s)}function IC(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let r=n.data[i];if(t===null||!t.has(r))ix(0,e,r,i),ix(1,e,r,i),sx(e,i,!1);else{let s=t.get(r);rx(0,e,s,i),rx(1,e,s,i),sx(e,i,!0)}}}function ix(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;n===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(i),wE(e,s)}}function rx(n,e,t,i){let r=n===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;n===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(i,s),wE(e,o)}}function wE(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function sx(n,e,t){let{attrs:i,inputs:r,hostDirectiveInputs:s}=n;if(i===null||!t&&r===null||t&&s===null||$m(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let o=null,a=0;for(;a<i.length;){let c=i[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,i[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],i[a+1]);break}}a+=2}n.initialInputs??=[],n.initialInputs.push(o)}function RC(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=us(r.type,!0)),o=new Ts(s,Dr(r),ir,null);n.blueprint[i]=o,t[i]=o,NC(n,e,i,iE(n,t,r.hostVars,Ai),r)}function NC(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;PC(o)!=a&&o.push(a),o.push(t,i,s)}}function PC(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function LC(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Dr(e)&&(t[""]=n)}}function OC(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function DE(n,e,t,i,r,s,o,a){let c=e[Ae],l=c.consts,u=Cr(l,o),d=Yu(c,n,t,i,u);return s&&wC(c,e,d,Cr(l,a),r),d.mergedAttrs=Wu(d.mergedAttrs,d.attrs),d.attrs!==null&&Vu(d,d.attrs,!1),d.mergedAttrs!==null&&Vu(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function CE(n,e){_w(n,e),kp(e)&&n.queries.elementEnd(e)}function FC(n,e,t,i,r,s){let o=e.consts,a=Cr(o,r),c=Yu(e,n,t,i,a);if(c.mergedAttrs=Wu(c.mergedAttrs,c.attrs),s!=null){let l=Cr(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Vu(c,c.attrs,!1),c.mergedAttrs!==null&&Vu(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}var AE=typeof ShadowRoot<"u",kC=typeof Document<"u";function UC(n){return Object.keys(n).map(e=>{let[t,i,r]=n[e],s={propName:t,templateName:e,isSignal:(i&Xu.SignalBased)!==0};return r&&(s.transform=r),s})}function BC(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function VC(n,e,t){let i=e instanceof En?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new Bu(t,i):t}function HC(n){let e=n.get(Ds,null);if(e===null)throw new Ce(407,!1);let t=n.get(bE,null),i=n.get(hs,null),r=n.get(Rs,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function zC(n,e){let t=IE(n);return $x(e,t,t==="svg"?c0:t==="math"?l0:null)}function GC(n){if(n?.toLowerCase()==="script")throw new Ce(905,!1)}function IE(n){return(n.selectors[0][0]||"div").toLowerCase()}var tc=class{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=UC(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=BC(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=cD(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r,s,o){pt(rt.DynamicComponentStart);let a=Be(null);try{let c=this.componentDef,l=VC(c,r||this.ngModule,e),u=HC(l),d=u.tracingService;return d&&d.componentCreate?d.componentCreate(TE(c),()=>this.createComponentRef(u,l,t,i,s,o)):this.createComponentRef(u,l,t,i,s,o)}finally{Be(a)}}createComponentRef(e,t,i,r,s,o){let a=this.componentDef,c=jC(r,a,o,s),l=e.rendererFactory.createRenderer(null,a),u=r?FD(l,r,a.encapsulation,t):zC(a,l);GC(u?.tagName);let d=t.get(Ns,null),f=WC(u,()=>t.get(on,null)??kx());d&&d.addHost(f);let h=o?.some(ox)||s?.some(g=>typeof g!="function"&&g.bindings.some(ox)),m=eg(null,c,null,512|nE(a),null,null,e,l,t,null,Vx(u,t,!0));d&&AE&&f instanceof ShadowRoot&&yu(m,()=>{d.removeHost(f)}),m[Kt]=u,xu(m);let v=null;try{let g=DE(Kt,m,2,"#host",()=>c.directiveRegistry,!0,0);Xx(l,u,g),Mo(u,m),oE(c,m,g),zx(c,g,m),CE(c,g),i!==void 0&&qC(g,this.ngContentSelectors,i),v=Ti(g.index,m),m[fn]=v[fn],rg(c,m,null)}catch(g){throw v!==null&&xm(v),xm(m),g}finally{pt(rt.DynamicComponentEnd),Eu()}return new Hu(this.componentType,m,!!h)}};function jC(n,e,t,i){let r=n?["ng-version","22.1.0"]:lD(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[Cm].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(i)for(let u=0;u<i.length;u++){let d=i[u];if(typeof d!="function")for(let f of d.bindings){a+=f[Cm].requiredVars;let h=u+1;f.create&&(f.targetIdx=h,(s??=[]).push(f)),f.update&&(f.targetIdx=h,(o??=[]).push(f))}}let c=[e];if(i)for(let u of i){let d=typeof u=="function"?u:u.type,f=Tp(d);c.push(f)}return Qm(0,null,$C(s,o),1,a,c,null,null,null,[r],null)}function WC(n,e){let t=n.getRootNode?.();return kC&&t instanceof Document?t.head:t&&AE&&t instanceof ShadowRoot?t:e().head}function $C(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function ox(n){let e=n[Cm].kind;return e==="input"||e==="twoWay"}var Hu=class extends ME{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=pu(t[Ae],Kt),this.location=Do(this._tNode,t),this.instance=Ti(this._tNode.index,t)[fn],this.hostView=this.changeDetectorRef=new bo(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=ig(i,r[Ae],r,e,t);this.previousInputValues.set(e,t);let o=Ti(i.index,r);sg(o,1)}get injector(){return new Ir(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function qC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var oc=(()=>{class n{static __NG_ELEMENT_ID__=XC}return n})();function XC(){let n=oi();return RE(n,lt())}var Am=class n extends oc{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Do(this._hostTNode,this._hostLView)}get injector(){return new Ir(this._hostTNode,this._hostLView)}get parentInjector(){let e=Bm(this._hostTNode,this._hostLView);if(Mx(e)){let t=Pu(e,this._hostLView),i=Nu(e),r=t[Ae].data[i+8];return new Ir(r,t)}else return new Ir(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=ax(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-rn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=tx(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,wm(this._hostTNode,o)),a}createComponent(e,t,i,r,s,o,a){let c,l=t||{};c=l.index,i=l.injector,r=l.projectableNodes,s=l.environmentInjector||l.ngModuleRef,o=l.directives,a=l.bindings;let u=new tc(ms(e)),d=i||this.parentInjector;if(!s&&u.ngModule==null){let p=this.parentInjector.get(En,null);p&&(s=p)}let f=ms(u.componentType??{}),h=tx(this._lContainer,f?.id??null),m=h?.firstChild??null,v=u.create(d,r,m,s,o,a);return this.insertImpl(v.hostView,c,wm(this._hostTNode,h)),v}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(f0(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[Zt],l=new n(c,c[Pn],c[Zt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return EE(o,r,s,i),e.attachToViewContainerRef(),Ip(dm(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=ax(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Uu(this._lContainer,t);i&&(La(dm(this._lContainer),t),Zm(i[Ae],i))}detach(e){let t=this._adjustIndex(e,-1),i=Uu(this._lContainer,t);return i&&La(dm(this._lContainer),t)!=null?new bo(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function ax(n){return n[Va]}function dm(n){return n[Va]||(n[Va]=[])}function RE(n,e){let t,i=e[n.index];return Xn(i)?t=i:(t=xE(i,e,null,n),e[n.index]=t,tg(e,t)),ZC(t,e,n,i),new Am(t,n,e)}function YC(n,e){let t=n[Vt],i=t.createComment(""),r=bi(e,n),s=t.parentNode(r);return bs(t,s,i,t.nextSibling(r),!1),i}var ZC=QC,KC=()=>!1;function JC(n,e,t){return KC(n,e,t)}function QC(n,e,t,i){if(n[_s])return;let r;t.type&8?r=sn(i):r=YC(e,t),n[_s]=r}var Im=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},Rm=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<i;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new n(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)ag(e,t).matches!==null&&this.queries[t].setDirty()}},Nm=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=aA(e):this.predicate=e}},Pm=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let r=t!==null?t.length:0,s=this.getByIndex(i).embeddedTView(e,r);s&&(s.indexInDeclarationView=i,t!==null?t.push(s):t=[s])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},Lm=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let s=i[r];this.matchTNodeWithReadOption(e,t,eA(t,s)),this.matchTNodeWithReadOption(e,t,Au(t,e,s,!1,!1))}else i===To?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Au(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===Co||r===oc||r===To&&t.type&4)this.addMatch(t.index,-2);else{let s=Au(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function eA(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function tA(n,e){return n.type&11?Do(n,e):n.type&4?og(n,e):null}function nA(n,e,t,i){return t===-1?tA(e,n):t===-2?iA(n,e,i):Qa(n,n[Ae],t,e)}function iA(n,e,t){if(t===Co)return Do(e,n);if(t===To)return og(e,n);if(t===oc)return RE(e,n)}function NE(n,e,t,i){let r=e[Mi].queries[i];if(r.matches===null){let s=n.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(nA(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Om(n,e,t,i){let r=n.queries.getByIndex(t),s=r.matches;if(s!==null){let o=NE(n,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)i.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=rn;d<u.length;d++){let f=u[d];f[Mr]===f[Zt]&&Om(f[Ae],f,l,i)}if(u[xs]!==null){let d=u[xs];for(let f=0;f<d.length;f++){let h=d[f];Om(h[Ae],h,l,i)}}}}}return i}function rA(n,e){return n[Mi].queries[e].queryList}function sA(n,e,t){let i=new Fu((t&4)===4);return m0(n,e,i,i.destroy),(e[Mi]??=new Rm).queries.push(new Im(i))-1}function oA(n,e,t){let i=Mn();return i.firstCreatePass&&(cA(i,new Nm(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),sA(i,lt(),e)}function aA(n){return n.split(",").map(e=>e.trim())}function cA(n,e,t){n.queries===null&&(n.queries=new Pm),n.queries.track(new Lm(e,t))}function ag(n,e){return n.queries.getByIndex(e)}function lA(n,e){let t=n[Ae],i=ag(t,e);return i.crossesNgTemplate?Om(t,n,e,[]):NE(t,n,i,e)}function Zu(n){return!!n&&typeof n.then=="function"}function cg(n){return!!n&&typeof n.subscribe=="function"}var nc=class{};var ic=class extends nc{injector;instance=null;constructor(e){super();let t=new fs([...e.providers,{provide:nc,useValue:this}],e.parent||ka(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function PE(n,e,t=null){return new ic({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var uA=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Np(!1,t.type),r=i.length>0?PE([i],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=nt({token:n,providedIn:"environment",factory:()=>new n(Ze(En))})}return n})();function li(n){return vx(()=>{let e=pA(n),t=vn(Tt({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection!==Vm.Eager,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(uA).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ci.Emulated,styles:n.styles||Er,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&sc("NgStandalone"),mA(t);let i=n.dependencies;return t.directiveDefs=cx(i,dA),t.pipeDefs=cx(i,q_),t.id=gA(t),t})}function dA(n){return ms(n)||Tp(n)}function fA(n,e){if(n==null)return gs;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=Xu.None,c=null),t[s]=[i,a,c],e[s]=o}return t}function hA(n){if(n==null)return gs;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function lg(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone??!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function pA(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||gs,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||Er,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,signalFormsInputPresence:null,inputs:fA(n.inputs,e),outputs:hA(n.outputs),debugInfo:null}}function mA(n){n.features?.forEach(e=>e(n))}function cx(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let r of t){let s=e(r);s!==null&&i.push(s)}return i}:null}function gA(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}var LE=new ke("");var ug=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=ve(LE,{optional:!0})??[];injector=ve(Ki);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=go(this.injector,r);if(Zu(s))t.push(s);else if(cg(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Rr({token:n,factory:n.\u0275fac})}return n})();function yA(n,e,t,i,r,s,o,a){if(t.firstCreatePass){n.mergedAttrs=Wu(n.mergedAttrs,n.attrs);let u=n.tView=Qm(2,n,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),u.queries=t.queries.embeddedTView(n))}a&&(n.flags|=a),xo(n,!1);let c=vA(t,e,n,i);Su()&&Km(t,e,c,n),Mo(c,e);let l=xE(c,e,c,n);e[i+Kt]=l,tg(e,l),JC(l,n,e)}function OE(n,e,t,i,r,s,o,a,c,l,u){let d=t+Kt,f;if(e.firstCreatePass){if(f=Yu(e,d,4,o||null,a||null),l!=null){let h=Cr(e.consts,l);f.localNames=[];for(let m=0;m<h.length;m+=2)f.localNames.push(h[m],-1)}}else f=e.data[d];return yA(f,n,e,t,i,r,s,c),l!=null&&ng(n,f,u),f}var vA=_A;function _A(n,e,t,i){return Mu(!0),e[Vt].createComment("")}var dg=new ke("");var FE=new ke("");function kE(){Vh(()=>{let n="";throw new Ce(600,n)})}var xA=10;var Ku=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=ve(nr);afterRenderManager=ve(Kx);zonelessEnabled=ve(qa);rootEffectScheduler=ve(am);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new Wn;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=ve(Ms);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(un(t=>!t))}constructor(){ve(Rs,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=ve(En);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,r=Ki.NULL){return this._injector.get(Sn).run(()=>{if(pt(rt.BootstrapComponentStart),!this._injector.get(ug).done){let p="";throw new Ce(405,p)}let a=ms(t),c=this._injector.get(nc),l=new tc(a,c);this.componentTypes.push(t);let{hostElement:u,directives:d,bindings:f}=EA(i),h=u||l.selector,m=l.create(r,[],h,c.injector,d,f),v=m.location.nativeElement,g=m.injector.get(dg,null);return g?.registerApplication(v),m.onDestroy(()=>{this.detachView(m.hostView),Ja(this.components,m),g?.unregisterApplication(v)}),this._loadComponent(m),pt(rt.BootstrapComponentEnd,m),m})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){pt(rt.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Xm.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw pt(rt.ChangeDetectionEnd),new Ce(101,!1);let t=Be(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Be(t),this.afterTick.next(),pt(rt.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(Ds,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<xA;){pt(rt.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{pt(rt.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!Ha(r))continue;let s=i&&!this.zonelessEnabled?0:1;gE(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Ha(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Ja(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(FE,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Ja(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new Ce(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Rr({token:n,factory:n.\u0275fac})}return n})();function EA(n){return n===void 0||typeof n=="string"||n instanceof Element?{hostElement:n}:n}function Ja(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ao(n,e,t,i,r,s,o,a){sc("NgControlFlow");let c=lt(),l=Mn(),u=Cr(l.consts,s);return OE(c,l,n,e,t,i,r,u,256,o,a),fg}function fg(n,e,t,i,r,s,o,a){sc("NgControlFlow");let c=lt(),l=Mn(),u=Cr(l.consts,s);return OE(c,l,n,e,t,i,r,u,512,o,a),fg}function Io(n,e){sc("NgControlFlow");let t=lt(),i=Ga(),r=t[i]!==Ai?t[i]:-1,s=r!==-1?lx(t,Kt+r):void 0,o=0;if(Cs(t,i,n)){let a=Be(null);try{if(s!==void 0&&uC(s,o),n!==-1){let c=Kt+n,l=lx(t,c),u=SA(t[Ae],c),d=vC(l,u,t),f=uE(t,u,e,{dehydratedView:d});EE(l,f,o,wm(u,d))}}finally{Be(a)}}else if(s!==void 0){let a=lC(s,o);a!==void 0&&(a[fn]=e)}}function lx(n,e){return n[e]}function SA(n,e){return pu(n,e)}function ac(n,e,t){let i=lt(),r=Ga();if(Cs(i,r,e)){let s=Mn(),o=em();VD(o,i,n,e,i[Vt],t)}return ac}function ux(n,e,t,i,r){ig(e,n,t,r?"class":"style",i)}function As(n,e,t,i){let r=lt(),s=r[Ae],o=n+Kt,a=s.firstCreatePass?DE(o,r,2,e,WD,v0(),t,i):s.data[o];if(wr(a)){let c=r[ri].tracingService;if(c&&c.componentCreate){let l=s.data[a.directiveStart+a.componentOffset];return c.componentCreate(TE(l),()=>(dx(n,e,r,a,i),As))}}return dx(n,e,r,a,i),As}function dx(n,e,t,i,r){if(cE(i,t,n,e,UE),fu(i)){let s=t[Ae];oE(s,t,i),zx(s,i,t)}r!=null&&ng(t,i)}function Ro(){let n=Mn(),e=oi(),t=lE(e);return n.firstCreatePass&&CE(n,t),Wp(t)&&$p(),jp(),t.classesWithoutHost!=null&&Ew(t)&&ux(n,t,lt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&Sw(t)&&ux(n,t,lt(),t.stylesWithoutHost,!1),Ro}function cc(n,e,t,i){return As(n,e,t,i),Ro(),cc}function xt(n,e,t,i){let r=lt(),s=r[Ae],o=n+Kt,a=s.firstCreatePass?FC(o,s,2,e,t,i):s.data[o];return cE(a,r,n,e,UE),i!=null&&ng(r,a),xt}function Dt(){let n=oi(),e=lE(n);return Wp(e)&&$p(),jp(),Dt}function rr(n,e,t,i){return xt(n,e,t,i),Dt(),rr}var UE=(n,e,t,i,r)=>(Mu(!0),$x(e[Vt],i,tm()));function Ju(n,e,t){let i=lt(),r=Ga();if(Cs(i,r,e)){let s=Mn(),o=em();aE(o,i,n,e,i[Vt],t)}return Ju}var Ya=void 0;function MA(n){let e=Math.floor(Math.abs(n)),t=n.toString().replace(/^[^.]*\.?/,"").length;return e===1&&t===0?1:5}var bA=["en",[["a","p"],["AM","PM"]],[["AM","PM"]],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],Ya,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],Ya,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm\u202Fa","h:mm:ss\u202Fa","h:mm:ss\u202Fa z","h:mm:ss\u202Fa zzzz"],["{1}, {0}",Ya,Ya,Ya],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",MA],fm=Object.create(null);function Qu(n){let e=TA(n),t=fx(e);if(t)return t;let i=e.split("-")[0];if(t=fx(i),t)return t;if(i==="en")return bA;throw new Ce(701,!1)}function fx(n){if(!(n in fm)){let e=Qi.ng&&Qi.ng.common&&Qi.ng.common.locales&&Qi.ng.common.locales[n];return e!==void 0&&(fm[n]=e),e}return fm[n]}var No={LocaleId:0,DayPeriodsFormat:1,DayPeriodsStandalone:2,DaysFormat:3,DaysStandalone:4,MonthsFormat:5,MonthsStandalone:6,Eras:7,FirstDayOfWeek:8,WeekendRange:9,DateFormat:10,TimeFormat:11,DateTimeFormat:12,NumberSymbols:13,NumberFormats:14,CurrencyCode:15,CurrencySymbol:16,CurrencyName:17,Currencies:18,Directionality:19,PluralCase:20,ExtraData:21};function TA(n){return n.toLowerCase().replace(/_/g,"-")}var lc="en-US";var wA=lc;function BE(n){typeof n=="string"&&(wA=n.toLowerCase().replace(/_/g,"-"))}function uc(n,e,t){let i=lt(),r=Mn(),s=oi();return(s.type&3||t)&&SC(s,r,i,t,i[Vt],n,e,EC(s,i,e)),uc}function hg(n=1){return N0(n)}function ed(n,e,t){return oA(n,e,t),ed}function pg(n){let e=lt(),t=Mn(),i=Kp();_u(i+1);let r=ag(t,i);if(n.dirty&&d0(e)===((r.metadata.flags&2)===2)){if(r.matches===null)n.reset([]);else{let s=lA(e,i);n.reset(s,Ow),n.notifyOnChanges()}return!0}return!1}function mg(){return rA(lt(),Kp())}function wu(n,e){return n<<17|e<<2}function Is(n){return n>>17&32767}function DA(n){return(n&2)==2}function CA(n,e){return n&131071|e<<17}function Fm(n){return n|2}function wo(n){return(n&131068)>>2}function hm(n,e){return n&-131069|e<<2}function AA(n){return(n&1)===1}function km(n){return n|1}function IA(n,e,t,i,r,s){let o=s?e.classBindings:e.styleBindings,a=Is(o),c=wo(o);n[i]=t;let l=!1,u;if(Array.isArray(t)){let d=t;u=d[1],(u===null||po(d,u)>0)&&(l=!0)}else u=t;if(r)if(c!==0){let f=Is(n[a+1]);n[i+1]=wu(f,a),f!==0&&(n[f+1]=hm(n[f+1],i)),n[a+1]=CA(n[a+1],i)}else n[i+1]=wu(a,0),a!==0&&(n[a+1]=hm(n[a+1],i)),a=i;else n[i+1]=wu(c,0),a===0?a=i:n[c+1]=hm(n[c+1],i),c=i;l&&(n[i+1]=Fm(n[i+1])),hx(n,u,i,!0),hx(n,u,i,!1),RA(e,u,n,i,s),o=wu(a,c),s?e.classBindings=o:e.styleBindings=o}function RA(n,e,t,i,r){let s=r?n.residualClasses:n.residualStyles;s!=null&&typeof e=="string"&&po(s,e)>=0&&(t[i+1]=km(t[i+1]))}function hx(n,e,t,i){let r=n[t+1],s=e===null,o=i?Is(r):wo(r),a=!1;for(;o!==0&&(a===!1||s);){let c=n[o],l=n[o+1];NA(c,e)&&(a=!0,n[o+1]=i?km(l):Fm(l)),o=i?Is(l):wo(l)}a&&(n[t+1]=i?Fm(r):km(r))}function NA(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?po(n,e)>=0:!1}function td(n,e){return PA(n,e,null,!0),td}function PA(n,e,t,i){let r=lt(),s=Mn(),o=b0(2);if(s.firstUpdatePass&&OA(s,n,o,i),e!==Ai&&Cs(r,o,e)){let a=s.data[Ss()];VA(s,a,r,r[Vt],n,r[o+1]=HA(e,t),i,o)}}function LA(n,e){return e>=n.expandoStartIndex}function OA(n,e,t,i){let r=n.data;if(r[t+1]===null){let s=r[Ss()],o=LA(n,t);zA(s,i)&&e===null&&!o&&(e=!1),e=FA(r,s,e,i),IA(r,s,e,t,o,i)}}function FA(n,e,t,i){let r=C0(n),s=i?e.residualClasses:e.residualStyles;if(r===null)(i?e.classBindings:e.styleBindings)===0&&(t=pm(null,n,e,t,i),t=rc(t,e.attrs,i),s=null);else{let o=e.directiveStylingLast;if(o===-1||n[o]!==r)if(t=pm(r,n,e,t,i),s===null){let c=kA(n,e,i);c!==void 0&&Array.isArray(c)&&(c=pm(null,n,e,c[1],i),c=rc(c,e.attrs,i),UA(n,e,i,c))}else s=BA(n,e,i)}return s!==void 0&&(i?e.residualClasses=s:e.residualStyles=s),t}function kA(n,e,t){let i=t?e.classBindings:e.styleBindings;if(wo(i)!==0)return n[Is(i)]}function UA(n,e,t,i){let r=t?e.classBindings:e.styleBindings;n[Is(r)]=i}function BA(n,e,t){let i,r=e.directiveEnd;for(let s=1+e.directiveStylingLast;s<r;s++){let o=n[s].hostAttrs;i=rc(i,o,t)}return rc(i,e.attrs,t)}function pm(n,e,t,i,r){let s=null,o=t.directiveEnd,a=t.directiveStylingLast;for(a===-1?a=t.directiveStart:a++;a<o&&(s=e[a],i=rc(i,s.hostAttrs,r),s!==n);)a++;return n!==null&&(t.directiveStylingLast=a),i}function rc(n,e,t){let i=t?1:2,r=-1;if(e!==null)for(let s=0;s<e.length;s++){let o=e[s];typeof o=="number"?r=o:r===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),e0(n,o,t?!0:e[++s]))}return n===void 0?null:n}function VA(n,e,t,i,r,s,o,a){if(!(e.type&3))return;let c=n.data,l=c[a+1],u=AA(l)?px(c,e,t,r,wo(l),o):void 0;if(!zu(u)){zu(s)||DA(l)&&(s=px(c,null,t,r,a,o));let d=Up(Ss(),t);ND(i,o,d,r,s)}}function px(n,e,t,i,r,s){let o=e===null,a;for(;r>0;){let c=n[r],l=Array.isArray(c),u=l?c[1]:c,d=u===null,f=t[r+1];f===Ai&&(f=d?Er:void 0);let h=d?lu(f,i):u===i?f:void 0;if(l&&!zu(h)&&(h=lu(c,i)),zu(h)&&(a=h,o))return a;let m=n[r+1];r=o?Is(m):wo(m)}if(e!==null){let c=s?e.residualClasses:e.residualStyles;c!=null&&(a=lu(c,i))}return a}function zu(n){return n!==void 0}function HA(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=iu(Gm(n)))),n}function zA(n,e){return(n.flags&(e?8:16))!==0}function Et(n,e=""){let t=lt(),i=Mn(),r=n+Kt,s=i.firstCreatePass?Yu(i,r,1,e,null):i.data[r],o=GA(i,t,s,e);t[r]=o,Su()&&Km(i,t,o,s),xo(s,!1)}var GA=(n,e,t,i)=>(Mu(!0),qw(e[Vt],i));function jA(n,e,t,i=""){return Cs(n,Ga(),t)?e+Dp(t)+i:Ai}function Ps(n){return dc("",n),Ps}function dc(n,e,t){let i=lt(),r=jA(i,n,e,t);return r!==Ai&&WA(i,Ss(),r),dc}function WA(n,e,t){let i=Up(e,n);Xw(n[Vt],i,t)}function mx(n,e,t){let i=Mn();i.firstCreatePass&&VE(e,i.data,i.blueprint,Dr(n),t)}function VE(n,e,t,i,r){if(n=dn(n),Array.isArray(n))for(let s=0;s<n.length;s++)VE(n[s],e,t,i,r);else{let s=Mn(),o=lt(),a=oi(),c=ds(n)?n:dn(n.provide),l=Lp(n),u=a.providerIndexes&1048575,d=a.directiveStart,f=a.providerIndexes>>20;if(ds(n)||!n.multi){let h=new Ts(l,r,ir,null),m=gm(c,e,r?u:u+f,d);m===-1?(_m(Ou(a,o),s,c),mm(s,n,e.length),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(h),o.push(h)):(t[m]=h,o[m]=h)}else{let h=gm(c,e,u+f,d),m=gm(c,e,u,u+f),v=h>=0&&t[h],g=m>=0&&t[m];if(r&&!g||!r&&!v){_m(Ou(a,o),s,c);let p=XA(r?qA:$A,t.length,r,i,l,n);!r&&g&&(t[m].providerFactory=p),mm(s,n,e.length,0),e.push(c),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),t.push(p),o.push(p)}else{let p=HE(t[r?m:h],l,!r&&i);mm(s,n,h>-1?h:m,p)}!r&&i&&g&&t[m].componentProviders++}}}function mm(n,e,t,i){let r=ds(e),s=s0(e);if(r||s){let c=(s?dn(e.useClass):e).prototype.ngOnDestroy;if(c){let l=n.destroyHooks||(n.destroyHooks=[]);if(!r&&e.multi){let u=l.indexOf(t);u===-1?l.push(t,[i,c]):l[u+1].push(i,c)}else l.push(t,c)}}}function HE(n,e,t){return t&&n.componentProviders++,n.multi.push(e)-1}function gm(n,e,t,i){for(let r=t;r<i;r++)if(e[r]===n)return r;return-1}function $A(n,e,t,i,r){return Um(this.multi,[])}function qA(n,e,t,i,r){let s=this.multi,o;if(this.providerFactory){let a=this.providerFactory.componentProviders,c=Qa(i,i[Ae],this.providerFactory.index,r);o=c.slice(0,a),Um(s,o);for(let l=a;l<c.length;l++)o.push(c[l])}else o=[],Um(s,o);return o}function Um(n,e){for(let t=0;t<n.length;t++){let i=n[t];e.push(i())}return e}function XA(n,e,t,i,r,s){let o=new Ts(n,t,ir,null);return o.multi=[],o.index=e,o.componentProviders=0,HE(o,r,i&&!t),o}function gg(n,e){return t=>{t.providersResolver=(i,r)=>mx(i,r?r(n):n,!1),e&&(t.viewProvidersResolver=(i,r)=>mx(i,r?r(e):e,!0))}}function YA(n,e){let t=n[e];return t===Ai?void 0:t}function ZA(n,e,t,i,r,s,o){let a=e+t;return xC(n,a,r,s)?_C(n,a+2,o?i.call(o,r,s):i(r,s)):YA(n,a+2)}function nd(n,e){let t=Mn(),i,r=n+Kt;t.firstCreatePass?(i=KA(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let s=i.factory||(i.factory=us(i.type,!0)),o,a=xn(ir);try{let c=Lu(!1),l=s();return Lu(c),Bp(t,lt(),r,l),l}finally{xn(a)}}function KA(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function id(n,e,t,i){let r=n+Kt,s=lt(),o=u0(s,r);return JA(s,r)?ZA(s,S0(),e,o.transform,t,i,o):o.transform(t,i)}function JA(n,e){return n[Ae].data[e].pure}var zE=(()=>{class n{applicationErrorHandler=ve(nr);appRef=ve(Ku);taskService=ve(Ms);ngZone=ve(Sn);zonelessEnabled=ve(qa);tracing=ve(Rs,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new nn;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Ra):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(ve(om,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:case 2:{this.appRef.dirtyFlags|=2;break}case 3:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?k0:nm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Ra+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Rr({token:n,factory:n.\u0275fac})}return n})();function GE(){return[{provide:hs,useExisting:zE},{provide:Sn,useClass:Na},{provide:qa,useValue:!0}]}function QA(){return typeof $localize<"u"&&$localize.locale||lc}var fc=new ke("",{factory:()=>ve(fc,{optional:!0,skipSelf:!0})||QA()});function hc(n){return d_(n)}var jE=class n extends Error{_brand;constructor(e){super(e)}static IDLE=new n("IDLE");static LOADING=new n("LOADING")};var pI=1e4;var $8=pI-1e3;var yg=new ke(""),mI=new ke("");function pc(n){return!n.moduleRef}function gI(n){let e=pc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Sn);return t.run(()=>{pc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(nr),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:i})}),pc(n)){let s=()=>e.destroy(),o=n.platformInjector.get(yg);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(yg);o.add(s),n.moduleRef.onDestroy(()=>{Ja(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return vI(i,t,()=>{let s=e.get(Ms),o=s.add(),a=e.get(ug);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(fc,lc);if(BE(c||lc),!e.get(mI,!0))return pc(n)?e.get(Ku):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(pc(n)){let u=e.get(Ku);return n.rootComponent!==void 0&&u.bootstrap(n.rootComponent),u}else return yI?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{s.remove(o)})})})}var yI;function vI(n,e,t){try{let i=t();return Zu(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var rd=null;function _I(n=[],e){return Ki.create({name:e,providers:[{provide:Fa,useValue:"platform"},{provide:yg,useValue:new Set([()=>rd=null])},...n]})}function xI(n=[]){if(rd)return rd;let e=_I(n);return rd=e,kE(),EI(e),e}function EI(n){let e=n.get(bu,null);go(n,()=>{e?.forEach(t=>t())})}function WE(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:r}=n;pt(rt.BootstrapApplicationStart);try{let s=r?.injector??xI(i),o=[GE(),B0,...t||[]],a=new ic({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return gI({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{pt(rt.BootstrapApplicationEnd)}}var $E=null;function Nr(){return $E}function _g(n){$E??=n}var gc=class{},sd=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nt({token:n,factory:()=>ve(qE),providedIn:"platform"})}return n})();var qE=(()=>{class n extends sd{_location;_history;_doc=ve(on);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Nr().getBaseHref(this._doc)}onPopState(t){let i=Nr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=Nr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=nt({token:n,factory:()=>new n,providedIn:"platform"})}return n})();var Sg=(function(n){return n[n.Decimal=0]="Decimal",n[n.Percent=1]="Percent",n[n.Currency=2]="Currency",n[n.Scientific=3]="Scientific",n})(Sg||{});var Ii={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Po(n,e){let t=Qu(n),i=t[No.NumberSymbols][e];if(typeof i>"u"){if(e===Ii.CurrencyDecimal)return t[No.NumberSymbols][Ii.Decimal];if(e===Ii.CurrencyGroup)return t[No.NumberSymbols][Ii.Group]}return i}function YE(n,e){return Qu(n)[No.NumberFormats][e]}var SI=/^(\d+)?\.((\d+)(-(\d+))?)?$/,XE=22,od=".",yc="0",MI=";",bI=",",xg="#";function TI(n,e,t,i,r,s,o=!1){let a="",c=!1;if(!isFinite(n))a=Po(t,Ii.Infinity);else{let l=CI(n);o&&(l=DI(l));let u=e.minInt,d=e.minFrac,f=e.maxFrac;if(s){let E=s.match(SI);if(E===null)throw new Ce(2306,!1);let M=E[1],S=E[3],D=E[5];M!=null&&(u=Eg(M)),S!=null&&(d=Eg(S)),D!=null?f=Eg(D):S!=null&&d>f&&(f=d);let w=100;if(u>w||d>w||f>w)throw new Ce(2306,!1)}AI(l,d,f);let h=l.digits,m=l.integerLen,v=l.exponent,g=[];for(c=h.every(E=>!E);m<u;m++)h.unshift(0);for(;m<0;m++)h.unshift(0);m>0?g=h.splice(m,h.length):(g=h,h=[0]);let p=[];for(h.length>=e.lgSize&&p.unshift(h.splice(-e.lgSize,h.length).join(""));h.length>e.gSize;)p.unshift(h.splice(-e.gSize,h.length).join(""));h.length&&p.unshift(h.join("")),a=p.join(Po(t,i)),g.length&&(a+=Po(t,r)+g.join("")),v&&(a+=Po(t,Ii.Exponential)+"+"+v)}return n<0&&!c?a=e.negPre+a+e.negSuf:a=e.posPre+a+e.posSuf,a}function ZE(n,e,t){let i=YE(e,Sg.Decimal),r=wI(i,Po(e,Ii.MinusSign));return TI(n,r,e,Ii.Group,Ii.Decimal,t)}function wI(n,e="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},i=n.split(MI),r=i[0],s=i[1],o=r.indexOf(od)!==-1?r.split(od):[r.substring(0,r.lastIndexOf(yc)+1),r.substring(r.lastIndexOf(yc)+1)],a=o[0],c=o[1]||"";t.posPre=a.substring(0,a.indexOf(xg));for(let u=0;u<c.length;u++){let d=c.charAt(u);d===yc?t.minFrac=t.maxFrac=u+1:d===xg?t.maxFrac=u+1:t.posSuf+=d}let l=a.split(bI);if(t.gSize=l[1]?l[1].length:0,t.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,s){let u=r.length-t.posPre.length-t.posSuf.length,d=s.indexOf(xg);t.negPre=s.substring(0,d).replace(/'/g,""),t.negSuf=s.slice(d+u).replace(/'/g,"")}else t.negPre=e+t.posPre,t.negSuf=t.posSuf;return t}function DI(n){if(n.digits[0]===0)return n;let e=n.digits.length-n.integerLen;return n.exponent?n.exponent+=2:(e===0?n.digits.push(0,0):e===1&&n.digits.push(0),n.integerLen+=2),n}function CI(n){let e=Math.abs(n)+"",t=0,i,r,s,o,a;for((r=e.indexOf(od))>-1&&(e=e.replace(od,"")),(s=e.search(/e/i))>0?(r<0&&(r=s),r+=+e.slice(s+1),e=e.substring(0,s)):r<0&&(r=e.length),s=0;e.charAt(s)===yc;s++);if(s===(a=e.length))i=[0],r=1;else{for(a--;e.charAt(a)===yc;)a--;for(r-=s,i=[],o=0;s<=a;s++,o++)i[o]=Number(e.charAt(s))}return r>XE&&(i=i.splice(0,XE-1),t=r-1,r=1),{digits:i,exponent:t,integerLen:r}}function AI(n,e,t){if(e>t)throw new Ce(2307,!1);let i=n.digits,r=i.length-n.integerLen,s=Math.min(Math.max(e,r),t),o=s+n.integerLen,a=i[o];if(o>0){i.splice(Math.max(n.integerLen,o));for(let d=o;d<i.length;d++)i[d]=0}else{r=Math.max(0,r),n.integerLen=1,i.length=Math.max(1,o=s+1),i[0]=0;for(let d=1;d<o;d++)i[d]=0}if(a>=5)if(o-1<0){for(let d=0;d>o;d--)i.unshift(0),n.integerLen++;i.unshift(1),n.integerLen++}else i[o-1]++;for(;r<Math.max(0,s);r++)i.push(0);let c=s!==0,l=e+n.integerLen,u=i.reduceRight(function(d,f,h,m){return f=f+d,m[h]=f<10?f:f-10,c&&(m[h]===0&&h>=l?m.pop():c=!1),f>=10?1:0},0);u&&(i.unshift(u),n.integerLen++)}function Eg(n){let e=parseInt(n);if(isNaN(e))throw new Ce(2305,!1);return e}function II(n,e){return new Ce(2100,!1)}var Mg=(()=>{class n{_locale;constructor(t){this._locale=t}transform(t,i,r){if(!RI(t))return null;r||=this._locale;try{let s=NI(t);return ZE(s,r,i)}catch(s){throw II(n,s.message)}}static \u0275fac=function(i){return new(i||n)(ir(fc,16))};static \u0275pipe=lg({name:"number",type:n,pure:!0})}return n})();function RI(n){return!(n==null||n===""||n!==n)}function NI(n){if(typeof n=="string"&&!isNaN(Number(n)-parseFloat(n)))return Number(n);if(typeof n!="number")throw new Ce(2309,!1);return n}function vc(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var KE="browser";var _c=class{_doc;constructor(e){this._doc=e}manager},ad=(()=>{class n extends _c{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(Ze(on))};static \u0275prov=nt({token:n,factory:n.\u0275fac})}return n})(),ud=new ke(""),Dg=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(o=>{o.manager=this});let r=t.filter(o=>!(o instanceof ad));this._plugins=r.slice().reverse();let s=t.find(o=>o instanceof ad);s&&this._plugins.push(s)}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new Ce(-5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Ze(ud),Ze(Sn))};static \u0275prov=nt({token:n,factory:n.\u0275fac})}return n})(),bg="ng-app-id";function JE(n){for(let e of n)e.remove()}function QE(n,e){let t=e.createElement("style");return t.textContent=n,t}function FI(n,e,t,i){let r=n.head?.querySelectorAll(`style[${bg}="${e}"],link[${bg}="${e}"]`);if(!r||r.length===0)return!1;for(let s of r)s.removeAttribute(bg),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]});return!0}function wg(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Cg=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,FI(t,i,this.inline,this.external)&&this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,QE);i?.forEach(r=>this.addUsage(r,this.external,wg))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(JE(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])JE(t);this.hosts.clear()}addHost(t){if(!this.hosts.has(t)){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,QE(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,wg(i,this.doc)))}}removeHost(t){this.hosts.delete(t);for(let i of[...this.inline.values(),...this.external.values()]){let r=[];for(let s of i.elements)s.parentNode===t?s.remove():r.push(s);i.elements=r}}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Ze(on),Ze(ja),Ze($a,8),Ze(Wa))};static \u0275prov=nt({token:n,factory:n.\u0275fac})}return n})(),Tg={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ag=/%COMP%/g;var tS="%COMP%",kI=`_nghost-${tS}`,UI=`_ngcontent-${tS}`,BI=!0,VI=new ke("",{factory:()=>BI}),HI=new ke("");function zI(n){return UI.replace(Ag,n)}function GI(n){return kI.replace(Ag,n)}function nS(n,e){return e.map(t=>t.replace(Ag,n))}var Ig=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;cssVarNamespace;constructor(t,i,r,s,o,a,c=null,l=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=a,this.nonce=c,this.tracingService=l,this.cssVarNamespace=u??"",this.defaultRenderer=new xc(t,o,a,this.tracingService,this.cssVarNamespace)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,i);return r instanceof ld?r.applyToHost(t):r instanceof Ec&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(i.encapsulation){case ci.Emulated:s=new ld(c,l,i,this.appId,u,o,a,d,this.cssVarNamespace);break;case ci.ShadowDom:return new cd(c,t,i,o,a,this.nonce,d,this.cssVarNamespace,l);case ci.ExperimentalIsolatedShadowDom:return new cd(c,t,i,o,a,this.nonce,d,this.cssVarNamespace);default:s=new Ec(c,l,i,u,o,a,d,this.cssVarNamespace);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Ze(Dg),Ze(Ns),Ze(ja),Ze(VI),Ze(on),Ze(Sn),Ze($a),Ze(Rs,8),Ze(HI,8))};static \u0275prov=nt({token:n,factory:n.\u0275fac})}return n})(),xc=class{eventManager;doc;ngZone;tracingService;cssVarNamespace;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s=""){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=r,this.cssVarNamespace=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Tg[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(eS(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(eS(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new Ce(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Tg[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Tg[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){let s=t.startsWith("--");s&&(t=t.replace("%NS%",this.cssVarNamespace)),s||r&(Ci.DashCase|Ci.Important)?e.style.setProperty(t,i,r&Ci.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){let r=t.startsWith("--");r&&(t=t.replace("%NS%",this.cssVarNamespace)),r||i&Ci.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=Nr().getGlobalEventTarget(this.doc,e),!e))throw new Ce(-5102,!1);let s=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function eS(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var cd=class extends xc{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,r,s,o,a,c,l){super(e,r,s,a,c),this.hostEl=t,this.sharedStylesHost=l,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let u=i.styles;u=nS(i.id,u).map(f=>f.replace(/%NS%/g,c));for(let f of u){let h=document.createElement("style");o&&h.setAttribute("nonce",o),h.textContent=f,this.shadowRoot.appendChild(h)}let d=i.getExternalStyles?.();if(d)for(let f of d){let h=wg(f,r);o&&h.setAttribute("nonce",o),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Ec=class extends xc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,c,l){super(e,s,o,a,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles,d=l?nS(l,u):u;this.styles=d.map(f=>f.replace(/%NS%/g,c)),this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&ws.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ld=class extends Ec{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,c,l){let u=r+"-"+i.id;super(e,t,i,s,o,a,c,l,u),this.contentAttr=zI(u),this.hostAttr=GI(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var dd=class n extends gc{supportsDOMEvents=!0;static makeCurrent(){_g(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=jI();return t==null?null:WI(t)}resetBaseElement(){Sc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return vc(document.cookie,e)}},Sc=null;function jI(){return Sc=Sc||document.head.querySelector("base"),Sc?Sc.getAttribute("href"):null}function WI(n){return new URL(n,document.baseURI).pathname}var iS=["alt","control","meta","shift"],$I={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},qI={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},rS=(()=>{class n extends _c{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Nr().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),iS.forEach(l=>{let u=i.indexOf(l);u>-1&&(i.splice(u,1),o+=l+".")}),o+=s,i.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,i){let r=$I[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),iS.forEach(o=>{if(o!==r){let a=qI[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Ze(on))};static \u0275prov=nt({token:n,factory:n.\u0275fac})}return n})();async function Rg(n,e,t){let i=Tt({rootComponent:n},XI(e,t));return WE(i)}function XI(n,e){return{platformRef:e?.platformRef,appProviders:[...QI,...n?.providers??[]],platformProviders:JI}}function YI(){dd.makeCurrent()}function ZI(){return new Ji}function KI(){return Hm(document),document}var JI=[{provide:Wa,useValue:KE},{provide:bu,useValue:YI,multi:!0},{provide:on,useFactory:KI}];var QI=[{provide:Fa,useValue:"root"},{provide:Ji,useFactory:ZI},{provide:ud,useClass:ad,multi:!0},{provide:ud,useClass:rS,multi:!0},Ig,{provide:Ns,useClass:Cg},{provide:Cg,useExisting:Ns},Dg,{provide:Ds,useExisting:Ig},[]];var or=class n{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(e){e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let r=t.slice(0,i),s=t.slice(i+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init();for(let[t,i]of e.headers.entries())this.headers.set(t,i),this.normalizedNames.set(t,e.normalizedNames.get(t))}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let i=e.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(e.name,t);let r=e.op==="a"?(this.headers.get(t)||[]).slice():[];r.push(...i),this.headers.set(t,r);break;case"d":let s=e.value;if(s===void 0)this.headers.delete(t),this.normalizedNames.delete(t);else{let o=Array.isArray(s)?s:[s],a=this.headers.get(t);if(!a)return;a=a.filter(c=>o.indexOf(c)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(e,t){let i=e.toLowerCase();this.maybeSetNormalizedName(e,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(e,t){let i=(Array.isArray(t)?t:[t]).map(s=>s.toString()),r=e.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var hd=class{map=new Map;set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}},pd=class{encodeKey(e){return sS(e)}encodeValue(e){return sS(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function eR(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[e.decodeKey(r),""]:[e.decodeKey(r.slice(0,s)),e.decodeValue(r.slice(s+1))],c=t.get(o)||[];c.push(a),t.set(o,c)}),t}var tR=/%(\d[a-f0-9])/gi,nR={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function sS(n){return encodeURIComponent(n).replace(tR,(e,t)=>nR[t]??e)}function fd(n){return`${n}`}var sr=class n{map;encoder;updates=null;cloneFrom=null;constructor(e={}){if(this.encoder=e.encoder||new pd,e.fromString){if(e.fromObject)throw new Ce(2805,!1);this.map=eR(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let i=e.fromObject[t],r=Array.isArray(i)?i.map(fd):[fd(i)];this.map.set(t,r)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(i=>{let r=e[i];Array.isArray(r)?r.forEach(s=>{t.push({param:i,value:s,op:"a"})}):t.push({param:i,value:r,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){if(this.map===null&&(this.map=new Map),this.cloneFrom!==null){this.cloneFrom.init();for(let[e,t]of this.cloneFrom.map.entries())this.map.set(e,t);this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=e.op==="a"?(this.map.get(e.param)||[]).slice():[];t.push(fd(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let i=(this.map.get(e.param)||[]).slice(),r=i.indexOf(fd(e.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(e.param,i):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null}}};function iR(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function oS(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function aS(n){return typeof Blob<"u"&&n instanceof Blob}function cS(n){return typeof FormData<"u"&&n instanceof FormData}function rR(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var Ng="Content-Type",lS="Accept",dS="text/plain",fS="application/json",sR=`${fS}, ${dS}, */*`,Lo=class n{url;body=null;headers;context;reportProgress=!1;reportUploadProgress=!1;reportDownloadProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(e,t,i,r){this.url=t,this.method=e.toUpperCase();let s;if(iR(this.method)||r?(this.body=i!==void 0?i:null,s=r):s=i,s){if(this.reportProgress=!!s.reportProgress,this.reportUploadProgress=!!s.reportUploadProgress,this.reportDownloadProgress=!!s.reportDownloadProgress,this.withCredentials=!!s.withCredentials,this.keepalive=!!s.keepalive,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),s.priority&&(this.priority=s.priority),s.cache&&(this.cache=s.cache),s.credentials&&(this.credentials=s.credentials),typeof s.timeout=="number"){if(s.timeout<1||!Number.isInteger(s.timeout))throw new Ce(2822,"");this.timeout=s.timeout}s.mode&&(this.mode=s.mode),s.redirect&&(this.redirect=s.redirect),s.integrity&&(this.integrity=s.integrity),s.referrer!==void 0&&(this.referrer=s.referrer),s.referrerPolicy&&(this.referrerPolicy=s.referrerPolicy),this.transferCache=s.transferCache}if(this.headers??=new or,this.context??=new hd,!this.params)this.params=new sr,this.urlWithParams=t;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=t;else{let a=t,c="",l=t.indexOf("#");l!==-1&&(c=t.substring(l),a=t.substring(0,l));let u=a.indexOf("?"),d=u===-1?"?":u<a.length-1?"&":"";this.urlWithParams=a+d+o+c}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||oS(this.body)||aS(this.body)||cS(this.body)||rR(this.body)?this.body:this.body instanceof sr?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||cS(this.body)?null:aS(this.body)?this.body.type||null:oS(this.body)?null:typeof this.body=="string"?dS:this.body instanceof sr?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?fS:null}clone(e={}){let t=e.method||this.method,i=e.url||this.url,r=e.responseType||this.responseType,s=e.keepalive??this.keepalive,o=e.priority||this.priority,a=e.cache||this.cache,c=e.mode||this.mode,l=e.redirect||this.redirect,u=e.credentials||this.credentials,d=e.referrer??this.referrer,f=e.integrity||this.integrity,h=e.referrerPolicy||this.referrerPolicy,m=e.transferCache??this.transferCache,v=e.timeout??this.timeout,g=e.body!==void 0?e.body:this.body,p=e.withCredentials??this.withCredentials,E=e.reportProgress??this.reportProgress,M=e.reportUploadProgress??this.reportUploadProgress,S=e.reportDownloadProgress??this.reportDownloadProgress,D=e.headers||this.headers,w=e.params||this.params,I=e.context??this.context;return e.setHeaders!==void 0&&(D=Object.keys(e.setHeaders).reduce((_,b)=>_.set(b,e.setHeaders[b]),D)),e.setParams&&(w=Object.keys(e.setParams).reduce((_,b)=>_.set(b,e.setParams[b]),w)),new n(t,i,g,{params:w,headers:D,context:I,reportProgress:E,reportUploadProgress:M,reportDownloadProgress:S,responseType:r,withCredentials:p,transferCache:m,keepalive:s,cache:a,priority:o,timeout:v,mode:c,redirect:l,credentials:u,referrer:d,integrity:f,referrerPolicy:h})}},Oo=(function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n})(Oo||{}),Fo=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(e,t=200,i="OK"){this.headers=e.headers||new or,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||i,this.url=e.url||null,this.redirected=e.redirected,this.responseType=e.responseType,this.ok=this.status>=200&&this.status<300}},md=class n extends Fo{constructor(e={}){super(e)}type=Oo.ResponseHeader;clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},Mc=class n extends Fo{body;constructor(e={}){super(e),this.body=e.body!==void 0?e.body:null}type=Oo.Response;clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0,redirected:e.redirected??this.redirected,responseType:e.responseType??this.responseType})}},Ls=class extends Fo{name="HttpErrorResponse";message;error;ok=!1;constructor(e){super(e,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},oR=200;var aR=/^\)\]\}',?\n/,t$=1024*1024,hS=new ke("",{factory:()=>null}),gd=(()=>{class n{fetchImpl=ve(Lg,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=ve(Sn);destroyRef=ve(Nn);maxResponseSize=ve(hS);handle(t){return new tt(i=>{let r=new AbortController;this.doRequest(t,r.signal,i).then(Og,o=>i.error(new Ls({error:o})));let s;return t.timeout&&(s=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{r.signal.aborted||r.abort(new DOMException("signal timed out","TimeoutError"))},t.timeout))),()=>{s!==void 0&&clearTimeout(s),r.abort()}})}async doRequest(t,i,r){let s=this.createRequestInit(t),o;try{let g=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,Tt({signal:i},s)));cR(g),r.next({type:Oo.Sent}),o=await g}catch(g){r.error(new Ls({error:g,status:g.status??0,statusText:g.statusText,url:t.urlWithParams,headers:g.headers}));return}let a=new or(o.headers),c=o.statusText,l=o.url||t.urlWithParams,u=o.status,d=null,f=t.reportProgress||t.reportDownloadProgress;if(f&&r.next(new md({headers:a,status:u,statusText:c,url:l})),o.body){let g=o.headers.get("content-length"),p=g!==null?Number(g):NaN;this.maxResponseSize!==null&&Number.isFinite(p)&&p>this.maxResponseSize&&uS(this.maxResponseSize);let E=[],M=o.body.getReader(),S=0,D,w,I=typeof Zone<"u"&&Zone.current,_=!1;if(await this.ngZone.runOutsideAngular(async()=>{for(;;){if(this.destroyRef.destroyed){await M.cancel(),_=!0;break}let{done:j,value:C}=await M.read();if(j)break;if(E.push(C),S+=C.length,this.maxResponseSize!==null&&S>this.maxResponseSize&&(await M.cancel(),uS(this.maxResponseSize)),f){w=t.responseType==="text"?(w??"")+(D??=new TextDecoder).decode(C,{stream:!0}):void 0;let k=()=>r.next({type:Oo.DownloadProgress,total:Number.isFinite(p)?p:void 0,loaded:S,partialText:w});I?I.run(k):k()}}}),_){r.complete();return}let b=this.concatChunks(E,S);try{let j=o.headers.get(Ng)??"";d=this.parseBody(t,b,j,u)}catch(j){r.error(new Ls({error:j,headers:new or(o.headers),status:o.status,statusText:o.statusText,url:o.url||t.urlWithParams}));return}}u===0&&(u=d?oR:0);let h=u>=200&&u<300,m=o.redirected,v=o.type;h?(r.next(new Mc({body:d,headers:a,status:u,statusText:c,url:l,redirected:m,responseType:v})),r.complete()):r.error(new Ls({error:d,headers:a,status:u,statusText:c,url:l,redirected:m,responseType:v}))}parseBody(t,i,r,s){switch(t.responseType){case"json":let o=new TextDecoder().decode(i).replace(aR,"");if(o==="")return null;try{return JSON.parse(o)}catch(a){if(s<200||s>=300)return o;throw a}case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:r});case"arraybuffer":return i.buffer}}createRequestInit(t){if(t.reportUploadProgress)throw new Ce(2824,!1);let i={},r;if(r=t.credentials,t.withCredentials&&(r="include"),t.headers.forEach((s,o)=>i[s]=o.join(",")),t.headers.has(lS)||(i[lS]=sR),!t.headers.has(Ng)){let s=t.detectContentTypeHeader();s!==null&&(i[Ng]=s)}return{body:t.serializeBody(),method:t.method,headers:i,credentials:r,keepalive:t.keepalive,cache:t.cache,priority:t.priority,mode:t.mode,redirect:t.redirect,referrer:t.referrer,integrity:t.integrity,referrerPolicy:t.referrerPolicy}}concatChunks(t,i){let r=new Uint8Array(i),s=0;for(let o of t)r.set(o,s),s+=o.length;return r}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Rr({token:n,factory:n.\u0275fac})}return n})(),Lg=class{};function Og(){}function cR(n){n.then(Og,Og)}function uS(n){throw new Ce(-2825,!1)}var lR=new ke("",{factory:()=>!0}),uR="XSRF-TOKEN",dR=new ke("",{factory:()=>uR}),fR="X-XSRF-TOKEN",hR=new ke("",{factory:()=>fR}),pR=(()=>{class n{cookieName=ve(dR);doc=ve(on);lastCookieString="";lastToken=null;parseCount=0;getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=vc(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Rr({token:n,factory:n.\u0275fac})}return n})(),pS=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=nt({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=Ze(pR),r},providedIn:"root"})}return n})();function mS(n,e){if(!ve(lR)||n.method==="GET"||n.method==="HEAD")return e(n);try{let r=ve(sd).href,{origin:s}=new URL(r),{origin:o}=new URL(n.url,s);if(s!==o)return e(n)}catch{return e(n)}let t=ve(pS).getToken(),i=ve(hR);return t!=null&&!n.headers.has(i)&&(n=n.clone({headers:n.headers.set(i,t)})),e(n)}function mR(n,e){return e(n)}function gR(n,e,t){return(i,r)=>go(t,()=>e(i,s=>n(s,r)))}var gS=new ke("",{factory:()=>[mS]}),yS=new ke(""),vS=new ke("",{factory:()=>!0});var Fg=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=nt({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=Ze(gd),r},providedIn:"root"})}return n})();var yd=(()=>{class n{backend;injector;chain=null;pendingTasks=ve(Xa);contributeToStability=ve(vS);constructor(t,i){this.backend=t,this.injector=i}handle(t){if(this.chain===null){let r=Array.from(new Set([...this.injector.get(gS),...this.injector.get(yS,[])]));this.chain=r.reduceRight((s,o)=>gR(s,o,this.injector),mR)}let i=this.chain;if(this.contributeToStability){let r=this.pendingTasks.add();return hc(()=>i(t,s=>this.backend.handle(s))).pipe(ip(r))}else return hc(()=>i(t,r=>this.backend.handle(r)))}static \u0275fac=function(i){return new(i||n)(Ze(Fg),Ze(En))};static \u0275prov=nt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),kg=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=nt({token:n,factory:function(i){let r=null;return i?r=new(i||n):r=Ze(yd),r},providedIn:"root"})}return n})();function Pg(n,e){return Tt({body:e},n)}var vd=(()=>{class n{handler;constructor(t){this.handler=t}request(t,i,r={}){let s;if(t instanceof Lo)s=t;else{let c;r.headers instanceof or?c=r.headers:c=new or(r.headers);let l;r.params&&(r.params instanceof sr?l=r.params:l=new sr({fromObject:r.params})),s=new Lo(t,i,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,reportUploadProgress:r.reportUploadProgress,reportDownloadProgress:r.reportDownloadProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let o=Jh(s).pipe(np(c=>this.handler.handle(c)));if(t instanceof Lo||r.observe==="events")return o;let a=o.pipe(tp(c=>c instanceof Mc));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(un(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Ce(2806,!1);return c.body}));case"blob":return a.pipe(un(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Ce(2807,!1);return c.body}));case"text":return a.pipe(un(c=>{if(c.body!==null&&typeof c.body!="string")throw new Ce(2808,!1);return c.body}));default:return a.pipe(un(c=>c.body))}case"response":return a;default:throw new Ce(2809,!1)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new sr().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,r={}){return this.request("PATCH",t,Pg(r,i))}post(t,i,r={}){return this.request("POST",t,Pg(r,i))}put(t,i,r={}){return this.request("PUT",t,Pg(r,i))}static \u0275fac=function(i){return new(i||n)(Ze(kg))};static \u0275prov=nt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ug(...n){let e=[vd,gd,yd,{provide:kg,useExisting:yd},{provide:Fg,useFactory:()=>ve(gd)},{provide:gS,useValue:mS,multi:!0}];for(let t of n)e.push(...t.\u0275providers);return ys(e)}var _S={providers:[sm(),Ug()]};var qr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rM=0,Ty=1,sM=2;var ol=1,oM=2,ma=3,yi=0,cn=1,Jn=2,Hi=0,Vs=1,al=2,wy=3,Dy=4,aM=5;var Vr=100,cM=101,lM=102,uM=103,dM=104,fM=200,hM=201,pM=202,mM=203,$d=204,qd=205,gM=206,yM=207,vM=208,_M=209,xM=210,EM=211,SM=212,MM=213,bM=214,Xd=0,Yd=1,Zd=2,Hs=3,Kd=4,Jd=5,Qd=6,ef=7,Cy=0,TM=1,wM=2,vi=0,Ay=1,Iy=2,Ry=3,Ny=4,Py=5,Ly=6,Oy=7,dy="attached",DM="detached",fy=300,Yr=301,Ys=302,xf=303,Ef=304,cl=306,Hr=1e3,Kn=1001,Jo=1002,Lt=1003,Sf=1004;var Zs=1005;var Ot=1006,ga=1007;var _i=1008;var An=1009,Fy=1010,ky=1011,ya=1012,Mf=1013,xi=1014,zn=1015,zi=1016,bf=1017,Tf=1018,va=1020,Uy=35902,By=35899,Vy=1021,Hy=1022,Gn=1023,Pi=1026,Zr=1027,wf=1028,Df=1029,Ks=1030,Cf=1031;var Af=1033,ll=33776,ul=33777,dl=33778,fl=33779,If=35840,Rf=35841,Nf=35842,Pf=35843,Lf=36196,Of=37492,Ff=37496,kf=37488,Uf=37489,Bf=37490,Vf=37491,Hf=37808,zf=37809,Gf=37810,jf=37811,Wf=37812,$f=37813,qf=37814,Xf=37815,Yf=37816,Zf=37817,Kf=37818,Jf=37819,Qf=37820,eh=37821,th=36492,nh=36494,ih=36495,rh=36283,sh=36284,oh=36285,ah=36286;var zs=2300,Gs=2301,Wd=2302,hy=2303,py=2400,my=2401,gy=2402,CM=2500;var zy=0,hl=1,_a=2,AM=3200;var Gy=0,IM=1,vr="",At="srgb",an="srgb-linear",Pc="linear",ot="srgb";var Bs=7680;var yy=519,RM=512,NM=513,PM=514,ch=515,LM=516,OM=517,lh=518,FM=519,tf=35044;var jy="300 es",pi=2e3,Qo=2001;function yR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function vR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kM(){let n=ea("canvas");return n.style.display="block",n}var xS={},ta=null;function Lc(...n){let e="THREE."+n.shift();ta?ta("log",e,...n):console.log(e,...n)}function UM(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Me(...n){n=UM(n);let e="THREE."+n.shift();if(ta)ta("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ie(...n){n=UM(n);let e="THREE."+n.shift();if(ta)ta("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Oc(...n){let e=n.join(" ");e in xS||(xS[e]=!0,Me(...n))}function BM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var VM={[Xd]:Yd,[Zd]:Qd,[Kd]:ef,[Hs]:Jd,[Yd]:Xd,[Qd]:Zd,[ef]:Kd,[Jd]:Hs},Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ES=1234567,Rc=Math.PI/180,js=180/Math.PI;function gi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function Xe(n,e,t){return Math.max(e,Math.min(t,n))}function Wy(n,e){return(n%e+e)%e}function _R(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function xR(n,e,t){return n!==e?(t-n)/(e-n):0}function Nc(n,e,t){return(1-t)*n+t*e}function ER(n,e,t,i){return Nc(n,e,1-Math.exp(-t*i))}function SR(n,e=1){return e-Math.abs(Wy(n,e*2)-e)}function MR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function TR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function wR(n,e){return n+Math.random()*(e-n)}function DR(n){return n*(.5-Math.random())}function CR(n){n!==void 0&&(ES=n);let e=ES+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function AR(n){return n*Rc}function IR(n){return n*js}function RR(n){return(n&n-1)===0&&n!==0}function NR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function PR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function LR(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),m=o((i-e)/2);switch(r){case"XYX":n.set(a*u,c*d,c*f,a*l);break;case"YZY":n.set(c*f,a*u,c*d,a*l);break;case"ZXZ":n.set(c*d,c*f,a*u,a*l);break;case"XZX":n.set(a*u,c*m,c*h,a*l);break;case"YXY":n.set(c*h,a*u,c*m,a*l);break;case"ZYZ":n.set(c*m,c*h,a*u,a*l);break;default:Me("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Kr={DEG2RAD:Rc,RAD2DEG:js,generateUUID:gi,clamp:Xe,euclideanModulo:Wy,mapLinear:_R,inverseLerp:xR,lerp:Nc,damp:ER,pingpong:SR,smoothstep:MR,smootherstep:bR,randInt:TR,randFloat:wR,randFloatSpread:DR,seededRandom:CR,degToRad:AR,radToDeg:IR,isPowerOfTwo:RR,ceilPowerOfTwo:NR,floorPowerOfTwo:PR,setQuaternionFromProperEuler:LR,normalize:ut,denormalize:hi},De=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],m=s[o+2],v=s[o+3];if(d!==v||c!==f||l!==h||u!==m){let g=c*f+l*h+u*m+d*v;g<0&&(f=-f,h=-h,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){let E=Math.acos(g),M=Math.sin(E);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M,c=c*p+f*a,l=l*p+h*a,u=u*p+m*a,d=d*p+v*a}else{c=c*p+f*a,l=l*p+h*a,u=u*p+m*a,d=d*p+v*a;let E=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=E,l*=E,u*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],m=s[o+3];return e[t]=a*m+u*d+c*h-l*f,e[t+1]=c*m+u*f+l*d-a*h,e[t+2]=l*m+u*h+a*f-c*d,e[t+3]=u*m-a*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),f=c(i/2),h=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=f*u*d+l*h*m,this._y=l*h*d-f*u*m,this._z=l*u*m+f*h*d,this._w=l*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+l*h*m,this._y=l*h*d-f*u*m,this._z=l*u*m-f*h*d,this._w=l*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-l*h*m,this._y=l*h*d+f*u*m,this._z=l*u*m+f*h*d,this._w=l*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-l*h*m,this._y=l*h*d+f*u*m,this._z=l*u*m-f*h*d,this._w=l*u*d+f*h*m;break;case"YZX":this._x=f*u*d+l*h*m,this._y=l*h*d+f*u*m,this._z=l*u*m-f*h*d,this._w=l*u*d-f*h*m;break;case"XZY":this._x=f*u*d-l*h*m,this._y=l*h*d-f*u*m,this._z=l*u*m+f*h*d,this._w=l*u*d+f*h*m;break;default:Me("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+l)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-l)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(c+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(SS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(SS.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bg.copy(this).projectOnVector(e),this.sub(Bg)}reflect(e){return this.sub(Bg.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bg=new N,SS=new mn,He=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],v=r[0],g=r[3],p=r[6],E=r[1],M=r[4],S=r[7],D=r[2],w=r[5],I=r[8];return s[0]=o*v+a*E+c*D,s[3]=o*g+a*M+c*w,s[6]=o*p+a*S+c*I,s[1]=l*v+u*E+d*D,s[4]=l*g+u*M+d*w,s[7]=l*p+u*S+d*I,s[2]=f*v+h*E+m*D,s[5]=f*g+h*M+m*w,s[8]=f*p+h*S+m*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,f=a*c-u*s,h=l*s-o*c,m=t*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=d*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*t-r*c)*v,e[5]=(r*s-a*t)*v,e[6]=h*v,e[7]=(i*c-l*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vg.makeScale(e,t)),this}rotate(e){return this.premultiply(Vg.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vg.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Vg=new He,MS=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bS=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OR(){let n={enabled:!0,workingColorSpace:an,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=hr(r.r),r.g=hr(r.g),r.b=hr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Ko(r.r),r.g=Ko(r.g),r.b=Ko(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?Pc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Oc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Oc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[an]:{primaries:e,whitePoint:i,transfer:Pc,toXYZ:MS,fromXYZ:bS,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:MS,fromXYZ:bS,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),n}var Ke=OR();function hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ko,nf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ko===void 0&&(ko=ea("canvas")),ko.width=e.width,ko.height=e.height;let r=ko.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ko}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ea("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return Me("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},FR=0,na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FR++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hg(r[o].image)):s.push(Hg(r[o]))}else s=Hg(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Hg(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Me("Texture: Unable to serialize Texture."),{})}var kR=0,zg=new N,jn=(()=>{class n extends Li{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Kn,s=Kn,o=Ot,a=_i,c=Gn,l=An,u=n.DEFAULT_ANISOTROPY,d=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=gi(),this.name="",this.source=new na(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zg).x}get height(){return this.source.getSize(zg).y}get depth(){return this.source.getSize(zg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Me(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let s=this[i];if(s===void 0){Me(`Texture.setValues(): property '${i}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hr:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hr:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=fy,n.DEFAULT_ANISOTROPY=1,n})(),St=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,S=(h+1)/2,D=(p+1)/2,w=(u+f)/4,I=(d+v)/4,_=(m+g)/4;return M>S&&M>D?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=w/i,s=I/i):S>D?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=_/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=I/s,r=_/s),this.set(i,r,s,t),this}let E=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(g-m)/E,this.y=(d-v)/E,this.z=(f-u)/E,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rf=class extends Li{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},s=new jn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new na(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fc=class extends jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sf=class extends jn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,f,h,m,v,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,f,h,m,v,g)}set(e,t,i,r,s,o,a,c,l,u,d,f,h,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,r=1/Uo.setFromMatrixColumn(e,0).length(),s=1/Uo.setFromMatrixColumn(e,1).length(),o=1/Uo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,m=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=h+m*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=m+h*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,h=c*d,m=l*u,v=l*d;t[0]=f+v*a,t[4]=m*a-h,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-m,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,h=c*d,m=l*u,v=l*d;t[0]=f-v*a,t[4]=-o*d,t[8]=m+h*a,t[1]=h+m*a,t[5]=o*u,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,h=o*d,m=a*u,v=a*d;t[0]=c*u,t[4]=m*l-h,t[8]=f*l+v,t[1]=c*d,t[5]=v*l+f,t[9]=h*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,h=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=v-f*d,t[8]=m*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=h*d+m,t[10]=f-v*d}else if(e.order==="XZY"){let f=o*c,h=o*l,m=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=f*d+v,t[5]=o*u,t[9]=h*d-m,t[2]=m*d-h,t[6]=a*u,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UR,e,BR)}lookAt(e,t,i){let r=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),Pr.crossVectors(i,kn),Pr.lengthSq()===0&&(Math.abs(i.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),Pr.crossVectors(i,kn)),Pr.normalize(),_d.crossVectors(kn,Pr),r[0]=Pr.x,r[4]=_d.x,r[8]=kn.x,r[1]=Pr.y,r[5]=_d.y,r[9]=kn.y,r[2]=Pr.z,r[6]=_d.z,r[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],v=i[6],g=i[10],p=i[14],E=i[3],M=i[7],S=i[11],D=i[15],w=r[0],I=r[4],_=r[8],b=r[12],j=r[1],C=r[5],k=r[9],V=r[13],G=r[2],H=r[6],B=r[10],U=r[14],Q=r[3],Z=r[7],le=r[11],pe=r[15];return s[0]=o*w+a*j+c*G+l*Q,s[4]=o*I+a*C+c*H+l*Z,s[8]=o*_+a*k+c*B+l*le,s[12]=o*b+a*V+c*U+l*pe,s[1]=u*w+d*j+f*G+h*Q,s[5]=u*I+d*C+f*H+h*Z,s[9]=u*_+d*k+f*B+h*le,s[13]=u*b+d*V+f*U+h*pe,s[2]=m*w+v*j+g*G+p*Q,s[6]=m*I+v*C+g*H+p*Z,s[10]=m*_+v*k+g*B+p*le,s[14]=m*b+v*V+g*U+p*pe,s[3]=E*w+M*j+S*G+D*Q,s[7]=E*I+M*C+S*H+D*Z,s[11]=E*_+M*k+S*B+D*le,s[15]=E*b+M*V+S*U+D*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],m=e[3],v=e[7],g=e[11],p=e[15],E=c*h-l*f,M=a*h-l*d,S=a*f-c*d,D=o*h-l*u,w=o*f-c*u,I=o*d-a*u;return t*(v*E-g*M+p*S)-i*(m*E-g*D+p*w)+r*(m*M-v*D+p*I)-s*(m*S-v*w+g*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],m=e[12],v=e[13],g=e[14],p=e[15],E=t*a-i*o,M=t*c-r*o,S=t*l-s*o,D=i*c-r*a,w=i*l-s*a,I=r*l-s*c,_=u*v-d*m,b=u*g-f*m,j=u*p-h*m,C=d*g-f*v,k=d*p-h*v,V=f*p-h*g,G=E*V-M*k+S*C+D*j-w*b+I*_;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/G;return e[0]=(a*V-c*k+l*C)*H,e[1]=(r*k-i*V-s*C)*H,e[2]=(v*I-g*w+p*D)*H,e[3]=(f*w-d*I-h*D)*H,e[4]=(c*j-o*V-l*b)*H,e[5]=(t*V-r*j+s*b)*H,e[6]=(g*S-m*I-p*M)*H,e[7]=(u*I-f*S+h*M)*H,e[8]=(o*k-a*j+l*_)*H,e[9]=(i*j-t*k-s*_)*H,e[10]=(m*w-v*S+p*E)*H,e[11]=(d*S-u*w-h*E)*H,e[12]=(a*b-o*C-c*_)*H,e[13]=(t*C-i*b+r*_)*H,e[14]=(v*M-m*D-g*E)*H,e[15]=(u*D-d*M+f*E)*H,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,f=s*l,h=s*u,m=s*d,v=o*u,g=o*d,p=a*d,E=c*l,M=c*u,S=c*d,D=i.x,w=i.y,I=i.z;return r[0]=(1-(v+p))*D,r[1]=(h+S)*D,r[2]=(m-M)*D,r[3]=0,r[4]=(h-S)*w,r[5]=(1-(f+p))*w,r[6]=(g+E)*w,r[7]=0,r[8]=(m+M)*I,r[9]=(g-E)*I,r[10]=(1-(f+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=Uo.set(r[0],r[1],r[2]).length(),a=Uo.set(r[4],r[5],r[6]).length(),c=Uo.set(r[8],r[9],r[10]).length();s<0&&(o=-o),ui.copy(this);let l=1/o,u=1/a,d=1/c;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,t.setFromRotationMatrix(ui),i.x=o,i.y=a,i.z=c,this}makePerspective(e,t,i,r,s,o,a=pi,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r),m,v;if(c)m=s/(o-s),v=o*s/(o-s);else if(a===pi)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Qo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=pi,c=!1){let l=this.elements,u=2/(t-e),d=2/(i-r),f=-(t+e)/(t-e),h=-(i+r)/(i-r),m,v;if(c)m=1/(o-s),v=o/(o-s);else if(a===pi)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===Qo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Uo=new N,ui=new Ve,UR=new N(0,0,0),BR=new N(1,1,1),Pr=new N,_d=new N,kn=new N,TS=new Ve,wS=new mn,zr=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],f=s[2],h=s[6],m=s[10];switch(i){case"XYZ":this._y=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Me("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return TS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(TS,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wS.setFromEuler(this),this.setFromQuaternion(wS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},VR=0,DS=new N,Bo=new mn,ar=new Ve,xd=new N,bc=new N,HR=new N,zR=new mn,CS=new N(1,0,0),AS=new N(0,1,0),IS=new N(0,0,1),RS={type:"added"},GR={type:"removed"},Vo={type:"childadded",child:null},Gg={type:"childremoved",child:null},en=(()=>{class n extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VR++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,i=new zr,r=new mn,s=new N(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new He}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Bo.setFromAxisAngle(t,i),this.quaternion.multiply(Bo),this}rotateOnWorldAxis(t,i){return Bo.setFromAxisAngle(t,i),this.quaternion.premultiply(Bo),this}rotateX(t){return this.rotateOnAxis(CS,t)}rotateY(t){return this.rotateOnAxis(AS,t)}rotateZ(t){return this.rotateOnAxis(IS,t)}translateOnAxis(t,i){return DS.copy(t).applyQuaternion(this.quaternion),this.position.add(DS.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(CS,t)}translateY(t){return this.translateOnAxis(AS,t)}translateZ(t){return this.translateOnAxis(IS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ar.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?xd.copy(t):xd.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),bc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ar.lookAt(bc,xd,this.up):ar.lookAt(xd,bc,this.up),this.quaternion.setFromRotationMatrix(ar),s&&(ar.extractRotation(s.matrixWorld),Bo.setFromRotationMatrix(ar),this.quaternion.premultiply(Bo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(RS),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(GR),Gg.child=t,this.dispatchEvent(Gg),Gg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(ar),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(RS),Vo.child=t,this.dispatchEvent(Vo),Vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,t,HR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bc,zR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,s=t.z,o=this.matrix.elements;o[12]+=i-o[0]*i-o[4]*r-o[8]*s,o[13]+=r-o[1]*i-o[5]*r-o[9]*s,o[14]+=s-o[2]*i-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>vn(Tt({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>Tt({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),m=a(t.animations),v=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new N(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),mi=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},jR={type:"move"},ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,i),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;l.inputState.pinching&&f>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jR)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new mi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},HM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Ed={h:0,s:0,l:0};function jg(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Wy(e,1),t=Xe(t,0,1),i=Xe(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=jg(o,s,e+1/3),this.g=jg(o,s,e),this.b=jg(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function i(s){s!==void 0&&parseFloat(s)<1&&Me("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Me("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Me("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let i=HM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Me("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.workingToColorSpace(pn.copy(this),e),Math.round(Xe(pn.r*255,0,255))*65536+Math.round(Xe(pn.g*255,0,255))*256+Math.round(Xe(pn.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(pn.copy(this),t);let i=pn.r,r=pn.g,s=pn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=At){Ke.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,r=pn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Ed);let i=Nc(Lr.h,Ed.h,t),r=Nc(Lr.s,Ed.s,t),s=Nc(Lr.l,Ed.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Ne;Ne.NAMES=HM;var kc=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},di=new N,cr=new N,Wg=new N,lr=new N,Ho=new N,zo=new N,NS=new N,$g=new N,qg=new N,Xg=new N,Yg=new St,Zg=new St,Kg=new St,Br=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),di.subVectors(e,t),r.cross(di);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){di.subVectors(r,t),cr.subVectors(i,t),Wg.subVectors(e,t);let o=di.dot(di),a=di.dot(cr),c=di.dot(Wg),l=cr.dot(cr),u=cr.dot(Wg),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(l*c-a*u)*f,m=(o*u-a*c)*f;return s.set(1-h-m,m,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,lr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,lr.x),c.addScaledVector(o,lr.y),c.addScaledVector(a,lr.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Yg.setScalar(0),Zg.setScalar(0),Kg.setScalar(0),Yg.fromBufferAttribute(e,t),Zg.fromBufferAttribute(e,i),Kg.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Yg,s.x),o.addScaledVector(Zg,s.y),o.addScaledVector(Kg,s.z),o}static isFrontFacing(e,t,i,r){return di.subVectors(i,t),cr.subVectors(e,t),di.cross(cr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),di.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ho.subVectors(r,i),zo.subVectors(s,i),$g.subVectors(e,i);let c=Ho.dot($g),l=zo.dot($g);if(c<=0&&l<=0)return t.copy(i);qg.subVectors(e,r);let u=Ho.dot(qg),d=zo.dot(qg);if(u>=0&&d<=u)return t.copy(r);let f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ho,o);Xg.subVectors(e,s);let h=Ho.dot(Xg),m=zo.dot(Xg);if(m>=0&&h<=m)return t.copy(s);let v=h*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(i).addScaledVector(zo,a);let g=u*m-h*d;if(g<=0&&d-u>=0&&h-m>=0)return NS.subVectors(s,r),a=(d-u)/(d-u+(h-m)),t.copy(r).addScaledVector(NS,a);let p=1/(g+v+f);return o=v*p,a=f*p,t.copy(i).addScaledVector(Ho,o).addScaledVector(zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vn=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fi):fi.fromBufferAttribute(s,o),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sd.copy(i.boundingBox)),Sd.applyMatrix4(e.matrixWorld),this.union(Sd)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tc),Md.subVectors(this.max,Tc),Go.subVectors(e.a,Tc),jo.subVectors(e.b,Tc),Wo.subVectors(e.c,Tc),Or.subVectors(jo,Go),Fr.subVectors(Wo,jo),Os.subVectors(Go,Wo);let t=[0,-Or.z,Or.y,0,-Fr.z,Fr.y,0,-Os.z,Os.y,Or.z,0,-Or.x,Fr.z,0,-Fr.x,Os.z,0,-Os.x,-Or.y,Or.x,0,-Fr.y,Fr.x,0,-Os.y,Os.x,0];return!Jg(t,Go,jo,Wo,Md)||(t=[1,0,0,0,1,0,0,0,1],!Jg(t,Go,jo,Wo,Md))?!1:(bd.crossVectors(Or,Fr),t=[bd.x,bd.y,bd.z],Jg(t,Go,jo,Wo,Md))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ur=[new N,new N,new N,new N,new N,new N,new N,new N],fi=new N,Sd=new Vn,Go=new N,jo=new N,Wo=new N,Or=new N,Fr=new N,Os=new N,Tc=new N,Md=new N,bd=new N,Fs=new N;function Jg(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Fs.fromArray(n,s);let a=r.x*Math.abs(Fs.x)+r.y*Math.abs(Fs.y)+r.z*Math.abs(Fs.z),c=e.dot(Fs),l=t.dot(Fs),u=i.dot(Fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Ut=new N,Td=new De,WR=0,It=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:WR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tf,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Td.fromBufferAttribute(this,t),Td.applyMatrix3(e),this.setXY(t,Td.x,Td.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tf&&(e.usage=this.usage),e}};var Uc=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Bc=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qt=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},$R=new Vn,wc=new N,Qg=new N,Tn=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):$R.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wc.subVectors(e,this.center);let t=wc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wc,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wc.copy(e.center).add(Qg)),this.expandByPoint(wc.copy(e.center).sub(Qg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qR=0,Yn=new Ve,ey=new en,$o=new N,Un=new Vn,Dc=new Vn,Jt=new N,Ht=class n extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qR++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yR(e)?Bc:Uc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return ey.lookAt(e),ey.updateMatrix(),this.applyMatrix4(ey.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Me("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Dc.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Un.min,Dc.min),Un.expandByPoint(Jt),Jt.addVectors(Un.max,Dc.max),Un.expandByPoint(Jt)):(Un.expandByPoint(Dc.min),Un.expandByPoint(Dc.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Jt.fromBufferAttribute(a,l),c&&($o.fromBufferAttribute(e,l),Jt.add($o)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new N,c[_]=new N;let l=new N,u=new N,d=new N,f=new De,h=new De,m=new De,v=new N,g=new N;function p(_,b,j){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,j),f.fromBufferAttribute(s,_),h.fromBufferAttribute(s,b),m.fromBufferAttribute(s,j),u.sub(l),d.sub(l),h.sub(f),m.sub(f);let C=1/(h.x*m.y-m.x*h.y);isFinite(C)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(C),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(C),a[_].add(v),a[b].add(v),a[j].add(v),c[_].add(g),c[b].add(g),c[j].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let _=0,b=E.length;_<b;++_){let j=E[_],C=j.start,k=j.count;for(let V=C,G=C+k;V<G;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let M=new N,S=new N,D=new N,w=new N;function I(_){D.fromBufferAttribute(r,_),w.copy(D);let b=a[_];M.copy(b),M.sub(D.multiplyScalar(D.dot(b))).normalize(),S.crossVectors(w,b);let C=S.dot(c[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,C)}for(let _=0,b=E.length;_<b;++_){let j=E[_],C=j.start,k=j.count;for(let V=C,G=C+k;V<G;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new N,s=new N,o=new N,a=new N,c=new N,l=new N,u=new N,d=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){let m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,f=new l.constructor(c.length*u),h=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?h=c[v]*a.data.stride+a.offset:h=c[v]*u;for(let p=0;p<u;p++)f[m++]=l[h++]}return new It(f,u,d)}if(this.index===null)return Me("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let f=l[u],h=e(f,i);c.push(h)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){let h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tf,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new N,oa=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Lc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},XR=0,wn=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XR++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Vs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$d,this.blendDst=qd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Me(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Me(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(i.blending=this.blending),this.side!==yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$d&&(i.blendSrc=this.blendSrc),this.blendDst!==qd&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var dr=new N,ty=new N,wd=new N,kr=new N,ny=new N,Dd=new N,iy=new N,Oi=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ty.copy(e).add(t).multiplyScalar(.5),wd.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(ty);let s=e.distanceTo(t)*.5,o=-this.direction.dot(wd),a=kr.dot(this.direction),c=-kr.dot(wd),l=kr.lengthSq(),u=Math.abs(1-o*o),d,f,h,m;if(u>0)if(d=o*c-a,f=o*a-c,m=s*u,d>=0)if(f>=-m)if(f<=m){let v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=m?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ty).addScaledVector(wd,f),h}intersectSphere(e,t){dr.subVectors(e.center,this.origin);let i=dr.dot(this.direction),r=dr.dot(dr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,i,r,s){ny.subVectors(t,e),Dd.subVectors(i,e),iy.crossVectors(ny,Dd);let o=this.direction.dot(iy),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;kr.subVectors(this.origin,e);let c=a*this.direction.dot(Dd.crossVectors(kr,Dd));if(c<0)return null;let l=a*this.direction.dot(ny.cross(kr));if(l<0||c+l>o)return null;let u=-a*kr.dot(iy);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=Cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},PS=new Ve,ks=new Oi,Cd=new Tn,LS=new N,Ad=new N,Id=new N,Rd=new N,ry=new N,Nd=new N,OS=new N,Pd=new N,Rt=class extends en{constructor(e=new Ht,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Nd.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(ry.fromBufferAttribute(d,e),o?Nd.addScaledVector(ry,u):Nd.addScaledVector(ry.sub(t),u))}t.add(Nd)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cd.copy(i.boundingSphere),Cd.applyMatrix4(s),ks.copy(e.ray).recast(e.near),!(Cd.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Cd,LS)===null||ks.origin.distanceToSquared(LS)>(e.far-e.near)**2))&&(PS.copy(s).invert(),ks.copy(e.ray).applyMatrix4(PS),!(i.boundingBox!==null&&ks.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ks)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],E=Math.max(g.start,h.start),M=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let S=E,D=M;S<D;S+=3){let w=a.getX(S),I=a.getX(S+1),_=a.getX(S+2);r=Ld(this,p,e,i,l,u,d,w,I,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){let E=a.getX(g),M=a.getX(g+1),S=a.getX(g+2);r=Ld(this,o,e,i,l,u,d,E,M,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=o[g.materialIndex],E=Math.max(g.start,h.start),M=Math.min(c.count,Math.min(g.start+g.count,h.start+h.count));for(let S=E,D=M;S<D;S+=3){let w=S,I=S+1,_=S+2;r=Ld(this,p,e,i,l,u,d,w,I,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{let m=Math.max(0,h.start),v=Math.min(c.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){let E=g,M=g+1,S=g+2;r=Ld(this,o,e,i,l,u,d,E,M,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}};function YR(n,e,t,i,r,s,o,a){let c;if(e.side===cn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===yi,a),c===null)return null;Pd.copy(a),Pd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Pd);return l<t.near||l>t.far?null:{distance:l,point:Pd.clone(),object:n}}function Ld(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Ad),n.getVertexPosition(c,Id),n.getVertexPosition(l,Rd);let u=YR(n,e,t,i,Ad,Id,Rd,OS);if(u){let d=new N;Br.getBarycoord(OS,Ad,Id,Rd,d),r&&(u.uv=Br.getInterpolatedAttribute(r,a,c,l,d,new De)),s&&(u.uv1=Br.getInterpolatedAttribute(s,a,c,l,d,new De)),o&&(u.normal=Br.getInterpolatedAttribute(o,a,c,l,d,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new N,materialIndex:0};Br.getNormal(Ad,Id,Rd,f.normal),u.face=f,u.barycoord=d}return u}var FS=new N,kS=new St,US=new St,ZR=new N,BS=new Ve,Od=new N,sy=new Tn,VS=new Ve,oy=new Oi,Vc=class extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dy,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Od),this.boundingBox.expandByPoint(Od)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Od),this.boundingSphere.expandByPoint(Od)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sy.copy(this.boundingSphere),sy.applyMatrix4(r),e.ray.intersectsSphere(sy)!==!1&&(VS.copy(r).invert(),oy.copy(e.ray).applyMatrix4(VS),!(this.boundingBox!==null&&oy.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oy)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dy?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===DM?this.bindMatrixInverse.copy(this.bindMatrix).invert():Me("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;kS.fromBufferAttribute(r.attributes.skinIndex,e),US.fromBufferAttribute(r.attributes.skinWeight,e),FS.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let o=US.getComponent(s);if(o!==0){let a=kS.getComponent(s);BS.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ZR.copy(FS).applyMatrix4(BS),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},aa=class extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}},ca=class extends jn{constructor(e=null,t=1,i=1,r,s,o,a,c,l=Lt,u=Lt,d,f){super(null,o,a,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},HS=new Ve,KR=new Ve,Hc=class n{constructor(e=[],t=[]){this.uuid=gi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Me("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){let a=e[s]?e[s].matrixWorld:KR;HS.multiplyMatrices(a,t[s]),HS.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new ca(t,e,e,Gn,zn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){let s=e.bones[i],o=t[s];o===void 0&&(Me("Skeleton: No bone found with UUID:",s),o=new aa),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){let o=t[r];e.bones.push(o.uuid);let a=i[r];e.boneInverses.push(a.toArray())}return e}},Gr=class extends It{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qo=new Ve,zS=new Ve,Fd=[],GS=new Vn,JR=new Ve,Cc=new Rt,Ac=new Tn,zc=class extends Rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gr(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,JR)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qo),GS.copy(e.boundingBox).applyMatrix4(qo),this.boundingBox.union(GS)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qo),Ac.copy(e.boundingSphere).applyMatrix4(qo),this.boundingSphere.union(Ac)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(Cc.geometry=this.geometry,Cc.material=this.material,Cc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ac.copy(this.boundingSphere),Ac.applyMatrix4(i),e.ray.intersectsSphere(Ac)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,qo),zS.multiplyMatrices(i,qo),Cc.matrixWorld=zS,Cc.raycast(e,Fd);for(let o=0,a=Fd.length;o<a;o++){let c=Fd[o];c.instanceId=s,c.object=this,t.push(c)}Fd.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(r*this.count),r,this.count,wf,zn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<i.length;l++)o+=i[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ay=new N,QR=new N,e1=new He,Zn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ay.subVectors(i,t).cross(QR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ay),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||e1.getNormalMatrix(e),r=this.coplanarPoint(ay).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Tn,t1=new De(.5,.5),kd=new N,la=class{constructor(e=new Zn,t=new Zn,i=new Zn,r=new Zn,s=new Zn,o=new Zn){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi,i=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],m=s[8],v=s[9],g=s[10],p=s[11],E=s[12],M=s[13],S=s[14],D=s[15];if(r[0].setComponents(l-o,h-u,p-m,D-E).normalize(),r[1].setComponents(l+o,h+u,p+m,D+E).normalize(),r[2].setComponents(l+a,h+d,p+v,D+M).normalize(),r[3].setComponents(l-a,h-d,p-v,D-M).normalize(),i)r[4].setComponents(c,f,g,S).normalize(),r[5].setComponents(l-c,h-f,p-g,D-S).normalize();else if(r[4].setComponents(l-c,h-f,p-g,D-S).normalize(),t===pi)r[5].setComponents(l+c,h+f,p+g,D+S).normalize();else if(t===Qo)r[5].setComponents(c,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(e){Us.center.set(0,0,0);let t=t1.distanceTo(e.center);return Us.radius=.7071067811865476+t,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(kd.x=r.normal.x>0?e.max.x:e.min.x,kd.y=r.normal.y>0?e.max.y:e.min.y,kd.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(kd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pr=class extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},of=new N,af=new N,jS=new Ve,Ic=new Oi,Ud=new Tn,cy=new N,WS=new N,Fi=class extends en{constructor(e=new Ht,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)of.fromBufferAttribute(t,r-1),af.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=of.distanceTo(af);e.setAttribute("lineDistance",new Qt(i,1))}else Me("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ud.copy(i.boundingSphere),Ud.applyMatrix4(r),Ud.radius+=s,e.ray.intersectsSphere(Ud)===!1)return;jS.copy(r).invert(),Ic.copy(e.ray).applyMatrix4(jS);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){let p=u.getX(v),E=u.getX(v+1),M=Bd(this,e,Ic,c,p,E,v);M&&t.push(M)}if(this.isLineLoop){let v=u.getX(m-1),g=u.getX(h),p=Bd(this,e,Ic,c,v,g,m-1);p&&t.push(p)}}else{let h=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let v=h,g=m-1;v<g;v+=l){let p=Bd(this,e,Ic,c,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Bd(this,e,Ic,c,m-1,h,m-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Bd(n,e,t,i,r,s,o){let a=n.geometry.attributes.position;if(of.fromBufferAttribute(a,r),af.fromBufferAttribute(a,s),t.distanceSqToSegment(of,af,cy,WS)>i)return;cy.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(cy);if(!(l<e.near||l>e.far))return{distance:l,point:WS.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var $S=new N,qS=new N,Gc=class extends Fi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)$S.fromBufferAttribute(t,r),qS.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$S.distanceTo(qS);e.setAttribute("lineDistance",new Qt(i,1))}else Me("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jc=class extends Fi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},ua=class extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},XS=new Ve,vy=new Oi,Vd=new Tn,Hd=new N,Wc=class extends en{constructor(e=new Ht,t=new ua){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vd.copy(i.boundingSphere),Vd.applyMatrix4(r),Vd.radius+=s,e.ray.intersectsSphere(Vd)===!1)return;XS.copy(r).invert(),vy.copy(e.ray).applyMatrix4(XS);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let f=Math.max(0,o.start),h=Math.min(l.count,o.start+o.count);for(let m=f,v=h;m<v;m++){let g=l.getX(m);Hd.fromBufferAttribute(d,g),YS(Hd,g,c,r,e,t,this)}}else{let f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let m=f,v=h;m<v;m++)Hd.fromBufferAttribute(d,m),YS(Hd,m,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function YS(n,e,t,i,r,s,o){let a=vy.distanceSqToPoint(n);if(a<t){let c=new N;vy.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var da=class extends jn{constructor(e=[],t=Yr,i,r,s,o,a,c,l,u){super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var jr=class extends jn{constructor(e,t,i=xi,r,s,o,a=Lt,c=Lt,l,u=Pi,d=1){if(u!==Pi&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new na(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cf=class extends jr{constructor(e,t=xi,i=Yr,r,s,o=Lt,a=Lt,c,l=Pi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$c=class extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fa=class n extends Ht{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],f=0,h=0;m("z","y","x",-1,-1,i,t,e,o,s,0),m("z","y","x",1,-1,i,t,-e,o,s,1),m("x","z","y",1,1,e,i,t,r,o,2),m("x","z","y",1,-1,e,i,-t,r,o,3),m("x","y","z",1,-1,e,t,i,r,s,4),m("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function m(v,g,p,E,M,S,D,w,I,_,b){let j=S/I,C=D/_,k=S/2,V=D/2,G=w/2,H=I+1,B=_+1,U=0,Q=0,Z=new N;for(let le=0;le<B;le++){let pe=le*C-V;for(let de=0;de<H;de++){let Ge=de*j-k;Z[v]=Ge*E,Z[g]=pe*M,Z[p]=G,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[g]=0,Z[p]=w>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(de/I),d.push(1-le/_),U+=1}}for(let le=0;le<_;le++)for(let pe=0;pe<I;pe++){let de=f+pe+H*le,Ge=f+pe+H*(le+1),bt=f+(pe+1)+H*(le+1),Mt=f+(pe+1)+H*le;c.push(de,Ge,Mt),c.push(Ge,bt,Mt),Q+=6}a.addGroup(h,Q,b),h+=Q,f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qc=class n extends Ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,f=t/c,h=[],m=[],v=[],g=[];for(let p=0;p<u;p++){let E=p*f-o;for(let M=0;M<l;M++){let S=M*d-s;m.push(S,-E,0),v.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let M=E+l*p,S=E+l*(p+1),D=E+1+l*(p+1),w=E+1+l*p;h.push(M,S,w),h.push(S,D,w)}this.setIndex(h),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ws=class n extends Ht{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new N,f=new N,h=[],m=[],v=[],g=[];for(let p=0;p<=i;p++){let E=[],M=p/i,S=0;p===0&&o===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let D=0;D<=t;D++){let w=D/t;d.x=-e*Math.cos(r+w*s)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+M*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),g.push(w+S,1-M),E.push(l++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){let M=u[p][E+1],S=u[p][E],D=u[p+1][E],w=u[p+1][E+1];(p!==0||o>0)&&h.push(M,S,w),(p!==i-1||c<Math.PI)&&h.push(S,D,w)}this.setIndex(h),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Js(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Me("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=Js(n[t]);for(let r in i)e[r]=i[r]}return e}function n1(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function $y(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var zM={clone:Js,merge:yn},i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=r1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=n1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},lf=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},$s=class extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gy,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Dn=class extends $s{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var uf=class extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},df=class extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function zd(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function s1(n){function e(r,s){return n[r]-n[s]}let t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function ZS(n,e,t){let i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){let a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=n[a+c]}return r}function GM(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}var ki=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ff=class extends ki{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:py,endingEnd:py}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case my:s=e,a=2*t-i;break;case gy:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case my:o=e,c=2*i-t;break;case gy:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,m=(i-t)/(r-t),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,E=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,M=(-1-h)*g+(1.5+h)*v+.5*m,S=h*g-h*v;for(let D=0;D!==a;++D)s[D]=p*o[u+D]+E*o[l+D]+M*o[c+D]+S*o[d+D];return s}},hf=class extends ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*d+o[c+f]*u;return s}},pf=class extends ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},mf=class extends ki{interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.settings||this.DefaultSettings_,d=u.inTangents,f=u.outTangents;if(!d||!f){let v=(i-t)/(r-t),g=1-v;for(let p=0;p!==a;++p)s[p]=o[l+p]*g+o[c+p]*v;return s}let h=a*2,m=e-1;for(let v=0;v!==a;++v){let g=o[l+v],p=o[c+v],E=m*h+v*2,M=f[E],S=f[E+1],D=e*h+v*2,w=d[D],I=d[D+1],_=(i-t)/(r-t),b,j,C,k,V;for(let G=0;G<8;G++){b=_*_,j=b*_,C=1-_,k=C*C,V=k*C;let B=V*t+3*k*_*M+3*C*b*w+j*r-i;if(Math.abs(B)<1e-10)break;let U=3*k*(M-t)+6*C*_*(w-M)+3*b*(r-w);if(Math.abs(U)<1e-10)break;_=_-B/U,_=Math.max(0,Math.min(1,_))}s[v]=V*g+3*k*_*S+3*C*b*I+j*p}return s}},Cn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zd(t,this.TimeBufferType),this.values=zd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zd(e.times,Array),values:zd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ff(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new mf(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case zs:t=this.InterpolantFactoryMethodDiscrete;break;case Gs:t=this.InterpolantFactoryMethodLinear;break;case Wd:t=this.InterpolantFactoryMethodSmooth;break;case hy:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Me("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return Gs;case this.InterpolantFactoryMethodSmooth:return Wd;case this.InterpolantFactoryMethodBezier:return hy}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){Ie("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Ie("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&vR(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Ie("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Wd,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,f=d-i,h=d+i;for(let m=0;m!==i;++m){let v=t[d+m];if(v!==t[f+m]||v!==t[h+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Gs;var mr=class extends Cn{constructor(e,t,i){super(e,t,i)}};mr.prototype.ValueTypeName="bool";mr.prototype.ValueBufferType=Array;mr.prototype.DefaultInterpolation=zs;mr.prototype.InterpolantFactoryMethodLinear=void 0;mr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xc=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}};Xc.prototype.ValueTypeName="color";var Ui=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}};Ui.prototype.ValueTypeName="number";var gf=class extends ki{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)mn.slerpFlat(s,0,o,l-a,o,l,c);return s}},Bi=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new gf(this.times,this.values,this.getValueSize(),e)}};Bi.prototype.ValueTypeName="quaternion";Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Cn{constructor(e,t,i){super(e,t,i)}};gr.prototype.ValueTypeName="string";gr.prototype.ValueBufferType=Array;gr.prototype.DefaultInterpolation=zs;gr.prototype.InterpolantFactoryMethodLinear=void 0;gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Cn{constructor(e,t,i,r){super(e,t,i,r)}};Vi.prototype.ValueTypeName="vector";var Yc=class{constructor(e="",t=-1,i=[],r=CM){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=gi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(a1(i[o]).scale(r));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(Cn.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);let u=s1(c);c=ZS(c,1,u),l=ZS(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Ui(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(s);if(u&&u.length>1){let d=u[1],f=r[d];f||(r[d]=f=[]),f.push(l)}}let o=[];for(let a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(Me("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ie("AnimationClip: No animation in JSONLoader data."),null;let i=function(d,f,h,m,v){if(h.length!==0){let g=[],p=[];GM(h,g,p,m),g.length!==0&&v.push(new d(f,g,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let f=l[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let h={},m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let v=0;v<f[m].morphTargets.length;v++)h[f[m].morphTargets[v]]=-1;for(let v in h){let g=[],p=[];for(let E=0;E!==f[m].morphTargets.length;++E){let M=f[m];g.push(M.time),p.push(M.morphTarget===v?1:0)}r.push(new Ui(".morphTargetInfluence["+v+"]",g,p))}c=h.length*o}else{let h=".bones["+t[d].name+"]";i(Vi,h+".position",f,"pos",r),i(Bi,h+".quaternion",f,"rot",r),i(Vi,h+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function o1(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ui;case"vector":case"vector2":case"vector3":case"vector4":return Vi;case"color":return Xc;case"quaternion":return Bi;case"bool":case"boolean":return mr;case"string":return gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function a1(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=o1(n.type);if(n.times===void 0){let t=[],i=[];GM(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}var Ni={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(KS(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!KS(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function KS(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var yf=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=l.length;d<f;d+=2){let h=l[d],m=l[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jM=new yf,Jr=(()=>{class n{constructor(t){this.manager=t!==void 0?t:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),fr={},_y=class extends Error{constructor(e,t){super(e),this.response=t}},ha=class extends Jr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ni.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(fr[e]!==void 0){fr[e].push({onLoad:t,onProgress:i,onError:r});return}fr[e]=[],fr[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Me("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=fr[e],d=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,m=h!==0,v=0,g=new ReadableStream({start(p){E();function E(){d.read().then(({done:M,value:S})=>{if(M)p.close();else{v+=S.byteLength;let D=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:h});for(let w=0,I=u.length;w<I;w++){let _=u[w];_.onProgress&&_.onProgress(D)}p.enqueue(S),E()}},M=>{p.error(M)})}}});return new Response(g)}else throw new _y(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(m=>h.decode(m))}}}).then(l=>{Ni.add(`file:${e}`,l);let u=fr[e];delete fr[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{let u=fr[e];if(u===void 0)throw this.manager.itemError(e),l;delete fr[e];for(let d=0,f=u.length;d<f;d++){let h=u[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Xo=new WeakMap,Zc=class extends Jr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Ni.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let d=Xo.get(o);d===void 0&&(d=[],Xo.set(o,d)),d.push({onLoad:t,onError:r})}return o}let a=ea("img");function c(){u(),t&&t(this);let d=Xo.get(this)||[];for(let f=0;f<d.length;f++){let h=d[f];h.onLoad&&h.onLoad(this)}Xo.delete(this),s.manager.itemEnd(e)}function l(d){u(),r&&r(d),Ni.remove(`image:${e}`);let f=Xo.get(this)||[];for(let h=0;h<f.length;h++){let m=f[h];m.onError&&m.onError(d)}Xo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ni.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}},Kc=class extends Jr{constructor(e){super(e)}load(e,t,i,r){let s=new da;s.colorSpace=At;let o=new Zc(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let l=0;l<e.length;++l)c(l);return s}};var qs=class extends Jr{constructor(e){super(e)}load(e,t,i,r){let s=new jn,o=new Zc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}},Xs=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ly=new Ve,JS=new N,QS=new N,Jc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;JS.setFromMatrixPosition(e.matrixWorld),t.position.copy(JS),QS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(QS),t.updateMatrixWorld(),ly.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ly,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ly)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gd=new N,jd=new mn,Ri=new N,Qc=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gd,jd,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gd,jd,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Gd,jd,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gd,jd,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ur=new N,eM=new De,tM=new De,Bt=class extends Qc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,eM,tM),t.subVectors(tM,eM)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xy=class extends Jc{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=js*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},el=class extends Xs{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new xy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ey=class extends Jc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},tl=class extends Xs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ey}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wr=class extends Qc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sy=class extends Jc{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Sy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},nl=class extends Xs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var yr=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var uy=new WeakMap,il=class extends Jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Me("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Me("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Ni.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{if(uy.has(o)===!0)r&&r(uy.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ni.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),uy.set(c,l),Ni.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ni.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Yo=-90,Zo=1,vf=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Bt(Yo,Zo,e,t);r.layers=this.layers,this.add(r);let s=new Bt(Yo,Zo,e,t);s.layers=this.layers,this.add(s);let o=new Bt(Yo,Zo,e,t);o.layers=this.layers,this.add(o);let a=new Bt(Yo,Zo,e,t);a.layers=this.layers,this.add(a);let c=new Bt(Yo,Zo,e,t);c.layers=this.layers,this.add(c);let l=new Bt(Yo,Zo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},_f=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var qy="\\[\\]\\.:\\/",c1=new RegExp("["+qy+"]","g"),Xy="[^"+qy+"]",l1="[^"+qy.replace("\\.","")+"]",u1=/((?:WC+[\/:])*)/.source.replace("WC",Xy),d1=/(WCOD+)?/.source.replace("WCOD",l1),f1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xy),h1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xy),p1=new RegExp("^"+u1+d1+f1+h1+"$"),m1=["material","materials","bones","map"],My=class{constructor(e,t,i){let r=i||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},wt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c1,"")}static parseTrackName(t){let i=p1.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);m1.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Me("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;Ie("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=My,n})();wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k$=new Float32Array(1);var nM=new Ve,rl=class{constructor(e,t,i=0,r=1/0){this.ray=new Oi(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ia,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nM.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nM),this}intersectObject(e,t=!0,i=[]){return by(e,this,i,t),i.sort(iM),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)by(e[r],this,i,t);return i.sort(iM),i}};function iM(n,e){return n.distance-e.distance}function by(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)by(s[o],e,t,!0)}}var pa=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var sl=class extends Li{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Me("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Yy(n,e,t,i){let r=g1(i);switch(t){case Vy:return n*e;case wf:return n*e/r.components*r.byteLength;case Df:return n*e/r.components*r.byteLength;case Ks:return n*e*2/r.components*r.byteLength;case Cf:return n*e*2/r.components*r.byteLength;case Hy:return n*e*3/r.components*r.byteLength;case Gn:return n*e*4/r.components*r.byteLength;case Af:return n*e*4/r.components*r.byteLength;case ll:case ul:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dl:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rf:case Pf:return Math.max(n,16)*Math.max(e,8)/4;case If:case Nf:return Math.max(n,8)*Math.max(e,8)/2;case Lf:case Of:case kf:case Uf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ff:case Bf:case Vf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case th:case nh:case ih:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rh:case sh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oh:case ah:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g1(n){switch(n){case An:case Fy:return{byteLength:1,components:1};case ya:case ky:case zi:return{byteLength:2,components:1};case bf:case Tf:return{byteLength:2,components:4};case xi:case Mf:case zn:return{byteLength:4,components:1};case Uy:case By:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Me("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function hb(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function v1(n){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,u),a.onUploadCallback();let h;if(l instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=n.SHORT;else if(l instanceof Uint32Array)h=n.UNSIGNED_INT;else if(l instanceof Int32Array)h=n.INT;else if(l instanceof Int8Array)h=n.BYTE;else if(l instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){let u=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){let m=d[f],v=d[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){let v=d[h];n.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var _1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,C1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,P1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,B1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,z1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,G1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,j1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Z1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,J1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Q1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uN=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hN=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_N=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ON=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$N=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_P=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$P=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:_1,alphahash_pars_fragment:x1,alphamap_fragment:E1,alphamap_pars_fragment:S1,alphatest_fragment:M1,alphatest_pars_fragment:b1,aomap_fragment:T1,aomap_pars_fragment:w1,batching_pars_vertex:D1,batching_vertex:C1,begin_vertex:A1,beginnormal_vertex:I1,bsdfs:R1,iridescence_fragment:N1,bumpmap_pars_fragment:P1,clipping_planes_fragment:L1,clipping_planes_pars_fragment:O1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:k1,color_fragment:U1,color_pars_fragment:B1,color_pars_vertex:V1,color_vertex:H1,common:z1,cube_uv_reflection_fragment:G1,defaultnormal_vertex:j1,displacementmap_pars_vertex:W1,displacementmap_vertex:$1,emissivemap_fragment:q1,emissivemap_pars_fragment:X1,colorspace_fragment:Y1,colorspace_pars_fragment:Z1,envmap_fragment:K1,envmap_common_pars_fragment:J1,envmap_pars_fragment:Q1,envmap_pars_vertex:eN,envmap_physical_pars_fragment:dN,envmap_vertex:tN,fog_vertex:nN,fog_pars_vertex:iN,fog_fragment:rN,fog_pars_fragment:sN,gradientmap_pars_fragment:oN,lightmap_pars_fragment:aN,lights_lambert_fragment:cN,lights_lambert_pars_fragment:lN,lights_pars_begin:uN,lights_toon_fragment:fN,lights_toon_pars_fragment:hN,lights_phong_fragment:pN,lights_phong_pars_fragment:mN,lights_physical_fragment:gN,lights_physical_pars_fragment:yN,lights_fragment_begin:vN,lights_fragment_maps:_N,lights_fragment_end:xN,logdepthbuf_fragment:EN,logdepthbuf_pars_fragment:SN,logdepthbuf_pars_vertex:MN,logdepthbuf_vertex:bN,map_fragment:TN,map_pars_fragment:wN,map_particle_fragment:DN,map_particle_pars_fragment:CN,metalnessmap_fragment:AN,metalnessmap_pars_fragment:IN,morphinstance_vertex:RN,morphcolor_vertex:NN,morphnormal_vertex:PN,morphtarget_pars_vertex:LN,morphtarget_vertex:ON,normal_fragment_begin:FN,normal_fragment_maps:kN,normal_pars_fragment:UN,normal_pars_vertex:BN,normal_vertex:VN,normalmap_pars_fragment:HN,clearcoat_normal_fragment_begin:zN,clearcoat_normal_fragment_maps:GN,clearcoat_pars_fragment:jN,iridescence_pars_fragment:WN,opaque_fragment:$N,packing:qN,premultiplied_alpha_fragment:XN,project_vertex:YN,dithering_fragment:ZN,dithering_pars_fragment:KN,roughnessmap_fragment:JN,roughnessmap_pars_fragment:QN,shadowmap_pars_fragment:eP,shadowmap_pars_vertex:tP,shadowmap_vertex:nP,shadowmask_pars_fragment:iP,skinbase_vertex:rP,skinning_pars_vertex:sP,skinning_vertex:oP,skinnormal_vertex:aP,specularmap_fragment:cP,specularmap_pars_fragment:lP,tonemapping_fragment:uP,tonemapping_pars_fragment:dP,transmission_fragment:fP,transmission_pars_fragment:hP,uv_pars_fragment:pP,uv_pars_vertex:mP,uv_vertex:gP,worldpos_vertex:yP,background_vert:vP,background_frag:_P,backgroundCube_vert:xP,backgroundCube_frag:EP,cube_vert:SP,cube_frag:MP,depth_vert:bP,depth_frag:TP,distance_vert:wP,distance_frag:DP,equirect_vert:CP,equirect_frag:AP,linedashed_vert:IP,linedashed_frag:RP,meshbasic_vert:NP,meshbasic_frag:PP,meshlambert_vert:LP,meshlambert_frag:OP,meshmatcap_vert:FP,meshmatcap_frag:kP,meshnormal_vert:UP,meshnormal_frag:BP,meshphong_vert:VP,meshphong_frag:HP,meshphysical_vert:zP,meshphysical_frag:GP,meshtoon_vert:jP,meshtoon_frag:WP,points_vert:$P,points_frag:qP,shadow_vert:XP,shadow_frag:YP,sprite_vert:ZP,sprite_frag:KP},oe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},ji={basic:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:yn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:yn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:yn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:yn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:yn([oe.points,oe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:yn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:yn([oe.common,oe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:yn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:yn([oe.sprite,oe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:yn([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:yn([oe.lights,oe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ji.physical={uniforms:yn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var uh={r:0,b:0,g:0},Qs=new zr,JP=new Ve;function QP(n,e,t,i,r,s){let o=new Ne(0),a=r===!0?0:1,c,l,u=null,d=0,f=null;function h(E){let M=E.isScene===!0?E.background:null;if(M&&M.isTexture){let S=E.backgroundBlurriness>0;M=e.get(M,S)}return M}function m(E){let M=!1,S=h(E);S===null?g(o,a):S&&S.isColor&&(g(S,1),M=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(E,M){let S=h(M);S&&(S.isCubeTexture||S.mapping===cl)?(l===void 0&&(l=new Rt(new fa(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Js(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Qs.copy(M.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),l.material.uniforms.envMap.value=S,l.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(JP.makeRotationFromEuler(Qs)),l.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ot,(u!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Rt(new qc(2,2),new gn({name:"BackgroundMaterial",uniforms:Js(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,M){E.getRGB(uh,$y(n)),t.buffers.color.setClear(uh.r,uh.g,uh.b,M,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(o,a)},render:m,addToRenderList:v,dispose:p}}function eL(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(C,k,V,G,H){let B=!1,U=d(C,G,V,k);s!==U&&(s=U,l(s.object)),B=h(C,G,V,H),B&&m(C,G,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,S(C,k,V,G),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function u(C){return n.deleteVertexArray(C)}function d(C,k,V,G){let H=G.wireframe===!0,B=i[k.id];B===void 0&&(B={},i[k.id]=B);let U=C.isInstancedMesh===!0?C.id:0,Q=B[U];Q===void 0&&(Q={},B[U]=Q);let Z=Q[V.id];Z===void 0&&(Z={},Q[V.id]=Z);let le=Z[H];return le===void 0&&(le=f(c()),Z[H]=le),le}function f(C){let k=[],V=[],G=[];for(let H=0;H<t;H++)k[H]=0,V[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:V,attributeDivisors:G,object:C,attributes:{},index:null}}function h(C,k,V,G){let H=s.attributes,B=k.attributes,U=0,Q=V.getAttributes();for(let Z in Q)if(Q[Z].location>=0){let pe=H[Z],de=B[Z];if(de===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),pe===void 0||pe.attribute!==de||de&&pe.data!==de.data)return!0;U++}return s.attributesNum!==U||s.index!==G}function m(C,k,V,G){let H={},B=k.attributes,U=0,Q=V.getAttributes();for(let Z in Q)if(Q[Z].location>=0){let pe=B[Z];pe===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(pe=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(pe=C.instanceColor));let de={};de.attribute=pe,pe&&pe.data&&(de.data=pe.data),H[Z]=de,U++}s.attributes=H,s.attributesNum=U,s.index=G}function v(){let C=s.newAttributes;for(let k=0,V=C.length;k<V;k++)C[k]=0}function g(C){p(C,0)}function p(C,k){let V=s.newAttributes,G=s.enabledAttributes,H=s.attributeDivisors;V[C]=1,G[C]===0&&(n.enableVertexAttribArray(C),G[C]=1),H[C]!==k&&(n.vertexAttribDivisor(C,k),H[C]=k)}function E(){let C=s.newAttributes,k=s.enabledAttributes;for(let V=0,G=k.length;V<G;V++)k[V]!==C[V]&&(n.disableVertexAttribArray(V),k[V]=0)}function M(C,k,V,G,H,B,U){U===!0?n.vertexAttribIPointer(C,k,V,H,B):n.vertexAttribPointer(C,k,V,G,H,B)}function S(C,k,V,G){v();let H=G.attributes,B=V.getAttributes(),U=k.defaultAttributeValues;for(let Q in B){let Z=B[Q];if(Z.location>=0){let le=H[Q];if(le===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){let pe=le.normalized,de=le.itemSize,Ge=e.get(le);if(Ge===void 0)continue;let bt=Ge.buffer,Mt=Ge.type,X=Ge.bytesPerElement,ne=Mt===n.INT||Mt===n.UNSIGNED_INT||le.gpuType===Mf;if(le.isInterleavedBufferAttribute){let se=le.data,ze=se.stride,Re=le.offset;if(se.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Z.locationSize;Oe++)p(Z.location+Oe,se.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Oe=0;Oe<Z.locationSize;Oe++)g(Z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Oe=0;Oe<Z.locationSize;Oe++)M(Z.location+Oe,de/Z.locationSize,Mt,pe,ze*X,(Re+de/Z.locationSize*Oe)*X,ne)}else{if(le.isInstancedBufferAttribute){for(let se=0;se<Z.locationSize;se++)p(Z.location+se,le.meshPerAttribute);C.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let se=0;se<Z.locationSize;se++)g(Z.location+se);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let se=0;se<Z.locationSize;se++)M(Z.location+se,de/Z.locationSize,Mt,pe,de*X,de/Z.locationSize*se*X,ne)}}else if(U!==void 0){let pe=U[Q];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(Z.location,pe);break;case 3:n.vertexAttrib3fv(Z.location,pe);break;case 4:n.vertexAttrib4fv(Z.location,pe);break;default:n.vertexAttrib1fv(Z.location,pe)}}}}E()}function D(){b();for(let C in i){let k=i[C];for(let V in k){let G=k[V];for(let H in G){let B=G[H];for(let U in B)u(B[U].object),delete B[U];delete G[H]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;let k=i[C.id];for(let V in k){let G=k[V];for(let H in G){let B=G[H];for(let U in B)u(B[U].object),delete B[U];delete G[H]}}delete i[C.id]}function I(C){for(let k in i){let V=i[k];for(let G in V){let H=V[G];if(H[C.id]===void 0)continue;let B=H[C.id];for(let U in B)u(B[U].object),delete B[U];delete H[C.id]}}}function _(C){for(let k in i){let V=i[k],G=C.isInstancedMesh===!0?C.id:0,H=V[G];if(H!==void 0){for(let B in H){let U=H[B];for(let Q in U)u(U[Q].object),delete U[Q];delete H[B]}delete V[G],Object.keys(V).length===0&&delete i[k]}}}function b(){j(),o=!0,s!==r&&(s=r,l(s.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:j,dispose:D,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:g,disableUnusedAttributes:E}}function tL(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,d){d!==0&&(n.drawArraysInstanced(i,l,u,d),t.update(u,i,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,d);let h=0;for(let m=0;m<d;m++)h+=u[m];t.update(h,i,1)}function c(l,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<l.length;m++)o(l[m],u[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v]*f[v];t.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function nL(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Gn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let _=I===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==An&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zn&&!_)}function c(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Me("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:S,maxSamples:D,samples:w}}function iL(n){let e=this,t=null,i=0,r=!1,s=!1,o=new Zn,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):l();else{let E=s?0:i,M=E*4,S=p.clippingState||null;c.value=S,S=u(m,f,M,h);for(let D=0;D!==M;++D)S[D]=t[D];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,m){let v=d!==null?d.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=h+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,S=h;M!==v;++M,S+=4)o.copy(d[M]).applyMatrix4(E,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}var Qr=4,WM=[.125,.215,.35,.446,.526,.582],to=20,rL=256,pl=new Wr,$M=new Ne,Zy=null,Ky=0,Jy=0,Qy=!1,sL=new N,fh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){let{size:o=256,position:a=sL}=s;Zy=this._renderer.getRenderTarget(),Ky=this._renderer.getActiveCubeFace(),Jy=this._renderer.getActiveMipmapLevel(),Qy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=YM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=XM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zy,Ky,Jy),this._renderer.xr.enabled=Qy,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zy=this._renderer.getRenderTarget(),Ky=this._renderer.getActiveCubeFace(),Jy=this._renderer.getActiveMipmapLevel(),Qy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:zi,format:Gn,colorSpace:an,depthBuffer:!1},r=qM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qM(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oL(s)),this._blurMaterial=cL(s,e,t),this._ggxMaterial=aL(s,e,t)}return r}_compileMaterial(e){let t=new Rt(new Ht,e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,i,r,s){let c=new Bt(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor($M),d.toneMapping=vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new fa,new Hn({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,g=v.material,p=!1,E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,p=!0):(g.color.copy($M),p=!0);for(let M=0;M<6;M++){let S=M%3;S===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):S===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));let D=this._cubeSize;xa(r,S*D,M>2?D:0,D,D),d.setRenderTarget(r),p&&d.render(v,c),d.render(e,c)}d.toneMapping=h,d.autoClear=f,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Yr||e.mapping===Ys;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=YM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=XM());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;xa(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,pl)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let c=o.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),f=0+l*1.25,h=d*f,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Qr?i-m+Qr:0),p=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=h,c.mipInt.value=m-t,xa(s,g,p,3*v,2*v),r.setRenderTarget(s),r.render(a,pl),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-i,xa(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(a,pl)}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ie("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let f=l.uniforms,h=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*to-1),v=s/m,g=isFinite(s)?1+Math.floor(u*v):to;g>to&&Me(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${to}`);let p=[],E=0;for(let I=0;I<to;++I){let _=I/v,b=Math.exp(-_*_/2);p.push(b),I===0?E+=b:I<g&&(E+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/E;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;let S=this._sizeLods[r],D=3*S*(r>M-Qr?r-M+Qr:0),w=4*(this._cubeSize-S);xa(t,D,w,3*S,2*S),c.setRenderTarget(t),c.render(d,pl)}};function oL(n){let e=[],t=[],i=[],r=n,s=n-Qr+1+WM.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Qr?c=WM[o-n+Qr-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,v=3,g=2,p=1,E=new Float32Array(v*m*h),M=new Float32Array(g*m*h),S=new Float32Array(p*m*h);for(let w=0;w<h;w++){let I=w%3*2/3-1,_=w>2?0:-1,b=[I,_,0,I+2/3,_,0,I+2/3,_+1,0,I,_,0,I+2/3,_+1,0,I,_+1,0];E.set(b,v*m*w),M.set(f,g*m*w);let j=[w,w,w,w,w,w];S.set(j,p*m*w)}let D=new Ht;D.setAttribute("position",new It(E,v)),D.setAttribute("uv",new It(M,g)),D.setAttribute("faceIndex",new It(S,p)),i.push(new Rt(D,null)),r>Qr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function qM(n,e,t){let i=new Bn(n,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aL(n,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function cL(n,e,t){let i=new Float32Array(to),r=new N(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function XM(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function YM(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var hh=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new da(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fa(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:Js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Hi});s.uniforms.tEquirect.value=t;let o=new Rt(r,s),a=t.minFilter;return t.minFilter===_i&&(t.minFilter=Ot),new vf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}};function lL(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?o(f):s(f)}function s(f){if(f&&f.isTexture){let h=f.mapping;if(h===xf||h===Ef)if(e.has(f)){let m=e.get(f).texture;return a(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let v=new hh(m.height);return v.fromEquirectangularTexture(n,f),e.set(f,v),f.addEventListener("dispose",l),a(v.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let h=f.mapping,m=h===xf||h===Ef,v=h===Yr||h===Ys;if(m||v){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new fh(n)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let E=f.image;return m&&E&&E.height>0||v&&E&&c(E)?(i===null&&(i=new fh(n)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,h){return h===xf?f.mapping=Yr:h===Ef&&(f.mapping=Ys),f}function c(f){let h=0,m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function l(f){let h=f.target;h.removeEventListener("dispose",l);let m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function uL(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&Oc("WebGLRenderer: "+i+" extension not supported."),r}}}function dL(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function l(d){let f=[],h=d.index,m=d.attributes.position,v=0;if(m===void 0)return;if(h!==null){let E=h.array;v=h.version;for(let M=0,S=E.length;M<S;M+=3){let D=E[M+0],w=E[M+1],I=E[M+2];f.push(D,w,w,I,I,D)}}else{let E=m.array;v=m.version;for(let M=0,S=E.length/3-1;M<S;M+=3){let D=M+0,w=M+1,I=M+2;f.push(D,w,w,I,I,D)}}let g=new(m.count>=65535?Bc:Uc)(f,1);g.version=v;let p=s.get(d);p&&e.remove(p),s.set(d,g)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function fL(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function l(f,h,m){m!==0&&(n.drawElementsInstanced(i,h,s,f*o,m),t.update(h,i,m))}function u(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];t.update(g,i,1)}function d(f,h,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)l(f[p]/o,h[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,v,0,m);let p=0;for(let E=0;E<m;E++)p+=h[E]*v[E];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hL(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Ie("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pL(n,e,t){let i=new WeakMap,r=new St;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],M=0;h===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let S=a.attributes.position.count*M,D=1;S>e.maxTextureSize&&(D=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*D*4*d),I=new Fc(w,S,D,d);I.type=zn,I.needsUpdate=!0;let _=M*4;for(let j=0;j<d;j++){let C=g[j],k=p[j],V=E[j],G=S*D*4*j;for(let H=0;H<C.count;H++){let B=H*_;h===!0&&(r.fromBufferAttribute(C,H),w[G+B+0]=r.x,w[G+B+1]=r.y,w[G+B+2]=r.z,w[G+B+3]=0),m===!0&&(r.fromBufferAttribute(k,H),w[G+B+4]=r.x,w[G+B+5]=r.y,w[G+B+6]=r.z,w[G+B+7]=0),v===!0&&(r.fromBufferAttribute(V,H),w[G+B+8]=r.x,w[G+B+9]=r.y,w[G+B+10]=r.z,w[G+B+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new De(S,D)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let h=0;for(let v=0;v<l.length;v++)h+=l[v];let m=a.morphTargetsRelative?1:1-h;c.getUniforms().setValue(n,"morphTargetBaseInfluence",m),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mL(n,e,t,i,r){let s=new WeakMap;function o(l){let u=r.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var gL={[Ay]:"LINEAR_TONE_MAPPING",[Iy]:"REINHARD_TONE_MAPPING",[Ry]:"CINEON_TONE_MAPPING",[Ny]:"ACES_FILMIC_TONE_MAPPING",[Ly]:"AGX_TONE_MAPPING",[Oy]:"NEUTRAL_TONE_MAPPING",[Py]:"CUSTOM_TONE_MAPPING"};function yL(n,e,t,i,r){let s=new Bn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Bn(e,t,{type:zi,depthBuffer:!1,stencilBuffer:!1}),a=new Ht;a.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Qt([0,2,0,0,2,0],2));let c=new lf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Rt(a,c),u=new Wr(-1,1,1,-1,0,1),d=null,f=null,h=!1,m,v=null,g=[],p=!1;this.setSize=function(E,M){s.setSize(E,M),o.setSize(E,M);for(let S=0;S<g.length;S++){let D=g[S];D.setSize&&D.setSize(E,M)}},this.setEffects=function(E){g=E,p=g.length>0&&g[0].isRenderPass===!0;let M=s.width,S=s.height;for(let D=0;D<g.length;D++){let w=g[D];w.setSize&&w.setSize(M,S)}},this.begin=function(E,M){if(h||E.toneMapping===vi&&g.length===0)return!1;if(v=M,M!==null){let S=M.width,D=M.height;(s.width!==S||s.height!==D)&&this.setSize(S,D)}return p===!1&&E.setRenderTarget(s),m=E.toneMapping,E.toneMapping=vi,!0},this.hasRenderPass=function(){return p},this.end=function(E,M){E.toneMapping=m,h=!0;let S=s,D=o;for(let w=0;w<g.length;w++){let I=g[w];if(I.enabled!==!1&&(I.render(E,D,S,M),I.needsSwap!==!1)){let _=S;S=D,D=_}}if(d!==E.outputColorSpace||f!==E.toneMapping){d=E.outputColorSpace,f=E.toneMapping,c.defines={},Ke.getTransfer(d)===ot&&(c.defines.SRGB_TRANSFER="");let w=gL[f];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,E.setRenderTarget(v),E.render(l,u),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var pb=new jn,nv=new jr(1,1),mb=new Fc,gb=new sf,yb=new da,ZM=[],KM=[],JM=new Float32Array(16),QM=new Float32Array(9),eb=new Float32Array(4);function Sa(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=ZM[r];if(s===void 0&&(s=new Float32Array(r),ZM[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gh(n,e){let t=KM[e];t===void 0&&(t=new Int32Array(e),KM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _L(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function xL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function EL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function SL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;eb.set(i),n.uniformMatrix2fv(this.addr,!1,eb),Gt(t,i)}}function ML(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;QM.set(i),n.uniformMatrix3fv(this.addr,!1,QM),Gt(t,i)}}function bL(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;JM.set(i),n.uniformMatrix4fv(this.addr,!1,JM),Gt(t,i)}}function TL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function DL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function CL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function AL(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function IL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function RL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function NL(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function PL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(nv.compareFunction=t.isReversedDepthBuffer()?lh:ch,s=nv):s=pb,t.setTexture2D(e||s,r)}function LL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||gb,r)}function OL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yb,r)}function FL(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||mb,r)}function kL(n){switch(n){case 5126:return vL;case 35664:return _L;case 35665:return xL;case 35666:return EL;case 35674:return SL;case 35675:return ML;case 35676:return bL;case 5124:case 35670:return TL;case 35667:case 35671:return wL;case 35668:case 35672:return DL;case 35669:case 35673:return CL;case 5125:return AL;case 36294:return IL;case 36295:return RL;case 36296:return NL;case 35678:case 36198:case 36298:case 36306:case 35682:return PL;case 35679:case 36299:case 36307:return LL;case 35680:case 36300:case 36308:case 36293:return OL;case 36289:case 36303:case 36311:case 36292:return FL}}function UL(n,e){n.uniform1fv(this.addr,e)}function BL(n,e){let t=Sa(e,this.size,2);n.uniform2fv(this.addr,t)}function VL(n,e){let t=Sa(e,this.size,3);n.uniform3fv(this.addr,t)}function HL(n,e){let t=Sa(e,this.size,4);n.uniform4fv(this.addr,t)}function zL(n,e){let t=Sa(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GL(n,e){let t=Sa(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jL(n,e){let t=Sa(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WL(n,e){n.uniform1iv(this.addr,e)}function $L(n,e){n.uniform2iv(this.addr,e)}function qL(n,e){n.uniform3iv(this.addr,e)}function XL(n,e){n.uniform4iv(this.addr,e)}function YL(n,e){n.uniform1uiv(this.addr,e)}function ZL(n,e){n.uniform2uiv(this.addr,e)}function KL(n,e){n.uniform3uiv(this.addr,e)}function JL(n,e){n.uniform4uiv(this.addr,e)}function QL(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=nv:o=pb;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function eO(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||gb,s[o])}function tO(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yb,s[o])}function nO(n,e,t){let i=this.cache,r=e.length,s=gh(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||mb,s[o])}function iO(n){switch(n){case 5126:return UL;case 35664:return BL;case 35665:return VL;case 35666:return HL;case 35674:return zL;case 35675:return GL;case 35676:return jL;case 5124:case 35670:return WL;case 35667:case 35671:return $L;case 35668:case 35672:return qL;case 35669:case 35673:return XL;case 5125:return YL;case 36294:return ZL;case 36295:return KL;case 36296:return JL;case 35678:case 36198:case 36298:case 36306:case 35682:return QL;case 35679:case 36299:case 36307:return eO;case 35680:case 36300:case 36308:case 36293:return tO;case 36289:case 36303:case 36311:case 36292:return nO}}var iv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kL(t.type)}},rv=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iO(t.type)}},sv=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},ev=/(\w+)(\])?(\[|\.)?/g;function tb(n,e){n.seq.push(e),n.map[e.id]=e}function rO(n,e,t){let i=n.name,r=i.length;for(ev.lastIndex=0;;){let s=ev.exec(i),o=ev.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){tb(t,l===void 0?new iv(a,n,e):new rv(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new sv(a),tb(t,d)),t=d}}}var Ea=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);rO(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function nb(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var sO=37297,oO=0;function aO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var ib=new He;function cO(n){Ke._getMatrix(ib,Ke.workingColorSpace,n);let e=`mat3( ${ib.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case Pc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return Me("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function rb(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+aO(n.getShaderSource(e),a)}else return s}function lO(n,e){let t=cO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var uO={[Ay]:"Linear",[Iy]:"Reinhard",[Ry]:"Cineon",[Ny]:"ACESFilmic",[Ly]:"AgX",[Oy]:"Neutral",[Py]:"Custom"};function dO(n,e){let t=uO[e];return t===void 0?(Me("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dh=new N;function fO(){Ke.getLuminanceCoefficients(dh);let n=dh.x.toFixed(4),e=dh.y.toFixed(4),t=dh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function pO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gl(n){return n!==""}function sb(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ob(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var gO=/^[ \t]*#include +<([\w\d./]+)>/gm;function ov(n){return n.replace(gO,vO)}var yO=new Map;function vO(n,e){let t=je[e];if(t===void 0){let i=yO.get(e);if(i!==void 0)t=je[i],Me('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ov(t)}var _O=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ab(n){return n.replace(_O,xO)}function xO(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cb(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var EO={[ol]:"SHADOWMAP_TYPE_PCF",[ma]:"SHADOWMAP_TYPE_VSM"};function SO(n){return EO[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var MO={[Yr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[cl]:"ENVMAP_TYPE_CUBE_UV"};function bO(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":MO[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var TO={[Ys]:"ENVMAP_MODE_REFRACTION"};function wO(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":TO[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DO={[Cy]:"ENVMAP_BLENDING_MULTIPLY",[TM]:"ENVMAP_BLENDING_MIX",[wM]:"ENVMAP_BLENDING_ADD"};function CO(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":DO[n.combine]||"ENVMAP_BLENDING_NONE"}function AO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function IO(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=SO(t),l=bO(t),u=wO(t),d=CO(t),f=AO(t),h=hO(t),m=pO(s),v=r.createProgram(),g,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(gl).join(`
`),p.length>0&&(p+=`
`)):(g=[cb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),p=[cb(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?je.tonemapping_pars_fragment:"",t.toneMapping!==vi?dO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,lO("linearToOutputTexel",t.outputColorSpace),fO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gl).join(`
`)),o=ov(o),o=sb(o,t),o=ob(o,t),a=ov(a),a=sb(a,t),a=ob(a,t),o=ab(o),a=ab(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===jy?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=E+g+o,S=E+p+a,D=nb(r,r.VERTEX_SHADER,M),w=nb(r,r.FRAGMENT_SHADER,S);r.attachShader(v,D),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(C){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(D)||"",G=r.getShaderInfoLog(w)||"",H=k.trim(),B=V.trim(),U=G.trim(),Q=!0,Z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,D,w);else{let le=rb(r,D,"vertex"),pe=rb(r,w,"fragment");Ie("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+le+`
`+pe)}else H!==""?Me("WebGLProgram: Program Info Log:",H):(B===""||U==="")&&(Z=!1);Z&&(C.diagnostics={runnable:Q,programLog:H,vertexShader:{log:B,prefix:g},fragmentShader:{log:U,prefix:p}})}r.deleteShader(D),r.deleteShader(w),_=new Ea(r,v),b=mO(r,v)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=r.getProgramParameter(v,sO)),j},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oO++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=w,this}var RO=0,av=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cv(e),t.set(e,i)),i}},cv=class{constructor(e){this.id=RO++,this.code=e,this.usedTimes=0}};function NO(n,e,t,i,r,s){let o=new ia,a=new av,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,b,j,C,k){let V=C.fog,G=k.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||H,B),Q=U&&U.mapping===cl?U.image.height:null,Z=h[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Me("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let le=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=le!==void 0?le.length:0,de=0;G.morphAttributes.position!==void 0&&(de=1),G.morphAttributes.normal!==void 0&&(de=2),G.morphAttributes.color!==void 0&&(de=3);let Ge,bt,Mt,X;if(Z){let ct=ji[Z];Ge=ct.vertexShader,bt=ct.fragmentShader}else Ge=_.vertexShader,bt=_.fragmentShader,a.update(_),Mt=a.getVertexShaderID(_),X=a.getFragmentShaderID(_);let ne=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ze=k.isInstancedMesh===!0,Re=k.isBatchedMesh===!0,Oe=!!_.map,Wt=!!_.matcap,et=!!U,at=!!_.aoMap,gt=!!_.lightMap,We=!!_.bumpMap,Nt=!!_.normalMap,A=!!_.displacementMap,kt=!!_.emissiveMap,st=!!_.metalnessMap,vt=!!_.roughnessMap,Ee=_.anisotropy>0,T=_.clearcoat>0,y=_.dispersion>0,P=_.iridescence>0,q=_.sheen>0,Y=_.transmission>0,$=Ee&&!!_.anisotropyMap,me=T&&!!_.clearcoatMap,ie=T&&!!_.clearcoatNormalMap,we=T&&!!_.clearcoatRoughnessMap,Pe=P&&!!_.iridescenceMap,K=P&&!!_.iridescenceThicknessMap,ee=q&&!!_.sheenColorMap,ge=q&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ue=!!_.specularColorMap,$e=!!_.specularIntensityMap,R=Y&&!!_.transmissionMap,re=Y&&!!_.thicknessMap,te=!!_.gradientMap,he=!!_.alphaMap,J=_.alphaTest>0,W=!!_.alphaHash,ye=!!_.extensions,Fe=vi;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Fe=n.toneMapping);let _t={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Ge,fragmentShader:bt,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Re,batchingColor:Re&&k._colorsTexture!==null,instancing:ze,instancingColor:ze&&k.instanceColor!==null,instancingMorph:ze&&k.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:an,alphaToCoverage:!!_.alphaToCoverage,map:Oe,matcap:Wt,envMap:et,envMapMode:et&&U.mapping,envMapCubeUVHeight:Q,aoMap:at,lightMap:gt,bumpMap:We,normalMap:Nt,displacementMap:A,emissiveMap:kt,normalMapObjectSpace:Nt&&_.normalMapType===IM,normalMapTangentSpace:Nt&&_.normalMapType===Gy,metalnessMap:st,roughnessMap:vt,anisotropy:Ee,anisotropyMap:$,clearcoat:T,clearcoatMap:me,clearcoatNormalMap:ie,clearcoatRoughnessMap:we,dispersion:y,iridescence:P,iridescenceMap:Pe,iridescenceThicknessMap:K,sheen:q,sheenColorMap:ee,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:ue,specularIntensityMap:$e,transmission:Y,transmissionMap:R,thicknessMap:re,gradientMap:te,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:he,alphaTest:J,alphaHash:W,combine:_.combine,mapUv:Oe&&m(_.map.channel),aoMapUv:at&&m(_.aoMap.channel),lightMapUv:gt&&m(_.lightMap.channel),bumpMapUv:We&&m(_.bumpMap.channel),normalMapUv:Nt&&m(_.normalMap.channel),displacementMapUv:A&&m(_.displacementMap.channel),emissiveMapUv:kt&&m(_.emissiveMap.channel),metalnessMapUv:st&&m(_.metalnessMap.channel),roughnessMapUv:vt&&m(_.roughnessMap.channel),anisotropyMapUv:$&&m(_.anisotropyMap.channel),clearcoatMapUv:me&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:K&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(_.sheenRoughnessMap.channel),specularMapUv:_e&&m(_.specularMap.channel),specularColorMapUv:ue&&m(_.specularColorMap.channel),specularIntensityMapUv:$e&&m(_.specularIntensityMap.channel),transmissionMapUv:R&&m(_.transmissionMap.channel),thicknessMapUv:re&&m(_.thicknessMap.channel),alphaMapUv:he&&m(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Nt||Ee),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Oe||he),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||G.attributes.normal===void 0&&Nt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&j.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Oe&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===ot,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function g(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let j in _.defines)b.push(j),b.push(_.defines[j]);return _.isRawShaderMaterial===!1&&(p(b,_),E(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function E(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),_.push(o.mask)}function M(_){let b=h[_.type],j;if(b){let C=ji[b];j=zM.clone(C.uniforms)}else j=_.uniforms;return j}function S(_,b){let j=u.get(b);return j!==void 0?++j.usedTimes:(j=new IO(n,b,_,r),l.push(j),u.set(b,j)),j}function D(_){if(--_.usedTimes===0){let b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function I(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:S,releaseProgram:D,releaseShaderCache:w,programs:l,dispose:I}}function PO(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function LO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function lb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ub(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,v,g,p){let E=n[e];return E===void 0?(E={id:f.id,object:f,geometry:h,material:m,materialVariant:o(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},n[e]=E):(E.id=f.id,E.object=f,E.geometry=h,E.material=m,E.materialVariant=o(f),E.groupOrder=v,E.renderOrder=f.renderOrder,E.z=g,E.group=p),e++,E}function c(f,h,m,v,g,p){let E=a(f,h,m,v,g,p);m.transmission>0?i.push(E):m.transparent===!0?r.push(E):t.push(E)}function l(f,h,m,v,g,p){let E=a(f,h,m,v,g,p);m.transmission>0?i.unshift(E):m.transparent===!0?r.unshift(E):t.unshift(E)}function u(f,h){t.length>1&&t.sort(f||LO),i.length>1&&i.sort(h||lb),r.length>1&&r.sort(h||lb)}function d(){for(let f=e,h=n.length;f<h;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function OO(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new ub,n.set(i,[o])):r>=s.length?(o=new ub,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function FO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function kO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var UO=0;function BO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VO(n){let e=new FO,t=kO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let r=new N,s=new Ve,o=new Ve;function a(l){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,m=0,v=0,g=0,p=0,E=0,M=0,S=0,D=0,w=0,I=0;l.sort(BO);for(let b=0,j=l.length;b<j;b++){let C=l[b],k=C.color,V=C.intensity,G=C.distance,H=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ks?H=C.shadow.map.texture:H=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=k.r*V,d+=k.g*V,f+=k.b*V;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],V);I++}else if(C.isDirectionalLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let U=C.shadow,Q=t.get(C);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,i.directionalShadow[h]=Q,i.directionalShadowMap[h]=H,i.directionalShadowMatrix[h]=C.shadow.matrix,E++}i.directional[h]=B,h++}else if(C.isSpotLight){let B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(k).multiplyScalar(V),B.distance=G,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[v]=B;let U=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,U.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[v]=U.matrix,C.castShadow){let Q=t.get(C);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=H,S++}v++}else if(C.isRectAreaLight){let B=e.get(C);B.color.copy(k).multiplyScalar(V),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=B,g++}else if(C.isPointLight){let B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let U=C.shadow,Q=t.get(C);Q.shadowIntensity=U.intensity,Q.shadowBias=U.bias,Q.shadowNormalBias=U.normalBias,Q.shadowRadius=U.radius,Q.shadowMapSize=U.mapSize,Q.shadowCameraNear=U.camera.near,Q.shadowCameraFar=U.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=C.shadow.matrix,M++}i.point[m]=B,m++}else if(C.isHemisphereLight){let B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(V),B.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[p]=B,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let _=i.hash;(_.directionalLength!==h||_.pointLength!==m||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==E||_.numPointShadows!==M||_.numSpotShadows!==S||_.numSpotMaps!==D||_.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+D-w,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=I,_.directionalLength=h,_.pointLength=m,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=E,_.numPointShadows=M,_.numSpotShadows=S,_.numSpotMaps=D,_.numLightProbes=I,i.version=UO++)}function c(l,u){let d=0,f=0,h=0,m=0,v=0,g=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let M=l[p];if(M.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(M.isSpotLight){let S=i.spot[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(M.isRectAreaLight){let S=i.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let S=i.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:i}}function db(n){let e=new VO(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function HO(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new db(n),e.set(r,[a])):s>=o.length?(a=new db(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var zO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GO=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jO=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],WO=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],fb=new Ve,ml=new N,tv=new N;function $O(n,e,t){let i=new la,r=new De,s=new De,o=new St,a=new uf,c=new df,l={},u=t.maxTextureSize,d={[yi]:cn,[cn]:yi,[Jn]:Jn},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:zO,fragmentShader:GO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let m=new Ht;m.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Rt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let p=this.type;this.render=function(w,I,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===oM&&(Me("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ol);let b=n.getRenderTarget(),j=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Hi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=p!==this.type;V&&I.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(H=>H.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,H=w.length;G<H;G++){let B=w[G],U=B.shadow;if(U===void 0){Me("WebGLShadowMap:",B,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let Q=U.getFrameExtents();r.multiply(Q),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Q.x),r.x=s.x*Q.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Q.y),r.y=s.y*Q.y,U.mapSize.y=s.y));let Z=n.state.buffers.depth.getReversed();if(U.camera._reversedDepth=Z,U.map===null||V===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===ma){if(B.isPointLight){Me("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Bn(r.x,r.y,{format:Ks,type:zi,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),U.map.texture.name=B.name+".shadowMap",U.map.depthTexture=new jr(r.x,r.y,zn),U.map.depthTexture.name=B.name+".shadowMapDepth",U.map.depthTexture.format=Pi,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Lt,U.map.depthTexture.magFilter=Lt}else B.isPointLight?(U.map=new hh(r.x),U.map.depthTexture=new cf(r.x,xi)):(U.map=new Bn(r.x,r.y),U.map.depthTexture=new jr(r.x,r.y,xi)),U.map.depthTexture.name=B.name+".shadowMap",U.map.depthTexture.format=Pi,this.type===ol?(U.map.depthTexture.compareFunction=Z?lh:ch,U.map.depthTexture.minFilter=Ot,U.map.depthTexture.magFilter=Ot):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Lt,U.map.depthTexture.magFilter=Lt);U.camera.updateProjectionMatrix()}let le=U.map.isWebGLCubeRenderTarget?6:1;for(let pe=0;pe<le;pe++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,pe),n.clear();else{pe===0&&(n.setRenderTarget(U.map),n.clear());let de=U.getViewport(pe);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),k.viewport(o)}if(B.isPointLight){let de=U.camera,Ge=U.matrix,bt=B.distance||de.far;bt!==de.far&&(de.far=bt,de.updateProjectionMatrix()),ml.setFromMatrixPosition(B.matrixWorld),de.position.copy(ml),tv.copy(de.position),tv.add(jO[pe]),de.up.copy(WO[pe]),de.lookAt(tv),de.updateMatrixWorld(),Ge.makeTranslation(-ml.x,-ml.y,-ml.z),fb.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),U._frustum.setFromProjectionMatrix(fb,de.coordinateSystem,de.reversedDepth)}else U.updateMatrices(B);i=U.getFrustum(),S(I,_,U.camera,B,this.type)}U.isPointLightShadow!==!0&&this.type===ma&&E(U,_),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(b,j,C)};function E(w,I){let _=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Bn(r.x,r.y,{format:Ks,type:zi})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(I,null,_,f,v,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(I,null,_,h,v,null)}function M(w,I,_,b){let j=null,C=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)j=C;else if(j=_.isPointLight===!0?c:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let k=j.uuid,V=I.uuid,G=l[k];G===void 0&&(G={},l[k]=G);let H=G[V];H===void 0&&(H=j.clone(),G[V]=H,I.addEventListener("dispose",D)),j=H}if(j.visible=I.visible,j.wireframe=I.wireframe,b===ma?j.side=I.shadowSide!==null?I.shadowSide:I.side:j.side=I.shadowSide!==null?I.shadowSide:d[I.side],j.alphaMap=I.alphaMap,j.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,j.map=I.map,j.clipShadows=I.clipShadows,j.clippingPlanes=I.clippingPlanes,j.clipIntersection=I.clipIntersection,j.displacementMap=I.displacementMap,j.displacementScale=I.displacementScale,j.displacementBias=I.displacementBias,j.wireframeLinewidth=I.wireframeLinewidth,j.linewidth=I.linewidth,_.isPointLight===!0&&j.isMeshDistanceMaterial===!0){let k=n.properties.get(j);k.light=_}return j}function S(w,I,_,b,j){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&j===ma)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let V=e.update(w),G=w.material;if(Array.isArray(G)){let H=V.groups;for(let B=0,U=H.length;B<U;B++){let Q=H[B],Z=G[Q.materialIndex];if(Z&&Z.visible){let le=M(w,Z,b,j);w.onBeforeShadow(n,w,I,_,V,le,Q),n.renderBufferDirect(_,null,V,le,w,Q),w.onAfterShadow(n,w,I,_,V,le,Q)}}}else if(G.visible){let H=M(w,G,b,j);w.onBeforeShadow(n,w,I,_,V,H,null),n.renderBufferDirect(_,null,V,H,w,null),w.onAfterShadow(n,w,I,_,V,H,null)}}let k=w.children;for(let V=0,G=k.length;V<G;V++)S(k[V],I,_,b,j)}function D(w){w.target.removeEventListener("dispose",D);for(let _ in l){let b=l[_],j=w.target.uuid;j in b&&(b[j].dispose(),delete b[j])}}}function qO(n,e){function t(){let R=!1,re=new St,te=null,he=new St(0,0,0,0);return{setMask:function(J){te!==J&&!R&&(n.colorMask(J,J,J,J),te=J)},setLocked:function(J){R=J},setClear:function(J,W,ye,Fe,_t){_t===!0&&(J*=Fe,W*=Fe,ye*=Fe),re.set(J,W,ye,Fe),he.equals(re)===!1&&(n.clearColor(J,W,ye,Fe),he.copy(re))},reset:function(){R=!1,te=null,he.set(-1,0,0,0)}}}function i(){let R=!1,re=!1,te=null,he=null,J=null;return{setReversed:function(W){if(re!==W){let ye=e.get("EXT_clip_control");W?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),re=W;let Fe=J;J=null,this.setClear(Fe)}},getReversed:function(){return re},setTest:function(W){W?ne(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(W){te!==W&&!R&&(n.depthMask(W),te=W)},setFunc:function(W){if(re&&(W=VM[W]),he!==W){switch(W){case Xd:n.depthFunc(n.NEVER);break;case Yd:n.depthFunc(n.ALWAYS);break;case Zd:n.depthFunc(n.LESS);break;case Hs:n.depthFunc(n.LEQUAL);break;case Kd:n.depthFunc(n.EQUAL);break;case Jd:n.depthFunc(n.GEQUAL);break;case Qd:n.depthFunc(n.GREATER);break;case ef:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=W}},setLocked:function(W){R=W},setClear:function(W){J!==W&&(J=W,re&&(W=1-W),n.clearDepth(W))},reset:function(){R=!1,te=null,he=null,J=null,re=!1}}}function r(){let R=!1,re=null,te=null,he=null,J=null,W=null,ye=null,Fe=null,_t=null;return{setTest:function(ct){R||(ct?ne(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(ct){re!==ct&&!R&&(n.stencilMask(ct),re=ct)},setFunc:function(ct,$i,qi){(te!==ct||he!==$i||J!==qi)&&(n.stencilFunc(ct,$i,qi),te=ct,he=$i,J=qi)},setOp:function(ct,$i,qi){(W!==ct||ye!==$i||Fe!==qi)&&(n.stencilOp(ct,$i,qi),W=ct,ye=$i,Fe=qi)},setLocked:function(ct){R=ct},setClear:function(ct){_t!==ct&&(n.clearStencil(ct),_t=ct)},reset:function(){R=!1,re=null,te=null,he=null,J=null,W=null,ye=null,Fe=null,_t=null}}}let s=new t,o=new i,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,h=[],m=null,v=!1,g=null,p=null,E=null,M=null,S=null,D=null,w=null,I=new Ne(0,0,0),_=0,b=!1,j=null,C=null,k=null,V=null,G=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,U=0,Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Q)[1]),B=U>=1):Q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),B=U>=2);let Z=null,le={},pe=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ge=new St().fromArray(pe),bt=new St().fromArray(de);function Mt(R,re,te,he){let J=new Uint8Array(4),W=n.createTexture();n.bindTexture(R,W),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ye=0;ye<te;ye++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(re+ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return W}let X={};X[n.TEXTURE_2D]=Mt(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),o.setFunc(Hs),We(!1),Nt(Ty),ne(n.CULL_FACE),at(Hi);function ne(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function se(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function ze(R,re){return d[R]!==re?(n.bindFramebuffer(R,re),d[R]=re,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(R,re){let te=h,he=!1;if(R){te=f.get(re),te===void 0&&(te=[],f.set(re,te));let J=R.textures;if(te.length!==J.length||te[0]!==n.COLOR_ATTACHMENT0){for(let W=0,ye=J.length;W<ye;W++)te[W]=n.COLOR_ATTACHMENT0+W;te.length=J.length,he=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,he=!0);he&&n.drawBuffers(te)}function Oe(R){return m!==R?(n.useProgram(R),m=R,!0):!1}let Wt={[Vr]:n.FUNC_ADD,[cM]:n.FUNC_SUBTRACT,[lM]:n.FUNC_REVERSE_SUBTRACT};Wt[uM]=n.MIN,Wt[dM]=n.MAX;let et={[fM]:n.ZERO,[hM]:n.ONE,[pM]:n.SRC_COLOR,[$d]:n.SRC_ALPHA,[xM]:n.SRC_ALPHA_SATURATE,[vM]:n.DST_COLOR,[gM]:n.DST_ALPHA,[mM]:n.ONE_MINUS_SRC_COLOR,[qd]:n.ONE_MINUS_SRC_ALPHA,[_M]:n.ONE_MINUS_DST_COLOR,[yM]:n.ONE_MINUS_DST_ALPHA,[EM]:n.CONSTANT_COLOR,[SM]:n.ONE_MINUS_CONSTANT_COLOR,[MM]:n.CONSTANT_ALPHA,[bM]:n.ONE_MINUS_CONSTANT_ALPHA};function at(R,re,te,he,J,W,ye,Fe,_t,ct){if(R===Hi){v===!0&&(se(n.BLEND),v=!1);return}if(v===!1&&(ne(n.BLEND),v=!0),R!==aM){if(R!==g||ct!==b){if((p!==Vr||S!==Vr)&&(n.blendEquation(n.FUNC_ADD),p=Vr,S=Vr),ct)switch(R){case Vs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFunc(n.ONE,n.ONE);break;case wy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dy:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ie("WebGLState: Invalid blending: ",R);break}else switch(R){case Vs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case al:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case wy:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dy:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",R);break}E=null,M=null,D=null,w=null,I.set(0,0,0),_=0,g=R,b=ct}return}J=J||re,W=W||te,ye=ye||he,(re!==p||J!==S)&&(n.blendEquationSeparate(Wt[re],Wt[J]),p=re,S=J),(te!==E||he!==M||W!==D||ye!==w)&&(n.blendFuncSeparate(et[te],et[he],et[W],et[ye]),E=te,M=he,D=W,w=ye),(Fe.equals(I)===!1||_t!==_)&&(n.blendColor(Fe.r,Fe.g,Fe.b,_t),I.copy(Fe),_=_t),g=R,b=!1}function gt(R,re){R.side===Jn?se(n.CULL_FACE):ne(n.CULL_FACE);let te=R.side===cn;re&&(te=!te),We(te),R.blending===Vs&&R.transparent===!1?at(Hi):at(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let he=R.stencilWrite;a.setTest(he),he&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),kt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(R){j!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),j=R)}function Nt(R){R!==rM?(ne(n.CULL_FACE),R!==C&&(R===Ty?n.cullFace(n.BACK):R===sM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),C=R}function A(R){R!==k&&(B&&n.lineWidth(R),k=R)}function kt(R,re,te){R?(ne(n.POLYGON_OFFSET_FILL),(V!==re||G!==te)&&(V=re,G=te,o.getReversed()&&(re=-re),n.polygonOffset(re,te))):se(n.POLYGON_OFFSET_FILL)}function st(R){R?ne(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function vt(R){R===void 0&&(R=n.TEXTURE0+H-1),Z!==R&&(n.activeTexture(R),Z=R)}function Ee(R,re,te){te===void 0&&(Z===null?te=n.TEXTURE0+H-1:te=Z);let he=le[te];he===void 0&&(he={type:void 0,texture:void 0},le[te]=he),(he.type!==R||he.texture!==re)&&(Z!==te&&(n.activeTexture(te),Z=te),n.bindTexture(R,re||X[R]),he.type=R,he.texture=re)}function T(){let R=le[Z];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function q(){try{n.texSubImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function Y(){try{n.texSubImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function $(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function ie(){try{n.texStorage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function we(){try{n.texStorage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function Pe(){try{n.texImage2D(...arguments)}catch(R){Ie("WebGLState:",R)}}function K(){try{n.texImage3D(...arguments)}catch(R){Ie("WebGLState:",R)}}function ee(R){Ge.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Ge.copy(R))}function ge(R){bt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),bt.copy(R))}function _e(R,re){let te=l.get(re);te===void 0&&(te=new WeakMap,l.set(re,te));let he=te.get(R);he===void 0&&(he=n.getUniformBlockIndex(re,R.name),te.set(R,he))}function ue(R,re){let he=l.get(re).get(R);c.get(re)!==he&&(n.uniformBlockBinding(re,he,R.__bindingPointIndex),c.set(re,he))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Z=null,le={},d={},f=new WeakMap,h=[],m=null,v=!1,g=null,p=null,E=null,M=null,S=null,D=null,w=null,I=new Ne(0,0,0),_=0,b=!1,j=null,C=null,k=null,V=null,G=null,Ge.set(0,0,n.canvas.width,n.canvas.height),bt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:se,bindFramebuffer:ze,drawBuffers:Re,useProgram:Oe,setBlending:at,setMaterial:gt,setFlipSided:We,setCullFace:Nt,setLineWidth:A,setPolygonOffset:kt,setScissorTest:st,activeTexture:vt,bindTexture:Ee,unbindTexture:T,compressedTexImage2D:y,compressedTexImage3D:P,texImage2D:Pe,texImage3D:K,updateUBOMapping:_e,uniformBlockBinding:ue,texStorage2D:ie,texStorage3D:we,texSubImage2D:q,texSubImage3D:Y,compressedTexSubImage2D:$,compressedTexSubImage3D:me,scissor:ee,viewport:ge,reset:$e}}function XO(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return h?new OffscreenCanvas(T,y):ea("canvas")}function v(T,y,P){let q=1,Y=Ee(T);if((Y.width>P||Y.height>P)&&(q=P/Math.max(Y.width,Y.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let $=Math.floor(q*Y.width),me=Math.floor(q*Y.height);d===void 0&&(d=m($,me));let ie=y?m($,me):d;return ie.width=$,ie.height=me,ie.getContext("2d").drawImage(T,0,0,$,me),Me("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+$+"x"+me+")."),ie}else return"data"in T&&Me("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,y,P,q,Y=!1){if(T!==null){if(n[T]!==void 0)return n[T];Me("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let $=y;if(y===n.RED&&(P===n.FLOAT&&($=n.R32F),P===n.HALF_FLOAT&&($=n.R16F),P===n.UNSIGNED_BYTE&&($=n.R8)),y===n.RED_INTEGER&&(P===n.UNSIGNED_BYTE&&($=n.R8UI),P===n.UNSIGNED_SHORT&&($=n.R16UI),P===n.UNSIGNED_INT&&($=n.R32UI),P===n.BYTE&&($=n.R8I),P===n.SHORT&&($=n.R16I),P===n.INT&&($=n.R32I)),y===n.RG&&(P===n.FLOAT&&($=n.RG32F),P===n.HALF_FLOAT&&($=n.RG16F),P===n.UNSIGNED_BYTE&&($=n.RG8)),y===n.RG_INTEGER&&(P===n.UNSIGNED_BYTE&&($=n.RG8UI),P===n.UNSIGNED_SHORT&&($=n.RG16UI),P===n.UNSIGNED_INT&&($=n.RG32UI),P===n.BYTE&&($=n.RG8I),P===n.SHORT&&($=n.RG16I),P===n.INT&&($=n.RG32I)),y===n.RGB_INTEGER&&(P===n.UNSIGNED_BYTE&&($=n.RGB8UI),P===n.UNSIGNED_SHORT&&($=n.RGB16UI),P===n.UNSIGNED_INT&&($=n.RGB32UI),P===n.BYTE&&($=n.RGB8I),P===n.SHORT&&($=n.RGB16I),P===n.INT&&($=n.RGB32I)),y===n.RGBA_INTEGER&&(P===n.UNSIGNED_BYTE&&($=n.RGBA8UI),P===n.UNSIGNED_SHORT&&($=n.RGBA16UI),P===n.UNSIGNED_INT&&($=n.RGBA32UI),P===n.BYTE&&($=n.RGBA8I),P===n.SHORT&&($=n.RGBA16I),P===n.INT&&($=n.RGBA32I)),y===n.RGB&&(P===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),P===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),y===n.RGBA){let me=Y?Pc:Ke.getTransfer(q);P===n.FLOAT&&($=n.RGBA32F),P===n.HALF_FLOAT&&($=n.RGBA16F),P===n.UNSIGNED_BYTE&&($=me===ot?n.SRGB8_ALPHA8:n.RGBA8),P===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),P===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(T,y){let P;return T?y===null||y===xi||y===va?P=n.DEPTH24_STENCIL8:y===zn?P=n.DEPTH32F_STENCIL8:y===ya&&(P=n.DEPTH24_STENCIL8,Me("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xi||y===va?P=n.DEPTH_COMPONENT24:y===zn?P=n.DEPTH_COMPONENT32F:y===ya&&(P=n.DEPTH_COMPONENT16),P}function D(T,y){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Lt&&T.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function w(T){let y=T.target;y.removeEventListener("dispose",w),_(y),y.isVideoTexture&&u.delete(y)}function I(T){let y=T.target;y.removeEventListener("dispose",I),j(y)}function _(T){let y=i.get(T);if(y.__webglInit===void 0)return;let P=T.source,q=f.get(P);if(q){let Y=q[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(T),Object.keys(q).length===0&&f.delete(P)}i.remove(T)}function b(T){let y=i.get(T);n.deleteTexture(y.__webglTexture);let P=T.source,q=f.get(P);delete q[y.__cacheKey],o.memory.textures--}function j(T){let y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let Y=0;Y<y.__webglFramebuffer[q].length;Y++)n.deleteFramebuffer(y.__webglFramebuffer[q][Y]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let P=T.textures;for(let q=0,Y=P.length;q<Y;q++){let $=i.get(P[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(P[q])}i.remove(T)}let C=0;function k(){C=0}function V(){let T=C;return T>=r.maxTextures&&Me("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),C+=1,T}function G(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function H(T,y){let P=i.get(T);if(T.isVideoTexture&&st(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&P.__version!==T.version){let q=T.image;if(q===null)Me("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Me("WebGLRenderer: Texture marked for update but image is incomplete");else{X(P,T,y);return}}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,P.__webglTexture,n.TEXTURE0+y)}function B(T,y){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){X(P,T,y);return}else T.isExternalTexture&&(P.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,P.__webglTexture,n.TEXTURE0+y)}function U(T,y){let P=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&P.__version!==T.version){X(P,T,y);return}t.bindTexture(n.TEXTURE_3D,P.__webglTexture,n.TEXTURE0+y)}function Q(T,y){let P=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&P.__version!==T.version){ne(P,T,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+y)}let Z={[Hr]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},le={[Lt]:n.NEAREST,[Sf]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[_i]:n.LINEAR_MIPMAP_LINEAR},pe={[RM]:n.NEVER,[FM]:n.ALWAYS,[NM]:n.LESS,[ch]:n.LEQUAL,[PM]:n.EQUAL,[lh]:n.GEQUAL,[LM]:n.GREATER,[OM]:n.NOTEQUAL};function de(T,y){if(y.type===zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===ga||y.magFilter===Zs||y.magFilter===_i||y.minFilter===Ot||y.minFilter===ga||y.minFilter===Zs||y.minFilter===_i)&&Me("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Z[y.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Z[y.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Z[y.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,le[y.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,le[y.minFilter]),y.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,pe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Lt||y.minFilter!==Zs&&y.minFilter!==_i||y.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ge(T,y){let P=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",w));let q=y.source,Y=f.get(q);Y===void 0&&(Y={},f.set(q,Y));let $=G(y);if($!==T.__cacheKey){Y[$]===void 0&&(Y[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,P=!0),Y[$].usedTimes++;let me=Y[T.__cacheKey];me!==void 0&&(Y[T.__cacheKey].usedTimes--,me.usedTimes===0&&b(y)),T.__cacheKey=$,T.__webglTexture=Y[$].texture}return P}function bt(T,y,P){return Math.floor(Math.floor(T/P)/y)}function Mt(T,y,P,q){let $=T.updateRanges;if($.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,P,q,y.data);else{$.sort((K,ee)=>K.start-ee.start);let me=0;for(let K=1;K<$.length;K++){let ee=$[me],ge=$[K],_e=ee.start+ee.count,ue=bt(ge.start,y.width,4),$e=bt(ee.start,y.width,4);ge.start<=_e+1&&ue===$e&&bt(ge.start+ge.count-1,y.width,4)===ue?ee.count=Math.max(ee.count,ge.start+ge.count-ee.start):(++me,$[me]=ge)}$.length=me+1;let ie=n.getParameter(n.UNPACK_ROW_LENGTH),we=n.getParameter(n.UNPACK_SKIP_PIXELS),Pe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let K=0,ee=$.length;K<ee;K++){let ge=$[K],_e=Math.floor(ge.start/4),ue=Math.ceil(ge.count/4),$e=_e%y.width,R=Math.floor(_e/y.width),re=ue,te=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,$e,R,re,te,P,q,y.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ie),n.pixelStorei(n.UNPACK_SKIP_PIXELS,we),n.pixelStorei(n.UNPACK_SKIP_ROWS,Pe)}}function X(T,y,P){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);let Y=Ge(T,y),$=y.source;t.bindTexture(q,T.__webglTexture,n.TEXTURE0+P);let me=i.get($);if($.version!==me.__version||Y===!0){t.activeTexture(n.TEXTURE0+P);let ie=Ke.getPrimaries(Ke.workingColorSpace),we=y.colorSpace===vr?null:Ke.getPrimaries(y.colorSpace),Pe=y.colorSpace===vr||ie===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let K=v(y.image,!1,r.maxTextureSize);K=vt(y,K);let ee=s.convert(y.format,y.colorSpace),ge=s.convert(y.type),_e=M(y.internalFormat,ee,ge,y.colorSpace,y.isVideoTexture);de(q,y);let ue,$e=y.mipmaps,R=y.isVideoTexture!==!0,re=me.__version===void 0||Y===!0,te=$.dataReady,he=D(y,K);if(y.isDepthTexture)_e=S(y.format===Zr,y.type),re&&(R?t.texStorage2D(n.TEXTURE_2D,1,_e,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,ee,ge,null));else if(y.isDataTexture)if($e.length>0){R&&re&&t.texStorage2D(n.TEXTURE_2D,he,_e,$e[0].width,$e[0].height);for(let J=0,W=$e.length;J<W;J++)ue=$e[J],R?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ge,ue.data):t.texImage2D(n.TEXTURE_2D,J,_e,ue.width,ue.height,0,ee,ge,ue.data);y.generateMipmaps=!1}else R?(re&&t.texStorage2D(n.TEXTURE_2D,he,_e,K.width,K.height),te&&Mt(y,K,ee,ge)):t.texImage2D(n.TEXTURE_2D,0,_e,K.width,K.height,0,ee,ge,K.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){R&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,_e,$e[0].width,$e[0].height,K.depth);for(let J=0,W=$e.length;J<W;J++)if(ue=$e[J],y.format!==Gn)if(ee!==null)if(R){if(te)if(y.layerUpdates.size>0){let ye=Yy(ue.width,ue.height,y.format,y.type);for(let Fe of y.layerUpdates){let _t=ue.data.subarray(Fe*ye/ue.data.BYTES_PER_ELEMENT,(Fe+1)*ye/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Fe,ue.width,ue.height,1,ee,_t)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,K.depth,ee,ue.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,_e,ue.width,ue.height,K.depth,0,ue.data,0,0);else Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?te&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ue.width,ue.height,K.depth,ee,ge,ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,_e,ue.width,ue.height,K.depth,0,ee,ge,ue.data)}else{R&&re&&t.texStorage2D(n.TEXTURE_2D,he,_e,$e[0].width,$e[0].height);for(let J=0,W=$e.length;J<W;J++)ue=$e[J],y.format!==Gn?ee!==null?R?te&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ue.data):t.compressedTexImage2D(n.TEXTURE_2D,J,_e,ue.width,ue.height,0,ue.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ue.width,ue.height,ee,ge,ue.data):t.texImage2D(n.TEXTURE_2D,J,_e,ue.width,ue.height,0,ee,ge,ue.data)}else if(y.isDataArrayTexture)if(R){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,_e,K.width,K.height,K.depth),te)if(y.layerUpdates.size>0){let J=Yy(K.width,K.height,y.format,y.type);for(let W of y.layerUpdates){let ye=K.data.subarray(W*J/K.data.BYTES_PER_ELEMENT,(W+1)*J/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,W,K.width,K.height,1,ee,ge,ye)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ee,ge,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,K.width,K.height,K.depth,0,ee,ge,K.data);else if(y.isData3DTexture)R?(re&&t.texStorage3D(n.TEXTURE_3D,he,_e,K.width,K.height,K.depth),te&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ee,ge,K.data)):t.texImage3D(n.TEXTURE_3D,0,_e,K.width,K.height,K.depth,0,ee,ge,K.data);else if(y.isFramebufferTexture){if(re)if(R)t.texStorage2D(n.TEXTURE_2D,he,_e,K.width,K.height);else{let J=K.width,W=K.height;for(let ye=0;ye<he;ye++)t.texImage2D(n.TEXTURE_2D,ye,_e,J,W,0,ee,ge,null),J>>=1,W>>=1}}else if($e.length>0){if(R&&re){let J=Ee($e[0]);t.texStorage2D(n.TEXTURE_2D,he,_e,J.width,J.height)}for(let J=0,W=$e.length;J<W;J++)ue=$e[J],R?te&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ee,ge,ue):t.texImage2D(n.TEXTURE_2D,J,_e,ee,ge,ue);y.generateMipmaps=!1}else if(R){if(re){let J=Ee(K);t.texStorage2D(n.TEXTURE_2D,he,_e,J.width,J.height)}te&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee,ge,K)}else t.texImage2D(n.TEXTURE_2D,0,_e,ee,ge,K);g(y)&&p(q),me.__version=$.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ne(T,y,P){if(y.image.length!==6)return;let q=Ge(T,y),Y=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+P);let $=i.get(Y);if(Y.version!==$.__version||q===!0){t.activeTexture(n.TEXTURE0+P);let me=Ke.getPrimaries(Ke.workingColorSpace),ie=y.colorSpace===vr?null:Ke.getPrimaries(y.colorSpace),we=y.colorSpace===vr||me===ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,K=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let W=0;W<6;W++)!Pe&&!K?ee[W]=v(y.image[W],!0,r.maxCubemapSize):ee[W]=K?y.image[W].image:y.image[W],ee[W]=vt(y,ee[W]);let ge=ee[0],_e=s.convert(y.format,y.colorSpace),ue=s.convert(y.type),$e=M(y.internalFormat,_e,ue,y.colorSpace),R=y.isVideoTexture!==!0,re=$.__version===void 0||q===!0,te=Y.dataReady,he=D(y,ge);de(n.TEXTURE_CUBE_MAP,y);let J;if(Pe){R&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,he,$e,ge.width,ge.height);for(let W=0;W<6;W++){J=ee[W].mipmaps;for(let ye=0;ye<J.length;ye++){let Fe=J[ye];y.format!==Gn?_e!==null?R?te&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye,0,0,Fe.width,Fe.height,_e,Fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye,$e,Fe.width,Fe.height,0,Fe.data):Me("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye,0,0,Fe.width,Fe.height,_e,ue,Fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye,$e,Fe.width,Fe.height,0,_e,ue,Fe.data)}}}else{if(J=y.mipmaps,R&&re){J.length>0&&he++;let W=Ee(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,he,$e,W.width,W.height)}for(let W=0;W<6;W++)if(K){R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ee[W].width,ee[W].height,_e,ue,ee[W].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,$e,ee[W].width,ee[W].height,0,_e,ue,ee[W].data);for(let ye=0;ye<J.length;ye++){let _t=J[ye].image[W].image;R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye+1,0,0,_t.width,_t.height,_e,ue,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye+1,$e,_t.width,_t.height,0,_e,ue,_t.data)}}else{R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,_e,ue,ee[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,$e,_e,ue,ee[W]);for(let ye=0;ye<J.length;ye++){let Fe=J[ye];R?te&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye+1,0,0,_e,ue,Fe.image[W]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+W,ye+1,$e,_e,ue,Fe.image[W])}}}g(y)&&p(n.TEXTURE_CUBE_MAP),$.__version=Y.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function se(T,y,P,q,Y,$){let me=s.convert(P.format,P.colorSpace),ie=s.convert(P.type),we=M(P.internalFormat,me,ie,P.colorSpace),Pe=i.get(y),K=i.get(P);if(K.__renderTarget=y,!Pe.__hasExternalTextures){let ee=Math.max(1,y.width>>$),ge=Math.max(1,y.height>>$);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,$,we,ee,ge,y.depth,0,me,ie,null):t.texImage2D(Y,$,we,ee,ge,0,me,ie,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),kt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Y,K.__webglTexture,0,A(y)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Y,K.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(T,y,P){if(n.bindRenderbuffer(n.RENDERBUFFER,T),y.depthBuffer){let q=y.depthTexture,Y=q&&q.isDepthTexture?q.type:null,$=S(y.stencilBuffer,Y),me=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;kt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(y),$,y.width,y.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(y),$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,T)}else{let q=y.textures;for(let Y=0;Y<q.length;Y++){let $=q[Y],me=s.convert($.format,$.colorSpace),ie=s.convert($.type),we=M($.internalFormat,me,ie,$.colorSpace);kt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(y),we,y.width,y.height):P?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(y),we,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,we,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(T,y,P){let q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=i.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),de(n.TEXTURE_CUBE_MAP,y.depthTexture);let Pe=s.convert(y.depthTexture.format),K=s.convert(y.depthTexture.type),ee;y.depthTexture.format===Pi?ee=n.DEPTH_COMPONENT24:y.depthTexture.format===Zr&&(ee=n.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ee,y.width,y.height,0,Pe,K,null)}}else H(y.depthTexture,0);let $=Y.__webglTexture,me=A(y),ie=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+P:n.TEXTURE_2D,we=y.depthTexture.format===Zr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pi)kt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ie,$,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,we,ie,$,0);else if(y.depthTexture.format===Zr)kt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,we,ie,$,0,me):n.framebufferTexture2D(n.FRAMEBUFFER,we,ie,$,0);else throw new Error("Unknown depthTexture format")}function Oe(T){let y=i.get(T),P=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",Y)};q.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let q=0;q<6;q++)Re(y.__webglFramebuffer[q],T,q);else{let q=T.texture.mipmaps;q&&q.length>0?Re(y.__webglFramebuffer[0],T,0):Re(y.__webglFramebuffer,T,0)}else if(P){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),ze(y.__webglDepthbuffer[q],T,!1);else{let Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,$)}}else{let q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ze(y.__webglDepthbuffer,T,!1);else{let Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,$)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Wt(T,y,P){let q=i.get(T);y!==void 0&&se(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),P!==void 0&&Oe(T)}function et(T){let y=T.texture,P=i.get(T),q=i.get(y);T.addEventListener("dispose",I);let Y=T.textures,$=T.isWebGLCubeRenderTarget===!0,me=Y.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),$){P.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[ie]=[];for(let we=0;we<y.mipmaps.length;we++)P.__webglFramebuffer[ie][we]=n.createFramebuffer()}else P.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let ie=0;ie<y.mipmaps.length;ie++)P.__webglFramebuffer[ie]=n.createFramebuffer()}else P.__webglFramebuffer=n.createFramebuffer();if(me)for(let ie=0,we=Y.length;ie<we;ie++){let Pe=i.get(Y[ie]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&kt(T)===!1){P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ie=0;ie<Y.length;ie++){let we=Y[ie];P.__webglColorRenderbuffer[ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,P.__webglColorRenderbuffer[ie]);let Pe=s.convert(we.format,we.colorSpace),K=s.convert(we.type),ee=M(we.internalFormat,Pe,K,we.colorSpace,T.isXRRenderTarget===!0),ge=A(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ie,n.RENDERBUFFER,P.__webglColorRenderbuffer[ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(P.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),de(n.TEXTURE_CUBE_MAP,y);for(let ie=0;ie<6;ie++)if(y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)se(P.__webglFramebuffer[ie][we],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,we);else se(P.__webglFramebuffer[ie],T,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);g(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ie=0,we=Y.length;ie<we;ie++){let Pe=Y[ie],K=i.get(Pe),ee=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ee=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,K.__webglTexture),de(ee,Pe),se(P.__webglFramebuffer,T,Pe,n.COLOR_ATTACHMENT0+ie,ee,0),g(Pe)&&p(ee)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ie=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ie,q.__webglTexture),de(ie,y),y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)se(P.__webglFramebuffer[we],T,y,n.COLOR_ATTACHMENT0,ie,we);else se(P.__webglFramebuffer,T,y,n.COLOR_ATTACHMENT0,ie,0);g(y)&&p(ie),t.unbindTexture()}T.depthBuffer&&Oe(T)}function at(T){let y=T.textures;for(let P=0,q=y.length;P<q;P++){let Y=y[P];if(g(Y)){let $=E(T),me=i.get(Y).__webglTexture;t.bindTexture($,me),p($),t.unbindTexture()}}}let gt=[],We=[];function Nt(T){if(T.samples>0){if(kt(T)===!1){let y=T.textures,P=T.width,q=T.height,Y=n.COLOR_BUFFER_BIT,$=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(T),ie=y.length>1;if(ie)for(let Pe=0;Pe<y.length;Pe++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let we=T.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),ie){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);let K=i.get(y[Pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,K,0)}n.blitFramebuffer(0,0,P,q,0,0,P,q,Y,n.NEAREST),c===!0&&(gt.length=0,We.length=0,gt.push(n.COLOR_ATTACHMENT0+Pe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(gt.push($),We.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ie)for(let Pe=0;Pe<y.length;Pe++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,me.__webglColorRenderbuffer[Pe]);let K=i.get(y[Pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,K,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function A(T){return Math.min(r.maxSamples,T.samples)}function kt(T){let y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function st(T){let y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function vt(T,y){let P=T.colorSpace,q=T.format,Y=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||P!==an&&P!==vr&&(Ke.getTransfer(P)===ot?(q!==Gn||Y!==An)&&Me("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",P)),y}function Ee(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=Wt,this.setupRenderTarget=et,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function YO(n,e){function t(i,r=vr){let s,o=Ke.getTransfer(r);if(i===An)return n.UNSIGNED_BYTE;if(i===bf)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tf)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uy)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===By)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fy)return n.BYTE;if(i===ky)return n.SHORT;if(i===ya)return n.UNSIGNED_SHORT;if(i===Mf)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===zi)return n.HALF_FLOAT;if(i===Vy)return n.ALPHA;if(i===Hy)return n.RGB;if(i===Gn)return n.RGBA;if(i===Pi)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===wf)return n.RED;if(i===Df)return n.RED_INTEGER;if(i===Ks)return n.RG;if(i===Cf)return n.RG_INTEGER;if(i===Af)return n.RGBA_INTEGER;if(i===ll||i===ul||i===dl||i===fl)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===If||i===Rf||i===Nf||i===Pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===If)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lf||i===Of||i===Ff||i===kf||i===Uf||i===Bf||i===Vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lf||i===Of)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ff)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kf)return s.COMPRESSED_R11_EAC;if(i===Uf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Bf)return s.COMPRESSED_RG11_EAC;if(i===Vf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hf||i===zf||i===Gf||i===jf||i===Wf||i===$f||i===qf||i===Xf||i===Yf||i===Zf||i===Kf||i===Jf||i===Qf||i===eh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$f)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qf)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===th||i===nh||i===ih)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===th)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ih)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rh||i===sh||i===oh||i===ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===va?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var ZO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KO=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,lv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new $c(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gn({vertexShader:ZO,fragmentShader:KO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new qc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uv=class extends Li{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,m=null,v=typeof XRWebGLBinding<"u",g=new lv,p={},E=t.getContextAttributes(),M=null,S=null,D=[],w=[],I=new De,_=null,b=new Bt;b.viewport=new St;let j=new Bt;j.viewport=new St;let C=[b,j],k=new _f,V=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=D[X];return ne===void 0&&(ne=new ra,D[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=D[X];return ne===void 0&&(ne=new ra,D[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=D[X];return ne===void 0&&(ne=new ra,D[X]=ne),ne.getHandSpace()};function H(X){let ne=w.indexOf(X.inputSource);if(ne===-1)return;let se=D[ne];se!==void 0&&(se.update(X.inputSource,X.frame,l||o),se.dispatchEvent({type:X.type,data:X.inputSource}))}function B(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",U);for(let X=0;X<D.length;X++){let ne=w[X];ne!==null&&(w[X]=null,D[X].disconnect(ne))}V=null,G=null,g.reset();for(let X in p)delete p[X];e.setRenderTarget(M),h=null,f=null,d=null,r=null,S=null,Mt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Me("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&Me("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",B),r.addEventListener("inputsourceschange",U),E.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(I),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ze=null,Re=null;E.depth&&(Re=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=E.stencil?Zr:Pi,ze=E.stencil?va:xi);let Oe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Oe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Bn(f.textureWidth,f.textureHeight,{format:Gn,type:An,depthTexture:new jr(f.textureWidth,f.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let se={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Bn(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Mt.setContext(r),Mt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(X){for(let ne=0;ne<X.removed.length;ne++){let se=X.removed[ne],ze=w.indexOf(se);ze>=0&&(w[ze]=null,D[ze].disconnect(se))}for(let ne=0;ne<X.added.length;ne++){let se=X.added[ne],ze=w.indexOf(se);if(ze===-1){for(let Oe=0;Oe<D.length;Oe++)if(Oe>=w.length){w.push(se),ze=Oe;break}else if(w[Oe]===null){w[Oe]=se,ze=Oe;break}if(ze===-1)break}let Re=D[ze];Re&&Re.connect(se)}}let Q=new N,Z=new N;function le(X,ne,se){Q.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);let ze=Q.distanceTo(Z),Re=ne.projectionMatrix.elements,Oe=se.projectionMatrix.elements,Wt=Re[14]/(Re[10]-1),et=Re[14]/(Re[10]+1),at=(Re[9]+1)/Re[5],gt=(Re[9]-1)/Re[5],We=(Re[8]-1)/Re[0],Nt=(Oe[8]+1)/Oe[0],A=Wt*We,kt=Wt*Nt,st=ze/(-We+Nt),vt=st*-We;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(vt),X.translateZ(st),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Re[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let Ee=Wt+st,T=et+st,y=A-vt,P=kt+(ze-vt),q=at*et/T*Ee,Y=gt*et/T*Ee;X.projectionMatrix.makePerspective(y,P,q,Y,Ee,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function pe(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,se=X.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(se=g.depthFar)),k.near=j.near=b.near=ne,k.far=j.far=b.far=se,(V!==k.near||G!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,G=k.far),k.layers.mask=X.layers.mask|6,b.layers.mask=k.layers.mask&-5,j.layers.mask=k.layers.mask&-3;let ze=X.parent,Re=k.cameras;pe(k,ze);for(let Oe=0;Oe<Re.length;Oe++)pe(Re[Oe],ze);Re.length===2?le(k,b,j):k.projectionMatrix.copy(b.projectionMatrix),de(X,k,ze)};function de(X,ne,se){se===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=js*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(X){return p[X]};let Ge=null;function bt(X,ne){if(u=ne.getViewerPose(l||o),m=ne,u!==null){let se=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let ze=!1;se.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let et=0;et<se.length;et++){let at=se[et],gt=null;if(h!==null)gt=h.getViewport(at);else{let Nt=d.getViewSubImage(f,at);gt=Nt.viewport,et===0&&(e.setRenderTargetTextures(S,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(S))}let We=C[et];We===void 0&&(We=new Bt,We.layers.enable(et),We.viewport=new St,C[et]=We),We.matrix.fromArray(at.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(at.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(gt.x,gt.y,gt.width,gt.height),et===0&&(k.matrix.copy(We.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(We)}let Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let et=d.getDepthInformation(se[0]);et&&et.isValid&&et.texture&&g.init(et,r.renderState)}if(Re&&Re.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let et=0;et<se.length;et++){let at=se[et].camera;if(at){let gt=p[at];gt||(gt=new $c,p[at]=gt);let We=d.getCameraImage(at);gt.sourceTexture=We}}}}for(let se=0;se<D.length;se++){let ze=w[se],Re=D[se];ze!==null&&Re!==void 0&&Re.update(ze,ne,l||o)}Ge&&Ge(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}let Mt=new hb;Mt.setAnimationLoop(bt),this.setAnimationLoop=function(X){Ge=X},this.dispose=function(){}}},eo=new zr,JO=new Ve;function QO(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,$y(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,E,M,S){p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),v(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,E,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===cn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===cn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=e.get(p),M=E.envMap,S=E.envMapRotation;M&&(g.envMap.value=M,eo.copy(S),eo.x*=-1,eo.y*=-1,eo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),g.envMapRotation.value.setFromMatrix4(JO.makeRotationFromEuler(eo)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let E=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eF(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){let S=M.program;i.uniformBlockBinding(E,S)}function l(E,M){let S=r[E.id];S===void 0&&(m(E),S=u(E),r[E.id]=S,E.addEventListener("dispose",g));let D=M.program;i.updateUBOMapping(E,D);let w=e.render.frame;s[E.id]!==w&&(f(E),s[E.id]=w)}function u(E){let M=d();E.__bindingPointIndex=M;let S=n.createBuffer(),D=E.__size,w=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,D,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let M=r[E.id],S=E.uniforms,D=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,I=S.length;w<I;w++){let _=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,j=_.length;b<j;b++){let C=_[b];if(h(C,w,b,D)===!0){let k=C.__offset,V=Array.isArray(C.value)?C.value:[C.value],G=0;for(let H=0;H<V.length;H++){let B=V[H],U=v(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,k+G,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,G),G+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(E,M,S,D){let w=E.value,I=M+"_"+S;if(D[I]===void 0)return typeof w=="number"||typeof w=="boolean"?D[I]=w:D[I]=w.clone(),!0;{let _=D[I];if(typeof w=="number"||typeof w=="boolean"){if(_!==w)return D[I]=w,!0}else if(_.equals(w)===!1)return _.copy(w),!0}return!1}function m(E){let M=E.uniforms,S=0,D=16;for(let I=0,_=M.length;I<_;I++){let b=Array.isArray(M[I])?M[I]:[M[I]];for(let j=0,C=b.length;j<C;j++){let k=b[j],V=Array.isArray(k.value)?k.value:[k.value];for(let G=0,H=V.length;G<H;G++){let B=V[G],U=v(B),Q=S%D,Z=Q%U.boundary,le=Q+Z;S+=Z,le!==0&&D-le<U.storage&&(S+=D-le),k.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=U.storage}}}let w=S%D;return w>0&&(S+=D-w),E.__size=S,E.__cache={},this}function v(E){let M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?Me("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Me("WebGLRenderer: Unsupported uniform value type.",E),M}function g(E){let M=E.target;M.removeEventListener("dispose",g);let S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(let E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var tF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gi=null;function nF(){return Gi===null&&(Gi=new ca(tF,16,16,Ks,zi),Gi.name="DFG_LUT",Gi.minFilter=Ot,Gi.magFilter=Ot,Gi.wrapS=Kn,Gi.wrapT=Kn,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}var ph=class{constructor(e={}){let{canvas:t=kM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=An}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let v=h,g=new Set([Af,Cf,Df]),p=new Set([An,xi,ya,va,bf,Tf]),E=new Uint32Array(4),M=new Int32Array(4),S=null,D=null,w=[],I=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,j=!1;this._outputColorSpace=At;let C=0,k=0,V=null,G=-1,H=null,B=new St,U=new St,Q=null,Z=new Ne(0),le=0,pe=t.width,de=t.height,Ge=1,bt=null,Mt=null,X=new St(0,0,pe,de),ne=new St(0,0,pe,de),se=!1,ze=new la,Re=!1,Oe=!1,Wt=new Ve,et=new N,at=new St,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Nt(){return V===null?Ge:1}let A=i;function kt(x,L){return t.getContext(x,L)}try{let x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",_t,!1),A===null){let L="webgl2";if(A=kt(L,x),A===null)throw kt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Ie("WebGLRenderer: "+x.message),x}let st,vt,Ee,T,y,P,q,Y,$,me,ie,we,Pe,K,ee,ge,_e,ue,$e,R,re,te,he;function J(){st=new uL(A),st.init(),re=new YO(A,st),vt=new nL(A,st,e,re),Ee=new qO(A,st),vt.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),T=new hL(A),y=new PO,P=new XO(A,st,Ee,y,vt,re,T),q=new lL(b),Y=new v1(A),te=new eL(A,Y),$=new dL(A,Y,T,te),me=new mL(A,$,Y,te,T),ue=new pL(A,vt,P),ee=new iL(y),ie=new NO(b,q,st,vt,te,ee),we=new QO(b,y),Pe=new OO,K=new HO(st),_e=new QP(b,q,Ee,me,m,c),ge=new $O(b,me,vt),he=new eF(A,T,vt,Ee),$e=new tL(A,st,T),R=new fL(A,st,T),T.programs=ie.programs,b.capabilities=vt,b.extensions=st,b.properties=y,b.renderLists=Pe,b.shadowMap=ge,b.state=Ee,b.info=T}J(),v!==An&&(_=new yL(v,t.width,t.height,r,s));let W=new uv(b,A);this.xr=W,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let x=st.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=st.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(x){x!==void 0&&(Ge=x,this.setSize(pe,de,!1))},this.getSize=function(x){return x.set(pe,de)},this.setSize=function(x,L,z=!0){if(W.isPresenting){Me("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=x,de=L,t.width=Math.floor(x*Ge),t.height=Math.floor(L*Ge),z===!0&&(t.style.width=x+"px",t.style.height=L+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(pe*Ge,de*Ge).floor()},this.setDrawingBufferSize=function(x,L,z){pe=x,de=L,Ge=z,t.width=Math.floor(x*z),t.height=Math.floor(L*z),this.setViewport(0,0,x,L)},this.setEffects=function(x){if(v===An){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let L=0;L<x.length;L++)if(x[L].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(B)},this.getViewport=function(x){return x.copy(X)},this.setViewport=function(x,L,z,F){x.isVector4?X.set(x.x,x.y,x.z,x.w):X.set(x,L,z,F),Ee.viewport(B.copy(X).multiplyScalar(Ge).round())},this.getScissor=function(x){return x.copy(ne)},this.setScissor=function(x,L,z,F){x.isVector4?ne.set(x.x,x.y,x.z,x.w):ne.set(x,L,z,F),Ee.scissor(U.copy(ne).multiplyScalar(Ge).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(x){Ee.setScissorTest(se=x)},this.setOpaqueSort=function(x){bt=x},this.setTransparentSort=function(x){Mt=x},this.getClearColor=function(x){return x.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(x=!0,L=!0,z=!0){let F=0;if(x){let O=!1;if(V!==null){let ae=V.texture.format;O=g.has(ae)}if(O){let ae=V.texture.type,fe=p.has(ae),ce=_e.getClearColor(),xe=_e.getClearAlpha(),be=ce.r,Ue=ce.g,qe=ce.b;fe?(E[0]=be,E[1]=Ue,E[2]=qe,E[3]=xe,A.clearBufferuiv(A.COLOR,0,E)):(M[0]=be,M[1]=Ue,M[2]=qe,M[3]=xe,A.clearBufferiv(A.COLOR,0,M))}else F|=A.COLOR_BUFFER_BIT}L&&(F|=A.DEPTH_BUFFER_BIT),z&&(F|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&A.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),_e.dispose(),Pe.dispose(),K.dispose(),y.dispose(),q.dispose(),me.dispose(),te.dispose(),he.dispose(),ie.dispose(),W.dispose(),W.removeEventListener("sessionstart",$v),W.removeEventListener("sessionend",qv),ts.stop()};function ye(x){x.preventDefault(),Lc("WebGLRenderer: Context Lost."),j=!0}function Fe(){Lc("WebGLRenderer: Context Restored."),j=!1;let x=T.autoReset,L=ge.enabled,z=ge.autoUpdate,F=ge.needsUpdate,O=ge.type;J(),T.autoReset=x,ge.enabled=L,ge.autoUpdate=z,ge.needsUpdate=F,ge.type=O}function _t(x){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ct(x){let L=x.target;L.removeEventListener("dispose",ct),$i(L)}function $i(x){qi(x),y.remove(x)}function qi(x){let L=y.get(x).programs;L!==void 0&&(L.forEach(function(z){ie.releaseProgram(z)}),x.isShaderMaterial&&ie.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,z,F,O,ae){L===null&&(L=gt);let fe=O.isMesh&&O.matrixWorld.determinant()<0,ce=Lb(x,L,z,F,O);Ee.setMaterial(F,fe);let xe=z.index,be=1;if(F.wireframe===!0){if(xe=$.getWireframeAttribute(z),xe===void 0)return;be=2}let Ue=z.drawRange,qe=z.attributes.position,Te=Ue.start*be,dt=(Ue.start+Ue.count)*be;ae!==null&&(Te=Math.max(Te,ae.start*be),dt=Math.min(dt,(ae.start+ae.count)*be)),xe!==null?(Te=Math.max(Te,0),dt=Math.min(dt,xe.count)):qe!=null&&(Te=Math.max(Te,0),dt=Math.min(dt,qe.count));let Pt=dt-Te;if(Pt<0||Pt===1/0)return;te.setup(O,F,ce,z,xe);let Ct,ft=$e;if(xe!==null&&(Ct=Y.get(xe),ft=R,ft.setIndex(Ct)),O.isMesh)F.wireframe===!0?(Ee.setLineWidth(F.wireframeLinewidth*Nt()),ft.setMode(A.LINES)):ft.setMode(A.TRIANGLES);else if(O.isLine){let ln=F.linewidth;ln===void 0&&(ln=1),Ee.setLineWidth(ln*Nt()),O.isLineSegments?ft.setMode(A.LINES):O.isLineLoop?ft.setMode(A.LINE_LOOP):ft.setMode(A.LINE_STRIP)}else O.isPoints?ft.setMode(A.POINTS):O.isSprite&&ft.setMode(A.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Oc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ft.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let ln=O._multiDrawStarts,Se=O._multiDrawCounts,Rn=O._multiDrawCount,it=xe?Y.get(xe).bytesPerElement:1,ei=y.get(F).currentProgram.getUniforms();for(let Ei=0;Ei<Rn;Ei++)ei.setValue(A,"_gl_DrawID",Ei),ft.render(ln[Ei]/it,Se[Ei])}else if(O.isInstancedMesh)ft.renderInstances(Te,Pt,O.count);else if(z.isInstancedBufferGeometry){let ln=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Se=Math.min(z.instanceCount,ln);ft.renderInstances(Te,Pt,Se)}else ft.render(Te,Pt)};function Wv(x,L,z){x.transparent===!0&&x.side===Jn&&x.forceSinglePass===!1?(x.side=cn,x.needsUpdate=!0,_l(x,L,z),x.side=yi,x.needsUpdate=!0,_l(x,L,z),x.side=Jn):_l(x,L,z)}this.compile=function(x,L,z=null){z===null&&(z=x),D=K.get(z),D.init(L),I.push(D),z.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(D.pushLight(O),O.castShadow&&D.pushShadow(O))}),x!==z&&x.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(D.pushLight(O),O.castShadow&&D.pushShadow(O))}),D.setupLights();let F=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ae=O.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){let ce=ae[fe];Wv(ce,z,O),F.add(ce)}else Wv(ae,z,O),F.add(ae)}),D=I.pop(),F},this.compileAsync=function(x,L,z=null){let F=this.compile(x,L,z);return new Promise(O=>{function ae(){if(F.forEach(function(fe){y.get(fe).currentProgram.isReady()&&F.delete(fe)}),F.size===0){O(x);return}setTimeout(ae,10)}st.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ah=null;function Pb(x){Ah&&Ah(x)}function $v(){ts.stop()}function qv(){ts.start()}let ts=new hb;ts.setAnimationLoop(Pb),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(x){Ah=x,W.setAnimationLoop(x),x===null?ts.stop():ts.start()},W.addEventListener("sessionstart",$v),W.addEventListener("sessionend",qv),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;let z=W.enabled===!0&&W.isPresenting===!0,F=_!==null&&(V===null||z)&&_.begin(b,V);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(L),L=W.getCamera()),x.isScene===!0&&x.onBeforeRender(b,x,L,V),D=K.get(x,I.length),D.init(L),I.push(D),Wt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ze.setFromProjectionMatrix(Wt,pi,L.reversedDepth),Oe=this.localClippingEnabled,Re=ee.init(this.clippingPlanes,Oe),S=Pe.get(x,w.length),S.init(),w.push(S),W.enabled===!0&&W.isPresenting===!0){let fe=b.xr.getDepthSensingMesh();fe!==null&&Ih(fe,L,-1/0,b.sortObjects)}Ih(x,L,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(bt,Mt),We=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,We&&_e.addToRenderList(S,x),this.info.render.frame++,Re===!0&&ee.beginShadows();let O=D.state.shadowsArray;if(ge.render(O,x,L),Re===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(F&&_.hasRenderPass())===!1){let fe=S.opaque,ce=S.transmissive;if(D.setupLights(),L.isArrayCamera){let xe=L.cameras;if(ce.length>0)for(let be=0,Ue=xe.length;be<Ue;be++){let qe=xe[be];Yv(fe,ce,x,qe)}We&&_e.render(x);for(let be=0,Ue=xe.length;be<Ue;be++){let qe=xe[be];Xv(S,x,qe,qe.viewport)}}else ce.length>0&&Yv(fe,ce,x,L),We&&_e.render(x),Xv(S,x,L)}V!==null&&k===0&&(P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V)),F&&_.end(b),x.isScene===!0&&x.onAfterRender(b,x,L),te.resetDefaultState(),G=-1,H=null,I.pop(),I.length>0?(D=I[I.length-1],Re===!0&&ee.setGlobalState(b.clippingPlanes,D.state.camera)):D=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Ih(x,L,z,F){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)D.pushLight(x),x.castShadow&&D.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ze.intersectsSprite(x)){F&&at.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Wt);let fe=me.update(x),ce=x.material;ce.visible&&S.push(x,fe,ce,z,at.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ze.intersectsObject(x))){let fe=me.update(x),ce=x.material;if(F&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),at.copy(x.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),at.copy(fe.boundingSphere.center)),at.applyMatrix4(x.matrixWorld).applyMatrix4(Wt)),Array.isArray(ce)){let xe=fe.groups;for(let be=0,Ue=xe.length;be<Ue;be++){let qe=xe[be],Te=ce[qe.materialIndex];Te&&Te.visible&&S.push(x,fe,Te,z,at.z,qe)}}else ce.visible&&S.push(x,fe,ce,z,at.z,null)}}let ae=x.children;for(let fe=0,ce=ae.length;fe<ce;fe++)Ih(ae[fe],L,z,F)}function Xv(x,L,z,F){let{opaque:O,transmissive:ae,transparent:fe}=x;D.setupLightsView(z),Re===!0&&ee.setGlobalState(b.clippingPlanes,z),F&&Ee.viewport(B.copy(F)),O.length>0&&vl(O,L,z),ae.length>0&&vl(ae,L,z),fe.length>0&&vl(fe,L,z),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Yv(x,L,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[F.id]===void 0){let Te=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[F.id]=new Bn(1,1,{generateMipmaps:!0,type:Te?zi:An,minFilter:_i,samples:Math.max(4,vt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}let ae=D.state.transmissionRenderTarget[F.id],fe=F.viewport||B;ae.setSize(fe.z*b.transmissionResolutionScale,fe.w*b.transmissionResolutionScale);let ce=b.getRenderTarget(),xe=b.getActiveCubeFace(),be=b.getActiveMipmapLevel();b.setRenderTarget(ae),b.getClearColor(Z),le=b.getClearAlpha(),le<1&&b.setClearColor(16777215,.5),b.clear(),We&&_e.render(z);let Ue=b.toneMapping;b.toneMapping=vi;let qe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),D.setupLightsView(F),Re===!0&&ee.setGlobalState(b.clippingPlanes,F),vl(x,z,F),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),st.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let dt=0,Pt=L.length;dt<Pt;dt++){let Ct=L[dt],{object:ft,geometry:ln,material:Se,group:Rn}=Ct;if(Se.side===Jn&&ft.layers.test(F.layers)){let it=Se.side;Se.side=cn,Se.needsUpdate=!0,Zv(ft,z,F,ln,Se,Rn),Se.side=it,Se.needsUpdate=!0,Te=!0}}Te===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}b.setRenderTarget(ce,xe,be),b.setClearColor(Z,le),qe!==void 0&&(F.viewport=qe),b.toneMapping=Ue}function vl(x,L,z){let F=L.isScene===!0?L.overrideMaterial:null;for(let O=0,ae=x.length;O<ae;O++){let fe=x[O],{object:ce,geometry:xe,group:be}=fe,Ue=fe.material;Ue.allowOverride===!0&&F!==null&&(Ue=F),ce.layers.test(z.layers)&&Zv(ce,L,z,xe,Ue,be)}}function Zv(x,L,z,F,O,ae){x.onBeforeRender(b,L,z,F,O,ae),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(b,L,z,F,x,ae),O.transparent===!0&&O.side===Jn&&O.forceSinglePass===!1?(O.side=cn,O.needsUpdate=!0,b.renderBufferDirect(z,L,F,O,x,ae),O.side=yi,O.needsUpdate=!0,b.renderBufferDirect(z,L,F,O,x,ae),O.side=Jn):b.renderBufferDirect(z,L,F,O,x,ae),x.onAfterRender(b,L,z,F,O,ae)}function _l(x,L,z){L.isScene!==!0&&(L=gt);let F=y.get(x),O=D.state.lights,ae=D.state.shadowsArray,fe=O.state.version,ce=ie.getParameters(x,O.state,ae,L,z),xe=ie.getProgramCacheKey(ce),be=F.programs;F.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,F.fog=L.fog;let Ue=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;F.envMap=q.get(x.envMap||F.environment,Ue),F.envMapRotation=F.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,be===void 0&&(x.addEventListener("dispose",ct),be=new Map,F.programs=be);let qe=be.get(xe);if(qe!==void 0){if(F.currentProgram===qe&&F.lightsStateVersion===fe)return Jv(x,ce),qe}else ce.uniforms=ie.getUniforms(x),x.onBeforeCompile(ce,b),qe=ie.acquireProgram(ce,xe),be.set(xe,qe),F.uniforms=ce.uniforms;let Te=F.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Te.clippingPlanes=ee.uniform),Jv(x,ce),F.needsLights=Fb(x),F.lightsStateVersion=fe,F.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),F.currentProgram=qe,F.uniformsList=null,qe}function Kv(x){if(x.uniformsList===null){let L=x.currentProgram.getUniforms();x.uniformsList=Ea.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function Jv(x,L){let z=y.get(x);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Lb(x,L,z,F,O){L.isScene!==!0&&(L=gt),P.resetTextureUnits();let ae=L.fog,fe=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?L.environment:null,ce=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:an,xe=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,be=q.get(F.envMap||fe,xe),Ue=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,qe=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Te=!!z.morphAttributes.position,dt=!!z.morphAttributes.normal,Pt=!!z.morphAttributes.color,Ct=vi;F.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Ct=b.toneMapping);let ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ln=ft!==void 0?ft.length:0,Se=y.get(F),Rn=D.state.lights;if(Re===!0&&(Oe===!0||x!==H)){let $t=x===H&&F.id===G;ee.setState(F,x,$t)}let it=!1;F.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Rn.state.version||Se.outputColorSpace!==ce||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==be||F.fog===!0&&Se.fog!==ae||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==Ue||Se.vertexTangents!==qe||Se.morphTargets!==Te||Se.morphNormals!==dt||Se.morphColors!==Pt||Se.toneMapping!==Ct||Se.morphTargetsCount!==ln)&&(it=!0):(it=!0,Se.__version=F.version);let ei=Se.currentProgram;it===!0&&(ei=_l(F,L,O));let Ei=!1,ns=!1,io=!1,yt=ei.getUniforms(),tn=Se.uniforms;if(Ee.useProgram(ei.program)&&(Ei=!0,ns=!0,io=!0),F.id!==G&&(G=F.id,ns=!0),Ei||H!==x){Ee.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),yt.setValue(A,"projectionMatrix",x.projectionMatrix),yt.setValue(A,"viewMatrix",x.matrixWorldInverse);let xr=yt.map.cameraPosition;xr!==void 0&&xr.setValue(A,et.setFromMatrixPosition(x.matrixWorld)),vt.logarithmicDepthBuffer&&yt.setValue(A,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&yt.setValue(A,"isOrthographic",x.isOrthographicCamera===!0),H!==x&&(H=x,ns=!0,io=!0)}if(Se.needsLights&&(Rn.state.directionalShadowMap.length>0&&yt.setValue(A,"directionalShadowMap",Rn.state.directionalShadowMap,P),Rn.state.spotShadowMap.length>0&&yt.setValue(A,"spotShadowMap",Rn.state.spotShadowMap,P),Rn.state.pointShadowMap.length>0&&yt.setValue(A,"pointShadowMap",Rn.state.pointShadowMap,P)),O.isSkinnedMesh){yt.setOptional(A,O,"bindMatrix"),yt.setOptional(A,O,"bindMatrixInverse");let $t=O.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),yt.setValue(A,"boneTexture",$t.boneTexture,P))}O.isBatchedMesh&&(yt.setOptional(A,O,"batchingTexture"),yt.setValue(A,"batchingTexture",O._matricesTexture,P),yt.setOptional(A,O,"batchingIdTexture"),yt.setValue(A,"batchingIdTexture",O._indirectTexture,P),yt.setOptional(A,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(A,"batchingColorTexture",O._colorsTexture,P));let _r=z.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&ue.update(O,z,ei),(ns||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,yt.setValue(A,"receiveShadow",O.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&L.environment!==null&&(tn.envMapIntensity.value=L.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=nF()),ns&&(yt.setValue(A,"toneMappingExposure",b.toneMappingExposure),Se.needsLights&&Ob(tn,io),ae&&F.fog===!0&&we.refreshFogUniforms(tn,ae),we.refreshMaterialUniforms(tn,F,Ge,de,D.state.transmissionRenderTarget[x.id]),Ea.upload(A,Kv(Se),tn,P)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Ea.upload(A,Kv(Se),tn,P),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&yt.setValue(A,"center",O.center),yt.setValue(A,"modelViewMatrix",O.modelViewMatrix),yt.setValue(A,"normalMatrix",O.normalMatrix),yt.setValue(A,"modelMatrix",O.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){let $t=F.uniformsGroups;for(let xr=0,ro=$t.length;xr<ro;xr++){let Qv=$t[xr];he.update(Qv,ei),he.bind(Qv,ei)}}return ei}function Ob(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Fb(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(x,L,z){let F=y.get(x);F.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),y.get(x.texture).__webglTexture=L,y.get(x.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:z,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,L){let z=y.get(x);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0};let kb=A.createFramebuffer();this.setRenderTarget=function(x,L=0,z=0){V=x,C=L,k=z;let F=null,O=!1,ae=!1;if(x){let ce=y.get(x);if(ce.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(A.FRAMEBUFFER,ce.__webglFramebuffer),B.copy(x.viewport),U.copy(x.scissor),Q=x.scissorTest,Ee.viewport(B),Ee.scissor(U),Ee.setScissorTest(Q),G=-1;return}else if(ce.__webglFramebuffer===void 0)P.setupRenderTarget(x);else if(ce.__hasExternalTextures)P.rebindTextures(x,y.get(x.texture).__webglTexture,y.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let Ue=x.depthTexture;if(ce.__boundDepthTexture!==Ue){if(Ue!==null&&y.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(x)}}let xe=x.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ae=!0);let be=y.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(be[L])?F=be[L][z]:F=be[L],O=!0):x.samples>0&&P.useMultisampledRTT(x)===!1?F=y.get(x).__webglMultisampledFramebuffer:Array.isArray(be)?F=be[z]:F=be,B.copy(x.viewport),U.copy(x.scissor),Q=x.scissorTest}else B.copy(X).multiplyScalar(Ge).floor(),U.copy(ne).multiplyScalar(Ge).floor(),Q=se;if(z!==0&&(F=kb),Ee.bindFramebuffer(A.FRAMEBUFFER,F)&&Ee.drawBuffers(x,F),Ee.viewport(B),Ee.scissor(U),Ee.setScissorTest(Q),O){let ce=y.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,ce.__webglTexture,z)}else if(ae){let ce=L;for(let xe=0;xe<x.textures.length;xe++){let be=y.get(x.textures[xe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+xe,be.__webglTexture,z,ce)}}else if(x!==null&&z!==0){let ce=y.get(x.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ce.__webglTexture,z)}G=-1},this.readRenderTargetPixels=function(x,L,z,F,O,ae,fe,ce=0){if(!(x&&x.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Ee.bindFramebuffer(A.FRAMEBUFFER,xe);try{let be=x.textures[ce],Ue=be.format,qe=be.type;if(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ce),!vt.textureFormatReadable(Ue)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(qe)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-F&&z>=0&&z<=x.height-O&&A.readPixels(L,z,F,O,re.convert(Ue),re.convert(qe),ae)}finally{let be=V!==null?y.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(x,L,z,F,O,ae,fe,ce=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe)if(L>=0&&L<=x.width-F&&z>=0&&z<=x.height-O){Ee.bindFramebuffer(A.FRAMEBUFFER,xe);let be=x.textures[ce],Ue=be.format,qe=be.type;if(x.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+ce),!vt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Te=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Te),A.bufferData(A.PIXEL_PACK_BUFFER,ae.byteLength,A.STREAM_READ),A.readPixels(L,z,F,O,re.convert(Ue),re.convert(qe),0);let dt=V!==null?y.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(A.FRAMEBUFFER,dt);let Pt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await BM(A,Pt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Te),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ae),A.deleteBuffer(Te),A.deleteSync(Pt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,L=null,z=0){let F=Math.pow(2,-z),O=Math.floor(x.image.width*F),ae=Math.floor(x.image.height*F),fe=L!==null?L.x:0,ce=L!==null?L.y:0;P.setTexture2D(x,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,fe,ce,O,ae),Ee.unbindTexture()};let Ub=A.createFramebuffer(),Bb=A.createFramebuffer();this.copyTextureToTexture=function(x,L,z=null,F=null,O=0,ae=0){let fe,ce,xe,be,Ue,qe,Te,dt,Pt,Ct=x.isCompressedTexture?x.mipmaps[ae]:x.image;if(z!==null)fe=z.max.x-z.min.x,ce=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,be=z.min.x,Ue=z.min.y,qe=z.isBox3?z.min.z:0;else{let tn=Math.pow(2,-O);fe=Math.floor(Ct.width*tn),ce=Math.floor(Ct.height*tn),x.isDataArrayTexture?xe=Ct.depth:x.isData3DTexture?xe=Math.floor(Ct.depth*tn):xe=1,be=0,Ue=0,qe=0}F!==null?(Te=F.x,dt=F.y,Pt=F.z):(Te=0,dt=0,Pt=0);let ft=re.convert(L.format),ln=re.convert(L.type),Se;L.isData3DTexture?(P.setTexture3D(L,0),Se=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(P.setTexture2DArray(L,0),Se=A.TEXTURE_2D_ARRAY):(P.setTexture2D(L,0),Se=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);let Rn=A.getParameter(A.UNPACK_ROW_LENGTH),it=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ei=A.getParameter(A.UNPACK_SKIP_PIXELS),Ei=A.getParameter(A.UNPACK_SKIP_ROWS),ns=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ct.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ct.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,be),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ue),A.pixelStorei(A.UNPACK_SKIP_IMAGES,qe);let io=x.isDataArrayTexture||x.isData3DTexture,yt=L.isDataArrayTexture||L.isData3DTexture;if(x.isDepthTexture){let tn=y.get(x),_r=y.get(L),$t=y.get(tn.__renderTarget),xr=y.get(_r.__renderTarget);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,$t.__webglFramebuffer),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let ro=0;ro<xe;ro++)io&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,y.get(x).__webglTexture,O,qe+ro),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,y.get(L).__webglTexture,ae,Pt+ro)),A.blitFramebuffer(be,Ue,fe,ce,Te,dt,fe,ce,A.DEPTH_BUFFER_BIT,A.NEAREST);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||y.has(x)){let tn=y.get(x),_r=y.get(L);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,Ub),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Bb);for(let $t=0;$t<xe;$t++)io?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,tn.__webglTexture,O,qe+$t):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,tn.__webglTexture,O),yt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_r.__webglTexture,ae,Pt+$t):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_r.__webglTexture,ae),O!==0?A.blitFramebuffer(be,Ue,fe,ce,Te,dt,fe,ce,A.COLOR_BUFFER_BIT,A.NEAREST):yt?A.copyTexSubImage3D(Se,ae,Te,dt,Pt+$t,be,Ue,fe,ce):A.copyTexSubImage2D(Se,ae,Te,dt,be,Ue,fe,ce);Ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else yt?x.isDataTexture||x.isData3DTexture?A.texSubImage3D(Se,ae,Te,dt,Pt,fe,ce,xe,ft,ln,Ct.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(Se,ae,Te,dt,Pt,fe,ce,xe,ft,Ct.data):A.texSubImage3D(Se,ae,Te,dt,Pt,fe,ce,xe,ft,ln,Ct):x.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ae,Te,dt,fe,ce,ft,ln,Ct.data):x.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ae,Te,dt,Ct.width,Ct.height,ft,Ct.data):A.texSubImage2D(A.TEXTURE_2D,ae,Te,dt,fe,ce,ft,ln,Ct);A.pixelStorei(A.UNPACK_ROW_LENGTH,Rn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,it),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ei),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ei),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ns),ae===0&&L.generateMipmaps&&A.generateMipmap(Se),Ee.unbindTexture()},this.initRenderTarget=function(x){y.get(x).__webglFramebuffer===void 0&&P.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?P.setTextureCube(x,0):x.isData3DTexture?P.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?P.setTexture2DArray(x,0):P.setTexture2D(x,0),Ee.unbindTexture()},this.resetState=function(){C=0,k=0,V=null,Ee.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var vb={type:"change"},fv={type:"start"},xb={type:"end"},yh=new Oi,_b=new Zn,rF=Math.cos(70*Kr.DEG2RAD),jt=new N,In=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},dv=1e-6,vh=class extends sl{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new mn,this._lastTargetPosition=new N,this._quat=new mn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new pa,this._sphericalDelta=new pa,this._scale=1,this._panOffset=new N,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new N,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oF.bind(this),this._onPointerDown=sF.bind(this),this._onPointerUp=aF.bind(this),this._onContextMenu=pF.bind(this),this._onMouseWheel=uF.bind(this),this._onKeyDown=dF.bind(this),this._onTouchStart=fF.bind(this),this._onTouchMove=hF.bind(this),this._onMouseDown=cF.bind(this),this._onMouseMove=lF.bind(this),this._interceptControlDown=mF.bind(this),this._interceptControlUp=gF.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vb),this.update(),this.state=mt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),r<-Math.PI?r+=In:r>Math.PI&&(r-=In),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=jt.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){let a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(yh.origin.copy(this.object.position),yh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yh.direction))<rF?this.object.lookAt(this.target):(_b.setFromNormalAndCoplanarPoint(this.object.up,this.target),yh.intersectPlane(_b,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>dv||8*(1-this._lastQuaternion.dot(this.object.quaternion))>dv||this._lastTargetPosition.distanceToSquared(this.target)>dv?(this.dispatchEvent(vb),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;jt.copy(r).sub(this.target);let s=jt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function sF(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function oF(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function aF(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xb),this.state=mt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cF(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=mt.DOLLY;break;case qr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}break;case qr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(fv)}function lF(n){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function uF(n){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(n.preventDefault(),this.dispatchEvent(fv),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(xb))}function dF(n){this.enabled!==!1&&this._handleKeyDown(n)}function fF(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=mt.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=mt.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(fv)}function hF(n){switch(this._trackPointer(n),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=mt.NONE}}function pF(n){this.enabled!==!1&&n.preventDefault()}function mF(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gF(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hv(n,e){if(e===zy)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===_a||e===hl){let t=n.getIndex();if(t===null){let o=[],a=n.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let i=t.count-2,r=[];if(e===_a)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function Eb(n){let e=new Map,t=new Map,i=n.clone();return Sb(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;let s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Sb(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Sb(n.children[i],e.children[i],t)}var _h=class extends Jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xv(t)}),this.register(function(t){return new Ev(t)}),this.register(function(t){return new Iv(t)}),this.register(function(t){return new Rv(t)}),this.register(function(t){return new Nv(t)}),this.register(function(t){return new Mv(t)}),this.register(function(t){return new bv(t)}),this.register(function(t){return new Tv(t)}),this.register(function(t){return new wv(t)}),this.register(function(t){return new _v(t)}),this.register(function(t){return new Dv(t)}),this.register(function(t){return new Sv(t)}),this.register(function(t){return new Av(t)}),this.register(function(t){return new Cv(t)}),this.register(function(t){return new yv(t)}),this.register(function(t){return new xh(t,Ye.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new xh(t,Ye.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Pv(t)})}load(e,t,i,r){let s=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=yr.extractUrlBase(e);o=yr.resolveURL(l,this.path)}else o=yr.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new ha(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s,o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Db){try{o[Ye.KHR_BINARY_GLTF]=new Lv(e)}catch(d){r&&r(d);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hv(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){let d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case Ye.KHR_MATERIALS_UNLIT:o[d]=new vv;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[d]=new Ov(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[d]=new Fv;break;case Ye.KHR_MESH_QUANTIZATION:o[d]=new kv;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,t){let i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}};function yF(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Ft(n,e,t){let i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yv=class{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,r=t.cache.get(i);if(r)return r;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,u=new Ne(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],an);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new $r(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new tl(u),l.distance=d;break;case"spot":l=new el(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(t.cache,a,c)})}},vv=class{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,i){let r=[];e.color=new Ne(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],an),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,At))}return Promise.all(r)}},_v=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},xv=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(s,s)}return Promise.all(r)}},Ev=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Sv=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},Mv=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],an)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,At)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},bv=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},Tv=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(s[0],s[1],s[2],an),Promise.all(r)}},wv=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}},Dv=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let s=i.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(s[0],s[1],s[2],an),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,At)),Promise.all(r)}},Cv=class{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}},Av=class{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?Dn:null}extendMaterialParams(e,t){let i=Ft(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},Iv=class{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}},Rv=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},Nv=class{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;let o=s.extensions[t],a=r.images[o.source],c=i.textureLoader;if(a.uri){let l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return i.loadTextureImage(e,o.source,c)}},xh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){let c=r.byteOffset||0,l=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(h){return h.buffer}):o.ready.then(function(){let h=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(h),u,d,f,r.mode,r.filter),h})})}else return null}},Pv=class{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=t.meshes[i.mesh];for(let l of r.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=i.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),d=u.isGroup?u.children:[u],f=l[0].count,h=[];for(let m of d){let v=new Ve,g=new N,p=new mn,E=new N(1,1,1),M=new zc(m.geometry,m.material,f);for(let S=0;S<f;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&E.fromBufferAttribute(c.SCALE,S),M.setMatrixAt(S,v.compose(g,p,E));for(let S in c)if(S==="_COLOR_0"){let D=c[S];M.instanceColor=new Gr(D.array,D.itemSize,D.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,c[S]);en.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),h.push(M)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}},Db="glTF",yl=12,Mb={JSON:1313821514,BIN:5130562},Lv=class{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,yl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Db)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-yl,s=new DataView(e,yl),o=0;for(;o<r;){let a=s.getUint32(o,!0);o+=4;let c=s.getUint32(o,!0);if(o+=4,c===Mb.JSON){let l=new Uint8Array(e,yl+o,a);this.content=i.decode(l)}else if(c===Mb.BIN){let l=yl+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ov=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let d=Bv[u]||u.toLowerCase();a[d]=o[u]}for(let u in e.attributes){let d=Bv[u]||u.toLowerCase();if(o[u]!==void 0){let f=i.accessors[e.attributes[u]],h=Ma[f.componentType];l[d]=h.name,c[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(h){for(let m in h.attributes){let v=h.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}d(h)},a,l,an,f)})})}},Fv=class{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},kv=class{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}},Eh=class extends ki{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,d=(i-t)/u,f=d*d,h=f*d,m=e*l,v=m-l,g=-2*h+3*f,p=h-f,E=1-g,M=p-f+d;for(let S=0;S!==a;S++){let D=o[v+S+a],w=o[v+S+c]*u,I=o[m+S+a],_=o[m+S]*u;s[S]=E*D+M*w+g*I+p*_}return s}},vF=new mn,Uv=class extends Eh{interpolate_(e,t,i,r){let s=super.interpolate_(e,t,i,r);return vF.fromArray(s).normalize().toArray(s),s}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ma={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bb={9728:Lt,9729:Ot,9984:Sf,9985:ga,9986:Zs,9987:_i},Tb={33071:Kn,33648:Jo,10497:Hr},pv={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bv={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_F={CUBICSPLINE:void 0,LINEAR:Gs,STEP:zs},mv={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function xF(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new $s({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),n.DefaultMaterial}function no(n,e,t){for(let i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Wi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function EF(n,e,t){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let d=e[l];if(i){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],d=l[1],f=l[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function SF(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MF(n){let e,t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gv(t.attributes):e=n.indices+":"+gv(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+gv(n.targets[i]);return e}function gv(n){let e="",t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Vv(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bF(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var TF=new Ve,Hv=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yF,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);r=i&&c?parseInt(c[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new qs(this.options.manager):this.textureLoader=new il(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ha(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){let a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return no(s,a,r),Wi(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){let o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){let o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let r=i.clone(),s=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let r=e(t[i]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let r=0;r<t.length;r++){let s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){let i=e+":"+t,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(s,o){i.load(yr.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let o=pv[r.type],a=Ma[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new It(l,o,c))}let s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){let a=o[0],c=pv[r.type],l=Ma[r.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,f=r.byteOffset||0,h=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0,v,g;if(h&&h!==d){let p=Math.floor(f/h),E="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count,M=t.cache.get(E);M||(v=new l(a,p*h,r.count*h/u),M=new sa(v,h/u),t.cache.add(E,M)),g=new oa(M,c,f%h/u,m)}else a===null?v=new l(r.count*c):v=new l(a,f,r.count*c),g=new It(v,c,m);if(r.sparse!==void 0){let p=pv.SCALAR,E=Ma[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,D=new E(o[1],M,r.sparse.count*p),w=new l(o[2],S,r.sparse.count*c);a!==null&&(g=new It(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let I=0,_=D.length;I<_;I++){let b=D[I];if(g.setX(b,w[I*c]),c>=2&&g.setY(b,w[I*c+1]),c>=3&&g.setZ(b,w[I*c+2]),c>=4&&g.setW(b,w[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s],a=this.textureLoader;if(o.uri){let c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(s.samplers||{})[o.sampler]||{};return u.magFilter=bb[f.magFilter]||Ot,u.minFilter=bb[f.minFilter]||_i,u.wrapS=Tb[f.wrapS]||Hr,u.wrapT=Tb[f.wrapT]||Hr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Lt&&u.minFilter!==Ot,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=r.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(d){return new Promise(function(f,h){let m=f;t.isImageBitmapLoader===!0&&(m=function(v){let g=new jn(v);g.needsUpdate=!0,f(g)}),t.load(yr.resolveURL(d,s.path),m,void 0,h)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),Wi(d,o),d.userData.mimeType=o.mimeType||bF(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){let s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){let a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new ua,wn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){let a="LineBasicMaterial:"+i.uuid,c=this.cache.get(a);c||(c=new pr,wn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return $s}loadMaterial(e){let t=this,i=this.json,r=this.extensions,s=i.materials[e],o,a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){let d=r[Ye.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,s,t))}else{let d=s.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],an),a.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,At)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Jn);let u=s.alphaMode||mv.OPAQUE;if(u===mv.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===mv.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Hn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Hn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Hn){let d=s.emissiveFactor;a.emissive=new Ne().setRGB(d[0],d[1],d[2],an)}return s.emissiveTexture!==void 0&&o!==Hn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,At)),Promise.all(l).then(function(){let d=new o(a);return s.name&&(d.name=s.name),Wi(d,s),t.associations.set(d,{materials:e}),s.extensions&&no(r,d,s),d})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return wb(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=MF(l),d=r[u];if(d)o.push(d.promise);else{let f;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=wb(new Ht,l,t),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?xF(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let h=0,m=u.length;h<m;h++){let v=u[h],g=o[h],p,E=l[h];if(g.mode===Qn.TRIANGLES||g.mode===Qn.TRIANGLE_STRIP||g.mode===Qn.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new Vc(v,E):new Rt(v,E),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Qn.TRIANGLE_STRIP?p.geometry=hv(p.geometry,hl):g.mode===Qn.TRIANGLE_FAN&&(p.geometry=hv(p.geometry,_a));else if(g.mode===Qn.LINES)p=new Gc(v,E);else if(g.mode===Qn.LINE_STRIP)p=new Fi(v,E);else if(g.mode===Qn.LINE_LOOP)p=new jc(v,E);else if(g.mode===Qn.POINTS)p=new Wc(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&SF(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Wi(p,s),g.extensions&&no(r,p,g),t.assignFinalMaterial(p),d.push(p)}for(let h=0,m=d.length;h<m;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return s.extensions&&no(r,d[0],s),d[0];let f=new mi;s.extensions&&no(r,f,s),t.associations.set(f,{meshes:e});for(let h=0,m=d.length;h<m;h++)f.add(d[h]);return f})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Bt(Kr.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Wr(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Wi(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let d=o[l];if(d){a.push(d);let f=new Ve;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Hc(a,c)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){let h=r.channels[d],m=r.samplers[h.sampler],v=h.target,g=v.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,E=r.parameters!==void 0?r.parameters[m.output]:m.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",E)),l.push(m),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){let f=d[0],h=d[1],m=d[2],v=d[3],g=d[4],p=[];for(let M=0,S=f.length;M<S;M++){let D=f[M],w=h[M],I=m[M],_=v[M],b=g[M];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();let j=i._createAnimationTracks(D,w,I,_,b);if(j)for(let C=0;C<j.length;C++)p.push(j[C])}let E=new Yc(s,void 0,p);return Wi(E,r),E})}createNodeMesh(e){let t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){let o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){let t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));let c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){let u=l[0],d=l[1],f=l[2];f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,TF)});for(let h=0,m=d.length;h<m;h++)u.add(d[h]);if(u.userData.pivot!==void 0&&d.length>0){let h=u.userData.pivot,m=d[0];u.pivot=new N().fromArray(h),u.position.x-=h[0],u.position.y-=h[1],u.position.z-=h[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new aa:l.length>1?u=new mi:l.length===1?u=l[0]:u=new en,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Wi(u,s),s.extensions&&no(i,u,s),s.matrix!==void 0){let d=new Ve;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){let d=r.associations.get(u);r.associations.set(u,Tt({},d))}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,s=new mi;i.name&&(s.name=r.createUniqueName(i.name)),Wi(s,i),i.extensions&&no(t,s,i);let o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++){let f=c[u];f.parent!==null?s.add(Eb(f)):s.add(f)}let l=u=>{let d=new Map;for(let[f,h]of r.associations)(f instanceof wn||f instanceof jn)&&d.set(f,h);return u.traverse(f=>{let h=r.associations.get(f);h!=null&&d.set(f,h)}),d};return r.associations=l(s),s})}_createAnimationTracks(e,t,i,r,s){let o=[],a=e.name?e.name:e.uuid,c=[];es[s.path]===es.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(es[s.path]){case es.weights:l=Ui;break;case es.rotation:l=Bi;break;case es.translation:case es.scale:l=Vi;break;default:i.itemSize===1?l=Ui:l=Vi;break}let u=r.interpolation!==void 0?_F[r.interpolation]:Gs,d=this._getArrayFromAccessor(i);for(let f=0,h=c.length;f<h;f++){let m=new l(c[f]+"."+es[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Vv(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Bi?Uv:Eh;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function wF(n,e,t){let i=e.attributes,r=new Vn;if(i.POSITION!==void 0){let a=t.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){let u=Vv(Ma[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let a=new N,c=new N;for(let l=0,u=s.length;l<u;l++){let d=s[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],h=f.min,m=f.max;if(h!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(m[2]))),f.normalized){let v=Vv(Ma[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;let o=new Tn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function wb(n,e,t){let i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){n.setAttribute(a,c)})}for(let o in i){let a=Bv[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){let o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return Ke.workingColorSpace!==an&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Wi(n,e),wF(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?EF(n,e.targets,t):n})}var Gv=90,DF=6371,Cb=160,CF=3e4,zv=Gv+1,ba=class n{scene=new kc;camera=new Bt(75,1,.1,1e3);renderer=new ph({antialias:!0});targetPosition=new N;raycaster=new rl;pointer=new De;pointerDown=new De;followCameraDistance=Cb;trajectoryMaterial=new pr({vertexColors:!0});liveConnectorMaterial=new pr({color:9109759});controls;iss;hitSphere;trajectoryLine;liveConnector;liveConnectorStart;resizeObserver;initialized=!1;initialCameraPositioned=!1;followingIss=!1;cameraFollowDistance=this.followCameraDistance;followResumeTimer;async initialize(e){this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=At,e.appendChild(this.renderer.domElement),this.camera.position.set(0,0,250),this.controls=new vh(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=-.01,this.controls.enablePan=!1,this.controls.minDistance=zv,this.renderer.domElement.addEventListener("pointerdown",this.recordPointerDown),this.renderer.domElement.addEventListener("pointermove",this.stopFollowingOnOrbit),this.renderer.domElement.addEventListener("pointerup",this.selectIss),this.renderer.domElement.addEventListener("wheel",this.captureFollowZoom,{passive:!0}),this.scene.add(new nl(16777215,.8)),this.scene.add(new $r("#fcffbe",1));let t=new $r("#bee2ff",1);t.position.set(0,120,-180),this.scene.add(t),await this.addEarth(),await this.addIssModel(),this.resizeObserver=new ResizeObserver(()=>this.resize(e)),this.resizeObserver.observe(e),this.resize(e),this.initialized=!0,this.renderer.setAnimationLoop(()=>this.render())}update(e,t){this.initialized&&(e&&(this.targetPosition.copy(this.toCartesian(e)),this.positionInitialCamera()),this.replaceTrajectory(t))}destroy(){this.resizeObserver?.disconnect(),this.renderer.setAnimationLoop(null),this.controls?.dispose(),this.renderer.domElement.removeEventListener("pointerdown",this.recordPointerDown),this.renderer.domElement.removeEventListener("pointermove",this.stopFollowingOnOrbit),this.renderer.domElement.removeEventListener("pointerup",this.selectIss),this.renderer.domElement.removeEventListener("wheel",this.captureFollowZoom),this.followResumeTimer&&clearTimeout(this.followResumeTimer),this.trajectoryMaterial.dispose(),this.liveConnectorMaterial.dispose(),this.scene.traverse(e=>{e instanceof Rt&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(i=>i.dispose()))}),this.renderer.dispose()}async addEarth(){let[e,t,i,r]=await Promise.all([this.loadTextAsset("shaders/vertex.glsl"),this.loadTextAsset("shaders/fragment.glsl"),this.loadTextAsset("shaders/atmosVertex.glsl"),this.loadTextAsset("shaders/atmosFragment.glsl")]),o=new Kc().setPath(this.assetUrl("textures/environmentMaps/")).load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);this.scene.background=o,this.scene.environment=o;let a=new qs().load(this.assetUrl("images/earth_atmos_2048.jpg")),c=new Rt(new Ws(Gv,32,32),new gn({vertexShader:e,fragmentShader:t,uniforms:{uEarthTexture:{value:a},uTextureLongitudeOffset:{value:.5}}}));this.scene.add(c),this.scene.add(new Rt(new Ws(95,32,32),new gn({vertexShader:i,fragmentShader:r,blending:al,side:cn})))}async addIssModel(){let e=await new _h().loadAsync(this.assetUrl("models/iss-station.gltf"));this.iss=e.scene,this.iss.scale.setScalar(2),this.scene.add(this.iss),this.hitSphere=new Rt(new Ws(7,16,16),new Hn({transparent:!0,opacity:0,depthWrite:!1})),this.scene.add(this.hitSphere)}replaceTrajectory(e){if(this.trajectoryLine?.removeFromParent(),this.trajectoryLine?.geometry.dispose(),this.liveConnector?.removeFromParent(),this.liveConnector?.geometry.dispose(),e.length<2){this.trajectoryLine=void 0,this.liveConnector=void 0,this.liveConnectorStart=void 0;return}let t=e.map(r=>this.toCartesian(r)),i=new Ht().setFromPoints(t);i.setAttribute("color",this.createTrajectoryColors(t.length)),this.trajectoryLine=new Fi(i,this.trajectoryMaterial),this.scene.add(this.trajectoryLine),this.liveConnectorStart=t.at(-1)?.clone(),this.liveConnectorStart&&(this.liveConnector=new Fi(new Ht().setFromPoints([this.liveConnectorStart,this.liveConnectorStart]),this.liveConnectorMaterial),this.scene.add(this.liveConnector))}toCartesian(e){let t=Kr.degToRad(e.latitude),i=Kr.degToRad(e.longitude),r=Gv*(1+e.altitudeKm/DF);return new N(-r*Math.cos(t)*Math.cos(i),r*Math.sin(t),r*Math.cos(t)*Math.sin(i))}render(){this.iss&&(this.iss.position.lerp(this.targetPosition,.035),this.iss.lookAt(0,0,0),this.hitSphere?.position.copy(this.iss.position),this.updateLiveConnector(),this.updateCameraFollow()),this.controls?.update(),this.renderer.render(this.scene,this.camera)}resize(e){let{width:t,height:i}=e.getBoundingClientRect();t===0||i===0||(this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i))}async loadTextAsset(e){let t=await fetch(this.assetUrl(e));if(!t.ok)throw new Error(`Unable to load scene asset: ${e}.`);return t.text()}assetUrl(e){return new URL(e,document.baseURI).toString()}recordPointerDown=e=>{this.pointerDown.set(e.clientX,e.clientY)};selectIss=e=>{if(!this.hitSphere||e.button!==0||this.pointerDown.distanceTo(new De(e.clientX,e.clientY))>5)return;let t=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),this.raycaster.setFromCamera(this.pointer,this.camera),this.raycaster.intersectObject(this.hitSphere).length>0&&(this.followingIss=!0,this.cameraFollowDistance=Math.max(this.camera.position.length(),zv),this.controls?.target.set(0,0,0),this.clearFollowResumeTimer())};stopFollowingOnOrbit=e=>{e.buttons!==0&&this.pointerDown.distanceTo(new De(e.clientX,e.clientY))>5&&(this.followingIss=!1,this.controls?.target.set(0,0,0),this.scheduleFollowResume())};captureFollowZoom=()=>{this.followingIss&&this.controls&&(this.cameraFollowDistance=this.camera.position.distanceTo(this.controls.target))};updateCameraFollow(){if(!this.followingIss||!this.iss||!this.controls)return;let e=this.iss.position.clone().normalize(),t=this.camera.position.clone().normalize().lerp(e,.05).normalize();this.camera.position.copy(t.multiplyScalar(this.cameraFollowDistance)),this.controls.target.set(0,0,0)}updateLiveConnector(){if(!this.liveConnector||!this.liveConnectorStart||!this.iss)return;let e=this.liveConnector.geometry.getAttribute("position");e.setXYZ(0,this.liveConnectorStart.x,this.liveConnectorStart.y,this.liveConnectorStart.z),e.setXYZ(1,this.iss.position.x,this.iss.position.y,this.iss.position.z),e.needsUpdate=!0,this.liveConnector.geometry.computeBoundingSphere()}createTrajectoryColors(e){let t=new Float32Array(e*3),i=new Ne;for(let r=0;r<e;r+=1){let s=e>1?r/(e-1):0;i.setHSL(s*.75,1,.5),t.set([i.r,i.g,i.b],r*3)}return new It(t,3)}scheduleFollowResume(){this.clearFollowResumeTimer(),this.followResumeTimer=setTimeout(()=>{this.followingIss=!0,this.cameraFollowDistance=Math.max(this.camera.position.length(),zv),this.controls?.target.set(0,0,0),this.followResumeTimer=void 0},CF)}clearFollowResumeTimer(){this.followResumeTimer&&(clearTimeout(this.followResumeTimer),this.followResumeTimer=void 0)}positionInitialCamera(){this.initialCameraPositioned||!this.controls||(this.camera.position.copy(this.targetPosition.clone().normalize().multiplyScalar(Cb)),this.controls.target.set(0,0,0),this.controls.update(),this.initialCameraPositioned=!0)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=nt({token:n,factory:n.\u0275fac})};var IF=["canvas"],Sh=class n{constructor(e){this.scene=e}scene;position=null;trajectory=[];canvas;ready=!1;ngAfterViewInit(){this.scene.initialize(this.canvas.nativeElement).then(()=>{this.ready=!0,this.syncScene()}).catch(e=>{console.error("Unable to initialize the ISS scene.",e)})}ngOnChanges(){this.syncScene()}ngOnDestroy(){this.scene.destroy()}syncScene(){this.ready&&this.scene.update(this.position,this.trajectory)}static \u0275fac=function(t){return new(t||n)(ir(ba))};static \u0275cmp=li({type:n,selectors:[["app-iss-scene"]],viewQuery:function(t,i){if(t&1&&ed(IF,7),t&2){let r;pg(r=mg())&&(i.canvas=r.first)}},inputs:{position:"position",trajectory:"trajectory"},features:[gg([ba]),ju],decls:2,vars:0,consts:[["canvas",""],["aria-label","Three-dimensional ISS tracker",1,"scene-canvas"]],template:function(t,i){t&1&&rr(0,"div",1,0)},styles:[".scene-canvas[_ngcontent-%COMP%]{inset:0;overflow:hidden;position:fixed}"]})};var Mh=class n{isOpen=wi(!1);open(){this.isOpen.set(!0)}close(){this.isOpen.set(!1)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=li({type:n,selectors:[["app-iss-sidebar"]],decls:22,vars:2,consts:[[1,"menu"],["type","button","aria-label","Open ISS information",1,"openbtn",3,"click"],["aria-label","ISS information",1,"sidebar"],["type","button","aria-label","Close ISS information",1,"closebtn",3,"click"],[1,"card","content"],[1,"card-img"],[1,"container"],["href","https://en.wikipedia.org/wiki/International_Space_Station","target","_blank","rel","noopener"],["width","240","height","135","src",Wm`https://ustream.tv/embed/17074538`,"scrolling","no","allowfullscreen","","title","ISS live feed"],[1,"twitter"],["href","https://twitter.com/Space_Station","target","_blank","rel","noopener"]],template:function(t,i){t&1&&(xt(0,"div",0)(1,"button",1),uc("click",function(){return i.open()}),Et(2,"\u2630"),Dt()(),xt(3,"aside",2)(4,"button",3),uc("click",function(){return i.close()}),Et(5,"\xD7"),Dt(),xt(6,"div",4),rr(7,"div",5),xt(8,"div",6)(9,"h2"),Et(10,"International Space Station (ISS)"),Dt(),xt(11,"p"),Et(12," The ISS is a modular space station in low Earth orbit operated by an international partnership. "),xt(13,"sup")(14,"a",7),Et(15,"Wikipedia"),Dt()()(),xt(16,"div"),Et(17," Live Feed "),rr(18,"iframe",8),Dt(),xt(19,"p",9)(20,"a",10),Et(21,"Tweets by Space_Station"),Dt()()()()()),t&2&&(On(3),td("sidebar--open",i.isOpen()))},encapsulation:2})};function RF(n,e){if(n&1&&(xt(0,"section",0)(1,"table")(2,"thead")(3,"tr")(4,"th",1),Et(5,"Current Stats"),Dt()()(),xt(6,"tbody")(7,"tr")(8,"td"),Et(9,"Latitude:"),Dt(),xt(10,"td"),Et(11),nd(12,"number"),Dt()(),xt(13,"tr")(14,"td"),Et(15,"Longitude:"),Dt(),xt(16,"td"),Et(17),nd(18,"number"),Dt()(),xt(19,"tr")(20,"td"),Et(21,"Altitude:"),Dt(),xt(22,"td"),Et(23),Dt()(),xt(24,"tr")(25,"td"),Et(26,"Google Maps:"),Dt(),xt(27,"td")(28,"a",2),Et(29,"Link"),Dt()()()()()()),n&2){let t=hg();On(11),Ps(id(12,4,t.position.latitude,"1.4-4")),On(6),Ps(id(18,7,t.position.longitude,"1.4-4")),On(6),dc("",t.position.altitudeKm," km"),On(5),Ju("href",t.mapsUrl,jm)}}var bh=class n{position=null;get mapsUrl(){if(!this.position)return"";let{latitude:e,longitude:t}=this.position;return`https://www.google.com/maps/place/${e},${t}/@${e},${t},8z`}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=li({type:n,selectors:[["app-iss-stats"]],inputs:{position:"position"},decls:1,vars:1,consts:[["id","stats","aria-live","polite"],["colspan","2"],["target","_blank","rel","noopener",3,"href"]],template:function(t,i){t&1&&Ao(0,RF,30,10,"section",0),t&2&&Io(i.position?0:-1)},dependencies:[Mg],encapsulation:2})};function jv(n){n||(n=ve(Nn));let e=new tt(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(rp(e))}var Nb="https://api.wheretheiss.at/v1/satellites/25544",NF=`${Nb}/positions`,Ab=5700,Ib=300,Rb=10,Th=class n{http=ve(vd);getCurrentPosition(){return this.http.get(Nb).pipe(un(e=>this.toIssPosition(e)))}getHistoricalTrajectory(e){let t=this.createTrajectoryTimestamps(e),i=this.chunkTimestamps(t).map(r=>this.http.get(NF,{params:{timestamps:r.join(",")}}));return Qh(i).pipe(un(r=>r.flat().map(s=>this.toHistoricalPosition(s)).sort((s,o)=>s.timestamp-o.timestamp)))}toIssPosition(e){return this.toHistoricalPosition(e)}toHistoricalPosition(e){if(!Number.isFinite(e.latitude)||!Number.isFinite(e.longitude)||!Number.isFinite(e.altitude))throw new Error("Where the ISS At returned invalid ISS coordinates.");return{latitude:e.latitude,longitude:e.longitude,altitudeKm:e.altitude,timestamp:e.timestamp}}createTrajectoryTimestamps(e){let t=e-Ab,i=Ab/Ib;return Array.from({length:i+1},(r,s)=>t+s*Ib)}chunkTimestamps(e){let t=[];for(let i=0;i<e.length;i+=Rb)t.push(e.slice(i,i+Rb));return t}static \u0275fac=function(t){return new(t||n)};static \u0275prov=nt({token:n,factory:n.\u0275fac,providedIn:"root"})};var PF=5e3,LF=360,wh=class n{api=ve(Th);destroyRef=ve(Nn);currentPosition=wi(null);trajectory=wi([]);error=wi(null);loading=wi(!0);historicalTrajectoryRequested=!1;constructor(){ep(0,PF).pipe(Kl(()=>this.api.getCurrentPosition().pipe(Aa(e=>(this.error.set(e instanceof Error?e.message:"Unable to retrieve the ISS position."),this.loading.set(!1),Fl)))),jv(this.destroyRef)).subscribe(e=>this.updatePosition(e))}loadHistoricalTrajectory(e){this.api.getHistoricalTrajectory(e).pipe(Aa(t=>(this.error.set(t instanceof Error?t.message:"Unable to retrieve the ISS trajectory."),Fl)),jv(this.destroyRef)).subscribe(t=>{this.trajectory.update(i=>this.mergeTrajectory(t,i))})}updatePosition(e){this.currentPosition.set(e),this.error.set(null),this.loading.set(!1),this.trajectory.update(t=>t.at(-1)?.timestamp===e.timestamp?t:this.mergeTrajectory(t,[e])),this.historicalTrajectoryRequested||(this.historicalTrajectoryRequested=!0,this.loadHistoricalTrajectory(e.timestamp))}mergeTrajectory(e,t){let i=new Map;return[...e,...t].forEach(r=>i.set(r.timestamp,r)),[...i.values()].sort((r,s)=>r.timestamp-s.timestamp).slice(-LF)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=nt({token:n,factory:n.\u0275fac,providedIn:"root"})};var Dh=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=li({type:n,selectors:[["app-footer"]],decls:7,vars:0,consts:[[1,"footer"],["href","https://github.com/orlandocarnate/iss-tracker","aria-label","ISS Tracker on GitHub"],[1,"gitLogo"],["href","mailto:orlando3d@outlook.com"]],template:function(t,i){t&1&&(xt(0,"footer",0),Et(1," Orlando Carnate \xA0\xA0|\xA0\xA0 "),xt(2,"a",1),rr(3,"span",2),Dt(),Et(4," \xA0\xA0|\xA0\xA0 "),xt(5,"a",3),Et(6,"orlando3d@outlook.com"),Dt()())},encapsulation:2})};function OF(n,e){n&1&&(As(0,"p",2),Et(1),Ro()),n&2&&(On(),Ps(e))}function FF(n,e){n&1&&(As(0,"p",3),Et(1,"Loading ISS position\u2026"),Ro())}var Ch=class n{tracker=ve(wh);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=li({type:n,selectors:[["app-root"]],decls:6,vars:5,consts:[[3,"position","trajectory"],[3,"position"],["role","alert",1,"tracker-error"],[1,"tracker-loading"]],template:function(t,i){if(t&1&&(cc(0,"app-iss-scene",0)(1,"app-iss-stats",1)(2,"app-iss-sidebar"),Ao(3,OF,2,1,"p",2),Ao(4,FF,2,0,"p",3),cc(5,"app-footer")),t&2){let r;ac("position",i.tracker.currentPosition())("trajectory",i.tracker.trajectory()),On(),ac("position",i.tracker.currentPosition()),On(2),Io((r=i.tracker.error())?3:-1,r),On(),Io(i.tracker.loading()?4:-1)}},dependencies:[Sh,Mh,bh,Dh],encapsulation:2})};Rg(Ch,_S).catch(n=>{console.error("Unable to bootstrap the ISS tracker.",n)});
