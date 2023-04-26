// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

// This is a simple contract that maintains a counter
contract Counter {
    uint256 private _count;

    // Constructor initializes the counter to 0
    constructor() {
        _count = 0;
    }

    // Increment the counter by 1
    function increment() public {
        _count += 1;
    }

    // Get the current value of the counter
    function getCount() public view returns (uint256) {
        return _count;
    }
}
