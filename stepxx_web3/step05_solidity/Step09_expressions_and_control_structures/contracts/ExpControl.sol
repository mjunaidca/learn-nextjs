pragma solidity ^0.8.0;

contract ExpControl {
    struct Person {
        string name;
        uint256 age;
    }

    mapping(address => Person) public persons;

    event PersonAdded(address indexed _address, string _name, uint256 _age);

    function addPerson(string calldata _name, uint256 _age) external {
        require(bytes(_name).length > 0, "Name must not be empty");
        require(_age >= 18, "Age must be at least 18");

        persons[msg.sender] = Person(_name, _age);

        emit PersonAdded(msg.sender, _name, _age);
    }

    function isAdult(address _address) external view returns (bool) {
        Person memory person = persons[_address];
        return person.age >= 18;
    }

    function getAgeCategory(
        address _address
    ) external view returns (string memory) {
        Person memory person = persons[_address];
        if (person.age >= 18 && person.age < 35) {
            return "Young Adult";
        } else if (person.age >= 35 && person.age < 60) {
            return "Middle Aged";
        } else if (person.age >= 60) {
            return "Senior";
        } else {
            return "Not an adult";
        }
    }
}
