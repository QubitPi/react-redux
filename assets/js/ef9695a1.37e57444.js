"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2338:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>p,default:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"batch",title:"batch",sidebar_label:"batch()",hide_title:!0,description:"API > batch: batching React rendering updates"},l=void 0,s={unversionedId:"api/batch",id:"api/batch",isDocsHomePage:!1,title:"batch",description:"API > batch: batching React rendering updates",source:"@site/../docs/api/batch.md",sourceDirName:"api",slug:"/api/batch",permalink:"/react-redux/api/batch",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/api/batch.md",tags:[],version:"current",lastUpdatedAt:1681444674,formattedLastUpdatedAt:"4/14/2023",frontMatter:{id:"batch",title:"batch",sidebar_label:"batch()",hide_title:!0,description:"API > batch: batching React rendering updates"},sidebar:"docs",previous:{title:"connect()",permalink:"/react-redux/api/connect"},next:{title:"Troubleshooting",permalink:"/react-redux/troubleshooting"}},p=[{value:"References",id:"references",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"batch"},(0,i.kt)("inlineCode",{parentName:"h1"},"batch()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"batch((fn: () => void))\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"added in v7.0.0")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"If you're using React 18, you do not need to use the ",(0,i.kt)("inlineCode",{parentName:"strong"},"batch")," API"),". React 18 automatically batches ",(0,i.kt)("em",{parentName:"p"},"all")," state updates, no matter where they're queued."))),(0,i.kt)("p",null,"React's ",(0,i.kt)("inlineCode",{parentName:"p"},"unstable_batchedUpdates()")," API allows any React updates in an event loop tick to be batched together into a single render pass. React already uses this internally for its own event handler callbacks. This API is actually part of the renderer packages like ReactDOM and React Native, not the React core itself."),(0,i.kt)("p",null,"Since React-Redux needs to work in both ReactDOM and React Native environments, we've taken care of importing this API from the correct renderer at build time for our own use. We also now re-export this function publicly ourselves, renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"batch()"),". You can use it to ensure that multiple actions dispatched outside of React only result in a single render update, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { batch } from 'react-redux'\n\nfunction myThunk() {\n  return (dispatch, getState) => {\n    // should only result in one combined re-render, not two\n    batch(() => {\n      dispatch(increment())\n      dispatch(increment())\n    })\n  }\n}\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/facebook/react/commit/b41883fc708cd24d77dcaa767cde814b50b457fe"},(0,i.kt)("inlineCode",{parentName:"a"},"unstable_batchedUpdates()")," API from React")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/reactwg/react-18/discussions/21"},"React 18 Working Group: Automatic Batching for Fewer Renders in React 18"))))}u.isMDXComponent=!0}}]);