# Change plugin name :

<seo-plugin> to <own-plugin-name>

# Add this file to root ./config/plugins.js

module.exports = {
'seo-plugin': {
enabled: true,
resolve: './src/plugins/seo-plugin'
},
}

# Add below lines in root package.json inside script{}

"build-plugin": "yarn run build-seo-plugin",
"build-seo-plugin": "cd src/plugins/seo-plugin && yarn install && yarn link && cd ../../.. && yarn link seo-plugin"

# Run following command

yarn install
yarn build-plugin
yarn build
yarn develop --watch-admin
