import { ethers } from "hardhat";
import { Registry, Registry__factory } from "../typechain-types";

async function main() {
  // Get the Registry contract factory
  const RegistryFactory: Registry__factory = await ethers.getContractFactory("Registry");
  
  // Deploy the Registry contract
  const registry: Registry = await RegistryFactory.deploy();

  // Wait for the deployment to be mined
  await registry.deployed();

  // Log the deployed contract address
  console.log(`Registry deployed to ${registry.address}`);

  // Example usage of the contract: Register a user
  await registry.register();

  // Check if the user is registered
  const isRegistered = await registry.isRegistered(registry.signer.getAddress());
  console.log("User registration status:", isRegistered);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
