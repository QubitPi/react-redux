/*! For license information please see 389.fec36871.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51,389],{51:(t,r,n)=>{n.r(r),n.d(r,{CanaryModal:()=>v,MODAL_CLOSE_EVENT:()=>x});var e=n(4440),a=n(4676),s=n(8857),i=n(9938),o=n(1674),c=n(2208),u=n(556),l=n(1389),h=Object.defineProperty,p=Object.getOwnPropertyDescriptor,d=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?p(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&h(r,n,s),s};let g=class extends e.s{constructor(){super(...arguments),this.transition=!1,this.ref=(0,o.e)()}render(){const t={"with-transition":this.transition};return e.x`
      <dialog
        ${(0,o.n)(this.ref)}
        class=${(0,l.e)(t)}
        @click=${this.handleClick}
        part="dialog"
      >
        <slot></slot>
      </dialog>
    `}handleClick(t){const r=this.ref.value;(null==r?void 0:r.open)&&"DIALOG"===t.target.nodeName&&(r.close(),this.dispatchEvent((0,c.lh)({type:"set_query",data:{text:""}})))}};g.styles=[e.i`
      dialog::backdrop {
        background-color: var(--canary-color-backdrop-overlay);
        -webkit-backdrop-filter: blur(var(--canary-backdrop-blur, 0.25rem));
        backdrop-filter: blur(var(--canary-backdrop-blur, 0.25rem));
      }
      dialog {
        margin: 0 auto;
        top: 60px;
        padding: 0;
        border: none;
        outline: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);
      }

      dialog.with-transition {
        transition:
          opacity var(--canary-transition-duration, 0.1s)
            var(--canary-transition-timing, linear),
          transform var(--canary-transition-duration, 0.1s)
            var(--canary-transition-timing, linear);
      }

      dialog.with-transition[open] {
        opacity: 1;
      }

      dialog.with-transition:not([open]) {
        opacity: 0;
      }

      @starting-style {
        dialog.with-transition[open] {
          opacity: 0;
        }
      }
    `],d([(0,a.n)({type:Boolean})],g.prototype,"transition",2),g=d([(0,i.r)("canary-dialog")],g);var b=Object.defineProperty,y=Object.getOwnPropertyDescriptor,m=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?y(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&b(r,n,s),s};const x="modal-close";let v=class extends e.s{constructor(){super(...arguments),this.open=!1,this.transition=!1,this._ref=(0,o.e)()}render(){return e.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog
        .ref=${this._ref}
        transition=${(0,s.o)(this.transition)}
        exportparts="dialog"
      >
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var t;null==(t=this._ref.value)||t.showModal()}_handleModalClose(){var t;null==(t=this._ref.value)||t.close(),this.dispatchEvent((0,c.lh)({type:"set_query",data:{text:""}}))}};v.styles=[u.w,e.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],m([(0,a.n)({type:Boolean})],v.prototype,"open",2),m([(0,a.n)({type:Boolean})],v.prototype,"transition",2),v=m([(0,i.r)("canary-modal")],v)},1389:(t,r,n)=>{n.d(r,{e:()=>s});var e=n(4440),a=n(7319);const s=(0,a.e)(class extends a.i{constructor(t){var r;if(super(t),t.type!==a.t.ATTRIBUTE||"class"!==t.name||(null==(r=t.strings)?void 0:r.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((r=>t[r])).join(" ")+" "}update(t,[r]){var n,a;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in r)r[t]&&!(null==(n=this.nt)?void 0:n.has(t))&&this.st.add(t);return this.render(r)}const s=t.element.classList;for(const e of this.st)e in r||(s.remove(e),this.st.delete(e));for(const e in r){const t=!!r[e];t===this.st.has(e)||(null==(a=this.nt)?void 0:a.has(e))||(t?(s.add(e),this.st.add(e)):(s.remove(e),this.st.delete(e)))}return e.w}})},1674:(t,r,n)=>{n.d(r,{e:()=>p,n:()=>b});var e=n(4440),a=n(7319);const s=(t,r)=>{var n;const e=t._$AN;if(void 0===e)return!1;for(const a of e)null==(n=a._$AO)||n.call(a,r,!1),s(a,r);return!0},i=t=>{let r,n;do{if(void 0===(r=t._$AM))break;n=r._$AN,n.delete(t),t=r}while(0===(null==n?void 0:n.size))},o=t=>{for(let r;r=t._$AM;t=r){let n=r._$AN;if(void 0===n)r._$AN=n=new Set;else if(n.has(t))break;n.add(t),l(r)}};function c(t){void 0!==this._$AN?(i(this),this._$AM=t,o(this)):this._$AM=t}function u(t,r=!1,n=0){const e=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(r)if(Array.isArray(e))for(let o=n;o<e.length;o++)s(e[o],!1),i(e[o]);else null!=e&&(s(e,!1),i(e));else s(this,t)}const l=t=>{t.type==a.t.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=c))};class h extends a.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),o(this),this.isConnected=t._$AU}_$AO(t,r=!0){var n,e;t!==this.isConnected&&(this.isConnected=t,t?null==(n=this.reconnected)||n.call(this):null==(e=this.disconnected)||e.call(this)),r&&(s(this,t),i(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}const p=()=>new d;class d{}const g=new WeakMap,b=(0,a.e)(class extends h{render(t){return e.T}update(t,[r]){var n;const a=r!==this.Y;return a&&void 0!==this.Y&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.Y=r,this.ht=null==(n=t.options)?void 0:n.host,this.rt(this.ct=t.element)),e.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const r=this.ht??globalThis;let n=g.get(r);void 0===n&&(n=new WeakMap,g.set(r,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,r;return"function"==typeof this.Y?null==(t=g.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(r=this.Y)?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},3277:(t,r,n)=>{n.d(r,{c:()=>a});var e=n(5793);function a({context:t,subscribe:r}){return(n,a)=>{"object"==typeof a?a.addInitializer((function(){new e.s(this,{context:t,callback:t=>{n.set.call(this,t)},subscribe:r})})):n.constructor.addInitializer((n=>{new e.s(n,{context:t,callback:t=>{n[a]=t},subscribe:r})}))}}},5389:(t,r,n)=>{n.r(r),n.d(r,{CanarySearchResults:()=>Z});var e=n(4440),a=n(4715),s=n(3277),i=n(6468),o=n(9938),c=n(7879),u=n(556),l=n(4676),h=n(51),p=Object.defineProperty,d=Object.getOwnPropertyDescriptor,g=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?d(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&p(r,n,s),s};let b=class extends e.s{render(){return e.x`
      <button class="container" part="container" @click=${this._handleClick}>
        <slot name="content-before"></slot>
        <div class="content">
          <slot name="url"></slot>
          <div class="title">
            <slot name="title-icon"></slot>
            <slot name="title"></slot>
            <slot name="title-badge"></slot>
          </div>
          <slot name="excerpt"></slot>
          <slot name="sub-results"></slot>
        </div>
        <div class="arrow">
          <div class="i-heroicons-chevron-right"></div>
        </div>
      </button>
    `}_handleClick(t){t.stopPropagation(),t.metaKey||t.ctrlKey?window.open(this.url,"_blank"):(this.dispatchEvent(new CustomEvent(h.MODAL_CLOSE_EVENT,{bubbles:!0,composed:!0})),window.location.href=this.url)}};b.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
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
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;}
.flex-shrink{flex-shrink:1;}
.border{border-width:1px;};
    `,e.i`
      .container {
        cursor: pointer;
        width: 100%;

        position: relative;
        cursor: pointer;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 4px;

        width: 100%;
        padding: 6px 9px;
        border: 1px solid var(--canary-color-gray-90);
        border-radius: 8px;
        background-color: var(--canary-is-light, var(--canary-color-gray-95))
          var(--canary-is-dark, var(--canary-color-gray-80));
      }

      .container:hover {
        background-color: var(--canary-is-light, var(--canary-color-primary-95))
          var(--canary-is-dark, var(--canary-color-primary-70));
      }

      .container:hover .arrow {
        opacity: 0.5;
      }

      .arrow {
        position: absolute;
        top: 45%;
        right: 8px;
        opacity: 0;
      }

      .content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;

        overflow: hidden;
        text-overflow: ellipsis;
      }

      .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }

      .title ::slotted([slot="title-icon"]) {
        flex-shrink: 0;
        opacity: 0.5;
      }
    `],g([(0,l.n)({type:String})],b.prototype,"url",2),b=g([(0,o.r)("canary-search-match-base")],b);var y=n(2551),m=Object.defineProperty,x=Object.getOwnPropertyDescriptor,v=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?x(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&m(r,n,s),s};let f=class extends e.s{render(){const t=(0,y.b2)(this.url);return 0==t.length?this._render_url():this._render_parts(t)}_render_parts(t){return e.x`<div class="paths">
      ${t.map(((r,n)=>n<t.length-1?e.x`
              <span class="path">${r}</span>
              <span class="icon i-heroicons-chevron-right"></span>
            `:e.x`<span class="path">${r}</span>`))}
    </div>`}_render_url(){let t=null;try{t=new URL(this.url).host}catch(k){t=null}return t?e.x`<span class="path">${t}</span>`:e.T}};f.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-chevron-right{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m8.25 4.5l7.5 7.5l-7.5 7.5'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: default */
.static{position:static;}
.hidden{display:none;}
.flex{display:flex;};
    `,e.i`
      .paths {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2px;
        margin-bottom: 2px;

        color: var(--canary-color-gray-30);
        font-size: 0.75rem;
      }

      .path {
        line-height: 1;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    `],v([(0,l.n)({type:String})],f.prototype,"url",2),f=v([(0,o.r)("canary-url-paths")],f);var w=n(7319);class k extends w.i{constructor(t){if(super(t),this.it=e.T,t.type!==w.t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===e.T||null==t)return this._t=void 0,this.it=t;if(t===e.w)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}k.directiveName="unsafeHTML",k.resultType=1;const _=(0,w.e)(k);var $=Object.defineProperty,z=Object.getOwnPropertyDescriptor,A=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?z(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&$(r,n,s),s};let C=class extends e.s{constructor(){super(...arguments),this.last=!1}render(){return e.x`
      <svg viewBox="0 0 24 54">
        <g
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          ${this._paths()}
        </g>
      </svg>
    `}_paths(){return this.last?e.b`<path d="M8 6v21M20 27H8.3"></path>`:e.b`<path d="M8 6v21M20 27H8.3"></path>
      <path d="M8 6v42M20 27H8.3"></path>`}};C.styles=e.i`
    :host {
      display: contents;
    }

    svg {
      width: 1.4em;
      color: var(--canary-is-light, var(--canary-color-gray-80))
        var(--canary-is-dark, var(--canary-color-gray-50));
    }
  `,A([(0,l.n)({type:Boolean})],C.prototype,"last",2),C=A([(0,o.r)("canary-icon-tree")],C);var O=Object.defineProperty,T=Object.getOwnPropertyDescriptor,E=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?T(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&O(r,n,s),s};let M=class extends e.s{constructor(){super(...arguments),this.value=""}render(){return this.value?e.x`
      <span class="title">${_(this._sanitize(this.value))}</span>
    `:e.T}_sanitize(t){return t.replace(/<mark>/g,"__MARK_START__").replace(/<\/mark>/g,"__MARK_END__").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/__MARK_START__/g,"<mark>").replace(/__MARK_END__/g,"</mark>")}};M.styles=[u.w,e.i`
      span {
        color: var(--canary-color-gray-20);
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.2;
        text-align: start;
      }

      mark {
        background-color: transparent;
        color: inherit;
      }
    `],E([(0,l.n)({type:String})],M.prototype,"value",2),M=E([(0,o.r)("canary-snippet-title")],M);var j=Object.defineProperty,P=Object.getOwnPropertyDescriptor,R=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?P(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&j(r,n,s),s};let D=class extends e.s{constructor(){super(...arguments),this.value="",this._maxLength=110}render(){if(!this.value)return e.T;const t=this._strip(this._sanitize(this.value),this._maxLength);return e.x` <span class="excerpt">${_(t)}</span> `}_sanitize(t){return t.replace(/<mark>/g,"__MARK_START__").replace(/<\/mark>/g,"__MARK_END__").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/__MARK_START__/g,"<mark>").replace(/__MARK_END__/g,"</mark>")}_strip(t,r){const n=t.match(/<mark>(.*?)<\/mark>/);if(!n)return t.slice(0,r);const e=n.index,a=n[0].length,s=Math.max(0,e-Math.floor((r-a)/2)),i=Math.min(t.length,s+r);return t.slice(s,i)}};D.styles=[u.w,e.i`
      span {
        line-height: 1;
        white-space: nowrap;
        color: var(--canary-color-gray-20);
        font-size: 0.875rem;
        font-weight: normal;
        opacity: 0.8;
      }

      mark {
        border-radius: 2px;
        background-color: var(--canary-is-light, var(--canary-color-primary-30))
          var(--canary-is-dark, var(--canary-color-primary-20));
        color: var(--canary-color-gray-90);
      }
    `],R([(0,l.n)({type:String})],D.prototype,"value",2),D=R([(0,o.r)("canary-snippet-excerpt")],D);var L=Object.defineProperty,N=Object.getOwnPropertyDescriptor,S=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?N(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&L(r,n,s),s};let B=class extends e.s{render(){if("webpage"!==this.match.type)throw new Error;return e.x`
      <div class="container" part="container">
        <canary-search-match-base
          url=${this.match.url}
          exportparts="container:match-item"
        >
          <canary-url-paths slot="url" .url=${this.match.url}>
          </canary-url-paths>
          <span slot="title-icon" class="i-heroicons-bookmark"></span>
          <canary-snippet-title slot="title" .value=${this.match.title}>
          </canary-snippet-title>
          <canary-snippet-excerpt slot="excerpt" .value=${this.match.excerpt}>
          </canary-snippet-excerpt>
        </canary-search-match-base>
        ${this.match.sub_results.map(((t,r)=>e.x`
            <canary-search-match-base
              url=${t.url}
              exportparts="container:match-item"
            >
              <canary-icon-tree
                slot="content-before"
                .last=${r===this.match.sub_results.length-1}
              >
              </canary-icon-tree>
              <canary-snippet-title
                slot="title"
                class="title"
                .value=${t.title}
              >
              </canary-snippet-title>
              <canary-snippet-excerpt
                slot="excerpt"
                class="excerpt"
                .value=${t.excerpt}
              >
              </canary-snippet-excerpt>
            </canary-search-match-base>
          `))}
      </div>
    `}};B.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-bookmark{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25L4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.5 48.5 0 0 1 11.186 0'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
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
.flex{display:flex;};
    `,e.i`
      .container {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .i-heroicons-bookmark {
        opacity: 0.4;
      }
    `],S([(0,l.n)({type:Object})],B.prototype,"match",2),B=S([(0,o.r)("canary-search-match-webpage")],B);var Y=Object.defineProperty,I=Object.getOwnPropertyDescriptor,H=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?I(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&Y(r,n,s),s};const K="canary-search-match-openapi",U="canary-search-match-github-issue",V="canary-search-match-github-discussion";let q=class extends e.s{render(){return"webpage"===this.match.type?e.x`<canary-search-match-webpage
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-webpage> `:"openapi"===this.match.type?this.is_element_defined(K)?e.x`<canary-search-match-openapi
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-openapi> `:(this._log_element_not_defined(K),e.T):"github_issue"===this.match.type?this.is_element_defined(U)?e.x`<canary-search-match-github-issue
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-github-issue> `:(this._log_element_not_defined(U),e.T):"github_discussion"===this.match.type?this.is_element_defined(V)?e.x`<canary-search-match-github-discussion
        .match=${this.match}
        part="match-group"
        exportparts="match-item"
      >
      </canary-search-match-github-discussion>`:(this._log_element_not_defined(V),e.T):void 0}is_element_defined(t){return void 0!==globalThis.customElements.get(t)}_log_element_not_defined(t){console.error(`${t} is not defined. Please make sure to import it.`)}};q.styles=u.w,H([(0,l.n)({type:Object})],q.prototype,"match",2),q=H([(0,o.r)("canary-search-match")],q);var Q=Object.defineProperty,W=Object.getOwnPropertyDescriptor;let F=class extends e.s{render(){return e.x`
      <div class="container">
        <div class="icon i-heroicons-exclamation-triangle"></div>
        <span>Sorry, something went wrong. Please try again later.</span>
      </div>
    `}};F.styles=[u.g,e.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-exclamation-triangle{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0zM12 15.75h.007v.008H12z'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
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
.flex{display:flex;}
.border{border-width:1px;};
    `,e.i`
      div.container {
        display: flex;
        gap: 8px;
        align-items: center;

        padding: 8px 16px;

        border-radius: 8px;
        border: 1px solid var(--canary-color-gray-95);

        color: var(--canary-color-gray-10);
        font-size: 0.875rem;
      }
    `],F=((t,r,n,e)=>{for(var a,s=e>1?void 0:e?W(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&Q(r,n,s),s})([(0,o.r)("canary-error")],F);var G=Object.defineProperty,J=Object.getOwnPropertyDescriptor,X=(t,r,n,e)=>{for(var a,s=e>1?void 0:e?J(r,n):r,i=t.length-1;i>=0;i--)(a=t[i])&&(s=(e?a(r,n,s):a(s))||s);return e&&s&&G(r,n,s),s};let Z=class extends e.s{render(){if(!this._execution)return e.T;const{matches:t}=this._execution.search;return 0===t.length?e.T:e.x`
      ${this._execution.status===c.T.ERROR?e.x`<canary-error></canary-error>`:e.x`
            <div class="container" part="container">
              ${t.map((t=>e.x`<canary-search-match
                    exportparts="match-group,match-item"
                    .match=${t}
                  ></canary-search-match>`))}
            </div>
          `}
    `}};Z.styles=e.i`
    .container {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
  `,X([(0,s.c)({context:i.kF,subscribe:!0}),(0,a.r)()],Z.prototype,"_execution",2),Z=X([(0,o.r)("canary-search-results")],Z)},5793:(t,r,n)=>{n.d(r,{s:()=>a});var e=n(699);class a{constructor(t,r,n,e){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,r)=>{this.unsubscribe&&(this.unsubscribe!==r&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,r)),this.unsubscribe=r},this.host=t,void 0!==r.context){const t=r;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=r,this.callback=n,this.subscribe=e??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new e.s(this.context,this.t,this.subscribe))}}},7319:(t,r,n)=>{n.d(r,{e:()=>a,i:()=>s,t:()=>e});const e={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},a=t=>(...r)=>({_$litDirective$:t,values:r});class s{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}},8857:(t,r,n)=>{n.d(r,{o:()=>a});var e=n(4440);const a=t=>t??e.T}}]);