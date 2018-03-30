"use strict";

const $ = global.$;
const path = global.taskPath;

const gulp = require("gulp");
const del = require("del");

const gulpWatch = gulp.watch;

let tsProject = $.typescript.createProject("tsconfig.json");

gulp.task("clean:script", () => del(path.build.script));

gulp.task("build:script", () =>
    gulp
        .src(path.src.script)
        .pipe($.plumber({ errorHandler: global.errorHandler }))
        .pipe(tsProject())
        .pipe($.eol(path.src.lineending))
        .pipe($.insert.append(path.src.lineending))
        .pipe(gulp.dest(path.build.script))
);

gulp.task("dev:script", () =>
    gulp
        .src(path.src.script)
        .pipe($.plumber({ errorHandler: global.errorHandler }))
        .pipe($.sourcemaps.init())
        .pipe(tsProject())
        .pipe($.eol(path.src.lineending))
        .pipe($.insert.append(path.src.lineending))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(path.build.script))
);

gulp.task("watch:script", () => gulpWatch(path.watch.script, gulp.series("dev:script", "server:reload")));
