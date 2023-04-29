<h2>Recovering Addresses Using ecrecover in Solidity</h2>
<p>Solidity provides a very powerful function known as ecrecover, which is used to derive the address of a sender based on the digital signature. The concept of digital certificates was covered in Chapter 1, Introduction to Blockchain, Ethereum, and Smart Contracts. In summary, digital signatures help in identifying the sender of a message. The message is hashed and encrypted using the private key of the sender, known only to the sender. Anyone decrypting the message using the corresponding public key can be assured that it is originating from the holder of the private key.</p>
<p>There are situations when it is necessary to verify the sender of a message using the signature itself. It is especially useful in scenarios involving self-sovereign identities, decentralized exchanges, and off-chain computations.</p>
<p>Ethereum cryptography is based on the Elliptic Curve Digital Signature Algorithm (ECDSA), and the ecrecover function helps in recovering the address from the signature. The signature comprises three elements, where r is the x coordinate of the ECDSA curve and s is derived from r. The recovery identifier is V, and its value ranges from 27 to 30.</p>
<h3>Global Variables and Functions in Solidity</h3>
<p>Global variables and functions provide important information and features to contracts in Solidity. This includes information about the current transaction, block, and message, as well as cryptographic functions and address-related functions and properties.</p>
<h3>ecrecover Function</h3>
<p>The ecrecover function is available in Solidity assembly only. Without assembly, this function cannot be used. It accepts four parameters – Ecrecover (messageHash, v, r, and s). Here, messageHash is the hashed message sent to a contract; s is the first 32 bytes of data in the digital signature; r is the data in the digital signature, starting from position 66 and ending at 130, with a length of 32 bytes; and v is the last 1 byte in the digital signature.</p>
<p>Before getting into contract implementation using ecrecover, we should know the process of generating a message hash and digital signature using an Ethereum account.
<h3>Generating a Message Hash and Digital Signature in Ethereum</h3>
<p>When a message is sent from one Ethereum account to another, the sender must sign the message with their private key to ensure the authenticity of the message. The process of signing a message involves three steps:</p>
<ol>
  <li>The message is hashed using a hashing algorithm like SHA3 to generate a message hash.</li>
  <li>The message hash is then signed using the sender's private key to generate a digital signature.</li>
  <li>The message, along with the digital signature, is sent to the recipient.</li>
</ol>
<p>The recipient can then verify the authenticity of the message by performing the reverse process:</p>
<ol>
  <li>The message is hashed using the same hashing algorithm to generate the message hash.</li>
  <li>The digital signature is then decrypted using the sender's public key to obtain the original message hash.</li>
  <li>The two message hashes are compared to ensure that they are identical, which indicates that the message has not been tampered with.</li>
</ol>
<h3>Example Contract Implementation of ecrecover</h3>
<p>Here's an example Solidity contract that uses the ecrecover function to recover the address of the sender from a message hash and digital signature:</p>
<code>
pragma solidity ^0.8.0;

contract SignatureVerifier {
function recoverSigner(bytes32 message, uint8 v, bytes32 r, bytes32 s) public pure returns (address) {
bytes32 prefixedHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", message));
return ecrecover(prefixedHash, v, r, s);
}
}
</code>

<p>In this contract, the recoverSigner function takes four parameters: the message hash, the recovery identifier (v), and the two parts of the signature (r and s). It first prefixes the message hash with the string "\x19Ethereum Signed Message:\n32" to create a "prefixed hash," which is necessary for ecrecover to work properly. The function then calls ecrecover with the prefixed hash, v, r, and s to recover the address of the sender.</p>
<h3>Remix Test</h3>
<p>Copy the smart contract and run it in the browser Remix environment <a href="https://remix.ethereum.org/">https://remix.ethereum.org/</a>.</p>
<h3>Setup Local HardHat Environment With Typescript</h3>
<p>After setting up the Hardhat environment, copy the smart contract, test, and deploy script, then run the following commands:</p>
<ol>
  <li>Compile the smart contract</li>
  <pre><code>npx hardhat compile</code></pre>
  <li>Run tests in the tests directory using the following command:</li>
  <pre><code>npx hardhat test</code></pre>
  <li>Deploy the contract using the `deploy.ts` script:</li>
  <pre><code>npx hardhat run scripts/deploy.ts</code></pre>
</ol>
<h3>Learning Resources</h3>
<ul>
  <li><a href="https://docs.soliditylang.org/en/v0.8.4/assembly.html#id2">Solidity Documentation - ecrecover function</a></li>
  <li><a href="https://ethereum.stackexchange.com/questions/15364/how-can-the-ecrecover-function-in-ethereum-recover-the-public-key-with-only-th">Stack Exchange - How can the ecrecover function in
