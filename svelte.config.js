import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess'
import rehypeSectionize from '@hbsnow/rehype-sectionize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import addClasses from 'rehype-class-names'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess({
			scss: {
				// Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
				prependData: `@use 'src/lib/assets/scss/vars';`
			},
		}),
		mdsvex({
			// The default mdsvex extension is .svx; this overrides that.
			extensions: ['.md'],

			remarkPlugins: [remarkDirective, remarkDirectiveRehype],

			rehypePlugins: [
				rehypeSectionize,
				// Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
				rehypeSlug,
				rehypeAutolinkHeadings,
				[addClasses, {
					h5: 'masonry-grid',
					h6: 'masonry-grid-item'
				}]
			],
		}),
	],

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x'
		}),
		prerender: {
			entries: [
				'*',
				'/api/posts/page/*',
				'/blog/category/*',
				'/blog/category/languages',
				'/blog/category/*/page/',
				'/blog/category/*/page/*',
				'/blog/category/page/',
				'/blog/category/page/*',
				'/blog/page/',
				'/blog/page/*'
			]
		}
	}
};

export default config;