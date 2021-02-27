<script lang='ts'>
</script>
  
<style lang="scss">

.content {
  height: 100vh;
}

.container {
  margin-top: 16px;
  height: 200px;
  overflow-y: auto;
}

.block {
  padding: 16px 8px;
  margin-bottom: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
}

:global(.block.sticky) {
  position: sticky;
  top: 0;
}

</style>

<div class="content">
  <h1>position: sticky</h1>
  <div class="container">
    {#each Array(100) as _, i} 
      <div class="{i % 3 == 0 ? 'sticky block' : 'block'}">{i + 1}</div>
    {/each}
  </div>
</div>