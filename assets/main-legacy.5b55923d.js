System.register(["./index-legacy.8697cd2d.js","./vue-vendor-legacy.6492fd59.js","./vant-vendor-legacy.796d60f0.js","./vendor-legacy.99d3ff3e.js"],(function(e,t){"use strict";var o,n,a,l,r,i,s,c,m,p,u,d,g,f,v,y,h,j,b,U,I=document.createElement("style");return I.innerHTML='.mr-5{margin-right:.13333rem}.color-fff{color:#fff!important}.color-FFC659{color:#ffc659!important}.color-3F80F7{color:#3f80f7!important}.color-999{color:#999!important}.color-333{color:#333!important}.font-16{font-size:.42667rem!important}.icon-edit:active,.icon-copy:active{opacity:.5}@font-face{font-family:Emoji;src:local("Apple Color Emojiji"),local("Segoe UI Emoji"),local("Segoe UI Symbol"),local("Noto Color Emoji");unicode-range:U+1F000-1F644,U+203C-3299}#app{font-family:"Poppins-Regular",system-ui,\\2014 apple-system,Segoe UI,Rototo,Emoji,sans-serif}\n',document.head.appendChild(I),{setters:[e=>{o=e.i,n=e.g,a=e.s,l=e.a,r=e.b,i=e.d},e=>{s=e.d,c=e.P,m=e.Q,p=e.R,u=e.S,d=e.U,g=e.V,f=e.s},e=>{v=e.L},e=>{y=e.j,h=e.k,j=e.l,b=e.m,U=e.n}],execute:function(){const I=e("s",y.create({baseURL:"https://api.dryespah.com",timeout:8e4}));I.interceptors.request.use((e=>{let t=o.global.locale.value;if(t){var n;let o={"zh-cn":"cn","zh-tw":"cn",en:"en"};e.headers.lang=null!==(n=o[t])&&void 0!==n?n:""}return e}),(e=>Promise.reject(e))),I.interceptors.response.use((e=>{const t=e.data;if((null==t?void 0:t.status)<=0){let e=(null==t?void 0:t.msg)||"";return Promise.reject(e)}return 1===(null==t?void 0:t.status)?t.data:t}),(e=>Promise.reject(e)));const C=s({__name:"App",setup(e){const t=h("chainsConfig",[],localStorage);I({method:"get",url:"/v1api/v2/settings/swapConfigs"}).then((e=>{t.value=e}));let o=n();return console.log("unit",o),(e,t)=>{const o=c("router-view");return m(),p(o,null,{default:u((({Component:e})=>[(m(),p(d,null,[(m(),p(g(e)))],1024))])),_:1})}}}),E=function(e,t,o){return e()},P=[{path:"/",name:"Index",component:()=>E((()=>t.import("./home-legacy.e055aa69.js"))),meta:{title:o.global.t("promotionReward"),titleI18n:"promotionReward"}},{path:"/points/:code/:interval?",name:"Points",component:()=>E((()=>t.import("./points-legacy.37f930e5.js"))),meta:{title:o.global.t("pointsDetails"),titleI18n:"pointsDetails"}},{path:"/rebate/:code/:interval?",name:"Rebate",component:()=>E((()=>t.import("./rebate-legacy.174e9e7f.js"))),meta:{title:o.global.t("rebateDetails"),titleI18n:"rebateDetails"}},{path:"/promote/:code/:interval?",name:"Promote",component:()=>E((()=>t.import("./promote-legacy.6593022f.js"))),meta:{title:o.global.t("promoteUsers"),titleI18n:"promoteUsers"}},{path:"/usage",name:"Usage",component:()=>E((()=>t.import("./usage-legacy.b5a4c98d.js"))),meta:{title:o.global.t("pointsUsage"),titleI18n:"pointsUsage"}},{path:"/:pathMatch(.*)*",name:"not-found",redirect:"/"}],R=j({history:b("/"),routes:P});R.beforeEach(((e,t,n)=>{var r,i;e.query.lang&&a(e.query.lang),"string"==typeof(null==e||null===(r=e.meta)||void 0===r?void 0:r.titleI18n)&&l(o.global.t(null==e||null===(i=e.meta)||void 0===i?void 0:i.titleI18n)),n()}));const S=U(),F=f(C);r(),i(F),F.use(S),F.use(v),F.use(R).use(o).mount("#app")}}}));
