/**
 * Created by idan on 19/07/15.
 */
var ngApp = angular.module('AngularApp', []);
var controllers = {};
ngApp.controller(controllers);

controllers.peopleListController = function($scope) {
    $scope.people = [
        {name:'Idan', city:'Tel Aviv'},
        {name:'Or', city:'Haifa'},
        {name:'Nitzan', city:'Or Yehuda'},
        {name:'Grisha', city:'Holon'}
    ];
};


