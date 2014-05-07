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

   /**
    * Pull down a list of repos from Github.
    */
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
     * Sync properties from package.json to bower.json
     */
    sync: {
      options: {
        include: ['devDependencies']
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-verb');
  grunt.loadNpmTasks('grunt-sync-pkg');

  // Default task.
  grunt.registerTask('default', ['verb', 'sync']);
};
