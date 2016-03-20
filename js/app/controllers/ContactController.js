function ContactController() {
  var vm = this;

  vm.name = 'Doc Brown';
  vm.email = 'doc@aol.com';
  vm.phone = '555-987-6541';

  vm.changeName = function () {
    vm.name = 'The Crazy Wild-Eyed Scientist';
  };
}

angular
	.module('app')
	.controller('ContactController', ContactController);
