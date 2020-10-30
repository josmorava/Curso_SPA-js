const patch = require('path'); //forma de moverse entre archivos
const HtmlWebpackPlugin = require('html-webpack-plugin');//

module.exports = {
    //entrada- archivo de entrada
    entry:'./src/index.js',
    output: { //Direccion donde se copilara todos los resultados
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module:{
        rules: [
            {
                test: /\.js?$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin([
            {
               injecy: true,
               template: './public/index.html',
               filename: './index.html' 
            }
        ])
    ]
    
}

