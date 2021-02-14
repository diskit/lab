<script lang='typescript'>
	import {onMount} from 'svelte';
import { container } from 'tsyringe';
import { TaskViewState } from './presenter/taskState';
import { TaskUsecase } from './usecase/taskUsecase';

	
	onMount(() => {
		const usecase = container.resolve(TaskUsecase);
		usecase.findAll();
	});
	const state = container.resolve(TaskViewState);
	const tasks = state.value;
</script>
  
<style>
</style>
  
<div class="App">
	{#each $tasks as task, _}
		<div>{task.value}</div>
	{/each}
</div>
  