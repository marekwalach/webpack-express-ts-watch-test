const path = require('path');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = () => {
    return {
        entry: './src/app.ts',
        mode: 'development',
        target: 'node',
        watch: true,
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'build')
        },
        module: {
            rules: [
                {
                    test: /\.ts?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        plugins: [
            new WebpackShellPluginNext({
                onBuildEnd: {
                    scripts: ['npx nodemon build/app.js']
                }
            })
        ]
    }
};
