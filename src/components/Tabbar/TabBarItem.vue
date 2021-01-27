<template>
  <div class="tar-bar-item" @click="btnClick()" :style="activeStyle">
      <slot name='item-icon'></slot>
      <div >
        <slot name='item-name'></slot>
      </div>

  </div>
</template>

<script>
  export default {
    props:{
      path:{
        type:String,
      },
      activeColor:{
        type:String,
        default:'red'

      }

    
      
    },
  data() {
    return {
      
    };
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
    
  },
  created() {

  },
  mounted() {

  },
  methods: {
    btnClick(){
      this.$router.replace(this.path)
    }
  },
}
</script>

<style lang='less' scoped>
.tar-bar-item{
    flex: 1;
    color: #666;
    text-align: center;
    font-size: 12px;
    margin-top: 4px;
    // line-height: 49px;
    // text-align: center;
    // visibility: hidden;
}
// .active{
//   color: pink;
// }

</style>