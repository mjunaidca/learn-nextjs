// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A simple smart contract to demonstrate a basic registry system using addresses and mappings in Solidity
contract Registry {
    // Define a mapping to store the registered users with their address as the key
    mapping(address => bool) private registeredUsers;

    // Function to register a user
    function register() external {
        // Set the registeredUsers mapping value to true for the user's address
        registeredUsers[msg.sender] = true;
    }

    // Function to unregister a user
    function unregister() external {
        // Set the registeredUsers mapping value to false for the user's address
        registeredUsers[msg.sender] = false;
    }

    // Function to check if a user is registered
    function isRegistered(address user) external view returns (bool) {
        // Return the registration status associated with the user's address
        return registeredUsers[user];
    }
}
