import { ethers } from "hardhat";

async function main() {
  // Compile the smart contract
  const DataTypesDemo = await ethers.getContractFactory("DataTypesDemo");
  console.log("Compiling DataTypesDemo...");

  // Deploy the smart contract
  const contract = await DataTypesDemo.deploy();
  console.log("Deploying DataTypesDemo...");

  // Wait for the contract to be mined
  await contract.deployed();
  console.log("DataTypesDemo contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
