---
title: AngularJS SDK for l10n
layout: api
---

# AngularJS SDK

Qordoba’s AngularJS SDK offers platform-specific features that make the Qordoba API implementation much simpler. The SDK allows you to integrate our API with your application without worrying about low-level API details. Our AngularJS SDK is open-source and can be forked at the link below. Once forked and configured, you will be able to easily integrate our API into your application.

### Get the SDK:

Download the AngularJS API SDK from [GitHub](https://github.com/Qordobacode/api-sdk-angularjs).

To clone the repo: `git clone git@github.com:Qordobacode/api-sdk-angularjs.git`.

### How to configure the SDK:

The SDK reads configuration values from the `Configuration.js` file, which must contain the following configuration entries:

`basicAuthPassword`: Your Qordoba password to use with basic authentication

`basicAuthUserName`: Your Qordoba username to use with basic authentication


### How to install:

* After downloading the SDK, add the folder `QordobaLib` into your scripts folder
   
* Import the references for these files from within the appropriate HTML file for your application, such as `index.html`. The `configuration.js` file should be imported before the other files:

```javascript
    <!-- Helper files -->
   <script src="scripts/QordobaLib/Configuration.js"></script>
   <script src="scripts/QordobaLib/APIHelper.js"></script>
   <script src="scripts/QordobaLib/Http/Client/HttpContext.js"></script>
   <script src="scripts/QordobaLib/Http/Client/RequestClient.js"></script>
   <script src="scripts/QordobaLib/Http/Request/HttpRequest.js"></script>
   <script src="scripts/QordobaLib/Http/Response/HttpResponse.js"></script>

   <!-- API Controllers -->
   <script src="scripts/QordobaLib/Controllers/QordobaController.js"></script>

   <!-- Models -->
   <script src="scripts/QordobaLib/Models/BaseModel.js"></script>
   <script src="scripts/QordobaLib/Models/Project.js"></script>
   <script src="scripts/QordobaLib/Models/MilestoneLanguage.js"></script>
   <script src="scripts/QordobaLib/Models/Milestone.js"></script>
   <script src="scripts/QordobaLib/Models/Language.js"></script>
   <script src="scripts/QordobaLib/Models/User.js"></script>
   <script src="scripts/QordobaLib/Models/StringFile.js"></script>
```

* Inject the module into your main module:

```javascript
	var myApp = angular.module('myApp', ['QordobaLib'])
```

* To use a factory in your controller, the injection could be written as follows: 
 
```javascript
	myApp.controller('PageCtrl',function($scope,QordobaController) {

	}
```



### Bug reports
Have a bug? Please create an issue [here](https://github.com/Qordobacode/api-sdk-angularjs/issues) on GitHub! 


### License
The MIT License (MIT)
