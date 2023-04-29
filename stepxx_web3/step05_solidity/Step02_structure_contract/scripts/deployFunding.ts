import { ethers } from "hardhat";
import { FundingTest, FundingTest__factory } from "../typechain-types";

async function main() {
    const SolidityTest: FundingTest__factory = await ethers.getContractFactory("FundingTest");
    const solidityTest: FundingTest = await SolidityTest.deploy();

    await solidityTest.deployed();

    console.log(`SolidityTest deployed to ${solidityTest.address}`);

    console.log("Current Round = ", await solidityTest.getCurrentFundingRound());

    await solidityTest.changeRound(2);

    console.log("Current Round = ", await solidityTest.getCurrentFundingRound());

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
