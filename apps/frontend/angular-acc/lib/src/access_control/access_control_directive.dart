import 'dart:html';

import 'package:angular/angular.dart';

@Directive(selector: '[accessControl]')
class AccessControlDirective implements OnInit {
  final Element el;

  @Input()
  AccessableUser accessControl = AccessableUser.Normal;

  AccessControlDirective(this.el);

  @override
  void ngOnInit() {
    print(accessControl);
    if (accessControl == AccessableUser.EarlyAccess) {
      el.remove();
    }
  }
}

enum AccessableUser { Normal, EarlyAccess }
