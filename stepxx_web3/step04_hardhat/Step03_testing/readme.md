<h1>Testing Smart Contracts with Hardhat</h1>
<p>After learning about compiling smart contracts, the next step is to write tests to verify that they work as intended. TypeScript helps provide better autocompletion and catch possible errors earlier.</p>
<h2>Setting Up Your Testing Environment</h2>
<p>The essential packages (ethers to connect to the Hardhat Network and Mocha and Chai for the tests) are part of the Hardhat Toolbox plugin we installed previously.</p>
<p>We already have a test directory in the project's root folder with pre-written tests that can be run with the command <code>npm run test</code>. Hardhat will automatically discover and run tests located in the test directory.</p>
<h2>Writing Tests</h2>
<p>To write tests for your smart contracts, follow these guidelines:</p>
<ol>
  <li>Import the required libraries and modules at the beginning of the test file:</li>
  <pre><code>const { expect } = require("chai");
const { ethers } = require("hardhat");</code></pre>
  <li>Use <code>describe</code> to group related tests:</li>
  <pre><code>describe("MySmartContract", function () {
  // Test cases go here
});</code></pre>
  <li>Use <code>it</code> to define individual test cases, and use the <code>expect</code> function from Chai for assertions:</li>
  <pre><code>it("Should return the correct value", async function () {
  // Test logic and assertions go here
});</code></pre>
</ol>
<p>Use the <code>ethers</code> library to interact with your smart contracts, deploy them, and call their functions during testing.</p>
<h2>Testing the Lock Smart Contract</h2>
<p>In the test directory, create a new file <code>my-tests.ts</code>. Now we will use the command <code>npx hardhat test test/my-tests.ts</code>, instead of just <code>npx hardhat test</code> to run tests only in this file.</p>
<p>For this test, we'll deploy the Lock smart contract and assert that the unlock time returned by the <code>unlockTime()</code> getter is the same one that we passed in the constructor:</p>
<pre><code>
    
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
});</code></pre>

Yse the command <code>npx hardhat test test/my-tests.ts</code> to run your test.

<p>Let's break down the test:</p>
<ol>
  <li>We import the required libraries and modules, including the <code>expect</code> function from Chai, the Hardhat Runtime Environment (HRE), and the network helpers to interact with the Hardhat Network.</li>
  <li>We use the <code>describe</code> and   <li>Inside the test case, we set the values for the amount we want to lock (in wei) and the unlock time. We use <code>time.latest</code> from the network helpers to get the timestamp of the last mined block.</li>
  <li>We deploy the Lock contract using the <code>ContractFactory</code> and passing the unlock time as its constructor argument. We also set the transaction value to send some ETH when deploying the contract.</li>
  <li>Finally, we check that the value returned by the <code>unlockTime()</code> getter in the contract matches the value we used when deploying it. We use the <code>await</code> keyword to get the value before comparing it with the expected value.</li>
</ol>
<p>This test case demonstrates how to deploy a smart contract, pass constructor arguments, and check the contract's state using getters. With these techniques, you can write more comprehensive tests to validate your smart contract's behavior.</p>

<p>Measuring code coverage ensures comprehensive testing for better code quality and security, while monitoring gas usage helps optimize contract performance and reduce costs for users.</p>

<h3>Measuring Code Coverage</h3>
<p>The Hardhat Toolbox includes the <code>solidity-coverage</code> plugin to measure the test coverage in your project. Just run the coverage task, and you'll get a report:</p>
<pre><code>npx hardhat coverage</code></pre>
<h3>Using the Gas Reporter</h3>
<p>The Hardhat Toolbox also includes the <code>hardhat-gas-reporter</code> plugin to get metrics of how much gas is used, based on the execution of your tests. The gas reporter is run when the test task is executed, and the REPORT_GAS environment variable is set:</p>
<pre><code>REPORT_GAS=true npx hardhat test</code></pre>
<pre><code>REPORT_GAS=true npx hardhat test test/my-tests.ts</code></pre>
<p>By measuring code coverage and monitoring gas usage, you can optimize your smart contracts and ensure they are efficient and secure.</p>
<h2>Learning Resources</h2>
<ul>
  <li><a href="https://hardhat.org/hardhat-runner/docs/guides/test-contracts">Learn more about testing smart contracts with Hardhat</a></li>
  <li><a href="https://www.youtube.com/watch?v=H-yL6nloq3I&list=PLWUCKsxdKl0rkLxnODO5Gyr7UqScHsbWM">Hardhat Testing Tutorial</a></li>
</ul>
<p>By following the provided guides and using the tools in the Hardhat ecosystem, you can thoroughly test your smart contracts efficiently, and securly.</p>
