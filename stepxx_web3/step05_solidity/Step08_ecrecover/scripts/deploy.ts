import { ethers } from "hardhat";
import { MessageVerifier, MessageVerifier__factory } from "../typechain-types";

async function main() {
  // Get the MessageVerifier contract factory
  const MessageVerifierFactory: MessageVerifier__factory = await ethers.getContractFactory("MessageVerifier");

  // Deploy the MessageVerifier contract
  const messageVerifier: MessageVerifier = await MessageVerifierFactory.deploy();

  // Wait for the deployment to be mined
  await messageVerifier.deployed();

  // Log the deployed contract address
  console.log(`MessageVerifier deployed to ${messageVerifier.address}`);

  // Define the message hash, v, r, and s values for testing
  const message = "0x3e0d82f52c2e9ac9c0de77b40d0d1fbfbcf8bdaa7a4d68a1b7d4b4a3bcb3b0d4";
  const v = 28;
  const r = "0x988e5d0b9e9b1feec892725918a07b7e0df8c90f2e840d92e89159a8079b0199";
  const s = "0x0f682d8b8f02993a7ddefa319b17d7244d4cc3ab7213d4ee4f4d2f3e6a3a7d27";

  // Call the verifyMessage function with the test values
  const isVerified = await messageVerifier.verifyMessage(message, v, r, s);

  // Log the result of the verifyMessage function
  console.log(`Message verified: ${isVerified}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
