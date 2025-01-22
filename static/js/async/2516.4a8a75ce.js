"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2516"],{5022:function(s,n,a){a.r(n),a.d(n,{default:function(){return d}});var t=a(1147);let l=["innerHTML"],d={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>Grid 宫格</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。</p>\n</div><div class="mi-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3>\n<p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Grid</span>, <span class="hljs-title class_">GridItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Grid</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">GridItem</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>\n<p>通过 <code>icon</code> 属性设置格子内的图标，<code>text</code> 属性设置文字内容。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-lie-shu" tabindex="-1">自定义列数</h3>\n<p>默认一行展示四个格子，可以通过 <code>column-num</code> 自定义列数。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in 6&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-nei-rong" tabindex="-1">自定义内容</h3>\n<p>通过插槽可以自定义格子展示的内容。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span> <span class="hljs-attr">:border</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/images/avatar.jpg&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/images/avatar.jpg&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n      <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/images/avatar.jpg&quot;</span>\n    /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid-item</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zheng-fang-xing-ge-zi" tabindex="-1">正方形格子</h3>\n<p>设置 <code>square</code> 属性后，格子的高度会和宽度保持一致。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span> <span class="hljs-attr">square</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in 8&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="ge-zi-jian-ju" tabindex="-1">格子间距</h3>\n<p>通过 <code>gutter</code> 属性设置格子之间的距离。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span> <span class="hljs-attr">:gutter</span>=<span class="hljs-string">&quot;10&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;value in 8&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="nei-rong-heng-pai" tabindex="-1">内容横排</h3>\n<p>将 <code>direction</code> 属性设置为 <code>horizontal</code>，可以让宫格的内容呈横向排列。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;photo-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="ye-mian-dao-hang" tabindex="-1">页面导航</h3>\n<p>通过 <code>to</code> 属性设置 Vue Router 跳转链接，通过 <code>url</code> 属性设置 URL 跳转链接。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span> <span class="hljs-attr">clickable</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;路由跳转&quot;</span> <span class="hljs-attr">to</span>=<span class="hljs-string">&quot;/&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;URL 跳转&quot;</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://github.com&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">徽标提示</h3>\n<p>设置 <code>dot</code> 属性后，会在图标右上角展示一个小红点。设置 <code>badge</code> 属性后，会在图标右上角展示相应的徽标。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-grid</span> <span class="hljs-attr">:column-num</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;home-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-grid-item</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;文字&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;99+&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-grid</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="grid-props" tabindex="-1">Grid Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>column-num</td>\n<td>列数</td>\n<td><em>number | string</em></td>\n<td><code>4</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>图标大小，默认单位为<code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>28px</code></td>\n</tr>\n<tr>\n<td>gutter</td>\n<td>格子之间的间距，默认单位为<code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>border</td>\n<td>是否显示边框</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>center</td>\n<td>是否将格子内容居中显示</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>square</td>\n<td>是否将格子固定为正方形</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>clickable</td>\n<td>是否开启格子点击反馈</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>格子内容排列的方向，可选值为 <code>horizontal</code></td>\n<td><em>string</em></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>reverse</td>\n<td>是否调换图标和文本的位置</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="griditem-props" tabindex="-1">GridItem Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>文字</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td>\n<td><em>string</em></td>\n<td><code>mi-icon</code></td>\n</tr>\n<tr>\n<td>icon-color</td>\n<td>图标颜色，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">color 属性</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>dot</td>\n<td>是否显示图标右上角小红点</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>badge</td>\n<td>图标右上角徽标的内容</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>badge-props</td>\n<td>自定义徽标的属性，传入的对象会被透传给 <a href="#/zh-CN/badge#props" target="_blank">Badge 组件的 props</a></td>\n<td><em>BadgeProps</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>url</td>\n<td>点击后跳转的链接地址</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>点击后跳转的目标路由对象，等同于 Vue Router 的 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to 属性</a></td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>replace</td>\n<td>是否在跳转时替换当前页面历史</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="griditem-events" tabindex="-1">GridItem Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>点击格子时触发</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="griditem-slots" tabindex="-1">GridItem Slots</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>自定义宫格的所有内容</td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义图标</td>\n</tr>\n<tr>\n<td>text</td>\n<td>自定义文字</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<p>组件导出以下类型定义：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">GridProps</span>, <span class="hljs-title class_">GridDirection</span>, <span class="hljs-title class_">GridItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2>\n<div class="mi-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--mi-grid-item-content-padding</td>\n<td><em>var(--mi-padding-md) var(--mi-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-grid-item-content-background</td>\n<td><em>var(--mi-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-grid-item-content-active-color</td>\n<td><em>var(--mi-active-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-grid-item-icon-size</td>\n<td><em>28px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-grid-item-text-color</td>\n<td><em>var(--mi-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-grid-item-text-font-size</td>\n<td><em>var(--mi-font-size-sm)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);