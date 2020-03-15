appController.controller('PestPointingFormController', ['$uibModalInstance', 'PestPointing', function ($uibModalInstance, PestPointing) {
  let vm = this;

  vm.pestPointing = {}

  vm.save = function() {
    if (vm.form.$valid) {
      vm.pestPointing.datetime = new Date();
      PestPointing.save(vm.pestPointing, function() {
        $uibModalInstance.close();
      });
    }
  }

  vm.close = function() {
    $uibModalInstance.dismiss('cancel');
  }
}]);