module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          base: {
            path: './',
            options: {
              index: 'index.html',
              maxAge: 300000
            }
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', [
    'connect::keepalive'
  ]);
};
