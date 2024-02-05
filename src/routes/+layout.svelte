<script>
	import '$lib/assets/scss/global.scss'
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '$lib/vitals';
	import Header from './Header.svelte';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data;

	$: if (browser && data?.analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId: data.analyticsId
		});
	}

	setContext('lemmaDisplaySettings', {
		'ara': writable({ color: 'lime', primary: 'script'}),
		'amh': writable({ color: 'tomato', primary: 'latin'}),
		'heb': writable({ color: 'cyan', primary: 'script'}),
		'syc': writable({ color: 'magenta', primary: 'latin'})

	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 96rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	} 

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
