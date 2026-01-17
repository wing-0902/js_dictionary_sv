import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json' assert { type: 'json' };
import license from 'vite-plugin-license';
import path from 'path';

export default defineConfig({
  plugins: [
    sveltekit(),
    license({
      thirdParty: {
        output: {
          file: path.resolve(__dirname, 'src/lib/data/license-dat.json'),
          template(dependencies) {
            return JSON.stringify(dependencies, null, 2);
          },
        },
      },
    }),
  ],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
    __APP_NAME__: JSON.stringify(pkg.name)
  },
  build: {
    license: true
  }
});
