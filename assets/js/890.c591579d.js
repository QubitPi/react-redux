/*! For license information please see 890.c591579d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[890],{890:(t,e,s)=>{s.r(e),s.d(e,{CanaryContent:()=>b});var i=s(4440),r=s(4715);var n=s(1389),o=s(3277),c=s(6468),a=s(9938),d=s(556),h=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=(t,e,s,i)=>{for(var r,n=i>1?void 0:i?l(e,s):e,o=t.length-1;o>=0;o--)(r=t[o])&&(n=(i?r(e,s,n):r(n))||n);return i&&n&&h(e,s,n),n};let b=class extends i.s{constructor(){super(...arguments),this._query=""}render(){return i.x`
      <div class="container" part="container">
        <div class="head-container" part="head-container">
          <slot name="head"></slot>
        </div>
        <slot name="input"></slot>
        <slot name="mode"></slot>
        <div
          class=${(0,n.e)({footer:!0,hide:!this._query||0===this._footers.length})}
        >
          <div class="footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};var p;b.styles=[d.g,d.w,i.i`
      .container {
        width: 300px;

        outline: none;
        padding-top: 6px;
        padding-bottom: 8px;

        border: none;
        border-radius: 8px;
        box-shadow:
          0 20px 25px -5px rgb(0 0 0 / 0.1),
          0 8px 10px -6px rgb(0 0 0 / 0.1);

        background-color: var(--canary-color-gray-100);
      }

      @media (min-width: 40rem) {
        .container {
          width: var(--canary-content-max-width, 550px);
        }
      }

      .head-container {
        padding-left: 12px;
        padding-right: 12px;
      }
    `,i.i`
      .footer {
        padding-top: 2px;
        padding-right: 6px;
      }

      .hide {
        display: none;
      }
    `],u([(0,o.c)({context:c.qD,subscribe:!0}),(0,r.r)()],b.prototype,"_query",2),u([(p={slot:"footer"},(t,e)=>{const{slot:s,selector:i}=p??{},r="slot"+(s?`[name=${s}]`:":not([name])");return((t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,s),s))(t,e,{get(){var t;const e=null==(t=this.renderRoot)?void 0:t.querySelector(r),s=(null==e?void 0:e.assignedElements(p))??[];return void 0===i?s:s.filter((t=>t.matches(i)))}})})],b.prototype,"_footers",2),b=u([(0,a.r)("canary-content")],b)},1389:(t,e,s)=>{s.d(e,{e:()=>n});var i=s(4440),r=s(7319);const n=(0,r.e)(class extends r.i{constructor(t){var e;if(super(t),t.type!==r.t.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var s,r;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null==(s=this.nt)?void 0:s.has(t))&&this.st.add(t);return this.render(e)}const n=t.element.classList;for(const i of this.st)i in e||(n.remove(i),this.st.delete(i));for(const i in e){const t=!!e[i];t===this.st.has(i)||(null==(r=this.nt)?void 0:r.has(i))||(t?(n.add(i),this.st.add(i)):(n.remove(i),this.st.delete(i)))}return i.w}})},3277:(t,e,s)=>{s.d(e,{c:()=>r});var i=s(5793);function r({context:t,subscribe:e}){return(s,r)=>{"object"==typeof r?r.addInitializer((function(){new i.s(this,{context:t,callback:t=>{s.set.call(this,t)},subscribe:e})})):s.constructor.addInitializer((s=>{new i.s(s,{context:t,callback:t=>{s[r]=t},subscribe:e})}))}}},5793:(t,e,s)=>{s.d(e,{s:()=>r});var i=s(699);class r{constructor(t,e,s,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,e)=>{this.unsubscribe&&(this.unsubscribe!==e&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,e)),this.unsubscribe=e},this.host=t,void 0!==e.context){const t=e;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=e,this.callback=s,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new i.s(this.context,this.t,this.subscribe))}}},7319:(t,e,s)=>{s.d(e,{e:()=>r,i:()=>n,t:()=>i});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}}}]);