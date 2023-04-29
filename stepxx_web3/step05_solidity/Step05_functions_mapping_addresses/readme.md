<h1>Functions, Addresses and Mappings</h1>
Functions, Addresses and mappings are commonly used in smart contract development.

<h4>Remix Test.</h4>
<p> Copy the smart contract and run it in the browser Remix environment <a href="https://remix.ethereum.org/">https://remix.ethereum.org/</a> </p>

<h4>Setup Local HardHat Environment With Typescript.</h4>
<p>After setting up hardhat environemnt copy the smart contract, test and deploy script then run the following commands</p>
<ol>
 <li>Compile the smart contract</li>
  <pre><code>npx hardhat compile</code></pre>
  <li>Run scripts to deploy the contracts:</li>
  <pre><code>npx hardhat node</code></pre>
     <pre><code>npx hardhat run scripts/FunctionsT1.ts</code></pre>
</ol>

<h2> Function:  </h2>
Functions are the executable units of code defined inside or out of contract.

<code>function getAge (address \_personIdentifier) onlyBy()
payable external returns (uint) {
}</code>

Functions have visibility qualifiers

<ul>
<li> <b> public: </b> makes functions accessible directly from outside. They become part of the contract's interface and can be called both internally and externally.</li>
<li> <b> internal: </b> These functions cannot be accessed from outside. They are not part of the contract's interface. </li>
<li> <b> private: </b>   functions can only be used in contracts declaring them. They cannot even be used within derived contracts and now are part of contract's interface.</li>
<li> <b>external: </b> makes functions accessible directly externally, but not internally. These functions become part of the contract's interface.</li>
</ul>

Addition qualifiers include:

<ul>
<li> <b> constant: </b> functions that can read and return current state variable values. They don't have the ability to modify the state of a blockchain.  </li>
<li> <b> view: </b> These functions are aliases of constant functions. </li>
<li> <b> pure: </b>  They further constrain the ability of functions. These can neither read nor write – in short, they cannot access state variables. </li>
<li> <b>payable: </b> Functions declared with the payable keyword can accept Ether from the caller. The call will fail if Ether is not provided by the sender.</li>
</ul>

<h2>Addresses</h2>
<p>An address is a 20 bytes-long data type that is specifically designed to hold account addresses in Ethereum, which are 160 bits or 20 bytes in size. It can hold contract addresses as well as externally owned account addresses. The address is a value type, and it creates a new copy while being assigned to another variable.</p>
<h3>Address Type</h3>
Can hold Ethereum addresses as part of a contract. It cannot be used to send or receive Ether!</p>
<h3>Payable Address Type</h3>
Similar to the <code>address</code> type and can receive as well as send Ether to other accounts. It has additional methods, <code>send()</code> and <code>transfer()</code>. The payable address is a superset of the address type, and can implicitly be converted into a simple address, but the reverse needs an explicit conversion.</p>
<h3>Invoking Contract Functions</h3>
<p>The <code>address</code> type has a balance property that returns the amount of Ether available with the account and has a few functions for invoking functions in other contracts. It provides these functions for invoking the contract function:</p>
<ul>
  <li><code>call</code></li>
  <li><code>delegatecall</code></li>
  <li><code>callcode</code></li>
</ul>
<p>The <code>payable</code> address provides the following two functions to transfer Ether:</p>
<ul>
  <li><code>transfer</code></li>
  <li><code>send</code></li>
</ul>
<p>The <code>transfer()</code> function is a better alternative for transferring Ether to an account than the <code>send()</code> function. The <code>send()</code> function returns a Boolean value, depending on the successful execution of the Ether transfer, while the <code>transfer()</code> function raises an exception and returns the Ether to the caller.</p>
<h2>Mappings in Solidity</h2>
<p>Mappings help in storing key-value pairs and enable the retrieval of values based on a supplied key. They are declared using the <code>mapping</code> keyword, followed by data types for both keys and values separated by the <code>=&gt;</code> notation. Mappings have identifiers, as with any other data type, and they can be used to access the mapping.</p>
<p>For example:</p>
<pre><code>mapping ( uint =&gt; address ) Names ;</code></pre>
<p>In the preceding code, the <code>uint</code> data type is used for storing the keys, and the <code>address</code> data type is used

<h2>Learning Resources</h2>
<ul>
  <li><a href="#">Solidity Essentials CH 3</a></li>
  <li><a href="https://docs.soliditylang.org/en/v0.8.19/types.html#conversions-between-elementary-types">Solidity Documentation - Types</a></li>
  <li><a href="https://www.youtube.com/watch?v=t-8fHUpbjb8">Creating contracts using soliditery . DeFI and blockchain system design</a></li>
    <li><a href="https://www.youtube.com/watch?v=scga3Cy-NFQ">Saturday 5 feb, API econony, Defi</a></li>
</ul>
