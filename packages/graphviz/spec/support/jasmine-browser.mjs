import pkg from "../../package.json" with {type: "json"};

export default {
    srcDir: "src",
    srcFiles: [
        "*.ts"
    ],
    specDir: "dist-test",
    specFiles: [
        "*.browser.js"
    ],
    esmFilenameExtension: ".js",
    importMap: {
        imports: {
            [pkg.name]: "/dist/index.js"
        }
    },
    env: {
        stopSpecOnExpectationFailure: false,
        stopOnSpecFailure: false,
        random: false
    },

    // For security, listen only to localhost. You can also specify a different
    // hostname or IP address, or remove the property or set it to "*" to listen
    // to all network interfaces.
    listenAddress: "localhost",

    // The hostname that the browser will use to connect to the server.
    hostname: "localhost",

    browser: {
        name: "headlessFirefox"
    }
};
