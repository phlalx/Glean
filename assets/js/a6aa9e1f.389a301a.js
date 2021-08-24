"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089],{44428:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var l=t(67294),r=t(52263),n=t(16016),i=t(43146),s=t(36742),m=t(24973);var o=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s.default,{className:"pagination-nav__link",to:t},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(s.default,{className:"pagination-nav__link",to:r},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(95601),d=t(47529);var u=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,r.default)().siteConfig.title,u=a.blogDescription,g=a.blogTitle,p="/"===a.permalink?m:g;return l.createElement(n.Z,{title:p,description:u,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("aside",{className:"col col--3"},l.createElement(c.Z,{sidebar:s})),l.createElement("main",{className:"col col--7"},t.map((function(e){var a=e.content;return l.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},l.createElement(a,null))})),l.createElement(o,{metadata:a})))))}},43146:function(e,a,t){t.d(a,{Z:function(){return E}});var l=t(67294),r=t(86010),n=t(3905),i=t(24973),s=t(36742),m=t(47529),o=t(75854),c=t.n(o),d=t(41217),u=t(86146),g="blogPostTitle_GeHD",p="blogPostData_291c",v="blogPostDetailsFull_3kfx";var E=function(e){var a,t,o,E=(t=(0,m.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),b=e.children,h=e.frontMatter,f=e.metadata,_=e.truncated,N=e.isBlogPostPage,k=void 0!==N&&N,T=f.date,w=f.formattedDate,M=f.permalink,P=f.tags,L=f.readingTime,x=f.title,A=f.editUrl,I=h.author,y=h.image,C=h.keywords,R=h.author_url||h.authorURL,U=h.author_title||h.authorTitle,Z=h.author_image_url||h.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(d.default,{keywords:C,image:y}),l.createElement("article",{className:k?void 0:"margin-bottom--xl"},(o=k?"h1":"h2",l.createElement("header",null,l.createElement(o,{className:g},k?x:l.createElement(s.default,{to:M},x)),l.createElement("div",{className:(0,r.default)(p,"margin-vert--md")},l.createElement("time",{dateTime:T},w),L&&l.createElement(l.Fragment,null," \xb7 ",E(L))),l.createElement("div",{className:"avatar margin-vert--md"},Z&&l.createElement(s.default,{className:"avatar__photo-link avatar__photo",href:R},l.createElement("img",{src:Z,alt:I})),l.createElement("div",{className:"avatar__intro"},I&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.default,{href:R},I)),l.createElement("small",{className:"avatar__subtitle"},U)))))),l.createElement("div",{className:"markdown"},l.createElement(n.MDXProvider,{components:c()},b)),(P.length>0||_)&&l.createElement("footer",{className:(0,r.default)("row docusaurus-mt-lg",(a={},a[v]=k,a))},P.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var a=e.label,t=e.permalink;return l.createElement(s.default,{key:t,className:"margin-horiz--sm",to:t},a)}))),k&&A&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.default,{editUrl:A})),!k&&_&&l.createElement("div",{className:"col text--right"},l.createElement(s.default,{to:f.permalink,"aria-label":"Read more about "+x},l.createElement("b",null,l.createElement(i.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},95601:function(e,a,t){t.d(a,{Z:function(){return g}});var l=t(67294),r=t(86010),n=t(36742),i="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",o="sidebarItem_2UVv",c="sidebarItemLink_1RT6",d="sidebarItemLinkActive_12pM",u=t(24973);function g(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("nav",{className:(0,r.default)(i,"thin-scrollbar"),"aria-label":(0,u.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.default)(s,"margin-bottom--md")},a.title),l.createElement("ul",{className:m},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:o},l.createElement(n.default,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}},86146:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var l=t(67294),r=t(24973),n=t(87462),i=t(63366),s=t(86010),m="iconEdit_2_ui",o=["className"],c=function(e){var a=e.className,t=(0,i.Z)(e,o);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.default)(m,a),"aria-hidden":"true"},t),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var a=e.editUrl;return l.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener"},l.createElement(c,null),l.createElement(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);