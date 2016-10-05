"use strict";angular.module("healthCareApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider","$httpProvider",function(a,b){a.when("/login",{templateUrl:"views/login.html",controller:"LoginCtrl",controllerAs:"login"}).when("/main",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/statusReport",{templateUrl:"views/statusReport.html",controller:"StatusReportCtrl",controllerAs:"statusReport"}).otherwise({redirectTo:"/login"}),b.interceptors.push(["$q","$cookies",function(a,b){return{request:function(a){return a.headers.authorization="Bearer "+localStorage.getItem("jwtToken"),a}}}])}]),angular.module("healthCareApp").constant("healthCareBusinessConstants",{LOGIN_URL:"http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/login",SEARCH_URL:"http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/secure/employeesearch",STAFF:"http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/secure/status/staff",FACILITY:"http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/secure/status/Facility",DELETE_EMP:"http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/secure/employeeDelete",ADD_EMPLOYEE:"http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/secure/employeeAdd",EDIT_EMPLOYEE:" http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/secure/employeeEdit",DELETE_DOC:"http://managementportal-env.us-east-1.elasticbeanstalk.com/hsm/secure/deleteDocument?docID"}),angular.module("healthCareApp").factory("ApiService",["$http",function(a){return{post:function(b,c){return a.post(b,c)},get:function(b,c){return a.get(b)}}}]),angular.module("healthCareApp").controller("HeaderCtrl",["$location",function(a){function b(){d=i.width(),e=Math.floor(d/h*f)-1,i.children().css({display:"block",width:"auto"}),g=i.children(":gt("+e+")"),$("#submenu").empty().append(g.clone()),g.css({display:"none",width:"0"})}var c=this;c.getClass=function(b){return a.path().substr(0,b.length)===b?"active":""},c.humanResource=function(){a.path("main")},c.statusReport=function(){a.path("statusReport")};var d,e,f,g,h=0,i=$("ul#menu");f=i.children().length,i.children().each(function(){h+=$(this).outerWidth()}),b(),$(window).resize(b)}]),angular.module("healthCareApp").controller("LoginCtrl",["$location","$rootScope","ApiService","healthCareBusinessConstants",function(a,b,c,d){function e(b){h.username="",h.password="",localStorage.setItem("jwtToken",b.data.jwtToken),console.log("login response::",b),a.path("main")}function f(a){h.username="",h.password="",h.errorMsg="Please check username/password and Try again",console.log("login response::",a)}function g(a){console.log("finalCallBack",a),b.loading=!1}var h=this;h.login=function(){b.loading=!0;var a={type:"user",userName:h.username,password:h.password};c.post(d.LOGIN_URL,a).then(e,f)["finally"](g)},b.hideNavbar=!0}]),angular.module("healthCareApp").controller("MainCtrl",["$rootScope","$scope",function(a,b){a.hideNavbar=!1;var c=this;c.addNewTab=function(){$('a[data-target="#profile"]').tab("show")},c.viewList=function(){$('a[data-target="#vileList"]').tab("show")}}]),angular.module("healthCareApp").controller("PersonCtrl",["$rootScope","ApiService","healthCareBusinessConstants","$location",function(a,b,c,d){function e(a){console.log(a),k.users=a.data}function f(a){a&&a.data&&(k.errorMsg=a.data.message),console.log("login response::",a)}function g(b){console.log("finalCallBack",b),a.loading=!1}function h(a){console.log(a),$('a[data-target="#vileList"]').tab("show")}function i(a){k.init()}function j(a){console.log(a),console.log("Bonds Enter!")}var k=this;a.hideNavbar=!1,a.editEmployee=!1,k.searchEmployee=function(){a.loading=!0;var d={employeeID:k.employeeId,empType:null,field:null,statusCheck:null,document:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],provider:{providerID:null,specialty:null,npi:"Y",taxonomy:null,credentials:null,medlicense:{medLicState:null,medLicExpDate:null,created_date:null,updated_date:null,created_id:null,updated_id:null,medLicNumber:null,medID:null,document:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null},{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],state:null,expiryDate:null},dealicense:{deaLicName:null,deaLicAddress:null,deaLicTelephone:0,deaLicFax:0,deaLicEmail:null,deaLicExpDate:null,deaLicNumber:34343535353,document:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],created_date:null,updated_date:null,created_id:null,updated_id:null,deaID:null,address:{streetAddress:null,city:null,state:null,country:null,zip:null,phoneNumber:null,faxNumber:null,emailID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,addressID:null},name:null,email:null,fax:null,deaaddress:null,telephone:null,expiryDate:null},malprctlnce:{malPrctID:null,malInsName:null,malInsAddress:null,malInsExpiryDate:null,malInsPolicyNumber:null,malInsPolicyDoc:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null},{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],malInsFaceSheet:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],created_date:null,updated_date:null,created_id:null,updated_id:null,address:{streetAddress:null,city:null,state:null,country:null,zip:null,phoneNumber:null,faxNumber:null,emailID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,addressID:null}},created_date:null,updated_date:null,created_id:null,updated_id:null},created_date:null,updated_date:null,created_id:null,updated_id:null,person:{personID:null,firstNm:null,lastNm:k.name,middleNm:null,birthDt:null,gender:null,status:null,empAddress:null,created_date:null,updated_date:null,created_id:null,updated_id:null,address:{streetAddress:null,city:null,state:null,country:null,zip:null,phoneNumber:null,faxNumber:null,emailID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,addressID:null},ssn:k.ssn}};k.employeeId||k.name||k.ssn?b.post(c.SEARCH_URL,d).then(e,f)["finally"](g):(k.errorMsg="Please Enter Name/Employee Id/SSN",a.loading=!1)},k.editEmployye=function(b){k.editEmployee=!0,a.editEmployee=!0,console.log("editObj::",b),$('a[data-target="#profile"]').tab("show"),k.details=b},k.upDateUser=function(){a.loading=!0,console.log("Edit Employee Object::",k.details),b.post(c.EDIT_EMPLOYEE,k.details).then(h,f)["finally"](g)},k.cancel=function(){$('a[data-target="#vileList"]').tab("show"),a.editEmployee=!1},k.deleteEmployye=function(d,e){var h=angular.copy(d);k.users.splice(e,1),a.loading=!0,b.get(c.DELETE_EMP+h.employeeID).then(i,f)["finally"](g)},k.addPerson=function(d){a.loading=!0,b.post(c.ADD_EMPLOYEE,d).then(j,f)["finally"](g)},k.init=function(){a.loading=!0;var d={employeeID:null,empType:null,field:null,statusCheck:null,document:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],provider:{providerID:null,specialty:null,npi:"Y",taxonomy:null,credentials:null,medlicense:{medLicState:null,medLicExpDate:null,created_date:null,updated_date:null,created_id:null,updated_id:null,medLicNumber:null,medID:null,document:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null},{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],state:null,expiryDate:null},dealicense:{deaLicName:null,deaLicAddress:null,deaLicTelephone:0,deaLicFax:0,deaLicEmail:null,deaLicExpDate:null,deaLicNumber:34343535353,document:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],created_date:null,updated_date:null,created_id:null,updated_id:null,deaID:null,address:{streetAddress:null,city:null,state:null,country:null,zip:null,phoneNumber:null,faxNumber:null,emailID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,addressID:null},name:null,email:null,fax:null,deaaddress:null,telephone:null,expiryDate:null},malprctlnce:{malPrctID:null,malInsName:null,malInsAddress:null,malInsExpiryDate:null,malInsPolicyNumber:null,malInsPolicyDoc:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null},{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],malInsFaceSheet:[{documentID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,filename:null,filebytes:null}],created_date:null,updated_date:null,created_id:null,updated_id:null,address:{streetAddress:null,city:null,state:null,country:null,zip:null,phoneNumber:null,faxNumber:null,emailID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,addressID:null}},created_date:null,updated_date:null,created_id:null,updated_id:null},created_date:null,updated_date:null,created_id:null,updated_id:null,person:{personID:null,firstNm:null,lastNm:null,middleNm:null,birthDt:null,gender:null,status:null,empAddress:null,created_date:null,updated_date:null,created_id:null,updated_id:null,address:{streetAddress:null,city:null,state:null,country:null,zip:null,phoneNumber:null,faxNumber:null,emailID:null,created_date:null,updated_date:null,created_id:null,updated_id:null,addressID:null},ssn:null}};b.post(c.SEARCH_URL,d).then(e,f)["finally"](g)},k.init()}]),angular.module("healthCareApp").controller("StatusReportCtrl",["$rootScope","ApiService","healthCareBusinessConstants",function(a,b,c){function d(a){console.log(a),g.expaireData=a.data}function e(a){g.errorMsg=a.data.message,console.log("login response::",a)}function f(b){console.log("finalCallBack",b),a.loading=!1}var g=this;g.expaire=function(g){a.loading=!0,"Staff"==g?b.post(c.STAFF,{}).then(d,e)["finally"](f):b.post(c.FACILITY,{}).then(d,e)["finally"](f)},g.expaire("Staff")}]),angular.module("healthCareApp").run(["$templateCache",function(a){a.put("views/login.html",'<div class="alert alert-danger" ng-if="login.errorMsg"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>OOPS! </strong> <span ng-bind="login.errorMsg"></span> </div> <section class="login-form col-xs-12"> <div id="loginbox" style="margin-top:50px" class="mainbox col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3"> <div class="panel panel-info" style="border:1px solid #e65100"> <div class="panel-heading" style="color: #fff;background-color: #e65100;border-color: #e65100; opacity: 0.8"> <div class="panel-title">Sign In</div> </div> <div style="padding-top:30px" class="panel-body"> <form id="loginform" class="form-horizontal" role="form" ng-submit="login.login()"> <div style="margin-bottom: 25px" class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span> <input type="text" class="form-control" name="username" placeholder="username" ng-model="login.username" required> </div> <div style="margin-bottom: 25px" class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span> <input type="password" ng-model="login.password" class="form-control" name="password" placeholder="password" required> </div> <div style="margin-top:10px" class="form-group"> <!-- Button --> <div class="col-sm-12 controls"> <button id="btn-login" type="submit" class="btn btn-block btn-login">Login</button> </div> </div> </form> </div> </div> </div> </section>'),a.put("views/main.html",'<div class="sub-menu"> <ul role="tablist"> <li role="presentation" class="active"><a data-target="#vileList" ng-click="main.viewList()" aria-controls="vileList" role="tab" data-toggle="tab">View List</a></li> <li role="presentation"><a data-target="#profile" ng-click="main.addNewTab()" aria-controls="profile" role="tab" data-toggle="tab">{{!editEmployee && \'Add New\' || \'Edit\'}}</a></li> </ul> </div> <!-- Tab panes --> <div class="tab-content" ng-controller="PersonCtrl as person"> <div role="tabpanel" class="tab-pane active" id="vileList"> <div class="alert alert-danger" ng-show="person.errorMsg"> <a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>OOPS! </strong> <span ng-bind="person.errorMsg"></span> </div> <section> <div class="container"> <h2><span class="heading-bottom">View List</span></h2> <div class="four-col human-search-section"> <div class="col-sm-3"> <label>Name</label> <input type="text" name="name" ng-model="person.name" placeholder="Enter Name to Search"> </div> <div class="col-sm-3"> <label>Employee ID</label> <input type="text" name="employee-id" ng-model="person.employeeId" placeholder="Enter Employee ID Search"> </div> <div class="col-sm-3"> <label>SSN</label> <input type="text" name="ssn" ng-model="person.ssn" placeholder="Enter SSN Search"> </div> <div class="col-sm-3"> <label>&nbsp;</label> <input type="button" id="humansearh" class="orange-button" name="ssn" value="search" ng-click="person.searchEmployee()"> </div> </div> <div id="human-resource-list" class="row" ng-show="person.users.length>0"> <table class="table table-bordered table-hover table-stripped"> <thead> <tr> <th class="text-center">Employee ID</th> <th class="text-center">Name</th> <th class="text-center">Gender</th> <th class="text-center">Edit</th> <th class="text-center">Delete</th> </tr> </thead> <tbody> <tr ng-repeat="employee in person.users"> <td class="text-center" ng-bind="employee.employeeID"></td> <td class="text-center" ng-bind="employee.person.firstNm"></td> <td class="text-center" ng-bind="employee.person.gender"></td> <td class="text-center"> <a ng-click="person.editEmployye(employee)"> <i class="glyphicon glyphicon-pencil text-muted"></i> </a> </td> <td class="text-center"> <a href="javascript:void(0);" ng-click="person.deleteEmployye(employee, $index)" class="text-danger"> <i class="glyphicon glyphicon-trash text-danger"></i> </a> </td> </tr> </tbody> </table> </div> </div> </section> </div> <!-- tab2 --> <form role="tabpanel" class="tab-pane" id="profile"> <section> <div class="container"> <h2><span class="heading-bottom">Person Details</span></h2> <div class="two-col"> <div class="left-col"> <div class="row"> <label>PersonID</label> <input type="text" name="PersonID" placeholder="Enter Person ID" ng-model="person.details.person.personID" readonly> </div> <div class="row"> <label>LastName</label> <input type="text" name="LastName" ng-model="person.details.person.lastNm" placeholder="Enter Last Name"> </div> <div class="row"> <label>FirstName</label> <input type="text" ng-model="person.details.person.firstNm" name="FirstName" placeholder="Enter First Name"> </div> <div class="row"> <label>MiddleName</label> <input type="text" ng-model="person.details.person.middleNm" name="MiddleName" placeholder="Enter Middle Name"> </div> <div class="row"> <label>Birthdate</label> <input type="text" name="Birthdate" ng-model="person.details.person.birthDt" class="datepicker" placeholder="MM/DD/YYYY"> </div> <div class="row radio"> <label>Gender</label> <ul> <li> <input type="radio" id="gender-male" ng-model="person.details.person.gender" name="gender" value="M" checked> <label for="gender-male">Male</label> <div class="check"></div> </li> <li> <input type="radio" id="gender-female" ng-model="person.details.person.gender" name="gender" value="F"> <label for="gender-female">Female</label> <div class="check"><div class="inside"></div></div> </li> </ul> </div> <div class="row"> <label>SSN</label> <input type="text" name="SSN" ng-model="person.details.person.ssn" placeholder="Enter SSN" readonly> </div> <div class="row radio"> <label>IsActive</label> <ul> <li> <input type="radio" id="active-yes" ng-model="person.details.person.status" name="active" value="Active" checked> <label for="active-yes">Yes</label> <div class="check"></div> </li> <li> <input type="radio" id="active-no" ng-model="person.details.person.status" name="active" value="No"> <label for="active-no">No</label> <div class="check"><div class="inside"></div></div> </li> </ul> </div> </div> <div class="right-col"> <h3><span class="heading-bottom orange">HomeAddressID</span></h3> <div class="row"> <label>Name</label> <input type="text" name="Name" ng-model="person.details.person.address.addressName" placeholder="Enter Name"> </div> <div class="row"> <label>Street Address</label> <input type="text" name="Street Address" ng-model="person.details.person.address.streetAddress" placeholder="Enter Street Address"> </div> <div class="row"> <label>City</label> <input type="text" name="City" ng-model="person.details.person.address.city" placeholder="Enter City Name"> </div> <div class="row"> <label>State</label> <input type="text" name="State" ng-model="person.details.person.address.state" placeholder="Enter State Name"> </div> <div class="row"> <label>Country</label> <input type="text" name="Country" ng-model="person.details.person.address.country" placeholder="Enter Country Name"> </div> <div class="row"> <label>ZIP</label> <input type="text" name="ZIP" ng-model="person.details.person.address.zip" placeholder="Enter ZIP Code"> </div> <div class="row"> <label>Telephone</label> <input type="text" name="Telephone" ng-model="person.details.person.address.phoneNumber" placeholder="Enter Telephone Number"> </div> <div class="row"> <label>Fax</label> <input type="text" name="Fax" ng-model="person.details.person.address.faxNumber" placeholder="Enter Fax Code"> </div> <div class="row"> <label>Email</label> <input type="text" name="Email" ng-model="person.details.person.address.emailID" placeholder="Enter Email ID"> </div> </div> </div> <h2><span class="heading-bottom">Employee Details</span></h2> <div class="two-col"> <div class="left-col"> <div class="row"> <label>Employee ID</label> <input type="text" name="Employee Id" ng-model="person.details.employeeID" placeholder="Employee ID"> </div> <div class="row"> <label>Supervisor</label> <select id="supervisor" ng-model="person.details.empType"> <option value="Employee">Employee</option> <option value="Supervisor">Supervisor</option> </select> </div> <div class="row"> <label>Field</label> <input type="text" name="Field" ng-model="person.details.field" placeholder="Enter Field Value"> </div> </div> <div class="right-col"> <div class="row"> <input type="file" id="emp-file" name="upload-file" placeholder=""> </div> <table class="fileupload"> <thead> <tr> <th>File Name</th> <th>Actions</th> </tr> </thead> <tbody> <tr class="1" ng-repeat="doc in person.details.document"> <td><a target="_blank" ng-bind="doc.filename"></a></td> <td><a href="javascript:void(0);" onclick="deleteFile(this)">Delete</a></td> </tr> </tbody> </table> </div> </div> <div id="physician-details"> <h2><span class="heading-bottom">Provider Details</span></h2> <div class="two-col"> <div class="left-col"> <div class="row"> <label>Specialty</label> <select id="specialty" ng-model="person.details.provider.specialty"> <option value="Cardiaology">Cardiaology</option> <option value="Neurology">Neurology</option> </select> </div> <div class="row"> <label>NPI</label> <input type="text" name="NPI" ng-model="person.details.provider.npi" placeholder="Enter NPI Details"> </div> <div class="row"> <label>Taxonomy</label> <input type="text" name="Taxonomy" ng-model="person.details.provider.taxonomy" placeholder="Enter Taxonomy Details"> </div> <div class="row"> <label>Credentials</label> <input type="text" ng-model="person.details.provider.credentials" name="Credentials" placeholder="Enter Credentials"> </div> </div> </div> <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"> <div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingOne"> <h4 class="panel-title text-uppercase"> <a role="button" data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> MedicalLicense </a> </h4> </div> <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> <div class="panel-body"> <div class="toggle-content"> <div class="two-col"> <div class="left-col"> <div class="row"> <label>State</label> <input type="text" name="State" ng-model="person.details.provider.medlicense.medLicState" placeholder="Enter State"> </div> <div class="row"> <label>ExpiryDate</label> <input type="text" name="ExpiryDate" ng-model="person.details.provider.medlicense.medLicExpDate" class="datepicker" placeholder="MM/DD/YYYY"> </div> <div class="row"> <label>Number</label> <input type="text" name="Number" ng-model="person.details.provider.medlicense.medLicNumber" placeholder="Enter Number"> </div> </div> <div class="right-col"> <h3><span class="heading-bottom orange">File Details</span></h3> <div class="row"> <input type="file" id="medical-file" name="upload-file" placeholder=""> </div> <table class="fileupload"> <thead> <tr> <th>File Name</th> <th>Actions</th> </tr> </thead> <tbody> <tr class="1" ng-repeat="doc in person.details.provider.medlicense.document"> <td><a target="_blank" ng-bind="doc.filename"></a></td> <td><a href="javascript:;" onclick="deleteFile(this)">Delete</a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingTwo"> <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> DEALicense </a> </h4> </div> <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo"> <div class="panel-body"> <div class="toggle-content"> <div class="two-col"> <div class="left-col"> <h3><span class="heading-bottom orange">DEALicense Address</span></h3> <div class="row"> <label>Name</label> <input type="text" name="Name" ng-model="person.details.provider.dealicense.addressName" placeholder="Enter Name"> </div> <div class="row"> <label>Street Address</label> <input type="text" name="Street Address" ng-model="person.details.provider.dealicense.address.deaLicAddress" placeholder="Enter Street Address"> </div> <div class="row"> <label>City</label> <input type="text" name="City" ng-model="person.details.provider.dealicense.address.city" placeholder="Enter City Name"> </div> <div class="row"> <label>State</label> <input type="text" name="State" ng-model="person.details.provider.dealicense.address.state" placeholder="Enter State Name"> </div> <div class="row"> <label>Country</label> <input type="text" name="Country" ng-model="person.details.provider.dealicense.address.country" placeholder="Enter Country Name"> </div> <div class="row"> <label>ZIP</label> <input type="text" name="ZIP" ng-model="person.details.provider.dealicense.address.zip" placeholder="Enter ZIP Code"> </div> <div class="row"> <label>Telephone</label> <input type="text" name="Telephone" ng-model="person.details.provider.dealicense.address.phoneNumber" placeholder="Enter Telephone Number"> </div> <div class="row"> <label>Fax</label> <input type="text" name="Fax" ng-model="person.details.provider.dealicense.address.faxNumber" placeholder="Enter Fax Code"> </div> <div class="row"> <label>Email</label> <input type="text" name="Email" ng-model="person.details.provider.dealicense.address.emailID" placeholder="Enter Email ID"> </div> </div> <div class="right-col"> <div class="row"> <label>ExpiryDate</label> <input type="text" name="ExpiryDate" class="datepicker" ng-model="person.details.provider.dealicense.expiryDate" placeholder="MM/DD/YYYY"> </div> <div class="row"> <label>Number</label> <input type="text" name="Number" ng-model="person.details.provider.dealicense.telephone" placeholder="Enter Number"> </div> <h3><span class="heading-bottom orange">File Details</span></h3> <div class="row"> <input type="file" id="dea-file" name="upload-file" placeholder=""> </div> <table class="fileupload"> <thead> <tr> <th>File Name</th> <th>Actions</th> </tr> </thead> <tbody> <tr class="1" ng-repeat="doc in person.details.provider.dealicense.document"> <td><a target="_blank" ng-bind="doc.filename"></a></td> <td><a href="javascript:;" onclick="deleteFile(this)">Delete</a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> <div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingThree"> <h4 class="panel-title"> <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> MalpracticeInsurance </a> </h4> </div> <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree"> <div class="panel-body"> <div class="two-col"> <div class="left-col"> <h3><span class="heading-bottom orange">MalpracticeInsurance Address</span></h3> <div class="row"> <label>Name</label> <input type="text" name="Name" ng-model="person.details.provider.malprctlnce.address.addressName" placeholder="Enter Name"> </div> <div class="row"> <label>Street Address</label> <input type="text" name="Street Address" ng-model="person.details.provider.malprctlnce.address.streetAddress" placeholder="Enter Street Address"> </div> <div class="row"> <label>City</label> <input type="text" name="City" ng-model="person.details.provider.malprctlnce.address.city" placeholder="Enter City Name"> </div> <div class="row"> <label>State</label> <input type="text" name="State" ng-model="person.details.provider.malprctlnce.address.state" placeholder="Enter State Name"> </div> <div class="row"> <label>Country</label> <input type="text" name="Country" ng-model="person.details.provider.malprctlnce.address.country" placeholder="Enter Country Name"> </div> <div class="row"> <label>ZIP</label> <input type="text" name="ZIP" ng-model="person.details.provider.malprctlnce.address.zip" placeholder="Enter ZIP Code"> </div> <div class="row"> <label>Telephone</label> <input type="text" name="Telephone" ng-model="person.details.provider.malprctlnce.address.phoneNumber" placeholder="Enter Telephone Number"> </div> <div class="row"> <label>Fax</label> <input type="text" name="Fax" ng-model="person.details.provider.malprctlnce.address.faxNumber" placeholder="Enter Fax Code"> </div> <div class="row"> <label>Email</label> <input type="text" name="Email" ng-model="person.details.provider.malprctlnce.address.emailID" placeholder="Enter Email ID"> </div> </div> <div class="right-col"> <div class="row"> <label>ExpiryDate</label> <input type="text" name="ExpiryDate" ng-model="person.details.provider.malprctlnce.malInsExpiryDate" class="datepicker" placeholder="MM/DD/YYYY"> </div> <div class="row"> <label>PolicyNumber</label> <input type="text" name="PolicyNumber" ng-model="person.details.provider.malprctlnce.malInsPolicyNumber" placeholder="Enter PolicyNumber"> </div> <h3><span class="heading-bottom orange">Policy File Details</span></h3> <div class="row"> <input type="file" id="policy-file" name="upload-file" placeholder=""> </div> <table class="fileupload"> <thead> <tr> <th>File Name</th> <th>Actions</th> </tr> </thead> <tbody> <tr class="1" ng-repeat="doc in person.details.provider.malprctlnce.malInsPolicyDoc"> <td><a ng-bind="doc.filename"></a></td> <td><a href="javascript:;" onclick="deleteFile(this)">Delete</a></td> </tr> </tbody> </table> <h3><span class="heading-bottom orange">FaceSheet File Details</span></h3> <div class="row"> <input type="file" id="facesheet-file" name="upload-file" placeholder=""> </div> <table class="fileupload"> <thead> <tr> <th>File Name</th> <th>Actions</th> </tr> </thead> <tbody> <tr class="1" ng-repeat="doc in person.details.provider.malprctlnce.malInsFaceSheet"> <td><a ng-bind="doc.filename"></a></td> <td><a href="javascript:;" onclick="deleteFile(this)">Delete</a></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="align-right"> <input type="button" class="gray-button" value="Cancel" ng-click="person.cancel()"> <input type="button" class="orange-button" value="Add" ng-show="!person.editEmployee" ng-click="person.addPerson(person)"> <input type="button" ng-show="person.editEmployee" class="orange-button" value="Update" ng-click="person.upDateUser(person)"> </div> </div> </div> </section> </form> </div>'),a.put("views/statusReport.html",'<section> <div class="container"> <h2><span class="heading-bottom">Status Dashboard</span></h2> <!-- Nav tabs --> <ul class="nav nav-tabs" role="tablist"> <li role="presentation" class="active"><a data-target="#home" aria-controls="home" role="tab" data-toggle="tab" ng-click="statusReport.expaire(\'Staff\');filterOpt = \'\';">STAFF</a></li> <li role="presentation" ng-click="statusReport.expaire(\'Facility\');filterOpt = \'\';"><a data-target="#profile" aria-controls="profile" role="tab" data-toggle="tab">FACILITY</a></li> </ul> <br> <div class="tabs"> <div class="tab-body"> <div id="staff" style="display:block"> <div class="four-col"> <div class="col-xs-6 col-sm-4 col-md-3" style="padding-right:5px" ng-click="filterOpt=\'ExpiresSoon\'"> <div class="dashboard light-orange"> <div class="top"> <div class="row"> <div class="top-left"> <div class="status-count text-center"><a href="javascript:void(0);" ng-bind="statusReport.expaireData.expiressoon"></a></div> </div> <div class="top-right"><img src="images/dashboard-icon.9f6fc2fd.png" alt="Dashboard Icon"></div> </div> <div class="status-name">Expires Soon</div> </div> </div> </div> <div class="col-xs-6 col-sm-4 col-md-3" style="padding-left:5px" ng-click="filterOpt=\'EXPIRED\'"> <div class="dashboard warning-red"> <div class="top"> <div class="row"> <div class="top-left"> <div class="status-count text-center"><a href="javascript:void(0);" ng-bind="statusReport.expaireData.expired"></a></div> </div> <div class="top-right"><img src="images/dashboard-icon.9f6fc2fd.png" alt="Dashboard Icon"></div> </div> <div class="status-name">Expired</div> </div> </div> </div> </div> <div id="staff-status-dashboard" class="row status-dashboard"> <table> <thead> <tr> <th>Person ID</th> <th>Name</th> <th>Date of Birth</th> <th>Gender</th> <th>SSN</th> <th>Active</th> <th>Status</th> </tr> </thead> <tbody> <tr class="bf-warning" ng-repeat="item in statusReport.expaireData.employees | filter:filterOpt"> <td ng-bind="item.person.personID"></td> <td ng-bind="item.person.firstNm"></td> <td ng-bind="item.person.birthDt"></td> <td ng-bind="item.person.gender"></td> <td ng-bind="item.person.ssn"></td> <td ng-bind="item.person.status"></td> <td class="{{(item.statusCheck===\'EXPIRED\') && \'expired-color\' || \'expires-soon-color\'}}"></td> </tr> </tbody> </table> </div> </div> </div> </div> </div> </section>')}]);