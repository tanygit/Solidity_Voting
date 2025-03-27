// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract voter{
    struct Candidate{
        string name;
        uint count;
    }
    address public admin;

    mapping(address=>bool) hasVoted;
    Candidate[] public candidates;

    constructor(string[] memory _candidateNames){
        admin = msg.sender;
        for(uint i = 0;i<_candidateNames.length;i++){
            candidates.push(Candidate({name:_candidateNames[i],count:0}));
        }
    }

    function vote(uint256 _candidateIndex)public{
        require(!hasVoted[msg.sender],"You have already Voted");
        require(_candidateIndex >= 0 && _candidateIndex < candidates.length);
        candidates[_candidateIndex].count++;
        hasVoted[msg.sender] = true;
    }

    function getWinner() external view returns (string memory){
        uint max = 0;
        uint index;
        for(uint i = 0;i<candidates.length;i++){
            if(candidates[i].count >= max){
                max = candidates[i].count;
                index = i;
            }
        }
        return(candidates[index].name);
    }

}