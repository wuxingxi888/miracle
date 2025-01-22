"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9175"],{4493:function(s,n,a){a.r(n),a.d(n,{default:function(){return e}});var t=a(1147);let l=["innerHTML"],e={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>NoticeBar 通知栏</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>用于循环播放展示一组消息通知。</p>\n</div><div class="mi-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3>\n<p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NoticeBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NoticeBar</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>\n<p>通过 <code>text</code> 属性设置通知栏的内容，通过 <code>left-icon</code> 属性设置通知栏左侧的图标。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span>\n  <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="gun-dong-bo-fang" tabindex="-1">滚动播放</h3>\n<p>通知栏的内容长度溢出时会自动开启滚动播放，通过 <code>scrollable</code> 属性可以控制该行为。</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- 文字较短时，通过设置 scrollable 属性开启滚动播放 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span> <span class="hljs-attr">scrollable</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;米袋虽空——樱花开哉！&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- 文字较长时，通过禁用 scrollable 属性关闭滚动播放 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span>\n  <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="duo-xing-zhan-shi" tabindex="-1">多行展示</h3>\n<p>文字较长时，可以通过设置 <code>wrapable</code> 属性来开启多行展示。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span>\n  <span class="hljs-attr">wrapable</span>\n  <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>\n  <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;不会回头的东西有四件：说出口的话、离弦的箭、逝去的生活和失去的机会。&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="tong-zhi-lan-mo-shi" tabindex="-1">通知栏模式</h3>\n<p>通知栏支持 <code>closeable</code> 和 <code>link</code> 两种模式。</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- closeable 模式，在右侧显示关闭按钮 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;closeable&quot;</span>&gt;</span>米袋虽空——樱花开哉！<span class="hljs-tag">&lt;/<span class="hljs-name">mi-notice-bar</span>&gt;</span>\n\n<span class="hljs-comment">&lt;!-- link 模式，在右侧显示链接箭头 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;link&quot;</span>&gt;</span>米袋虽空——樱花开哉！<span class="hljs-tag">&lt;/<span class="hljs-name">mi-notice-bar</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-yang-shi" tabindex="-1">自定义样式</h3>\n<p>通过 <code>color</code> 属性设置文本颜色，通过 <code>background</code> 属性设置背景色。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#1989fa&quot;</span> <span class="hljs-attr">background</span>=<span class="hljs-string">&quot;#ecf9ff&quot;</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;info-o&quot;</span>&gt;</span>\n  米袋虽空——樱花开哉！\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-notice-bar</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="chui-zhi-gun-dong" tabindex="-1">垂直滚动</h3>\n<p>搭配 NoticeBar 和 Swipe 组件，可以实现垂直滚动的效果。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-notice-bar</span> <span class="hljs-attr">left-icon</span>=<span class="hljs-string">&quot;volume-o&quot;</span> <span class="hljs-attr">:scrollable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-swipe</span>\n    <span class="hljs-attr">vertical</span>\n    <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;notice-swipe&quot;</span>\n    <span class="hljs-attr">:autoplay</span>=<span class="hljs-string">&quot;3000&quot;</span>\n    <span class="hljs-attr">:touchable</span>=<span class="hljs-string">&quot;false&quot;</span>\n    <span class="hljs-attr">:show-indicators</span>=<span class="hljs-string">&quot;false&quot;</span>\n  &gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-swipe-item</span>&gt;</span>明月直入，无心可猜。<span class="hljs-tag">&lt;/<span class="hljs-name">mi-swipe-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-swipe-item</span>&gt;</span>仙人抚我顶，结发受长生。<span class="hljs-tag">&lt;/<span class="hljs-name">mi-swipe-item</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-swipe-item</span>&gt;</span>今人不见古时月，今月曾经照古人。<span class="hljs-tag">&lt;/<span class="hljs-name">mi-swipe-item</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mi-swipe</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-notice-bar</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.notice-swipe</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">40px</span>;\n    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">40px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>mode</td>\n<td>通知栏模式，可选值为 <code>closeable</code> <code>link</code></td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>text</td>\n<td>通知文本内容</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>color</td>\n<td>通知文本颜色</td>\n<td><em>string</em></td>\n<td><code>#ed6a0c</code></td>\n</tr>\n<tr>\n<td>background</td>\n<td>滚动条背景</td>\n<td><em>string</em></td>\n<td><code>#fffbe8</code></td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>左侧图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>delay</td>\n<td>动画延迟时间 (s)</td>\n<td><em>number | string</em></td>\n<td><code>1</code></td>\n</tr>\n<tr>\n<td>speed</td>\n<td>滚动速率 (px/s)</td>\n<td><em>number | string</em></td>\n<td><code>60</code></td>\n</tr>\n<tr>\n<td>scrollable</td>\n<td>是否开启滚动播放，内容长度溢出时默认开启</td>\n<td><em>boolean</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>wrapable</td>\n<td>是否开启文本换行，只在禁用滚动时生效</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>点击通知栏时触发</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>close</td>\n<td>关闭通知栏时触发</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>replay</td>\n<td>每当滚动栏重新开始滚动时触发</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="fang-fa" tabindex="-1">方法</h3>\n<p>通过 ref 可以获取到 NoticeBar 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>reset</td>\n<td>重置通知栏到初始状态</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<p>组件导出以下类型定义：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">NoticeBarMode</span>,\n  <span class="hljs-title class_">NoticeBarProps</span>,\n  <span class="hljs-title class_">NoticeBarInstance</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n</code></pre>\n<p><code>NoticeBarInstance</code> 是组件实例的类型，用法如下：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">NoticeBarInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> noticeBarRef = ref&lt;<span class="hljs-title class_">NoticeBarInstance</span>&gt;();\n\nnoticeBarRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">reset</span>();\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>内容</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>通知文本内容</td>\n</tr>\n<tr>\n<td>left-icon</td>\n<td>自定义左侧图标</td>\n</tr>\n<tr>\n<td>right-icon</td>\n<td>自定义右侧图标</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2>\n<div class="mi-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--mi-notice-bar-height</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-padding</td>\n<td><em>0 var(--mi-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-wrapable-padding</td>\n<td><em>var(--mi-padding-xs) var(--mi-padding-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-text-color</td>\n<td><em>var(--mi-orange-dark)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-font-size</td>\n<td><em>var(--mi-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-line-height</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-background</td>\n<td><em>var(--mi-orange-light)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-icon-size</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-notice-bar-icon-min-width</td>\n<td><em>24px</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);