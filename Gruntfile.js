module.exports = function(grunt) {

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/* CSS and JS are inlined, and the HTML is minified afterwards,
	 	 * therefore there is no need to minify CSS and JS in index.html
	 	 */
		uglify: {
			minifyjs: {
				files: [{
					expand: true,
					cwd: 'src/views/js',
					src: ['*.js'],
					dest: 'build/views/js',
					ext: '.min.js'
				}]
			}
		},
		cssmin: {
			minifycss: {
				files: [{
					expand: true,
					cwd: 'src/views/css',
					src: ['*.css'],
					dest: 'build/views/css',
					ext: '.min.css'
				}]
			}
		},
		imagemin: {
			optimages: {
				files: [{
					expand: true,
					cwd: 'src/img',
					src: ['*.{png,jpg}'],
					dest: 'build/img'
				},
				{
					expand: true,
					cwd: 'src/views/images',
					src: ['*.{png,jpg}'],
					dest: 'build/views/images'
				}]
			}
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true,
				minifyJS: true,
				minifyCSS: true
			},
			minifyhtml: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.html', '!index.html'],
					dest: 'build/',
					ext: '.min.html'
				},
				{
					expand: true,
					cwd: 'src/views',
					src: ['*.html'],
					dest: 'build/views',
					ext: '.min.html'
				},
				{
					src: 'build/index.html',
					dest: 'build/index.html'
				}]
			}
		},
		inlinecss: {
			options: {
				inline: true
			},
			inlineall: {
				src: 'src/index.html',
				dest: 'build/index.html'
			}
		}
	});

	// Load the plugins that provide the tasks.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-inline-css');

	// Default tasks.
	grunt.registerTask(
		'default', [
		'uglify',
		'cssmin',
		'imagemin',
		'inlinecss',
		'htmlmin'
		]);
};