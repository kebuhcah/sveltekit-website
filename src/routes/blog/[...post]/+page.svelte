<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import dayjs from "dayjs";

	export let data;

	const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories, birthtime, mtime } =
		data.meta;
	const { PostContent } = data;
</script>

<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
	<!-- You might want to add an alt frontmatter attribute. If not, leaving alt blank here works, too. 
	<img
		class="cover-image"
		src={coverImage}
		alt=""
		style="aspect-ratio: {coverWidth} / {coverHeight};"
		width={coverWidth}
		height={coverHeight}
	/>-->

	<h1>{title}</h1>

	<div class="text-column">
		<div class="meta">
			<b>Last update:</b>
			{dayjs(mtime).format("MMM D, YYYY ")}
		</div>
		{#if categories}
			<header class="post-header">
				<div class="categories">
					{#each categories as category}
						<span class="category">
							<a href="/blog/category/{category}/">
								{category}
							</a>
						</span>
					{/each}
				</div>
			</header>
		{/if}

		<svelte:component this={PostContent} />		
	</div>
</article>
