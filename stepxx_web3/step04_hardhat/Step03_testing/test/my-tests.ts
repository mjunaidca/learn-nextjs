
const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("Lock", function () {
    it("Should set the right unlockTime", async function () {
        const lockedAmount = 1_000_000_000;
        const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
        const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

        // Deploy a lock contract where funds can be withdrawn
        // one year in the future
        const Lock = await hre.ethers.getContractFactory("Lock");
        const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

        
        // Assert that the value is correct
        expect(await lock.unlockTime()).to.equal(unlockTime);

    });
});