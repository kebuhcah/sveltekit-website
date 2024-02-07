<script>
	export let posts = [];
</script>

<div class="posts-list">
	{#each posts as post}
		<div class="post-card" class:hidden={post.hidden}>
			<article>
				<a href="/blog/{post.slug}">
					<!--<img
						src={post.coverImage}
						alt=""
						width={post.coverWidth}
						height={post.coverHeight}
						style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>-->
					<h2>
						{post.title}
					</h2>
				</a>
			</article>
			<p>{post.excerpt}</p>
			<hr />
			<div class="categories">
				{#each post.categories as category}
					<span class="category">
						<a href="/blog/category/{category}/">
							{category}
						</a>
					</span>
				{/each}
			</div>
		</div>
	{/each}
	</div>

<style>
	.posts-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: start;
	}

	.post-card {
		border-style: solid;
		border-width: 1px;
		border-color: white;

		min-width: 16rem;
		max-width: 20%;

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