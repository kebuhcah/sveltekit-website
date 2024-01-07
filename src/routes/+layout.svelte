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

	const lemmaDisplaySettings = writable();

	lemmaDisplaySettings.set({
		'ara': { color: 'red'},
		'amh': { color: 'orange'},
		'heb': { color: 'blue'}
	});

	setContext('lemmaDisplaySettings', lemmaDisplaySettings);
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>This blog is under construction. Visit <a href="https://medium.com/sunlanguagetheories" target="_blank">Sun Language Theories</a> on Medium.</p>
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
		max-width: 72rem;
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

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
