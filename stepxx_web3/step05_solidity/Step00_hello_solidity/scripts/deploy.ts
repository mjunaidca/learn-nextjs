import { ethers } from "hardhat"; // import ethers from Hardhat

async function main() { // define an asynchronous main function
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage"); // get the SimpleStorage contract factory from ethers
  const simpleStorage = await SimpleStorage.deploy(); // deploy a SimpleStorage contract instance

  await simpleStorage.deployed(); // wait for the contract to be deployed

  console.log("SimpleStorage deployed to:", simpleStorage.address); // log the address of the deployed contract to the console


  console.log("SET VALUE IN CONTRACT");

  await simpleStorage.set(42); // call the set function on the contract

  console.log("GET Stored value:", (await simpleStorage.get()).toString());

}

main() // call the main function
  .then(() => process.exit(0)) // exit the process with a success code
  .catch((error) => { // catch any errors and log them to the console
    console.error(error);
    process.exit(1);
  });
