// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

// Contract definition
contract SimpleBank {
    // State variables
    address public owner; // The owner of the bank
    mapping(address => uint256) private balances; // Balances of each account

    // Event declarations
    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount);

    // Modifier definitions
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action.");
        _;
    }

    // Constructor function
    constructor() {
        owner = msg.sender; // Set the owner to the deployer of the contract
    }

    // Function definitions
    function deposit() public payable {
        balances[msg.sender] += msg.value; // Update the account balance
        emit Deposit(msg.sender, msg.value); // Emit the Deposit event
    }

    function withdraw(uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance.");
        balances[msg.sender] -= amount; // Update the account balance
        payable(msg.sender).transfer(amount); // Transfer the funds
        emit Withdrawal(msg.sender, amount); // Emit the Withdrawal event
    }

    function checkBalance(address account) public view returns (uint256) {
        return balances[account]; // Return the balance of the given account
    }

    function withdrawAllFunds() public onlyOwner {
        uint256 amount = balances[owner];
        balances[owner] = 0; // Update the owner's balance
        payable(owner).transfer(amount); // Transfer all funds to the owner
    }
}
