<template>
  <div id="content">
    <div class="side">
      <div class="ab_side">
        <div class="ab_sidetit">
          <div class="abside_text">
            <h3>联系我们 <span>Contact us</span></h3>
          </div>
        </div>
        <ul>
          <li><NLink to="/contact" class="on"> 联系我们</NLink></li>
          <li><NLink to="/contact">客户留言</NLink></li>
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
          <h3>联系我们 <span>Contact us</span></h3>
        </div>
      </div>
      <div class="nycontact">
        <h3>
						<span style="font-size: medium">
							<span style="font-family: 宋体">
							武汉仪工电气设备有限公司<br>
							电话：027-81803685 <br>
							网址：
							</span>
						</span>
          <NLink to="http://www.whygdq.com"><span style="font-size: medium"><span style="font-family: 宋体">www.whygdq.com</span></span></NLink><span style="font-size: medium">
						<span style="font-family: 宋体"><br>
						地址：武汉关山街道民院路1号光谷资本大厦3层<br>
						邮编：430000<br>
						询价请发送邮件至：whygdq@126.com
						</span>
						</span>
        </h3>

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
  name: "contact",
  head: {
    titleTemplate: '%s - 联系我们',
  },
}
</script>
