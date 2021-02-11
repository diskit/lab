<script lang='ts'>
import {onMount} from 'svelte';

let count: number = 0;
onMount(() => {
  console.log('mounted');
});
</script>
  
<style lang="scss">
  .container {
    display: grid;
    grid-template-rows: 100px;
    grid-template-columns: 100px 1fr;
  }
</style>
  

<h1>Grid</h1>
<div class="container">
  {#each Array(10) as _, i}
    <div>{i+1}</div>
  {/each}
</div>

  