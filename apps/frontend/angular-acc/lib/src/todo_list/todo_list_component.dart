import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_acc/src/access_control/access_control_directive.dart';
import 'package:angular_acc/src/access_control/access_control_component.dart';
import 'package:angular_components/angular_components.dart';

import 'todo_list_service.dart';

@Component(
    selector: 'todo-list',
    styleUrls: ['todo_list_component.css'],
    templateUrl: 'todo_list_component.html',
    directives: [
      MaterialCheckboxComponent,
      MaterialFabComponent,
      MaterialIconComponent,
      materialInputDirectives,
      AccessControlComponent,
      NgFor,
      NgIf,
      AccessControlDirective,
    ],
    providers: [ClassProvider(TodoListService)],
    exports: [AccessableUser])
class TodoListComponent implements OnInit {
  final TodoListService todoListService;

  List<String> items = [];
  String newTodo = '';

  TodoListComponent(this.todoListService);

  @override
  Future<Null> ngOnInit() async {
    items = await todoListService.getTodoList();
  }

  void add() {
    items.add(newTodo);
    newTodo = '';
  }

  String remove(int index) => items.removeAt(index);
}
