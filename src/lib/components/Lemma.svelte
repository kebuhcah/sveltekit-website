<script>
	export let language;

	export let latin;
	export let script;

	import { getContext } from 'svelte';
	const lemmaDisplaySettings = getContext('lemmaDisplaySettings');

	let showConfig = false;
	const mouseoutHandler = () => (showConfig = false);
</script>

<span
	class="lemma"
	on:mousedown={() => (showConfig = !showConfig)}
	on:mouseout={mouseoutHandler}
	on:blur={mouseoutHandler}
	style="color: {$lemmaDisplaySettings[language]?.color}"
>
	<i>
		{#if $lemmaDisplaySettings[language]?.default != 'script'}
			{latin}
		{:else}
			{script}
		{/if}
	</i>
	{#if showConfig}
		<span class="config">config box here!</span>
	{/if}
</span>

<style>
	.lemma {
		position: relative;
		cursor: pointer;
	}

	.config {
		position: absolute;
		width: 100px;
		border-style: solid;
		top: 110%;
		left: 10%;
	}
</style>
