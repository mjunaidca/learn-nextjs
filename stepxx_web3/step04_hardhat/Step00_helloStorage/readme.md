<h1>Setup Simple HardHat Envirment </h1>

Hardhat projects are Node.js projects with the hardhat package installed and a hardhat.config.js file.
<ul>
  <li>Ensure you already have a working Node.js >=16.0</li>
  <li>Install the extension <a href="https://hardhat.org/hardhat-vscode/docs/overview#hardhat-for-visual-studio-code">Hardhat for Visual Studio Code</a></li>
</ul>

<h2>Initialize and Test a Simple Smart Contract Using Hardhat</h2>

<p>To initialize a Node.js project using npm 7 or later:</p>

<pre><code>npm init -y</code></pre>

<p>To install HardHat:</p>

<pre><code>npm install --save-dev hardhat</code></pre>

<p>Hardhat projects are Node.js projects with the <code>hardhat</code> package installed and a <code>hardhat.config.js</code> file.</p>

<p>Now run the command to create a sample project to run off the ground:</p>

<pre><code>npx hardhat</code></pre>

<p>We will create an empty config file for now to run Hardhat using a default project structure.</p>

<p>To install the plugin:</p>

<pre><code>npm install --save-dev @nomicfoundation/hardhat-toolbox</code></pre>

<p>Now in your <code>hardhat.config.js</code> add the following line on top:</p>

<pre><code>require("@nomicfoundation/hardhat-toolbox");</code></pre>

<p>Now create a new directory <code>contracts</code>. We will write code for our smart contracts here. Inside it create a file <code>NumberStorage.sol</code>. In the file pass the following code:</p>

<pre><code>// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 &lt;0.9.0;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
</code></pre>

<p>This is a simple smart contract that sets a value and then retrieves it.</p>

<p>Compiling a smart contract transforms the human-readable Solidity code into machine-readable bytecode that the Ethereum Virtual Machine (EVM) can execute. In addition to generating bytecode, the compiler also produces an Application Binary Interface (ABI).</p>

<p>Now create a new <code>test</code> directory. Here we will write tests for our smart contracts. Create a <code>Storage.js</code> file and add the following code:</p>

<pre><code>const { expect } = require("chai");

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
</code></pre>

<p>Now in your terminal run the command:</p>

<pre><code>npx hardhat test</code></pre>

<p>Note: Hardhat for Visual Studio Code is the official Hardhat extension that adds advanced support for Solidity to VSCode. If you use Visual Studio Code, give it a try!</p>

<h2>Hardhat's Architecture:</h2>

<p>Hardhat is designed around the concepts of tasks and plugins. The bulk of Hardhat's functionality comes from plugins, and you're free to choose the ones you want to use.</p>

<ol>
  <li>
    <strong>Tasks:</strong> Every time you're running Hardhat from the command-line, you're running a task. For example, <code>npx hardhat compile</code> is running the <code>compile</code> task. To see the currently available tasks in your project, run <code>npx hardhat</code>. Feel free to explore any task by running <code>npx hardhat help [task]</code>
  </li>
  <li>
    <strong>Plugins:</strong> Most of the time the way to use a given tool is by consuming a plugin that integrates it into Hardhat. @nomicfoundation/hardhat-toolbox, is a plugin that has everything you need for developing smart contracts.
  </li>
</ol>
<p>Follow <a href="https://hardhat.org/tutorial">this tutorial</a> to learn more about Hardhat.</p>
