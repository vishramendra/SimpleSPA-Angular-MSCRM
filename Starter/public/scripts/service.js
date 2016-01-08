/**
 * Created by avmin1 on 4/01/2016.
 */
'use strict';

/* Services */

var crmServices = angular.module('crmServices', ['ngResource']);

var organizationUri = "https://learncrmonline2016.crm6.dynamics.com/api/data/v8.0/";

crmServices.factory('Accounts', ['$resource',
    function($resource){
        var orgUrl = organizationUri +'accounts?$select=name,address1_city,telephone1,websiteurl,entityimage_url,accountid&$top=10';
        var defaultParams = {};
        var actions = {
            query:{
                method:'GET',
                url: orgUrl+'&$filter=startswith(name, \':search\')'
            },

            get:{
                method:'GET',
                url:organizationUri+'accounts(:accountid)'
            },
            update:{
                method:'PATCH',
                url:organizationUri+'accounts(:accountid)'
            }
        };
        return $resource(organizationUri, defaultParams, actions);
    }]);
