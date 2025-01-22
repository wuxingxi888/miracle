"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["305"],{6284:function(s,n,a){a.r(n),a.d(n,{default:function(){return e}});var t=a(1147);let d=["innerHTML"],e={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>Sidebar 侧边导航</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>垂直展示的导航栏，用于在不同的内容区域之间进行切换。</p>\n</div><div class="mi-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3>\n<p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Sidebar</span>, <span class="hljs-title class_">SidebarItem</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Sidebar</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">SidebarItem</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>\n<p>通过 <code>v-model</code> 绑定当前选中项的索引。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-sidebar</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">return</span> { active };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">徽标提示</h3>\n<p>设置 <code>dot</code> 属性后，会在右上角展示一个小红点；设置 <code>badge</code> 属性后，会在右上角展示相应的徽标。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-sidebar</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="jin-yong-xuan-xiang" tabindex="-1">禁用选项</h3>\n<p>通过 <code>disabled</code> 属性禁用选项。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名称&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-sidebar</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="jian-ting-qie-huan-shi-jian" tabindex="-1">监听切换事件</h3>\n<p>设置 <code>change</code> 方法来监听切换导航项时的事件。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;active&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名 1&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名 2&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-sidebar-item</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;标签名 3&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-sidebar</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> active = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; <span class="hljs-title function_">showToast</span>(<span class="hljs-string">`标签名 <span class="hljs-subst">${index + <span class="hljs-number">1</span>}</span>`</span>);\n    <span class="hljs-keyword">return</span> {\n      active,\n      onChange,\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="sidebar-props" tabindex="-1">Sidebar Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>当前导航项的索引</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="sidebar-events" tabindex="-1">Sidebar Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>切换导航项时触发</td>\n<td><em>index: number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="sidebaritem-props" tabindex="-1">SidebarItem Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>内容</td>\n<td><em>string</em></td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>dot</td>\n<td>是否显示右上角小红点</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>badge</td>\n<td>图标右上角徽标的内容</td>\n<td><em>number | string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>badge-props</td>\n<td>自定义徽标的属性，传入的对象会被透传给 <a href="#/zh-CN/badge#props" target="_blank">Badge 组件的 props</a></td>\n<td><em>BadgeProps</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用该项</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>url</td>\n<td>点击后跳转的链接地址</td>\n<td><em>string</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>to</td>\n<td>点击后跳转的目标路由对象，等同于 Vue Router 的 <a href="https://router.vuejs.org/zh/api/interfaces/RouterLinkProps.html#Properties-to" target="_blank">to 属性</a></td>\n<td><em>string | object</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>replace</td>\n<td>是否在跳转时替换当前页面历史</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="sidebaritem-events" tabindex="-1">SidebarItem Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>click</td>\n<td>点击时触发</td>\n<td><em>index: number</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="sidebaritem-slots" tabindex="-1">SidebarItem Slots</h3>\n<table>\n<thead>\n<tr>\n<th>Name</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>title</td>\n<td>自定义标题</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<p>组件导出以下类型定义：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">SidebarProps</span>, <span class="hljs-title class_">SidebarItemProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2>\n<div class="mi-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--mi-sidebar-width</td>\n<td><em>80px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-font-size</td>\n<td><em>var(--mi-font-size-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-line-height</td>\n<td><em>var(--mi-line-height-md)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-text-color</td>\n<td><em>var(--mi-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-disabled-text-color</td>\n<td><em>var(--mi-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-padding</td>\n<td><em>20px var(--mi-padding-sm)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-active-color</td>\n<td><em>var(--mi-active-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-background</td>\n<td><em>var(--mi-background)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-selected-font-weight</td>\n<td><em>var(--mi-font-bold)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-selected-text-color</td>\n<td><em>var(--mi-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-selected-border-width</td>\n<td><em>4px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-selected-border-height</td>\n<td><em>16px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-selected-border-color</td>\n<td><em>var(--mi-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-sidebar-selected-background</td>\n<td><em>var(--mi-background-2)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,d))}}}]);