const VarunContract = artifacts.require('VarunContract');

module.exports = async function (deployer) {
  deployer.deploy(VarunContract);
};
