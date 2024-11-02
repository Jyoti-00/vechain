import { deploy } from "./deploy"; // Ensure correct path to the deploy file

async function main() {
  await deploy(); // Call the deploy function
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
