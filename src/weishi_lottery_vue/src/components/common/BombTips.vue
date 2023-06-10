<!-- 弹框 -->
<template>
  <div :visible="visible" ref="tipsBox" @update:visible="updateDialog" class="tipsBox">
    <div ref="showPopover" class="tipsClass animated">
      <div class="text">{{tipsContent}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    visible: Boolean,
    tipsContent: String
  },
  methods: {
    get() {
      if (this.visible) {
        this.$refs.tipsBox.children[0].className = "tipsClass";
        this.updateDialog(false);
      } else {
        this.$refs.tipsBox.children[0].className = "tipsClass animated";
      }
    },
    updateDialog(val) {
      this.$emit("update:visible", val);
    }
  },
  mounted() {
    this.timer = setInterval(this.get, 400);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="scss" scoped>
.tipsBox {
  width: 100%;
}
.tipsClass {
  position: fixed;
  top: 50%;
  left: 50%;
  // height: 0.3rem;
  // line-height: 0.3rem;
  // padding: 0 0.15rem;
  // background: #312113;
  font-size: 0.2rem;
  margin: 0px auto;
  text-align: center;
  color: white;
  opacity: 1;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  z-index: 999;
  width: 100%;
}
.animated {
  opacity: 0;
  padding: 0;
  filter: Alpha(opacity=0);
  transition: all 1s;
}
.text {
  // height: 0.3rem;
  // line-height: 0.3rem;
  padding: 0.02rem 0.15rem;
  background: #312113;
  display: inline-block;
  border-radius: 3px;
}
</style>