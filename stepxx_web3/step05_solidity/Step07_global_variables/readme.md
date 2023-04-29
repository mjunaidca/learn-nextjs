<h2>Block and Transaction Global Variables in Solidity</h2>
<p>In Solidity, there are a few global variables that are not declared within contracts but can be accessed from code within contracts. These global variables provide information about the current transaction and blocks, allowing contracts to utilize them. Solidity provides both block- and transaction-related variables.</p>
<h3>Global Variables and Functions in Solidity</h3>
<p>Global variables and functions provide important information and features to contracts in Solidity. This includes information about the current transaction, block, and message, as well as cryptographic functions and address-related functions and properties.</p>

<h3>Transaction- and Message-related Global Variables</h3>
<p>Solidity provides access to a few global variables that are not declared within contracts but are accessible from code within contracts. These values can be used in smart contracts to dynamically base them on the current runtime context. Solidity provides access to the following transaction- and message-related global variables:</p>
<ul>
  <li><code>block.coinbase</code>: The miner's address</li>
  <li><code>block.difficulty</code>: The current block difficulty</li>
  <li><code>block.gaslimit</code>: The gas limit of the current block</li>
  <li><code>gasleft()</code>: The remaining gas</li>
  <li><code>tx.gasprice</code>: The gas price of the current transaction</li>
  <li><code>block.number</code>: The current block number</li>
  <li><code>block.timestamp</code>: The timestamp of the current block</li>
  <li><code>msg.data</code>: The input data of the current message call</li>
  <li><code>msg.sig</code>: The function signature of the current message call</li>
  <li><code>msg.value</code>: The value being sent with the current message call</li>
  <li><code>msg.sender</code>: The immediate sender of the current message call</li>
  <li><code>tx.origin</code>: The original external account that started the transaction</li>
  <li><code>blockhash(block.number)</code>: The block hash of the current block number</li>
</ul>
<p>It is recommended to use <code>msg.sender</code> over <code>tx.origin</code> as the former refers to the immediate previous account that invokes the next contract, while the latter always refers to the original external account that started the transaction.</p>
<h3>Cryptographic Global Variables</h3>
<p>Solidity provides cryptographic functions for hashing values within contract functions. There are two hashing functions: SHA2 and SHA3 (recommended to use the keccak256 function). Both functions work on tightly packed arguments and can concatenate multiple parameters to find a hash. Cryptographic functions are used frequently in smart contracts to generate a hash from a function signature and to obfuscate and store data.</p>
<h3>Address Global Variables</h3>
<p>Every address in Ethereum (whether it is externally owned or a contract address) has five global functions and three global properties:</p>
<ul>
  <li><code>balance</code>: Retrieves the current ether balance held by an address</li>
  <li><code>code</code>: Provides the bytecode responsible for contract creation</li>
  <li><code>codehash</code>: Provides the hash of the bytecode responsible for contract creation</li>
  <li><code>transfer(uint256 amount)</code>: Sends the specified amount of wei to an address</li>
  <li><code>send(uint256 amount) returns (bool)</code>: Sends the specified amount of wei</li>
</ul>

<h3>Contract Global Variables</h3>
<p>Every contract in Solidity has three global functions, including the `this` keyword that represents the current contract, the `selfdestruct` function that destroys the current contract and sends its available funds to a specified address, and the `suicide` function (deprecated since Solidity 0.5.0) that is an alias of the selfdestruct function.</p>
<h4>Remix Test</h4>
<p>Copy the smart contract and run it in the browser Remix environment <a href="https://remix.ethereum.org/">https://remix.ethereum.org/</a>.</p>
<h4>Setup Local HardHat Environment With Typescript</h4>
<p>After setting up the Hardhat environment, copy the smart contract, test, and deploy script, then run the following commands:</p>
<ol>
  <li>Compile the smart contract</li>
  <pre><code>npx hardhat compile</code></pre>
  <li>Run tests in the tests directory using the following command:</li>
  <pre><code>npx hardhat test</code></pre>
  <li>Deploy the contract using the `deploy.ts` script:</li>
  <pre><code>npx hardhat run scripts/deploy.ts</code></pre>
</ol>
<h4>Learning Resources</h4>
<ul>
  <li><a href="https://docs.soliditylang.org/en/v0.8.19/units-and-global-variables.html">Solidity Documentation - Global Variables and Functions</a></li>
  <li>Solidity Essentials Book CH#4</li>
</ul>
