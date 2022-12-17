import {task} from "hardhat/config";
import {ETHERSCAN_VERIFICATION} from "../../deploy/helpers/hardhat-constants";

task(
  "deploy:faucet",
  "Deploy faucet for mocked ERC20 & ERC721 tokens"
).setAction(async (_, DRE) => {
  await DRE.run("set-DRE");
  const {step_01} = await import(
    "../../deploy/tasks/deployments/full-deployment/steps/01_faucet"
  );
  await step_01(ETHERSCAN_VERIFICATION);
});
