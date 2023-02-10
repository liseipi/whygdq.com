<template>
  <div id="content">
    <div class="side">
      <div class="ab_side">
        <div class="ab_sidetit">
          <div class="abside_text">
            <h3>新闻分类 <span>News</span></h3>
          </div>
        </div>
        <ul>
          <li><NLink to="/news" class=""> 最新文章</NLink></li>
          <li><NLink to="/news" class=""> 行业新闻</NLink></li>
          <li><NLink to="/news" class=""> 公司新闻</NLink></li>
          <li><NLink to="/news" class=""> 最新动态</NLink></li>
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
          <h3>新闻中心 <span>news</span></h3>
        </div>
      </div>
      <ul>

        <li><NLink to="/news?id=1274"><span>2014-11-20</span>技术创造品质 服务赢得信赖</NLink></li>

        <li><NLink to="/news?id=1341"><span>2015-03-08</span>致伟大</NLink></li>

        <li><NLink to="/news?id=1340"><span>2015-03-04</span>高压试验变压器的主要特点</NLink></li>

        <li><NLink to="/news?id=1335"><span>2015-02-27</span>工频耐压试验安全要注意的六点</NLink></li>

        <li><NLink to="/news?id=1331"><span>2015-02-05</span>教你如何做高压设备绝缘电阻测量</NLink></li>

        <li><NLink to="/news?id=1328"><span>2015-02-02</span>我们使用交直流两用试验变压器应小心</NLink></li>

        <li><NLink to="/news?id=1327"><span>2015-01-30</span>兆欧表的作用及特点有哪些</NLink></li>

        <li><NLink to="/news?id=1326"><span>2015-01-29</span>带你一起初步探析电厂热工电缆施工与接地的原理</NLink></li>

        <li><NLink to="/news?id=1325"><span>2015-01-28</span>新手在操作直流高压发生器时应该注意的几个事项</NLink></li>

        <li><NLink to="/news?id=1324"><span>2015-01-27</span>电力电缆性能不带电的三种方法检测方法</NLink></li>

        <li><NLink to="/news?id=1323"><span>2015-01-26</span>带你了解串联谐振的相关知识</NLink></li>

        <li><NLink to="/news?id=1322"><span>2015-01-26</span>1月21日仪工电气发货现场实况</NLink></li>

        <li><NLink to="/news?id=1321"><span>2015-01-23</span>关于220kV 城市终端站设计的几点要求</NLink></li>

        <li><NLink to="/news?id=1320"><span>2015-01-22</span>浅悉兆欧表的正确使用方法</NLink></li>

        <li><NLink to="/news?id=1318"><span>2015-01-19</span>选择试验变压器的几点小心得</NLink></li>
      </ul>
      <div class="page">
        <a class="prev" href="/contact?node=news&amp;page1=1">上一页</a>

        <a class="num cur">1</a>

        <a class="num" href="/contact?node=news&amp;page1=2">2</a>

        <a class="num" href="/contact?node=news&amp;page1=3">3</a>

        <a class="num" href="/contact?node=news&amp;page1=4">4</a>

        <a class="num" href="/contact?node=news&amp;page1=5">5</a>

        <a class="num" href="/contact?node=news&amp;page1=6">6</a>

        <a class="num" href="/contact?node=news&amp;page1=7">7</a>

        <a class="num" href="/contact?node=news&amp;page1=8">8</a>

        <a class="num" href="/contact?node=news&amp;page1=9">9</a>

        <a class="num" href="/contact?node=news&amp;page1=10">10</a>

        <a class="next" href="/contact?node=news&amp;page1=2">下一页</a>
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
  name: "news"
}
</script>
