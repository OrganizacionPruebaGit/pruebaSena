const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([
    'resources/assets/plantilla/js/bootstrap.min.js',
    'resources/assets/plantilla/js/jquery-3.5.1.slim.min.js',
    'resources/assets/plantilla/js/popper.min.js'
], 'public/js/plantilla.js');