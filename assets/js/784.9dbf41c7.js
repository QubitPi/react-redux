/*! For license information please see 784.9dbf41c7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[784],{1674:(t,s,i)=>{i.d(s,{e:()=>l,n:()=>f});var n=i(4440),e=i(7319);const r=(t,s)=>{var i;const n=t._$AN;if(void 0===n)return!1;for(const e of n)null==(i=e._$AO)||i.call(e,s,!1),r(e,s);return!0},a=t=>{let s,i;do{if(void 0===(s=t._$AM))break;i=s._$AN,i.delete(t),t=s}while(0===(null==i?void 0:i.size))},o=t=>{for(let s;s=t._$AM;t=s){let i=s._$AN;if(void 0===i)s._$AN=i=new Set;else if(i.has(t))break;i.add(t),h(s)}};function c(t){void 0!==this._$AN?(a(this),this._$AM=t,o(this)):this._$AM=t}function u(t,s=!1,i=0){const n=this._$AH,e=this._$AN;if(void 0!==e&&0!==e.size)if(s)if(Array.isArray(n))for(let o=i;o<n.length;o++)r(n[o],!1),a(n[o]);else null!=n&&(r(n,!1),a(n));else r(this,t)}const h=t=>{t.type==e.t.CHILD&&(t._$AP??(t._$AP=u),t._$AQ??(t._$AQ=c))};class d extends e.i{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),o(this),this.isConnected=t._$AU}_$AO(t,s=!0){var i,n;t!==this.isConnected&&(this.isConnected=t,t?null==(i=this.reconnected)||i.call(this):null==(n=this.disconnected)||n.call(this)),s&&(r(this,t),a(this))}setValue(t){if(void 0===this._$Ct.strings)this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const l=()=>new p;class p{}const b=new WeakMap,f=(0,e.e)(class extends d{render(t){return n.T}update(t,[s]){var i;const e=s!==this.Y;return e&&void 0!==this.Y&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.Y=s,this.ht=null==(i=t.options)?void 0:i.host,this.rt(this.ct=t.element)),n.T}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const s=this.ht??globalThis;let i=b.get(s);void 0===i&&(i=new WeakMap,b.set(s,i)),void 0!==i.get(this.Y)&&this.Y.call(this.ht,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,s;return"function"==typeof this.Y?null==(t=b.get(this.ht??globalThis))?void 0:t.get(this.Y):null==(s=this.Y)?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},3277:(t,s,i)=>{i.d(s,{c:()=>e});var n=i(5793);function e({context:t,subscribe:s}){return(i,e)=>{"object"==typeof e?e.addInitializer((function(){new n.s(this,{context:t,callback:t=>{i.set.call(this,t)},subscribe:s})})):i.constructor.addInitializer((i=>{new n.s(i,{context:t,callback:t=>{i[e]=t},subscribe:s})}))}}},5784:(t,s,i)=>{i.r(s),i.d(s,{CanarySearch:()=>f});var n=i(4440),e=i(4715),r=i(1674),a=i(3277),o=i(6468),c=i(9938),u=i(4435),h=i(556),d=i(2208),l=Object.defineProperty,p=Object.getOwnPropertyDescriptor,b=(t,s,i,n)=>{for(var e,r=n>1?void 0:n?p(s,i):s,a=t.length-1;a>=0;a--)(e=t[a])&&(r=(n?e(s,i,r):e(r))||r);return n&&r&&l(s,i,r),r};let f=class extends n.s{constructor(){super(...arguments),this.MODE=u.M,this._containerRef=(0,r.e)()}connectedCallback(){super.connectedCallback(),this.dispatchEvent((0,d.lh)({type:"register_mode",data:this.MODE}))}render(){return this._mode&&this._mode.current===this.MODE?n.x`
          <div class="container" part="container">
            <div class="head" part="head">
              <slot name="head"></slot>
            </div>
            <div
              class="scroll-container"
              ${(0,r.n)(this._containerRef)}
              part="scroll-container"
            >
              <div class="body" part="body">
                <slot name="body"></slot>
              </div>
            </div>
          </div>
        `:n.T}};f.styles=[h.g,h.s,n.i`
      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
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
.sticky{position:sticky;}
.static{position:static;}
.flex{display:flex;};
    `,n.i`
      .container {
        display: flex;
        flex-direction: column;
      }

      .head {
        position: sticky;
        top: 0px;
        background-color: var(--canary-color-gray-100);
        z-index: 50;
        padding-left: 12px;
        margin-bottom: 4px;
      }

      .body {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    `],b([(0,a.c)({context:o.pC,subscribe:!0}),(0,e.r)()],f.prototype,"_mode",2),f=b([(0,c.r)("canary-search")],f)},5793:(t,s,i)=>{i.d(s,{s:()=>e});var n=i(699);class e{constructor(t,s,i,n){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,s)),this.unsubscribe=s},this.host=t,void 0!==s.context){const t=s;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=s,this.callback=i,this.subscribe=n??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new n.s(this.context,this.t,this.subscribe))}}},7319:(t,s,i)=>{i.d(s,{e:()=>e,i:()=>r,t:()=>n});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...s)=>({_$litDirective$:t,values:s});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,i){this._$Ct=t,this._$AM=s,this._$Ci=i}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}}}]);