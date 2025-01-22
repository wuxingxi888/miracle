"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4962"],{899:function(s,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(1147);let e=["innerHTML"],d={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>Image 图片</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。</p>\n</div><div class="mi-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3>\n<p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">MiImage</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">MiImage</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>\n<p>基础用法与原生 <code>img</code> 标签一致，可以设置 <code>src</code>、<code>width</code>、<code>height</code>、<code>alt</code> 等原生属性。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="yu-lan-mo-shi" tabindex="-1">预览模式</h3>\n<p>通过 <code>enable-preview</code> 属性可以开启图片预览模式，点击图片会自动预览，预览时图片会自动填充屏幕。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>\n  <span class="hljs-attr">enable-preview</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="tian-chong-mo-shi" tabindex="-1">填充模式</h3>\n<p>通过 <code>fit</code> 属性可以设置图片填充模式，等同于原生的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit" target="_blank">object-fit</a> 属性，可选值见下方表格。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;contain&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="tu-pian-wei-zhi" tabindex="-1">图片位置</h3>\n<p>通过 <code>position</code> 属性可以设置图片位置，结合 <code>fit</code> 属性使用，等同于原生的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position" target="_blank">object-position</a> 属性。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">fit</span>=<span class="hljs-string">&quot;cover&quot;</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;left&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="yuan-xing-tu-pian" tabindex="-1">圆形图片</h3>\n<p>通过 <code>round</code> 属性可以设置图片变圆，注意当图片宽高不相等且 <code>fit</code> 为 <code>contain</code> 或 <code>scale-down</code> 时，将无法填充一个完整的圆形。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;10rem&quot;</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="tu-pian-lan-jia-zai" tabindex="-1">图片懒加载</h3>\n<p>设置 <code>lazy-load</code> 属性来开启图片懒加载，需要搭配 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> 组件使用。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span>\n  <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>\n  <span class="hljs-attr">lazy-load</span>\n  <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>\n/&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="jia-zai-zhong-ti-shi" tabindex="-1">加载中提示</h3>\n<p><code>Image</code> 组件提供了默认的加载中提示，支持通过 <code>loading</code> 插槽自定义内容。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:loading</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-loading</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;spinner&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;20&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-image</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="jia-zai-shi-bai-ti-shi" tabindex="-1">加载失败提示</h3>\n<p><code>Image</code> 组件提供了默认的加载失败提示，支持通过 <code>error</code> 插槽自定义内容。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/avatar.jpg&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">v-slot:error</span>&gt;</span>加载失败<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-image</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>src</td>\n<td>图片链接</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>enable-preview</td>\n<td>是否开启图片预览模式</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>fit</td>\n<td>图片填充模式，等同于原生的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit" target="_blank">object-fit</a> 属性</td>\n<td><em>string</em></td>\n<td><code>fill</code></td>\n</tr>\n<tr>\n<td>position</td>\n<td>图片位置，等同于原生的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position" target="_blank">object-position</a> 属性，可选值为 <code>top</code> <code>right</code> <code>bottom</code> <code>left</code> 或 <code>string</code></td>\n<td><em>string</em></td>\n<td><code>center</code></td>\n</tr>\n<tr>\n<td>alt</td>\n<td>替代文本</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>width</td>\n<td>宽度，默认单位为 <code>px</code></td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>height</td>\n<td>高度，默认单位为 <code>px</code></td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>radius</td>\n<td>圆角大小，默认单位为 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>round</td>\n<td>是否显示为圆形</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>block <code>3.6.3</code></td>\n<td>是否将根节点设置为块级元素，默认情况下为 <code>inline-block</code> 元素</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>lazy-load</td>\n<td>是否开启图片懒加载，须配合 <a href="#/zh-CN/lazyload" target="_blank">Lazyload</a> 组件使用</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-error</td>\n<td>是否展示图片加载失败提示</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-loading</td>\n<td>是否展示图片加载中提示</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>error-icon</td>\n<td>失败时提示的图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td>\n<td><em>string</em></td>\n<td><code>photo-fail</code></td>\n</tr>\n<tr>\n<td>loading-icon</td>\n<td>加载时提示的图标名称或图片链接，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">name 属性</a></td>\n<td><em>string</em></td>\n<td><code>photo</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>加载图标和失败图标的大小</td>\n<td><em>number | string</em></td>\n<td><code>32px</code></td>\n</tr>\n<tr>\n<td>icon-prefix</td>\n<td>图标类名前缀，等同于 Icon 组件的 <a href="#/zh-CN/icon#props" target="_blank">class-prefix 属性</a></td>\n<td><em>string</em></td>\n<td><code>mi-icon</code></td>\n</tr>\n<tr>\n<td>crossorigin</td>\n<td>等同于原生的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/crossOrigin" target="_blank">crossorigin</a> 属性</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>referrerpolicy</td>\n<td>等同于原生的 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/referrerPolicy" target="_blank">referrerpolicy</a> 属性</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="tu-pian-tian-chong-mo-shi" tabindex="-1">图片填充模式</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>含义</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>contain</td>\n<td>保持宽高缩放图片，使图片的长边能完全显示出来</td>\n</tr>\n<tr>\n<td>cover</td>\n<td>保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边</td>\n</tr>\n<tr>\n<td>fill</td>\n<td>拉伸图片，使图片填满元素</td>\n</tr>\n<tr>\n<td>none</td>\n<td>保持图片原有尺寸</td>\n</tr>\n<tr>\n<td>scale-down</td>\n<td>取 <code>none</code> 或 <code>contain</code> 中较小的一个</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>点击图片时触发</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n<tr>\n<td>load</td>\n<td>图片加载完毕时触发</td>\n<td><em>event: Event</em></td>\n</tr>\n<tr>\n<td>error</td>\n<td>图片加载失败时触发</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>自定义图片下方的内容</td>\n</tr>\n<tr>\n<td>loading</td>\n<td>自定义加载中的提示内容</td>\n</tr>\n<tr>\n<td>error</td>\n<td>自定义加载失败时的提示内容</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<p>组件导出以下类型定义：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">ImageFit</span>, <span class="hljs-title class_">ImagePosition</span>, <span class="hljs-title class_">ImageProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2>\n<div class="mi-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--mi-image-placeholder-text-color</td>\n<td><em>var(--mi-text-color-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-image-placeholder-font-size</td>\n<td><em>var(--mi-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-image-placeholder-background</td>\n<td><em>var(--mi-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-image-loading-icon-size</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-image-loading-icon-color</td>\n<td><em>var(--mi-gray-4)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-image-error-icon-size</td>\n<td><em>32px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-image-error-icon-color</td>\n<td><em>var(--mi-gray-4)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><h2 id="chang-jian-wen-ti" tabindex="-1">常见问题</h2>\n<div class="mi-doc-card"><h3 id="ru-he-yin-yong-ben-di-tu-pian" tabindex="-1">如何引用本地图片？</h3>\n<p>在 .vue 文件中通过相对路径引用本地图片时，需要在图片的链接外包上一层 <code>require()</code>，将图片 URL 转换为 webpack 模块请求，并结合 <a href="https://github.com/webpack-contrib/file-loader" target="_blank">file-loader</a> 或者 <a href="https://github.com/webpack-contrib/url-loader" target="_blank">url-loader</a> 进行处理。</p>\n<pre><code class="language-html"><span class="hljs-comment">&lt;!-- 错误写法 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;./image.png&quot;</span> /&gt;</span>\n\n<span class="hljs-comment">&lt;!-- 正确写法 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-image</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;require(&#x27;./image.png&#x27;)&quot;</span> /&gt;</span>\n</code></pre>\n<blockquote>\n<p>对此更详细的解释可以参考 vue-loader 的<a href="https://vue-loader.vuejs.org/zh/guide/asset-url.html" target="_blank">处理资源路径</a>章节。</p>\n</blockquote>\n</div><div class="mi-doc-card"><h3 id="shi-yong-image-biao-qian-wu-fa-xuan-ran" tabindex="-1">使用 image 标签无法渲染？</h3>\n<p>使用 Image 组件时，可能会遇到将 &lt;image&gt; 作为标签名时无法渲染的问题，比如下面的写法：</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;xxx&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Image</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    <span class="hljs-title class_">Image</span>,\n  },\n};\n&lt;script&gt;\n</span></code></pre>\n<p>这是因为 &lt;image&gt; 标签是原生的 SVG 标签，Vue 不允许将原生标签名注册为组件名，使用 &lt;mi-image&gt; 即可规避这个问题。</p>\n</div>'},null,8,e))}}}]);