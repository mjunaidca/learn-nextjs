import { expect } from "chai";
import { ethers } from "hardhat";

describe("Counter", function () {
  it("Should increment the counter and return the correct count", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();
    await counter.deployed();

    // Initial count should be 0
    expect(await counter.getCount()).to.equal(0);

    // Increment the counter
    await counter.increment();

    // Count should now be 1
    expect(await counter.getCount()).to.equal(1);
  });
});
