import { ethers } from "hardhat";
import { expect } from "chai";
// import { Contract } from "ethers";

// Describe the test suite for the PeopleManager smart contract
describe("PeopleManager", () => {
  let PeopleManager: any;

  // Before each test, deploy a new PeopleManager smart contract
  beforeEach(async () => {
    const PeopleManagerFactory = await ethers.getContractFactory("PeopleManager");
    PeopleManager = await PeopleManagerFactory.deploy();
    await PeopleManager.deployed();
  });

  // Test that a person is added to the people array
  it("Should add a person to the people array", async () => {
    await PeopleManager.addPerson("Alice", 30);
    const personCount = await PeopleManager.getPeopleCount();
    expect(personCount.toNumber()).to.equal(1);
  });

  // Test that a person's information can be retrieved from the people array
  it("Should retrieve a person's information from the people array", async () => {
    await PeopleManager.addPerson("Alice", 30);
    const [name, age] = await PeopleManager.getPerson(0);
    expect(name).to.equal("Alice");
    expect(age.toNumber()).to.equal(30);
  });
});
