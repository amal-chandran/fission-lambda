import { toPairs } from "lodash";
import { getMeshSDK } from "./../mesh/.mesh";

type sdk = ReturnType<typeof getMeshSDK>;
export const transformSDK = (sdk: sdk) => {
  const sdkPairs = toPairs(sdk);

  sdkPairs.map(([functionName, functionDefinition]) => [
    functionName,
    functionDefinition,
  ]);
};

export const responseSDK = <T>(response: T): T | Error => {
  if (response instanceof Error) {
    throw response;
  } else {
    return response;
  }
};
