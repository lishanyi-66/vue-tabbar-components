<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item  path='/home' activeColor="pink">
        <div slot="item-icon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-1"></use>
            </svg>
        </div>
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'  activeColor="pink">
        <div slot="item-icon">
            <svg class="icon" aria-hidden="true" >
                <use xlink:href="#icon-fenlei"></use>
            </svg>
        </div>
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item  path='/cart' activeColor="pink">
        <div slot="item-icon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-icon01"></use>
            </svg>
        </div>
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="pink">
        <div slot="item-icon">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wode"></use>
            </svg>
        </div>
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/Tabbar/TabBar.vue';
import TabBarItem from './components/Tabbar/TabBarItem.vue';
import './assets/icon/icon.js'

  export default {
  components: { TabBar, TabBarItem },
  data() {
    return {

    };
  },
  // conponents:{
  //   TabBar
  // },
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style  lang="less" scoped>
@import url(./assets/css/base.css);  //引入公共样式
@import url(./assets/icon/iconbase.css);
.icon{
  // color: pink;
  font-size: 24px;
}
</style>