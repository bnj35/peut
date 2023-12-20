//import wasm from "vite-plugin-wasm";
//import topLevelAwait from "vite-plugin-top-level-await";
const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
  root: './',
  publicDir: './public/',
  base: './',
  assetsInclude: ['**/*.glb','**/*.fbx','assets/3d/**/*'],
  server:
    {
      host: true,
      open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
  build:
    {
      emptyOutDir: true,
      sourcemap: true
    },
  resolve: {
    alias: {
      '@assets': '/assets',
      '@js': '/js',
      '@shaders': '/shaders',
    }
  },
}