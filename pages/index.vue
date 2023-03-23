<template>
  <div id="content">
    <div class="fir_con">
      <div class="fir_pro">
        <div class="fir_protit">
          <div class="protit_text">
            <h3>产品分类 <span>product</span></h3>
            <p><NLink to="/product"><img src="@/assets/images/index_42.jpg"></NLink></p>
          </div>
        </div>
        <ul>
          <li><NLink to="/product#mao478"> 绝缘试验设备</NLink></li>
          <li><NLink to="/product#mao486"> 变压器试验设备</NLink></li>
          <li><NLink to="/product#mao487"> 开关测试设备</NLink></li>
          <li><NLink to="/product#mao488"> 继电保护测试</NLink></li>
          <li><NLink to="/product#mao489"> 接地电阻测试</NLink></li>
          <li><NLink to="/product#mao490"> 电缆故障测试</NLink></li>
        </ul>
      </div>
      <div class="fir_ab">
        <div class="fir_abtit">
          <div class="abtit_text">
            <h3>企业简介 <span>About us</span></h3>
            <NLink to="/about"><img src="@/assets/images/index_42.jpg"></NLink>
          </div>
        </div>
        <div class="abimgcont"><img src="@/assets/images/img_03.jpg" width="242" height="50"></div>
        <p>武汉仪工电气设备有限公司公司于2002年成立至今已经有十二年的时间，是一家专业致力于生产和销售各类电力检测、试验设备的高新技术企业。</p>
      </div>
      <div class="fir_new">
        <div class="fir_newtit">
          <dl>
            <dt class="cur"><h3>行业新闻</h3></dt>
          </dl>
        </div>
        <div class="tabcont" style="display: block;">
          <ul>
            <li><NLink to="/news" title="高压试验变压器的主要特点"><p>高压试验变压器的主要特点</p></NLink></li>
            <li><NLink to="/news" title="工频耐压试验安全要注意的六点"><p>工频耐压试验安全要注意的六点</p></NLink></li>
            <li><NLink to="/news" title="教你如何做高压设备绝缘电阻测量"><p>教你如何做高压设备绝缘电阻测量</p></NLink></li>
            <li><NLink to="/news" title="我们使用交直流两用试验变压器应小心"><p>我们使用交直流两用试验变压器应小心</p></NLink></li>
            <li><NLink to="/news" title="兆欧表的作用及特点有哪些"><p>兆欧表的作用及特点有哪些</p></NLink></li>
            <li><NLink to="/news" title="带你一起初步探析电厂热工电缆施工与接地的原理"><p>带你一起初步探析电厂热工电缆施工...</p></NLink></li>
          </ul>
        </div>
      </div>
      <div class="fir_contact">
        <div class="con_us"> <img src="@/assets/images/index_45.jpg"> <NLink to="/contact">详细请点击</NLink> </div>
        <div class="con_add"> <img src="@/assets/images/index_48.gif"> <span>027-81803685</span> <img src="@/assets/images/index_53.jpg">
          <p>武汉关山街道民院路1号光谷资本大厦3层</p>
        </div>
        <div class="con_tel"><img src="@/assets/images/tel_03.gif"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s',
  }
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;

}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
