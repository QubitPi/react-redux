/*! For license information please see 546.66d1f4bf.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[546],{1389:(t,e,n)=>{n.d(e,{e:()=>r});var s=n(4440),i=n(7319);const r=(0,i.e)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var n,i;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(n=this.nt)?void 0:n.has(t))&&this.st.add(t);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const t=!!e[s];t===this.st.has(s)||(null==(i=this.nt)?void 0:i.has(s))||(t?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return s.w}})},1546:(t,e,n)=>{n.r(e),n.d(e,{CanaryInput:()=>_});var s=n(4440),i=n(4676),r=n(4715),o=n(1389),a=n(8857),c=n(1674),u=n(3277),l=n(6468),h=n(9938),d=n(556),p=n(7879),b=n(2208),g=n(4435),v=Object.defineProperty,f=Object.getOwnPropertyDescriptor;let y=class extends s.s{render(){return s.x` <span class="loader"></span> `}};y.styles=s.i`
    .loader {
      width: 12px;
      height: 12px;
      border: 1px solid var(--canary-color-gray-40);
      border-bottom-color: transparent;
      border-radius: 50%;
      display: inline-block;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,y=((t,e,n,s)=>{for(var i,r=s>1?void 0:s?f(e,n):e,o=t.length-1;o>=0;o--)(i=t[o])&&(r=(s?i(e,n,r):i(r))||r);return s&&r&&v(e,n,r),r})([(0,h.r)("canary-loading-spinner")],y);var x=Object.defineProperty,m=Object.getOwnPropertyDescriptor,w=(t,e,n,s)=>{for(var i,r=s>1?void 0:s?m(e,n):e,o=t.length-1;o>=0;o--)(i=t[o])&&(r=(s?i(e,n,r):i(r))||r);return s&&r&&x(e,n,r),r};let _=class extends s.s{constructor(){super(...arguments),this.autofocus=!1,this._query={text:"",tags:[]},this._showLoading=!1,this._loadingDebounceTimer=null,this.inputRef=(0,c.e)()}updated(t){var e,n;if(t.has("_execution")){null!==this._loadingDebounceTimer&&clearTimeout(this._loadingDebounceTimer);if((null==(e=this._execution)?void 0:e.status)===p.T.PENDING||(null==(n=this._execution)?void 0:n.status)===p.T.ERROR)return void(this._showLoading=!0);this._loadingDebounceTimer=window.setTimeout((()=>{this._showLoading=!1}),100)}}firstUpdated(){if(this.autofocus){const t=this.inputRef.value;setTimeout((()=>{t.focus({preventScroll:!0})}),1)}}render(){var t,e,n,i;return s.x`
      <div class="container" part="container">
        <slot name="before">
          <div class="i-heroicons-magnifying-glass"></div>
        </slot>
        <input
          ${(0,c.n)(this.inputRef)}
          type="text"
          part="input"
          .value=${this._query.text}
          autocomplete="off"
          spellcheck="false"
          placeholder="Search for anything..."
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          onfocus="this.setSelectionRange(this.value.length,this.value.length);"
          autofocus=${(0,a.o)(this.autofocus||null)}
        />
        <span
          class=${(0,o.e)({hidden:!((null==(t=this._mode)?void 0:t.current)===g.a&&(null==(e=this._execution)?void 0:e.status)===p.T.COMPLETE)})}
        >
          <slot name="action-search"> ${this._renderDefaultSearch()} </slot>
        </span>
        <span
          class=${(0,o.e)({hidden:!((null==(n=this._mode)?void 0:n.current)===g.M&&(null==(i=this._execution)?void 0:i.status)===p.T.COMPLETE&&this._is_question(this._query.text))})}
        >
          <slot name="action-ask"> ${this._renderDefaultAsk()} </slot>
        </span>
        <span class=${(0,o.e)({hidden:!this._showLoading})}>
          <slot name="loading">
            <canary-loading-spinner></canary-loading-spinner>
          </slot>
        </span>
      </div>
    `}_renderDefaultSearch(){return s.x`
      <div class="action">
        <span>Search</span>
        <span class="i-heroicons-backspace"></span>
      </div>
    `}_renderDefaultAsk(){var t;return(null==(t=this._mode)?void 0:t.options.has(g.a))?s.x`
      <div class="action">
        <span>Ask AI</span>
        <kbd>Tab</kbd>
      </div>
    `:s.T}_handleKeyDown(t){var e,n;"Tab"===t.key&&(null==(e=this._mode)?void 0:e.current)===g.M&&(null==(n=this._mode)?void 0:n.options.has(g.a))&&this._is_question(this._query.text)&&(t.preventDefault(),this.dispatchEvent((0,b.lh)({type:"set_mode",data:g.a})))}_handleInput(t){const e=t.target.value;this.dispatchEvent((0,b.lh)({type:"set_query",data:{text:e}}))}_is_question(t){return t.split(" ").length>2||t.endsWith("?")}};_.styles=[d.g,d.w,s.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-backspace{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
.i-heroicons-magnifying-glass{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.border{border-width:1px;}
.outline{outline-style:solid;};
    `,s.i`
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        padding: 1px 12px;
      }

      input {
        width: 100%;
        height: 30px;
        outline: none;
        border: none;
        font-size: 1rem;
        color: var(--canary-color-gray-10);
        background-color: var(--canary-color-gray-100);
      }

      input::placeholder {
        color: var(--canary-color-gray-40);
        font-size: 0.875rem;
      }

      .hidden {
        visibility: hidden;
      }
    `,s.i`
      .action {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;
        font-size: 0.7rem;
        line-height: 1;
      }
      .action span {
        line-height: 1;
        white-space: nowrap;
        color: var(--canary-color-gray-60);
      }
      kbd {
        border: 1px solid var(--canary-color-gray-90);
        padding: 2px 4px;
        border-radius: 4px;

        color: var(--canary-is-light, var(--canary-color-gray-50))
          var(--canary-is-dark, var(--canary-color-gray-20));
      }

      span.i-heroicons-backspace {
        height: 1.5em;
        width: 1.5em;
      }
    `],w([(0,i.n)({type:Boolean})],_.prototype,"autofocus",2),w([(0,u.c)({context:l.qD,subscribe:!0}),(0,r.r)()],_.prototype,"_query",2),w([(0,u.c)({context:l.pC,subscribe:!0}),(0,r.r)()],_.prototype,"_mode",2),w([(0,u.c)({context:l.kF,subscribe:!0}),(0,r.r)()],_.prototype,"_execution",2),w([(0,r.r)()],_.prototype,"_showLoading",2),_=w([(0,h.r)("canary-input")],_)},1674:(t,e,n)=>{n.d(e,{e:()=>d,n:()=>g});var s=n(4440),i=n(7319);const r=(t,e)=>{var n;const s=t._$AN;if(void 0===s)return!1;for(const i of s)null==(n=i._$AO)||n.call(i,e,!1),r(i,e);return!0},o=t=>{let e,n;do{if(void 0===(e=t._$AM))break;n=e._$AN,n.delete(t),t=e}while(0===(null==n?void 0:n.size))},a=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(void 0===n)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),l(e)}};function c(t){void 0!==this._$AN?(o(this),this._$AM=t,a(this)):this._$AM=t}function u(t,e=!1,n=0){const s=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size)if(e)if(Array.isArray(s))for(let a=n;a<s.length;a++)r(s[a],!1),o(s[a]);else null!=s&&(r(s,!1),o(s));else r(this,t)}const l=t=>{t.type==i.t.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=c))};class h extends i.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),a(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,s;t!==this.isConnected&&(this.isConnected=t,t?null==(n=this.reconnected)||n.call(this):null==(s=this.disconnected)||s.call(this)),e&&(r(this,t),o(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const d=()=>new p;class p{}const b=new WeakMap,g=(0,i.e)(class extends h{render(t){return s.T}update(t,[e]){var n;const i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(n=t.options)?void 0:n.host,this.rt(this.ct=t.element)),s.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let n=b.get(e);void 0===n&&(n=new WeakMap,b.set(e,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=b.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},3277:(t,e,n)=>{n.d(e,{c:()=>i});var s=n(5793);function i({context:t,subscribe:e}){return(n,i)=>{"object"==typeof i?i.addInitializer((function(){new s.s(this,{context:t,callback:t=>{n.set.call(this,t)},subscribe:e})})):n.constructor.addInitializer((n=>{new s.s(n,{context:t,callback:t=>{n[i]=t},subscribe:e})}))}}},5793:(t,e,n)=>{n.d(e,{s:()=>i});var s=n(699);class i{constructor(t,e,n,s){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=n,this.subscribe=s??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new s.s(this.context,this.t,this.subscribe))}}},7319:(t,e,n)=>{n.d(e,{e:()=>i,i:()=>r,t:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8857:(t,e,n)=>{n.d(e,{o:()=>i});var s=n(4440);const i=t=>t??s.T}}]);