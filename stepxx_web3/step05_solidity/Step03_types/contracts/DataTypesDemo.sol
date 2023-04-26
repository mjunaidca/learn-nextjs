// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

// Contract to demonstrate data types and storage/memory data locations
contract DataTypesDemo {
    // State variables
    uint256 public storedData; // Unsigned integer state variable
    mapping(address => uint256) public balances; // Mapping state variable for address to balance
    address[] public addresses; // Dynamic array to store addresses

    // Event to notify when a deposit is made
    event Deposit(address indexed sender, uint256 amount);

    // Function to deposit ether into the contract and update the balances mapping
    function deposit() public payable {
        // Add the deposited amount to the sender's balance in the balances mapping
        balances[msg.sender] += msg.value;

        // Add the sender's address to the addresses array if it's not already present
        if (balances[msg.sender] == msg.value) {
            addresses.push(msg.sender);
        }

        // Update the storedData state variable with the total contract balance
        storedData = address(this).balance;

        // Emit the Deposit event
        emit Deposit(msg.sender, msg.value);
    }

    // Function to return the number of addresses that have deposited ether
    function getAddressesCount() public view returns (uint256) {
        return addresses.length;
    }

    // Function to demonstrate the usage of memory and storage data locations
    function memoryAndStorageDemo(uint256 _newValue) public {
        // Declare a memory variable and assign it the value of storedData
        uint256 memoryData = storedData;

        // Update the memory variable's value
        memoryData = _newValue;

        // Update the storedData state variable with the new value
        storedData = memoryData;
    }
}
