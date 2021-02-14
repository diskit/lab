import type { Tasks } from "../domain/task";
import { injectable } from "tsyringe";

@injectable()
export class TaskUsecase {
  // constructor(private readonly port: TaskPort, private readonly presenter: TaskPresenter) { }

  async findAll(): Promise<void> {
    console.log('findAll');
    // this.presenter.setTask(await this.port.findAll());
  }
}

export interface TaskPresenter {
  setTask(task: Tasks): void;
}

export interface TaskPort {

  findAll(): Promise<Tasks>;
}