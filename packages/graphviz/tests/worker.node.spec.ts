import { describe, it, expect } from "vitest";
import { Worker } from "node:worker_threads";
import { Graphviz } from "@hpcc-js/wasm-graphviz";

describe("worker-node", function () {
    it("worker-esm", async function () {
        const graphviz = await Graphviz.load();
        const v = graphviz.version();
        Graphviz.unload();

        const data = new Uint8Array(Array.from({ length: 1000 }, (_, i) => i % 256));

        const value = await new Promise(resolve => {
            console.log(import.meta.url);
            console.log(__dirname);
            console.log(__filename);
            const myWorker = new Worker(new URL('./worker.node.js', import.meta.url));

            myWorker.postMessage(data);
            myWorker.on("message", function (data) {
                resolve(data);
            });
        });
        expect(value).to.deep.equal(data + v);
    });
});
