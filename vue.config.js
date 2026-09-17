const webpack = require('webpack')

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
            }),
        ],
    },
}
