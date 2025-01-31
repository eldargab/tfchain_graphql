import { TypeRegistry } from "@polkadot/types";
import path from "path";
import fs from "fs";
const typeRegistry = new TypeRegistry();

typeRegistry.register(
  JSON.parse(fs.readFileSync(path.join(__dirname, "typedefs.json"), "utf-8"))
);

export { typeRegistry };

export * from "./balances";
export * from "./tfgrid-module";
export * from "./smart-contract-module";
export * from "./tft-bridge-module";
