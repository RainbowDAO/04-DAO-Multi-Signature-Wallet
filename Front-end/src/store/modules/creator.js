import getContract from '@/abi/index'

const state = {
    token: null,
    daoAddress: null
}
const mutations = {
    SET_DAOADDRESS(state, address) {
        state.daoAddress = address
    }
}

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName("Creator", rootState.app.web3)
}

const actions = {
    creatNewMultiSign({rootState}, {
        minSignCount,
        manageArr
    }) {
        console.log(minSignCount, manageArr)
        judgeToken(rootState)
        return new Promise((resolve,reject) => {
            state.token.methods.creatNewMultiSign(minSignCount, manageArr).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    getLimitedNumber({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.getLimitedNumber(rootState.app.account).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
    getMultiSignAddr({rootState},index) {
        judgeToken(rootState)
        return new Promise((resolve) => {
            state.token.methods.getMultiSignAddr(rootState.app.account,index).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            })
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}

