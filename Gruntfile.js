/* eslint-env node */
module.exports = function (grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);

    var karmaSauceLaunchers = {
        iphone: {
            base: "SauceLabs",
            browserName: "iphone"
        },
        ipad: {
            base: "SauceLabs",
            browserName: "ipad"
        },
        android4dot4: {
            base: "SauceLabs",
            browserName: "android",
            version: "4.4"
        },
        android4dot3: {
            base: "SauceLabs",
            browserName: "android",
            version: "4.3"
        },
        android4dot2: {
            base: "SauceLabs",
            browserName: "android",
            version: "4.2"
        },
        android4dot1: {
            base: "SauceLabs",
            browserName: "android",
            version: "4.2"
        },
        firefox: {
            base: "SauceLabs",
            browserName: "firefox"
        },
        firefoxDev: {
            base: "SauceLabs",
            browserName: "firefox",
            version: "dev"
        },
        chrome: {
            base: "SauceLabs",
            browserName: "chrome"
        },
        chromeDev: {
            base: "SauceLabs",
            browserName: "chrome",
            version: "dev"
        },
        ie6: {
            base: "SauceLabs",
            browserName: "internet explorer",
            version: "6"
        },
        ie7: {
            base: "SauceLabs",
            browserName: "internet explorer",
            version: "7"
        },
        ie8: {
            base: "SauceLabs",
            browserName: "internet explorer",
            version: "8"
        },
        ie9: {
            base: "SauceLabs",
            browserName: "internet explorer",
            version: "9"
        },
        ie10: {
            base: "SauceLabs",
            browserName: "internet explorer",
            version: "10"
        },
        ie11: {
            base: "SauceLabs",
            browserName: "internet explorer",
            version: "11"
        },
        opera: {
            base: "SauceLabs",
            browserName: "opera"
        },
        safari: {
            base: "SauceLabs",
            browserName: "safari"
        }

    };

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        history: {
            jsGlob: "history/**/*.js"
        },

        spec: {
            jsGlob: "spec/*spec.js"
        },

        all: {
            jsFiles: "(<%= history.jsGlob %>|<%= spec.jsGlob %>)"
        },

        eslint: {
            options: {
                config: ".eslintrc",
                format: "tap"
            },
            all: ["<%= history.jsGlob %>", "<%= spec.jsGlob %>"]
        },

        watch: {
            js: {
                files: ["<%= history.jsGlob %>", "<%= spec.jsGlob %>"],
                tasks: ["eslint", "karma:dev:run"]
            }
        },

        karma: {
            options: {
                frameworks: ["browserify", "jasmine"],
                files: [
                    "node_modules/es5-shim/es5-shim.js",
                    "<%= spec.jsGlob %>"
                ],
                preprocessors: {"spec/*spec.js": ["browserify"]},
                autoWatch: false,
                logLevel: "DEBUG",
                sauceLabs: {
                    connectOptions: {
                        verbose: true,
                        logger: function (msg) {
                            console.log(msg);
                        }
                    }
                }
            },
            dev: {
                browserify: {debug: true},
                reporters: "progress",
                browsers: ["Firefox", "Chrome"],
                background: true
            },
            continuous: {
                sauceLabs: {
                    startConnect: false
                },
                singleRun: true,
                browsers: Object.keys(karmaSauceLaunchers),
                customLaunchers: karmaSauceLaunchers,
                reporters: ["progress", "saucelabs"],
                captureTimeout: 120000
            }
        }
    });

    grunt.registerTask("default", "dev");
    grunt.registerTask("dev", [
        "karma:dev:start",
        "watch"
    ]);
};
