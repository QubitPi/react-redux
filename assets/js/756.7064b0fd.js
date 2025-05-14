/*! For license information please see 756.7064b0fd.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[756],{2756:(r,a,c)=>{c.r(a),c.d(a,{CanaryRoot:()=>k});var o=c(4440),t=c(4676),e=c(9938),l=c(2208),n=c(556),s=c(5649),i=c(6468);class y{constructor(r,{target:a,config:c,callback:o,skipInitial:t}){this.t=new Set,this.o=!1,this.i=!1,this.h=r,null!==a&&this.t.add(a??r),this.l=c,this.o=t??this.o,this.callback=o,window.MutationObserver?(this.u=new MutationObserver((r=>{this.handleChanges(r),this.h.requestUpdate()})),r.addController(this)):console.warn("MutationController error: browser does not support MutationObserver.")}handleChanges(r){var a;this.value=null==(a=this.callback)?void 0:a.call(this,r,this.u)}hostConnected(){for(const r of this.t)this.observe(r)}hostDisconnected(){this.disconnect()}async hostUpdated(){const r=this.u.takeRecords();(r.length||!this.o&&this.i)&&this.handleChanges(r),this.i=!1}observe(r){this.t.add(r),this.u.observe(r,this.l),this.i=!0,this.h.requestUpdate()}disconnect(){this.u.disconnect()}}var h=Object.defineProperty,v=Object.getOwnPropertyDescriptor,p=(r,a,c,o)=>{for(var t,e=o>1?void 0:o?v(a,c):a,l=r.length-1;l>=0;l--)(t=r[l])&&(e=(o?t(a,c,e):t(e))||e);return o&&e&&h(a,c,e),e};let g=class extends o.s{constructor(){super(...arguments),this.framework="starlight",this.theme="light"}connectedCallback(){super.connectedCallback(),this._handleThemeChange()}render(){return o.x`<slot></slot>`}_handleThemeChange(){const[r]=document.getElementsByTagName("html"),a=["vitepress","nextra"].includes(this.framework),c=r=>a?r.classList.contains("dark")?"dark":"light":r.getAttribute("data-theme")||this.theme;this.theme=c(r),new y(this,{target:r,config:{attributeFilter:[a?"class":"data-theme"]},callback:r=>{var a;const o=null==(a=r[0])?void 0:a.target;if(!o)return this.theme;this.theme=c(o)}})}};g.styles=[n.w,o.i`
      :host {
        font-family: var(
          --canary-font-family-base,
          Arial,
          Helvetica,
          sans-serif
        );
        --canary-font-family-mono: Consolas, Monaco, Lucida Console;
      }
    `,o.i`
      :host {
        --canary-is-light: initial;
        --canary-is-dark: ;

        --l-0: 0%;
        --l-5: 0%;
        --l-10: 10%;
        --l-20: 20%;
        --l-30: 30%;
        --l-40: 40%;
        --l-50: 50%;
        --l-60: 60%;
        --l-70: 70%;
        --l-80: 80%;
        --l-90: 90%;
        --l-95: 95%;
        --l-100: 100%;
      }

      :host([theme="dark"]) {
        --canary-is-light: ;
        --canary-is-dark: initial;

        --l-0: 100%;
        --l-5: 95%;
        --l-10: 90%;
        --l-20: 80%;
        --l-30: 70%;
        --l-40: 60%;
        --l-50: 50%;
        --l-60: 40%;
        --l-70: 30%;
        --l-80: 20%;
        --l-90: 10%;
        --l-95: 5%;
        --l-100: 0%;
      }
    `,o.i`
      :host {
        --_canary-color-primary-c: var(--canary-color-primary-c, 0.1);
        --_canary-color-primary-h: var(--canary-color-primary-h, 270);
        --canary-color-primary-ch: var(--_canary-color-primary-c) var(--_canary-color-primary-h);

        --_canary-color-gray-c: var(--canary-color-gray-c, 0);
        --_canary-color-gray-h: var(--canary-color-gray-h, 0);
        --canary-color-gray-ch: var(--_canary-color-gray-c) var(--_canary-color-gray-h);

        --canary-color-backdrop-overlay: oklch(var(--l-80) var(--_canary-color-gray-ch) / 0.66);

        --canary-color-primary-0: oklch(var(--l-0) var(--canary-color-primary-ch));
        --canary-color-primary-5: oklch(var(--l-5) var(--canary-color-primary-ch));
        --canary-color-primary-10: oklch(var(--l-10) var(--canary-color-primary-ch));
        --canary-color-primary-20: oklch(var(--l-20) var(--canary-color-primary-ch));
        --canary-color-primary-30: oklch(var(--l-30) var(--canary-color-primary-ch));
        --canary-color-primary-40: oklch(var(--l-40) var(--canary-color-primary-ch));
        --canary-color-primary-50: oklch(var(--l-50) var(--canary-color-primary-ch));
        --canary-color-primary-60: oklch(var(--l-60) var(--canary-color-primary-ch));
        --canary-color-primary-70: oklch(var(--l-70) var(--canary-color-primary-ch));
        --canary-color-primary-80: oklch(var(--l-80) var(--canary-color-primary-ch));
        --canary-color-primary-90: oklch(var(--l-90) var(--canary-color-primary-ch));
        --canary-color-primary-95: oklch(var(--l-95) var(--canary-color-primary-ch));
        --canary-color-primary-100: oklch(var(--l-100) var(--canary-color-primary-ch));
        
        --canary-color-gray-0: oklch(var(--l-0) var(--canary-color-gray-ch));
        --canary-color-gray-5: oklch(var(--l-5) var(--canary-color-gray-ch));
        --canary-color-gray-10: oklch(var(--l-10) var(--canary-color-gray-ch));
        --canary-color-gray-20: oklch(var(--l-20) var(--canary-color-gray-ch));
        --canary-color-gray-30: oklch(var(--l-30) var(--canary-color-gray-ch));
        --canary-color-gray-40: oklch(var(--l-40) var(--canary-color-gray-ch));
        --canary-color-gray-50: oklch(var(--l-50) var(--canary-color-gray-ch));
        --canary-color-gray-60: oklch(var(--l-60) var(--canary-color-gray-ch));
        --canary-color-gray-70: oklch(var(--l-70) var(--canary-color-gray-ch));
        --canary-color-gray-80: oklch(var(--l-80) var(--canary-color-gray-ch));
        --canary-color-gray-90: oklch(var(--l-90) var(--canary-color-gray-ch));
        --canary-color-gray-95: oklch(var(--l-95) var(--canary-color-gray-ch));
        --canary-color-gray-100: oklch(var(--l-100) var(--canary-color-gray-ch));
      }
    `],p([(0,t.n)({type:String})],g.prototype,"framework",2),p([function({context:r}){return(a,c)=>{const o=new WeakMap;if("object"==typeof c)return c.addInitializer((function(){o.set(this,new s.i(this,{context:r}))})),{get(){return a.get.call(this)},set(r){var c;return null==(c=o.get(this))||c.setValue(r),a.set.call(this,r)},init(r){var a;return null==(a=o.get(this))||a.setValue(r),r}};{a.constructor.addInitializer((a=>{o.set(a,new s.i(a,{context:r}))}));const t=Object.getOwnPropertyDescriptor(a,c);let e;if(void 0===t){const r=new WeakMap;e={get(){return r.get(this)},set(a){o.get(this).setValue(a),r.set(this,a)},configurable:!0,enumerable:!0}}else{const r=t.set;e={...t,set(a){o.get(this).setValue(a),null==r||r.call(this,a)}}}return void Object.defineProperty(a,c,e)}}}({context:i.br}),(0,t.n)({type:String,reflect:!0})],g.prototype,"theme",2),g=p([(0,e.r)("canary-styles")],g);var d=Object.defineProperty,u=Object.getOwnPropertyDescriptor,m=(r,a,c,o)=>{for(var t,e=o>1?void 0:o?u(a,c):a,l=r.length-1;l>=0;l--)(t=r[l])&&(e=(o?t(a,c,e):t(e))||e);return o&&e&&d(a,c,e),e};let k=class extends o.s{constructor(){super(...arguments),this.framework="starlight",this.query="",this._store=(0,l.y$)(this)}connectedCallback(){super.connectedCallback(),this.addEventListener(l.b8,(r=>{this._store.send(r.detail)}))}firstUpdated(){this.query&&(this._store.send({type:"set_query",data:{text:"..."}}),setTimeout((()=>{this._store.send({type:"set_query",data:{text:this.query}})}),200))}render(){return o.x`<canary-styles framework=${this.framework}>
      <slot></slot>
    </canary-styles>`}};k.styles=n.w,m([(0,t.n)({type:String})],k.prototype,"framework",2),m([(0,t.n)({type:String})],k.prototype,"query",2),k=m([(0,e.r)("canary-root")],k)}}]);