appDirectives.directive('tag', function() {
  return {
    scope: {
      quantity: '=quantity'
    },
    templateUrl: 'app/directives/tag/tag.html'
  };
});