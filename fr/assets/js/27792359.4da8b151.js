"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[554],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={title:"Refine",sidebar_label:"Refine"},c=void 0,p={unversionedId:"refine/Introduction",id:"refine/Introduction",title:"Refine",description:"## \u2757\ufe0f Preview Documentation",source:"@site/docs/refine/Introduction.md",sourceDirName:"refine",slug:"/refine/Introduction",permalink:"/fr/docs/refine/Introduction",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/refine/Introduction.md",tags:[],version:"current",frontMatter:{title:"Refine",sidebar_label:"Refine"},sidebar:"refine",next:{title:"Utilities",permalink:"/fr/docs/refine/api/Utilities"}},s=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Why would I want to use Refine?",id:"why-would-i-want-to-use-refine",children:[],level:2},{value:"Type Refinement Example",id:"type-refinement-example",children:[],level:2},{value:"Backward Compatible Example",id:"backward-compatible-example",children:[],level:2},{value:"JSON Parser Example",id:"json-parser-example",children:[],level:2},{value:"Usage in Recoil Sync",id:"usage-in-recoil-sync",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("h2",{parentName:"blockquote",id:"\ufe0f-preview-documentation"},"\u2757\ufe0f ",(0,i.kt)("em",{parentName:"h2"},"Preview Documentation")),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"This is preview documentation for the Refine library.")),(0,i.kt)("br",null),"\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Refine will be bundled as part of the Recoil Sync package when released.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Refine")," is a type-refinement / validator combinator library for mixed / unknown values in Flow or TypeScript."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Refine is bundled as part of the Recoil Sync package."),(0,i.kt)("p",null,"To get started learning about Refine, check out the documentation on the core concepts of ",(0,i.kt)("a",{parentName:"p",href:"/docs/refine/api/Utilities"},"Utilities")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/refine/api/Checkers"},"Checkers"),"."),(0,i.kt)("h2",{id:"why-would-i-want-to-use-refine"},"Why would I want to use Refine?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Refine is useful when your code encounters ",(0,i.kt)("inlineCode",{parentName:"li"},"unknown")," TypeScript type or ",(0,i.kt)("inlineCode",{parentName:"li"},"mixed")," Flow type values and you need to ",(0,i.kt)("a",{parentName:"li",href:"/docs/refine/Introduction#type-refinement-example"},"assert those values have a specific static type"),"."),(0,i.kt)("li",{parentName:"ul"},"Refine provides an API for building type-refinement helper functions which can validate that an unknown value conforms to an expected type."),(0,i.kt)("li",{parentName:"ul"},"Refine can validate input values and ",(0,i.kt)("a",{parentName:"li",href:"/docs/refine/Introduction#backward-compatible-example"},"upgrade from previous versions"),".")),(0,i.kt)("h2",{id:"type-refinement-example"},"Type Refinement Example"),(0,i.kt)("p",null,"Coerce unknown types to a strongly typed variable.  ",(0,i.kt)("a",{parentName:"p",href:"/docs/refine/api/Utilities#assertion"},(0,i.kt)("inlineCode",{parentName:"a"},"assertion()"))," will throw if the input doesn't match the expected type while ",(0,i.kt)("a",{parentName:"p",href:"/docs/refine/api/Utilities#coercion"},(0,i.kt)("inlineCode",{parentName:"a"},"coercion()"))," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const myObjectChecker = object({\n  numberProperty: number(),\n  stringProperty: optional(string()),\n  arrayProperty: array(number()),\n});\n\nconst myObjectAssertion = assertion(myObjectChecker);\nconst myObject: CheckerReturnType<myObjectChecker> = myObjectAssertion({\n  numberProperty: 123,\n  stringProperty: 'hello',\n  arrayProperty: [1, 2, 3],\n});\n")),(0,i.kt)("h2",{id:"backward-compatible-example"},"Backward Compatible Example"),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"/docs/refine/api/Advanced_Checkers#match"},(0,i.kt)("inlineCode",{parentName:"a"},"match()"))," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/refine/api/Advanced_Checkers#asType"},(0,i.kt)("inlineCode",{parentName:"a"},"asType()"))," you can upgrade from previous types to the latest version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const myChecker: Checker<{str: string}> = match(\n  object({str: string()}),\n  asType(string(), str => ({str: str})),\n  asType(number(), num => ({str: String(num)})),\n);\n\nconst obj1: {str: string} = coercion(myChecker({str: 'hello'}));\nconst obj2: {str: string} = coercion(myChecker('hello'));\nconst obj3: {str: string} = coercion(myChecker(123));\n")),(0,i.kt)("h2",{id:"json-parser-example"},"JSON Parser Example"),(0,i.kt)("p",null,"Refine wraps ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," to provide a built-in strongly typed parser."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'const myParser = jsonParser(\n    array(object({num: number()}))\n);\n\nconst result = myParser(\'[{"num": 1}, {"num": 2}]\');\n\nif (result != null) {\n  // we can now access values in num typesafe way\n  assert(result[0].num === 1);\n} else {\n  // value failed to match parser spec\n}\n')),(0,i.kt)("h2",{id:"usage-in-recoil-sync"},"Usage in Recoil Sync"),(0,i.kt)("p",null,"Recoil Sync leverages ",(0,i.kt)("strong",{parentName:"p"},"Refine")," for type refinement, input validation, and upgrading types for backward compatibility.  See the library docs for more details."))}m.isMDXComponent=!0}}]);