/* jslint node: true */
'use strict';

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Show grunt task time
  require('time-grunt')(grunt);

  var listenIp = 'localhost';
  var listenPort = 9000;
  var apiHost = 'interview.flywheel.io';
  var apiPort = 443;
  var apiProtocol = 'https:';

  // Configurable paths for the app
  var appConfig = {
    app: 'app',
    dist: 'dist'
  };

  // Use this to proxy
  var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

  // Grunt configuration
  grunt.initConfig({

    // Project settings
    flywheel: appConfig,

    // The grunt server settings
    connect: {
      options: {
        port: listenPort,
        hostname: listenIp,
        livereload: 35729
      },
      proxies: [{
        context: '/api',
        host: apiHost,
        port: apiPort,
        https: false,
        protocol: apiProtocol,
      }],
      livereload: {
        options: {
          open: false,
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/bower_components',
                connect.static('./bower_components')
              ),
              proxySnippet,
              connect.static(appConfig.app)
            ];
          }
        }
      },
    },
    // Watch for changes in live edit
    watch: {
      styles: {
        files: ['app/less/**/*.less', 'app/**/*.css'],
        tasks: ['less', 'copy:styles'],
        options: {
          nospawn: true,
          livereload: '<%= connect.options.livereload %>'
        },
      },
      js: {
        files: ['<%= flywheel.app %>/src/{,*/}*.js'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= flywheel.app %>/**/*.html',
          '.tmp/styles/{,*/}*.css',
          '<%= flywheel.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    // Clean dist folder
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= flywheel.dist %>/{,*/}*',
            '!<%= flywheel.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    // Copies remaining files to places other tasks can use
    copy: {
      styles: {
        expand: true,
        cwd: '<%= flywheel.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      files: ['app/src/**/*.js', 'gruntfile.js']
    },
  });

  // Run live version of app
  grunt.registerTask('serve', [
    'clean:server',
    'copy:styles',
    'configureProxies:server',
    'connect:livereload',
    'watch'
  ]);

};
