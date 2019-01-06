module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec')

  grunt.initConfig({
    ts: {
      default : {
        tsconfig: './src/tsconfig.json'
      }
    },
    copy: {
      staticWeb: {
        expand: true,
        cwd: 'src/webServer/static',
        src: '**/*',
        dest: 'dist/webServer/static'
      }
    },
    exec: {
      buildApi: {
        command: 'node buildApi.js',
      }
    }
  });

  grunt.registerTask("default", [
      "exec:buildApi",
      "ts",
      "copy:staticWeb"
  ]);

};