/*
 * assemble-less
 * http://github.com/assemble/assemble-less
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */

module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Project paths and files.
    bootstrap: grunt.file.readJSON('test/bootstrap.json'),


    less: {
      // Global task options. Options can also be set for each target.
      options: {
        paths: ['<%= bootstrap.base %>'],
        require: '<%= bootstrap.less.globals %>',
        bootstrap: './test/less/bootstrap',
        concat: true
      },

      // Files object, a more compact way of building the same thing as above.
      bundles: {
        files: {
          'test/css/bundle/bootstrap.css': ['<%= bootstrap.lib %>'],
          'test/css/bundle/core.css':      ['<%= bootstrap.less.core %>'],
          'test/css/bundle/common.css':    ['<%= bootstrap.less.common %>'],
          'test/css/bundle/nav.css':       ['<%= bootstrap.less.nav %>'],
          'test/css/bundle/zindex.css':    ['<%= bootstrap.less.zindex %>'],
          'test/css/bundle/misc.css':      ['<%= bootstrap.less.misc %>'],
          'test/css/bundle/util.css':      ['<%= bootstrap.less.util %>']
        }
      },

      // Compile all targeted LESS files individually
      individual: {
        options: {concat: false },
        src:  '<%= bootstrap.less.all %>',
        dest: 'test/css/individual'
      }
    },

    // Included for running basic tests.
    assemble: {
      options: {
        flatten: true,
        assets: 'test/actual',
        data: [
          'test/common/data/common1.json', 
          'test/common/data/common2.yml'
        ]
      },
      tests: {
        options: {
          layout: 'test/files/layout.hbs'
        },
        files: {
          'test/actual/': ['test/files/dates.hbs']
        }
      }
    },
    clean: {
      // Clear out example files before creating new ones.
      tests: { src: 'test/css' }
    },
    watch: {
      project: {
        files: ['test/**/*.{less,json}'],
        tasks: ['less', 'assemble:less']
      }
    }
  });

 
  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default tasks to be run.
  grunt.registerTask('default', [
    'assemble',
    'less'
  ]);

  // Tests to be run.
  grunt.registerTask('test', [
    'default'
  ]);
};
