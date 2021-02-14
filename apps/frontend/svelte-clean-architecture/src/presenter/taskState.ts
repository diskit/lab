import { Writable, writable } from "svelte/store";

export class TaskViewState {
  value: Writable<TaskUnit[]> = writable([]);
}

export class TaskUnit {
  constructor(readonly value: string) {}
}
