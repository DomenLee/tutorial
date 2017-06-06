<template>
  <div>
    <mt-header fixed
      :title="headerTitle"
    ></mt-header>
    <section class="firm-info clear">
      <img class="fl firm-logo" src="../assets/logo.png">
      <div class="content fl">
        美来登(中国)有限公司
      </div>
      <div class="firm-info-star fr">
        <div class="fr">
          <mt-button size="small" type="danger" @click="attentioned">
            {{ stared ? '取关' : '关注'}}
          </mt-button>
        </div>
        <span class="fr">粉丝数：{{ stars }}</span>
      </div>
    </section>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="企业地址" value="广东省广州市天河区城中大道皇家花园G6栋58..."></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      headerTitle: '厂商主页',
      stars: 100,
      stared: true,
      selected: '1'
    }
  },
  methods: {
    attentioned () {
      this.stars = this.stared ? this.stars - 1 : this.stars + 1
      this.stared = !this.stared
    }
  }
}
</script>

<style>
  .firm-info {
    background: #fff;
    margin: .1rem;
    padding: .1rem;
    /*overflow: hidden;*/
  }

  .mint-cell-title {
    font-size: .12rem;
  }

  .mint-cell-value {
    font-size: .1rem;
  }

 .firm-logo {
   width: .6rem;
   height: .6rem;
   border: .04rem solid #ececec;
   border-radius: .6rem;
 }

 .firm-info .content {
   width: 1.6rem;
   text-align: center;
   font-size: .1rem;
   line-height: .68rem;
 }

 .firm-info-star {
   width: 1rem;
   line-height: 1;
   font-size: .1rem;
 }

 .firm-info-star span {
   margin-top: .1rem;
   display: inline-block;
 }
 .mint-cell-value {
   font-size: .1rem;
 }
</style>
