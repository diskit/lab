import { Task, TaskId, Tasks, Title } from "../domain/task";
import { TaskStorage } from "../driver/taskStorage";
import type { TaskPort } from "../usecase/taskUsecase";
import { injectable } from "tsyringe";

@injectable()
export class TaskGateway implements TaskPort {

  constructor(private readonly storage: TaskStorage) {}

  async findAll(): Promise<Tasks> {
    return new Tasks([new Task(new TaskId('1'), new Title('title'))]);
  }
}