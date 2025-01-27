<h1>Step 6: Verifying Contracts</h1>
<p>In this step, you'll learn how to deploy your smart contracts on a live network and verify their source code. Verifying a contract makes its source code public, along with the compiler settings used, which allows anyone to compile it and compare the generated bytecode with the one that is deployed on-chain. </p>
<h2>1. Get API Key from Etherscan</h2>
<p>First, you need to get an API key from <a href='https://etherscan.io/login'>Etherscan</a>. On their website, sign in and open the "API Keys" tab to get the API Key. Now, open your Hardhat config file and add the API key:</p>
<pre><code>export default {
  // ...rest of the config...
  etherscan: {
    apiKey: "YOUR API KEY",
  },
};
</code></pre>
<h2>2. Deploy and Verify a Contract in the Sepolia Testnet</h2>
<p>Next, you'll deploy and verify your contract on the <a href="https://ethereum.org/en/developers/docs/networks/#sepolia">Sepolia testnet</a>. To do this, add the Sepolia network in your Hardhat config file. Use Alchemy JSON-RPC URLs to connect to the network:</p>
<pre><code>
    
    // Go to https://www.alchemy.com/, sign up, create a new API key
    // replace "KEY" with it
    const ALCHEMY_API_KEY = "KEY";

    // Replace this private key with your Sepolia account private key
    // To export your private key from Metamask, open Metamask and go to Account Details > Export Private Key
    // Beware: NEVER put real Ether into testing accounts
    const SEPOLIA_PRIVATE_KEY = "YOUR SEPOLIA PRIVATE KEY";

    module.exports = {
    // ...rest of your config...
    networks: {
        sepolia: {
        url: `https://sepolia.alchemy.io/v3/${ALCHEMY_API_KEY}`,
        accounts: [SEPOLIA_PRIVATE_KEY],
        },
    },
    };

</code></pre>

<p>Send some Sepolia test ether to the address that will be deploying the contract. You can obtain testnet ether from a faucet, such as the Alchemy Sepolia Faucet.</p>
<p>To ensure your contract's source code is unique, add a comment with a unique identifier, like your GitHub username, to your contract. Remember that this information will be publicly available on Etherscan:</p>
<pre><code>// Author: @janedoe
contract Lock {
</code></pre>
<p>Now, run the deployment script using the Sepolia network:</p>
<pre><code>npx hardhat run scripts/deploy.ts --network sepolia
</code></pre>
You will get a response like:

<pre><code>Compiled 1 Solidity file successfully
Lock with 0.001ETH and unlock timestamp 1682466357 deployed to 0x258Cc863b836BfA072e7e9BCADE97842786876a9
</code></pre>
<p>Note the contract address and unlock time, and run the verify task with this information:</p>
<pre><code>npx hardhat verify --network sepolia &lt;address&gt; &lt;unlock time&gt;
</code></pre>
<pre><code>npx hardhat verify --network sepolia 0x258Cc863b836BfA072e7e9BCADE97842786876a9 1682466357
</code></pre>
<p>If you encounter an error saying that the address does not have bytecode, it likely means that Etherscan has not indexed your contract yet. Wait for a minute or two, and try running the verification command again.</p>
<p>For more help and information about the error:</p>
<ul>
    <li><a href="https://ethereum.stackexchange.com/questions/130157/contract-verification-problem-on-matic-using-hardhat-npx-hardhat-verify-net">Ethereum Stack Exchange</a></li>
  <li><a href="https://stackoverflow.com/questions/70393986/error-in-plugin-nomiclabs-hardhat-etherscan-the-contract-verification-failed">Stack Overflow</a></li>
  <li><a href="https://github.com/NomicFoundation/hardhat/issues/1349">GitHub Issue</a></li>
 </li>
</ul>

<h3> Learning Resources</h3>

<ul>

 <li><a href="https://hardhat.org/hardhat-runner/docs/guides/verifying">Hardhat Verifying Contracts</a></li>
  <li><a href="https://docs.alchemy.com/docs/submitting-your-smart-contract-to-etherscan">Alchemy Learning Resources</a>
  <a href='https://www.youtube.com/watch?v=NcZMDsjJ-OA'>BootCamp 2021 Class 2</a> Watch Till 32:00

</ul>
