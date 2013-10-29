# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

This repo is based on [grunt-contrib](https://github.com/gruntjs/grunt-contrib/).

# Overview
This collection contains all of the boilerplates maintained by the Assemble core team. This list is made available as a convenience for first-time users who would like to explore what Assemble has to offer. After review, it is recommended that install the boilerplates you wish to use individually.

A listing of each boilerplate and the current version included in this package is listed below.
{% _.each(repos, function(boilerplate) { %}{% if(/\bboilerplate\b/g.test(boilerplate.name)) { %}

## [{%= boilerplate.name %}]({%= boilerplate.url %}) [![NPM version](https://badge.fury.io/js/{%= boilerplate.name %}.png)](http://badge.fury.io/js/{%= boilerplate.name %})
> {%= boilerplate.description %} {% } %} {% }); %}


## Contributing
Please see the [Contributing](http://assemble.io/contributing.html) guide for information on contributing to this project.

To update the list of boilerplates displayed on this README, from the root of the project run `grunt`.

## Authors

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github/doowb](https://github.com/doowb)
+ [twitter/doowb](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2013 Assemble, Jon Schlinkert, Brian Woodward, contributors.
{%= license %}

***

_This file was generated on {%= grunt.template.date("fullDate") %}._