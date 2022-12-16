export const getAllSteps = async () => {
  const {step_00} = await import("./00_deleteDb");
  const {step_01} = await import("./01_faucet");
  const {step_02} = await import("./02_caviar");

  return [step_00, step_01, step_02];
};
