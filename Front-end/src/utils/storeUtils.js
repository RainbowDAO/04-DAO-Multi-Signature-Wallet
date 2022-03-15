require('dotenv').config();
const fs = require('fs');

const buildDir = "./src/abi/data/";

const writeDir = "./src/store/modules/abisMethods/"
if (!fs.existsSync(buildDir)) {
    throw new Error('ABI buildDir not exists');
}
if (!fs.existsSync(writeDir)) {
    throw new Error('ABI abisDirMap not exists');
}
const files = fs.readdirSync(buildDir);

console.log("所有合约数量：", files.length)
//创建index.js 导出所有合约
let indexStr = ``, exportStr = `export default { `;
//处理所有合约
for (let i = files.length - 1; i >= 0; i--) {
    // 获取合约 name 、 abi
    let contract = JSON.parse(fs.readFileSync(buildDir + files[i]), 'utf8');
    let name = contract.contractName;
    let abi = contract.abi;

    let tempFileStr = `
		import getContract from "@/utils/abiUtil";

		function judgeToken(rootState) {
			if (!state.token) state.token = getContract.getContractByName('${name}', rootState.app.web3)
		}
		const state = {};
		const mutations = {};
	`
    let actions = ` const actions = { \n`;
    if(!contract.networks[666]){continue}
    console.log("生成" + contract.contractName + ".js")

    // 处理index.js
    indexStr += `import ${name} from "@/store/modules/abisMethods/${name}";`
    exportStr += `${name},`
    // end处理index.js

    // 处理方法
    for (let j = 0; j < abi.length; j++) {
        let functionObj = abi[j];

        //call 方法
        if(functionObj.type == "function" &&functionObj.stateMutability == "view"){
            // 处理参数
            let params = functionObj.inputs;
            let tempParamStr = ``
            for (let k = 0; k < params.length; k++) {
                tempParamStr += params[k].name + ","
            }
            // 处理参数end

            tempParamStr = tempParamStr.substr(0,tempParamStr.length-1)
            actions += `${functionObj.name} ({rootState}${tempParamStr.length>0?',':''} ${tempParamStr}){
					judgeToken(rootState)
					return new Promise((resolve,reject) => {
						state.token.methods.${functionObj.name}(${tempParamStr}).call().then(res => {
						resolve(res)
					}).catch(err=>{
                        reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                    })
				})
			},\n`

        }
        //end call 方法
        //send 方法
        if(functionObj.type == "function" &&functionObj.stateMutability == "nonpayable"){
            // 处理参数
            let params = functionObj.inputs;
            let tempParamStr = ``
            for (let k = 0; k < params.length; k++) {
                tempParamStr += params[k].name + ","
            }
            // 处理参数end

            tempParamStr = tempParamStr.substr(0,tempParamStr.length-1)
            actions += `${functionObj.name} ({rootState}${tempParamStr.length>0?',':''} ${tempParamStr}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.${functionObj.name}(${tempParamStr}).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.${functionObj.name}(${tempParamStr}).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2)
                            }).then(res => {
                                 let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                                 operateLogs.push({
                                    name:"${functionObj.name}",
                                    from:res.from,
                                    to:res.to,
                                    gasUsed:res.gasUsed,
                                    blockHash: res.blockHash
                                 })
                                 if(operateLogs.length>20){
                                    operateLogs.shift()
                                 }
                                 localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                                 resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},\n`

        }
        //end send 方法
        // send with value 方法
        if(functionObj.type == "function" &&functionObj.stateMutability == "payable"){
            // 处理参数
            let params = functionObj.inputs;
            let tempParamStr = ``
            for (let k = 0; k < params.length; k++) {
                tempParamStr += params[k].name + ","
            }
            // 处理参数end

            tempParamStr = tempParamStr.substr(0,tempParamStr.length-1)
            actions += `${functionObj.name} ({rootState}, value ${tempParamStr.length>0?',':''} ${tempParamStr}){
                        judgeToken(rootState)
                        return new Promise((resolve,reject) => {
                            state.token.methods.${functionObj.name}(${tempParamStr}).estimateGas({
                            from: rootState.app.account,
                        }).then(gas => {
                            state.token.methods.${functionObj.name}(${tempParamStr}).send({
                                from: rootState.app.account,
                                gas: parseInt(gas * 1.2),
                                value: rootState.app.web3.utils.toWei(value)
                            }).then(res => {
                              let operateLogs = localStorage.getItem("operateLogs")?JSON.parse(localStorage.getItem("operateLogs")):[]
                              operateLogs.push({
                                name:"${functionObj.name}",
                                from:res.from,
                                to:res.to,
                                gasUsed:res.gasUsed,
                                blockHash: res.blockHash
                              })
                              if(operateLogs.length>20){
                                operateLogs.shift()
                              }
                              localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                              resolve(res)
                            })
                        }).catch(err=>{
                            reject(JSON.parse(err.message.substr(24,err.message.length)).message)
                        })
				    })
			},\n`

        }
        //end send with value方法
    }
    actions += `}`
    tempFileStr += actions
    // 处理方法end

    tempFileStr += `
			export default {
			namespaced: true,
			mutations,
			state,
			actions
		}
	`
    fs.writeFileSync(`${writeDir}${name}.js`, tempFileStr, 'utf8');
}
//end 处理所有合约
exportStr += `}`
indexStr += exportStr
fs.writeFileSync(`${writeDir}index.js`, indexStr, 'utf8');
console.log("已生成所有vue store")
