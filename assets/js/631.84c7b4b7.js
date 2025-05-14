/*! For license information please see 631.84c7b4b7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[631],{5793:(t,e,r)=>{r.d(e,{s:()=>s});var n=r(699);class s{constructor(t,e,r,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=r,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new n.s(this.context,this.t,this.subscribe))}}},7631:(t,e,r)=>{r.r(e),r.d(e,{CanaryTriggerSearchbar:()=>k});var n=r(4440),s=r(4676),a=r(9938);r(5793),r(6468);class i{constructor(t,e){this._handleKeyDown=t=>{(()=>"cmdk"===this._key?"k"===t.key&&(t.metaKey||t.ctrlKey):"slash"===this._key?"/"===t.key:void 0)()&&(t.preventDefault(),this.host.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0})))},(this.host=t).addController(this),this._key=e}hostConnected(){document.addEventListener("keydown",this._handleKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this._handleKeyDown)}}var o=r(556),c=r(4715),u=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h=(t,e,r,n)=>{for(var s,a=n>1?void 0:n?d(e,r):e,i=t.length-1;i>=0;i--)(s=t[i])&&(a=(n?s(e,r,a):s(a))||a);return n&&a&&u(e,r,a),a};const l="canary-media-query";let b=class extends n.s{constructor(){super(...arguments),this.query="",this.matched=!1,this.handleChange=t=>{this.matched=t.matches}}connectedCallback(){if(super.connectedCallback(),!this.query)throw new Error(`'query' is required for '${l}'`);this.mediaQueryList=window.matchMedia(this.query),this.matched=this.mediaQueryList.matches,this.mediaQueryList.addEventListener("change",this.handleChange)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mediaQueryList)||t.removeEventListener("change",this.handleChange)}render(){return n.x`
      ${this.matched?n.x`<slot></slot>`:n.x`<slot name="fallback"></slot>`}
    `}};b.styles=o.w,h([(0,s.n)({type:String})],b.prototype,"query",2),h([(0,c.r)()],b.prototype,"matched",2),b=h([(0,a.r)(l)],b);var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,y=(t,e,r,n)=>{for(var s,a=n>1?void 0:n?g(e,r):e,i=t.length-1;i>=0;i--)(s=t[i])&&(a=(n?s(e,r,a):s(a))||a);return n&&a&&p(e,r,a),a};let k=class extends n.s{constructor(){super(),this.shortcut="cmdk",new i(this,this.shortcut)}render(){return n.x`
      <canary-media-query query="(min-width: 40rem)">
        ${this.desktop()}
        <div slot="fallback">${this.mobile()}</div>
      </canary-media-query>
    `}mobile(){return n.x` <button part="button" class="mobile" aria-label="Search">
      <div part="icon" class="icon i-heroicons-magnifying-glass"></div>
    </button>`}desktop(){return n.x`
      <button part="button" class="desktop" aria-label="Search">
        <div part="icon" class="icon i-heroicons-magnifying-glass"></div>
        <span part="text">Search</span>

        ${"cmdk"===this.shortcut?n.x`
              <kbd part="kbd">
                <kbd class="meta">⌘</kbd>
                <kbd class="key">K</kbd>
              </kbd>
            `:n.x`
              <kbd part="kbd">
                <kbd class="key">/</kbd>
              </kbd>
            `}
      </button>
    `}};k.styles=[o.w,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-heroicons-magnifying-glass{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' color='var(--canary-color-gray-20)' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:var(--canary-color-gray-20);width:1em;height:1em;}
/* layer: default */
.static{position:static;}
.contents{display:contents;}
.flex{display:flex;}
.border{border-width:1px;};
    `,n.i`
      :host {
        display: contents;
      }

      button.mobile {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }

      button.desktop {
        padding-left: 0.75rem;
        padding-right: 0.5rem;

        width: 100%;
        max-width: var(--canary-trigger-searchbar-max-width, 350px);
        height: var(--canary-trigger-searchbar-height, 40px);
      }

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;

        border: 1px solid var(--canary-color-gray-80);
        border-radius: 0.5rem;

        background-color: var(--canary-color-gray-100);
        color: var(--canary-color-gray-10);
      }
      button:hover {
        border-color: var(--canary-color-gray-60);
      }

      button > :last-child {
        margin-inline-start: auto;
      }

      button > kbd {
        display: flex;
        flex-direction: row;
        align-items: center;

        border-radius: 0.25rem;
        gap: 0.25em;
        padding: 0.2rem 0.35rem;

        color: var(--canary-color-gray-0);
        background-color: var(--canary-color-gray-95);
      }

      kbd.meta {
        font-size: 0.85rem;
      }
      kbd.key {
        font-size: 0.65rem;
      }
    `],y([(0,s.n)({type:String})],k.prototype,"shortcut",2),k=y([(0,a.r)("canary-trigger-searchbar")],k)}}]);