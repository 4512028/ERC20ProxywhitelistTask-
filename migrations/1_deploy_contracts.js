const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

var Tv1 = artifacts.require("./Tv1.sol");
var Tv2 = artifacts.require("./Tv2.sol");

var Tv3 = artifacts.require("./Tv3.sol");

module.exports = async function (deployer) {
  // if we deploying it first time
  // const instance = await deployProxy(Tv1, [], { deployer });
  // const upgraded = await upgradeProxy(instance.address, Tv2, { deployer });
  // console.log("Upgraded", upgraded.address);
  //================================================================================
  // if we deploying it for updating
  const existing = await Tv1.deployed();
  console.log(existing.address, "existing.address");
  const instance = await upgradeProxy(existing.address, Tv3, { deployer });
  console.log("Upgraded", instance.address);
};
