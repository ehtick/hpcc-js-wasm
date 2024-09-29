import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
    {
        test: {
            name: 'browser',
            exclude: [
                '**/*.node.spec.{ts,js}',
                "**/node_modules/**",
                "**/emsdk/**"
            ],
            browser: {
                enabled: true,
                provider: "playwright",
                headless: true,
                name: "chromium",
                providerOptions: {
                    launch: {
                        args: ["--disable-web-security"],
                    }
                },
                screenshotFailures: false
            },
            server: {
                deps: {
                    external: ["*"],
                }
            }
        }
    },
    {
        test: {
            name: 'node',
            exclude: [
                '**/*.browser.spec.{ts,js}',
                "**/node_modules/**",
                "**/emsdk/**"
            ],
            environment: 'node',
            server: {
                deps: {
                    external: ["*"],
                }
            }
        }
    }
])

// export default defineConfig(({ mode }) => {
//     switch (mode) {
//         case "browser":
//             return {
//                 test: {
//                     include: [
//                         "tests/*.spec.ts",
//                         "tests/browser/*.spec.ts"
//                     ],
//                     browser: {
//                         enabled: true,
//                         provider: "playwright",
//                         headless: true,
//                         name: "chromium",
//                         providerOptions: {
//                             launch: {
//                                 args: ["--disable-web-security"],
//                             }
//                         },
//                         screenshotFailures: false
//                     },
//                     testTimeout: 30000,
//                     coverage: {
//                         provider: "v8",
//                         allowExternal: false,
//                         // include: ["src/**/*.ts"],
//                         reporter: ["json", "text"],

//                     }
//                 }
//             };
//         case "node":
//         default:
//             return {
//                 test: {
//                     include: [
//                         "tests/*.spec.ts",
//                         "tests/node/*.spec.ts"
//                     ],
//                     node: {
//                         enabled: true,
//                         provider: "node",
//                     },
//                     testTimeout: 20000,
//                     coverage: {
//                         provider: "v8",
//                         allowExternal: false,
//                         // include: ["src/**/*.ts"],
//                         reporter: ["json", "text"]
//                     },
//                 }
//             };
//     }
// });
