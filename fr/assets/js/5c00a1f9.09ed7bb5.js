"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[9190],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return h}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(r),h=i,d=f["".concat(l,".").concat(h)]||f[h]||p[h]||a;return r?t.createElement(d,c(c({ref:n},u),{},{components:r})):t.createElement(d,c({ref:n},u))}));function h(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=r[s];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7601:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),c=["components"],o={title:"Refine Checkers",sidebar_label:"Checkers"},l=void 0,s={unversionedId:"refine/api/Checkers",id:"refine/api/Checkers",title:"Refine Checkers",description:"The core of Refine is the Checker type. Checkers are essentially just functions which take in a mixed (for Flow) or unknown (for TypeScript) value and return  a CheckResult...",source:"@site/docs/refine/api/Checkers.md",sourceDirName:"refine/api",slug:"/refine/api/Checkers",permalink:"/fr/docs/refine/api/Checkers",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/refine/api/Checkers.md",tags:[],version:"current",frontMatter:{title:"Refine Checkers",sidebar_label:"Checkers"},sidebar:"refine",previous:{title:"Utilities",permalink:"/fr/docs/refine/api/Utilities"},next:{title:"Primitive Checkers",permalink:"/fr/docs/refine/api/Primitive_Checkers"}},u=[],p={toc:u};function f(e){var n=e.components,r=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The core of ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/Introduction"},"Refine")," is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Checker<T>")," type. Checkers are essentially just functions which take in a ",(0,a.kt)("inlineCode",{parentName:"p"},"mixed")," (for Flow) or ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")," (for TypeScript) value and return  a ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckResult<T>"),"..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"/**\n * a function which checks if a given mixed value matches a type V,\n * returning the value if it does, otherwise a failure message.\n */\ntype Checker<+V> = (\n  value: mixed,\n  // optional path within a parent object tree to the current value\n  path?: $ReadOnlyArray<string>,\n) => CheckResult<V>;\n\n/**\n * the result of checking whether a type matches an expected value\n */\ntype CheckResult<+V> = CheckSuccess<V> | CheckFailure;\n\n/**\n * the result of failing to match a value to its expected type\n */\ntype CheckFailure = $ReadOnly<{\n  type: 'failure',\n  message: string,\n  path: $ReadOnlyArray<string>,\n}>;\n\n/**\n * the result of successfully matching a value to its expected type\n */\ntype CheckSuccess<+V> = $ReadOnly<{\n  type: 'success',\n  value: V,\n  // if using `nullable()` with the `nullWithWarningWhenInvalid` option,\n  // failures that would have failed the check are appended as warnings\n  // here on the success result.\n  warnings: $ReadOnlyArray<CheckFailure>\n}>;\n")),(0,a.kt)("p",null,"The built-in checkers, detailed below, allow for easy composition. This enables building more complex checkers from basic primitives:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// type PersonType = $ReadOnly<{name: string, friends: ?Array<PersonType>}>\n// const Person: Checker<PersonType>\nconst Person = object({\n  name: string(),\n  friends: nullable(array(lazy(() => Person)))\n});\n")),(0,a.kt)("p",null,"Refine provides a number of built-in checkers, see the individual doc pages for more info:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/primitive_checkers"},"Primitive Checkers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/collection_checkers"},"Collection Checkers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/refine/api/advanced_checkers"},"Advanced Checkers"))),(0,a.kt)("p",null,"Additionally, Refine provides some ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/api/utilities"},"utility functions")," for common usecases like json parsing and assertion functions."))}f.isMDXComponent=!0}}]);