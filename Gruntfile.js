module.exports = function(grunt){
    var config = {
        pkg: grunt.file.readJSON('package.json'),
        env: process.env
    };
    grunt.util._.extend(config, loadConfig('./grunt-tasks/'));
    grunt.initConfig(config);

    function loadConfig(path){
        var glob = require('glob');
        var object = {};
        var key;

        glob.sync('*', {cwd: path}).forEach(function(option){
            key = option.replace(/\.js$/, '');
            object[key] = require(path + option);
        });

        return object;
    }

    // ------------------------------------------ //
    // GLOBAL PLUGINS LOADING
    // ------------------------------------------ //
    require('load-grunt-tasks')(grunt);

    // ------------------------------------------ //
    // TASKS
    // ------------------------------------------ //
    grunt.registerTask('js', [
        'uglify'
    ]);
};