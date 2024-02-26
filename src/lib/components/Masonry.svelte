<script>
    import BasicMasonryItem from '$lib/components/BasicMasonryItem.svelte';

    export let columns = 3; // ideal # of columns on wide screen
    export let component = BasicMasonryItem;

    let clientWidth

    $: actualColumns = clientWidth === undefined ? columns : (clientWidth > 900 ? columns : clientWidth > 600 ? 2 : 1);

    export let items = [];
    //console.log(items);
    let itemHeights = [...Array(items.length)]
    $: itemColumns = arrangeColumns(itemHeights, actualColumns); 

    function arrangeColumns(heights, cols) {
        //console.log(heights)

        let columnHeights = [...Array(cols)].map(_ => 0)

        let result = [];
        for (const h of heights) {
            const height = h ?? 0;

            let shortestColumn = 0;
            let shortestHeight;
            for (let i=0; i<cols; i++) {
                const columnHeight = columnHeights[i];
                if (shortestHeight == undefined || columnHeight < shortestHeight) {
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
<!-- {clientWidth} -->
<div class="grid" bind:clientWidth>
    {#each [...Array(actualColumns).keys()] as i}
    <div class="grid-column columns-{actualColumns}">
        {#each items as item, j}
            {#if itemColumns[j] == i}
                <svelte:component this={component} {...items[j]} bind:itemHeight={itemHeights[j]} />
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
    }

    .columns-5 {
        width: 20%
    }

    .columns-4 {
        width: 25%
    }

    .columns-3 {
        width: 33%
    }

    .columns-2 {
        width: 50%
    }

    .columns-1 {
        width: 100%
    }
</style>