"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1891],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=o(t),h=l,k=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return t?a.createElement(k,s(s({ref:n},u),{},{components:t})):a.createElement(k,s({ref:n},u))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var o=2;o<r;o++)s[o]=t[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3208:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),s=["components"],i={title:"Refine Primitive Checkers",sidebar_label:"Primitive Checkers"},c=void 0,o={unversionedId:"refine/api/Primitive_Checkers",id:"refine/api/Primitive_Checkers",title:"Refine Primitive Checkers",description:"The starting place for building a Refine checker is with the primitive combinators.",source:"@site/docs/refine/api/Primitive_Checkers.md",sourceDirName:"refine/api",slug:"/refine/api/Primitive_Checkers",permalink:"/fr/docs/refine/api/Primitive_Checkers",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/refine/api/Primitive_Checkers.md",tags:[],version:"current",frontMatter:{title:"Refine Primitive Checkers",sidebar_label:"Primitive Checkers"},sidebar:"refine",previous:{title:"Checkers",permalink:"/fr/docs/refine/api/Checkers"},next:{title:"Collection Checkers",permalink:"/fr/docs/refine/api/Collection_Checkers"}},u=[{value:"<code>boolean()</code>",id:"boolean",children:[],level:2},{value:"<code>number()</code>",id:"number",children:[],level:2},{value:"<code>string()</code>",id:"string",children:[],level:2},{value:"<code>literal()</code>",id:"literal",children:[],level:2},{value:"<code>stringLiterals()</code>",id:"stringliterals",children:[],level:2},{value:"<code>date()</code>",id:"date",children:[],level:2},{value:"<code>jsonDate()</code>",id:"jsondate",children:[],level:2},{value:"<code>mixed()</code>",id:"mixed",children:[],level:2},{value:"<code>nullable()</code>",id:"nullable",children:[],level:2},{value:"<code>voidable()</code>",id:"voidable",children:[],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The starting place for building a ",(0,r.kt)("a",{parentName:"p",href:"/docs/refine/api/Checkers"},"Refine checker")," is with the primitive combinators."),(0,r.kt)("p",null,"These are the initial building blocks which can be composed into higher order combinators using collections or other custom combinators."),(0,r.kt)("h2",{id:"boolean"},(0,r.kt)("inlineCode",{parentName:"h2"},"boolean()")),(0,r.kt)("p",null,"Validates a value as a ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = boolean();\n\n// test a value\nconst result = check(false);\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: boolean = result.value;\n\n// test an invalid value\nconst failedResult = check(1);\nassert(failedResult.type === 'failure');\n")),(0,r.kt)("h2",{id:"number"},(0,r.kt)("inlineCode",{parentName:"h2"},"number()")),(0,r.kt)("p",null,"Validates a value as a ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = number();\n\n// test a value\nconst result = check(1);\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: number = result.value;\n\n// test an invalid value\nconst failedResult = check(false);\nassert(failedResult.type === 'failure');\n")),(0,r.kt)("h2",{id:"string"},(0,r.kt)("inlineCode",{parentName:"h2"},"string()")),(0,r.kt)("p",null,"Validates a value as a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = string();\n\n// test a value\nconst result = check('test');\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: string = result.value;\n\n// test an invalid value\nconst failedResult = check(false);\nassert(failedResult.type === 'failure');\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")," can also take in a regex argument for validation."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = string(/^users?$/);\n\n// test a value\nconst result = check('user');\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: string = result.value;\n\n// test an invalid value\nconst failedResult = check('buser');\nassert(failedResult.type === 'failure');\n")),(0,r.kt)("h2",{id:"literal"},(0,r.kt)("inlineCode",{parentName:"h2"},"literal()")),(0,r.kt)("p",null,"Validates a value as a given literal type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\n// note: to get Flow to use the literal, we must annotate\nconst check = literal<'add_todo'>('add_todo');\n\n// can also use for null/undefined/true/false literals\nconst checkExactlyNull = literal<null>(null);\n\n// test a value\nconst result = check('add_todo');\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: 'add_todo' = result.value;\n\n// test an invalid value\nconst failedResult = check('remove_todo');\nassert(failedResult.type === 'failure');\n")),(0,r.kt)("h2",{id:"stringliterals"},(0,r.kt)("inlineCode",{parentName:"h2"},"stringLiterals()")),(0,r.kt)("p",null,"Checker to assert if a mixed value matches a union of string literals.\nLegal values are provided as key/values in an object and may be translated by\nproviding different values in the object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const suitChecker = stringLiterals({\n  heart: 'heart',\n  spade: 'spade',\n  club: 'club',\n  diamond: 'diamond',\n});\n\nconst suit: 'heart' | 'spade' | 'club' | 'diamond' = assertion(suitChecker())(x);\n")),(0,r.kt)("h2",{id:"date"},(0,r.kt)("inlineCode",{parentName:"h2"},"date()")),(0,r.kt)("p",null,"Validates a value as a javascript ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")," object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = date();\n\n// test a value\nconst result = check(new Date());\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: Date = result.value;\n\n// test an invalid value\nconst failedResult = check(1);\nassert(failedResult.type === 'failure');\n")),(0,r.kt)("h2",{id:"jsondate"},(0,r.kt)("inlineCode",{parentName:"h2"},"jsonDate()")),(0,r.kt)("p",null,"Similar to date, though also will implicitly coerce ISO date strings to Date objects. This can be particularly helpful when serializing to/from JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = jsonDate();\n\n// test a value\nconst result = check((new Date()).toString());\nassert(result.type === 'success');\n\n// result should typecheck\nconst value: Date = result.value;\n\n// test an invalid value\nconst failedResult = check(1);\nassert(failedResult.type === 'failure');\n")),(0,r.kt)("h2",{id:"mixed"},(0,r.kt)("inlineCode",{parentName:"h2"},"mixed()")),(0,r.kt)("p",null,"Placeholder / default checker to allow skipping checking of certain values. Always succeeds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = mixed();\n\n// test a value\nassert(check(new Date()).type === 'success');\nassert(check(1).type === 'success');\nassert(check('test').type === 'success');\n")),(0,r.kt)("p",null,"This may be useful if you want to skip checking some unknown values..."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// if we don't want to check below a certain level of an object...\nconst Request = object({\n  code: number(),\n  url: string(),\n  params: mixed(), // don't care what this is\n});\n")),(0,r.kt)("h2",{id:"nullable"},(0,r.kt)("inlineCode",{parentName:"h2"},"nullable()")),(0,r.kt)("p",null,"creates a nullable version of a given checker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = nullable(string());\n\n// result type of checking a value is a nullable string\nconst result: ?string = check(null);\n\n// test a value\nassert(check('test').type === 'success');\nassert(check(null).type === 'success');\nassert(check(1).type === 'failure');\n")),(0,r.kt)("p",null,"By default, a value passed to nullable must match the checker spec exactly when it is not null, or it will fail."),(0,r.kt)("p",null,"Passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"nullWithWarningWhenInvalid")," option enables gracefully handling invalid values that are less important. If the provided checker would mark a result as invalid, the new checker will return null."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const Options = object({\n  // this must be a non-null string,\n  // or Options is not valid\n  filename: string(),\n  // if this field is not a string,\n  // it will be null and Options will pass the checker\n  description: nullable(string(), {\n    nullWithWarningWhenInvalid: true,\n  })\n})\n\nconst result = Options({filename: 'test', description: 1});\n\nassert(result.type === 'success');\nassert(result.value.description === null);\n\n// there will be a warning\nassert(result.warnings.length === 1);\n")),(0,r.kt)("h2",{id:"voidable"},(0,r.kt)("inlineCode",{parentName:"h2"},"voidable()")),(0,r.kt)("p",null,"Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"nullable"),", creates a version of a given checker which returns ",(0,r.kt)("inlineCode",{parentName:"p"},"T | void"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = voidable(string());\n\n// test a value\nassert(check('test').type === 'success');\nassert(check(null).type === 'failure');\nassert(check(undefined).type === 'success');\nassert(check(1).type === 'failure');\n")),(0,r.kt)("p",null,"By default, a value passed to nullable must match the checker spec exactly when it is not undefined, or it will fail."),(0,r.kt)("p",null,"Passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"undefinedWithWarningWhenInvalid")," option enables gracefully handling invalid values that are less important. If the provided checker would mark a result as invalid, the new checker will return undefined."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const Options = object({\n  // this must be a non-null string,\n  // or Options is not valid\n  filename: string(),\n  // if this field is not a string,\n  // it will be undefined and Options will pass the checker\n  description: voidable(string(), {\n    undefinedWithWarningWhenInvalid: true,\n  })\n})\n\nconst result = Options({filename: 'test', description: 1});\n\nassert(result.type === 'success');\nassert(result.value.description === undefined);\n\n// there will be a warning\nassert(result.warnings.length === 1);\n")))}p.isMDXComponent=!0}}]);