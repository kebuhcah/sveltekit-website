<script>
	import Masonry from '$lib/components/Masonry.svelte';
	import PostListMasonryItem from '$lib/components/PostListMasonryItem.svelte';

	export let posts = [];
</script>

<Masonry items={posts} component={PostListMasonryItem} />