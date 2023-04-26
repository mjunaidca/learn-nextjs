import { ethers } from "hardhat";

async function main() {
  // Get the contract factory
  const Counter = await ethers.getContractFactory("Counter");

  // Deploy the contract
  const counter = await Counter.deploy();
  console.log("Counter deployed to:", counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
