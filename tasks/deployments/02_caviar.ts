import {task} from "hardhat/config";
import {ETHERSCAN_VERIFICATION} from "../../deploy/helpers/hardhat-constants";

task("deploy:caviar", "Deploy caviar").setAction(async (_, DRE) => {
  await DRE.run("set-DRE");
  const {step_02} = await import(
    "../../deploy/tasks/deployments/full-deployment/steps/02_caviar"
  );
  await step_02(ETHERSCAN_VERIFICATION);
});
