import { describe, it, expect } from "vitest";
import { Graphviz } from "@hpcc-js/wasm-graphviz";

describe("worker-browser", function () {

    let v;
    it("fetch version", async function () {
        const graphviz = await Graphviz.load();
        v = graphviz.version();
        expect(v).to.be.a.string;
        Graphviz.unload();
    });

    let data;
    it("generate-data", function () {
        data = new Uint8Array(Array.from({ length: 1000 }, (_, i) => i % 256));
        expect(data).to.be.instanceOf(Uint8Array);
    });

    it("worker-esm", (): Promise<void> => {
        return new Promise((resolve, reject) => {
            // const myWorkerXXX = new Worker("/dist-test/worker.browser.js", { type: "module" });
            const myWorker = new Worker(new URL('./worker.browser.ts', import.meta.url), {
                type: 'module',
            })
            expect(myWorker).to.be.instanceOf(Worker);
            myWorker.onmessage = function (e) {
                expect(e.data).to.deep.equal(data + v);
                resolve();
            };
            myWorker.onerror = function (e: Event) {
                reject(e.type);
            };
            myWorker.postMessage(data);
        });
    });
});

