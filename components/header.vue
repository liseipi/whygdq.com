<template>
  <div id="header">
    <div class="topbar">
      <div class="logo"><img src="@/assets/images/logo.jpg"></div>
      <div class="left_con">
        <div class="mininav">
          <a href="#">
            <img src="@/assets/images/index_08.jpg">设为首页</a>
          <a target="_top" href="#">
            <img src="@/assets/images/index_10.jpg">加入收藏</a>
          <a href="/content.aspx?node=c1">
            <img src="@/assets/images/index_12.gif">联系我们</a>
        </div>
        <div class="tel_img"><img src="@/assets/images/index_18.jpg"></div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li class="n"><a href="../index.asp" id="nav_current"><span>首　页</span></a></li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n"><a href="../page/about.asp?node=a1"><span>关于我们</span></a>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n"><a href="../page/news.asp?node=news"><span>新闻中心</span></a>
          <!-- <div class="submenu">
            <ul>
            <li><a href="../page/news.asp?node=news1"> 行业新闻</a></li>
            <li><a href="../page/news.asp?node=511"> 最新文章</a></li>
            <li><a href="../page/news.asp?node=news2"> 公司新闻</a></li>
            <li><a href="../page/news.asp?node=news3"> 最新动态</a></li>
            </ul>
          </div> -->
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n"><a href="../page/product.asp"><span>产品中心</span></a>
          <div class="submenu">
            <ul>
              <li><a href="../page/product.asp#mao478"> 绝缘试验设备</a></li>
              <li><a href="../page/product.asp#mao486"> 变压器试验设备</a></li>
              <li><a href="../page/product.asp#mao487"> 开关测试设备</a></li>
              <li><a href="../page/product.asp#mao488"> 继电保护测试</a></li>
              <li><a href="../page/product.asp#mao489"> 接地电阻测试</a></li>
              <li><a href="../page/product.asp#mao490"> 电缆故障测试</a></li>
              <li><a href="../page/product.asp#mao491"> 气体避雷及其他</a></li>
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <!-- <li class="n"><a href="/content.aspx?node=down"><span>资料中心</span></a>
          <div class="submenu">
          <ul>
             <li><a href="/content.aspx?node=down">说明书下载</a></li>
             <li><a href="/content.aspx?node=gcxz">规程下载</a></li>
             <li><a href="/content.aspx?node=know">技术资料</a></li>
          </ul>
          </div>
        </li> -->
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n"><a href="../page/sale.asp?node=news"><span>销售服务</span></a>
          <div class="submenu">
            <ul>
              <li><a href="../page/sale.asp?node=news"> 销售服务</a></li>
              <li><a href="../page/sale.asp?node=news"> 服务体系</a></li>
              s
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n"><a href="../page/talen.asp"><span>招贤纳士</span></a>
          <div class="submenu">
            <ul>
              <li><a href="../page/talen.asp"> 招贤纳士</a></li>
              <li><a href="../page/talen.asp"> 人才招聘</a></li>
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n"><a href="../page/contact.asp"><span>联系我们</span></a>
          <div class="submenu">
            <ul>
              <li><a href="../page/contact.asp">联系我们</a></li>
              <li><a href="../page/contact.asp">客户留言</a></li>
            </ul>
          </div>
        </li>
      </ul>
      <script type="text/javascript">
        $(".nav ul li.n").each(function () {
          $(this).hover(function () {

            if ($(this).find("li").length > 0) {
              $(this).find(".submenu").stop(false, true).show();
            }

          }, function () {

            if ($(this).find("li").length > 0) {
              $(this).find(".submenu").stop(false, true).hide();
            }
          });
        });
      </script>
    </div>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>
