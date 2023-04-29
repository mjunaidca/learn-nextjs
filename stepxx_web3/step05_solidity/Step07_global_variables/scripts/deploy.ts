import { ethers } from "hardhat";

async function main() {

  const CryptoVariables = await ethers.getContractFactory("CryptoVariables");
  const cryptoVariables = await CryptoVariables.deploy();

  await cryptoVariables.deployed();

  console.log(
    `Deployed to ${cryptoVariables.address}`
  );

  console.log("Global variables...", (await cryptoVariables.getGlobalVars()));
  // console.log("Global variables...", (await cryptoVariables.getGlobalVariables()));
  console.log("msg-related variables...", (await cryptoVariables.getMessageVars()));
  console.log("getHashes...", (await cryptoVariables.getHashes("0x8d85cd3da3f3a213f2b726c8a1ebd5c5b1869d22a9e8d1b652baeea0e47f8756")));
  console.log("getAddressInfo...", (await cryptoVariables.getAddressInfo("0x742d35Cc6634C0532925a3b844Bc454e4438f44e")));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
