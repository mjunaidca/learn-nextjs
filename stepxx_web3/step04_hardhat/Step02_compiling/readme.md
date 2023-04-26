<h1>Compiling Smart Contracts with Hardhat</h1>
<p>After setting up the development environment in Step 01, we will now explore how Hardhat compiles smart contracts.</p>
<p>To compile smart contracts in the Hardhat development environment, use the built-in compile task:</p>
<pre><code>npx hardhat compile</code></pre>
<p>Upon successful compilation, you should see the following output:</p>
<pre><code>Generating typings for: 1 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 6 typings!
Compiled 1 Solidity file successfully</code></pre>
<p>The compiled artifacts are saved in the <code>artifacts/</code> directory by default, or the configured artifacts path. Hardhat will create this directory if it doesn't exist.</p>
<p>Hardhat attempts to minimize recompilation work. If no files have been changed since the last compilation, nothing will be recompiled:</p>
<pre><code>npx hardhat compile</code></pre>
<pre><code>Nothing to compile
No need to generate any newer typings.</code></pre>
<p>If only one file is modified, only that file and others affected by it will be recompiled.</p>
<p>To force a compilation, use the --force argument <pre><code>npx hardhat compile --force </code></pre>, or to clear the cache and delete the artifacts run <pre><code>npx hardhat clean </code></pre> </p>
<h2>What Happens During Compilation</h2>
<p>When you run the command <code>npx hardhat compile</code>, the following occurs:</p>
<ol>
  <li>The Solidity compiler reads the smart contract source files from the <code>contracts/</code> directory.</li>
  <li>The compiler checks the source code for syntax errors and adherence to the Solidity language rules.</li>
  <li>If the source code is valid, the compiler generates the bytecode and ABI for each smart contract.</li>
  <li>The compiler saves the bytecode and ABI as artifacts in the <code>artifacts/</code> directory (or the configured path).</li>
</ol>
<p>Your application can now use these artifacts to interact with the smart contracts on the Ethereum network. The ABI is required to encode and decode data, while the bytecode is needed to deploy the contract.</p>
<h2>Configuring the Compiler</h2>
<p>To customize Solidity compiler options, modify the <code>solidity</code> field in your <code>hardhat.config.js</code>. The simplest way is by setting the compiler version, which we recommend always doing:</p>
<pre><code>
const config: HardhatUserConfig = {
solidity: "0.8.18",
};
</code></pre>

<p>Setting a compiler version avoids unexpected behavior or compiling errors as new releases of Solidity are published.</p>

<h2>What Are Artifacts?</h2>
<p>When you compile a Solidity smart contract, the compiler generates two files per compiled contract (not each .sol file): an artifact and a debug file.An artifact has all the information that is necessary to deploy and interact with the contract.  Hardhat saves these artifacts in the <code>artifacts/</code> directory by default. You can configure the path in the <code>hardhat.config.js</code> file if necessary. They include:</p>
<ul>
  <li>Contract name</li>
  <li>Bytecode</li>
  <li>ABI</li>
  <li>Deployment information (e.g., gas estimates) and more</li>
</ul>
<p>Read About <a href="https://hardhat.org/hardhat-runner/docs/advanced/artifacts">Hardhat Artifacts</a></p>
<h2>Understand Bytecode</h2>
<p>Bytecode is the machine-readable, compiled form of a smart contract. It consists of a sequence of opcodes (low-level instructions) that the Ethereum Virtual Machine (EVM) can execute. When you deploy a smart contract, you send its bytecode to the Ethereum network, where it gets stored on the blockchain. Each node in the network runs the EVM, which executes the bytecode when the smart contract's functions are called.</p>
<p><a href="https://blog.chain.link/what-are-abi-and-bytecode-in-solidity/">What Are ABI and Bytecode in Solidity?</a></p>
<h2>What is ABI?</h2>
<p>ABIs are application binary interfaces represented as JSON. They define the methods and variables that are available in a smart contract and which we can use to interact with that smart contract. The ABI allows your application to encode and decode the data sent to and received from the smart contract on the Ethereum network. When you interact with a smart contract using a library like ethers.js or web3.js, the library uses the ABI to interact with EVM.</p>
<p>Learn more about <a href="https://docs.soliditylang.org/en/v0.8.19/abi-spec.html">ABI</a></p>

<h2>Resources</h2>
<ul>
  <li><a href="https://hardhat.org/hardhat-runner/docs/guides/compile-contracts">Hardhat: Compile Contracts Guide</a></li>
</ul>
