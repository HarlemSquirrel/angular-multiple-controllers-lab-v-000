function StaffController() {
  var vm = this;

  vm.name = 'Marty McFly';
  vm.email = 'marty@msn.net';
  vm.phone = '555-778-8994';
}

angular
	.module('app')
	.controller('StaffController', StaffController);
