import 'dart:async';

import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';

@Component(
  selector: 'access-control',
  templateUrl: 'access_control_component.html',
  directives: [
    NgIf,
  ],
  providers: [],
)
class AccessControlComponent implements OnInit {
  @Input()
  bool canRender;

  @override
  void ngOnInit() {}
}
