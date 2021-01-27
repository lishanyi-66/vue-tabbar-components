<template>
  <div>
        <svg class="svg-icon" aria-hidden="true">
            <use xlink:href="#iconName"></use>
        </svg>
  </div>
</template>

<script>
  export default {
name:'svg-icon',
props:{
        iconClass:{
            type:String,
            required:true,
        }
    },
computed:{
    iconName(){
        return`#icon-${this.iconClass}`
    }
},
  data() {
    return {

    };
  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style lang='less' scoped>
    .svg-icon{
        width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
</style>