angular.module('main', ['submodule'])
    .constant('testConstant', 'from main');

angular.module('submodule', [])
    .constant('testConstant', 'from submodule');