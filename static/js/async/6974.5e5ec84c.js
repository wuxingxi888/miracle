"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6974"],{2595:function(n,t,s){s.r(t),s.d(t,{default:function(){return e}});var a=s(1147);let d=["innerHTML"],e={setup:()=>({html:""}),render:()=>((0,a.wg)(),(0,a.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>Pagination 分页</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>数据量过多时，采用分页的形式将数据分隔，每次只加载一个页面。</p>\n</div><div class="mi-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3>\n<p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Pagination</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Pagination</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>\n<p>通过 <code>v-model</code> 来绑定当前页码。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;24&quot;</span> <span class="hljs-attr">:items-per-page</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> currentPage = <span class="hljs-title function_">ref</span>(<span class="hljs-number">1</span>);\n    <span class="hljs-keyword">return</span> { currentPage };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="jian-dan-mo-shi" tabindex="-1">简单模式</h3>\n<p>将 <code>mode</code> 设置为 <code>simple</code> 来切换到简单模式，此时分页器不会展示具体的页码按钮。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:page-count</span>=<span class="hljs-string">&quot;12&quot;</span> <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;simple&quot;</span> /&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="xian-shi-sheng-lue-hao" tabindex="-1">显示省略号</h3>\n<p>设置 <code>force-ellipses</code> 后会展示省略号按钮，点击后可以快速跳转。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-pagination</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span>\n  <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;125&quot;</span>\n  <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;3&quot;</span>\n  <span class="hljs-attr">force-ellipses</span>\n/&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-an-niu" tabindex="-1">自定义按钮</h3>\n<p>通过 <code>prev-text</code>、<code>next-text</code> 等插槽来自定义分页按钮的内容。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-pagination</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;currentPage&quot;</span> <span class="hljs-attr">:total-items</span>=<span class="hljs-string">&quot;50&quot;</span> <span class="hljs-attr">:show-page-size</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">prev-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow-left&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">next-text</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;arrow&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">page</span>=<span class="hljs-string">&quot;{ text }&quot;</span>&gt;</span>{{ text }}<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-pagination</span>&gt;</span>\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="props" tabindex="-1">Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>当前页码</td>\n<td><em>number</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>mode</td>\n<td>显示模式，可选值为 <code>simple</code></td>\n<td><em>string</em></td>\n<td><code>multi</code></td>\n</tr>\n<tr>\n<td>prev-text</td>\n<td>上一页按钮文字</td>\n<td><em>string</em></td>\n<td><code>上一页</code></td>\n</tr>\n<tr>\n<td>next-text</td>\n<td>下一页按钮文字</td>\n<td><em>string</em></td>\n<td><code>下一页</code></td>\n</tr>\n<tr>\n<td>page-count</td>\n<td>总页数</td>\n<td><em>number | string</em></td>\n<td>根据页数计算</td>\n</tr>\n<tr>\n<td>total-items</td>\n<td>总记录数</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>items-per-page</td>\n<td>每页记录数</td>\n<td><em>number | string</em></td>\n<td><code>10</code></td>\n</tr>\n<tr>\n<td>show-page-size</td>\n<td>显示的页码个数</td>\n<td><em>number | string</em></td>\n<td><code>5</code></td>\n</tr>\n<tr>\n<td>force-ellipses</td>\n<td>是否显示省略号</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>show-prev-button <code>v4.2.1</code></td>\n<td>是否展示上一页按钮</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>show-next-button <code>v4.2.1</code></td>\n<td>是否展示下一页按钮</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="events" tabindex="-1">Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>页码改变时触发</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="slots" tabindex="-1">Slots</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>描述</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>page</td>\n<td>自定义页码</td>\n<td><em>{ number: number, text: string, active: boolean }</em></td>\n</tr>\n<tr>\n<td>prev-text</td>\n<td>自定义上一页按钮文字</td>\n<td>-</td>\n</tr>\n<tr>\n<td>next-text</td>\n<td>自定义下一页按钮文字</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<p>组件导出以下类型定义：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">PaginationMode</span>, <span class="hljs-title class_">PaginationProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2>\n<div class="mi-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--mi-pagination-height</td>\n<td><em>40px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-font-size</td>\n<td><em>var(--mi-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-item-width</td>\n<td><em>36px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-item-default-color</td>\n<td><em>var(--mi-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-item-disabled-color</td>\n<td><em>var(--mi-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-item-disabled-background</td>\n<td><em>var(--mi-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-background</td>\n<td><em>var(--mi-background-2)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-desc-color</td>\n<td><em>var(--mi-gray-7)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-pagination-disabled-opacity</td>\n<td><em>var(--mi-disabled-opacity)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);