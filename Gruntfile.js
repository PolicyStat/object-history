/* eslint-env node */
module.exports = function (grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);

    var karmaSauceLaunchers = {
        chrome: {
            base: "SauceLabs",
            browserName: "chrome"
        },
        firefox: {
            base: "SauceLabs",
            browserName: "firefox"
        },
        ie8: {
            base: "SauceLabs",
            browserName: "internet explorer",
            version: "8"
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
                files: ["<%= spec.jsGlob %>"],
                preprocessors: {"spec/*spec.js": ["browserify"]},
                browserify: {debug: true},
                autoWatch: false,
                logLevel: "DEBUG"
            },
            dev: {
                reporters: "dots",
                browsers: ["Firefox", "Chrome"],
                background: true,
                browserNoActivityTimeout: 0
            },
            continuous: {
                singleRun: true,
                browsers: Object.keys(karmaSauceLaunchers),
                customLaunchers: karmaSauceLaunchers,
                reporters: ["dots", "saucelabs"],
                sauceLabs: {testName: "<%= pkg.name %>"}
            }
        }
    });

    grunt.registerTask("default", "dev");
    grunt.registerTask("dev", [
        "karma:dev:start",
        "watch"
    ]);
};
