<script>
    export let columns = 3;

    export let items = [];
    let itemHeights = [...Array(items.length)]
    $: itemColumns = arrangeColumns(itemHeights) //[...Array(items.length)].map((_,idx)=>idx % columns)

    //$: console.log(itemHeights)
    function arrangeColumns(heights) {
        let columnHeights = {}
        for (let i=0; i<columns; i++) {
            columnHeights[i] = 0
        }

        let result = [];
        for (const h of heights) {
            const height = h ?? 0;

            let shortestColumn = 0;
            let shortestHeight = 100000000;
            for (let i=0; i<columns; i++) {
                const columnHeight = columnHeights[i];
                if (columnHeight < shortestHeight) {
                    shortestHeight = columnHeight;
                    shortestColumn = i;
                }
            }
            result.push(shortestColumn);
            columnHeights[shortestColumn] += height + 5;
        }

        return result
    }


</script>

<div class="grid">
    {#each [...Array(columns).keys()] as i}
    <div class="grid-column">
        {#each items as item, j}
            {#if itemColumns[j] == i}
                <div class="grid-item" bind:clientHeight={itemHeights[j]}>
                    {j} {item}
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