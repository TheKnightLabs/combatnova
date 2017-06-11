module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true,
				includePaths: require('node-bourbon').includePaths
			},
			dist: {
				files: {
					'assets/css/style.css': 'assets/css/style.scss'
				}
			}
		},
		watch: {
			scss: {
				files: 'assets/css/*.scss',
				tasks: ['sass'],
				options: {
					debounceDelay: 250,
				},
			},
		}
	});
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass']);
}
