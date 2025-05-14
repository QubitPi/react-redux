/*! For license information please see 51.e455ac0e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51],{51:(t,e,i)=>{i.r(e),i.d(e,{CanaryModal:()=>y,MODAL_CLOSE_EVENT:()=>g});var s=i(4440),n=i(4676),r=i(8857),o=i(9938),a=i(1674),l=i(2208),h=i(556),d=i(1389),c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?u(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&c(e,i,r),r};let v=class extends s.s{constructor(){super(...arguments),this.transition=!1,this.ref=(0,a.e)()}render(){const t={"with-transition":this.transition};return s.x`
      <dialog
        ${(0,a.n)(this.ref)}
        class=${(0,d.e)(t)}
        @click=${this.handleClick}
        part="dialog"
      >
        <slot></slot>
      </dialog>
    `}handleClick(t){const e=this.ref.value;(null==e?void 0:e.open)&&"DIALOG"===t.target.nodeName&&(e.close(),this.dispatchEvent((0,l.lh)({type:"set_query",data:{text:""}})))}};v.styles=[s.i`
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
    `],p([(0,n.n)({type:Boolean})],v.prototype,"transition",2),v=p([(0,o.r)("canary-dialog")],v);var _=Object.defineProperty,$=Object.getOwnPropertyDescriptor,f=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?$(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&_(e,i,r),r};const g="modal-close";let y=class extends s.s{constructor(){super(...arguments),this.open=!1,this.transition=!1,this._ref=(0,a.e)()}render(){return s.x`
      <slot name="trigger" @click=${this._handleOpen}></slot>
      <canary-dialog
        .ref=${this._ref}
        transition=${(0,r.o)(this.transition)}
        exportparts="dialog"
      >
        <slot name="content" @modal-close=${this._handleModalClose}></slot>
      </canary-dialog>
    `}_handleOpen(){var t;null==(t=this._ref.value)||t.showModal()}_handleModalClose(){var t;null==(t=this._ref.value)||t.close(),this.dispatchEvent((0,l.lh)({type:"set_query",data:{text:""}}))}};y.styles=[h.w,s.i`
      ::slotted([slot="trigger"]) {
        cursor: pointer;
      }
    `],f([(0,n.n)({type:Boolean})],y.prototype,"open",2),f([(0,n.n)({type:Boolean})],y.prototype,"transition",2),y=f([(0,o.r)("canary-modal")],y)},1389:(t,e,i)=>{i.d(e,{e:()=>r});var s=i(4440),n=i(7319);const r=(0,n.e)(class extends n.i{constructor(t){var e;if(super(t),t.type!==n.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,n;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(i=this.nt)?void 0:i.has(t))&&this.st.add(t);return this.render(e)}const r=t.element.classList;for(const s of this.st)s in e||(r.remove(s),this.st.delete(s));for(const s in e){const t=!!e[s];t===this.st.has(s)||(null==(n=this.nt)?void 0:n.has(s))||(t?(r.add(s),this.st.add(s)):(r.remove(s),this.st.delete(s)))}return s.w}})},1674:(t,e,i)=>{i.d(e,{e:()=>u,n:()=>_});var s=i(4440),n=i(7319);const r=(t,e)=>{var i;const s=t._$AN;if(void 0===s)return!1;for(const n of s)null==(i=n._$AO)||i.call(n,e,!1),r(n,e);return!0},o=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},a=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),d(e)}};function l(t){void 0!==this._$AN?(o(this),this._$AM=t,a(this)):this._$AM=t}function h(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let a=i;a<s.length;a++)r(s[a],!1),o(s[a]);else null!=s&&(r(s,!1),o(s));else r(this,t)}const d=t=>{t.type==n.t.CHILD&&(t._$AP??(t._$AP=h),t._$AQ??(t._$AQ=l))};class c extends n.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),a(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null==(i=this.reconnected)||i.call(this):null==(s=this.disconnected)||s.call(this)),e&&(r(this,t),o(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const u=()=>new p;class p{}const v=new WeakMap,_=(0,n.e)(class extends c{render(t){return s.T}update(t,[e]){var i;const n=e!==this.Y;return n&&void 0!==this.Y&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=null==(i=t.options)?void 0:i.host,this.rt(this.ct=t.element)),s.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const e=this.ht??globalThis;let i=v.get(e);void 0===i&&(i=new WeakMap,v.set(e,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return"function"==typeof this.Y?null==(t=v.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(e=this.Y)?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},7319:(t,e,i)=>{i.d(e,{e:()=>n,i:()=>r,t:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8857:(t,e,i)=>{i.d(e,{o:()=>n});var s=i(4440);const n=t=>t??s.T}}]);