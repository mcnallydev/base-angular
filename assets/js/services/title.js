app.factory('titleService', function($rootScope) {	
  var titleService = {};
  titleService.title = '';
  titleService.prepForBroadcast = function(title) {
    this.title = title;
    this.broadcastItem();
  };
  titleService.broadcastItem = function() {
    $rootScope.$broadcast('handleTitleBroadcast');
  };
  return titleService;
});
