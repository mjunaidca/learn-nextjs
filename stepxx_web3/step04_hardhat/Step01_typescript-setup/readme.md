<h1>SetUp HardHat Development Environment With TypeScript</h1>
<p>HardHat is a development environment for Solidity, which allows you to run and deploy smart contracts.</p> 
<p>HardHat Runner is the primary component used when working with HardHat, which provides a flexible and extensible task runner for managing and automating tasks related to developing smart contracts and dApps.</p>
<h2>Project Structure</h2>
<p>These are the default paths for a Hardhat project:</p>
<ul>
  <li><code>contracts/</code> is where the source files for your contracts should be.</li>
  <li><code>test/</code> is where your tests should go.</li>
  <li><code>scripts/</code> is where simple automation scripts go.</li>
</ul>
<h3>Testing</h3>
<p>For testing your contracts, the sample project comes with some useful functionality like:</p>
<ol>
  <li>Built-in Hardhat Network as the development network to test on, along with the Hardhat Network Helpers library to manipulate this network.</li>
  <li>Mocha as the test runner, Chai as the assertion library, and the Hardhat Chai Matchers to extend Chai with contracts-related functionality.</li>
  <li>The ethers.js library to interact with the network and with contracts.</li>
</ol>
<h2>Setup</h2>
<p>Follow these commands to set up and run your first smart contract with TypeScript:</p>
<ol>
  <li>Create an empty folder:</li>
  <pre><code>mkdir typescript-setup</code></pre>
  <li>Create an npm project:</li>
  <pre><code>npm init -y</code></pre>
  <li>Install HardHat as a devdependency:</li>
  <pre><code>npm install --save-dev hardhat</code></pre>
  <li>Open the folder in Visual Studio Code and review the `package.json` file to ensure that HardHat devdependencies are installed.</li>
  <li>Create a sample TypeScript project by running the following command and selecting "Create a TypeScript project" option:</li>
  <pre><code>npx hardhat</code></pre>
  <li>Most of Hardhat's functionality comes from plugins. To use a plugin, the first step is always to install it using npm or yarn, followed by requiring it in your config file. Install the following dependencies before running the sample project to use the default plugin that comes with sample project setup. Iy has everything you need for developing smart contracts:</li>
  <pre><code> npm install --save-dev "hardhat@^2.14.0" "@nomicfoundation/hardhat-toolbox@^2.0.0"</code></pre>
  Note: after prevoius npx hardhat command check the installation command in your terminal. Copy and use it instead of the above command.
  <li>Open the code in Visual Studio Code and run the following command to compile the smart contract present in the contracts directory:</li>
  <pre><code>npx hardhat compile</code></pre>
  <li>Run pre-written tests in the tests directory using the following command:</li>
  <pre><code>npx hardhat test</code></pre>
  <li>Deploy the contract using the `deploy.ts` script:</li>
  <pre><code>npx hardhat run scripts/deploy.ts</code></pre>
</ol>
Note:  If you get HH114 or HH113 or Unexpected error then ensure that you didn;t missed any of the above commands.

<p>Congratulations! You have created a project and compiled, tested, and deployed a smart contract using HardHat.</p>
<h2>Resources</h2>
<p>For more information, visit the <a href="https://hardhat.org/hardhat-runner/docs/getting-started#overview">HardHat Runner - Getting Started Overview</a>.</p>
