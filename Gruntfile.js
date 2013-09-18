module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    regarde: {
      js: {
        files: ["index.js", "test/index.js"],
        tasks: ["jshint", "shell:test"]
      }
    },
    shell: {
      test: {
        command: "npm test",
        options: {
          stdout: true,
          stderr: true
        }
      }
    },
    jshint: {
      files: ["index.js", "test/**/*.js"],
      options: {
        node: true,
        camelcase: true,
        eqeqeq: true,
        eqnull: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        plusplus: true,
        quotmark: "double",
        sub: true,
        trailing: true,
        undef: true,
        unused: true,
        predef: ["describe", "it", "xit", "beforeEach", "afterEach"]
      }
    }
  });

  // Tasks
  grunt.registerTask("default", ["regarde"]);

  // Load Dependencies
  grunt.loadNpmTasks("grunt-regarde");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-shell");
};
