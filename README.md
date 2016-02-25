Qordoba SDK
=================
Qordoba’s Java SDK offers platform-specific features that make the Qordoba implementation much simpler. The SDKs are open-source, and can be forked at the links below. Once forked, you can integrate our API into your application.

How To Configure:
=================
The code might need to be configured with your API credentials. To do that,
open the file "Configuration.js" and edit it's contents.

How To Build: 
=============
The code relies on AngularJS framework being available . 

How To Use:
===========
The following shows how import the controllers and use:

1) Add the folder 'QordobaLib' into your to your scripts folder e.g scripts.
   
2) Import the reference to these files inside the appropriate html file such as index.html. 
   The configuration.js file should be imported before the other files.


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

3) Inject the module into your main module e.g:

    var myApp = angular.module('myApp', ['QordobaLib'])

4) To use a  factory in your controller, injection could be as follows : 
 
    myApp.controller('PageCtrl',function($scope,QordobaController) {

    }
