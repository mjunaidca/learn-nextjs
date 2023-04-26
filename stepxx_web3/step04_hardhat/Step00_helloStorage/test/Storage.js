const { expect } = require("chai");

describe("SimpleStorage", function () {
    // This test checks if the SimpleStorage contract can store and retrieve a value correctly
    it("Should store and retrieve a value", async function () {
        // 1. Deploy the SimpleStorage contract
        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        const simpleStorage = await SimpleStorage.deploy();
        await simpleStorage.deployed();

        // 2. Set the value to 42 using the set() function
        await simpleStorage.set(42);

        // 3. Retrieve the stored value using the get() function
        const storedData = await simpleStorage.get();

        // 4. Check if the stored value is equal to 42
        expect(storedData).to.equal(42);
    });
});