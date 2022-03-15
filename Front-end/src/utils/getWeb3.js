import Web3 from 'web3'

let curProvider = null

function getWeb3(provider) {
    return new Promise(function (resolve, reject) {
        // Check for injected web3 (mist/metamask)
        let web3js = window.web3
        if (provider) { // 提供了provider
            curProvider = provider
            let web3 = new Web3(provider)
            resolve({
                web3() {
                    return web3
                }
            })
        } else if (typeof web3js !== 'undefined') { // 未提供provider
            let web3 = new Web3(web3js.currentProvider)
            curProvider = web3js.currentProvider



            resolve({
                web3() {
                    return web3
                }
            })
        } else { // 无法获取provider
            reject(new Error('Unable to connect'))
        }
    }).then(result => {
        return new Promise(function (resolve) {
            // 提取有用信息
            const web3 = result.web3()
            let webRes = {
                isInjected: false,
                web3Instance: result,
                networkId: curProvider.networkId,
                account: curProvider.accounts && curProvider.accounts.length > 0 ? curProvider.accounts[0] : null
            }
            web3.eth.net.getId().then(netWarkId => {
                webRes.networkId = netWarkId
                web3.eth.getCoinbase().then(coinbase => {
                    coinbase ? webRes.account = coinbase : ''
                    console.log(webRes)
                    web3.eth.getBalance(webRes.account).then(res=>{
                        webRes.ethBalance = res
                        resolve(webRes)
                    })

                })
            })
        })
    })
}

export default getWeb3
