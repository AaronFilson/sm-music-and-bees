import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: isGitHubPages ? 'https://aaronfilson.github.io' : 'https://www.sweetmarilyn.org',
  base: isGitHubPages ? '/sm-music-and-bees' : '/',
  integrations: [tailwind()],
});
