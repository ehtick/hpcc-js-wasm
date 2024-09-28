import { nodeTpl } from "@hpcc-js/esbuild-plugins";

//  config  ---
await nodeTpl("src/index.ts", "dist/index");
