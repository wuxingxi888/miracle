"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4742"],{7893:function(e,a,l){l.r(a),l.d(a,{default:()=>S});var t=l("1147"),i=l("7513"),r=l("8973"),u=l("8978"),d=l("3462"),n=l("3575"),o={top:(0,d.SI)(10),rows:(0,d.SI)(4),duration:(0,d.SI)(4e3),autoPlay:d.J5,delay:(0,d.qM)(300),modelValue:(0,d.Ce)()},[s,m]=(0,n.do)("barrage");let v=(0,t.aZ)({name:s,props:o,emits:["update:modelValue"],setup(e,a){var{emit:l,slots:i}=a,d=(0,t.iH)(),n=m("item"),o=(0,t.iH)(0),s=[],v=function(a){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.delay,t=document.createElement("span");return t.className=n,t.innerText=String(a),t.style.animationDuration="".concat(e.duration,"ms"),t.style.animationDelay="".concat(l,"ms"),t.style.animationName="mi-barrage",t.style.animationTimingFunction="linear",t},p=(0,t.iH)(!0),c=(0,t.iH)(e.autoPlay),y=(a,t)=>{var i,{id:r,text:u}=a,n=v(u,p.value?t*e.delay:void 0);!e.autoPlay&&!1===c.value&&(n.style.animationPlayState="paused"),null===(i=d.value)||void 0===i||i.append(n),o.value++;var m=(o.value-1)%+e.rows*n.offsetHeight+ +e.top;n.style.top="".concat(m,"px"),n.dataset.id=String(r),s.push(n),n.addEventListener("animationend",()=>{l("update:modelValue",[...e.modelValue].filter(e=>String(e.id)!==n.dataset.id))})},g=(e,a)=>{var l=new Map(a.map(e=>[e.id,e]));e.forEach((e,a)=>{l.has(e.id)?l.delete(e.id):y(e,a)}),l.forEach(e=>{var a=s.findIndex(a=>a.dataset.id===String(e.id));a>-1&&(s[a].remove(),s.splice(a,1))}),p.value=!1};(0,t.YP)(()=>e.modelValue.slice(),(e,a)=>g(null!=e?e:[],null!=a?a:[]),{deep:!0});var f=(0,t.iH)({});return(0,t.bv)((0,r._)(function*(){var a;f.value["--move-distance"]="-".concat(null===(a=d.value)||void 0===a?void 0:a.offsetWidth,"px"),yield(0,t.Y3)(),g(e.modelValue,[])})),(0,u.F)({play:()=>{c.value=!0,s.forEach(e=>{e.style.animationPlayState="running"})},pause:()=>{c.value=!1,s.forEach(e=>{e.style.animationPlayState="paused"})}}),()=>{var e;return(0,t.Wm)("div",{class:m(),ref:d,style:f.value},[null===(e=i.default)||void 0===e?void 0:e.call(i)])}}});var p=(0,i.n)(v),c=l("6147"),y=l("8938"),g=l("4489"),f=l("1182");let b=(0,t.aZ)({__name:"index",setup(e){var a=(0,g.q)({"zh-CN":{barrage:"弹幕",play:"开始",pause:"暂停",videoBarrage:"模仿视频弹幕",lightweight:"轻量",customizable:"可定制的",mobile:"移动端",library:"组件库"},"en-US":{barrage:"barrage",play:"play",pause:"pause",videoBarrage:"Imitate video barrage",lightweight:"Lightweight",customizable:"Customizable",mobile:"Mobile",library:"Library"}}),l=[{id:100,text:a("lightweight")},{id:101,text:a("customizable")},{id:102,text:a("mobile")},{id:103,text:"Vue"},{id:104,text:a("library")},{id:105,text:"MiracleUI"},{id:106,text:"666"}],i=(0,t.iH)([...l]),r=()=>{i.value.push({id:Math.random(),text:"Barrage"})},u=(0,t.iH)([...l]),d=(0,t.iH)(),n=()=>{u.value.push({id:Math.random(),text:"Barrage"})},[o,s]=(0,f.OT)(!1);return(0,t.YP)(o,()=>{var e,a;o.value?null===(e=d.value)||void 0===e||e.play():null===(a=d.value)||void 0===a||a.pause()}),(e,l)=>{var m=(0,t.up)("demo-block");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(m,{title:(0,t.SU)(a)("basicUsage")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,t.SU)(p),{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=e=>i.value=e)},{default:(0,t.w5)(()=>l[3]||(l[3]=[(0,t._)("div",{class:"video"},null,-1)])),_:1},8,["modelValue"]),(0,t.Wm)((0,t.SU)(y.ZP),{style:{"margin-top":"10px"}},{default:(0,t.w5)(()=>[(0,t.Wm)((0,t.SU)(c.ZP),{onClick:r,type:"primary",size:"small"},{default:(0,t.w5)(()=>[(0,t.Uk)((0,t.zw)((0,t.SU)(a)("barrage")),1)]),_:1})]),_:1})]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,t.SU)(a)("videoBarrage")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,t.SU)(p),{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=e=>u.value=e),ref_key:"videoBarrage",ref:d,"auto-play":!1},{default:(0,t.w5)(()=>l[4]||(l[4]=[(0,t._)("div",{class:"video"},null,-1)])),_:1},8,["modelValue"]),(0,t.Wm)((0,t.SU)(y.ZP),{style:{"margin-top":"10px"}},{default:(0,t.w5)(()=>[(0,t.Wm)((0,t.SU)(c.ZP),{onClick:n,type:"primary",size:"small",disabled:!(0,t.SU)(o)},{default:(0,t.w5)(()=>[(0,t.Uk)((0,t.zw)((0,t.SU)(a)("barrage")),1)]),_:1},8,["disabled"]),(0,t.Wm)((0,t.SU)(c.ZP),{onClick:l[2]||(l[2]=e=>(0,t.SU)(s)()),size:"small"},{default:(0,t.w5)(()=>[(0,t.Uk)((0,t.zw)((0,t.SU)(o)?(0,t.SU)(a)("pause"):(0,t.SU)(a)("play")),1)]),_:1})]),_:1})]),_:1},8,["title"])],64)}}}),S=b},8978:function(e,a,l){l.d(a,{F:function(){return r}});var t=l(1147),i=l(6797);function r(e){var a=(0,t.FN)();a&&(0,i.l7)(a.proxy,e)}}}]);