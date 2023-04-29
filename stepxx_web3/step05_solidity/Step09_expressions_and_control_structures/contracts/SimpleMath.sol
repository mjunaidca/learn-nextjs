// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleMath {
    uint256 public sum;

    function isEven(uint256 number) public pure returns (bool) {
        return number % 2 == 0;
    }
}
