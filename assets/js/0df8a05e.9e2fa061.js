"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[884],{8845:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(8168),o=n(8587),r=(n(6540),n(5680)),i=["components"],s={id:"typescript-quick-start",title:"TypeScript Quick Start",sidebar_label:"TypeScript Quick Start",hide_title:!0},p=void 0,l={unversionedId:"tutorials/typescript-quick-start",id:"tutorials/typescript-quick-start",title:"TypeScript Quick Start",description:"&nbsp;",source:"@site/../docs/tutorials/typescript.md",sourceDirName:"tutorials",slug:"/tutorials/typescript-quick-start",permalink:"/tutorials/typescript-quick-start",draft:!1,editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/tutorials/typescript.md",tags:[],version:"current",lastUpdatedAt:1737618882,formattedLastUpdatedAt:"Jan 23, 2025",frontMatter:{id:"typescript-quick-start",title:"TypeScript Quick Start",sidebar_label:"TypeScript Quick Start",hide_title:!0},sidebar:"docs",previous:{title:"Quick Start",permalink:"/tutorials/quick-start"},next:{title:"Tutorial: Connect API",permalink:"/tutorials/connect"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Project Setup",id:"project-setup",level:2},{value:"Define Root State and Dispatch Types",id:"define-root-state-and-dispatch-types",level:3},{value:"Define Typed Hooks",id:"define-typed-hooks",level:3},{value:"Application Usage",id:"application-usage",level:2},{value:"Define Slice State and Action Types",id:"define-slice-state-and-action-types",level:3},{value:"Use Typed Hooks in Components",id:"use-typed-hooks-in-components",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:u},y="wrapper";function h(e){var t=e.components,n=(0,o.A)(e,i);return(0,r.yg)(y,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"react-redux-typescript-quick-start"},"React Redux TypeScript Quick Start"),(0,r.yg)("admonition",{title:"What You'll Learn",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"How to set up and use Redux Toolkit and React Redux with TypeScript"))),(0,r.yg)("admonition",{title:"Prerequisites",type:"info"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Knowledge of React ",(0,r.yg)("a",{parentName:"li",href:"https://react.dev/reference/react#"},"Hooks")),(0,r.yg)("li",{parentName:"ul"},"Understanding of ",(0,r.yg)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux terms and concepts")),(0,r.yg)("li",{parentName:"ul"},"Understanding of TypeScript syntax and concepts"))),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"Welcome to the React Redux TypeScript Quick Start tutorial! ",(0,r.yg)("strong",{parentName:"p"},"This tutorial will briefly show how to use TypeScript with Redux Toolkit and React-Redux"),"."),(0,r.yg)("p",null,"This page focuses on just how to set up the TypeScript aspects. For explanations of what Redux is, how it works, and full examples of how to use Redux, see ",(0,r.yg)("a",{parentName:"p",href:"https://redux.js.org/tutorials/index"},"the Redux core docs tutorials"),"."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/"},"React Redux")," is also written in TypeScript as of version 8, and also includes its own type definitions."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux-typescript"},"Redux+TS template for Create-React-App")," comes with a working example of these patterns already configured."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The recently updated ",(0,r.yg)("inlineCode",{parentName:"p"},"@types/react@18")," major version has changed component definitions to remove having ",(0,r.yg)("inlineCode",{parentName:"p"},"children")," as a prop by default. This causes errors if you have multiple copies of ",(0,r.yg)("inlineCode",{parentName:"p"},"@types/react")," in your project. To fix this, tell your package manager to resolve ",(0,r.yg)("inlineCode",{parentName:"p"},"@types/react")," to a single version. Details:"),(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/24304#issuecomment-1094565891"},"https://github.com/facebook/react/issues/24304#issuecomment-1094565891"))),(0,r.yg)("h2",{id:"project-setup"},"Project Setup"),(0,r.yg)("h3",{id:"define-root-state-and-dispatch-types"},"Define Root State and Dispatch Types"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://redux-toolkit.js.org/api/configureStore"},"Redux Toolkit's ",(0,r.yg)("inlineCode",{parentName:"a"},"configureStore")," API")," should not need any additional typings. You will, however, want to extract the ",(0,r.yg)("inlineCode",{parentName:"p"},"RootState")," type and the ",(0,r.yg)("inlineCode",{parentName:"p"},"Dispatch")," type so that they can be referenced as needed. Inferring these types from the store itself means that they correctly update as you add more state slices or modify middleware settings."),(0,r.yg)("p",null,"Since those are types, it's safe to export them directly from your store setup file such as ",(0,r.yg)("inlineCode",{parentName:"p"},"app/store.ts")," and import them directly into other files."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="app/store.ts"',title:'"app/store.ts"'},"import { configureStore } from '@reduxjs/toolkit'\n// ...\n\nconst store = configureStore({\n  reducer: {\n    posts: postsReducer,\n    comments: commentsReducer,\n    users: usersReducer,\n  },\n})\n\n// highlight-start\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<typeof store.getState>\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = typeof store.dispatch\n// highlight-end\n")),(0,r.yg)("h3",{id:"define-typed-hooks"},"Define Typed Hooks"),(0,r.yg)("p",null,"While it's possible to import the ",(0,r.yg)("inlineCode",{parentName:"p"},"RootState")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"AppDispatch")," types into each component, it's ",(0,r.yg)("strong",{parentName:"p"},"better to create typed versions of the ",(0,r.yg)("inlineCode",{parentName:"strong"},"useDispatch")," and ",(0,r.yg)("inlineCode",{parentName:"strong"},"useSelector")," hooks for usage in your application"),". This is important for a couple reasons:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For ",(0,r.yg)("inlineCode",{parentName:"li"},"useSelector"),", it saves you the need to type ",(0,r.yg)("inlineCode",{parentName:"li"},"(state: RootState)")," every time"),(0,r.yg)("li",{parentName:"ul"},"For ",(0,r.yg)("inlineCode",{parentName:"li"},"useDispatch"),", the default ",(0,r.yg)("inlineCode",{parentName:"li"},"Dispatch")," type does not know about thunks. In order to correctly dispatch thunks, you need to use the specific customized ",(0,r.yg)("inlineCode",{parentName:"li"},"AppDispatch")," type from the store that includes the thunk middleware types, and use that with ",(0,r.yg)("inlineCode",{parentName:"li"},"useDispatch"),". Adding a pre-typed ",(0,r.yg)("inlineCode",{parentName:"li"},"useDispatch")," hook keeps you from forgetting to import ",(0,r.yg)("inlineCode",{parentName:"li"},"AppDispatch")," where it's needed.")),(0,r.yg)("p",null,"Since these are actual variables, not types, it's important to define them in a separate file such as ",(0,r.yg)("inlineCode",{parentName:"p"},"app/hooks.ts"),", not the store setup file. This allows you to import them into any component file that needs to use the hooks, and avoids potential circular import dependency issues."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="app/hooks.ts"',title:'"app/hooks.ts"'},"import { useDispatch, useSelector } from 'react-redux'\nimport type { RootState, AppDispatch } from './store'\n\n// highlight-start\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nexport const useAppDispatch = useDispatch.withTypes<AppDispatch>()\nexport const useAppSelector = useSelector.withTypes<RootState>()\n// highlight-end\n")),(0,r.yg)("h2",{id:"application-usage"},"Application Usage"),(0,r.yg)("h3",{id:"define-slice-state-and-action-types"},"Define Slice State and Action Types"),(0,r.yg)("p",null,"Each slice file should define a type for its initial state value, so that ",(0,r.yg)("inlineCode",{parentName:"p"},"createSlice")," can correctly infer the type of ",(0,r.yg)("inlineCode",{parentName:"p"},"state")," in each case reducer."),(0,r.yg)("p",null,"All generated actions should be defined using the ",(0,r.yg)("inlineCode",{parentName:"p"},"PayloadAction<T>")," type from Redux Toolkit, which takes the type of the ",(0,r.yg)("inlineCode",{parentName:"p"},"action.payload")," field as its generic argument."),(0,r.yg)("p",null,"You can safely import the ",(0,r.yg)("inlineCode",{parentName:"p"},"RootState")," type from the store file here. It's a circular import, but the TypeScript compiler can correctly handle that for types. This may be needed for use cases like writing selector functions."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="features/counter/counterSlice.ts"',title:'"features/counter/counterSlice.ts"'},"import { createSlice, PayloadAction } from '@reduxjs/toolkit'\nimport type { RootState } from '../../app/store'\n\n// highlight-start\n// Define a type for the slice state\ninterface CounterState {\n  value: number\n}\n\n// Define the initial state using that type\nconst initialState: CounterState = {\n  value: 0,\n}\n// highlight-end\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  // `createSlice` will infer the state type from the `initialState` argument\n  initialState,\n  reducers: {\n    increment: (state) => {\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    // highlight-start\n    // Use the PayloadAction type to declare the contents of `action.payload`\n    incrementByAmount: (state, action: PayloadAction<number>) => {\n      // highlight-end\n      state.value += action.payload\n    },\n  },\n})\n\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\n// Other code such as selectors can use the imported `RootState` type\nexport const selectCount = (state: RootState) => state.counter.value\n\nexport default counterSlice.reducer\n")),(0,r.yg)("p",null,"The generated action creators will be correctly typed to accept a ",(0,r.yg)("inlineCode",{parentName:"p"},"payload")," argument based on the ",(0,r.yg)("inlineCode",{parentName:"p"},"PayloadAction<T>")," type you provided for the reducer. For example, ",(0,r.yg)("inlineCode",{parentName:"p"},"incrementByAmount")," requires a ",(0,r.yg)("inlineCode",{parentName:"p"},"number")," as its argument."),(0,r.yg)("p",null,"In some cases, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/reduxjs/redux-toolkit/pull/827"},"TypeScript may unnecessarily tighten the type of the initial state"),". If that happens, you can work around it by casting the initial state using ",(0,r.yg)("inlineCode",{parentName:"p"},"as"),", instead of declaring the type of the variable:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"// Workaround: cast state instead of declaring variable type\nconst initialState = {\n  value: 0,\n} as CounterState\n")),(0,r.yg)("h3",{id:"use-typed-hooks-in-components"},"Use Typed Hooks in Components"),(0,r.yg)("p",null,"In component files, import the pre-typed hooks instead of the standard hooks from React-Redux."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-tsx",metastring:'title="features/counter/Counter.tsx"',title:'"features/counter/Counter.tsx"'},"import React, { useState } from 'react'\n\n// highlight-next-line\nimport { useAppSelector, useAppDispatch } from 'app/hooks'\n\nimport { decrement, increment } from './counterSlice'\n\nexport function Counter() {\n  // highlight-start\n  // The `state` arg is correctly typed as `RootState` already\n  const count = useAppSelector((state) => state.counter.value)\n  const dispatch = useAppDispatch()\n  // highlight-end\n\n  // omit rendering logic\n}\n")),(0,r.yg)("h2",{id:"whats-next"},"What's Next?"),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"/using-react-redux/usage-with-typescript"},'the "Usage with TypeScript" page')," for extended details on how to use Redux Toolkit's APIs with TypeScript."))}h.isMDXComponent=!0},5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),y=o,h=u["".concat(p,".").concat(y)]||u[y]||d[y]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);