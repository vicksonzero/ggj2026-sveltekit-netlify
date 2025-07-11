import { remarkSvelteAutoImport } from '@kasisoft/remark-svelte-auto-import';

const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },
  "layout": {
    _: "./src/layouts/default.svelte",
  },
  "remarkPlugins": [remarkSvelteAutoImport],
  "rehypePlugins": []
};

export default config;