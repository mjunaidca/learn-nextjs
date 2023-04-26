<h2>Exploring Data Types in Solidity</h2>
<p>Solidity has two main categories of data types: value types and reference types.</p>
<h3>Value Types</h3>
<p>Value types hold data directly within their own memory and do not exceed 32 bytes in size. They include:</p>
<ul>
  <li><code>bool</code>: Boolean values, either true or false.</li>
  <li><code>uint</code>: Unsigned integers, holding non-negative values.</li>
  <li><code>int</code>: Signed integers, holding both positive and negative values.</li>
  <li><code>address</code>: Represents an account's address in the Ethereum environment.</li>
  <li><code>byte</code>: Fixed-sized byte arrays (byte1 to bytes32).</li>
  <li><code>enum</code>: Enumerations with predefined constant values.</li>
</ul>
<h3>Reference Types</h3>
<p>Reference types store an address pointing to the memory location containing the actual data, and can exceed 32 bytes in size. They include:</p>
<ul>
  <li><strong>Arrays:</strong> Fixed-size and dynamic arrays, including string and byte arrays. Fixed-size arrays have a predetermined length, while dynamic arrays can be resized during runtime.</li>
  <li><strong>Structs:</strong> Custom, user-defined structures.</li>
  <li><strong>Mappings:</strong> Key-value pairs, similar to hash tables or dictionaries in other languages. Mappings store data in an unordered format, allowing for efficient lookups by key. However, keys must be unique and cannot be enumerated.</li>
</ul>
<h2>Storage and Memory Data Locations</h2>
<p>Each variable within a contract has a data location, with the Ethereum Virtual Machine (EVM) providing four storage structures:</p>
<ul>
  <li><strong>Storage:</strong> Permanent, global memory accessible by all functions in a contract.</li>
  <li><strong>Memory:</strong> Temporary, local memory accessible by each function in a contract, cleared after function execution.</li>
  <li><strong>Calldata:</strong> Read-only memory storing incoming function execution data, including arguments.</li>
  <li><strong>Stack:</strong> EVM's working set memory, holding variables and intermediate values for processing Ethereum instructions. Limited to 1,024 levels; exceeding this limit raises an exception.</li>
</ul>
<p>The data location of a variable depends on:</p>
<ul>
  <li>The variable's declaration location</li>
  <li>The variable's data type</li>
</ul>
<p>These factors determine a variable's data location according to specific rules.</p>

<h4>Remix Test.</h4>
<p> Copy the smart contract and run it in the browser Remix environment <a href="https://remix.ethereum.org/">https://remix.ethereum.org/</a> </p>

<h4>Setup Local HardHat Environment With Typescript.</h4>
<p>After setting up hardhat environemnt copy the smart contract, test and deploy script then run the following commands</p>
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
  <li><a href="#">Solidity Essentials CH 3</a></li>
  <li><a href="https://docs.soliditylang.org/en/v0.8.19/types.html#conversions-between-elementary-types">Solidity Documentation - Types</a></li>
</ul>
