// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CryptoVariables {
    // Function to demonstrate the use of global variables
    function getGlobalVars() external view returns (address, uint, uint) {
        address coinbase = block.coinbase;
        uint blockNumber = block.number;
        uint timestamp = block.timestamp;

        return (coinbase, blockNumber, timestamp);
    }

    // Function to demonstrate the use of msg-related variables
    function getMessageVars() external payable returns (bytes memory, address) {
        bytes memory data = msg.data;
        address sender = msg.sender;

        return (data, sender);
    }

    // Function to demonstrate the use of cryptographic functions
    function getHashes(bytes32 input) external pure returns (bytes32, bytes32) {
        bytes32 sha256Hash = sha256(abi.encodePacked(input));
        bytes32 keccak256Hash = keccak256(abi.encodePacked(input));

        return (sha256Hash, keccak256Hash);
    }

    // Function to demonstrate the use of address-related functions and properties
    function getAddressInfo(
        address addr
    ) external view returns (uint256, bytes32) {
        uint256 balance = addr.balance;
        bytes32 codeHash = addr.codehash;

        return (balance, codeHash);
    }
}
