import { ethers } from "hardhat";
import { updateConfig } from "@repo/config-contract";
import { getABI } from "../utils/abi";

async function deploy() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the VBetter token
  const VBetter = await ethers.getContractFactory("VBetter");
  const vBetter = await VBetter.deploy(
    "Vx",              // Token name updated to "Vx"
    "VX",            // Token symbol remains "VBET"
    deployer.address,  // Initial owner
    {
      gasLimit: 5000000, // Adjusted gas limit
    }
  );

  // Await contract deployment
  await vBetter.waitForDeployment();  // Updated method for ethers@6
  console.log("VBetter token deployed to:", await vBetter.getAddress());

  // Deploy ZenVolt contract
  const ZenVolt = await ethers.getContractFactory("ZenVolt");
  const zenVolt = await ZenVolt.deploy(await vBetter.getAddress(), {
    gasLimit: 2000000,  // Adjusted gas limit
  });

  // Await contract deployment
  await zenVolt.waitForDeployment();  // Updated method for ethers@6
  console.log("ZenVolt contract deployed to:", await zenVolt.getAddress());

  // Optional: Update your config file with addresses if needed
  updateConfig({
    VBetterAddress: await vBetter.getAddress(),
    ZenVoltAddress: await zenVolt.getAddress(),
  });

  console.log("Deployment completed and config updated.");
}

deploy().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
