<template>
  <div id="header">
    <div class="topbar">
      <div class="logo"><img src="@/assets/images/logo.jpg"></div>
      <div class="left_con">
        <div class="mininav">
          <NLink to="/">
            <img src="@/assets/images/index_08.jpg">设为首页
          </NLink>
          <NLink to="/">
            <img src="@/assets/images/index_10.jpg">加入收藏
          </NLink>
          <NLink to="/">
            <img src="@/assets/images/index_12.gif">联系我们
          </NLink>
        </div>
        <div class="tel_img"><img src="@/assets/images/index_18.jpg"></div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li class="n"><NLink to="/"><span>首　页</span></NLink></li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n"><NLink to="/about"><span>关于我们</span></NLink></li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/news"><span>新闻中心</span></NLink>
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
        <li class="n">
          <NLink to="/product"><span>产品中心</span></NLink>
          <div class="submenu">
            <ul>
              <li><a href="/product#mao478"> 绝缘试验设备</a></li>
              <li><a href="/product#mao486"> 变压器试验设备</a></li>
              <li><a href="/product#mao487"> 开关测试设备</a></li>
              <li><a href="/product#mao488"> 继电保护测试</a></li>
              <li><a href="/product#mao489"> 接地电阻测试</a></li>
              <li><a href="/product#mao490"> 电缆故障测试</a></li>
              <li><a href="/product#mao491"> 气体避雷及其他</a></li>
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
        <li class="n">
          <NLink to="/sale"><span>销售服务</span></NLink>
          <div class="submenu">
            <ul>
              <li><a href="../page/sale.asp?node=news"> 销售服务</a></li>
              <li><a href="../page/sale.asp?node=news"> 服务体系</a></li>
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/talen"><span>招贤纳士</span></NLink>
          <div class="submenu">
            <ul>
              <li><a href="../page/talen.asp"> 招贤纳士</a></li>
              <li><a href="../page/talen.asp"> 人才招聘</a></li>
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/contact"><span>联系我们</span></NLink>
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
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/images/banner/1.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/banner/2.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/images/banner/3.png" alt="">
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <!--        <div class="swiper-button-next"></div>-->
        <!--        <div class="swiper-button-prev"></div>-->
      </div>
      <script>
        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          // nextButton: '.swiper-button-next',
          // prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          effect: 'fade'
        });
      </script>
    </div>
    <div class="banner_shadow"><img src="@/assets/images/index_37.gif"></div>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>
