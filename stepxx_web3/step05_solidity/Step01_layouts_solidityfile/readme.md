<h1> Layout Of Solidity File  </h1>

The primary purpose of Solidity is to write smart contracts for Ethereum. Smart contracts are the basic unit of deployment and execution for EVMs.

Solidity code is written in Solidity files that have the .sol extension. They are human-readable text files that can be opened as text files in any editor, including Notepad. A Solidity file is composed of the following four high-level constructs:

<ol>
  <li>Pragma</li>
  <li>Comments</li>
  <li> Importing Solidity code </li>
  <li> Contracts </li>
 
</ol>

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

<h3> 1. Pragma </h3>
Pragma is generally the first line of code within any Solidity file that specifies the target compiler version for compiling the current Solidity file. As a good practice, it is better to compile Solidity code with an exact compiler version rather than using ^.

<h3> 2. Comments </h3>
Single-line comments are denoted by a double forward slash (//), while multiline comments are denoted using /* and */.

<h3> 3. Importing Solidity code </h3>
The import keyword helps import other Solidity files, and we can access its code within the current Solidity file. The syntax for using import is as follows:
   
    import <<filename>> ;
    
<h3> 4. Contracts </h3>

We can define contracts, libraries, and interfaces at a global level. That multiple contracts, libraries, and interfaces can be declared within the same Solidity file and they are case-sensitive in nature:

<pre><code>// SPDX-License-Identifier: GPL-3.0
    pragma solidity >=0.7.0 <0.9.0;
    // This is a single line comment in Solidity
    /* This is a multi-line comment
    In solidity. Use this when multiple consecutive lines
    Should be commented as a whole */
        contract FirstContract {
        }
        contract SecondContract {
        }
        library StringLibrary {
        }
        library MathLibrary {
        }
        interface IBank{
        }
        interface IAccount {
}</code></pre>

<h3>Learning Resources </h3>

https://docs.soliditylang.org/en/v0.8.19/layout-of-source-files.html

Read CH # 3 Pg: 62-27
