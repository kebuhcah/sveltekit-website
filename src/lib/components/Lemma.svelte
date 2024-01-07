<script>
	export let language;

	export let latin;
	export let script;

	let latinWidth;
	let scriptWidth;

	import { getContext } from 'svelte';
	const lemmaDisplaySettings = getContext('lemmaDisplaySettings');

	let primary = $lemmaDisplaySettings[language]?.primary;
	let color = $lemmaDisplaySettings[language]?.color;

	let showConfig = false;
	const mouseoutHandler = () => (showConfig = false);
</script>

<span
	class="lemma"
	on:mousedown={() => (showConfig = !showConfig)}
	on:mouseout={mouseoutHandler}
	on:blur={mouseoutHandler}
	style="color: {color}"
>
	<span
		class="layer"
		class:floating={latinWidth <= scriptWidth}
		class:spanning={latinWidth > scriptWidth}
		class:primary={primary != 'script'}
		class:secondary={primary == 'script'}
	>
		<span class="has-width" bind:clientWidth={latinWidth}>{latin}</span>
	</span>
	<span
		class="layer"
		class:floating={latinWidth > scriptWidth}
        class:spanning={latinWidth <= scriptWidth}
		class:primary={primary == 'script'}
		class:secondary={primary != 'script'}
	>
		<span class="has-width" bind:clientWidth={scriptWidth}>{script}</span>
	</span>

	{#if showConfig}
		<span class="config">config box here!</span>
	{/if}
</span>

<style>
	.lemma {
		position: relative;
		cursor: pointer;
		white-space: nowrap;
	}

	.config {
		position: absolute;
		min-width: 100px;
        padding: 1em;
		border-style: solid;
        border-color: black;
        border-width: 1px;
        color: white;
		top: 2em;
		left: 10%;
        background-color: grey;
	}

    /* inline elements have no clientWidth, need this for width adjustment to work */
    .has-width {
        display: inline-block;
    }

	.layer.spanning {
		position: relative;
	}

	.layer.floating {
		position: absolute;
		left: 0;
        right: 0;
        text-align: center;
        display: inline-block; /* needed for centering */
	}

	.layer.primary {
		border-style: solid;
        border-width: 1px;
	}

	.layer.secondary {
		opacity: 0.2;
	}
</style>
