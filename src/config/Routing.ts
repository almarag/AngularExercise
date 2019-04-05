export default ['$routeProvider', '$locationProvider', ($routeProvider: any, $locationProvider: any) => {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/about', {
        templateUrl: 'about.html'
    })
    .when('/services', {
        templateUrl: 'services.html'
    })
    .when('/directives', {
        templateUrl: 'directives.html'
    })
    .when('/redux', {
        templateUrl: 'redux.html'
    });

    $locationProvider.html5Mode(true);
}];
