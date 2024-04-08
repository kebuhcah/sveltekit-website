<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
</script>

<svelte:head>
	<title>Sun Language Theories</title>
	<meta name="description" content="Sun Language Theories" />
</svelte:head>

<h1 class="title">𐩳𐩢𐩺</h1>
<h1 class="title">𝕾𝖚𝖓 𝕷𝖆𝖓𝖌𝖚𝖆𝖌𝖊 𝕿𝖍𝖊𝖔𝖗𝖎𝖊𝖘</h1>
<h2 class="title">by 𝕂𝕖𝕧𝕚𝕟 𝔽𝕖𝕚 𝕊𝕦𝕟</h2>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />

<style>
	h1.title {
		text-align: center;
		margin: 0.2rem;
	}

	h2.title {
		text-align: center;
		margin: 1rem;
	}
</style>
