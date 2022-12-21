const hre = require('hardhat');

async function main() {
    const EightNft = await hre.ethers.getContractFactory("EightNft");
    const eightnft = await EightNft.deploy("EightNft", "EGT", "ipfs://QmcowAxuVSRUeDgs7SSWkRLh63zS2HsVL5N2cmB1J3MQ4G/");
  
  await eightnft.deployeds
  
    console.log("eightnft deployed to ", eightnft.address);

  };

main().then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});