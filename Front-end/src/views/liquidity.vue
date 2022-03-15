<template>
  <div class="liquidity">
    <div class="layout-title">
      <div class="title">
        Liquidity
      </div>
    </div>
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
              <input type="number" :class="{'is-zero':amount2==0}" class="input2" v-model="amount2"/>
              <button size="mini" class="button-max" @click="handleMax2">MAX</button>
            </div>
          </div>
        </div>
        <button class="button-exchange" @click="approve" v-show="chooseName2!='ETH'">
          {{ 'APPROVE' }}
        </button>
        <button class="button-exchange" @click="supply">
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
              add to wallet
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
  </div>
</template>

<script>
export default {
  name: "liquidity",
  data(){
    return{
      amount:0,
      amount2:0,
      isShow:false,
      isShowSetting:false,
      customize:0,
      chooseName:"ETH",
      chooseName2:"DAI",
    }
  },
  methods:{
    handleMax(){

    },
    handleMax2(){

    },
    approve(){},
    supply(){}
  }
}
</script>

<style lang="scss" scoped>
.liquidity{
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
        margin: 20px auto;
        font-size: 20px;
        font-weight: 400;
        color: #46b787;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: #1f1c32;
        border: 1px solid #333333;
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
}
</style>
