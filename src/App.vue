<template>
  <div>
    <router-view></router-view>
   <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
import MainTarBar from './components/Tabbar/MainTarBar.vue';



  export default {
  components: { MainTarBar },
  
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