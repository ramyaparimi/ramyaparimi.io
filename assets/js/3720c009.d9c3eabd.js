"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4787],{2194:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(6540),n=a(53),r=a(6820),c=a(1003),s=a(7559),m=a(9408),g=a(2557),o=a(1463);function u(e){let{tags:t}=e;const a=(0,r.b)();return l.createElement(c.e3,{className:(0,n.A)(s.G.wrapper.docsPages,s.G.page.docsTagsListPage)},l.createElement(c.be,{title:a}),l.createElement(o.A,{tag:"doc_tags_list"}),l.createElement(m.A,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(g.A,{tags:t}))))))}},6133:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(6540),n=a(53),r=a(5489);const c={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}},2557:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(6540),n=a(6820),r=a(6133);const c={tag:"tag_Nnez"};function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(r.A,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.Q)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},6820:(e,t,a)=>{a.d(t,{Q:()=>r,b:()=>n});var l=a(1312);const n=()=>(0,l.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);