module.exports = function(grunt){
 	grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./assets/stylesheets/less"],
                    yuicompress: true
                },
                files: {
                    "./asset/main.css": "./asset/main.less"
                }
            }
        },
        watch: {
            files: "./assets/stylesheets/less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}