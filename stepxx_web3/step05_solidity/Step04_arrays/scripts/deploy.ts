import { ethers } from "hardhat";

// Main function to deploy the PeopleManager smart contract
async function main() {
  // Get the contract factory for PeopleManager
  const PeopleManagerFactory = await ethers.getContractFactory("AddressMapping");

  // Deploy the PeopleManager smart contract using the factory
  const PeopleManager = await PeopleManagerFactory.deploy();

  // Wait for the transaction to be mined and the smart contract to be deployed
  await PeopleManager.deployed();

  // Log the deployed contract address
  console.log("PeopleManager deployed");
}

// Execute the main function and catch any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
