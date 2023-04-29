// scripts/deploy.ts

import { ethers } from "hardhat";

async function main() {
  const SimpleMath = await ethers.getContractFactory("SimpleMath");
  const simpleMath = await SimpleMath.deploy();

  await simpleMath.deployed();

  console.log("IS 4 EVEN:", await simpleMath.isEven(4));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
