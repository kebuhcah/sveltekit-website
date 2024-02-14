<script>
    export let content=""

    export let itemHeight
</script>

<div class="grid-item" bind:clientHeight={itemHeight}>
    {content}
</div>

<style>
    .grid-item {
        border-width: 1px;
        border-style: solid;
        margin: 0.5rem;
        padding: 0.5rem;
    }
</style>