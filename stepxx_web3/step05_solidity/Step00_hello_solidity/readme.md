<h1>Hello Contract With Local And Browser Environment</h1>

<p>Solidity is a programming language designed for creating smart contracts on the Ethereum platform. Smart contracts are the basic units of deployment and execution for Ethereum Virtual Machines (EVMs).</p>

<p>You can use the Remix runtime environment to test smart contracts in your browser. Follow these steps to get started:</p>

<ol>
  <li>Visit the Remix website: <a href="https://remix.ethereum.org/">https://remix.ethereum.org/</a></li>
  <li>In the "Contracts" section, create a new file called "Hello.sol" and paste the following code:</li>
</ol>

<pre>
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8;

contract SimpleStorage {
    uint storedData;

    function set(uint x) public {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
}
</pre>

<ol start="3">
  <li>Go to the "Compile" tab on the left side and click "Compile Hello.sol".</li>
  <li>Deploy your contract using the "Deploy &amp; Run Transactions" tab below the compile tab.</li>
  <li>Under the "Deployed Contracts" section, you can test your first deployed contract. Set a value and then retrieve it using the "get" function. Play around with the contract and explore its functionalities.</li>
</ol>

<p>Key concepts to understand:</p>
<ul>
  <li><strong>Pragma</strong>: A directive that specifies the target compiler version to be used for compiling the current Solidity file.
    <ul>
      <li>The "^" character, along with the version number, denotes the minimum version required by the contract – for example, a version with 0.8.9 means that the smart contract will compile with version 0.8.9 and above but not below.</li>
    </ul>
  </li>
  <li><strong>contract</strong>: Keyword used to declare a smart contract.</li>
</ul>

<h3>Local HardHat Environment</h3>
<p>Now clone this repo and run the following commands to compile, test and deploy your Smart Contract Locally (It's the Smart Contract Setup in Sample HardHat With Typescript Boiler Plate we setup in hardhat step 02) </p>
<ol>
  <pre><code>npx hardhat compile</code></pre>
  <li>Run pre-written tests in the tests directory using the following command:</li>
  <pre><code>npx hardhat test</code></pre>
  <li>Deploy the contract using the `deploy.ts` script:</li>
  <pre><code>npx hardhat run scripts/deploy.ts</code></pre>
</ol>

<p>For a deeper understanding of what's happening in this example, consult the Solidity documentation:</p>

<p><a href="https://docs.soliditylang.org/en/v0.8.19/introduction-to-smart-contracts.html">https://docs.soliditylang.org/en/v0.8.19/introduction-to-smart-contracts.html</a></p>

<p>Next, you'll learn more about Solidity and work with Hardhat and TypeScript as your development environment.</p>
