<h2>Recovering Addresses Using ecrecover in Solidity</h2>
<p>Ecrecover derives the address of a sender based on the digital signature. Digital signatures help in identifying the sender of a message. The message is hashed and encrypted using the private key of the sender, known only to the sender. Anyone decrypting the message using the corresponding public key can be assured that it is originating from the holder of the private key.</p>
<h3>ecrecover Function</h3>
<p>The ecrecover function is available in Solidity assembly only. Without assembly, this function cannot be used. It accepts four parameters – Ecrecover (messageHash, v, r, and s). Here, messageHash is the hashed message sent to a contract; s is the first 32 bytes of data in the digital signature; r is the data in the digital signature, starting from position 66 and ending at 130, with a length of 32 bytes; and v is the last 1 byte in the digital signature.</p>
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
