pragma solidity ^0.8.0;

contract MessageVerifier {
    function verifyMessage(
        bytes32 message,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public pure returns (bool) {
        // The address that should have signed the message
        address expectedSigner = 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;

        // Calculate the prefixed hash
        bytes32 prefixedHash = keccak256(
            abi.encodePacked("\x19Ethereum Signed Message:\n32", message)
        );

        // Recover the signer's address
        address recoveredSigner = ecrecover(prefixedHash, v, r, s);

        // Compare the recovered signer's address with the expected signer's address
        return recoveredSigner == expectedSigner;
    }
}
