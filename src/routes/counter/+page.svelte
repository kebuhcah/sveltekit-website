<script>
	import Counter from '../Counter.svelte';
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Counter" />
</svelte:head>

<section>
	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
