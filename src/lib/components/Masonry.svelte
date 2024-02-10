<script>
    export let columns = 3;

    export let items = [];
    $: itemHeights = [...Array(items.length)]
    $: itemColumns = [...Array(items.length)].map((_,idx)=>idx % columns)

</script>

<div class="grid">
    {#each [...Array(columns).keys()] as i}
    <div class="grid-column">
        {#each items as item, j}
            {#if itemColumns[j] == i}
                <div class="grid-item">
                    {item}
                </div>
            {/if}
        {/each}
    </div>
    {/each}
</div>

<style>
    .grid {
        display: flex;
        justify-content: space-around;
    }

    .grid-column {
        display: flex;
        flex-direction: column;
        width: 33%
    }

    .grid-item {
        border-width: 1px;
        border-style: solid;
        margin: 0.5rem;
        padding: 0.5rem;
    }
</style>