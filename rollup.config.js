import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    babel(),
  ],
  format: 'umd',
  // bundle options would need to go here too
  output: {
    file: 'dist/index.js',
    name: '@mqschwanda/firebase-container',
    exports: 'named',
    sourceMap: true
  },

  // Rollup will only resolve relative module IDs by default. This means that an
  // import statement won't result in moment being included in your bundle –
  // instead, it will be an external dependency that is required at runtime. If
  // that's what you want, you can suppress this warning with the external
  // option, which makes your intentions explicit
  // see: https://github.com/rollup/rollup/wiki/Troubleshooting#treating-module-as-external-dependency
  external: [
    'react', // <-- suppresses the warning
  ],
  globals: {
    'react': 'React',
  },
}
