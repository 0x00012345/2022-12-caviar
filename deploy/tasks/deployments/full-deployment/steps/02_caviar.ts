import {deployCaviar} from "../../../../helpers/contracts-deployments";
import {getFirstSigner} from "../../../../helpers/contracts-getters";
import {GLOBAL_OVERRIDES} from "../../../../helpers/hardhat-constants";
import {getParaSpaceConfig, waitForTx} from "../../../../helpers/misc-utils";

export const step_02 = async (verify = false) => {
  const deployer = await getFirstSigner();
  const deployerAddress = await deployer.getAddress();

  try {
    const caviar = await deployCaviar(deployerAddress, verify);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
