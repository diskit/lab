
<script lang='ts'>
import { element } from "svelte/internal";



  const justifyContent = [
    'flex-start',
    'flex-end',
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

  const alignSelf = [
    'auto',
    'flex-start',
    'flex-end',
    'center'
  ]

  const justifySelf = [
    'auto',
    'flex-start',
    'flex-end',
    'center'
  ]

  let selectedElement: Element;
  let selectedAlignItems = alignItems[0];
  let selectedJustifyContent = justifyContent[0];
  let selectedAlignSelf = '';
  let selectedJustifySelf = '';

  const onSelectBlock = (event: Event) => {
    document.querySelectorAll('.selected').forEach(v => v.classList.remove('selected'));
    const element = event.target as Element;
    selectedElement = element;
    selectedElement.classList.add('selected');
  }

  $: onChangeSelectedElement(selectedElement);

  $: onChangeSelfStyle(selectedAlignSelf, selectedJustifySelf);

  const onChangeSelectedElement = (element: Element) => {
    if (!element) {
      return;
    }

    const style = window.getComputedStyle(element);
    [selectedAlignSelf, selectedJustifySelf]= [style.alignSelf, style.justifySelf];
  }

  const onChangeSelfStyle = (a: string, b: string) => {
    if (!selectedElement) return;
    selectedElement.setAttribute('style', `align-self: ${a}; justify-self: ${b}`);
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
    cursor: pointer;

    @for $i from 1 to 6 {
      &:nth-child(#{$i}) {
        height: #{40+ 10 * $i}px;
      }
    }

    &:hover {
      background: #efefef;
    }
  }
  :global(.item.selected) {
    background: #f3dcb2 !important;
    border-color: #f1b74a !important;
    cursor: auto !important;
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
<div class="control">
  <div class="control-item">
    <div class="property">align-self</div>
    <select bind:value="{selectedAlignSelf}">
      {#each alignSelf as value, i}
        <option value="{value}">{value}</option>
      {/each}
    </select>
  </div>
  <div class="control-item">
    <div class="property">justify-self</div>
    <select bind:value="{selectedJustifySelf}" disabled>
      {#each justifySelf as value, i}
        <option value="{value}">{value}</option>
      {/each}
    </select>
    <div class="annotation">now working for flex</div>
  </div>
</div>

  