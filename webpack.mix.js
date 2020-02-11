let mix = require('laravel-mix');

mix
    // General configuration
    .sourceMaps(true, 'inline-source-map')
    .setPublicPath('dist')

    // JS
    .js('es/app.js', 'dist/js')

    // SASS
    .sass('sass/app.scss', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [
            require('postcss-easings')(),
            require('postcss-object-fit-images')()
        ]
    })
;
