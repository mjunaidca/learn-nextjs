//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract FundingTest {
    // enum FreshJuiceSize {
    //     SMALL,
    //     MEDIUM,
    //     LARGE
    // }

    enum FundingRounds {
        SEED,
        PRIVATE,
        PUBLIC
    }

    uint abc = 45;

    // FreshJuiceSize juice = FreshJuiceSize.MEDIUM;

    FundingRounds currentRound = FundingRounds.SEED;

    function getCurrentFundingRound() public view returns (FundingRounds) {
        return currentRound;
    }

    function changeRound(uint256 _round) public {
        require(_round >= 0 && _round <= 2, "Invalid Round Information");

        currentRound = FundingRounds(_round);
    }

    // function getJuice() public view returns (FreshJuiceSize) {
    //     return juice;
    // }

    // function updateJuiceSize(FreshJuiceSize _juice) public {
    //     juice = _juice;
    // }

    // function verifyJuiceSize() public view returns (bool) {
    //     return juice == FreshJuiceSize.LARGE;
    // }
}
