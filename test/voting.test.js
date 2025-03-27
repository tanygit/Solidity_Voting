const { expect } = require("chai");
const { ethers } = require("hardhat");

console.log("Test file is being executed!");

describe("Voter Contract", function () {
  console.log("Test file is being executed!");

  let voter_var;

  before(async function () {
    console.log("Test file is being executed!");

    Voter = await ethers.getContractFactory("voter");
    voter_var = await Voter.deploy(["Tany", "Venky", "Andrew"]);
    await voter_var.deployed();

    console.log("Voter Contract deployed to:", voter_var.address);
  });

  it("Should be able to vote", async function () {
    const value = 0;
    const tx = await voter_var.vote(value);
    await tx.wait();
  });

  it("Should be able to vote only once", async function () {
    const value = 2;
    const tx = await voter_var.vote(value);
    await tx.wait();
  });

  it("Returns the winner", async function () {
    const winner = await voter_var.getWinner();
    console.log(winner);
  });
});
