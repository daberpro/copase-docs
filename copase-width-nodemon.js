const nodemon = require("nodemon");
const transform = require("copase");

nodemon({
  script: 'copase.config.js',
  ext: 'html',
  watch: [
    __dirname+"/source",
    __dirname+"/component"
  ]
});


nodemon.on('start', function () {
 
  console.log('Start build');
  transform({
  	sourceDir: __dirname+"/source",
  	outDir: __dirname+"/public"
  });

}).on('quit', function () {
  
  console.log('App has quit');
  process.exit();

}).on('restart', function (files) {
 
  transform({
  	sourceDir: __dirname+"/source",
  	outDir: __dirname+"/public"
  });

});