const path = require("path");
const webpack = require("webpack");
require('dotenv').config();
const dotenvwebpack = require('dotenv-webpack');

module.exports = {
    // Puntos de entrada del empaquetado
    entry: {
        reactcomponents: path.resolve(__dirname, "src/index.js")
    },
   //Aquí se define los criterios de salida del empaquetado, y el empaquetado resultado
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/index.js'
    },
    devServer: {
        // obtiene el puerto del archivo de variables de entorno
        port: process.env.DEV_PORT,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                //loader para cargar los estilos e inyectarlos en el html
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                  //Aquí se define como se empaquetan las imágenes
                  loader: 'url-loader',
                  options: {
                    limit: 1000000,
                    fallback: 'file-loader',
                    name: 'images/[name].[ext]',
                  }
                }
            },
            {
                test: /\.md$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        // carga las variables de entorno para usar en el backend
        new dotenvwebpack(),
        // permite la recarga caliente, ver cambios sin recargar la página
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        // permite importar un archivo sin agregar su extensión, al menos las enlistadas
        extensions: ["*", ".js", ".jsx"],
          //Aquí se crean rutas abreviadas (alias) para desarrollo
        alias: {
            Commons: path.resolve(__dirname,'src/components/commons/'),
            Images: path.resolve(__dirname,'src/images/')
        }
    },
};
