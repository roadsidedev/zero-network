import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-deploy";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  zksolc: {
  },
  solidity: {
    version: "0.8.17",
  },
  defaultNetwork: "zeroTestnet",
  networks: {
    zeroTestnet: {
      url: "https://rpc.zerion.io/v1/zero-sepolia",
      ethNetwork: "sepolia",
      zksync: true,
    },
  },
};
export default config;
