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
    pkg      : grunt.file.readJSON('package.json'),
    bootstrap: grunt.file.readYAML('assets/bootstrap.yml'),


    less: {
      options: {
        paths:  ['<%= bootstrap.less %>'],
        require: '<%= bootstrap.bundle.globals %>',
        bootstrap: 'assets',
        concat: true
      },
      bundles: {
        files: {
          'assets/css/bundle/bootstrap.css': ['<%= bootstrap.bundle.all %>'],
          'assets/css/bundle/core.css':      ['<%= bootstrap.bundle.core %>'],
          'assets/css/bundle/common.css':    ['<%= bootstrap.bundle.common %>'],
          'assets/css/bundle/nav.css':       ['<%= bootstrap.bundle.nav %>'],
          'assets/css/bundle/zindex.css':    ['<%= bootstrap.bundle.zindex %>'],
          'assets/css/bundle/misc.css':      ['<%= bootstrap.bundle.misc %>'],
          'assets/css/bundle/util.css':      ['<%= bootstrap.components.utilities %>']
        }
      },

      // Compile all targeted LESS files individually
      individual: {
        options: {concat: false },
        src:  '<%= bootstrap.bundle.all %>',
        dest: 'assets/css/'
      }
    },

    // Build templates.
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
    }
    // clean: {
    //   // Clear out example files before creating new ones.
    //   tests: { src: 'assets/css' }
    // },
    // watch: {
    //   project: {
    //     files: ['test/**/*.{less,json}'],
    //     tasks: ['less', 'assemble:less']
    //   }
    // }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-watch');


  // Default tasks to be run.
  grunt.registerTask('default', [
    // 'assemble',
    'less'
  ]);

  // Tests to be run.
  grunt.registerTask('test', [
    'default'
  ]);
};
