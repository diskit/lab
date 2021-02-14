import { singleton } from "tsyringe";

@singleton()
export class TaskStorage {

  private readonly _values: Task[] = []

  getAll(): Task[] { 
    return this._values;
  }

}

export type Task = {
  id: string,
  name: string,
  deadline?: string
}