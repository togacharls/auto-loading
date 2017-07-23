(function(){
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length-1].src;


    angular.module("autoLoading", [])
        .controller("autoLoadingCtrl", ['$http', autoLoadingCtrl])
        .directive("autoLoading", autoLoading)
    ;

    function autoLoading(){
        return {
            controller: "autoLoadingCtrl",
            controllerAs: 'al',
            templateUrl: currentScriptPath.replace('auto-loading.js', 'auto-loading.html'),
            bindings: {
               "noLoad": []
            }
        };
    }
    function autoLoadingCtrl($http){
        var al = this;
        al.pendingRequests = $http.pendingRequests;
        al.showLoading = showLoading;

        function showLoading(){
            return al.pendingRequests.length || (al.pendingRequests.length && al.noLoad.indexOf(al.pendingRequests[0].url) > -1)? false : true;
        }
    }
})();