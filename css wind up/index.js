
// parcel
{
   // ...
   "scripts"; {
     "start"; "parcel serve src/index.html --public-url / --dist-dir dist",
     "test"; "echo \"Error: no test specified\" && exit 1"
   }

   // ...
}
// vite
import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
     preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
     },
  },
}

{
  // ...
  "scripts"; {
    "start"; "vite",
    "test"; "echo \"Error: no test specified\" && exit 1"
  }
}