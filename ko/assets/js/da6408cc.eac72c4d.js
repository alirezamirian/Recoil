"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1542],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?t.createElement(m,i(i({ref:n},u),{},{components:r})):t.createElement(m,i({ref:n},u))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5100:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={title:"Refine Utilities",sidebar_label:"Utilities"},l=void 0,s={unversionedId:"refine/api/Utilities",id:"refine/api/Utilities",title:"Refine Utilities",description:"In addition to the core Checker combinators provided by Refine, the library also exposes some utility functions to help with things like JSON parsing and assertion functions.",source:"@site/docs/refine/api/Utilities.md",sourceDirName:"refine/api",slug:"/refine/api/Utilities",permalink:"/ko/docs/refine/api/Utilities",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/refine/api/Utilities.md",tags:[],version:"current",frontMatter:{title:"Refine Utilities",sidebar_label:"Utilities"},sidebar:"refine",previous:{title:"Refine",permalink:"/ko/docs/refine/Introduction"},next:{title:"Checkers",permalink:"/ko/docs/refine/api/Checkers"}},u=[{value:"<code>coercion()</code>",id:"coercion",children:[],level:2},{value:"<code>assertion()</code>",id:"assertion",children:[],level:2},{value:"<code>CheckerReturnType&lt;Checker&gt;</code>",id:"checkerreturntypechecker",children:[],level:2},{value:"<code>jsonParser()</code> / <code>jsonParserEnforced()</code>",id:"jsonparser--jsonparserenforced",children:[],level:2}],p={toc:u};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to the core ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/api/Checkers"},"Checker")," combinators provided by ",(0,a.kt)("a",{parentName:"p",href:"/docs/refine/Introduction"},"Refine"),", the library also exposes some utility functions to help with things like JSON parsing and assertion functions."),(0,a.kt)("h2",{id:"coercion"},(0,a.kt)("inlineCode",{parentName:"h2"},"coercion()")),(0,a.kt)("p",null,"Easily create a function for null-coercing values (with an optional check result callback)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"let callbackResult: ?CheckResult<Date> = null;\n\n// optional callback\nconst onResult = (result: CheckResult<Date>) => {\n  callbackResult = result;\n};\n\n// mixed => ?Date\nconst coerce = coercion(date(), onResult);\n\nconst d = new Date();\n\nassert(coerce(d) === d, 'should resolve to value');\nassert(callbackResult != null, 'should be set');\nassert(callbackResult.type == 'success', 'should succeed');\n")),(0,a.kt)("h2",{id:"assertion"},(0,a.kt)("inlineCode",{parentName:"h2"},"assertion()")),(0,a.kt)("p",null,"Easily create an assertion function from your checker function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// mixed => $ReadOnlyArray<number>;\nconst assertArrayOfNum = assertion(array(number()));\n\ndeclare value: mixed;\n\ntry {\n  const myArray: $ReadOnlyArray<number> = assertArrayOfNum(value);\n} catch {\n  // assertion error if value is invalid\n}\n")),(0,a.kt)("h2",{id:"checkerreturntypechecker"},(0,a.kt)("inlineCode",{parentName:"h2"},"CheckerReturnType<Checker>")),(0,a.kt)("p",null,"To extract the underlying type from a checker function, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckerReturnType<typeof checker>"),"..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const check = array(number());\n\n// $ReadOnlyArray<number>;\ntype MyArray = CheckerReturnType<typeof check>;\n")),(0,a.kt)("h2",{id:"jsonparser--jsonparserenforced"},(0,a.kt)("inlineCode",{parentName:"h2"},"jsonParser()")," / ",(0,a.kt)("inlineCode",{parentName:"h2"},"jsonParserEnforced()")),(0,a.kt)("p",null,"Easily create a JSON parser from your checker function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// ?string => ?$ReadOnlyArray<number>;\nconst parse = jsonParser(array(number()));\n\nconst result = parse('[1,2,3]']);\n")),(0,a.kt)("p",null,"If you would like to throw on invalid / null JSON, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"jsonParserEnforced()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// creates a json parser which will throw on invalid values\nconst parse = jsonParserEnforced(\n  object({a: string(), b: nullable(number()), c: boolean()}),\n\n  // message to append to error message\n  'Configuration is invalid'\n);\n\nconst result = parse('...');\n\n// at this point, result must be correct, or `parse()` would throw...\nresult.a.includes(...);\n")))}d.isMDXComponent=!0}}]);