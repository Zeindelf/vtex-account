
const babel = require('rollup-plugin-babel');
const pkg = require('./package');

const now = new Date();
const banner = `
/*!!
 * VtexAccount.js v${pkg.version}
 * https://github.com/${pkg.repository}
 *
 * Copyright (c) 2017-${now.getFullYear()} ${pkg.author.name}
 * Released under the ${pkg.license} license
 *
 * Date: ${now.toISOString()}
 */
`;

module.exports = {
    // Export banner
    banner,
    input: 'src/vtex-account.js',
    output: [
        {
            banner: banner,
            file: 'dist/vtex-account.js',
            format: 'umd',
            name: 'VtexAccount',
        },
        {
            banner: banner,
            file: 'dist/vtex-account.common.js',
            format: 'cjs',
        },
        {
            banner: banner,
            file: 'dist/vtex-account.esm.js',
            format: 'es',
        },
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers'],
        }),
    ],
};
