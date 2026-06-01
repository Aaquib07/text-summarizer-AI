(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2962:function(e,t,a){"use strict";a.d(t,{PB:function(){return f},lX:function(){return h}});var o=a(7294),r=a(9008),n=a.n(r);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}var s=["keyOverride"],p=["crossOrigin"],d={templateTitle:"",noindex:!1,nofollow:!1,norobots:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},c=function(e,t,a){void 0===t&&(t=[]);var r=void 0===a?{}:a,n=r.defaultWidth,i=r.defaultHeight;return t.reduce(function(t,a,r){return t.push(o.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:a.url})),a.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:a.alt})),a.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:a.secureUrl.toString()})),a.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:a.type.toString()})),a.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:a.width.toString()})):n&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.toString()})),a.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:a.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:i.toString()})),t},[])},u=function(e){var t,a,r,n,u,m=[];e.titleTemplate&&(d.templateTitle=e.titleTemplate);var h="";e.title?(h=e.title,d.templateTitle&&(h=d.templateTitle.replace(/%s/g,function(){return h}))):e.defaultTitle&&(h=e.defaultTitle),h&&m.push(o.createElement("title",{key:"title"},h));var f=void 0===e.noindex?d.noindex||e.dangerouslySetAllPagesToNoIndex:e.noindex,g=void 0===e.nofollow?d.nofollow||e.dangerouslySetAllPagesToNoFollow:e.nofollow,y=e.norobots||d.norobots,b="";if(e.robotsProps){var v=e.robotsProps,k=v.nosnippet,G=v.maxSnippet,x=v.maxImagePreview,w=v.maxVideoPreview,E=v.noarchive,T=v.noimageindex,O=v.notranslate,_=v.unavailableAfter;b=(k?",nosnippet":"")+(G?",max-snippet:"+G:"")+(x?",max-image-preview:"+x:"")+(E?",noarchive":"")+(_?",unavailable_after:"+_:"")+(T?",noimageindex":"")+(w?",max-video-preview:"+w:"")+(O?",notranslate":"")}if(e.norobots&&(d.norobots=!0),f||g?(e.dangerouslySetAllPagesToNoIndex&&(d.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(d.nofollow=!0),m.push(o.createElement("meta",{key:"robots",name:"robots",content:(f?"noindex":"index")+","+(g?"nofollow":"follow")+b}))):(!y||b)&&m.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+b})),e.description&&m.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&m.push(o.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&m.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){m.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&m.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&m.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&m.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&m.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||h)&&m.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(n=e.openGraph)?void 0:n.title)||h})),(null!=(a=e.openGraph)&&a.description||e.description)&&m.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(u=e.openGraph)?void 0:u.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&m.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var A=e.openGraph.type.toLowerCase();m.push(o.createElement("meta",{key:"og:type",property:"og:type",content:A})),"profile"===A&&e.openGraph.profile?(e.openGraph.profile.firstName&&m.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&m.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&m.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&m.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===A&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){m.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&m.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&m.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){m.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===A&&e.openGraph.article?(e.openGraph.article.publishedTime&&m.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&m.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&m.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){m.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&m.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){m.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===A||"video.episode"===A||"video.tv_show"===A||"video.other"===A)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&m.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&m.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){m.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){m.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&m.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&m.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){m.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&m.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(d.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(d.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&m.push.apply(m,c("image",e.openGraph.images,{defaultWidth:d.defaultOpenGraphImageWidth,defaultHeight:d.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(d.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(d.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&m.push.apply(m,c("video",e.openGraph.videos,{defaultWidth:d.defaultOpenGraphVideoWidth,defaultHeight:d.defaultOpenGraphVideoHeight})),e.openGraph.audio&&m.push.apply(m,c("audio",e.openGraph.audio)),e.openGraph.locale&&m.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&m.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&m.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,a,r=e.keyOverride,n=l(e,s);m.push(o.createElement("meta",i({key:"meta:"+(null!=(t=null!=(a=null!=r?r:n.name)?a:n.property)?t:n.httpEquiv)},n)))}),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach(function(e){var t,a=e.crossOrigin,r=l(e,p);m.push(o.createElement("link",i({key:"link"+(null!=(t=r.keyOverride)?t:r.href)+r.rel},r,{crossOrigin:"anonymous"===a||"use-credentials"===a||""===a?a:void 0})))}),m},m=function(e){return o.createElement(n(),null,u(e))},h=function(e){var t=e.title,a=e.titleTemplate,r=e.defaultTitle,n=e.themeColor,i=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,s=e.description,p=e.canonical,d=e.facebook,c=e.openGraph,u=e.additionalMetaTags,h=e.twitter,f=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,b=e.defaultOpenGraphVideoHeight,v=e.mobileAlternate,k=e.languageAlternates,G=e.additionalLinkTags,x=e.robotsProps,w=e.norobots;return o.createElement(m,{title:t,titleTemplate:a,defaultTitle:r,themeColor:n,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:s,canonical:p,facebook:d,openGraph:c,additionalMetaTags:u,twitter:h,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:b,mobileAlternate:v,languageAlternates:k,additionalLinkTags:G,robotsProps:x,norobots:w})},f=function(e){var t=e.title,a=e.themeColor,r=e.noindex,n=e.nofollow,i=e.robotsProps,l=e.description,s=e.canonical,p=e.openGraph,d=e.facebook,c=e.twitter,u=e.additionalMetaTags,h=e.titleTemplate,f=e.defaultTitle,g=e.mobileAlternate,y=e.languageAlternates,b=e.additionalLinkTags;return o.createElement(o.Fragment,null,o.createElement(m,{title:t,themeColor:a,noindex:r,nofollow:n,robotsProps:i,description:l,canonical:s,facebook:d,openGraph:p,additionalMetaTags:u,twitter:c,titleTemplate:h,defaultTitle:f,mobileAlternate:g,languageAlternates:y,additionalLinkTags:b}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},1118:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(8397)}])},8397:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var o=a(5893),r=a(2962),n=a(6501);a(2352);let i={titleTemplate:"%s | TextSummarizer AI",defaultTitle:"TextSummarizer AI – Instant AI-Powered Text Summarization",description:"Summarize any text, PDF, or DOCX instantly with AI. Choose short, detailed, or bullet-point summaries. Free, fast, and accurate.",canonical:"https://textsummarizer.ai",openGraph:{type:"website",locale:"en_US",url:"https://textsummarizer.ai",siteName:"TextSummarizer AI",images:[{url:"".concat("https://textsummarizer.ai","/og-image.png"),width:1200,height:630,alt:"TextSummarizer AI"}]},twitter:{handle:"@textsummarizerai",site:"@textsummarizerai",cardType:"summary_large_image"},additionalMetaTags:[{name:"viewport",content:"width=device-width, initial-scale=1"},{name:"theme-color",content:"#0f0e0d"},{name:"keywords",content:"text summarizer, ai summarization, summarize article, pdf summarizer, document summary, bullet point summary"}],additionalLinkTags:[{rel:"icon",href:"/favicon.ico"},{rel:"apple-touch-icon",href:"/apple-touch-icon.png",sizes:"180x180"},{rel:"manifest",href:"/site.webmanifest"}]};function l(e){let{Component:t,pageProps:a}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.lX,{...i}),(0,o.jsx)("div",{className:"grain",children:(0,o.jsx)(t,{...a})}),(0,o.jsx)(n.x7,{position:"bottom-right",toastOptions:{style:{fontFamily:"var(--font-body)",fontSize:"14px",background:"#0f0e0d",color:"#faf8f4",borderRadius:"8px"},success:{iconTheme:{primary:"#e8a838",secondary:"#0f0e0d"}}}})]})}},2352:function(){},9008:function(e,t,a){e.exports=a(9201)},6501:function(e,t,a){"use strict";let o,r;a.d(t,{x7:function(){return eu},ZP:function(){return em}});var n,i=a(7294);let l={data:""},s=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l},p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,u=(e,t)=>{let a="",o="",r="";for(let n in e){let i=e[n];"@"==n[0]?"i"==n[1]?a=n+" "+i+";":o+="f"==n[1]?u(i,n):n+"{"+u(i,"k"==n[1]?"":t)+"}":"object"==typeof i?o+=u(i,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=i&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=u.p?u.p(n,i):n+":"+i+";")}return a+(t&&r?t+"{"+r+"}":r)+o},m={},h=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+h(e[a]);return t}return e},f=(e,t,a,o,r)=>{var n;let i=h(e),l=m[i]||(m[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!m[l]){let t=i!==e?e:(e=>{let t,a,o=[{}];for(;t=p.exec(e.replace(d,""));)t[4]?o.shift():t[3]?(a=t[3].replace(c," ").trim(),o.unshift(o[0][a]=o[0][a]||{})):o[0][t[1]]=t[2].replace(c," ").trim();return o[0]})(e);m[l]=u(r?{["@keyframes "+l]:t}:t,a?"":"."+l)}let s=a&&m.g?m.g:null;return a&&(m.g=m[l]),n=m[l],s?t.data=t.data.replace(s,n):-1===t.data.indexOf(n)&&(t.data=o?n+t.data:t.data+n),l},g=(e,t,a)=>e.reduce((e,o,r)=>{let n=t[r];if(n&&n.call){let e=n(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+o+(null==n?"":n)},"");function y(e){let t=this||{},a=e.call?e(t.p):e;return f(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,s(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,v,k,G=y.bind({k:1});function x(e,t){let a=this||{};return function(){let o=arguments;function r(n,i){let l=Object.assign({},n),s=l.className||r.className;a.p=Object.assign({theme:v&&v()},l),a.o=/ *go\d+/.test(s),l.className=y.apply(a,o)+(s?" "+s:""),t&&(l.ref=i);let p=e;return e[0]&&(p=l.as||e,delete l.as),k&&p[0]&&k(l),b(p,l)}return t?t(r):r}}var w=e=>"function"==typeof e,E=(e,t)=>w(e)?e(t):e,T=(o=0,()=>(++o).toString()),O=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},_="default",A=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:o}=t;return A(e,{type:e.toasts.find(e=>e.id===o.id)?1:0,toast:o});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},I=[],N={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},P={},S=(e,t=_)=>{P[t]=A(P[t]||N,e),I.forEach(([e,a])=>{e===t&&a(P[t])})},z=e=>Object.keys(P).forEach(t=>S(e,t)),j=e=>Object.keys(P).find(t=>P[t].toasts.some(t=>t.id===e)),C=(e=_)=>t=>{S(t,e)},H={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={},t=_)=>{let[a,o]=(0,i.useState)(P[t]||N),r=(0,i.useRef)(P[t]);(0,i.useEffect)(()=>(r.current!==P[t]&&o(P[t]),I.push([t,o]),()=>{let e=I.findIndex(([e])=>e===t);e>-1&&I.splice(e,1)}),[t]);let n=a.toasts.map(t=>{var a,o,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(o=e[t.type])?void 0:o.duration)||(null==e?void 0:e.duration)||H[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...a,toasts:n}},$=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||T()}),L=e=>(t,a)=>{let o=$(t,e,a);return C(o.toasterId||j(o.id))({type:2,toast:o}),o.id},W=(e,t)=>L("blank")(e,t);W.error=L("error"),W.success=L("success"),W.loading=L("loading"),W.custom=L("custom"),W.dismiss=(e,t)=>{let a={type:3,toastId:e};t?C(t)(a):z(a)},W.dismissAll=e=>W.dismiss(void 0,e),W.remove=(e,t)=>{let a={type:4,toastId:e};t?C(t)(a):z(a)},W.removeAll=e=>W.remove(void 0,e),W.promise=(e,t,a)=>{let o=W.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?E(t.success,e):void 0;return r?W.success(r,{id:o,...a,...null==a?void 0:a.success}):W.dismiss(o),e}).catch(e=>{let r=t.error?E(t.error,e):void 0;r?W.error(r,{id:o,...a,...null==a?void 0:a.error}):W.dismiss(o)}),e};var V=1e3,F=(e,t="default")=>{let{toasts:a,pausedAt:o}=D(e,t),r=(0,i.useRef)(new Map).current,n=(0,i.useCallback)((e,t=V)=>{if(r.has(e))return;let a=setTimeout(()=>{r.delete(e),l({type:4,toastId:e})},t);r.set(e,a)},[]);(0,i.useEffect)(()=>{if(o)return;let e=Date.now(),r=a.map(a=>{if(a.duration===1/0)return;let o=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(o<0){a.visible&&W.dismiss(a.id);return}return setTimeout(()=>W.dismiss(a.id,t),o)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[a,o,t]);let l=(0,i.useCallback)(C(t),[t]),s=(0,i.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),p=(0,i.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),d=(0,i.useCallback)(()=>{o&&l({type:6,time:Date.now()})},[o,l]),c=(0,i.useCallback)((e,t)=>{let{reverseOrder:o=!1,gutter:r=8,defaultPosition:n}=t||{},i=a.filter(t=>(t.position||n)===(e.position||n)&&t.height),l=i.findIndex(t=>t.id===e.id),s=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...o?[s+1]:[0,s]).reduce((e,t)=>e+(t.height||0)+r,0)},[a]);return(0,i.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)n(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[a,n]),{toasts:a,handlers:{updateHeight:p,startPause:s,endPause:d,calculateOffset:c}}},M=G`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=G`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=G`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,X=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=G`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=x("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,Z=G`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=G`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,J=x("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,K=x("div")`
  position: absolute;
`,Q=x("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=G`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=x("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ea=({toast:e})=>{let{icon:t,type:a,iconTheme:o}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===a?null:i.createElement(Q,null,i.createElement(B,{...o}),"loading"!==a&&i.createElement(K,null,"error"===a?i.createElement(X,{...o}):i.createElement(J,{...o})))},eo=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,en=x("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=x("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,el=(e,t)=>{let a=e.includes("top")?1:-1,[o,r]=O()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[eo(a),er(a)];return{animation:t?`${G(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${G(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},es=i.memo(({toast:e,position:t,style:a,children:o})=>{let r=e.height?el(e.position||t||"top-center",e.visible):{opacity:0},n=i.createElement(ea,{toast:e}),l=i.createElement(ei,{...e.ariaProps},E(e.message,e));return i.createElement(en,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof o?o({icon:n,message:l}):i.createElement(i.Fragment,null,n,l))});n=i.createElement,u.p=void 0,b=n,v=void 0,k=void 0;var ep=({id:e,className:t,style:a,onHeightUpdate:o,children:r})=>{let n=i.useCallback(t=>{if(t){let a=()=>{o(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return i.createElement("div",{ref:n,className:t,style:a},r)},ed=(e,t)=>{let a=e.includes("top"),o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...o}},ec=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:o,children:r,toasterId:n,containerStyle:l,containerClassName:s})=>{let{toasts:p,handlers:d}=F(a,n);return i.createElement("div",{"data-rht-toaster":n||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:s,onMouseEnter:d.startPause,onMouseLeave:d.endPause},p.map(a=>{let n=a.position||t,l=ed(n,d.calculateOffset(a,{reverseOrder:e,gutter:o,defaultPosition:t}));return i.createElement(ep,{id:a.id,key:a.id,onHeightUpdate:d.updateHeight,className:a.visible?ec:"",style:l},"custom"===a.type?E(a.message,a):r?r(a):i.createElement(es,{toast:a,position:n}))}))},em=W}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(9974)}),_N_E=e.O()}]);