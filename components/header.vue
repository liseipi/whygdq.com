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
        <li class="n">
          <NLink to="/"><span>首　页</span></NLink>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/about"><span>关于我们</span></NLink>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/news"><span>新闻中心</span></NLink>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/product"><span>产品中心</span></NLink>
          <div class="submenu">
            <ul>
              <li>
                <NLink to="/product#mao478"> 绝缘试验设备</NLink>
              </li>
              <li>
                <NLink to="/product#mao486"> 变压器试验设备</NLink>
              </li>
              <li>
                <NLink to="/product#mao487"> 开关测试设备</NLink>
              </li>
              <li>
                <NLink to="/product#mao488"> 继电保护测试</NLink>
              </li>
              <li>
                <NLink to="/product#mao489"> 接地电阻测试</NLink>
              </li>
              <li>
                <NLink to="/product#mao490"> 电缆故障测试</NLink>
              </li>
              <li>
                <NLink to="/product#mao491"> 气体避雷及其他</NLink>
              </li>
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/sale"><span>销售服务</span></NLink>
          <div class="submenu">
            <ul>
              <li>
                <NLink to="/sale"> 销售服务</NLink>
              </li>
              <li>
                <NLink to="/sale"> 服务体系</NLink>
              </li>
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/talen"><span>招贤纳士</span></NLink>
          <div class="submenu">
            <ul>
              <li>
                <NLink to="/talen"> 招贤纳士</NLink>
              </li>
              <li>
                <NLink to="/talen"> 人才招聘</NLink>
              </li>
            </ul>
          </div>
        </li>
        <li class="line"><img src="@/assets/images/index_29.jpg"></li>
        <li class="n">
          <NLink to="/contact"><span>联系我们</span></NLink>
          <div class="submenu">
            <ul>
              <li>
                <NLink to="/contact">联系我们</NLink>
              </li>
              <li>
                <NLink to="/contact">客户留言</NLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
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
    </div>
    <div class="banner_shadow"><img src="@/assets/images/index_37.gif"></div>
  </div>
</template>

<script>
export default {
  name: "header-com",
  mounted() {
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
  }
}
</script>
