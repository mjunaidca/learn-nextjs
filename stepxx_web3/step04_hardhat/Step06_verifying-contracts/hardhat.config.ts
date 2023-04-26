import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = "KEY";


// Add Meta Mask Private Key
const SEPOLIA_PRIVATE_KEY = "YOUR SEPOLIA PRIVATE KEY";


const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "sepolia",

  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/6cKvK6Y4W2kR9dWpYdr7U1e9UM7OGBOw`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: "YOUR API KEY",
  },


};

export default config;
