#
# * assemble-less
# * http://github.com/assemble/assemble-less
# *
# * Copyright (c) 2013 Assemble
# * MIT License
# 


module.exports = (grunt) ->
  "use strict"
  
  # Project configuration.
  grunt.initConfig
    pkg      : grunt.file.readJSON("package.json")
    bootstrap: grunt.file.readYAML("assets/bootstrap.yml")

    less:
      options:
        paths:    ["<%= bootstrap.base %>"]
        require:   "<%= bootstrap.less.globals %>"
        bootstrap: "assets/less"
        concat:     true

      bundles:
        files:
          "assets/css/bundle/bootstrap.css": ["<%= bootstrap.lib %>"]
          "assets/css/bundle/core.css"     : ["<%= bootstrap.less.core %>"]
          "assets/css/bundle/common.css"   : ["<%= bootstrap.less.common %>"]
          "assets/css/bundle/nav.css"      : ["<%= bootstrap.less.nav %>"]
          "assets/css/bundle/zindex.css"   : ["<%= bootstrap.less.zindex %>"]
          "assets/css/bundle/misc.css"     : ["<%= bootstrap.less.misc %>"]
          "assets/css/bundle/util.css"     : ["<%= bootstrap.less.util %>"]

      # Compile all targeted LESS files individually
      individual:
        options: 
          concat: false
        src: "<%= bootstrap.less.all %>"
        dest: "assets/css/"

    
    # Build templates.
    # assemble:
    #   options:
    #     flatten: true
    #     assets: "test/actual"
    #     data: ["test/common/data/common1.json", "test/common/data/common2.yml"]
    #   tests:
    #     options:
    #       layout: "test/files/layout.hbs"
    #     files:
    #       "test/actual/": ["test/files/dates.hbs"]


  # Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks "assemble"
  grunt.loadNpmTasks "assemble-less"
  
  # Default tasks to be run.
  grunt.registerTask "default", ["less"]
  
  # Tests to be run.
  grunt.registerTask "test", ["default"]