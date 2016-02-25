/**
  *
  *QordobaLib
  *
  *  by Qordoba BETA v2.0 on 02/25/2016
  */

'use strict';
angular.module('QordobaLib').factory('APIHelper', function() {

    var _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    
    // private method for UTF-8 encoding
    var _utf8_encode= function(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
 
    // private method for UTF-8 decoding
    var _utf8_decode = function(utftext) {
        var string = "";
        var i = 0;
        var c = 0, c1 = 0, c2 = 0, c3=0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    };

    
    return{

        /**
         * Replaces template parameters in the given url
         * @param {String}    The query string builder to replace the template parameters
         * @param {Array}    The parameters to replace in the queryBuilder 
         * @return {String}
         */
        appendUrlWithTemplateParameters:function(queryBuilder, parameters) {
            
            //perform parameter validation
            if(queryBuilder == null) {
                console.log('queryBuilder is null');
                return;
            }

            if(parameters ==null) {
                return queryBuilder;
            }
             
            //iterate and replace parameters             
            for(var key in parameters) {
                var replaceValue = "";

                //load parameter value
                var element =  parameters[key];

                if(element == null) {
                    replaceValue = "";
                } else if (element instanceof Array) {
                    replaceValue = element.join("/");
                } else {
                    replaceValue = element.toString();
                }
                queryBuilder = queryBuilder.replace('{'+(key)+'}', replaceValue)   
             }
            return queryBuilder;
        },

        /**
         * Appends the given set of parameters to the given query string
         * @param	{String}	The query url string to append the parameters
         * @param	{Array}	The parameters to append
         * @return {String} String appended with query parameters 
         */
        appendUrlWithQueryParameters:function(queryBuilder, parameters) {
            
            //perform parameter validation
            if(queryBuilder == null) {
                console.log('queryBuilder is null');
                return;
            }
            if(parameters == queryBuilder) {
                return queryBuilder;
            }
             
            var hasParams = queryBuilder.indexOf('?') >-1;
             //iterate and replace parameters
            var encoded = this.urlEncodeObject(parameters);
            var separator = (hasParams)?'&':'?'
            queryBuilder = queryBuilder + separator + encoded;
            return queryBuilder;
        },

        /**
         * Validates and processes the given Url
         * @param {String} url The given Url to process
         * @return  {String} Url cleared of any extra slashes 
         */
        cleanUrl:function(url) {
            
            //ensure that the urls are absolute
            
            var re = /^https?:\/\/[^\/]+/; 
            var str = url;
            
            var match = url.match(re);
            if(match==null) {
                console.log('Invalid Url format');
                return;
                
            }
            //remove redundant forward slashes
            var protocol = match[0];
            var queryUrl = url.substring(protocol.length);
            queryUrl = queryUrl.replace(/\/\/+/,"/");
                    
            var result = protocol+queryUrl;  
			      return result;
        },

        /**
         * Base64 encodes the given url
         * @param {String} url The given Url to process
         * @return {String}   Base64 encoded string 
         */
        base64Encode: function(input) {
            if (typeof btoa !== "undefined") {
                return btoa(input);
            }
			var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;

            input = _utf8_encode(input);

            while (i < input.length) {

                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);

            }

            return output;
        },

        /**
         * Base64 decodes the given url
         * @param {String} url The given Url to process
         * @return {String}   Base64 decoded string 
         */
        base64Decode: function(input) {
            if (typeof atob !== "undefined") {
                return atob(input);
            }
            var e = {},
                i, b = 0,
                c, x, l = 0,
                a, r = '',
                w = String.fromCharCode,
                L = input.length;
            var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (i = 0; i < 64; i++) {
                e[A.charAt(i)] = i;
            }
            for (x = 0; x < L; x++) {
                c = e[input.charAt(x)];
                b = (b << 6) + c;
                l += 6;
                while (l >= 8) {
                    ((a = (b >>> (l -= 8)) & 0xff) || (x < (L - 2))) && (r += w(a));
                }
            }
            return r;
            
        },

        /**
         * JSON Serialization of a given object.
         * @param	{Object} data The object to serialize into JSON
         * @return	The		serialized Json string representation of the given object
         */
        jsonSerialize: function(data) {
            return angular.toJson(data);
        },
        
        /**
         * Formats the string by replacing template params with the positional arguments
         * @param	{String} String containing placeholders
         * @param {Additonal Args} Values for postional placeholders.
         * @return	{String} Formatted string with positional placeholders filled.
         */
        formatString: function(str){
		
		  if (!str || arguments.length <= 1 ) return str;
		  var args = arguments;
		  for (var i = 1; i < arguments.length; i++) {       
			var reg = new RegExp("\\{" + (i - 1) + "\\}", "gm");             
			str = str.replace(reg, arguments[i]);
		  }
		  return str;
		},
        
       /**
		* Cleans the object by removing null properties.
		* @param	{object} input Object or dictionary. 
		* @return	{object} Returns the cleaned version of the object.
		*/
        cleanObject: function(input){
		  for(var key in input) {
		    var value = input[key];
		    if (value == null || value == undefined){
		      if (input.constructor === Array){input.splice(key, 1)}
		      else delete input[key];
		    } else if (Object.prototype.toString.call(value) === '[object Object]') {
		      this.cleanObject(value);
		    } else if (value.constructor === Array) {
		      this.cleanObject(value);
		    }
		  }
		  return input;
        },

		/**
         * Creates a new FormData object from a dictionary
         * @param	{list<key,value>} List of key value pairs
         * @return	{FormData} clean FormData object .
         */
        createFormData: function(obj){
		  this.cleanObject(obj)
		  var formData = new FormData();
          //Convert objects in proper encoding
          var dataArray = APIHelper.formDataEncodeObject(data);
          for (var index in dataArray) {
            var key = dataArray[index].key
            var value = dataArray[index].value;
            form.append(key, value);
          }
          return formData;
		},

        /**
         * Prepares Array style form fields from a given array of values
         * @param	{string} name name of the array
         * @param	{array} values  array of values
         *
         * @return	{string} Returns the url encoded formatted string. e.g input[0]=5.
         */
        prepareFormFieldsFromArray: function(name, values){
         var element = null;
         var formFields = {};

         if(!values) return formFields;

         for(var i=0;i< values.length; i++){
           //replace null values with empty string to maintain index order
           var elemValue = values[i] || "";
           var key =  this.formatString("{0}[{1}]",name,i);
           formFields[key] = elemValue;
         }
         return formFields;
       },

        /**
         * Shallow merges the properties of two objects
         * @param {object} first The object to merge in to
         * @param {object} second The object to be added to first
         *
         * @return {object} the merged (modified) first object
         */
        merge:function(first,second){
          for (var attrname in second) { first[attrname] = second[attrname]; }
          return first;
        },

		/**
         * Adds a getter to first object so it returns the context
         * @param {object} first The object to add function getContext()
         * @param {HttpContext} second The HTTPContext
         *
         * @returns {object} the modified first object.
         */
        appendContext:function(item, context){
		    if(!(item instanceof Object)) return;
            item.getContext = function (){return context;};
			return item;
        },

        isPrimitiveArray: function(value){
            if(value.constructor && value.constructor !== Array){
                return false;
            }
            if(value.length == 0) return true;

            return value.every(function (obj) {
                return obj == null || obj == undefined || obj.constructor && [String, Number, Boolean].indexOf(obj.constructor) >=0 
            });
        },

		/**
         * Converts an object to formdata serialization.
         * @param {Object} obj
         * @return {String}
         */
        formDataEncodeObject : function (obj,keys) {
            var query = '', key, value, fullSubName, subName, subValue, innerObj, i;
            if(!keys){
                keys=[];
            }
            for (key in obj) {
                value = obj[key];
                if(value instanceof File){
                    keys.push({key:key,value:value});
                }else if (value instanceof Array) {
                    var arrayFormat = "{0}[{1}]";

                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = this.formatString(arrayFormat,key,i);
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        this.formDataEncodeObject(innerObj,keys);
                    }
                }
                else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = key + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        this.formDataEncodeObject(innerObj,keys);
                    }
                }
                else if (value !== undefined && value !== null){
                    if(!(value instanceof Object)) {
                        keys.push({key:key,value:value});
                    }

                }
            }
            return keys;
        },
        /**
         * Converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        urlEncodeObject : function (obj) {
            var params = this.formDataEncodeObject(obj);
            var query="";
            for(var index in params){
                var pair = params[index];
                var key = pair.key
                var value = pair.value;
                query= query += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&'
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        }
    }
});