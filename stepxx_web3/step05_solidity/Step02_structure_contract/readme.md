<h2> Structure Of Smart Contract </h2>
A contract consists of the following multiple constructs. Understanding these different facets of variables and functions is essential in order to create robust and efficient smart contracts in Solidity.

<ul>
  <li>State variables:</li>
  <li>Structure definitions</li>
  <li>Modifier definitions</li>
  <li>Event declarations</li>
  <li>Enumeration definitions</li>
  <li>Function definitions</li>
</ul>

Each facet has its specific purpose and use case, which can affect how the smart contract behaves, its security, and its gas consumption.
<pre>
<code>// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 &lt;0.9.0;

// Contract definition
contract generalStructure {
  // State variables
  int public stateIntVariable; // variable of integer type
  string stateStringVariable; // variable of string type
  address personIdentifier; // variable of address type
  MyStruct human; // variable of structure type
  bool constant hasIncome = true; // variable of constant nature

  // Structure definition
  struct MyStruct {
    string name; // variable for type string
    uint myAge; // variable of unsigned integer type
    bool isMarried; // variable of boolean type
    uint[] bankAccountsNumbers; // variable - dynamic array of unsigned integer
  }

  // Modifier declaration
  modifier onlyBy() {
    if (msg.sender == personIdentifier) {
      _;
    }
  }

  // Event declaration
  event ageRead(address, int);

  // Enumeration declaration
  enum gender { male, female }

  // Function definition
  function getAge(address _personIdentifier) onlyBy() payable external returns (uint) {
    human = MyStruct("Ritesh", 10, true, new uint[](3)); // using struct MyStruct
    gender _gender = gender.male; // using enum
    emit ageRead(personIdentifier, stateIntVariable); // raising event
  }
}
</code>
</pre>

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

<h3> 1. State variables:  </h3>

Not declared in a function and get updated by functions on execution. The allocated memory for a state variable is statically assigned, it cannot change permanently and they stored in a blockchain/Ethereum global state.

<code>contract SimpleStorage {
uint storedData; // State variable
// ...
}</code>

<ul>
<li> <b> internal: </b> They are defualt type and used within current contract functions and contract that inherits from it.  <code> int internal StateVariable ; </code> </li>
<li> <b> private: </b> similar to internal with additional constraints. They cannot be used even within derived contracts.  <code> int private privateStateVariable ; </code> </li>
<li> <b> public: </b>  enables external access to state variables. Compiler generates a getter function for each public state variable.  <code> int public stateIntVariable ; </code></li>
<li> <b>constant: </b> makes state variables immutable. The value must be assigned to the variable at declaration time. In fact, the compiler will replace references of this variable everywhere in code with the assigned value.   <code> bool constant hasIncome = true; </code> </li>
</ul>

<h3> 2. Structure:  </h3>

Structures or structs help implement custom user-defined data types. A structure is a composite data type, consisting of multiple variables of different data types. They are very
similar to contracts; however, they do not contain any logic within them. They consist of only variables

<pre><code>
        struct MyStruct {

        string name; //variable for type string

        uint myAge; // variable of unsigned integer type

        bool isMarried; // variable of boolean type

        uint[] bankAccountsNumbers; // variable - dynamic array of unsigned integer
}
</code></pre>

<h3> 3. MODIFIERS:  </h3>
refers to a construct that changes the behavior of code under execution. A modifier is defined using the modifier keyword followed by the modifier identifier, any parameters it should accept, and then code within the {} brackets. An underscore, _, in a modifier is a placeholder for executing the target function. You can think of this as the underscore being replaced by the target function inline. payable is an out-of-the-box modifier provided by Solidity,

<h3> 4. EVENTS:  </h3>

Events are fired from contracts so that anybody interested in them can trap/catch them and execute code in response. Events in Solidity are used primarily for informing the calling application about the current state of the contract by means of the logging facility of the EVM.

<h3> 5. ENUMERATION:  </h3>

The enum keyword is used to declare enumerations. Enumerations help in declaring a custom user-defined data type in Solidity. enum consists of an enumeration list – a predetermined set of named constants.

<pre><code>
enum gender {male, female}
</code></pre>

A variable of enumeration can be declared and assigned a value, as shown in the following code:

<pre><code>gender _gender = gender.male ;</code></pre>

<h3> 6. Function:  </h3>
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

<h3>Learning Resources </h3>

https://docs.soliditylang.org/en/v0.8.19/structure-of-a-contract.html

Read CH # 3 Pg: 68-76
