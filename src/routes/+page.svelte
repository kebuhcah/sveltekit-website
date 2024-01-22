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
<h1 class="title">Sun Language Theories</h1>
<h2 class="title">by Kevin Fei Sun</h2>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />

<style>
	.title {
		text-align: center;
		margin: 0.2rem;
	}
</style>
