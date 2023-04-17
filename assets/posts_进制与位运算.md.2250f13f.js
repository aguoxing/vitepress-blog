import{_ as s,c as n,o as a,O as p}from"./chunks/framework.97fbe135.js";const m=JSON.parse('{"title":"进制与位运算","description":"进制与位运算","frontmatter":{"title":"进制与位运算","description":"进制与位运算","date":"2022-10-22T00:00:00.000Z","category":"碎片","tags":["进制与位运算"]},"headers":[],"relativePath":"posts/进制与位运算.md","lastUpdated":1681706878000}'),e={name:"posts/进制与位运算.md"},l=p(`<h1 id="进制与位运算" tabindex="-1">进制与位运算 <a class="header-anchor" href="#进制与位运算" aria-label="Permalink to &quot;进制与位运算&quot;">​</a></h1><h2 id="原码、反码、补码" tabindex="-1">原码、反码、补码 <a class="header-anchor" href="#原码、反码、补码" aria-label="Permalink to &quot;原码、反码、补码&quot;">​</a></h2><p>二进制最高位是符号位，0表示正数，1表示负数</p><p>比如<code>1</code>的二进制是<code>0000 0001 </code>，<code>-1</code>是<code>1000 0001</code></p><p>正数的原码、反码、补码都一样</p><p>负数的反码=它原码符号位不变，其他位取反（0-&gt;1，1-&gt;0）</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1==&gt;原码[0000 0001] 反码[0000 0001] 补码[0000 0001]</span></span>
<span class="line"><span style="color:#A6ACCD;">-1===&gt;原码[1000 0001] 反码[1111 1110] 补码[1111 1111]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>负数的补码=它的反码+1</p><p>0的反码、补码都是0</p><p>计算机运算的时候，都是以补码的方式来运算的</p><h2 id="位运算" tabindex="-1">位运算 <a class="header-anchor" href="#位运算" aria-label="Permalink to &quot;位运算&quot;">​</a></h2><p>按位与&amp;</p><p>两位全为1，结果为1，否则为0</p><p>按位或|</p><p>两位有一个为1，结果为1，否则为0</p><p>按位异或^</p><p>两位一个为0，一个为1，结果为1，否则为0</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">2&amp;3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2 的补码  0000 0010</span></span>
<span class="line"><span style="color:#A6ACCD;">3 的补码  0000 0011</span></span>
<span class="line"><span style="color:#A6ACCD;">2&amp;3           0000 0010  =&gt; 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2|3=?</span></span>
<span class="line"><span style="color:#A6ACCD;">2 的补码  0000 0010</span></span>
<span class="line"><span style="color:#A6ACCD;">3 的补码  0000 0011</span></span>
<span class="line"><span style="color:#A6ACCD;">2|3            0000 0011 =&gt; 3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">2^3</span></span>
<span class="line"><span style="color:#A6ACCD;">2 的补码  0000 0010</span></span>
<span class="line"><span style="color:#A6ACCD;">3 的补码  0000 0011</span></span>
<span class="line"><span style="color:#A6ACCD;">2^3            0000 0001 =&gt;1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-2^2</span></span>
<span class="line"><span style="color:#A6ACCD;">-2 的原码  1000 0010 =》反码 1111 1101 =&gt; 补码  1111 1110  </span></span>
<span class="line"><span style="color:#A6ACCD;">                     1111 1110  </span></span>
<span class="line"><span style="color:#A6ACCD;">2  的补码   0000 0010</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">-2^2             1111 1100  （补码） ===》 原码</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"> 1111 1100  =》 反码   1111 1011 =》 原码  1000 0100 ==》 -4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div>`,18),r=[l];function c(o,t,i,b,C,A){return a(),n("div",null,r)}const u=s(e,[["render",c]]);export{m as __pageData,u as default};
