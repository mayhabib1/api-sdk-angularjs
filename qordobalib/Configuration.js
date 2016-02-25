/**
 *QordobaLib
 *
 *   by Qordoba BETA v2.0 on 02/25/2016
 */

'use strict';
angular.module('QordobaLib',[]).factory('Configuration', function() {
    return {
        //The base Uri for API calls
        BASEURI : "https://developers.qordoba.com",

        //The username to use with basic authentication
        //TODO: Replace the basicAuthUserName with an appropriate value
        basicAuthUserName : "TODO: Replace",

        //The password to use with basic authentication
        //TODO: Replace the basicAuthPassword with an appropriate value
        basicAuthPassword : "TODO: Replace"

    };
});

