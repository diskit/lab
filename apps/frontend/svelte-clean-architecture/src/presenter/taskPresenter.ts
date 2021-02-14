import type { Task, Tasks } from "../domain/task";
import type { TaskPresenter } from "../usecase/taskUsecase";
import { injectable } from "tsyringe";
import type { TaskViewState } from "./taskState";

@injectable()
export class TaskPresenterImpl implements TaskPresenter {
  constructor(private readonly state: TaskViewState) { }

  setTask(task: Tasks): void {
    this.state.value.set([]);
  }
}