module.exports = function(grunt) {


	require('time-grunt')(grunt);

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		shell: {
			e2e: {
				command: function() {
					return 'echo hello!'
				}
			}
		}
	});


	var readline = require('readline');
			
	// 获取用户token
	grunt.registerTask('getToken', function() {
		var done = this.async();
		var token;
		var rl = readline.createInterface({
				input: process.stdin,
				output: process.stdout
			});

		rl.question('hi,请输入6位token密码:       ', function(answer) {
			grunt.config('token', answer);
			rl.close();
			// 结束 grunt async
			done();
		});
	});


}