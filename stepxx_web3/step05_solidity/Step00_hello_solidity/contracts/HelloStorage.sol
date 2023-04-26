// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8;

contract SimpleStorage {
    uint storedData; // declare a uint variable called storedData

    function set(uint x) public { // declare a public function called set that takes a uint argument called x
        storedData = x; // set the storedData variable to the value of x
    }

    function get() public view returns (uint) { // declare a public view function called get that returns a uint
        return storedData; // return the value of the storedData variable
    }
}
