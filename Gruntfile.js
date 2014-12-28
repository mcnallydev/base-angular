module.exports = function(grunt) {
  grunt.initConfig({
    serve: {
      options: {
        port: 9000,
        hostname: 'localhost',
        serve: {
          path: './'
        },
        livereload: 35729
      }
    }
  });
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('default', [
    'serve'
  ]);
};
