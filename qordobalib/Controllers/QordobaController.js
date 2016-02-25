/**
  *QordobaLib
  *
  *   by Qordoba BETA v2.0 on 02/25/2016
  */

'use strict';
angular.module('QordobaLib').factory('QordobaController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Creates a new project
         * @param {Project} body    Required parameter: Project creation payload
         *
         * @return {promise<void>}
         */
        createProjects : function(body){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "content-type" : "application/json; charset=utf-8"
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                body : body
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets an organisation's projects
         *
         * @return {promise<mixed>}
         */
        getProjects : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets organisation workflows
         *
         * @return {promise<mixed>}
         */
        getWorkflow : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/workflows";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a workflow
         * @param {string} wfId    Required parameter: Your workflow ID
         *
         * @return {promise<mixed>}
         */
        getWorkflow : function(wfId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/workflows/{wf_id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "wf_id" : wfId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets an organisation's team
         * @param {string} filterQuery    Required parameter: Your filter string
         * @param {string} limit    Required parameter: Your pagination limit
         * @param {string} offset    Required parameter: Your pagination offset
         *
         * @return {promise<mixed>}
         */
        getTeam : function(filterQuery, limit, offset){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/team";
            
            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "filterQuery" : filterQuery,
                "limit" : limit,
                "offset" : offset
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a project's workflow
         * @param {string} languageId    Required parameter: Your language ID
         * @param {string} projectId    Required parameter: Your project ID
         *
         * @return {promise<mixed>}
         */
        getWorkflow : function(languageId, projectId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/languages/{language_id}/workflow";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "language_id" : languageId,
                "project_id" : projectId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets an project's feed
         * @param {string} from    Required parameter: Feed source
         * @param {string} limit    Required parameter: Your pagination limit
         * @param {string} projectId    Required parameter: Your project ID
         *
         * @return {promise<mixed>}
         */
        getWorkflow : function(from, limit, projectId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/feed";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "project_id" : projectId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "from" : from,
                "limit" : limit
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets project's files
         * @param {string} languageId    Required parameter: Your language ID
         * @param {string} limit    Required parameter: Your pagination limit
         * @param {string} offset    Required parameter: Your pagination offset
         * @param {string} projectId    Required parameter: Your project ID
         * @param {string} searchString    Required parameter: Your search string
         *
         * @return {promise<mixed>}
         */
        getFiles : function(languageId, limit, offset, projectId, searchString){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/languages/{language_id}/files";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "language_id" : languageId,
                "project_id" : projectId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "limit" : limit,
                "offset" : offset,
                "search_string" : searchString
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Uploads a project file
         * @param {string} projectId    Required parameter: Your project ID
         *
         * @return {promise<void>}
         */
        createFiles : function(projectId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/files";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "project_id" : projectId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Downloads a project's file
         * @param {string} fileId    Required parameter: Your file ID
         * @param {string} languageId    Required parameter: Your language ID
         * @param {string} projectId    Required parameter: Your project ID
         *
         * @return {promise<mixed>}
         */
        getFiles : function(fileId, languageId, projectId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/languages/{language_id}/files/{file_id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "file_id" : fileId,
                "language_id" : languageId,
                "project_id" : projectId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a file's segments
         * @param {string} fileId    Required parameter: Your file ID
         * @param {string} filter    Required parameter: Your filter string
         * @param {string} languageId    Required parameter: Your language ID
         * @param {string} limit    Required parameter: Your pagination limit
         * @param {string} offset    Required parameter: Your pagination offset
         * @param {string} projectId    Required parameter: Your project ID
         * @param {string} searchString    Required parameter: Your search string
         *
         * @return {promise<mixed>}
         */
        getSegments : function(fileId, filter, languageId, limit, offset, projectId, searchString){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/languages/{language_id}/files/{file_id}/segments";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "file_id" : fileId,
                "language_id" : languageId,
                "project_id" : projectId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "filter" : filter,
                "limit" : limit,
                "offset" : offset,
                "search_string" : searchString
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a segment
         * @param {string} fileId    Required parameter: Your file ID
         * @param {string} languageId    Required parameter: Your language ID
         * @param {string} projectId    Required parameter: Your project ID
         * @param {string} segmentId    Required parameter: Your segment ID
         *
         * @return {promise<mixed>}
         */
        getSegments : function(fileId, languageId, projectId, segmentId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/languages/{language_id}/files/{file_id}/segments/{segment_id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "file_id" : fileId,
                "language_id" : languageId,
                "project_id" : projectId,
                "segment_id" : segmentId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Updates a segment
         * @param {string} fileId    Required parameter: Your file ID
         * @param {string} languageId    Required parameter: Your language ID
         * @param {string} projectId    Required parameter: Your project ID
         * @param {string} segmentId    Required parameter: Your segment ID
         *
         * @return {promise<void>}
         */
        updateSegments : function(fileId, languageId, projectId, segmentId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/languages/{language_id}/files/{file_id}/segments/{segment_id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "file_id" : fileId,
                "language_id" : languageId,
                "project_id" : projectId,
                "segment_id" : segmentId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "PUT",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Adds segments to a file
         * @param {Project} body    Required parameter: Project creation payload
         * @param {string} fileId    Required parameter: Your file ID
         * @param {string} projectId    Required parameter: Your project ID
         *
         * @return {promise<void>}
         */
        createFiles : function(body, fileId, projectId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/files/{file_id}/segments";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "file_id" : fileId,
                "project_id" : projectId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "content-type" : "application/json; charset=utf-8"
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                body : body
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Creates an empty file
         * @param {string} fileName    Required parameter: Your file name
         * @param {string} projectId    Required parameter: Your project ID
         *
         * @return {promise<void>}
         */
        createFiles : function(fileName, projectId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/projects/{project_id}/files/{file_name}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "file_name" : fileName,
                "project_id" : projectId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets an organisation's translation memory
         *
         * @return {promise<mixed>}
         */
        getTm : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Posts an organisation's translation memory
         *
         * @return {promise<void>}
         */
        createTm : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/upload";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a translation memory config
         * @param {string} tmId    Required parameter: Your translation memory ID
         *
         * @return {promise<mixed>}
         */
        getTm : function(tmId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/{tm_id}/config";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "tm_id" : tmId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Updates a translation memory config
         * @param {string} tmId    Required parameter: Your translation ID
         *
         * @return {promise<void>}
         */
        updateTm : function(tmId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/{tm_id}/config";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "tm_id" : tmId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "PUT",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a translation memory
         * @param {string} tmId    Required parameter: Your translation memory ID
         *
         * @return {promise<mixed>}
         */
        getTm : function(tmId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/{tm_id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "tm_id" : tmId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a translation memory's segments
         * @param {string} tmId    Required parameter: Your translation memory ID
         *
         * @return {promise<mixed>}
         */
        getTm : function(tmId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/{tm_id}/segments";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "tm_id" : tmId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Posts a translation memory's term
         *
         * @return {promise<void>}
         */
        createTm : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/add_term";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a translation memory's segment
         * @param {string} id    Required parameter: Your segment ID
         * @param {string} tmId    Required parameter: Your translation memory ID
         *
         * @return {promise<mixed>}
         */
        getTm : function(id, tmId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/{tm_id}/segments/{id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "id" : id,
                "tm_id" : tmId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Updates a translation memory's segment
         * @param {string} id    Required parameter: Your segment ID
         * @param {string} tmId    Required parameter: Your translation memory ID
         *
         * @return {promise<void>}
         */
        updateTm : function(id, tmId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/{tm_id}/segments/{id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "id" : id,
                "tm_id" : tmId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "PUT",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Deletes a translation memory's segment
         * @param {string} id    Required parameter: Your segment ID
         * @param {string} tmId    Required parameter: Your translation memory ID
         *
         * @return {promise<void>}
         */
        deleteTm : function(id, tmId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/translation_memories/{tm_id}/segments/{id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "id" : id,
                "tm_id" : tmId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "DELETE",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets organization's glossaries
         *
         * @return {promise<mixed>}
         */
        getGlossaries : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Posts an organization glossary
         *
         * @return {promise<void>}
         */
        createGlossaries : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/upload";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a glossary's config
         * @param {string} glossaryId    Required parameter: Your glossary ID
         *
         * @return {promise<mixed>}
         */
        getGlossaries : function(glossaryId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/{glossary_id}/config";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "glossary_id" : glossaryId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Updates a glossary's config
         * @param {string} glossaryId    Required parameter: Your glossary ID
         *
         * @return {promise<void>}
         */
        updateGlossaries : function(glossaryId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/{glossary_id}/config";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "glossary_id" : glossaryId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "PUT",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Downloads a glossary
         * @param {string} glossaryId    Required parameter: Your glossary ID
         *
         * @return {promise<mixed>}
         */
        getGlossaries : function(glossaryId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/{glossary_id}/download";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "glossary_id" : glossaryId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets a glossary
         * @param {string} glossaryId    Required parameter: Your glossary ID
         *
         * @return {promise<mixed>}
         */
        getGlossaries : function(glossaryId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/{glossary_id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "glossary_id" : glossaryId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets project glossaries
         * @param {string} languageId    Required parameter: Your language ID
         * @param {string} projectId    Required parameter: Your project ID
         *
         * @return {promise<mixed>}
         */
        getGlossaries : function(languageId, projectId){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/project/{project_id}/languages/{language_id}/glossaries/terms";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "language_id" : languageId,
                "project_id" : projectId
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Posts glossary term
         *
         * @return {promise<void>}
         */
        createGlossaries : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/add_term";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "POST",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets glossary term
         * @param {string} glossaryId    Required parameter: Your glossary ID
         * @param {string} id    Required parameter: Your glossary term ID
         *
         * @return {promise<mixed>}
         */
        getGlossaries : function(glossaryId, id){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/{glossary_id}/terms/{id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "glossary_id" : glossaryId,
                "id" : id
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Updates glossary term
         * @param {string} glossaryId    Required parameter: Your glossary ID
         * @param {string} id    Required parameter: Your glossary term ID
         *
         * @return {promise<void>}
         */
        updateGlossaries : function(glossaryId, id){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/{glossary_id}/terms/{id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "glossary_id" : glossaryId,
                "id" : id
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "PUT",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Deletes glossary term
         * @param {string} glossaryId    Required parameter: Your glossary ID
         * @param {string} id    Required parameter: Your glossary term ID
         *
         * @return {promise<void>}
         */
        deleteGlossaries : function(glossaryId, id){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/glossaries/{glossary_id}/terms/{id}";
            
            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "glossary_id" : glossaryId,
                "id" : id
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "DELETE",
                queryUrl : queryUrl,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets languages
         *
         * @return {promise<mixed>}
         */
        getLanguages : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/languages";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets countries
         *
         * @return {promise<mixed>}
         */
        getLanguages : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/countries";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        },
        /**
         * Gets regex templates
         *
         * @return {promise<mixed>}
         */
        getRegextemplates : function(){

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/api/regextemplates";
            
            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);
            
            //prepare headers
            var headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method : "GET",
                queryUrl : queryUrl,
                headers: headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var response = HttpClient(config);
                    
            //Create promise to return
            var deffered= $q.defer();
                    
            //process response
            response.then(function(result){
                deffered.resolve(result.body);
            },function(result){
                //Error handling for custom HTTP status codes
                deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: result.code, errorResponse: result.message},result.getContext()));
            });
            
            return deffered.promise;
        }
    }
});