<template>
  <div class="multiSignPanel">
    <div class="nav-panel">
      <div class="title">
        MultiSign Info
      </div>
      <div class="address">
        {{ mulAddress }}
      </div>
      <div class="nav-list">
        <div class="item" :class="{'active':index==0}" @click="index=0">
          <div class="icon">
            <svg t="1639033950888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="2308" width="64" height="64">
              <path
                  d="M0 0h1024v1024H0V0z m438.857143 292.571429v146.285714h438.857143V292.571429H438.857143zM146.285714 585.142857v146.285714h438.857143V585.142857H146.285714z m292.571429-438.857143L146.285714 438.857143h292.571429V146.285714z m146.285714 731.428572l292.571429-292.571429H585.142857v292.571429z"
                  fill="#FF1F84" p-id="2309"></path>
            </svg>
          </div>
          <div class="name">
            TRANSACTIONS
          </div>
        </div>
        <div class="item" :class="{'active':index==1}" @click="index=1">
          <div class="icon">
            <svg t="1639034008297" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="3219" width="64" height="64">
              <path
                  d="M1008.352978 414.758078l-99.257796-25.726392c-7.615524-24.702456-17.406912-48.572964-29.310168-71.163552l51.900756-88.250484c4.7997-8.127492 3.455784-18.430848-3.135804-25.086432l-109.177176-109.241172c-6.71958-6.655584-17.022936-7.935504-25.150428-3.1998l-88.31448 51.900756c-22.526592-11.83926-46.333104-21.630648-71.099556-29.310168L609.209924 15.423036C606.842072 6.335604 598.586588 0 589.179176 0L434.756828 0C425.413412 0 417.157928 6.335604 414.790076 15.423036L388.999688 114.744828C364.297231 122.424348 340.554715 132.215737 318.092119 144.118993L229.777639 92.090244C221.586151 87.35454 211.218799 88.570464 204.691207 95.290044L95.386038 204.531217C88.730454 211.186801 87.386538 221.554153 92.250234 229.553653l51.964752 88.378476C132.311731 340.394725 122.584338 364.201237 114.840822 388.903694L15.51903 414.694082C6.367602 416.997938 0.031998 425.253422 0.031998 434.660834l0 154.422349c0 9.407412 6.335604 17.662896 15.487032 19.966752l99.257796 25.726392c7.67952 24.830448 17.534904 48.63696 29.310168 71.03556l-52.028748 88.31448c-4.735704 8.127492-3.455784 18.430848 3.1998 25.086432l109.177176 109.241172c6.71958 6.655584 17.022936 7.935504 25.150428 3.135804l88.31448-51.964752c22.526592 11.83926 46.333104 21.75864 71.03556 29.310168l25.662396 99.321792c2.495844 9.215424 10.751328 15.615024 20.15874 15.615024l154.422349 0c9.407412 0 17.5989-6.335604 19.966752-15.487032l25.790388-99.321792c24.766452-7.67952 48.572964-17.470908 71.099556-29.310168l88.186488 51.964752c8.191488 4.671708 18.430848 3.455784 25.086432-3.1998l109.241172-109.11318c6.71958-6.655584 7.9995-16.95894 3.1998-25.086432l-51.964752-88.31448c11.967252-22.526592 21.75864-46.333104 29.374164-71.03556l99.257796-25.726392C1017.632398 606.746078 1023.968002 598.490594 1023.968002 589.083182L1023.968002 434.660834C1023.84001 425.381414 1017.504406 417.061934 1008.352978 414.758078L1008.352978 414.758078 1008.352978 414.758078 1008.352978 414.758078zM512 738.513843c-124.984188 0-226.545841-101.625648-226.545841-226.545841S387.079808 285.358165 512 285.358165c124.920192 0 226.481845 101.625648 226.481845 226.545841S636.856196 738.513843 512 738.513843L512 738.513843 512 738.513843z"
                  p-id="3220" fill="#FF1F84"></path>
            </svg>
          </div>
          <div class="name">
            SETTINGS
          </div>
        </div>
        <div class="item" :class="{'active':index==2}" @click="index=2">
          <div class="icon">
            <svg t="1639118220038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="4094" width="32" height="32">
              <path
                  d="M876.060453 871.78346l2.014849-2.014849 2.96525-3.079298 1.140481-1.178497 3.801602-4.143746a509.41472 509.41472 0 0 0 89.603768-132.371796q6.804868-14.522121 12.697352-29.462418l0.304129-0.760321 1.900801-4.904067 0.722304-1.938817 1.368577-3.801602 1.102465-3.041282 0.912384-2.509058 1.406593-4.067714 0.494209-1.444609 1.672705-5.018115v-0.380161A512.037826 512.037826 0 0 0 40.354199 312.643781a508.160192 508.160192 0 0 0-40.296985 187.761142v0.57024q-0.19008 8.743685 0 17.487371v0.836353a508.806464 508.806464 0 0 0 28.854162 162.594534l0.570241 1.558657 1.482625 4.143746 1.976833 5.36026v0.38016q6.918916 18.285707 15.206409 36.001175a513.862595 513.862595 0 0 0 245.811611 245.963674q17.867531 8.401541 36.343319 15.434506l5.702403 2.128897 3.801603 1.406593 2.395009 0.646273a508.806464 508.806464 0 0 0 162.594534 28.854162h7.413125a509.718848 509.718848 0 0 0 159.325156-25.280656l5.36026-1.786753 1.292544-0.456193 4.257795-1.482625 2.623106-0.9504 2.927234-1.064449 4.48589-1.672705 1.140481-0.418176q17.487371-6.652804 34.480534-14.560137l3.003266-1.406593 2.204929-1.064449a510.137025 510.137025 0 0 0 138.606423-97.701181l1.976834-1.938817 2.090881-2.090882zM512.019008 51.207584a460.94429 460.94429 0 0 1 456.192287 525.457483c-94.317755 54.971171-263.565094 103.897793-461.020322-65.577642C311.522498 343.170648 147.597403 392.325367 55.636641 448.589082A461.438498 461.438498 0 0 1 512.019008 51.207584z"
                  p-id="4095" fill="#FF1F84"></path>
            </svg>
          </div>
          <div class="name">
            CreatLiquidity
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="transition" v-show="index==0">
        <div class="title">
          TRANSACTIONS
        </div>
        <div class="nav-list">
          <div class="item" :class="{'active':transitionIndex==0}" @click="transitionIndex=0">
            Transition List
          </div>
          <div class="item" :class="{'active':transitionIndex==1}" @click="transitionIndex=1">
            Create
          </div>
        </div>
        <div class="transition-panel">
          <div class="transition" v-show="transitionIndex==0">
            <div class="transition-list">
              <div class="no-data" v-show="transitionList.length==0">
                <img src="../../assets/img/no-data.png" alt="">
              </div>
              <div class="item" v-for="(item, index) in transitionList" :key="index">
                <div class="status">
                  {{ kindMap[item.kind] }}
                </div>
                <div class="amount">
                  {{ item.amount }}
                </div>
                <div class="token">
                  token address:{{ item.token }}
                </div>
                <div class="status-btn">
                  <el-button @click="signTransaction(index)">
                    {{ !item.status ? 'Sign' : 'Is Signed' }}
                  </el-button>
                </div>
              </div>
            </div>
          </div>
          <div class="create" v-show="transitionIndex==1">
            <div class="input-box">
              <div class="name">
                TOKEN
              </div>
              <input type="text" v-model="form.token">
            </div>
            <div class="input-box">
              <div class="name">
                TO
              </div>
              <input type="text" v-model="form.to">
            </div>
            <div class="input-box">
              <div class="name">
                AMOUNT
              </div>
              <input type="number" v-model="form.amount">
            </div>
            <el-button class="transitionCreate-btn" @click="creatTransaction">
              Create
            </el-button>
          </div>
        </div>
      </div>
      <div class="settings" v-show="index==1">
        <div class="title">
          SETTINGS
        </div>
        <div class="nav-list">
          <div class="item" :class="{'active':settingIndex==0}" @click="settingIndex=0">
            changeManage
          </div>
          <div class="item" :class="{'active':settingIndex==1}" @click="settingIndex=1">
            changeSignature
          </div>
        </div>
        <div class="setting-panel">
          <div class="changeManage" v-show="settingIndex==0">
            <div class="input-box">
              <div class="name">
                ADDRESS
              </div>
              <input type="text" v-model="form2.account">
            </div>
            <div class="input-box">
              <div class="name">
                REMOVE/ADD
              </div>
              <el-switch v-model="form2.tap" active-color="#13ce66" inactive-color="#ff4949"/>
            </div>

            <el-button class="transitionCreate-btn" @click="changeManage">
              Change
            </el-button>
          </div>
          <div class="changeSignature" v-show="settingIndex==1">
            <div class="input-box">
              <div class="name">
                NUMBER
              </div>
              <input type="text" v-model="mulNumber">
            </div>

            <el-button class="transitionCreate-btn" @click="changeSignature">
              Change
            </el-button>
          </div>
        </div>
      </div>
      <div class="liquidity" v-show="index==2">
        <div class="title">
          SETTINGS
        </div>
        <div class="nav-list">
          <div class="item" :class="{'active':settingIndex==0}" @click="settingIndex=0">
            changeManage
          </div>
          <div class="item" :class="{'active':settingIndex==1}" @click="settingIndex=1">
            changeSignature
          </div>
        </div>
        <div class="liquidity-panel">
          <div class="exchange-card">
            <div class="title">
              Add Liquidity
            </div>
            <div class="exchange">
              <div class="setting" @click="isShowSetting = true">
                <i class="el-icon-setting"></i>
                Settings
              </div>
              <div class="part1">
                <div class="floor1">
                  <strong style="color: #C8C8C8">INPUT</strong>
                  <span style="color:#B0B0B0">Balance:<span>{{ balance ? balance : 0 }}</span></span>
                </div>
                <div class="floor2">
                  <div>
                    <div class="coin-choose" @click="isShow=true,choosetype=0">
                      <div class="name">
                        {{ chooseName1 }}
                      </div>
                    </div>
                  </div>
                  <div class="value-box">
                    <input type="number" :class="{'is-zero':amount==0}" class="input2" v-model="amountA"/>
                    <button size="mini" class="button-max" @click="handleMax">MAX</button>
                  </div>
                </div>
              </div>
              <div class="arrow">
                ＋
              </div>
              <div class="part2">
                <div class="floor1">
                  <strong style="color: #C8C8C8">INPUT</strong>
                  <span style="color:#B0B0B0">Balance:<span>{{ balance ? balance : 0 }}</span></span>
                </div>
                <div class="floor2">
                  <div>
                    <div class="coin-choose" @click="isShow=true,choosetype=0">
                      <div class="name">
                        {{ chooseName2 }}
                      </div>
                    </div>
                  </div>
                  <div class="value-box">
                    <input type="number" :class="{'is-zero':amountB==0}" class="input2" v-model="amountB"/>
                    <button size="mini" class="button-max" @click="handleMax2">MAX</button>
                  </div>
                </div>
              </div>
<!--              <button class="button-exchange" @click="approve" v-show="chooseName1!='ETH'">-->
<!--                APPROVE  {{ chooseName1}}-->
<!--              </button>-->
<!--              <button class="button-exchange" @click="approve" v-show="chooseName2!='ETH'">-->
<!--                APPROVE  {{ chooseName2}}-->
<!--              </button>-->
              <button class="button-exchange" @click="supply">
                {{ isLoading ? 'APPROVING' : 'ADD' }}
              </button>
            </div>
            <div class="choose" v-show="isShow" @click="isShow=false">
              <div class="choose-title">
                Choose a token
                <div class="choose-close">
                  ×
                </div>
              </div>
<!--              <div class="choose-content">-->
<!--                <div class="choose-item" v-for="item in coinList" :key="item.name" @click="chooseHandle(item)">-->
<!--                  <div class="add-coin" @click="addCoin(item)" v-if="item.name!='ETH'">-->
<!--                    add to wallet-->
<!--                  </div>-->
<!--                  {{ item.name }}-->
<!--                </div>-->
<!--              </div>-->
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
                    <div class="rate-item" @click="Slippage=0.1" :class="{'active':Slippage==0.1}">
                      0.1%
                    </div>
                    <div class="rate-item" @click="Slippage=0.5" :class="{'active':Slippage==0.5}">
                      0.5%
                    </div>
                    <div class="rate-item" @click="Slippage=1" :class="{'active':Slippage==1}">
                      1%
                    </div>
                    <div class="rate-item" @click="Slippage=SlippageNumber" >
                      <input type="number" :class="{'is-zero':SlippageNumber==0}" class="customize-input" v-model="SlippageNumber" aria-placeholder="customize"/>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "multiSignPanel",
  data() {
    return {
      isLoading:false,
      amount:0,
      balance:0,
      amountA:0,
      amountB:0,
      isShow:false,
      isShowSetting:false,
      customize:0,
      chooseName1:"ETH",
      chooseName2:"DAI",
      Slippage:1,
      SlippageNumber:0,
      coinMap:{
        "ETH":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        "DAI":"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"
      },
      coinList: [
        {name: "ETH", address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},
        {name: "DAI", address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"},
      ],
      index: 0,
      settingIndex: 0,
      mulAddress: "",
      form: {},
      form2: {},
      mulNumber: 0,
      transitionList: [],
      transitionIndex: 0,
      kindMap: {
        4: "addLiquidity", 3: "manage", 2: "signature", 1: "transaction"
      }
    }
  },
  computed: {
    account() {
      return this.$store.state.app.account
    }
  },
  watch: {
    account() {
      this.getData()
    }
  },
  mounted() {
    if(!this.$route.params.address){
      this.$router.push({name:"myMultiSign"})
    }
    this.mulAddress = this.$route.params.address

    if (this.account) {
      this.getData()
    }
  },
  methods: {
    handleMax(){

    },
    handleMax2(){

    },
    approve(){},
    supply(){
      this.$store.dispatch("multiSign/creatTransaction",{
        address:this.mulAddress,
        tokenA:this.coinMap[this.chooseName1],
        tokenB:this.coinMap[this.chooseName2],
        amountA:this.amountA,
        amountB:this.amountB
      }).then(()=>{
        this.$message.success("success")
      }).catch(err=>{
        this.$message.error(err)
      })
    },

    getData() {
      this.transitionList = []
      this.$store.dispatch("multiSign/getPendingTransactions", {
        address: this.mulAddress,
      }).then((arr) => {
        console.log(arr)
        for (let i = 0; i < arr.length; i++) {
          this.$store.dispatch("multiSign/getPendingTransactionById", {
            address: this.mulAddress,
            idx: i,
          }).then(res => {
            this.transitionList.push(res)
          })
        }
        console.log(this.transitionList)

      })
    },
    managers() {

    },
    signTransaction(index) {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/signTransaction", {
        address: this.mulAddress,
        transactionId: index,
      }).then(() => {
        this.$message({
          message: "signTransaction success",
          type: "success"
        })
        this.getData()
        loading.close()
      }).catch(err => {
        this.$message.error(err)
        loading.close()
      })
    },
    creatTransaction() {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/creatTransaction", {
        address: this.mulAddress,
        token: this.form.token,
        to: this.form.to,
        amount: this.form.amount
      }).then(() => {
        this.$message({
          message: "creatTransaction success",
          type: "success"
        })
        this.getData()
        loading.close()
      }).catch(err => {
        this.$message.error(err)
        loading.close()
      })
    },
    changeManage() {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/changeManage", {
        address: this.mulAddress,
        account: this.form2.account,
        tap: this.form2.tap
      }).then(() => {
        this.$message.success("changeManage success")
        loading.close()
      }).catch(err => {
        this.$message.error(err)
        loading.close()
      })
    },
    changeSignature() {
      let loading = this.$loading()
      this.$store.dispatch("multiSign/changeSignature", {
        address: this.mulAddress,
        num: this.mulNumber
      }).then(() => {
        this.$message.success("changeSignature success")
        loading.close()
      }).catch(err => {
        this.$message.error(err)
        loading.close()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.multiSignPanel {
  display: flex;
  height: 100vh;
  overflow: auto;
  .setting-dialog{
    position: fixed;
    top: calc(20% + 100px);
    left: calc(50% - 200px);
    background: white;
    border-radius: 10px;
    width: 400px;

    .setting-header{
      color: white;
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
      color: #333333;
      padding: 30px;
      .setting-title{
        font-size: 16px;
        font-weight: 700;
        text-align: left;

      }
      .slippage{
        .floor1{
          line-height: 39px;
        }
        .floor2{
          display: flex;
          .rate-item{
            cursor: pointer;
            margin-left: 10px;
            width: 80px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #f8f8f8;
            border: 1px solid rgba(115,109,255,0.20);
            border-radius: 10px;
            &.active{
              border: 2px solid rgba(115,109,255,1);
              background: #fff;
              font-weight: bold;
            }
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
  .nav-panel {
    height: 100vh;
    width: 260px;
    background: url("../../static/imgs/nav_bg.png") no-repeat;
    overflow: hidden;
    background-size: 100% 100%;

    .title {
      padding: 20px 30px 0;
      color: #2c32e2;
      font-size: 26px;
      font-weight: bold;
    }

    .address {
      padding: 30px;
      width: 260px;
      word-break: break-all;
      color: #7073C8;
      font-weight: bold;
    }

    .nav-list {
      padding: 20px 30px;
      border-top: 1px solid rgba(253, 109, 174, 0.6);

      .item {
        cursor: pointer;
        padding: 16px 0;
        font-size: 16px;
        color: #FF1F84;
        display: flex;
        align-items: center;

        .icon {
          font-size: 16px;
          width: 22px;
          height: 22px;
          opacity: 0.7;
        }

        .name {
          margin-left: 10px;
          opacity: 0.7;
        }

        &.active {
          font-weight: bold;

          .icon {
            opacity: 1;
          }

          .name {
            opacity: 1;
          }
        }
      }
    }
  }

  .content {
    padding: 20px 100px;

    .title {
      font-size: 16px;
      font-weight: 700;
      text-align: left;
      color: #ff1f84;
    }

    .nav-list {
      display: flex;
      margin: 10px 0;
      width: 1000px;
      border-bottom: 1px solid rgba(253, 109, 174, 0.6);

      .item {
        cursor: pointer;
        padding: 0 16px;
        line-height: 50px;
        font-size: 14px;
        font-weight: bold;
        margin-left: 10px;
        border-bottom: 1px solid #eee;
        color: #FF1F84;
        opacity: 0.7;

        &.active {
          opacity: 1;
          border-bottom: 2px solid #FF1F84;
        }
      }
    }

    .transition {

      .transition-panel {
        width: 1000px;
        margin-top: 30px;
        padding: 30px 20px;
        background: #fff;
        border-radius: 30px;

        .transition-list {
          .no-data {
            width: 100%;
            display: flex;
            justify-content: center;
            font-size: 30px;
            color: #999;
          }

          .item {
            margin: 10px 0;
            padding: 0 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .status {
              font-weight: bold;
              font-size: 16px;
              text-transform: uppercase;
            }

            .amount {
              color: #8f92fc;
              font-size: 16px;
              font-weight: bold;
            }
          }
        }

        .input-box {
          display: flex;
          padding: 10px 0;
          align-items: center;

          .name {
            width: 100px;
            color: #999999;
            font-weight: bold;
          }

          input {
            width: 480px;
            height: 40px;
            background: #fafafa;
            border: 1px solid #eaeaea;
            padding: 0 30px;
            font-size: 18px;
            color: #999;
            border-radius: 10px;
          }
        }

        .transitionCreate-btn {
          margin-top: 20px;
          margin-left: 260px;
          color: #fff;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        }
      }
    }

    .settings {
      .setting-panel {
        width: 1000px;
        margin-top: 30px;
        padding: 30px 20px;
        background: #fff;
        border-radius: 30px;

        .input-box {
          display: flex;
          padding: 10px 0;
          align-items: center;

          .name {
            width: 100px;
            color: #999999;
            font-weight: bold;
          }

          input {
            width: 480px;
            height: 40px;
            background: #fafafa;
            border: 1px solid #eaeaea;
            padding: 0 30px;
            font-size: 18px;
            color: #999;
            border-radius: 10px;
          }
        }

        .transitionCreate-btn {
          margin-top: 20px;
          margin-left: 260px;
          color: #fff;
          background: linear-gradient(90deg, #12c2e9 0%, #c471ed 64%, #f64f59 100%);
        }
      }
    }
    .liquidity{
      .liquidity-panel{
        .exchange-card {
          margin: 20px auto;
          width: 390px;
          border-radius: 11px;
          overflow: hidden;
          background: #fff;
          text-align: left;
          box-shadow: 0px 30px 30px 3px rgba(156, 156, 156, 0.15);

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
              color: white;
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
                border: 1px solid #aaa;
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
              background: #eee;
              border: 1px solid #aaa;
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
                background: #eee;
                border-radius: 10px;
                box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.01);
                padding: 10px;
                border: 1px solid #aaa;

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
              margin: 20px auto;
              font-size: 20px;
              font-weight: 400;
              color: #46b787;
              width: 40px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              background: #eee;
              border: 1px solid #eee;
              border-radius: 50%;
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
              background: #eee;
              border-radius: 5px;
              padding: 0 6px;
              line-height: 40px;
              margin-left: 10px;
              border: 1px solid #aaa;
              .input2 {
                width: 100% !important;
                height: 40px !important;
                background: #eee !important;
                border: none;
                color: #666;
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
      }
    }
  }
}
</style>
