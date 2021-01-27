<template>
  <div class="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
  export default {
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
.tab-bar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 49px;
    background-color: #f6f6f6;
}
</style>