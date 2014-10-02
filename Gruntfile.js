/* eslint-env node */
module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

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
                config: "eslint.json",
                format: "tap"
            },
            all: ["<%= history.jsGlob %>", "<%= test.jsGlob %>"]
        },

        watch: {
            js: {
                files: ["<%= history.jsGlob %>", "<%= test.jsGlob %>"],
                tasks: ["eslint"],
                options: {
                    atBegin: true
                }
            }
        }
    });

    grunt.registerTask("default", "watch");
};
