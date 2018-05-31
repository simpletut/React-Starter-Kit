const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather then for the browser
    target: 'node',

    // Tell webpack the root file of our
    // server application 
    entry: './src/index.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react', 'stage-0', ['env', {
                            target: { browsers: ['last 2 versions']}
                        }]
                    ]
                } 
            },
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/assets/graphics', to: 'assets/graphics' },
            { from: 'src/assets/email_templates', to: 'assets/email_templates' }
        ])
    ],

    // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
    // into the server bundle
    externals: [webpackNodeExternals()]

};