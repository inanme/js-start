import gulp from 'gulp';
import 'babel-polyfill';

const set = new Set([111, 1, 1, 1]);
gulp.task('watch', () => console.log(set));

