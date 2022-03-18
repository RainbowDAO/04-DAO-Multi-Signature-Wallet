<template>
  <div class="erc20Factory">
    <div class="rainbow-panel">
      <div class="title">
        Create New MultiSign
      </div>
      <div class="info">
      </div>
      <div class="src20-form">
        <div class="item">
          <div class="title">
            minSignCount
          </div>
          <div class="input">
            <input type="number" v-model="form.minSignCount" placeholder="' 2 '">
          </div>
        </div>
        <div class="item">
          <div class="title">
            manageArr
          </div>
          <div class="address-list">
            <div class="item" v-for="index in manageArrLength" :key="index">
              <div class="input">
                <input type="text" v-model="form.manageArr[index-1]" :placeholder="'address'+index">
              </div>
            </div>
          </div>
          <div class="add-btn" @click="manageArrLength++">
            ＋
          </div>
        </div>
      </div>
      <div class="create" @click="create">
        Create
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "erc20Factory",
  data() {
    return {
      manageArrLength: 1,
      form: {
        manageArr: []
      }
    }
  },
  methods: {

    create() {
      if (!this.$store.state.app.account) {
        this.$message.error("not connected")
        return
      }
      let loading = this.$loading()
      try {
        this.$store.dispatch("creator/creatNewMultiSign", this.form).then(() => {
          this.$message.success("success")
          loading.close()
          setTimeout(() => {
            this.$router.push({
              path: "myMultiSign"
            })
          }, 500)
        }).catch((err) => {
          loading.close()
          this.$message.error(err)
        })
      } catch (err) {
        loading.close()
        this.$message.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.erc20Factory {
  .rainbow-panel {
    width: 1200px;
    border-radius: 20px;
    background: #fff;
    margin: 60px auto;
    padding: 30px;
  }

  .title {
    font-size: 30px;
    text-align: center;
    color: #333333;
    line-height: 45px;
  }

  .info {
    text-align: center;
    font-weight: 500;
    color: #666666;
    line-height: 24px;
  }

  .src20-form {
    .item {
      text-align: center;

      .title {
        font-size: 14px;
        font-weight: 700;
      }

      .input {
        input {
          padding-left: 10px;
          width: 480px;
          height: 50px;
          background: #ffffff;
          border: 1px solid #eaeaea;
          border-radius: 10px;
        }
      }
    }

    .address-list {
      .item {
        margin-top: 20px;
      }
    }

    .add-btn {
      width: 50px;
      height: 50px;
      border: 1px solid #eee;
      text-align: center;
      line-height: 50px;
      font-weight: normal;
      color: #999;
      cursor: pointer;
      user-select: none;
      border-radius: 10px;
      font-size: 40px;
      margin: 30px auto;
    }
  }

  .create {
    text-align: center;
    width: 180px;
    height: 50px;
    background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
    border: 1px solid #eaeaea;
    border-radius: 10px;
    cursor: pointer;
    margin: 20px auto;
    user-select: none;
    font-size: 20px;
    line-height: 50px;
    color: #fff;
  }
}
</style>
