// scripts/deploy.js

import { ethers } from "hardhat";

async function main() {
    // Get the ContractFactory and Signers here.
    const ExpControl = await ethers.getContractFactory("ExpControl");
    const expControl = await ExpControl.deploy();

    console.log("ExpControl deployed to:", expControl.address);

    console.log("Add John");
    const tx1 = await expControl.addPerson("John", 25)

    tx1.wait()

    console.log("============>Added John Age 25");
    console.log("Is Adult:", await expControl.isAdult('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
    console.log("getAgeCategory:", await expControl.getAgeCategory('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'));
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
