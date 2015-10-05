'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    var transportConfig = grunt.file.readJSON('./config/transportConfig.json');
    var recipientsConfig = grunt.file.readJSON('./config/recipientsConfig.json');
    var coupleBuilder = require('./src/js/coupleBuilder.js');
    var couples = coupleBuilder(recipientsConfig.recipients);
    grunt.file.write('./tmp/pair-data.json', JSON.stringify(couples));
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
                    src: ['./tmp/src/template/table.html']
                }
         },
         assemble: {
            options: {
                data: ['./tmp/pair-data.json']
              },
              emailTemplate: {
                data: ['./tmp/pair-data.json'],
                src: ['./src/template/table.hbs'],
                dest: './tmp'
              }
         }
    });
    grunt.registerTask('default', ['assemble:emailTemplate', 'nodemailer:external']);
};
