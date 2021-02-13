<script lang='ts'>
import {onMount} from 'svelte';

let count: number = 0;
onMount(() => {
  console.log('mounted');
});
</script>
  
<style lang="scss">

  .content {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .container {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }

  .item {
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  

</style>
<div class="content">
  <h1>Grid</h1>
  <div class="container">
    {#each Array(10) as _, i}
      <div class="item">{i + 1}</div>
    {/each}
  </div>
</div>

  