var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    node;

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('server', function() {
    console.log('hiiiiii')
    if (node) node.kill()
  node = spawn('node', ['app.js'], {stdio: 'inherit'})
 
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });

  gulp.watch(['./app.js', './apps/**/*.js', './models/**/*.js'], gulp.series('server'),function() {
    
    console.log('restarted')
  })
})

/**
 * $ gulp
 * description: start the development environment
 */
gulp.task('default', gulp.parallel('server'),function() {
  //gulp.parallel('server')
    console.log('started')
  
  // Need to watch for sass changes too? Just add another watch call!
  // no more messing around with grunt-concurrent or the like. Gulp is
  // async by default.
})

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})