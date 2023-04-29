import { ethers } from "hardhat";

async function main() {
  // Get the contract factory using ethers
  const Contract = await ethers.getContractFactory("VariableScopingAndTypeConversion");

  // Deploy the contract using the factory
  const contract = await Contract.deploy();

  // Wait for the contract to be deployed and mined
  await contract.deployed();

  // Log the address of the deployed contract
  console.log("Contract deployed to:", contract.address);

  // Call the contract's getNumber() function
  console.log("Public Number:", (await contract.getPublicNumber()));

  console.log("Internal Number:", (await contract.getInternalNumber()));

  console.log("Private Number:", (await contract.getPrivateNumber()));

  console.log("Implicit Conversion:", (await contract.implicitConversion()));

  console.log("Explicit Conversion:", (await contract.explicitConversion()));


}

// Call the main function to deploy the contract
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
