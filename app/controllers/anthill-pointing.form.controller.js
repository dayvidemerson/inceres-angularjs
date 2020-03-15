appController.controller('AnthillPointingFormController', ['$uibModalInstance', 'AnthillPointing', function ($uibModalInstance, AnthillPointing) {
  let vm = this;

  vm.anthillPointing = {}

  vm.save = function() {
    if (vm.form.$valid) {
      vm.anthillPointing.datetime = new Date();
      AnthillPointing.save(vm.anthillPointing, function() {
        $uibModalInstance.close();
      });
    }
  }

  vm.close = function() {
    $uibModalInstance.dismiss('cancel');
  }
}]);