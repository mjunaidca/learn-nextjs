// Import necessary libraries
import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract } from "ethers";

// Test suite for the SimpleBank contract
describe("SimpleBank", () => {
  let simpleBank: Contract;

  // Deploy a new SimpleBank contract before each test
  beforeEach(async () => {
    const SimpleBank = await ethers.getContractFactory("SimpleBank");
    simpleBank = await SimpleBank.deploy();
    await simpleBank.deployed();
  });

  // Test if the deployer is set as the owner
  it("Should set the contract deployer as the owner", async () => {
    const [owner] = await ethers.getSigners();
    expect(await simpleBank.owner()).to.equal(owner.address);
  });

  // Test if depositing funds works correctly
  it("Should allow depositing funds", async () => {
    const [account] = await ethers.getSigners();
    const depositAmount = ethers.utils.parseEther("1");

    await simpleBank.connect(account).deposit({ value: depositAmount });

    expect(await simpleBank.checkBalance(account.address)).to.equal(depositAmount);
  });

  // Test if withdrawing funds works correctly
  it("Should allow withdrawing funds", async () => {
    const [account] = await ethers.getSigners();
    const depositAmount = ethers.utils.parseEther("1");
    const withdrawalAmount = ethers.utils.parseEther("0.5");

    await simpleBank.connect(account).deposit({ value: depositAmount });
    await simpleBank.connect(account).withdraw(withdrawalAmount);

    expect(await simpleBank.checkBalance(account.address)).to.equal(depositAmount.sub(withdrawalAmount));
  });

  // Test if withdrawing more funds than available is disallowed
  it("Should not allow withdrawing more funds than available", async () => {
    const [account] = await ethers.getSigners();
    const depositAmount = ethers.utils.parseEther("1");
    const withdrawalAmount = ethers.utils.parseEther("2");

    await simpleBank.connect(account).deposit({ value: depositAmount });

    await expect(simpleBank.connect(account).withdraw(withdrawalAmount)).to.be.revertedWith("Insufficient balance.");
  });

  // Test if the owner can withdraw all funds
  it("Should allow the owner to withdraw all funds", async () => {
    const [owner] = await ethers.getSigners();
    const depositAmount = ethers.utils.parseEther("1");

    await simpleBank.connect(owner).deposit({ value: depositAmount });
    await simpleBank.connect(owner).withdrawAllFunds();

    expect(await simpleBank.checkBalance(owner.address)).to.equal(0);
  });

});