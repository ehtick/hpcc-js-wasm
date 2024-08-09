import { Graphviz } from "@hpcc-js/wasm-graphviz";
import { expect } from "chai";

describe("worker-browser", function () {
    it("worker-esm", async function () {
        let graphviz = await Graphviz.load();
        let v = graphviz.version();
        Graphviz.unload();

        const data = new Uint8Array(Array.from({ length: 1000 }, (_, i) => i % 256));

        const value = await new Promise(resolve => {
            const myWorker = new Worker("dist-test/worker.browser.js");
            myWorker.postMessage(data);
            myWorker.onmessage = function (e) {
                resolve(e.data);
            };
        });
        expect(value).to.deep.equal(data + v);
    });
});
