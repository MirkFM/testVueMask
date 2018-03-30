"use strict";

const $ = global.$;
const path = global.taskPath;

const gulp = require("gulp");
const del = require("del");
const filePath = require("path");
const fs = require("fs");
const argv = require("yargs").argv;

const gulpWatch = gulp.watch;

gulp.task("clean:html", () => del(path.build.html + "*.html"));

gulp.task("build:html", () =>
    gulp
        .src(path.src.html)
        .pipe($.plumber({ errorHandler: global.errorHandler }))
        .pipe(
            $.data(function(file) {
                const existsFile = fs.existsSync,
                    readFile = fs.readFileSync;

                const locale = argv.locale || path.src.locale;

                const pathBaseFile = path.src.data + locale + "/_all.json",
                    pathPageFile = path.src.data + locale + "/" + filePath.basename(file.path, ".pug") + ".json",
                    pathCustomPageFile = path.src.data + locale + "/custom/" + filePath.basename(file.path, ".pug") + ".json";

                let BaseData = {},
                    PageData = {},
                    CustomData = {};

                if (existsFile(pathBaseFile)) {
                    BaseData = JSON.parse(readFile(pathBaseFile));
                }

                if (existsFile(pathPageFile)) {
                    PageData = JSON.parse(readFile(pathPageFile));
                }

                if (existsFile(pathCustomPageFile)) {
                    CustomData = JSON.parse(readFile(pathCustomPageFile));
                }

                let result = {
                    localeData: Object.assign({}, BaseData, PageData, CustomData)
                };

                return result;
            })
        )
        .pipe(
            $.pug({
                basedir: "."
            })
        )
        .pipe(
            $.prettydiff({
                lang: "html",
                mode: "beautify",
                inchar: " ",
                insize: 4,
                force_indent: true,
                wrap: 0,
                crlf: true,
                textpreserve: true,
                spaceclose: true,
                newline: true
            })
        )
        .pipe($.eol(path.src.lineending))
        .pipe($.insert.append(path.src.lineending))
        .pipe($.htmllint())
        .pipe(gulp.dest(path.build.html))
);

gulp.task("dev:html", gulp.series("build:html"));

gulp.task("watch:html", () => gulpWatch(path.watch.html, gulp.series("dev:html", "server:reload")));
