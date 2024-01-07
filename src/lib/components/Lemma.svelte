<script>
	export let language;

	export let latin;
	export let script;

	let latinWidth;
	let scriptWidth;
	$: latinWider = latinWidth >= scriptWidth;
	$: scriptWider = latinWidth < scriptWidth;

	import { getContext } from 'svelte';
	const lemmaDisplaySettings = getContext('lemmaDisplaySettings');

	const languageSettings = $lemmaDisplaySettings[language];

	let primary = languageSettings.primary;
	let color = languageSettings.color;

	let configPrimary = primary;

	let showConfig = false;
	const clickHandler = () => (showConfig = true);
	const mouseoutHandler = () => (showConfig = false);
</script>

<span class="component" on:mouseleave={mouseoutHandler} style="color: {color}">
	<span class="lemma" on:mousedown={clickHandler}>
		<span
			class="layer"
			class:floating={scriptWider}
			class:spanning={latinWider}
			class:primary={primary != 'script'}
			class:secondary={primary == 'script'}
		>
			<span class="has-width" bind:clientWidth={latinWidth}>{latin}</span>
		</span>
		<span
			class="layer"
			class:floating={latinWider}
			class:spanning={scriptWider}
			class:primary={primary == 'script'}
			class:secondary={primary != 'script'}
		>
			<span class="has-width" bind:clientWidth={scriptWidth}>{script}</span>
		</span>
	</span>

	{#if showConfig}
		<span class="config" on:blur={mouseoutHandler}>
			<label>
				<input type="radio" bind:group={configPrimary} value={'latin'} />
				Romanized
			</label>
            <br/>
			<label>
				<input type="radio" bind:group={configPrimary} value={'script'} />
				Script
			</label>
		</span>
	{/if}
</span>

<style>
    .component {
		position: relative;
		padding-bottom: 1em;
    }

	.lemma {
		cursor: pointer;
		white-space: nowrap;
	}

	.config {
		position: absolute;
		min-width: 150px;
		padding: 1em;
		border-style: solid;
		border-color: black;
		border-width: 1px;
		color: white;
		top: 1.5em;
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
		/*border-style: solid;*/
		border-width: 1px;
	}

	.layer.secondary {
		opacity: 0.2;
	}
</style>
