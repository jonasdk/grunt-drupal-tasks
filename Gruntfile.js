module.exports = function(grunt) {

  // Initialize global configuration variables.
  var config = grunt.file.readJSON('Gruntconfig.json');
  grunt.initConfig({
    config: config
  });

  // Load all included tasks.
  grunt.loadTasks(__dirname + '/tasks');

  // Define the default task to fully build and configure the project.
  var tasksDefault = [
    'clean:default',
    'mkdir:init',
    'drush:make',
    'symlink:profiles',
    'symlink:modules',
    'symlink:themes',
    'clean:sites',
    'symlink:sites',
    'mkdir:files',
    'copy:static'
  ];
  if (grunt.config.get('behat')) {
    tasksDefault.push('behat');
  }
  if (grunt.config.get('compass')) {
    tasksDefault.push('compass');
  }
  grunt.registerTask('default', tasksDefault);

};
