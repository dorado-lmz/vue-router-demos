module.exports = {
    configureWebpack: () => {
        return {
            resolve: {
                alias: {
                    vue$: 'vue/dist/vue.js',
                    'vue-router': 'vue-router/dist/vue-router.esm.js'
                }
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: [
                            {
                                loader: "babel-loader"
                            }
                        ]
                    }
                ]
            }
        };
    }
};
