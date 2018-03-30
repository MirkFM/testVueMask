"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("server:init", () =>
    browserSync.init({
        rewriteRules: [
            {
                match: /Content-Security-Policy/,
                fn: function() {
                    return "DISABLED-Content-Security-Policy";
                }
            }
        ],
        port: 3000,
        server: { baseDir: "./" },
        reloadDelay: 75
    })
);

gulp.task("server:reload", done => {
    browserSync.reload();
    done();
});
