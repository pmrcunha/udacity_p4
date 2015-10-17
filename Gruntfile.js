module.exports = function(grunt) {

	//Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/js',
					src: ['*.js'],
					dest: 'build/js',
					ext: '.min.js'
				},
				{
					expand: true,
					cwd: 'src/views/js',
					src: ['*.js'],
					dest: 'build/views/js',
					ext: '.min.js'
				}]
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css'],
					dest: 'build/css',
					ext: '.min.css'
				},
				{
					expand: true,
					cwd: 'src/views/css',
					src: ['*.css'],
					dest: 'build/views/css',
					ext: '.min.css'
				}]
			}
		},
		imagemin: {
			dynamic: {
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
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['*.html'],
					dest: 'build/',
					ext: '.min.html'
				},
				{
					expand: true,
					cwd: 'src/views',
					src: ['*.html'],
					dest: 'build/views',
					ext: '.min.html'
				}]
			}
		},
		responsive_images: {
			portfolioImages: {
				options: {
					sizes: [{
						name: 'thumbnail',
						width: 120
					},
					{
						name: 'small',
						width: 320
					},
					{
						name: 'large',
						width: 640
					}]
				},
				files: [{
					expand: true,
					cwd: 'src/img',
					src: ['*.{png,jpg}'],
					dest: 'build/img'
				}]
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-responsive-images');

	// Default tasks.
	grunt.registerTask(
		'default', [
		'uglify',
		'cssmin',
		'responsive_images',
		'imagemin',
		'htmlmin']
		);
};