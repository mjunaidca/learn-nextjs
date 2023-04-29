<h1>Understanding Arrays in Solidity</h1>
<p>Arrays are data structures in Solidity that store multiple values of the same data type. They make it easier to organize, manage, and perform operations on groups of values. Solidity provides various constructs for arrays, depending on your needs.</p>

<h2 id="fixed-arrays">Fixed Arrays</h2>
<p>Fixed arrays have a predetermined size specified during declaration. Examples:</p>
<pre>
int[5] age; // Array of int with 5 fixed storage spaces allocated
byte[4] flags; // Array of byte with 4 fixed storage spaces allocated
</pre>

<h2 id="dynamic-arrays">Dynamic Arrays</h2>
<p>Dynamic arrays have their size determined at runtime. Examples:</p>
<pre>
int[] age; // Array of int with no fixed storage space allocated
byte[] flags; // Array of byte with no fixed storage space allocated
</pre>
<p>Dynamic arrays provide methods for managing them, such as <code>push</code>, <code>pop</code>, and <code>length</code>.</p>

<h2 id="special-arrays">Special Arrays</h2>
<p>Solidity provides two special arrays: <code>bytes</code> and <code>string</code>. The <code>bytes</code> array is a dynamic array that can hold any number of bytes, while the <code>string</code> array is a dynamic data type based on the <code>bytes</code> array with additional constraints.</p>

<h2 id="structure-of-an-array">Structure of an Array</h2>
<p>Structures in Solidity are custom user-defined data structures that group multiple variables of different data types into a single type. They are reference types and treated as complex types in Solidity.</p>
<pre>
struct MyStruct {
    string name;
    uint myAge;
    bool isMarried;
    uint[] bankAccountsNumbers;
}
</pre>
<p>You can use structures as state variables or local structures within functions.</p>
<h2>Usage and Manipulation of Arrays in Solidity</h2>
<h3>Accessing Array Elements</h3>
<ul>
  <li>Use indexing to access elements within both fixed and dynamic arrays.</li>
  <li>Indexes are zero-based.</li>
</ul>
<h3>Adding Elements</h3>
<ul>
  <li>Add elements to dynamic arrays using the <code>push</code> method.</li>
  <li>The method accepts an element, which is added to the end of the array.</li>
</ul>
<h3>Removing Elements</h3>
<ul>
  <li>Remove elements from dynamic arrays using the <code>pop</code> method.</li>
  <li>The method removes the last item from the array and adjusts its length.</li>
</ul>
<h2 id="manipulating-strings">Manipulating Strings</h2>
<p>String manipulation in Solidity can be challenging due to the lack of built-in utility functions. To compare strings for equality, you can convert them to their equivalent hashes using the <code>keccak256</code> function and then compare the hashes:</p>
<pre>
keccak256("ritesh modi") == keccak256("ritesh modi")
</pre>

<h2 id="array-properties">Array Properties</h2>
<p>Arrays in Solidity have various properties that allow you to interact with them. Due to the multiple types of arrays, not every type supports all properties. The properties include:</p>
<ul>
  <li><code>index</code>: Supported by all types of arrays (except for the <code>string</code> type) for reading individual array elements. Writing to an individual array element is supported for dynamic arrays, fixed arrays, and the <code>bytes</code> type only.</li>
  <li><code>push</code>: Supported by dynamic arrays only.</li>
  <li><code>length</code>: Supported by all arrays for reading, except for the <code>string</code> type. Only dynamic arrays and <code>bytes</code> support modifying the length property.</li>
</ul>



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
