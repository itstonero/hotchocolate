(this["webpackJsonp@banana-cake-pop/main"]=this["webpackJsonp@banana-cake-pop/main"]||[]).push([[10],{433:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r,a,c,i,o=t(171),u=t(405),s=t(68),d=t(164),l=t(399),f=t(393),b=t(91),p=Object(s.memo)(Object(s.forwardRef)((function(e,n){var t=e.searchTerm,r=e.onSearchTermChange,a=Object(s.useRef)(null),c=Object(s.useRef)(null),i=Object(u.a)((function(e){r(e.target.value.trim())}),250,[r]),o=Object(s.useCallback)((function(e){i(e),c.current.style.display=e.currentTarget.value.length>0?"flex":"none"}),[i]),d=Object(s.useCallback)((function(){var e;null===(e=a.current)||void 0===e||e.focus()}),[]);return Object(s.useEffect)((function(){var e=a.current,n=c.current;t&&t.length>0?(e.value=t,n.style.display="flex"):n.style.display="none"}),[t]),Object(b.jsx)(j,{ref:n,onClick:d,children:Object(b.jsxs)(h,{children:[Object(b.jsx)(x,{children:Object(b.jsx)(f.w,{})}),Object(b.jsx)(m,{ref:a,placeholder:"Find...",onChange:o}),Object(b.jsx)(l.c,{ref:c,onClick:function(){r(""),a.current.value="",c.current.style.display="none"},children:Object(b.jsx)(f.i,{})})]})})}))),j=d.d.div(r||(r=Object(o.a)(["\n  z-index: 1;\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  align-items: center;\n  height: 44px;\n  max-height: 44px;\n  padding: 0 8px;\n"]))),x=d.d.div(a||(a=Object(o.a)(["\n  display: flex;\n  flex: 0 0 24px;\n  align-items: center;\n  justify-content: center;\n\n  & > svg {\n    fill: "," !important;\n  }\n"])),(function(e){return e.theme.accentColor1})),m=d.d.input(c||(c=Object(o.a)(["\n  flex: 1 1 auto;\n  border: 0 none;\n  padding: 0 9px;\n  color: ",";\n  background-color: ",";\n  transition: background-color 0.2s ease;\n  user-select: initial;\n"])),(function(e){return e.theme.accentColor1}),(function(e){return e.theme.accentColor4})),h=d.d.div(i||(i=Object(o.a)(["\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid ",";\n  padding: 0 5px;\n  height: 30px;\n  background-color: ",";\n  transition: background-color 0.2s ease, border-color 0.2s ease,\n    box-shadow 0.2s ease;\n  cursor: text;\n\n  &:focus-within {\n    border-color: ",";\n    background-color: ",";\n    box-shadow: 0 0 4px 0 ",";\n\n    & > "," {\n      background-color: ",";\n    }\n  }\n\n  &:hover {\n    background-color: ",";\n\n    & > "," {\n      background-color: ",";\n    }\n  }\n"])),(function(e){return e.theme.accentColor3}),(function(e){return e.theme.accentColor4}),(function(e){return e.theme.mainColor}),(function(e){return e.theme.mainColor}),(function(e){return e.theme.accentColor1}),m,(function(e){return e.theme.mainColor}),(function(e){return e.theme.mainColor}),m,(function(e){return e.theme.mainColor}))},626:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var r=t(171),a=t(6),c=t(11),i=t.n(c),o=t(392),u=t(386),s=t(399),d=t(433),l=t(389),f=t(434),b=t(393),p=t(486),j=t(414),x=t(400),m=t(394),h=t(408),O=t(480),v=t(68),g=t(383),k=t(628),w=t(164),y=t(424),C=t(382),T=t(451),F=t(395),P=t(448),H=t(585);var R,S,N=t(91),E=function(){var e=Object(g.b)(),n=Object(m.b)(x.b.selectActiveNodeId),t=Object(m.c)(y.c.selectSearchTerm),r=Object(v.useRef)([]),c=Object(v.useRef)(),p=function(e){return{comparer:function(e,n){var t="item"===e.metadata.kind?e.metadata.created:e.metadata.day,r="item"===n.metadata.kind?n.metadata.created:n.metadata.day;return t>r?-1:t<r?1:0},getNodes:function(n,t,r){return e.pipe(Object(k.a)(1),Object(H.a)((function(e){return j.a.isRoot(n)?Object(P.d)(r?function(e){return r({name:e})}:void 0).then((function(n){return n.map((function(n,t){var a=Object(F.b)(n);return Object(C.a)(Object(C.a)({},a),{},{expanded:e.includes(a.name)||!!r})}))})):j.a.getSegments(n).length>1||!t?Promise.resolve([]):Object(P.c)(t.metadata.day,r?function(e){return r({name:e})}:void 0).then((function(e){return e.map((function(e){return Object(C.a)(Object(C.a)({},Object(F.c)(e)),{},{expanded:!1})}))}))}))).toPromise()},validate:function(e,n){return Promise.resolve(T.a.fail("This tree is read-only."))}}}(Object(m.b)(y.c.selectExpandedFolders)),w=Object(h.b)((function(n){var t=n.e,r=n.node,a=n.isPreview;t.preventDefault(),t.stopPropagation(),r.selected||(Object(j.f)(r.model),r.selected=!0),"group"===r.metadata.kind?r.toggleExpanded():Object(O.d)(r.metadata.id).pipe(Object(k.a)(1)).subscribe((function(n){n&&e(u.a.activateOrOpenDocument({documentId:r.metadata.id,isHistory:!0,isPreview:a}))}))}),25),R=function(e,n){return w({e:e,node:n,isPreview:!0})},S=function(e,n){return w({e:e,node:n,isPreview:!1})},E=function(n){var t=n.name;e(y.a.collapseFolder({folderName:t}))},z=function(n){var t=n.name;e(y.a.expandFolder({folderName:t}))},J=function(){var n=Object(o.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e(y.a.changeHistorySearchTerm({searchTerm:t})),!c.current){n.next=9;break}if(!(t.length>0)){n.next=7;break}return n.next=5,c.current.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}));case 5:n.next=9;break;case 7:return n.next=9,c.current.resetFilter();case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),A=function(e){n.pipe(Object(k.a)(1)).subscribe(function(){var n=Object(o.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Q(e,t);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},M=function(e){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(L,{title:e.name,children:e.name}),Object(N.jsx)(D,{title:e.metadata.time,children:e.metadata.time}),"group"===e.metadata.kind?Object(N.jsx)(N.Fragment,{}):Object(N.jsx)(j.e,{color:e.metadata.failed?"red":"green",title:e.metadata.failed?"Operation failed":"Operation succeeded",children:e.metadata.failed?Object(N.jsx)(f.a,{}):Object(N.jsx)(f.d,{})})]})};function Q(e,n){return V.apply(this,arguments)}function V(){return(V=Object(o.a)(i.a.mark((function e(n,t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=11;break}if(!(r=n.find((function(e){return e.metadata&&e.metadata.id&&e.metadata.id===t})))){e.next=8;break}return r.selected||(Object(j.f)(n),r.selected=!0),e.next=6,r.ensureVisible();case 6:e.next=9;break;case 8:Object(j.f)(n);case 9:e.next=12;break;case 11:Object(j.f)(n);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(v.useEffect)((function(){var e=r.current;return function(){for(var n;n=e.pop();)n();c.current=void 0}}),[]),Object(N.jsx)(l.k,{children:Object(N.jsxs)(l.a,{children:[Object(N.jsxs)(l.c,{children:[Object(N.jsx)(l.i,{children:"History"}),Object(N.jsx)(l.h,{}),Object(N.jsx)(s.c,{title:"Clear History",onClick:function(){e(y.a.clearHistory())},children:Object(N.jsx)(b.h,{})})]}),Object(N.jsx)(d.a,{searchTerm:t,onSearchTermChange:J}),Object(N.jsx)(l.j,{children:Object(N.jsx)(j.c,{id:"history",itemHeight:j.b,provider:p,onInitialized:function(e){var u=n.subscribe(function(){var n=Object(o.a)(i.a.mark((function n(t){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Q(e,t);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),s=e.subscribeFor(function(){var n=Object(o.a)(i.a.mark((function n(t){var r,c,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=Object(a.a)(t),n.prev=1,r.s();case 3:if((c=r.n()).done){n.next=19;break}o=c.value,n.t0=o.kind,n.next="collapsed"===n.t0?8:"expanded"===n.t0?11:"reset-filter"===n.t0?13:"set-filter"===n.t0?15:17;break;case 8:return n.next=10,E(o.node);case 10:return n.abrupt("break",17);case 11:return z(o.node),n.abrupt("break",17);case 13:case 15:return A(e),n.abrupt("break",17);case 17:n.next=3;break;case 19:n.next=24;break;case 21:n.prev=21,n.t1=n.catch(1),r.e(n.t1);case 24:return n.prev=24,r.f(),n.finish(24);case 27:case"end":return n.stop()}}),n,null,[[1,21,24,27]])})));return function(e){return n.apply(this,arguments)}}(),"collapsed","expanded","reset-filter","set-filter");t&&t.length>0&&e.setFilter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())})),r.current.push((function(){return u.unsubscribe()})),r.current.push((function(){return s()})),c.current=e},children:function(e){return Object(N.jsx)(j.d,{id:e.id,depth:e.depth,name:e.name,path:e.path,expanded:e.expanded,expandable:e.expandable,node:e,onClick:R,onDoubleClick:S,renderIcon:I,renderName:M})}})})]})})};function I(e){return"group"===e.metadata.kind?Object(N.jsx)(j.e,{color:"yellow",children:Object(N.jsx)(b.d,{})}):Object(N.jsx)(j.e,{children:"mutation"===e.metadata.operationType?Object(N.jsx)(p.a,{title:"Mutation"}):"subscription"===e.metadata.operationType?Object(N.jsx)(p.c,{title:"Subscription"}):Object(N.jsx)(p.b,{title:"Query"})})}var L=w.d.h3(R||(R=Object(r.a)(["\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  padding: 0 4px 0 0;\n  font-weight: normal;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),D=w.d.div(S||(S=Object(r.a)(["\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  padding: 0 4px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))}}]);