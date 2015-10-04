'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var transportConfig = grunt.file.readJSON('./config/transportConfig.json');
    var recipientsConfig = grunt.file.readJSON('./config/recipientsConfig.json');
    var coupleBuilder = require('./src/js/coupleBuilder.js');
    var couples = coupleBuilder(recipientsConfig.recipients);
    grunt.initConfig({
         nodemailer: {
            options: {
                transport: transportConfig,
                message: {
                    subject: 'Pair list',
                },
                recipients: recipientsConfig.recipients,
                },
                external: {
                    src: ['./src/template/index.html']
                }
            }
    });
    grunt.registerTask('default', [], function() {

    });
};
