// SPDX-License-Identifier: MIT
import { ethers } from "hardhat";
import { expect } from "chai";

describe("VariableScopingAndTypeConversion", function () {
  let contract: any;

  beforeEach(async () => {
    // Deploy the contract
    const Contract = await ethers.getContractFactory("VariableScopingAndTypeConversion");
    contract = await Contract.deploy();
    await contract.deployed();
  });

  it("should have correct initial values for state variables", async function () {
    // Check initial values of state variables
    expect(await contract.myPublicNumber()).to.equal(10);
    expect(await contract.getInternalNumber()).to.equal(20);
    expect(await contract.getPrivateNumber()).to.equal(30);
  });

  it("should perform implicit type conversion correctly", async function () {
    // Check implicit type conversion
    expect(await contract.implicitConversion()).to.equal(255);
  });

  it("should perform explicit type conversion correctly", async function () {
    // Check explicit type conversion
    expect(await contract.explicitConversion()).to.equal(255);
  });
});
