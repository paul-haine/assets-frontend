'use strict'

const gulp = require('gulp')
const runSequence = require('run-sequence')

gulp.task('default', (cb) => {
  runSequence(
    'pattern-library',
    'watch',
    cb
  )
})
