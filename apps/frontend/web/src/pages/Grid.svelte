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
    transition: 2s;
    grid-template-rows: 64px auto;
    grid-template-columns: 100px auto 280px;
    grid-template-areas: 
      "header header header"
      "menu main-content sub-content";
  }
  
  .header {
    background: #000;
    color: #fff;
    grid-area: header;
  }

  .menu {
    background: #333;
    color: #ddd;
    grid-area: menu;
  }

  .main-content {
    grid-area: main-content;
  }

  .sub-content {
    grid-area: sub-content;
    background: #333;
    color: #ddd;
  }
</style>
<div class="content">
  <h1>Grid</h1>
  <div class="container">
    <div class="header">header</div>
    <div class="menu">menu</div>
    <div class="main-content">main-content</div>
    <div class="sub-content">sub-content</div>
  </div>
</div>

  