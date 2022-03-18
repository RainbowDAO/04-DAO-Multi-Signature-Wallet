<template>
  <div class="myMultiSign">
    <div class="page-title">
      MY MULTISIGN
    </div>
    <div class="list">
      <div class="item"  v-for="(item,index) in list" :key="index" @click="$router.push({name:'multiSignPanel',params:{address:item}})">
        <div class="title">
          MultiSign  {{index+1}}
        </div>
        <div class="address">
          {{item}}
        </div>
      </div>
      <div class="item add" @click="$router.push({name:'creator'})">
        ＋
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myMultiSign",
  data() {
    return {
      list: []
    }
  },
  computed:{
    account(){
      return this.$store.state.app.account
    }
  },
  watch:{
    account(){
      this.getData()
    }
  },
  mounted() {
    if(this.account){
      this.getData()
    }
  },
  methods: {
    getData(){
      this.list = []
      this.$store.dispatch("creator/getLimitedNumber").then(length=>{
        for(let i = 0;i<length;i++){
          this.$store.dispatch("creator/getMultiSignAddr", i).then(res=>{
              this.list.push(res)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.myMultiSign{
  width: 1100px;
  padding: 10px 30px;
  border-radius: 20px;
  margin: 30px auto;
  background: #fff;
  text-align: center;
  .page-title{
    font-size: 36px;
    font-weight: bold;
    margin: 50px 0 10px;
  }
  .list{
    display: flex;
    flex-wrap: wrap;
    .item{
      cursor: pointer;
      text-align: left;
      margin: 30px;
      padding: 10px 20px 30px 20px;
      border-radius: 10px;
      background: #fcf9f9;
      border: 1px solid #eee;
      &.add{
        width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        color: #999;
        height: 120px;
      }
      .title{
        font-weight: bold;
        font-size: 18px;
        line-height: 50px;
      }
      .address{
        width: 240px;
        word-break: break-all;
      }
    }
  }
}
</style>
