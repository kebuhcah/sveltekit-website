<script>
    export let language;
</script>

<span class="lemma">
	<slot /> ({language})
</span>

<style>
    .lemma {
        color: red
    }
</style>