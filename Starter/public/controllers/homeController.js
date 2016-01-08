/** 
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/
    'use strict'
var crmControllers = angular.module('crmControllers', ['crmServices']);

var crmUrl = 'https://learncrmonline2016.crm6.dynamics.com'

crmControllers.controller('HomeController', ['$scope','Accounts',function($scope,Accounts){
     Accounts.query(function(response){
         $scope.accounts = response.value;
         $scope.crmUrl = crmUrl;
         $scope.accountId = $scope.accounts.accountId;

         angular.forEach($scope.accounts, function(value, key){
             {
                 if(value.entityimage_url==null)
                 {
                     $scope.accounts[key].entityimage_url =  'img/default_profile_image.png';
                 }
                 else{
                     $scope.accounts[key].entityimage_url =  crmUrl+ value.entityimage_url;
                 }
             }
         })
     });
    $scope.searchText='';

    $scope.inputChanged=function(){
      Accounts.query({search:$scope.searchText}, function(response){
            $scope.accounts = response.value;
          angular.forEach($scope.accounts, function(value, key){
              {
                  if(value.entityimage_url==null)
                  {
                      $scope.accounts[key].entityimage_url =  'img/default_profile_image.png';
                  }
                  else{
                      $scope.accounts[key].entityimage_url =  crmUrl+ value.entityimage_url;
                  }
              }
          })
        });
    }
}]);


crmControllers.controller('AccountEditCtrl',['$scope','$routeParams','$location','Accounts', function($scope,$routeParams,$location,Accounts){
     $scope.account = Accounts.get({accountid:$routeParams.accountid}, function(data){
        $scope.name = data.name;
         $scope.address1_city = data.address1_city;
         $scope.telephone1 = data.telephone1;
     })

    $scope.save=function(){
        var updateAccount = {name:$scope.name , address1_city:$scope.address1_city, telephone1:$scope.telephone1 };
        Accounts.update({accountid:$routeParams.accountid}, updateAccount, function(successCallBack){
            if(successCallBack.$resolved)
            {
                $location.path('views/home.html');
            }
            else
            {

            }
        });
    };

    $scope.back=function(path){
        $location.path(path);
    };
} ]);



// *********************************************************
//
// O365-Angular-GettingStarted, https://github.com/OfficeDev/O365-Angular-GettingStarted
//
// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// *********************************************************