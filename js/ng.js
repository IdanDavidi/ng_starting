/**
 * Created by idan on 19/07/15.
 */
var ngApp = angular.module('AngularApp', ['ngRoute']);
var controllers = {};

ngApp.controller(controllers);

ngApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'peopleListController',
            templateUrl: 'Partials/View1.html'
        })
        .when('/view2',
        {
            controller: 'peopleListController',
            templateUrl: 'Partials/View2.html'
        })
        .otherwise(
        {
            redirectTo: '/'
        });
});

ngApp.factory('peopleListFactory', function() {
    // Creates the initial people list
    var peopleList = [
        {name:'Idan', city:'Tel Aviv'},
        {name:'Or', city:'Haifa'},
        {name:'Nitzan', city:'Or Yehuda'},
        {name:'Grisha', city:'Holon'}
    ];

    // Creates the factory to return
    var factory = {};

    // Creates the getPeople function of the factory
    factory.getPeopleList = function() {
        return peopleList;
    };

    factory.setPeopleList = function (peopleList1) {
        peopleList = peopleList1;
    };

    // Returns the people list factory.
    return factory;
});

controllers.peopleListController = function($scope, peopleListFactory) {
    $scope.peopleList = peopleListFactory.getPeopleList();

    // Adds the customers localy
    $scope.addCustomer = function () {
        $scope.peopleList.push(
            {
                name: $scope.newCustomer.name,
                city: $scope.newCustomer.city
            });
    };
};


