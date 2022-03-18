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

function judgeToken(rootState, address) {
    if (!state.token) state.token = getContract.getContractByToken("MultiSign",address, rootState.app.web3)
}

const actions = {
    getPendingTransactionById({rootState}, {
        address,
        idx
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve,reject) => {
            state.token.methods.getPendingTransactionById(idx).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    getPendingTransactions({rootState}, {
        address,
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve,reject) => {
            state.token.methods.getPendingTransactions().call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    signTransaction({rootState}, {
        address,
        transactionId,
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve,reject) => {
            state.token.methods.signTransaction(transactionId).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    creatLiquidity({rootState}, {
        address,
        tokenA,
        tokenB,
        amountA,
        amountB
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve,reject) => {
            state.token.methods.creatLiquidity( tokenA,tokenB,amountA,amountB).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    creatTransaction({rootState}, {
        address,
        token,
        to,
        amount
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve,reject) => {
            state.token.methods.creatTransaction(token, to, rootState.app.web3.utils.toWei(amount)).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    changeManage({rootState}, {
        address,
        account,
        tap
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve,reject) => {
            state.token.methods.changeManage(  account, tap).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    changeSignature({rootState}, {
        address,
        num
    }) {
        judgeToken(rootState,address)
        return new Promise((resolve,reject) => {
            state.token.methods.changeSignature(num).send({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    getMultiSignAddr({rootState},index) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getMultiSignAddr(rootState.app.account,index).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    managers({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.managers(rootState.app.account).call({
                from: rootState.app.account,
            }).then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
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

