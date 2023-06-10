<template>
  <div id="app">
    <router-view :userInfo="userInfo" :gobackto="gobackto"></router-view>
  </div>
</template>


<script>
/* 数据引入 - 获取用户信息 */
import { getUserInfo } from "@/http/getUserInfo";

/* 样式引入 - 默认基础样式 */
import "@/assets/scss/style.scss";

export default {
  name: "App",
  data() {
    return {
      // 数据存储 - 存储新获取用户信息
      userInfo: {},
      gobackto: false
    };
  },
  methods: {
    // 获取用户详细函数 - 用函数调用的方法适合自他子组件调用更新用户信息
    getData() {
      // this.userInfo = {};
      // 获取用户信息接口
      getUserInfo()
        .then(res => {
          // console.log("获取成功", res);
          this.userInfo = res.data.content;
        })
        .catch(err => {
          //超时之后在这里捕抓错误信息.
          if (error.response) {
            // console.log("error.response");
            // console.log(error.response);
          } else if (error.request) {
            // console.log(error.request);
            // console.log("error.request");
            if (error.request.readyState == 4 && error.request.status == 0) {
              //我在这里重新请求
              this.getData();
              // console.log("重新获取");
            }
          } else {
            // console.log("Error", error.message);
          }
          // console.log(error.config);
        });
      // if (this.userInfo == {}) {
      //   this.getData();
      //   console.log("重新获取");
      // }
    }
  },
  mounted() {
    this.getData();
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      // console.log(to.path);
      if (to.path == "/") {
        // console.log("回到首页了");
        this.gobackto = true;
        this.getData();
      }
    }
  }
};
</script>


<style lang="scss">
// @import '@/assets/scss/_common_style.scss';
#app {
  height: 100%;
}
</style>