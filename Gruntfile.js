module.exports = function (grunt) {
	grunt.initConfig({
		ngtemplates: {
			myApp: {
				options: {
					module: 'wcModalTemplates',
					standalone: true
				},
				cwd: '.',
				src: [''],
				dest: 'wcmodaltemplates.js'
			}
		},
		concat: {
		    options: {
		    },
		    dist: {
		      src: ['index.js'],
		      dest: 'dist/wcmodal.js',
		    },
		  },
	});

	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default',['concat']);
};