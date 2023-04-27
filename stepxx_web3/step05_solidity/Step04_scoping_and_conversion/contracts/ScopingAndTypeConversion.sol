// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Define a new contract
contract VariableScopingAndTypeConversion {
    
    // Declare a contract-level state variable of type uint with public visibility modifier
    uint public myPublicNumber;
    
    // Declare a contract-level state variable of type uint with internal visibility modifier
    uint internal myInternalNumber;
    
    // Declare a contract-level state variable of type uint with private visibility modifier
    uint private myPrivateNumber;
    
    // Constructor function to set initial values of the state variables
    constructor() {
        myPublicNumber = 10;
        myInternalNumber = 20;
        myPrivateNumber = 30;
    }
    
    // Function to read the value of the public state variable
    function getPublicNumber() public view returns (uint) {
        return myPublicNumber;
    }
    
    // Function to read the value of the internal state variable
    function getInternalNumber() public view returns (uint) {
        return myInternalNumber;
    }
    
    // Function to read the value of the private state variable
    function getPrivateNumber() public view returns (uint) {
        return myPrivateNumber;
    }
    
    // Function to demonstrate implicit type conversion from uint8 to uint16
    function implicitConversion() public pure returns (uint16) {
        uint8 x = 255;
        uint16 y = x;   // This is an implicit conversion from uint8 to uint16
        return y;
    }
    
    // Function to demonstrate explicit type conversion from uint16 to uint8
    function explicitConversion() public pure returns (uint8) {
        uint16 x = 65535;
        uint8 y = uint8(x);   // This is an explicit conversion from uint16 to uint8
        return y;
    }
}
