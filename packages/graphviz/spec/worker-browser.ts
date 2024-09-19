import { Graphviz } from "@hpcc-js/wasm-graphviz";

self.onmessage = async function (e) {
    const graphviz = await Graphviz.load();
    const v = graphviz.version();
    Graphviz.unload();
    self.postMessage(e.data + v);
};
