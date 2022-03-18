const Creator = artifacts.require("Creator");
module.exports = function (deployer) {
  deployer.deploy(Creator);
};
