module.exports = function (grunt) {

    grunt.initConfig({

        sass: {
            options: {sourceMap: true},
            all: {
                files: {
                    'styles/compiled/foundation.css': 'styles/development/foundation.scss'
                }
            }
        },

        autoprefixer: {
            all: {
                options: {map: false, browsers: 'last 2 versions'},
                src: ['styles/compiled/**/*.css'],
                expand: true,
                flatten: false
            }
        },

        watch: {
            sass: {
                options: {interrupt: true, livereload: true, livereloadOnError: false},
                files: ['styles/development/**/*.scss'],
                tasks: ['sass', 'autoprefixer']
            },
            html: {
                options: {livereload: true},
                files: ['*.html']
            }
        },

        connect: {
            server: {
                options: {
                    port: '8888',
                    hostname: '*'
                }
            }
        }

    });

    grunt.registerTask('default', ['sass', 'connect', 'watch']);

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

}
