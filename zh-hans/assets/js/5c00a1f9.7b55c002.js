"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[9190],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=l(t),h=i,d=f["".concat(s,".").concat(h)]||f[h]||p[h]||a;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,c=new Array(a);c[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7601:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),c=["components"],o={title:"Refine Checkers",sidebar_label:"Checkers"},s=void 0,l={unversionedId:"refine/api/Checkers",id:"refine/api/Checkers",title:"Refine Checkers",description:"The core of Refine is the Checker type. Checkers are essentially just functions which take in a mixed (for Flow) or unknown (for TypeScript) value and return  a CheckResult...",source:"@site/docs/refine/api/Checkers.md",sourceDirName:"refine/api",slug:"/refine/api/Checkers",permalink:"/zh-hans/docs/refine/api/Checkers",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/refine/api/Checkers.md",tags:[],version:"current",frontMatter:{title:"Refine Checkers",sidebar_label:"Checkers"},sidebar:"refine",previous:{title:"Utilities",permalink:"/zh-hans/docs/refine/api/Utilities"},next:{title:"Primitive Checkers",permalink:"/zh-hans/docs/refine/api/Primitive_Checkers"}},u=[],p={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The core of ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/Introduction"},"Refine")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Checker<T>")," type. Checkers are essentially just functions which take in a ",(0,a.kt)("inlineCode",{parentName:"p"},"mixed")," (for Flow) or ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")," (for TypeScript) value and return  a ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckResult<T>"),"..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * a function which checks if a given mixed value matches a type V,\n * returning the value if it does, otherwise a failure message.\n */\ntype Checker<+V> = (\n  value: mixed,\n  // optional path within a parent object tree to the current value\n  path?: $ReadOnlyArray<string>,\n) => CheckResult<V>;\n\n/**\n * the result of checking whether a type matches an expected value\n */\ntype CheckResult<+V> = CheckSuccess<V> | CheckFailure;\n\n/**\n * the result of failing to match a value to its expected type\n */\ntype CheckFailure = $ReadOnly<{\n  type: 'failure',\n  message: string,\n  path: $ReadOnlyArray<string>,\n}>;\n\n/**\n * the result of successfully matching a value to its expected type\n */\ntype CheckSuccess<+V> = $ReadOnly<{\n  type: 'success',\n  value: V,\n  // if using `nullable()` with the `nullWithWarningWhenInvalid` option,\n  // failures that would have failed the check are appended as warnings\n  // here on the success result.\n  warnings: $ReadOnlyArray<CheckFailure>\n}>;\n")),(0,a.kt)("p",null,"The built-in checkers, detailed below, allow for easy composition. This enables building more complex checkers from basic primitives:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// type PersonType = $ReadOnly<{name: string, friends: ?Array<PersonType>}>\n// const Person: Checker<PersonType>\nconst Person = object({\n  name: string(),\n  friends: nullable(array(lazy(() => Person)))\n});\n")),(0,a.kt)("p",null,"Refine provides a number of built-in checkers, see the individual doc pages for more info:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/primitive_checkers"},"Primitive Checkers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/collection_checkers"},"Collection Checkers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/advanced_checkers"},"Advanced Checkers"))),(0,a.kt)("p",null,"Additionally, Refine provides some ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/api/utilities"},"utility functions")," for common usecases like json parsing and assertion functions."))}f.isMDXComponent=!0}}]);