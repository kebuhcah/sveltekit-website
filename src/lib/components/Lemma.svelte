<script>
	export let language;

	export let latin;
	export let script;

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
	<span class="layer" class:primary={primary != 'script'} class:secondary={primary == 'script'}><i>{latin}</i></span>
	<span class="layer floating" class:primary={primary == 'script'} class:secondary={primary != 'script'}>{script}</span>

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

	.layer.floating {
		position: absolute;
        left: 0;
	}

	.layer.primary {
		border-style: solid;
		padding: 0px 2px;
	}

    .layer.secondary {
		opacity: 0.2;
	}
</style>
