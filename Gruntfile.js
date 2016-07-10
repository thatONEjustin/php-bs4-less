/*
 * php-bs4-less
 * http://github.com/thatONEjustin/
 * http://justin.tinytanky.net
 *
 * Copyright (c) 2016 Justin Paelmo
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function (grunt) {

    grunt.initConfig({        
        watch: {
            
            helpers: {
                files: ['build/themes/helpers.less'],
                tasks: ['less:main', 'cssmin:main'],
                options: {
                    interrupt: true
                }
            }, 
            
            styles: {
                files: ['build/**.less', '!build/themes/helpers.less'],
                tasks: ['less:main', 'cssmin:main'],
                options: {
                    interrupt: true
                }
            }, 
            
            
            themes: {
                files: ['build/themes/**.less', '!build/themes/helpers.less'],
                tasks: ['less:themes', 'cssmin:themes'],
                options: {
                    interrupt: true
                }
            }, 
            
            //Watch the .php files in /build/ 
            copyStructure: {
                files: 'build/**.php',
                tasks: ['copy:php']                
            },
            
            copyIMG: {
                files: 'build/img/**.{jpg,svg,png,gif}',
                tasks: ['copy:img']
            }
            
            
        },
        
        copy: {
            basic: {
                expand: true,
                cwd: 'build',
                src: ['**', '!*.less', '!**/*.less', '!*.old.*'],
                dest: 'dist/'
            },
            
            php: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['**.php', '*.*.php', '!**.less', '!**/*.less' , '!*.old.*'],
                    dest: 'dist/'
                }]
            }, 
            
            img: {
                expand: true,
                cwd: 'build/img',
                src: ['**.{jpg,png,svg,gif}', '*.*.{jpg,png,svg,gif}', '!**.php', '!**/*.php' , '!**.less', '!**/*.less' , '!*.old.*'],
                dest: 'dist/img'
            }, 
            
            single: {
                src: ['build/**.php', '!*.old.*'],
                dest: 'dist/'
            }
        }, 
        
        less: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['*.less', '!**.old.*', '!{boot,var,mix,helpers}*.less'],
                    dest: 'dist',
                    ext: '.css'
                }]   
            },
            
            themes: {
                files: [{
                    expand: true,
                    cwd: 'build/themes',
                    src: ['*.less', '!**.old.*', '!{boot,var,mix,helpers}*.less'],
                    dest: 'dist/themes',
                    ext: '.css'
                }]                
            },
            
            single: {
                files: {
                  'path/to/result.css': 'path/to/source.less'
                }   
            }
        }, 
        
        cssmin: {
            main: {
               expand: true,
               cwd: 'dist',
               src: ['*.css', '!*.min.css'], 
               dest: 'dist',
               ext: '.min.css'
            }, 
            
            themes: {
                expand: true, 
                cwd: 'dist/themes',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/themes',
                ext: '.min.css'
            },
            
            single: {
                src: ['path/to/source.css'], 
                dest: 'path/to/dest',
                ext: '.min.css'
            }
        }
        
        
    });        

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task(s)
    // Default task is to watch the directories.         
    grunt.registerTask('default', ['watch']);    
    
    // bbuild is my basic build script for distribution
    grunt.registerTask('bbuild', ['less:main', 'less:themes', 'copy:basic', 'cssmin:main', 'cssmin:themes']);    
}

/*
 * writeFilePath(path = file[1,2,3...], target = dist, slash = for file structure)
 * used to write path of file changed
 *
 **/
function writeFilePath(path, target, slash) {    
    var tmp  = '';         
    for(var a=1; a<path.length-1;a++) {
        tmp += path[a] + slash;
    }                

    return (target + slash) + tmp;
}

/*
 * getFileName(path = file[1,2,3...]) 
 * used to get file name
 *
 **/
function getFileName(path) {
    for(var i=0;i<path.length;i++) {
        var tmp = path[i];
            tmp = tmp.split('.');
    }    
    return tmp[0];
}