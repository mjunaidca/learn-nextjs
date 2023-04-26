<h1>Using the Hardhat Console</h1>
<p>In this step, you'll learn how to use the Hardhat interactive console to interact with the Ethereum network and your smart contracts.</p>
<h2>Starting the Hardhat Console</h2>
<p>Run the following command to start the Hardhat console:</p>
<pre><code>npx hardhat console</code></pre>
<p>This will open a Node.js console with the Hardhat Runtime Environment initialized and injected into the global scope. You will have access to the 'config' and 'ethers' objects, among other things, in the global scope:</p>
<pre><code>config</code></pre>
<pre><code>ethers</code></pre>
<p>Alternatively, you can require the Hardhat Runtime Environment explicitly:</p>
<pre><code>const hre = require("hardhat")
console.log(hre.ethers.getSigners())
console.log(await hre.ethers.getSigners())
</code></pre>
<h3>Interacting with the Ethereum Network and Smart Contracts</h3>
<p>Once you've started the Hardhat console, you can use it to interact with the Ethereum network and your smart contracts. The console supports any JavaScript code, libraries, or APIs that you've installed.</p>
<p>As the console supports asynchronous operations, you can interact with the Ethereum network and your smart contracts using JavaScript Promises. To simplify this process, the Hardhat console supports top-level await statements, allowing you to use asynchronous operations as if they were synchronous.</p>
<p>The console also offers a handy history feature, which includes history across different sessions. Try it out by pressing the up arrow key.</p>
<h2>Learning Resources</h2>
<ul>
  <li><a href="https://hardhat.org/hardhat-console/">Using the Hardhat Console</a></li>
  <li><a href="https://docs.ethers.io/v5/getting-started/">Getting Started with ethers.js</a></li>
</ul>
<p>Now you are familiar with using the Hardhat console to interact with the Ethereum network and your smart contracts.</p>
