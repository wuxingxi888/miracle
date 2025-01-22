"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7297"],{4146:function(s,a,n){n.r(a),n.d(a,{default:function(){return e}});var l=n(1147);let t=["innerHTML"],e={setup:()=>({html:""}),render:()=>((0,l.wg)(),(0,l.iD)("div",{class:"mi-doc-markdown-body",innerHTML:'<h1>Checkbox 复选框</h1>\n<div class="mi-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3>\n<p>在一组备选项中进行多选。</p>\n</div><div class="mi-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3>\n<p>通过以下方式来全局注册组件，更多注册方式请参考<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">组件注册</a>。</p>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);\n</code></pre>\n</div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2>\n<div class="mi-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3>\n<p>通过 <code>v-model</code> 绑定复选框的勾选状态。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="jin-yong-zhuang-tai" tabindex="-1">禁用状态</h3>\n<p>通过设置 <code>disabled</code> 属性可以禁用复选框。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-xing-zhuang" tabindex="-1">自定义形状</h3>\n<p>将 <code>shape</code> 属性设置为 <code>square</code>，复选框的形状会变成方形。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>]);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-yan-se" tabindex="-1">自定义颜色</h3>\n<p>通过 <code>checked-color</code> 属性设置选中状态的图标颜色。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">checked-color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-da-xiao" tabindex="-1">自定义大小</h3>\n<p>通过 <code>icon-size</code> 属性可以自定义图标的大小。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">icon-size</span>=<span class="hljs-string">&quot;24px&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zi-ding-yi-tu-biao" tabindex="-1">自定义图标</h3>\n<p>通过 <code>icon</code> 插槽自定义图标，可以通过 <code>slotProps</code> 判断是否为选中状态.</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  自定义图标\n  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;props&quot;</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;img-icon&quot;</span> <span class="hljs-attr">:src</span>=<span class="hljs-string">&quot;props.checked ? activeIcon : inactiveIcon&quot;</span> /&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">\n  <span class="hljs-selector-class">.img-icon</span> {\n    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;\n  }\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n    <span class="hljs-keyword">return</span> {\n      checked,\n      <span class="hljs-attr">activeIcon</span>:\n        <span class="hljs-string">&#x27;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/check_active.png&#x27;</span>,\n      <span class="hljs-attr">inactiveIcon</span>:\n        <span class="hljs-string">&#x27;https://cdn.jsdelivr.net/gh/wuxingxi888/CDN_IMG_BED/check_inactive.png&#x27;</span>,\n    };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="zuo-ce-wen-ben" tabindex="-1">左侧文本</h3>\n<p>将 <code>label-position</code> 属性设置为 <code>\'left\'</code>，可以将文本位置调整到复选框左侧。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-position</span>=<span class="hljs-string">&quot;left&quot;</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="jin-yong-wen-ben-dian-ji" tabindex="-1">禁用文本点击</h3>\n<p>设置 <code>label-disabled</code> 属性后，点击图标以外的内容不会触发复选框切换。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">label-disabled</span>&gt;</span>复选框<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="fu-xuan-kuang-zu" tabindex="-1">复选框组</h3>\n<p>复选框可以与复选框组一起使用，复选框组通过 <code>v-model</code> 数组绑定复选框的勾选状态。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>]);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="shui-ping-pai-lie" tabindex="-1">水平排列</h3>\n<p>将 <code>direction</code> 属性设置为 <code>horizontal</code> 后，复选框组会变成水平排列。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">&quot;horizontal&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">return</span> { checked };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="xian-zhi-zui-da-ke-xuan-shu" tabindex="-1">限制最大可选数</h3>\n<p>通过 <code>max</code> 属性可以限制复选框组的最大可选数。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">:max</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>复选框 c<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox-group</span>&gt;</span>\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="quan-xuan-yu-fan-xuan" tabindex="-1">全选与反选</h3>\n<p>通过 <code>CheckboxGroup</code> 实例上的 <code>toggleAll</code> 方法可以实现全选与反选。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;checkboxGroup&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;a&quot;</span>&gt;</span>复选框 a<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;b&quot;</span>&gt;</span>复选框 b<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;c&quot;</span>&gt;</span>复选框 c<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox-group</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;checkAll&quot;</span>&gt;</span>全选<span class="hljs-tag">&lt;/<span class="hljs-name">mi-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggleAll&quot;</span>&gt;</span>反选<span class="hljs-tag">&lt;/<span class="hljs-name">mi-button</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">const</span> checkboxGroup = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAll</span> = (<span class="hljs-params"></span>) =&gt; {\n      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);\n    }\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggleAll</span> = (<span class="hljs-params"></span>) =&gt; {\n      checkboxGroup.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();\n    },\n\n    <span class="hljs-keyword">return</span> {\n      checked,\n      checkAll,\n      toggleAll,\n      checkboxGroup,\n    };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="da-pei-dan-yuan-ge-zu-jian-shi-yong" tabindex="-1">搭配单元格组件使用</h3>\n<p>搭配单元格组件使用时，需要再引入 <code>Cell</code> 和 <code>CellGroup</code> 组件，并通过 <code>Checkbox</code> 实例上的 toggle 方法触发切换。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checked&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-cell-group</span> <span class="hljs-attr">inset</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-name">mi-cell</span>\n      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in list&quot;</span>\n      <span class="hljs-attr">clickable</span>\n      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span>\n      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;`复选框 ${item}`&quot;</span>\n      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;toggle(index)&quot;</span>\n    &gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right-icon</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span>\n          <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>\n          <span class="hljs-attr">:ref</span>=<span class="hljs-string">&quot;el =&gt; checkboxRefs[index] = el&quot;</span>\n          @<span class="hljs-attr">click.stop</span>\n        /&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-name">mi-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mi-cell-group</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref, onBeforeUpdate } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> checked = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">const</span> checkboxRefs = <span class="hljs-title function_">ref</span>([]);\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">toggle</span> = (<span class="hljs-params">index</span>) =&gt; {\n      checkboxRefs.<span class="hljs-property">value</span>[index].<span class="hljs-title function_">toggle</span>();\n    };\n\n    <span class="hljs-title function_">onBeforeUpdate</span>(<span class="hljs-function">() =&gt;</span> {\n      checkboxRefs.<span class="hljs-property">value</span> = [];\n    });\n\n    <span class="hljs-keyword">return</span> {\n      <span class="hljs-attr">list</span>: [<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>],\n      toggle,\n      checked,\n      checkboxRefs,\n    };\n  },\n};\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="bu-que-ding-zhuang-tai" tabindex="-1">不确定状态</h3>\n<p>通过 <code>indeterminate</code> 设置复选框是否为不确定状态。</p>\n<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span>\n  <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isCheckAll&quot;</span>\n  <span class="hljs-attr">:indeterminate</span>=<span class="hljs-string">&quot;isIndeterminate&quot;</span>\n  @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;checkAllChange&quot;</span>\n&gt;</span>\n  全选\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;checkedResult&quot;</span> @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;checkedResultChange&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">mi-checkbox</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;item in list&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;item&quot;</span> <span class="hljs-attr">:name</span>=<span class="hljs-string">&quot;item&quot;</span>&gt;</span>\n    复选框 {{ item }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">mi-checkbox-group</span>&gt;</span>\n</code></pre>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> list = [<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>, <span class="hljs-string">&#x27;c&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>]\n\n    <span class="hljs-keyword">const</span> isCheckAll = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> checkedResult = <span class="hljs-title function_">ref</span>([<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>, <span class="hljs-string">&#x27;d&#x27;</span>]);\n    <span class="hljs-keyword">const</span> isIndeterminate = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">true</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkAllChange</span> = (<span class="hljs-params">val: boolean</span>) =&gt; {\n      checkedResult.<span class="hljs-property">value</span> = val ? list : []\n      isIndeterminate.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>\n    }\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">checkedResultChange</span> = (<span class="hljs-params">value: string[]</span>) =&gt; {\n      <span class="hljs-keyword">const</span> checkedCount = value.<span class="hljs-property">length</span>\n      isCheckAll.<span class="hljs-property">value</span> = checkedCount === list.<span class="hljs-property">length</span>\n      isIndeterminate.<span class="hljs-property">value</span> = checkedCount &gt; <span class="hljs-number">0</span> &amp;&amp; checkedCount &lt; list.<span class="hljs-property">length</span>\n    }\n\n    <span class="hljs-keyword">return</span> {\n      list,\n      isCheckAll,\n      checkedResult,\n      checkAllChange,\n      isIndeterminate,\n      checkedResultChange\n    };\n  },\n};\n</code></pre>\n</div><h2 id="api" tabindex="-1">API</h2>\n<div class="mi-doc-card"><h3 id="checkbox-props" tabindex="-1">Checkbox Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>是否为选中状态</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>标识符，通常为一个唯一的字符串或数字</td>\n<td><em>any</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>shape</td>\n<td>形状，可选值为 <code>square</code></td>\n<td><em>string</em></td>\n<td><code>round</code></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用复选框</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>label-disabled</td>\n<td>是否禁用复选框文本点击</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>label-position</td>\n<td>文本位置，可选值为 <code>left</code></td>\n<td><em>string</em></td>\n<td><code>right</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>图标大小，默认单位为 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>checked-color</td>\n<td>选中状态颜色</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>bind-group</td>\n<td>是否与复选框组绑定</td>\n<td><em>boolean</em></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>indeterminate</td>\n<td>是否为不确定状态</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="checkboxgroup-props" tabindex="-1">CheckboxGroup Props</h3>\n<table>\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>v-model</td>\n<td>所有选中项的标识符</td>\n<td><em>any[]</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>是否禁用所有复选框</td>\n<td><em>boolean</em></td>\n<td><code>false</code></td>\n</tr>\n<tr>\n<td>max</td>\n<td>最大可选数，<code>0</code> 为无限制</td>\n<td><em>number | string</em></td>\n<td><code>0</code></td>\n</tr>\n<tr>\n<td>direction</td>\n<td>排列方向，可选值为 <code>horizontal</code></td>\n<td><em>string</em></td>\n<td><code>vertical</code></td>\n</tr>\n<tr>\n<td>icon-size</td>\n<td>所有复选框的图标大小，默认单位为 <code>px</code></td>\n<td><em>number | string</em></td>\n<td><code>20px</code></td>\n</tr>\n<tr>\n<td>checked-color</td>\n<td>所有复选框的选中状态颜色</td>\n<td><em>string</em></td>\n<td><code>#1989fa</code></td>\n</tr>\n<tr>\n<td>shape <code>v4.6.3</code></td>\n<td>形状，可选值为 <code>square</code></td>\n<td><em>string</em></td>\n<td><code>round</code></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="checkbox-events" tabindex="-1">Checkbox Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>当绑定值变化时触发的事件</td>\n<td><em>checked: boolean</em></td>\n</tr>\n<tr>\n<td>click</td>\n<td>点击复选框时触发</td>\n<td><em>event: MouseEvent</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="checkboxgroup-events" tabindex="-1">CheckboxGroup Events</h3>\n<table>\n<thead>\n<tr>\n<th>事件名</th>\n<th>说明</th>\n<th>回调参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>change</td>\n<td>当绑定值变化时触发的事件</td>\n<td><em>names: any[]</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="checkbox-slots" tabindex="-1">Checkbox Slots</h3>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>说明</th>\n<th>参数</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>default</td>\n<td>自定义文本</td>\n<td><em>{ checked: boolean, disabled: boolean }</em></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>自定义图标</td>\n<td><em>{ checked: boolean, disabled: boolean }</em></td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="checkboxgroup-fang-fa" tabindex="-1">CheckboxGroup 方法</h3>\n<p>通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggleAll</td>\n<td>切换所有复选框，传 <code>true</code> 为选中，<code>false</code> 为取消选中，不传参为取反</td>\n<td><em>options?: boolean | object</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="toggleall-fang-fa-shi-li" tabindex="-1">toggleAll 方法示例</h3>\n<pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> type { <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();\n\n<span class="hljs-comment">// 全部反选</span>\ncheckboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>();\n<span class="hljs-comment">// 全部选中</span>\ncheckboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">true</span>);\n<span class="hljs-comment">// 全部取消</span>\ncheckboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>(<span class="hljs-literal">false</span>);\n\n<span class="hljs-comment">// 全部反选，并跳过禁用的复选框</span>\ncheckboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>({\n  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,\n});\n<span class="hljs-comment">// 全部选中，并跳过禁用的复选框</span>\ncheckboxGroupRef?.<span class="hljs-property">value</span>.<span class="hljs-title function_">toggleAll</span>({\n  <span class="hljs-attr">checked</span>: <span class="hljs-literal">true</span>,\n  <span class="hljs-attr">skipDisabled</span>: <span class="hljs-literal">true</span>,\n});\n</code></pre>\n</div><div class="mi-doc-card"><h3 id="checkbox-fang-fa" tabindex="-1">Checkbox 方法</h3>\n<p>通过 ref 可以获取到 Checkbox 实例并调用实例方法，详见<a href="#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa" target="_blank">组件实例方法</a>。</p>\n<table>\n<thead>\n<tr>\n<th>方法名</th>\n<th>说明</th>\n<th>参数</th>\n<th>返回值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>toggle</td>\n<td>切换选中状态，传 <code>true</code> 为选中，<code>false</code> 为取消选中，不传参为取反</td>\n<td><em>checked?: boolean</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div><div class="mi-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3>\n<p>组件导出以下类型定义：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {\n  <span class="hljs-title class_">CheckboxProps</span>,\n  <span class="hljs-title class_">CheckboxShape</span>,\n  <span class="hljs-title class_">CheckboxInstance</span>,\n  <span class="hljs-title class_">CheckboxLabelPosition</span>,\n  <span class="hljs-title class_">CheckboxGroupProps</span>,\n  <span class="hljs-title class_">CheckboxGroupInstance</span>,\n  <span class="hljs-title class_">CheckboxGroupDirection</span>,\n  <span class="hljs-title class_">CheckboxGroupToggleAllOptions</span>,\n} <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n</code></pre>\n<p><code>CheckboxInstance</code> 和 <code>CheckboxGroupInstance</code> 是组件实例的类型，用法如下：</p>\n<pre><code class="language-ts"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;vue&#x27;</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CheckboxInstance</span>, <span class="hljs-title class_">CheckboxGroupInstance</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@miracle-web/ui&#x27;</span>;\n\n<span class="hljs-keyword">const</span> checkboxRef = ref&lt;<span class="hljs-title class_">CheckboxInstance</span>&gt;();\n<span class="hljs-keyword">const</span> checkboxGroupRef = ref&lt;<span class="hljs-title class_">CheckboxGroupInstance</span>&gt;();\n\ncheckboxRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggle</span>();\ncheckboxGroupRef.<span class="hljs-property">value</span>?.<span class="hljs-title function_">toggleAll</span>();\n</code></pre>\n</div><h2 id="zhu-ti-ding-zhi" tabindex="-1">主题定制</h2>\n<div class="mi-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">样式变量</h3>\n<p>组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider 组件</a>。</p>\n<table>\n<thead>\n<tr>\n<th>名称</th>\n<th>默认值</th>\n<th>描述</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>--mi-checkbox-size</td>\n<td><em>20px</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-border-color</td>\n<td><em>var(--mi-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-duration</td>\n<td><em>var(--mi-duration-fast)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-label-margin</td>\n<td><em>var(--mi-padding-xs)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-label-color</td>\n<td><em>var(--mi-text-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-checked-icon-color</td>\n<td><em>var(--mi-primary-color)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-disabled-icon-color</td>\n<td><em>var(--mi-gray-5)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-disabled-label-color</td>\n<td><em>var(--mi-text-color-3)</em></td>\n<td>-</td>\n</tr>\n<tr>\n<td>--mi-checkbox-disabled-background</td>\n<td><em>var(--mi-border-color)</em></td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n</div>'},null,8,t))}}}]);