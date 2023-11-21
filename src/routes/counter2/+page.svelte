<script>
	import Counter from '../../components/Counter.svelte';
</script>

<svelte:head>
	<title>Counter</title>
	<meta name="description" content="Counter what the heck" />
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
