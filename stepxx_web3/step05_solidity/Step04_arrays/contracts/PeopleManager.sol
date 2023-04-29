// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PeopleManager {
    // Define a custom struct called Person with name and age properties
    struct Person {
        string name;
        uint256 age;
    }

    // Declare a public dynamic array called people that stores Person structs
    Person[] people;

    // Declare a public fixed-size array called ages that stores 10 unsigned integers
    uint256[10] ages;

    // Add a new Person to the people array with the given name and age
    function addPerson(string memory _name, uint256 _age) public {
        require(_age > 0, "Age must be greater than 0");
        people.push(Person(_name, _age));
    }

    // Get the number of people in the people array
    function getPeopleCount() public view returns (uint256) {
        return people.length;
    }

    // Get the name and age of the Person at the specified index in the people array
    function getPerson(uint256 _index) public view returns (string memory, uint256) {
        require(_index < people.length, "Index out of range");
        Person memory person = people[_index];
        return (person.name, person.age);
    }

}
