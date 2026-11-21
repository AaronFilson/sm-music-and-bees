import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://aaronfilson.github.io' : 'https://www.sweetmarilyn.org',
  base: isGitHubPages ? '/sm-music-and-bees' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
