const { build } = require('esbuild');
const { copyStaticFiles } = require('esbuild-copy-static-files');

console.log('esbuild building ...');

build({
  entryPoints: ['app.jsx'],
  bundle: true,
  outfile: 'build/app.js',
  loader: { '.js': 'jsx' },
//   plugins: [
//     copyStaticFiles({
//       src: './index.html',
//       dest: './build'
//     })
//   ]
}).catch(() => process.exit(1));
