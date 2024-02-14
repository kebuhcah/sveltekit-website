<script>
    export let hidden=false
    export let slug=''
    export let title='lol'
    export let excerpt='lorem ipsum dolor sit amet'
    export let categories=[]

    export let itemHeight
</script>

<div class="post-card" class:hidden={hidden} bind:clientHeight={itemHeight}>
    <article>
        <a href="/blog/{slug}">
            <!--<img
                src={post.coverImage}
                alt=""
                width={post.coverWidth}
                height={post.coverHeight}
                style="ratio: {post.coverWidth} / {post.coverHeight}"
            />-->
            <h2>
                {title}
            </h2>
        </a>
    </article>
    <p>{excerpt}</p>
    <hr />
    {#if categories}
    <div class="categories">
        {#each categories as category}
            <span class="category">
                <a href="/blog/category/{category}/">
                    {category}
                </a>
            </span>
        {/each}
    </div>
    {/if}
</div>

<style>
    .post-card {
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