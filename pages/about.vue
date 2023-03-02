<template>
  <div id="content">
    <div class="side">
      <div class="ab_side">
        <div class="ab_sidetit">
          <div class="abside_text">
            <h3>关于我们 <span>About us</span></h3>
          </div>
        </div>
        <ul>
          <li><NLink to="/about" class="on"> 公司简介</NLink></li>
          <li><NLink to="/about" class=""> 企业文化</NLink></li>
          <li><NLink to="/about" class=""> 企业资质</NLink></li>
          <li><NLink to="/about" class=""> 发展历程</NLink></li>
          <li><NLink to="/about" class=""> 组织结构</NLink></li>
        </ul>
      </div>
      <div class="side_all">
        <div class="clear"></div>
        <div class="side_contact">
          <div class="con_us"> <img src="@/assets/images/index_45.jpg"> <NLink to="/contact">详细请点击</NLink> </div>
          <div class="con_add"> <img src="@/assets/images/index_48.gif"> <span>027-81803685</span> <img src="@/assets/images/index_53.jpg">
            <p>武汉关山街道民院路1号光谷资本大厦3层</p>
          </div>
          <!-- <div class="con_tel"><img src="@/assets/images/tel_03.gif"></div> -->
        </div>
      </div>
    </div>

    <div class="ab_main">
      <div class="pro_maintit">
        <div class="promaintit_text">
          <h3>关于我们 <span>About us</span></h3>
        </div>
      </div>
      <div class="conmain_p">
        <p style="text-align:center;"><img width="600" src="@/assets/images/logo.jpg" alt=""></p>
        <p style="padding:20px; line-height:25px; font-size:16px;">	仪工电气是一家专门为电力系统用户提供全套在线监测解决方案以及运维检修技术服务的股份制科技企业。所提供的产品和服务已经覆盖发电、输电、变电、配电等领域，并逐步发展成为，以智能在线监测系统集成、电气设备运维检修技术服务为主体，以自主品牌产品研发和生产为发展创新的高新技术企业。
        </p>
      </div>
    </div>
    <div class="clear"></div>
    <div class="sec_con_m">
      <ul></ul>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  head: {
    titleTemplate: '%s - 关于武汉仪工',
  },
}
</script>
