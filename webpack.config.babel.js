import autoprefixer from 'autoprefixer';
import nodemon from 'nodemon';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

nodemon({
    script: './bin/www',
    ext: 'js json',
    ignore: ['public/'],
});

nodemon.on('start', () => {
    console.log('App has started');
}).on('quit', () => {
    console.log('App has quit');
}).on('restart', files => console.log('App restarted due to: ', files));

export default {
    watch: true,
    entry: './public/source/main.js',
    output: { path: `${__dirname}/public/build/`, filename: 'main.js' },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                     presets: ['react', 'es2015', 'stage-1'],
                     plugins: ['transform-decorators-legacy'],
                     cacheDirectory: true
                 }
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    resolve: {
        modulesDirectories: ['node_modules', 'public/source'],
        extensions: ['', '.js', '.jsx'],
    },
    postcss: [
        autoprefixer,
    ],
    plugins: [
        new ExtractTextPlugin('main.css', { allChunks: true }),
    ],
};
