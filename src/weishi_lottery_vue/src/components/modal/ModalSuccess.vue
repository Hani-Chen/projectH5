<template>
  <div class="modal" :class="{show:ModalIsShow.isShow}">
    <div class="modal-content">
      <div class="modal-bg" @click="close()"></div>
      <div class="modal-body">
        <div class="content">
          <div class="modal-title"></div>
          <div class="modal-subtitle">
            你的幸运号如下，明天
            <span>12:00</span>来开奖哦
          </div>
          <!-- 获得的号码 -->
          <div class="modal-num">
            <!-- 1个 -->
            <!-- 2个 -->
            <!-- 3个或以上不同 class -->
            <div class="modal-num-box" :class="listClassString">
              <div class="modal-num-box-bg"></div>
              <div class="modal-num-box-repeat"></div>
              <div class="modal-num-box-bottom"></div>
              <div class="modal-num-list-box" id="modalnumlistbox">
                <div v-for="item in numberList" class="modal-num-list">
                  <span v-for="num in (item + '')">{{num}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-btn" @click="skip()"></div>
        </div>
        <div class="modal-close" @click="close()"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSuccess",
  data() {
    return {};
  },
  props: {
    ModalIsShow: {
      type: Object,
      default: function() {
        return {};
      }
    },

    numberList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    /**
     * 关闭弹窗
     */
    close() {
      this.ModalIsShow.isShow = false;
      // ModalHelper.beforeClose();
      var app = document.getElementById("app");
      app.style.overflow = "auto";
    },
    // 点击继续夺宝
    skip() {
      // ModalHelper.beforeClose();
      var app = document.getElementById("app");
      app.style.overflow = "auto";
      this.$router.push({
        path: "/"
      });
      // 幸运号弹窗继续夺宝按钮 - 数据上报 - 统计点击数量
      MtaH5.clickStat("event19");
    }
  },
  mounted: function() {},
  computed: {
    listClassString() {
      var len = this.numberList.length;
      if (len == 1) {
        return "modal-num-list-1";
      } else if (len == 2) {
        return "modal-num-list-2";
      } else {
        return "";
      }
    }
  },
  watch: {
    // 监听
    "ModalIsShow.isShow"(newValue, oldValue) {
      function hasParent(element, parentClass) {
        var ele = document.getElementById(element)
        while (!ele.is("body")) {
          // document.getElementsByTagName('div')[0].className.indexOf('className')>-1
          
          if (ele.className.indexOf(parentClass)>-1) {
            return true;
          }
          ele = ele.parent();
        }
        return false;
      }
      // this.share()
      // if()
      if (newValue == true) {
        this.isScroll = newValue;
        var app = document.getElementById("app");
        app.style.overflow = "hidden";

        // document.body.addEventListener(
        //   "touchmove",
        //   function(e) {
        //     e.preventDefault();
        //   },
        //   { passive: false }
        // );
        // document.getElementById("modalnumlistbox").addEventListener(
        //   "touchmove",
        //   function(e) {
        //     e.stopPropagation();
        //   },
        //   { passive: false }
        // );
        // document.getElementById("modalnumlistbox").addEventListener(
        //   "touchmove",
        //   function(e) {
        //     e.returnValue = true;
        //   },
        //   { passive: false }
        // );
        // }
      } else {
        var app = document.getElementById("app");
        app.style.overflow = "auto";
        // document.body.addEventListener(
        //   "touchmove",
        //   function(e) {
        //     e.returnValue = true;
        //   },
        //   { passive: false }
        // );
      }
    }
    // },
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/modal/_modal_success.scss";
</style>