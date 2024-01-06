<script>
    export let language;

    import { getContext } from 'svelte';

    const lemmaDisplaySettings = getContext('lemmaDisplaySettings');
</script>

<span class="lemma">
	<slot /> ({language} - {$lemmaDisplaySettings[language]?.color})
</span>

<style>
    
</style>