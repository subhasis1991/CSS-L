module.exports = function(grunt){
 	grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./assets/stylesheets/less"],
                    yuicompress: true
                },
                files: {
                    "./asset/main.css": "./asset/less/main.less"
                }
            }
        },
        watch: {
            files: "./asset/less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch','less']);
}