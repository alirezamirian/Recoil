"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[8120],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),h=a,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||c;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9159:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),c=(t(7294),t(3905)),o=["components"],s={title:"Advanced Refine Checkers",sidebar_label:"Advanced Checkers"},i=void 0,l={unversionedId:"refine/api/Advanced_Checkers",id:"refine/api/Advanced_Checkers",title:"Advanced Refine Checkers",description:"In addition to collections and primitives, more complex types can be modeled using the following combinator checkers.",source:"@site/docs/refine/api/Advanced_Checkers.md",sourceDirName:"refine/api",slug:"/refine/api/Advanced_Checkers",permalink:"/zh-hans/docs/refine/api/Advanced_Checkers",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/refine/api/Advanced_Checkers.md",tags:[],version:"current",frontMatter:{title:"Advanced Refine Checkers",sidebar_label:"Advanced Checkers"},sidebar:"refine",previous:{title:"Collection Checkers",permalink:"/zh-hans/docs/refine/api/Collection_Checkers"}},u=[{value:"<code>or()</code>",id:"or",children:[],level:2},{value:"<code>union()</code>",id:"union",children:[],level:2},{value:"<code>lazy()</code>: Recursive Collections",id:"lazy-recursive-collections",children:[],level:2},{value:"<code>custom()</code>",id:"custom",children:[],level:2},{value:"<code>asType()</code>",id:"astype",children:[],level:2},{value:"<code>match()</code>",id:"match",children:[],level:2},{value:"<code>constraint()</code>",id:"constraint",children:[],level:2},{value:"<code>withDefault()</code>",id:"withdefault",children:[],level:2}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"In addition to ",(0,c.kt)("a",{parentName:"p",href:"/docs/refine/api/Collection_Checkers"},"collections")," and ",(0,c.kt)("a",{parentName:"p",href:"/docs/refine/api/Primitive_Checkers"},"primitives"),", more complex types can be modeled using the following combinator checkers."),(0,c.kt)("h2",{id:"or"},(0,c.kt)("inlineCode",{parentName:"h2"},"or()")),(0,c.kt)("p",null,"Validates a value as a one of two given checkers."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = or(number(), array(string()));\n\n// result type is correct\nconst value: number | $ReadOnlyArray<string> = check(1);\n\n// test a value\nassert(check(1).type === 'success');\nassert(check(['one']).type === 'success');\nassert(check(true).type === 'failure');\n")),(0,c.kt)("h2",{id:"union"},(0,c.kt)("inlineCode",{parentName:"h2"},"union()")),(0,c.kt)("p",null,"Generalized version of ",(0,c.kt)("inlineCode",{parentName:"p"},"or()")," to multiple values. (Note: there is currently a limitation within flow which requires an explicit type parameter for ",(0,c.kt)("inlineCode",{parentName:"p"},"union"),", thus the motivation for a seperate ",(0,c.kt)("inlineCode",{parentName:"p"},"or()"),")."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"// define checker\nconst check = union(number(), array(string()), boolean());\n\n// test a value\nassert(check(1).type === 'success');\nassert(check(['one']).type === 'success');\nassert(check(true).type === 'success');\nassert(check([1]).type === 'failure');\n")),(0,c.kt)("h2",{id:"lazy-recursive-collections"},(0,c.kt)("inlineCode",{parentName:"h2"},"lazy()"),": Recursive Collections"),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"lazy()")," utility allows for defining recursive checkers."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const Person = object({\n  name: string(),\n  friends: nullable(array(lazy(() => Person))),\n});\n\nconst result = Person({name: 'alice', friends: [{name: 'bob'}]});\n// should succeed to validate\nassert(result.type === 'success');\n")),(0,c.kt)("p",null,"WARNING: recursive references in the values will not work, as the checker will stack overflow."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const Person = object({\n  name: string(),\n  friends: nullable(array(lazy(() => Person))),\n});\n\nconst alice = {name: 'alice', friends: []};\n\n// add self to own friends\nalice.friends.push(alice);\n\n// Error: will stack overflow\nPerson(alice);\n")),(0,c.kt)("h1",{id:"custom-types"},"Custom Types"),(0,c.kt)("h2",{id:"custom"},(0,c.kt)("inlineCode",{parentName:"h2"},"custom()")),(0,c.kt)("p",null,"The ",(0,c.kt)("inlineCode",{parentName:"p"},"custom")," utility makes it simple to define a quick custom type, such as a Class."),(0,c.kt)("p",null,"WARNING: Don't use this with classes requiring type parameters (such as ",(0,c.kt)("inlineCode",{parentName:"p"},"MyClass<T>"),",\nas there is no way to validate that the type parameter is correct via instanceof)."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"class MyClass {}\n\nfunction myClass(): Checker<MyClass> {\n  return custom(\n    value => value instanceof MyClass ? value : null,\n    'value is not a valid instance of MyClass'\n  );\n}\n\nconst check = array(myClass());\nassert(check([new MyClass()]).type === 'success');\nassert(check([3]).type === 'failure');\n")),(0,c.kt)("h2",{id:"astype"},(0,c.kt)("inlineCode",{parentName:"h2"},"asType()")),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"asType()")," will convert from one type to another.  Provide a checker for the expected type and a callback function to convert to a different output type.  For example, you could use this to coerce a value to an opaque type."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"opaque type ID = string;\n\nconst IDChecker: Checker<ID> = asType(string(), s => (s: ID));\n")),(0,c.kt)("h2",{id:"match"},(0,c.kt)("inlineCode",{parentName:"h2"},"match()")),(0,c.kt)("p",null,"This checker is simply an alias for ",(0,c.kt)("inlineCode",{parentName:"p"},"union")," that restricts all input checkers to produce the same output type."),(0,c.kt)("p",null,"Using ",(0,c.kt)("inlineCode",{parentName:"p"},"match()")," and ",(0,c.kt)("a",{parentName:"p",href:"/docs/refine/api/Advanced_Checkers#asType"},(0,c.kt)("inlineCode",{parentName:"a"},"asType()"))," you can upgrade from previous types to the latest version."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const myChecker: Checker<{str: string}> = match(\n  object({str: string()}),\n  asType(string(), str => ({str: str})),\n  asType(number(), num => ({str: String(num)})),\n);\n\nconst obj1: {str: string} = coercion(myChecker({str: 'hello'}));\nconst obj2: {str: string} = coercion(myChecker('hello'));\nconst obj3: {str: string} = coercion(myChecker(123));\n")),(0,c.kt)("h2",{id:"constraint"},(0,c.kt)("inlineCode",{parentName:"h2"},"constraint()")),(0,c.kt)("p",null,"If you would like to require that a value passes a logical predicate, you can use ",(0,c.kt)("inlineCode",{parentName:"p"},"constraint()"),"."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const evenNumber = constraint(\n  number(),\n  n => n % 2 === 0\n);\n\nconst passes = evenNumber(2);\n// passes.type === 'success';\n\nconst fails = evenNumber(1);\n// fails.type === 'failure';\n")),(0,c.kt)("h2",{id:"withdefault"},(0,c.kt)("inlineCode",{parentName:"h2"},"withDefault()")),(0,c.kt)("p",null,"A checker that provides a ",(0,c.kt)("inlineCode",{parentName:"p"},"withDefault()")," value if the provided value is nullable."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const objPropertyWithDefault = object({\n  foo: withDefault(number(), 123),\n});\n\n// result will be `{foo: 123}`.\nconst result = check({});\n")))}d.isMDXComponent=!0}}]);