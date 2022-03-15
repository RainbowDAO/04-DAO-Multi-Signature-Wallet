<template>
  <div :class="classObj" class="layout">
    <RainbowHeader/>
    <router-view id="main" class="layout-content"/>
    <RainbowFooter/>
  </div>
</template>

<script>

import RainbowHeader from "@/components/RainbowHeader"
import RainbowFooter from "@/components/pageFooter";

export default {
  name: "layout",
  components: {

    RainbowHeader,
    RainbowFooter,

  },
  data() {
    return {
      showPrice: true,
      dialogVisible: false,
      isCollapse: true,
    }
  },
  watch: {
    isShowConnect() {
      this.dialogVisible = this.$store.state.app.isShowConnect
    }
  },
  computed: {
    isShowConnect() {
      return this.$store.state.app.isShowConnect
    },
    classObj() {
      return {
      }
    }
  },
  created() {
    if (this.$route.path == '/cityNodeToken' || this.$route.path == '/home') {
      this.showPrice = false
    } else {
      this.showPrice = true
    }
  },
  methods: {
    onClose() {
      this.$store.commit("app/SET_SHOWCONNECT")
    },
    async registerWeb3() {

    },
    async getWallet() {
      if (typeof window.ethereum == 'undefined') {
        this.$message.error("down metamask")
      }
      window.ethereum.request({method: 'eth_requestAccounts'});

      this.registerWeb3()

    },
  }
}
</script>

<style lang="scss">

.layout {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background: url("./static/imgs/page_bg.png");
  background-size: 100% 100%;
  #main {
    position: relative;
    z-index: 1;
    min-width: 1000px;
    min-height: 570px;
    .no-data{
      text-align: center;
      padding: 10px 0;
    }
    .el-dialog__body{
      text-align: center;
      padding: 30px;
      line-height: 50px;
      .input-box{
        display: flex;
        flex-shrink: 0;
        .name{
          width: 80px;
        }
      }
    }
  }
}


</style>
