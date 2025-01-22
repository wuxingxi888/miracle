"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3045"],{7592:function(s,n,a){a.r(n),a.d(n,{default:function(){return e}});var t=a(1147);let l=["innerHTML"],e={setup:()=>({html:""}),render:()=>((0,t.wg)(),(0,t.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>useClickAway</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>监听点击元素外部的事件。</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n    <span class="hljs-title function_">useClickAway</span>(root, <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;click outside!&#x27;</span>);\n    });\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-shi-jian" tabindex="-1">自定义事件</h3>\n<p>通过 <code>eventName</code> 选项可以自定义需要监听的事件类型。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;root&quot;</span> /&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useClickAway } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> root = <span class="hljs-title function_">ref</span>();\n    <span class="hljs-title function_">useClickAway</span>(\n      root,\n      <span class="hljs-function">() =&gt;</span> {\n        <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#x27;touch outside!&#x27;</span>);\n      },\n      { <span class="hljs-attr">eventName</span>: <span class="hljs-string">&#x27;touchstart&#x27;</span> },\n    );\n\n    <span class="hljs-keyword">return</span> { root };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">Options</span> = {\n  eventName?: <span class="hljs-built_in">string</span>;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useClickAway</span>(<span class="hljs-params">\n  <span class="hljs-attr">target</span>:\n    | <span class="hljs-title class_">Element</span>\n    | <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">Element</span> | <span class="hljs-literal">undefined</span>&gt;\n    | <span class="hljs-title class_">Array</span>&lt;<span class="hljs-title class_">Element</span> | <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-title class_">Element</span> | <span class="hljs-literal">undefined</span>&gt;&gt;,\n  <span class="hljs-attr">listener</span>: <span class="hljs-title class_">EventListener</span>,\n  options?: <span class="hljs-title class_">Options</span>,\n</span>): <span class="hljs-built_in">void</span>;\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="can-shu" tabindex="-1">参数</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>target</td>\n<td>绑定事件的元素，支持传入数组来绑定多个元素</td>\n<td><em>Element | Ref&lt;Element&gt; | Array&lt;Element | Ref&lt;Element&gt;&gt;</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>listener</td>\n<td>点击外部时触发的回调函数</td>\n<td><em>EventListener</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>options</td>\n<td>可选的配置项</td>\n<td><em>Options</em></td>\n<td>见下表</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="options" tabindex="-1">Options</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>eventName</td>\n<td>监听的事件类型</td>\n<td><em>string</em></td>\n<td><code>click</code></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,l))}}}]);