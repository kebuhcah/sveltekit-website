<svelte:head>
	<title>Blog Test</title>
	<meta name="description" content="Blog Test" />
</svelte:head>

<h1>𐩳𐩢𐩺</h1>

<div class="grid">
	<div class="card">
		<div class="card-header">
			<h1>𐩳</h1>
		</div>
		<div class="card-body">Sun.</div>
	</div>
	<div class="card">
		<div class="card-header">
			<h1>𐩢</h1>
		</div>
		<div class="card-body">Language.</div>
	</div>
	<div class="card">
		<div class="card-header">
			<h1>𐩺</h1>
		</div>
		<div class="card-body">Theories.</div>
	</div>
</div>

<style>
	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 12px;
	}

	.card {
		border: solid;
		width: 100%;
		margin: 0;
	}

	.card-header {
		border: solid;
		margin: 0;
	}

	.card-body {
		border: solid;
		margin: 0;
		padding: 2em;
	}
</style>
