
<script lang='ts'>

  const justifyContent = [
    'center',
    'space-evenly',
    'space-around',
    'space-between'
  ]
  const alignItems = [
    'flex-start',
    'flex-end',
    'stretch',
    'center'
  ]
  let selectedAlignItems = alignItems[0];
  let selectedJustifyContent = justifyContent[0];
  let blockProperty = '';

  const onSelectBlock = (event: Event) => {
    const element = event.target as Element;
  }
</script>
  
<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  .item {
    width: 10%;
    border: 1px solid #ccc;
    border-radius: 4px;

    @for $i from 1 to 6 {
      &:nth-child(#{$i}) {
        height: #{40+ 10 * $i}px;
      }
    }
  }

  .control {
    display: flex;
    gap: 16px;

    .control-item {
      .property {
        margin-bottom: 4px;
        font-size: 10px;
        color: #999;
      }
    }
  }
</style>
  

<h1>flex</h1>

<div class="control">
  <div class="control-item">
    <div class="property">align-items</div>
    <select bind:value="{selectedAlignItems}">
      {#each alignItems as value, i}
        <option value="{value}">{value}</option>
      {/each}
    </select>
  </div>
  <div class="control-item">
    <div class="property">justify-content</div>
    <select bind:value="{selectedJustifyContent}">
      {#each justifyContent as value, i}
        <option value="{value}">{value}</option>
      {/each}
    </select>
  </div>

</div>
<div class="container" style="justify-content: {selectedJustifyContent}; align-items: {selectedAlignItems}">
  {#each Array(5) as _, i}
    <div class="item" on:click="{onSelectBlock}">{i + 1}</div>
  {/each}
</div>
<div>
  {blockProperty}
</div>

  