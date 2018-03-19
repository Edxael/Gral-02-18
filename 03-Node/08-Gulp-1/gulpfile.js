const gulp = require('gulp')

gulp.task('copyHTML', () => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
})


    // Named task --> to call it on the terminal type:  gulp MyTask1
gulp.task('MyTask1', () => {
    return console.log("Gup is Executing MyTask-1 ...")
})

    // Default task --> to call it on the terminal type:  gulp
gulp.task('default', () => {
    return console.log("Gup is executing Default task...");
})

