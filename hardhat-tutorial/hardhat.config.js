require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");

const INFURA_API_KEY = vars.get("INFURA_API_KEY");

const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

console.log("RPC:", process.env.SEPOLIA_URL);
console.log("PK:", process.env.PRIVATE_KEY?.slice(0, 6));

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
   networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    },
  },
};
