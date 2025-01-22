"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5756"],{8067:function(s,n,a){a.r(n),a.d(n,{default:function(){return p}});var t=a(1147);let l=["innerHTML"],p={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>BackTop 回到顶部</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>返回页面顶部的操作按钮。</p>\n</div><div class="mi-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3>\n<p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">BackTop</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">BackTop</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>\n<p>请滚动右侧的示例页面，当页面滚动 <code>200px</code> 时，右下角会出现返回顶部按钮。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-back-top</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-wei-zhi" tabindex="-1">自定义位置</h3>\n<p>通过 <code>right</code> 和 <code>bottom</code> 属性来设置组件距离右侧和底部的位置。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-back-top</span> <span class="hljs-attr">right</span>=<span class="hljs-string">&quot;15vw&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;10vh&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h3>\n<p>使用默认插槽来自定义组件展示的内容。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-back-top</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;custom&quot;</span>&gt;</span>返回顶部<span class="hljs-tag">&lt;/<span class="hljs-name">mi-back-top</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.custom</span> {\n    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;\n    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;\n    <span class="hljs-attribute">text-align</span>: center;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="she-zhi-gun-dong-mu-biao" tabindex="-1">设置滚动目标</h3>\n<p>可以通过 <code>target</code> 属性来设置触发滚动的目标对象，支持传入选择器或 <code>HTMLElement</code>。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;container&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;item&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-back-top</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;.container&quot;</span> <span class="hljs-attr">bottom</span>=<span class="hljs-string">&quot;30vh&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.container</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">60vh</span>;\n    <span class="hljs-attribute">overflow</span>: auto;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [...<span class="hljs-title class_">Array</span>(<span class="hljs-number">50</span>).<span class="hljs-title function_">keys</span>()];\n    <span class="hljs-keyword">return</span> { list };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="shun-jian-gun-dong" tabindex="-1">瞬间滚动</h3>\n<p>当设置 <code>immediate</code> 属性后，页面滚动的过程不再有过渡效果，而是瞬间滚动到顶部。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-back-top</span> <span class="hljs-attr">immediate</span> /&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>target</td>\n<td>触发滚动的目标对象，支持传入选择器或 DOM 元素，默认最近的父级滚动容器</td>\n<td><em>string | HTMLElement</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>right</td>\n<td>距离页面右侧的距离，默认单位为 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>30</code></td>\n</tr>\n<tr>\n<td>bottom</td>\n<td>距离页面底部的距离，默认单位为 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>40</code></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>滚动高度达到此参数值时才显示组件</td>\n<td><em>number</em></td>\n<td><code>200</code></td>\n</tr>\n<tr>\n<td>teleport</td>\n<td>指定挂载的节点，等同于 Teleport 组件的 <a href="https://cn.vuejs.org/api/built-in-components.html#teleport" target="_blank">to 属性</a></td>\n<td><em>string | Element</em></td>\n<td><code>body</code></td>\n</tr>\n<tr>\n<td>immediate <code>v4.0.9</code></td>\n<td>是否瞬间滚动到顶部</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>z-index</td>\n<td>设置组件的 z-index 层级</td>\n<td><em>number | string</em></td>\n<td><code>100</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>点击组件时触发</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>自定义按钮显示内容</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<p>组件导出以下类型定义：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">BackTopProps</span>, <span class="hljs-title class_">BackTopThemeVars</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2>\n<div class="mi-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--mi-back-top-size</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-back-top-icon-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-back-top-right</td>\n<td><em>30px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-back-top-bottom</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-back-top-z-index</td>\n<td><em>100</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-back-top-text-color</td>\n<td><em>#fff</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-back-top-background</td>\n<td><em>var(--mi-blue)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);