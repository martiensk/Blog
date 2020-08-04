module.exports = {
    transpileDependencies: ['vuetify'],
    pluginOptions: {
        ssr: {
            port: 80,
            entry: (target) => `./src/entry-${target}`,
            favicon: './public/favicon.ico',
            nodeExternalsWhitelist: [
                /\.css$/,
                /\?vue&type=style/,
                /^vuetify/,
                /^highlight.js/,
                /^vue-cli-plugin-vuetify-preset-rally/,
                /^register-service-worker/
            ]
        }
    }
};
