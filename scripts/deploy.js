const hre = require("hardhat");

async function main() {
  const voter = await hre.ethers.getContractFactory("voter");
  const vote_var = await voter.deploy(["Tany", "Venky", "Andrew"]);

  await vote_var.deployed();

  console.log("Voter Contract deployed to:", vote_var.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
