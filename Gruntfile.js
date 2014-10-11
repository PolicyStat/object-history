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

        test: {
            jsGlob: "test/**/*.js"
        },

        all: {
            jsFiles: "(<%= history.jsGlob %>|<%= test.jsGlob %>)"
        },

        eslint: {
            options: {
                config: ".eslintrc",
                format: "tap"
            },
            all: ["<%= history.jsGlob %>", "<%= test.jsGlob %>"]
        },

        watch: {
            js: {
                files: ["<%= history.jsGlob %>", "<%= test.jsGlob %>"],
                tasks: ["eslint", "karma:dev:run"]
            }
        },

        karma: {
            options: {
                frameworks: ["browserify", "mocha"],
                files: ["<%= test.jsGlob %>"],
                preprocessors: {"test/**/*.js": ["browserify"]},
                browserify: {debug: true},
                autoWatch: false,
                logLevel: "DEBUG"
            },
            dev: {
                reporters: "dots",
                browsers: ["Firefox", "Chrome"],
                background: true
            },
            continuous: {
                singleRun: true,
                browsers: Object.keys(karmaSauceLaunchers),
                customLaunchers: karmaSauceLaunchers,
                reporters: ["saucelabs"]
            }
        }
    });

    grunt.registerTask("default", "dev");
    grunt.registerTask("dev", [
        "karma:dev:start",
        "watch"
    ]);
};
