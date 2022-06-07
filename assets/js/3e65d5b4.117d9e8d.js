"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[953],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var a=n(67294);function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,m=function(e,t){if(null==e)return{};var n,a,m={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(m[n]=e[n]);return m}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}var p=a.createContext({}),d=function(e){return function(t){var n=s(t.components);return a.createElement(e,r({},t,{components:n}))}},s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,m=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=m,x=d["".concat(l,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(x,o(o({ref:t},p),{},{components:n})):a.createElement(x,o({ref:t},p))}));function h(e,t){var n=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var r=n.length,l=new Array(r);l[0]=x;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:m,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},79055:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(87462),m=n(63366),r=(n(67294),n(3905)),l=(n(44256),["components"]),o={id:"reference",title:"Angle Reference",sidebar_label:"Reference"},i=void 0,p={unversionedId:"angle/reference",id:"angle/reference",isDocsHomePage:!1,title:"Angle Reference",description:"Queries",source:"@site/docs/angle/reference.md",sourceDirName:"angle",slug:"/angle/reference",permalink:"/docs/angle/reference",editUrl:"https://github.com/facebookincubator/Glean/tree/main/glean/website/docs/angle/reference.md",tags:[],version:"current",frontMatter:{id:"reference",title:"Angle Reference",sidebar_label:"Reference"},sidebar:"someSidebar",previous:{title:"Debugging",permalink:"/docs/angle/debugging"},next:{title:"Style Guide",permalink:"/docs/angle/style"}},d=[{value:"Queries",id:"queries",children:[],level:2},{value:"Statements",id:"statements",children:[],level:2},{value:"Names",id:"names",children:[],level:2},{value:"Term",id:"term",children:[],level:2},{value:"Primitives",id:"primitives",children:[],level:2}],s={toc:d};function u(e){var t=e.components,n=(0,m.Z)(e,l);return(0,r.mdx)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"queries"},"Queries"),(0,r.mdx)("p",null,"A query produces a set of values. At the outermost level, the values\nreturned are always ",(0,r.mdx)("em",{parentName:"p"},"facts"),", which are returned to the client making\nthe query."),(0,r.mdx)("p",null,"In general, a Glean query takes the form:"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"query")," ::= ","[ ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"where")," ]"," ",(0,r.mdx)("em",{parentName:"p"},"statement\u2080")," ; ...; ",(0,r.mdx)("em",{parentName:"p"},"statement\u2099")),(0,r.mdx)("p",null,"You can think of this declaratively, as in"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"For each substitution of the variables in the query such that ",(0,r.mdx)("em",{parentName:"p"},"statement\u2080"),"..",(0,r.mdx)("em",{parentName:"p"},"statement\u2099")," holds, produce the value of ",(0,r.mdx)("em",{parentName:"p"},"term"))),(0,r.mdx)("p",null,"Or, we can think of it more operationally, which helps with query optimisation:"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"for each value of ",(0,r.mdx)("em",{parentName:"p"},"statement\u2080"),(0,r.mdx)("br",null),"\n...",(0,r.mdx)("br",null),"\nfor each value of ",(0,r.mdx)("em",{parentName:"p"},"statement\u2099"),(0,r.mdx)("br",null),"\nproduce the value of ",(0,r.mdx)("em",{parentName:"p"},"term"))),(0,r.mdx)("p",null,"If ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"where")," is omitted, then the query produces the values of the final statement. For example, a query ",(0,r.mdx)("inlineCode",{parentName:"p"},'src.File "foo/bar"')," is equivalent to ",(0,r.mdx)("inlineCode",{parentName:"p"},'F where F = src.File "foo/bar"'),"."),(0,r.mdx)("p",null,"Note that a query corresponds to a nested loop, where ",(0,r.mdx)("em",{parentName:"p"},"statement\u2080")," is the outermost loop, and ",(0,r.mdx)("em",{parentName:"p"},"statement\u2099")," is the innermost. The ordering of the statements can therefore have a significant effect on performance."),(0,r.mdx)("h2",{id:"statements"},"Statements"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"statement")," ::= ","[ ",(0,r.mdx)("em",{parentName:"p"},"term\u2081")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"=")," ]"," ",(0,r.mdx)("em",{parentName:"p"},"term\u2082")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"match all values of ",(0,r.mdx)("strong",{parentName:"p"},"term\u2081")," against all values of ",(0,r.mdx)("strong",{parentName:"p"},"term\u2082"))),(0,r.mdx)("p",null,"The order is mostly irrelevant; ",(0,r.mdx)("inlineCode",{parentName:"p"},"A = B")," is equivalent to ",(0,r.mdx)("inlineCode",{parentName:"p"},"B = A"),", except that type inference works by inferring the right-hand-side before checking the left-hand-side so this may influence which order you want. You can also use a type signature (",(0,r.mdx)("inlineCode",{parentName:"p"},"A = B : type"),") to help the type checker."),(0,r.mdx)("h2",{id:"names"},"Names"),(0,r.mdx)("p",null,"Glean uses the following classes of names:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("em",{parentName:"li"},"schema name"),", e.g. ",(0,r.mdx)("inlineCode",{parentName:"li"},"example.schema"),", of the form ",(0,r.mdx)("em",{parentName:"li"},"name"),"[.",(0,r.mdx)("em",{parentName:"li"},"name"),"]","*. By convention, the components of a schema name begin with a lower-case letter."),(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("em",{parentName:"li"},"predicate name"),", e.g. ",(0,r.mdx)("inlineCode",{parentName:"li"},"example.schema.Predicate.1")," of the form ",(0,r.mdx)("em",{parentName:"li"},"schema"),".",(0,r.mdx)("em",{parentName:"li"},"predicate"),"[.",(0,r.mdx)("em",{parentName:"li"},"version"),"]",". By convention, ",(0,r.mdx)("em",{parentName:"li"},"predicate")," begins with an upper-case letter. The version can often be omitted, in which case it defaults depending on the context: in a query it defaults to the most recent version, in a schema there is always only one version of a predicate visible in any given scope."),(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("em",{parentName:"li"},"field name"),", e.g. ",(0,r.mdx)("inlineCode",{parentName:"li"},"declaration"),", used to identify fields of a record, or alternatives of a sum type or enumeration.  A field name ",(0,r.mdx)("strong",{parentName:"li"},"must begin with a lower-case letter"),"."),(0,r.mdx)("li",{parentName:"ul"},"A ",(0,r.mdx)("em",{parentName:"li"},"variable"),", e.g. ",(0,r.mdx)("inlineCode",{parentName:"li"},"X"),". Variables ",(0,r.mdx)("strong",{parentName:"li"},"must begin with an upper-case letter")," to distinguish them from field names.")),(0,r.mdx)("p",null,"There is a set of reserved words that can't be used for names. Mostly this is because those words would clash with reserved keywords in code that we generate from the schema, and we don't want to have to do any automatic translation of names that might be confusing. Typically the convention for avoiding these reserved words is to add an underscore to the name, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"class_"),"."),(0,r.mdx)("h2",{id:"term"},"Term"),(0,r.mdx)("p",null,"A term may be fully defined, like ",(0,r.mdx)("inlineCode",{parentName:"p"},"{ true, 123 }")," (a value that we could insert in the database), or it can be partially defined, like ",(0,r.mdx)("inlineCode",{parentName:"p"},'{ A, "b", _ }'),"."),(0,r.mdx)("p",null,"A term is often matched against something that will instantiate its unknown variables. For example, in ",(0,r.mdx)("inlineCode",{parentName:"p"},"cxx.Name X"),", we're instantitating the variable ",(0,r.mdx)("inlineCode",{parentName:"p"},"X")," to each of the keys of the predicate ",(0,r.mdx)("inlineCode",{parentName:"p"},"cxx.Name"),"."),(0,r.mdx)("p",null,"Ultimately the result of a query must be terms that are fully defined, though. If this isn't the case, Glean's query engine will report an error.  For example, a query like ",(0,r.mdx)("inlineCode",{parentName:"p"},"X where 123")," doesn't make sense, because we haven't matched ",(0,r.mdx)("inlineCode",{parentName:"p"},"X")," with anything."),(0,r.mdx)("p",null,"Terms have the following forms:"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"term")," ::=",(0,r.mdx)("br",null),"\n","\xa0","\xa0","    ",(0,r.mdx)("em",{parentName:"p"},"variable")," ",(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"A ",(0,r.mdx)("strong",{parentName:"p"},"variable")," names the terms that match at this position in the query. The variable can be menioned elsewhere in the query; it doesn't usually make sense for a variable to be mentioned only once, since then you might as well just use a wildcard, see below.")),(0,r.mdx)("p",null,"\xa0","\xa0","  ",(0,r.mdx)("inlineCode",{parentName:"p"},"_"),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"A wildcard; matches anything")),(0,r.mdx)("p",null,"\xa0","\xa0","  ",(0,r.mdx)("inlineCode",{parentName:"p"},"never"),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"A pattern that always fails to match.")),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"predicate"),"\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ","[ ",(0,r.mdx)("inlineCode",{parentName:"p"},"->")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ]"," ",(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"All the facts of ",(0,r.mdx)("strong",{parentName:"p"},"predicate")," with keys that match the first ",(0,r.mdx)("strong",{parentName:"p"},"term")," (and values that match the second ",(0,r.mdx)("strong",{parentName:"p"},"term")," if appropriate)")),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("inlineCode",{parentName:"p"},"(")," ",(0,r.mdx)("em",{parentName:"p"},"query")," ",(0,r.mdx)("inlineCode",{parentName:"p"},")")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"All the values of ",(0,r.mdx)("strong",{parentName:"p"},"query"),". Note in particular that ",(0,r.mdx)("strong",{parentName:"p"},"query")," can just be a simple term, but it can also be something like ",(0,r.mdx)("strong",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"where")," ",(0,r.mdx)("strong",{parentName:"p"},"statements"),".")),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"[..]")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"All the elements of the array ",(0,r.mdx)("strong",{parentName:"p"},"term"))),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term\u2081")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"|")," ",(0,r.mdx)("em",{parentName:"p"},"term\u2082")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"When used as a pattern, matches ",(0,r.mdx)("strong",{parentName:"p"},"term\u2081")," or ",(0,r.mdx)("strong",{parentName:"p"},"term\u2082"),". When used as an expression, generates all values of ",(0,r.mdx)("strong",{parentName:"p"},"term\u2081")," and all values of ",(0,r.mdx)("strong",{parentName:"p"},"term\u2082"),".")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: variables mentioned in ",(0,r.mdx)("strong",{parentName:"p"},"term\u2081")," and ",(0,r.mdx)("strong",{parentName:"p"},"term\u2082")," are local to those terms, and may have different types, but only if the variable is not mentioned elsewhere.")),(0,r.mdx)("p",null,"\xa0","\xa0","  ",(0,r.mdx)("em",{parentName:"p"},"[0-9]","+"),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"a number matches a value of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"nat")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"byte"))),(0,r.mdx)("p",null,"\xa0","\xa0","  ",(0,r.mdx)("em",{parentName:"p"},"string"),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"a string matches a value of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"string"))),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("em",{parentName:"p"},"string")," ",(0,r.mdx)("inlineCode",{parentName:"p"},".."),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches strings with the given prefix")),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("em",{parentName:"p"},"string")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"..")," ",(0,r.mdx)("em",{parentName:"p"},"term"),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches a prefix and the rest of the string")),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"{")," ",(0,r.mdx)("em",{parentName:"p"},"field")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"=")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},",")," ... ",(0,r.mdx)("inlineCode",{parentName:"p"},"}"),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches a record with the given fields")),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"{")," ",(0,r.mdx)("em",{parentName:"p"},"field")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"=")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"}")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches a sum type with an alternative ",(0,r.mdx)("strong",{parentName:"p"},"field"))),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("em",{parentName:"p"},"field")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"when matching a sum type, shorthand for ",(0,r.mdx)("inlineCode",{parentName:"p"},"{")," ",(0,r.mdx)("em",{parentName:"p"},"field")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"= _ }"))),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("em",{parentName:"p"},"enumerator")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches an value of an enumerated type")),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"{ just =")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"}"),(0,r.mdx)("br",null),"\n","\xa0","\xa0"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"nothing")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches a ",(0,r.mdx)("inlineCode",{parentName:"p"},"maybe")," type")),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),(0,r.mdx)("br",null),"\n","\xa0","\xa0"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"false")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches a ",(0,r.mdx)("inlineCode",{parentName:"p"},"boolean"))),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("em",{parentName:"p"},"term"),"\xa0",":","\xa0",(0,r.mdx)("em",{parentName:"p"},"type"),(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"(a ",(0,r.mdx)("em",{parentName:"p"},"type signature"),") interpret ",(0,r.mdx)("strong",{parentName:"p"},"term")," as having type ",(0,r.mdx)("strong",{parentName:"p"},"type"),", where ",(0,r.mdx)("strong",{parentName:"p"},"type")," is any valid Angle type.")),(0,r.mdx)("p",null,"\xa0","\xa0"," ",(0,r.mdx)("inlineCode",{parentName:"p"},"$")," ","[0-9]","+",(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"matches a literal fact ID. The only reason to use these would be if you did a previous query, extracted some fact IDs, and want to do a subsequent query incorporating them. Literal fact IDs are not allowed in derived predicates (it wouldn't make any sense).")),(0,r.mdx)("h2",{id:"primitives"},"Primitives"),(0,r.mdx)("p",null,"Angle supports a few primitive operations. The argument(s) to a primitive operation must always be fully defined; they cannot be patterns or wildcards."),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("inlineCode",{parentName:"p"},"prim.toLower")," (S : string) : string"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Converts its string argument to lower case")),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("inlineCode",{parentName:"p"},"prim.length")," (A : ","[_]",") : nat"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Equal to the number of elements in its array argument")),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},">")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("br",null),"\n","\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},">=")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("br",null),"\n","\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"<")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("br",null),"\n","\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"<=")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("br",null),"\n","\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"!==")," ",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("br",null)),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Standard numerical comparisons. These work on values of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"nat")," only, and they have value ",(0,r.mdx)("inlineCode",{parentName:"p"},"{}")," if the comparison succeeds, otherwise they fail (in the same way as a predicate match fails if there are no facts that match the pattern).")),(0,r.mdx)("p",null,"\xa0","\xa0",(0,r.mdx)("em",{parentName:"p"},"term")," ",(0,r.mdx)("inlineCode",{parentName:"p"},"!=")," ",(0,r.mdx)("em",{parentName:"p"},"term")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Standard comparison between two terms of any type. It has a value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"{}")," if the comparison succeeds, otherwise it fails in the same way as a predicate match fails if there are no facts that match the pattern.")))}u.isMDXComponent=!0}}]);