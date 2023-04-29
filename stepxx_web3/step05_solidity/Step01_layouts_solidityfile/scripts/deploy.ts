import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const Counter = await ethers.getContractFactory("Counter");

  // Deploy the contract
  const counter = await Counter.deploy();
  console.log("Counter deployed to:", counter.address);

  // Get Counter Initial Value
  console.log("Counter Initial Value:", (await counter.getCount()).toString());

  // Increate Counter Value
  await counter.increment();

  console.log("Increaing the Counter Value");

  // Get Counter Value
  console.log("Counter Value:", (await counter.getCount()).toString());


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
