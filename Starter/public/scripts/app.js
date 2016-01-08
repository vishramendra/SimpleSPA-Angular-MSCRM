/*
* Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See full license at the bottom of this file.
*/

(function () {
  angular.module('app', [
    	'ngRoute',
	  	'crmControllers',
	  	'AdalAngular',
  ])
	.config(config);
  
  // Configure the routes.
	function config($routeProvider, $httpProvider, adalAuthenticationServiceProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'Accounts',
                requireADLogin:true
            })
			.when('/accounts/:accountid',{
			   templateUrl:'views/account-edit.html',
				controller:'AccountEditCtrl',
			})
            .otherwise({
                redirectTo: '/'
            });
		var endpoints = {
			'https://learncrmonline2016.crm6.dynamics.com': 'https://learncrmonline2016.crm6.dynamics.com'
		};
		adalAuthenticationServiceProvider.init({
			tenant:'learncrmonline2016.onmicrosoft.com',
			clientId:'a738dae7-6904-49f2-b4ec-c41f1c117506',
			cacheLocation:'localStorage',
			endpoints : endpoints
		},$httpProvider);
	};
})();


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
