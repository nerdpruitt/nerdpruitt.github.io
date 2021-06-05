const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/js/main.js', './src/scss/index.scss'],
    output: {
        path: path.resolve(__dirname, 'src/dist'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                            }
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        })
    ]
};