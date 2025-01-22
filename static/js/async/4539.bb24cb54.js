"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4539"],{725:function(s,n,a){a.r(n),a.d(n,{default:function(){return e}});var l=a(1147);let t=["innerHTML"],e={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>useRelation</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>建立父子组件之间的关联关系，进行数据通信和方法调用，基于 <code>provide</code> 和 <code>inject</code> 实现。</p>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-ben-yong-fa" tabindex="-1">基本用法</h3>\n<p>在父组件中使用 <code>useChildren</code> 关联子组件:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { useChildren } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/use&#x27;</span>;\n\n<span class="hljs-keyword">const</span> <span class="hljs-variable constant_">RELATION_KEY</span> = <span class="hljs-title class_">Symbol</span>(<span class="hljs-string">&#x27;my-relation&#x27;</span>);\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { linkChildren } = <span class="hljs-title function_">useChildren</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-keyword">const</span> count = <span class="hljs-title function_">ref</span>(<span class="hljs-number">0</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params"></span>) =&gt; {\n      count.<span class="hljs-property">value</span>++;\n    };\n\n    <span class="hljs-comment">// 向子组件提供数据和方法</span>\n    <span class="hljs-title function_">linkChildren</span>({ add, count });\n  },\n};\n</code></pre>\n<p>在子组件中使用 <code>useParent</code> 获取父组件提供的数据和方法:</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { useParent } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/use&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> { parent } = <span class="hljs-title function_">useParent</span>(<span class="hljs-variable constant_">RELATION_KEY</span>);\n\n    <span class="hljs-comment">// 调用父组件提供的数据和方法</span>\n    <span class="hljs-keyword">if</span> (parent) {\n      parent.<span class="hljs-title function_">add</span>();\n      <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(parent.<span class="hljs-property">count</span>.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; 1</span>\n    }\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<pre><code class="language-ts"><span class="hljs-keyword">function</span> useParent&lt;T&gt;(<span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span>): {\n  parent?: T;\n  index?: <span class="hljs-title class_">Ref</span>&lt;<span class="hljs-built_in">number</span>&gt;;\n};\n\n<span class="hljs-keyword">function</span> <span class="hljs-title function_">useChildren</span>(<span class="hljs-params"><span class="hljs-attr">key</span>: <span class="hljs-built_in">string</span> | <span class="hljs-built_in">symbol</span></span>): {\n  <span class="hljs-attr">children</span>: <span class="hljs-title class_">ComponentPublicInstance</span>[];\n  <span class="hljs-attr">linkChildren</span>: <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">value</span>: <span class="hljs-built_in">any</span></span>) =&gt;</span> <span class="hljs-built_in">void</span>;\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="useparent-fan-hui-zhi" tabindex="-1">useParent 返回值</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>parent</td>\n<td>父组件提供的值</td>\n<td><em>any</em></td>\n</tr>\n<tr>\n<td>index</td>\n<td>当前组件在父组件的所有子组件中对应的索引位置</td>\n<td><em>Ref&lt;number&gt;</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="usechildren-fan-hui-zhi" tabindex="-1">useChildren 返回值</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>children</td>\n<td>子组件列表</td>\n<td><em>ComponentPublicInstance[]</em></td>\n</tr>\n<tr>\n<td>linkChildren</td>\n<td>向子组件提供值的方法</td>\n<td><em>(value: any) =&gt; void</em></td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);