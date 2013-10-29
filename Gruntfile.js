/*
 * boilerplates
 * http://github.com/assemble/boilerplates
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */

module.exports = function(grunt) {

  "use strict";

  // Project configuration.
  grunt.initConfig({

   // Pull down a list of repos from Github.
    repos: {
      assemble: {
        options: {
          path: '/orgs/assemble/'
        },
        src: ['repos?page=1&per_page=100'],
        dest: 'docs/repos.json'
      }
    },

    /**
     * Extend context for templates
     * with repos.json
     */
    readme: {
      options: {
        metadata: ['<%= repos.assemble.dest %>']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-readme');

  // Default task.
  grunt.registerTask('default', ['repos', 'readme']);
};
