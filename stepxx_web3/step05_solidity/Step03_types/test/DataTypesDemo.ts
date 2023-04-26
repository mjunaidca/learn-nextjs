import { ethers } from "hardhat";
import { expect } from "chai";

describe("DataTypesDemo", function () {
  it("Should return the correct addresses count", async function () {
    const [deployer, user1] = await ethers.getSigners();

    // Deploy the contract
    const DataTypesDemo = await ethers.getContractFactory("DataTypesDemo");
    const dataTypesDemo = await DataTypesDemo.deploy();
    await dataTypesDemo.deployed();

    // Make a deposit to update the balances mapping and addresses array
    const depositAmount = ethers.utils.parseEther("1");
    await dataTypesDemo.connect(user1).deposit({ value: depositAmount });

    // Call the getAddressesCount function and check the returned value
    const addressesCount = await dataTypesDemo.getAddressesCount();
    expect(addressesCount).to.equal(1);
  });
});
