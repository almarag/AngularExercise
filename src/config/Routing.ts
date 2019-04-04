export default ['$routeProvider', '$locationProvider', ($routeProvider: any, $locationProvider: any) => {
    $routeProvider
    .when('/', {
        templateUrl: 'home.html'
    })
    .when('/about', {
        templateUrl: 'about.html'
    });

    $locationProvider.html5Mode(true);
}];
