module.exports = (grunt) => {
  const port = grunt.option('port') || 8000;
  const root = 'src';

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port,
          base: [root, 'node_modules'],
          livereload: true,
          open: true,
          useAvailablePort: true,
        },
      },
    },

    watch: {
      html: {
        files: `${root}/*.html`,
      },
      markdown: {
        files: `${root}/*.md`,
      },
      options: {
        livereload: true,
      },
    },

  });

  // Dependencies
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['serve']);

  // Serve presentation locally
  grunt.registerTask('serve', ['connect', 'watch']);
};
