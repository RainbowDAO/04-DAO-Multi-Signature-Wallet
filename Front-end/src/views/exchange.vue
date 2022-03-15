<template >
  <div class="exchange">
    <div class="layout-title">
      <div class="title">
        Exchange
      </div>
    </div>
    <div class="exchange-card">
      <div class="title">
        Exchange
      </div>
      <div class="exchange">
        <div class="setting" @click="isShowSetting = true">
          <i class="el-icon-setting"></i>
          Settings
        </div>
        <div class="part1">
          <div class="floor1">
            <strong style="color: #C8C8C8">From</strong>
            <span style="color:#B0B0B0">Balance:<span>{{ balance ? balance : 0 }}</span></span>
          </div>
          <div class="floor2">
            <div>
              <div class="coin-choose" @click="isShow=true,choosetype=0">
                <div class="name">
                  {{ chooseName }}
                </div>
              </div>
            </div>
            <div class="value-box">
              <input type="number" :class="{'is-zero':amount==0}" class="input2" v-model="amount"/>
              <button size="mini" class="button-max" @click="handleMax">MAX</button>
            </div>
          </div>
        </div>
        <div class="arrow" @click="reversal">
          <img class="arrow-img" src="../assets/img/arrow.png" alt="">
        </div>
        <div class="part2">
          <div class="floor1">
            <strong style="color: #C8C8C8">To</strong>
            <span></span>
          </div>
          <div class="floor2">
            <div class="coin-choose" @click="isShow=true,choosetype=1">
              <div class="name">
                {{ excName }}
              </div>
            </div>

            <div class="value-box">
              <span class=" amount" :class="{'is-zero':amount==0}">{{ excNumber }}</span>
            </div>
          </div>
        </div>
        <button class="button-exchange" @click="approve" v-show="chooseName!='ETH'">
          {{ 'APPROVE' }}
        </button>
        <button class="button-exchange" @click="exchange">
          {{ isLoading ? 'APPROVING' : 'EXCHANGE' }}
        </button>
      </div>
      <div class="choose" v-show="isShow" @click="isShow=false">
        <div class="choose-title">
          Choose a token
          <div class="choose-close">
            ×
          </div>
        </div>
        <div class="choose-content">
          <div class="choose-item" v-for="item in coinList" :key="item.name" @click="chooseHandle(item)">
            <div class="add-coin" @click="addCoin(item)" v-if="item.name!='ETH'">
              add wallet
            </div>
            {{ item.name }}
          </div>
        </div>
        <div class="choose-bottom">
          Manage Tokens
        </div>
      </div>
      <div class="setting-dialog" v-show="isShowSetting">
        <div class="setting-header">
          Settings
          <div class="close" @click="isShowSetting=false">
            ×
          </div>
        </div>
        <div class="setting-content">
          <div class="setting-title">
            Transaction Settings
          </div>
          <div class="slippage">
            <div class="floor1">
              Slippage Tolerance
              <svg t="1629873638921" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2737" width="16" height="16"><path d="M512 960C264.6 960 64 759.4 64 512S264.6 64 512 64s448 200.6 448 448-200.6 448-448 448z m0-59.7c214.4 0 388.3-173.8 388.3-388.3S726.4 123.7 512 123.7 123.7 297.6 123.7 512 297.6 900.3 512 900.3z" p-id="2738" fill="#999999"></path><path d="M523.6 293c40.8 0 73.9 10.8 99.4 33.8 25.5 22.3 38.2 52.9 38.2 91.1 0 31.2-8.3 57.3-24.2 77.7-5.7 7-23.6 23.6-53.5 49.7-12.1 10.2-21 21.7-26.8 33.1-7 12.7-10.2 26.8-10.2 42.1v10.8h-68.2v-10.8c0-23.6 3.8-44 12.7-60.5 8.3-17.8 32.5-44 72-79l10.8-12.1c11.5-14.7 17.8-29.9 17.8-46.5 0-22.3-6.4-39.5-18.5-52.2-12.7-12.7-31.2-19.1-54.2-19.1-28.7 0-49.7 8.9-62.4 27.4-11.5 15.3-17.2 37-17.2 65h-66.9c0-46.5 13.4-82.8 40.1-109.6 27-27.5 64-40.9 111.1-40.9z m-11.4 372.7c13.4 0 24.8 3.8 33.8 12.7 8.9 8.3 13.4 19.1 13.4 32.5 0 13.4-5.1 24.2-14 33.1-8.9 8.3-20.4 12.7-33.1 12.7-12.7 0-24.2-4.5-33.1-13.4-8.9-8.9-13.4-19.8-13.4-32.5 0-13.4 4.5-24.2 13.4-32.5 8.7-8.8 20.2-12.6 33-12.6z" p-id="2739" fill="#999999"></path></svg>
            </div>
            <div class="floor2">
              <div class="rate-item">
                0.1%
              </div>
              <div class="rate-item">
                0.5%
              </div>
              <div class="rate-item">
                1%
              </div>
              <div class="rate-item">
                <input type="number" :class="{'is-zero':amount==0}" class="customize-input" v-model="customize" aria-placeholder="customize"/>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import abi from "../abi"
import Web3 from "web3";
import coinAddress from "../utils/coinAddress.json"

export default {
  name: "ExchangeCard",
  props: ["handleExchange"],
  data() {
    return {
      customize: null,
      isShowSetting:false,
      choosetype: 0,
      balance: 0,
      slipPrice: 2,
      isShow: false,
      records: [],
      coinList: [
        {name: "ETH", address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},
        {name: "COMP", address: coinAddress["COMP"]},
        {name: "UNI", address: coinAddress["UNI"]},
        {name: "GRT", address: coinAddress["GRT"]},
        {name: "SNX", address: coinAddress["SNX"]},
        {name: "XTZ", address: coinAddress["XTZ"]},
        {name: "DAI", address: coinAddress["DAI"]},
        {name: "REP", address: coinAddress["REP"]},
        {name: "ZRX", address: coinAddress["ZRX"]},
        {name: "BAT", address: coinAddress["BAT"]},
        {name: "KNC", address: coinAddress["KNC"]},
        {name: "LINK", address: coinAddress["LINK"]},
        {name: "WBTC", address: coinAddress["WBTC"]},
        {name: "USD", address: coinAddress["USD"]},
      ],
      amount: 0,
      isLoading: false,
      showRecord: false,
      excNumber: 0,
      chooseName: "ETH",
      chooseAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      excAddress: coinAddress["UNI"],
      excName: "UNI",
      allUsdAmount: 0,
      allAmount: 0,
    }
  },
  methods: {
    reversal() {
      let tempName = this.excName, tempAddress = this.excAddress
      this.excName = this.chooseName
      this.chooseName = tempName
      this.excAddress = this.chooseAddress
      this.chooseAddress = tempAddress
      this.getBalance(this.chooseName)
    },
    addCoin(item) {
      let web3js = window.web3
      new Web3(web3js.currentProvider)
      let curProvider = web3js.currentProvider
      curProvider.sendAsync({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: item.address,
            symbol: item.name,
            decimals: 18,
          },
        },
      })
    },
    getContract() {
      if(!this.isConnected){
        return
      }
      this.contract = abi.getContractByName("tokenSwap", this.$store.state.app.web3)
      this.COMP = abi.getContractByName("COMP", this.$store.state.app.web3)
      this.UNI = abi.getContractByName("UNI", this.$store.state.app.web3)
      this.GRT = abi.getContractByName("GRT", this.$store.state.app.web3)
      this.SNX = abi.getContractByName("SNX", this.$store.state.app.web3)
      this.USD = abi.getContractByName("USD", this.$store.state.app.web3)
      this.XTZ = abi.getContractByName("XTZ", this.$store.state.app.web3)
      this.REP = abi.getContractByName("REP", this.$store.state.app.web3)
      this.ZRX = abi.getContractByName("ZRX", this.$store.state.app.web3)
      this.DAI = abi.getContractByName("DAI", this.$store.state.app.web3)
      this.BTC = abi.getContractByName("WBTC", this.$store.state.app.web3)
      this.BAT = abi.getContractByName("BAT", this.$store.state.app.web3)
      this.KNC = abi.getContractByName("KNC", this.$store.state.app.web3)
      this.LINK = abi.getContractByName("LINK", this.$store.state.app.web3)
      this.ETH = abi.getContractByName("ETH", this.$store.state.app.web3)
      this.getBalance(this.chooseName)
    },
    approve() {
      if (!this.account) {
        alert("please connect")
      }
      if(this.chooseName == "WBTC"){
        this.chooseName = "BTC"
      }
      this[this.chooseName].methods.approve(abi.getContractAddress("tokenSwap"), this.bigNumber).send({
        from: this.account
      })
    },
    exchange() {
      if (!this.account) {
        alert("please connect")
      }
      if (this.balance < this.amount) {
        window.alert("not enough balance")
        return
      }
      if (this.chooseName == "ETH") {
        this.contract.methods.swap(this.chooseAddress, this.excAddress, this.web3.utils.toWei(this.amount.toString())).send({
          from: this.account,
          value: this.web3.utils.toWei(this.amount.toString())
        }).then(() => {
          alert("buy success")
        })
      }
      if (this.chooseName != "ETH") {
        if(this.chooseName == "WBTC"){
          this.chooseName = "BTC"
        }
        this[this.chooseName].methods.allowance(this.account, abi.getContractAddress("tokenSwap")).call().then(allowance => {
          if (allowance / 10 ** 18 < this.amount) {
            alert("please approve")
          } else {

            this.contract.methods.swap(this.chooseAddress, this.excAddress, this.web3.utils.toWei(this.amount.toString())).send({
              from: this.account
            }).then(res => {
              alert("buy success")
              this.amount = 0
              this.getBalance(this.chooseName)
            })
          }
        })
      }

    },
    getPrice() {
      if (!this.account) {
        return
      }
      if(this.chooseName == "WBTC"){
        this.chooseName = "BTC"
      }
      if(this.excName == "WBTC"){
        this.excName = "BTC"
      }
      this.contract.methods.getPrice(this.excName == "USD" ? "DAI" : this.excName).call({
        from: this.account
      }).then(price1 => {
        this.contract.methods.getPrice(this.chooseName == "USD" ? "DAI" : this.chooseName).call({
          from: this.account
        }).then(price2 => {
          this.excNumber = price2 / price1 * this.amount
        })
      })
    },
    handleMax() {
      this.amount = this.balance
    },
    getBalance(name) {
      if (this.account) {
        if (name == "ETH") {
          this.balance = this.ethBalance / 10 ** 18
        } else {
          if(name == "WBTC"){
            name = "BTC"
          }
          this[name].methods.balanceOf(this.account).call({
            from: this.account
          }).then(amount => {
            this.balance = amount / 10 ** 18
          })
        }
      }
    },
    chooseHandle(item) {

      if (this.choosetype == 0) {
        this.getBalance(item.name)
        this.chooseName = item.name
        this.chooseAddress = item.address
      } else {
        this.excName = item.name
        this.excAddress = item.address
      }
    }
  },
  computed: {
    account() {
      return this.$store.state.app.account
    },
    web3() {
      return this.$store.state.app.web3
    },
    ethBalance() {
      return this.$store.state.app.ethBalance
    },
    isConnected(){
      return this.$store.state.app.isConnected
    }
  },
  watch: {
    account() {
      this.getContract()
    },
    web3() {
      this.bigNumber = this.web3.utils.toWei((10 ** 10).toString())
    },
    amount() {
      this.getPrice()
    },
    excName() {
      this.getPrice()
    },
    chooseName() {
      this.getPrice()
    }
  },
  mounted() {
    this.getContract()
    this.getPrice()
  }
}
</script>

<style lang="scss" scoped>
.exchange-card {
  margin: 20px auto;
  width: 390px;
  border-radius: 11px;
  overflow: hidden;
  border: 1px solid #333333;
  background: #141423;
  text-align: left;
  box-shadow: 0px 30px 30px 3px rgba(156, 156, 156, 0.15);
  .setting-dialog{
    position: fixed;
    top: calc(100px);
    background: white;
    border-radius: 10px;
    width: 400px;
    .setting-header{
      padding: 0 30px;
      font-size: 20px;
      line-height: 60px;
      width: 100%;
      height: 60px;
      opacity: 1;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px 10px 0px 0px;
      display: flex;
      justify-content: space-between;
      .close{
        cursor: pointer;
        font-size: 40px;
      }
    }
    .setting-content{
      padding: 30px;
      color: #333333;
      .setting-title{
        font-size: 16px;
        font-family: Roboto, Roboto-Bold;
        font-weight: 700;
        text-align: left;
        color: #333333;
        line-height: 19px;
      }
      .slippage{
        .floor1{

        }
        .floor2{
          display: flex;
          .rate-item{
            width: 80px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #f8f8f8;
            border: 1px solid rgba(115,109,255,0.20);
            border-radius: 10px;
          }
          .rate-item:last-child{
            width: 100px;
            padding: 0 2px 2px 2px;
          }
          .customize-input{
            width: calc(100% - 4px);
            height: calc(100% - 4px);
            margin-top: -2px;
            border: none;
            background: #f8f8f8;
            &:focus-visible{
              border: none;
              outline: none;
            }
          }
        }
      }
    }
  }
  .choose {
    width: 300px;
    height: 500px;
    background: #fff;
    border-radius: 10px;
    text-align: center;
    position: fixed;
    left: calc(50% - 150px);
    top: calc(10%);
    overflow: hidden;

    .choose-title {
      width: 100%;
      height: 50px;
      font-size: 16px;
      line-height: 50px;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px 10px 0px 0px;
      position: relative;
      .choose-close{
        color: white;
        position: absolute;
        font-size: 22px;
        right: 16px;
        top: 0px;
        cursor: pointer;
      }
    }

    .choose-content {
      color: black;
      height: calc(100% - 100px);
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 1px;
        height: 1px;
      }

      .choose-item {
        display: flex;
        justify-content: space-around;
        border-radius: 10px;
        margin-top: 6px;
        border: 1px solid #eee;
        width: 100%;
        height: 40px;
        line-height: 40px;
        cursor: pointer;

        .add-coin {
          height: 30px;
          width: 100px;
          border: 1px solid #eee;
          margin-top: 6px;
          line-height: 30px;
          margin-left: 10px;
          position: relative;
          z-index: 10;
          border-radius: 6px;
        }
      }
    }
    .choose-bottom{
      width: 100%;
      height: 50px;
      cursor: pointer;
      line-height: 50px;
      font-size: 16px;
      font-family: Roboto, Roboto-Bold;
      font-weight: 700;
      text-align: center;
      color: #db1f7e;
    }
  }

  .title {
    padding-left: 30px;
    font-size: 20px;
    line-height: 60px;
    width: 100%;
    height: 60px;
    opacity: 1;
    background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
    border-radius: 10px 10px 0px 0px;
  }

  .exchange {
    padding: 20px 30px;
    .setting{
      width: 326px;
      cursor: pointer;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #1f1f2e;
      border: 1px solid #333333;
      border-radius: 10px;
      box-shadow: 0px 5px 10px 1px rgba(0,0,0,0.01);
    }
    .part1, .part2 {
      padding-top: 10px;
      margin: 0 auto;
      width: 326px;
      height: 90px;
      opacity: 1;

      .floor1, .floor2, .floor2 .value-box, .floor2 .coin-choose {
        display: flex;
        justify-content: space-between;

        input {
          width: 100px;
        }
      }

      .floor1 {
        padding-bottom: 10px;
      }

      .floor2 {
        align-items: center;
        background: #333333;
        border-radius: 10px;
        box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.01);
        padding: 10px;
        border: 1px solid #333333;

      }
    }

    .button-exchange {
      width: 330px;
      height: 50px;
      cursor: pointer;
      margin-top: 30px;
      font-size: 16px;
      border: none;
      background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
      border-radius: 10px;
      color: white;

      &:active {
        transform: translate(1px, 1px);
      }
    }

    .disable {
      color: #aaa;
    }

    .arrow {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 14px;
      text-align: center;
      margin: 20px auto;
      opacity: 1;
      background: #1f1c32;
      border: 1px solid #333333;
      line-height: 46px;
      cursor: pointer;

      .arrow-img {
        width: 10px;
        height: 16px;
      }
    }

    .input2 {
      font-size: 20px;
      font-weight: bold;
      line-height: 30px;

      ::v-deep.el-input__inner {
        padding-left: 6px;
      }
    }

    .value-box {
      flex: 1;
      background: #181628;
      border-radius: 5px;
      padding: 0 6px;
      line-height: 40px;
      margin-left: 10px;

      .input2 {
        width: 100% !important;
        height: 40px !important;
        background: #181628 !important;
        color: white;
        border: none;

        &:focus {
          outline: none;
        }
      }

      .button-max {
        margin-top: 6px;
        color: white;
        cursor: pointer;
        border: none;
        width: 40px;
        height: 30px;
        background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        border-radius: 5px;
        box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.30);

        &:active {
          transform: translate(1px, 2px);
        }
      }

      .amount {
        font-size: 20px;
        color: #fff;
        max-width: 200px;
        overflow: hidden;
        padding-left: 6px;

        &.is-zero {
          color: #bbb;
        }
      }
    }

    .coin-choose {
      font-weight: bold;
      cursor: pointer;
      width: 110px;
      align-items: center;
      justify-content: space-around;
      line-height: 40px;
      .name {
        font-size: 16px;
        width: 80px;
        text-align: center;
      }
      img {
        width: 26px;
        height: 26px;
      }
    }
  }
}

</style>
