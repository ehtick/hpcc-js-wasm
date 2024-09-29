import { describe, it, expect } from "vitest";
import { DuckDB } from "@hpcc-js/wasm";

describe("wasm", function () {
    it("DuckDB", async function () {
        const duckdb = await DuckDB.load();
        const v = duckdb.version();
        expect(v).to.be.a.string;
        expect(v.length).to.be.gt(0);
    });
});
