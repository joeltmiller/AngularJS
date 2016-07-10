/**
 * Created by joelmiller on 8/18/15.
 */
var app = angular.module('serviceExampleApp', []);

app.controller('MyController', function($scope, FoodService, PetService, HomeStateService) {
    $scope.favoriteFoods = FoodService.favoriteFoods;
    $scope.pets = PetService.pets;
    $scope.homeState = HomeStateService.homeState;
});

app.factory('FoodService', function(){

    //Private
    var getFoods = function(){
        return "Sesame Chicken and Fried Rice";
    };

    //Public
    var publicApi = {
        favoriteFoods: getFoods(),
        leastFavorite: "Michael's chickens"
    };

    return publicApi;

});

app.factory('PetService', function(){

    //Private
    var getPets = function() {
        return "Charlie & Sweet Dee";
    };

    //Public
    var publicApi = {
        pets : getPets()
    };

    return publicApi;



});

app.factory("HomeStateService", function() {

    //Private
    var getHomeState = function() {
        return "Iowa";
    };

    //Public
    var publicApi = {
        homeState : getHomeState()
    };

    return publicApi;
});
