"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2594"],{7396:function(e,t,i){i.r(t),i.d(t,{default:()=>s});var r=i("1147"),a=i("4176"),n=i("4489"),l={class:"demo-block page-1"},c={class:"demo-block page-2"},u={class:"demo-block page-3"};let o=(0,r.aZ)({__name:"index",setup(e){var t=(0,n.q)({"zh-CN":{basicUsage:"基本用法",vertical:"垂直指示器",circle:"圆形指示器",square:"方形指示器",line:"线形指示器",border:"边框指示器"},"en-US":{basicUsage:"Basic Usage",vertical:"Vertical Indicator",circle:"Circle Indicator",square:"Square Indicator",line:"Line Indicator",border:"Border Indicator"}}),i=(0,r.iH)(0);return setInterval(()=>{i.value=(i.value+1)%3},2e3),(e,n)=>{var o=(0,r.up)("demo-block");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(o,{title:(0,r.SU)(t)("basicUsage")},{default:(0,r.w5)(()=>[(0,r._)("div",l,[(0,r.Wm)((0,r.SU)(a.ZP),{type:"circle",size:3,active:i.value,color:"#fff"},null,8,["active"]),(0,r.Wm)((0,r.SU)(a.ZP),{size:3,active:i.value,direction:"vertical"},null,8,["active"])])]),_:1},8,["title"]),(0,r.Wm)(o,{title:(0,r.SU)(t)("square")},{default:(0,r.w5)(()=>[(0,r._)("div",c,[(0,r.Wm)((0,r.SU)(a.ZP),{type:"square",size:3,active:i.value},null,8,["active"]),(0,r.Wm)((0,r.SU)(a.ZP),{type:"square",size:3,active:i.value,direction:"vertical"},null,8,["active"])])]),_:1},8,["title"]),(0,r.Wm)(o,{title:(0,r.SU)(t)("line")},{default:(0,r.w5)(()=>[(0,r._)("div",u,[(0,r.Wm)((0,r.SU)(a.ZP),{type:"line",size:3,active:i.value,color:"#fff"},null,8,["active"]),(0,r.Wm)((0,r.SU)(a.ZP),{type:"line",size:3,active:i.value,direction:"vertical"},null,8,["active"])])]),_:1},8,["title"])])}}}),s=o},4176:function(e,t,i){i.d(t,{ZP:()=>v});var r=i("7513"),a=i("1147"),n=i("3575"),l=i("3462"),[c,u]=(0,n.do)("indicator"),o={type:(0,l.SQ)("circle"),color:String,direction:(0,l.SQ)("horizontal"),size:(0,l.SI)(1),active:(0,l.SI)(0)};let s=(0,a.aZ)({name:c,props:o,setup:e=>()=>{var{type:t,color:i,size:r,active:n,direction:l}=e,c=(e,t)=>{var r=t?{backgroundColor:i}:void 0,n=u(e,{active:t,[l]:"line"===e});return(0,a.Wm)("i",{style:r,class:n},null)},o=e=>c(t,e===n);return(0,a.Wm)("div",{class:u()},[(0,a.Wm)("div",{class:u("indicators",{[l]:!0})},[Array(r).fill("").map((e,t)=>o(t))])])}}),v=(0,r.n)(s)},3462:function(e,t,i){i.d(t,{Ce:function(){return c},J5:function(){return n},Or:function(){return a},SI:function(){return o},SQ:function(){return s},Vg:function(){return r},ir:function(){return l},qM:function(){return u}});var r=null,a=[Number,String],n={type:Boolean,default:!0},l=e=>({type:e,required:!0}),c=()=>({type:Array,default:()=>[]}),u=e=>({type:Number,default:e}),o=e=>({type:a,default:e}),s=e=>({type:String,default:e})},7513:function(e,t,i){i.d(t,{n:function(){return a}});var r=i(9608);function a(e){return e.install=t=>{var{name:i}=e;i&&(t.component(i,e),t.component((0,r._A)("-".concat(i)),e))},e}}}]);