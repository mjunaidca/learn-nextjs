import { ethers } from "hardhat"; // import ethers from Hardhat
import { expect } from "chai"; // import chai's expect assertion library

describe("SimpleStorage", function () { // define a test suite called SimpleStorage
  it("Should set and get a value", async function () { // define a test case called Should set and get a value
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage"); // get the SimpleStorage contract factory from ethers
    const simpleStorage = await SimpleStorage.deploy(); // deploy a SimpleStorage contract instance

    await simpleStorage.deployed(); // wait for the contract to be deployed

    const setValue = 42; // set the value to 42
    await simpleStorage.set(setValue); // call the set function on the contract instance with the value
    expect(await simpleStorage.get()).to.equal(setValue); // retrieve the value from the contract and assert that it matches the set value
  });
});
