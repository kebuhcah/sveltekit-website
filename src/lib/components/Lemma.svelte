<script>
	export let language;

	import { getContext } from 'svelte';

	const lemmaDisplaySettings = getContext('lemmaDisplaySettings');

	let showConfig = false;
</script>

<span
	class="lemma"
	on:mousedown={() => (showConfig = !showConfig)}
    on:mouseout={() => showConfig = false}
    on:blur={() => showConfig = false}
	style="color: {$lemmaDisplaySettings[language]?.color}"
>
	<i><slot /></i>
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
