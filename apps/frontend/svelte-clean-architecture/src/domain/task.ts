export class TaskId {
  constructor(readonly value: string) {}
}

export class Title {
  constructor(readonly value: string) {}
}

export class Deadline {
  constructor(readonly value: Date) {}
}

export class Task {
  constructor(readonly id: TaskId, readonly title: Title, readonly deadline?: Deadline){}
}

export class Tasks {
  constructor(readonly values: Task[]) {}
}