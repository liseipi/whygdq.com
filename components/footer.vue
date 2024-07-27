<template>
  <div id="footer">
    <div class="bottom_nav">
      <div class="search">
        <input type="text" class="key" value="" id="searchWord">
        <input type="submit" class="bt" value="">
      </div>
      <NLink to="/">首　页&nbsp;&nbsp;|</NLink>
      <NLink to="/about">关于我们&nbsp;&nbsp;|</NLink>
      <NLink to="/news">新闻中心&nbsp;&nbsp;|</NLink>
      <NLink to="/product">产品中心&nbsp;&nbsp;|</NLink>
      <NLink to="/sale">销售服务&nbsp;&nbsp;|</NLink>
      <NLink to="/talen">招贤纳士&nbsp;&nbsp;|</NLink>
      <NLink to="/contact">联系我们</NLink>
    </div>
    <p style="padding: 15px 0; line-height: 2em;">
      <a href="https://beian.miit.gov.cn/" target="_blank" style="text-decoration: underline;">鄂ICP备2024054925号</a> &copy;武汉仪工电气设备有限公司 www.whelectric.com.cn 2014-{{ new Date().getFullYear() }} 版权所有
      <br>地址：武汉关山街道民院路1号光谷资本大厦3层&nbsp;电话：027-81803685 <br>
      <span>网址：<a href="https://www.whelectric.com.cn" title="website" style="text-decoration: underline;">https://www.whelectric.com.cn</a></span>
    </p>
    <div class="link" style="text-align:center; padding: 10px 0;">
      <span>友情链接：</span>
      <a target="_blank" href="https://www.jinfengtoois.com/">电磨</a>
      <a target="_blank" href="https://www.hzdq.com">电力检测</a>
      <a target="_blank" href="https://www.welinkon.com/">一氧化碳检测仪</a>
      <a target="_blank" href="https://www.whhzdq.cn">电力检测</a>
      <a target="_blank" href="https://www.srne.com.cn">太阳能控制器</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-com"
}
</script>
