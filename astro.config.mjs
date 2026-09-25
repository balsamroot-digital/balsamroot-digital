// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      // Read-only access to the private Tiny Grove repo, so the build can pull
      // the app's privacy policy text. See src/data/tiny-grove-privacy.ts.
      TINY_GROVE_GITHUB_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
