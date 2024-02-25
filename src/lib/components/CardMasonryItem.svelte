<script>
	import { parse } from 'marked';

	export let hidden = false;
	export let header = 'Header';
	export let body = 'ወሞተ ፡ ረዓይትኒ ፡ እንተ ፡ ኀበ ፡ ወፅኡ ፡ መንፈሳት ፡ እምነፍስት ፡ ሥጋሆሙ ፡ ለይኩን ፡ ዘይማስን ፡ ዘእንበለ ፡ ኵነኔ ፤ ከማሁ ፡ ይማስኑ ፡ እስከ ፡ ዕለተ ፡ ኵነኔ ፡ ዐባይ ፡ እምዓለም ፡ ዐቢይ ፡ ይትፌጸም ፡ እምትጉሃን ፡ ወረሲዓን ። ወይእዜኒ ፡ ለትጉሃን ፡ እለ ፡ ፈነዉከ ፡ ትስአል ፡ በእንቲአሆሙ ፡ እለ ፡ ቀዲሙ ፡ በሰማይ ፡ ሀለዉ ። ወእእዜኒ ፡ አንትሙሰ ፡ በሰማይ ፡ ሀለውክሙ ፡ ወኅቡኣት ፡ ዓዲ ፡ እተከሥቱ ፡ ለክሙ ፡ ወምኑነ ፡ ምሥጢረ ፡ አእመርክሙ ፡ ወዘንተ ፡ ዜነውክሙ ፡ ለአንስት ፡ በጽንዐ ፡ ልብክሙ ፡ ወበዝንቱ ፡ ምሥጢር ፡ ያበዝኃ ፡ አንስት ፡ ወሰብእ ፡ እኪተ ፡ በዲበ ፡ ምድር ። በሎሙ ፡ እንከሰ ፡ አልብክሙ ፡ ሰላም ።';
	export let links = [];

	export let itemHeight;

	const bodyParsed = parse(body);

</script>

<div class="card" class:hidden bind:clientHeight={itemHeight}>
	<article>
		<h2>
			{header}
		</h2>
	</article>
	<p>{@html bodyParsed}</p>
	{#if links.length}
		<hr />
		<div class="categories">
			{#each links as link}
				<span class="category">
					<a href={link}>
						{link}
					</a>
				</span>
			{/each}
		</div>
	{/if}
</div>

<style>
	.card {
		border-style: solid;
		border-width: 1px;
		border-color: white;

		margin: 0.5rem;
		padding: 0rem 1.5rem;
	}

	.hidden {
		border-color: skyblue;
	}

	.categories {
		display: flex;
		flex-wrap: wrap;
		justify-content: left;
		margin-bottom: 0.5rem;
	}

	hr {
		margin: 0 -1.5rem 0.5rem;
	}
</style>
