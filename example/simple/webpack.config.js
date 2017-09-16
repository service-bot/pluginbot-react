var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './public/build');
var APP_DIR = path.resolve(__dirname, './view');
var APP_DIR2 = path.resolve(__dirname, '../../src');

console.log(APP_DIR2);

const CONFIG_PATH = path.resolve(__dirname, './config');
let configBuilder = require("pluginbot/config");
var config = async function(){
    let pluginConfigs = await configBuilder.buildClientConfig(CONFIG_PATH);
    let pluginMap = await configBuilder.buildClientPluginMap(CONFIG_PATH);
    console.log(pluginMap);
        return [
            {
            entry: {
                ...pluginMap
            },
            output: {
                path: BUILD_DIR + "/plugins",
                publicPath: "/build/plugins/",
                filename: '[name].js',
                chunkFilename : '[name]-[id].js',
                library : ["Pluginbot", "[name]"],
                libraryTarget : "umd"


            },

            module: {
                loaders: [
                    {
                        test: /\.jsx?/,
                        loader: 'babel-loader'
                    },

                ]
            },
            plugins: [

                // new webpack.optimize.UglifyJsPlugin({
                //     compress: {
                //         warnings: false
                //     }
                // }),
                // new webpack.DefinePlugin({
                //     'process.env': {
                //         NODE_ENV: JSON.stringify('production')
                //     }
                // })

            ]
        },
        {
            entry: {
                "bundle": [ APP_DIR + '/index.jsx'],
            },
            output: {
                path: BUILD_DIR,
                publicPath: "/build/",
                filename: '[name].js',
                chunkFilename : '[name]-[id].js',


            },
            //todo : move this to context replacement
            externals: {
                pluginbot_client_config: JSON.stringify(pluginConfigs),


            },


            module: {
                loaders: [
                    {
                        test: /\.jsx?/,
                        include : APP_DIR,
                        loader: 'babel-loader'
                    },

                    {
                        test: /\.js?/,
                        include: APP_DIR2,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.css$/,
                        loader: "style-loader!css-loader"
                    },

                ]
            },
            plugins: [
                new webpack.ContextReplacementPlugin(/PLUGINBOT/, (context) => {
                    context.request = BUILD_DIR + "/plugins";
                }),
            ]
        },

    ]

};


module.exports = config;
