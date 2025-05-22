<template>
  <div id="content">
    <div class="side">
      <div class="ab_side">
        <div class="ab_sidetit">
          <div class="abside_text">
            <h3>招贤纳士  <span>Join us</span></h3>
          </div>
        </div>
        <ul>
          <li><NLink to="/talen" class="on"> 招贤纳士</NLink></li>
          <li><NLink to="/talen" class=""> 人才招聘</NLink></li>
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
          <h3>招贤纳士  <span>Join us</span></h3>
        </div>
      </div>
      <div class="conmain_p">
        武汉仪工仪工电气是一家专门为电力系统用户提供全套在线监测解决方案以及运维检修技术服务的股份制科技企业。所提供的产品和服务已经覆盖发电、输电、变电、配电等领域，并逐步发展成为，以智能在线监测系统集成、电气设备运维检修技术服务为主体，以自主品牌产品研发和生产为发展创新的公司。
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
  name: "talen",
  head: {
    titleTemplate: '%s - 人才招聘',
  },
}
</script>
