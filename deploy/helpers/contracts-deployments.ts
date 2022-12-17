import {DRE, getDb, getParaSpaceConfig} from "./misc-utils";
import {
  tEthereumAddress,
  eContractid,
  tStringTokenSmallUnits,
  ERC20TokenContractId,
  ERC721TokenContractId,
} from "./types";
import {Caviar__factory} from "../../types";
import {MockContract} from "ethereum-waffle";
import {
  getAllERC20Tokens,
  getApeStakingLogic,
  getPunks,
  getFirstSigner,
  getWETH,
  getMintableERC721Logic,
} from "./contracts-getters";
import {
  convertToCurrencyDecimals,
  getFunctionSignatures,
} from "./contracts-helpers";
import {LpToken__factory} from "../../types";

import {
  withSaveAndVerify,
  insertContractAddressInDb,
} from "./contracts-helpers";
import {HardhatRuntimeEnvironment} from "hardhat/types";
import {Address} from "hardhat-deploy/dist/types";
import {Contract} from "ethers";

import {pick} from "lodash";
import {ZERO_ADDRESS} from "./constants";
import {GLOBAL_OVERRIDES} from "./hardhat-constants";

const readArtifact = async (id: string) => {
  return (DRE as HardhatRuntimeEnvironment).artifacts.readArtifact(id);
};

export const deployCaviar = async (owner: string, verify?: boolean) =>
  withSaveAndVerify(
    await new Caviar__factory(await getFirstSigner()).deploy(),
    eContractid.Caviar,
    [owner],
    verify
  );
