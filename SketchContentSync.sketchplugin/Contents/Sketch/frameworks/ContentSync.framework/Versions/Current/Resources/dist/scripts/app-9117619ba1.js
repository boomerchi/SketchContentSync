!function(){"use strict";function e(e){e.debug("runBlock end")}function t(e){e.debugEnabled(!0)}e.$inject=["$log"],t.$inject=["$logProvider"],angular.module("appContentsyncSketch",["ui.bootstrap","yaru22.angular-timeago"]).config(t).constant("malarkey","VALUE").run(e)}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("appContentsyncSketch").service("webDevTec",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{title:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csNavbar",e)}(),function(){"use strict";function e(e){function t(t,n,o,r){var c,i=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()["delete"]()}),c=t.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(e){i.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){c()})}function n(e,t){function n(){return o().then(function(){e.info("Activated Contributors View")})}function o(){return t.getContributors(10).then(function(e){return r.contributors=e,r.contributors})}var r=this;r.contributors=[],n()}n.$inject=["$log","githubContributor"];var o={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return o}e.$inject=["malarkey"],angular.module("appContentsyncSketch").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function n(n){function r(e){return e.data}function c(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(o+"/contributors?per_page="+n).then(r)["catch"](c)}var o="https://api.github.com/repos/Swiip/generator-gulp-angular",r={apiHost:o,getContributors:n};return r}e.$inject=["$log","$http"],angular.module("appContentsyncSketch").factory("githubContributor",e)}(),function(){"use strict";function e(){function e(){var e=this;e.click=function(){e.onClick({version:e.version})}}var t={restrict:"E",transclude:!0,templateUrl:"app/components/cs-version-select-button/cs-version-select-button.html",scope:{version:"=",onClick:"&"},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csVersionSelectButton",e)}(),function(){"use strict";function e(){function e(){var e=this;e.click=function(){e.onClick({version:e.version})}}var t={restrict:"E",transclude:!0,templateUrl:"app/components/cs-version-button/cs-version-button.html",scope:{version:"=",onClick:"&"},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csVersionButton",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",transclude:!0,templateUrl:"app/components/cs-title/cs-title.html",scope:{extraSpace:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csTitle",e)}(),function(){"use strict";function e(e,t,n,o){o.loaded()}function t(){var e=this;e.saving=!1,e.saving_error=!1,e.is_feature_flag_set=!1,e.loaded=function(){e.project.feature_flags?(e.is_feature_flag_set=e.project.feature_flags[e.featureFlag],e.is_feature_flag_set=e.is_feature_flag_set===!0||1===e.is_feature_flag_set):e.is_feature_flag_set=!1,e.tooltip_location="top",e.tooltipLocation&&(e.tooltip_location=e.tooltipLocation)},e.tooltip=function(){return e.project.isPublic?"Not available for public documents.":e.is_feature_flag_set?e.tooltipActive:e.tooltipInactive},e.updateFeatureFlag=function(){e.saving=!0,e.onClick&&e.onClick({name:e.featureFlag,value:e.is_feature_flag_set}).then(function(t){return e.saving=!1,e.saving_error=!1,t})}}angular.module("appContentsyncSketch").directive("csSettingRow",function(){return{restrict:"E",scope:{account:"=",project:"=",inactive:"=",featureFlag:"@",featureName:"@",tooltipActive:"@",tooltipInactive:"@",tooltipLocation:"@",helpLink:"@",onClick:"&"},transclude:!0,templateUrl:"app/components/cs-setting-row/cs-setting-row.html",controller:t,controllerAs:"vm",bindToController:!0,link:e}})}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",transclude:!0,templateUrl:"app/components/cs-section/cs-section.html",scope:{},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csSection",e)}(),function(){"use strict";function e(){function e(){var e=this;e.click=function(){e.onClick({project:e.project})}}var t={restrict:"E",transclude:!0,templateUrl:"app/components/cs-project-select-button/cs-project-select-button.html",scope:{project:"=",onClick:"&"},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csProjectSelectButton",e)}(),function(){"use strict";function e(){function e(){}var t={restrict:"E",transclude:!0,templateUrl:"app/components/cs-page-body/cs-page-body.html",scope:{error:"=",loading:"=",standalone:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csPageBody",e)}(),function(){"use strict";function e(){function e(){var e=this;e.pagecontent="hello"}var t={restrict:"E",transclude:!0,templateUrl:"app/components/cs-page/cs-page.html",scope:{},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("appContentsyncSketch").directive("csPage",e)}(),function(){"use strict";function e(){return{restrict:"EA",transclude:!0,scope:{csText:"=?"},bindToController:!0,templateUrl:"app/components/cs-loading/cs-loading.html",link:function(e,t,n,o){e.$on("$destroy",function(){o.cleanup()})},controller:t,controllerAs:"vm"}}function t(e,t){var n=this;"undefined"!=typeof n.csText&&n.csText||(n.csText="Loading"),n.count=0,n.tickcb=t(function(){n.count+=1,n.count>3&&(n.count=0)},300),n.cleanup=function(){n.tickcb&&t.cancel(n.tickcb)}}t.$inject=["$scope","$interval"],angular.module("appContentsyncSketch").directive("csLoading",e)}(),function(){"use strict";function e(e,t,n,o){function r(){return P()}function c(){P().closePanel()}function i(){P().openlogin()}function s(){P().logout()}function a(){return P().username}function l(){var e=P().project();return e}function u(){return P().sketchFileName}function p(){return P().hasSelectedVersions}function g(){return x(P().accounts())}function d(){return x(P().projects())}function m(e){return x(P().createProject_(e))}function f(){return x(P().refreshProject())}function v(){return P().runner()}function h(){return P().lastRunner()}function b(){return x(P().versions())}function C(e,t){return n.log("Running actionPush: "+e),n.log("   Comment: "+t),x(P().actionPush_comment_(e,t))}function j(e){return n.log("Running actionPull: "+e),x(P().actionPull_(e))}function k(e){return n.log("Running refresh"),x(P().actionRefresh_(e))}function S(e,t){return x(P().setSetting_value_(e,t))}function _(e){return n.log("Select Project:"),n.log(e),P().selectProject_(e)}function E(){return P().clearProject()}function y(){return P().openProjectSelect()}function A(e){return P().openURL_(e)}function w(e){return P().openContentSyncURL_(e)}function P(){return t.CSFrameworkJSCallbacks?t.CSFrameworkJSCallbacks:F()}function F(){function t(t,n){var r=e.defer();return o(function(){t?r.resolve(t):r.reject(n)},1e3),r.promise}return{username:"testusername",sketchFileName:"sketch_file_name.sketch",hasSelectedVersions:!1,accounts:function(){return t([{username:"account1"},{username:"account2"}])},project:function(){return{name:"project1",owner:{username:"user"}}},projects:function(){return t([{name:"project1",owner:{username:"user"}},{name:"project2",owner:{username:"user"}},{name:"project3",owner:{username:"user2"}}])},createProject_:function(e){return t({name:"project1",project:e,owner:{username:"user"}})},refreshProject:function(){return t({name:"project1",owner:{username:"user"}})},runner:function(){},lastRunner:function(){return{action_name:"pull",id:"ff1e7b76-fe4f-435b-96f6-d2229f067555",created_at:"2017-06-23T20:49:34.298-07:00",results:{pages:[{name:"Page 1",status:"ok"},{name:"Symbols",status:"ok"},{name:"Page 1",status:"ok"},{name:"Symbols",status:"ok"}],updates:[{override:{"4037F287-D93C-4713-BCAE-A6263B1BB732":{"6D847761-5324-4BDC-A73E-0818DCBC488C":null}},object_id:"D34F6908-FE0F-4985-AEE8-33CEC5520992",page:"Page 1"},{override:{"784882E4-8379-40B6-99DE-5AC168ADF1CD":{"C28E8C97-E4CB-4ADA-982C-E561552782EE":"Pay Credit Card"}},object_id:"D34F6908-FE0F-4985-AEE8-33CEC5520992",page:"Page 1"},{override:{"784882E4-8379-40B6-99DE-5AC168ADF1CD":{"C594C6E3-BB74-4747-8411-DA1F9A27AA02":"500TL due June 9 on credit card • 1234"}},object_id:"D34F6908-FE0F-4985-AEE8-33CEC5520992",page:"Page 1"},{override:{"4381959D-C9DE-46DE-88B2-6FE7BCFA3235":{"C28E8C97-E4CB-4ADA-982C-E561552782EE":"Transfer to Business Partner X"}},object_id:"D34F6908-FE0F-4985-AEE8-33CEC5520992",page:"Page 1"},{override:{"4381959D-C9DE-46DE-88B2-6FE7BCFA3235":{"C594C6E3-BB74-4747-8411-DA1F9A27AA02":"Transfer from Primary account •1234"}},object_id:"D34F6908-FE0F-4985-AEE8-33CEC5520992",page:"Page 1"},{override:{"53A31A49-0BE7-4994-BD2A-898CA2B565AA":null},object_id:"D34F6908-FE0F-4985-AEE8-33CEC5520992",page:"Page 1"},{object_id:"6D847761-5324-4BDC-A73E-0818DCBC488C",text:"XXXX",formats:[{italic:!1,font_size:18,color:{r:0,b:0,g:0,a:1},strikethrough:!1,start_index:0,font_family:"HelveticaNeue",underline:!1,bold:!1}],page:"Symbols"},{override:{"6D847761-5324-4BDC-A73E-0818DCBC488C":"YYYY"},object_id:"4037F287-D93C-4713-BCAE-A6263B1BB732",page:"Symbols"},{override:{"C28E8C97-E4CB-4ADA-982C-E561552782EE":null},object_id:"784882E4-8379-40B6-99DE-5AC168ADF1CD",page:"Symbols"},{override:{"C594C6E3-BB74-4747-8411-DA1F9A27AA02":null},object_id:"784882E4-8379-40B6-99DE-5AC168ADF1CD",page:"Symbols"},{override:{"C28E8C97-E4CB-4ADA-982C-E561552782EE":null},object_id:"4381959D-C9DE-46DE-88B2-6FE7BCFA3235",page:"Symbols"},{override:{"C594C6E3-BB74-4747-8411-DA1F9A27AA02":null},object_id:"4381959D-C9DE-46DE-88B2-6FE7BCFA3235",page:"Symbols"},{object_id:"53A31A49-0BE7-4994-BD2A-898CA2B565AA",text:" ",formats:[{italic:!1,font_size:12,color:{r:1,b:1,g:1,a:1},strikethrough:!1,start_index:0,font_family:"HelveticaNeue",underline:!1,bold:!1}],page:"Symbols"},{object_id:"C28E8C97-E4CB-4ADA-982C-E561552782EE",text:"PPP",formats:[{italic:!1,font_size:12,color:{r:.03529412,b:.047058824,g:.03529412,a:1},strikethrough:!1,start_index:0,font_family:"HelveticaNeue",underline:!1,bold:!1}],page:"Symbols"},{object_id:"C594C6E3-BB74-4747-8411-DA1F9A27AA02",text:"Payroll transfers, rent, and 1 more transaction are waiting for your approval.",formats:[{italic:!1,font_size:10,color:{r:.6117647,b:.6117647,g:.6117647,a:1},strikethrough:!1,start_index:0,font_family:"HelveticaNeue",underline:!1,bold:!1}],page:"Symbols"}]},project_version:{id:"0e59f076-f783-4125-96b7-673bf31a4a54",name:"version 2",project_id:"51473a1a-a3ab-438b-a6fd-95d115c5319a"},updated_at:"2017-06-23T20:49:36.864-07:00",done:!0,state:"running"}},setSetting_value_:function(e,t){return n.log("Setting Setting "+e+": "+t),!0},selectProject_:function(e){n.log("Setting project to: "+e.name)},clearProject:function(){n.log("Clear Project")},openProjectSelect:function(){n.log("Set Project!")},actionPush_comment_:function(e,o){return"string"==typeof e?n.log("PUSH New version: "+e):n.log("PUSH Existing version: "+e),n.log("Comment: "+o),t({id:"job-id-1"})},actionPull_:function(e){return"string"==typeof e?n.log("PUSH New version: "+e):n.log("PUSH Existing version: "+e),t({id:"job-id-1"})},actionRefresh_:function(e){return n.log("Refreshing..."),n.log("Context: ",e),t({id:"job-id-1"})},openlogin:function(){n.log("openlogin!")},openURL_:function(e){n.log("Opening URL: "+e)},openContentSyncURL_:function(e){n.log("Opening ContentSync URL: "+e)},logout:function(){n.log("LOG OUT.")},versions:function(){return t([{name:"v1",id:"1-1"},{name:"v2",id:"1-2"}])}}}var B=null,D=function(e,t){return n.log("Callback Handler:"),B&&(e?(n.log("Data:"),n.log(e),B.resolve(e)):(n.log("Error:"),n.log(t),t||(t="Unable To Retrieve"),B.reject(t))),!0},x=function(t){n.log("Wait for callback...");var o=e.defer();return t?o.resolve(t):B=o,o.promise};t.callbackHandler=D;var $={closePanel:c,sketchFileName:u(),hasSelectedVersions:p(),get:r,username:a(),accounts:g,project:l,projects:d,refreshProject:f,createProject:m,runner:v,lastRunner:h,versions:b,setSetting:S,open:{projectSelect:y,url:A,CSUrl:w},actions:{selectProject:_,clearProject:E,actionPush:C,actionPull:j,actionRefresh:k},auth:{login:i,logout:s}};return $}e.$inject=["$q","$window","$log","$timeout"],angular.module("appContentsyncSketch").factory("csFrameworksJSCallbacks",e)}(),function(){"use strict";function e(){return{restrict:"EA",transclude:!0,scope:{error:"="},bindToController:!0,templateUrl:"app/components/cs-error/cs-error.html",controller:t,controllerAs:"vm"}}function t(e){var t=this;t.logout=e.auth.logout,t.openBilling=function(){var t=e.username,n=t+"/billing";e.open.CSUrl(n)},t.openSupport=function(){var t="mailto:support@contentsync.io";e.open.url(t)}}t.$inject=["csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").directive("csError",e)}(),function(){"use strict";function e(e){var t=this;t.saving=!1,t.error=null,t.project=e.project(),t.refreshProject=function(){return t.project=null,e.refreshProject().then(function(n){return t.project=e.project(),n})},t.settingChange=function(n,o){return t.saving=!0,e.setSetting(n,o).then(function(n){return t.project=e.project(),n})["catch"](function(e){t.error=e})}}e.$inject=["csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("SettingsProjectController",e)}(),function(){"use strict";function e(e){var t=this;t.project=e.project(),t.clearProject=e.actions.clearProject,t.sketchFileName=e.sketchFileName,t.openProjectSelect=function(){e.open.projectSelect()},t.openProject=function(){var n=t.project.owner.username+"/"+t.project.name;e.open.CSUrl(n)},t.openGoogleSheet=function(){var n="https://docs.google.com/spreadsheets/d/"+t.project.google_doc.link;e.open.url(n)}}e.$inject=["csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("SettingsFileController",e)}(),function(){"use strict";function e(e){var t=this;t.pagecontent="HELLO!",t.versions=e.versions(),t.username=e.username,t.versionSelect=function(t){e.actions.actionPush(t.name)}}e.$inject=["csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("PushController",e)}(),function(){"use strict";function e(e){var t=this;t.sketchFileName=null,e.sketchFileName&&(t.sketchFileName=e.sketchFileName,t.sketchFileName=t.sketchFileName.replace(/\./g,"-"),t.sketchFileName=t.sketchFileName.replace(/\ /g,"")),t.projects=null,t.setnewproject=!1,t.newproject={owner:null,name:t.sketchFileName},t.savednewproject=null,t.createNewProject=function(){t.createprojectbtnlabel="Create Project",t.createprojectbtnloading=!1,t.setnewproject=!0,e.accounts().then(function(e){t.accounts=e,0==t.accounts.length?t.error="No Accounts":1==t.accounts.length&&t.selectOwner(t.accounts[0])})["catch"](function(e){t.error=e})},t.createProject=function(){t.createprojectbtnlabel="Creating Project...",t.createprojectbtnloading=!0;var n={name:t.newproject.name,description:t.newproject.description,user_oauth_id:t.newproject.auth.id,with_google_doc:!0,owner:{username:t.newproject.owner.username}};e.createProject(n).then(function(e){t.savednewproject=e,t.projectSelect(e)})["catch"](function(e){t.saveerror=e})["finally"](function(){t.createprojectbtnlabel="Create Project",t.createprojectbtnloading=!1})},t.selectOwner=function(e){t.newproject.owner=e,t.newproject.owner.auths.map(function(e){e.primary&&(t.newproject.auth=e)})},t.openAccountBilling=function(){e.open.CSUrl(t.newproject.owner.username+"/billing")},e.projects().then(function(e){t.projects=e})["catch"](function(e){t.error=e}),t.projectFullName=function(e){return e.owner.username+"/"+e.name},t.projectSelect=function(t){e.actions.selectProject(t)},t.openOrganizationCreate=function(){e.open.CSUrl("organizationnew")},t.addMoreGoogleAccounts=function(){var n=t.newproject.owner.username+"/settings";e.open.CSUrl(n)}}e.$inject=["csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("ProjectSelectController",e)}(),function(){"use strict";function e(e){var t=this;t.login=e.auth.login}e.$inject=["csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("LoginController",e)}(),function(){"use strict";function e(e,t,n){var o=this;o.update=function(){o.runner=n.runner(),o.runner||(o.runner=n.lastRunner())},e.updateRunner=function(){o.update()},o.openSupport=function(){var e="mailto:support@contentsync.io";n.open.url(e)},o.update()}e.$inject=["$window","$interval","csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("ActionStatusController",e)}(),function(){"use strict";function e(e,t){var n=this;n.versions=null,n.error=null,n.pushing=!1,n.commenting=!1,n.versionname=null,n.selectedVersion=null,n.last_run=t.lastRunner(),n.actionRefresh=t.actions.actionRefresh,n.hasSelectedVersions=t.hasSelectedVersions,n.closePanel=t.closePanel,n.last_run&&"push"!=n.last_run.action_name&&(n.last_run=null),t.versions().then(function(e){n.versions=e})["catch"](function(e){n.error=e}),n.createNewVersion=function(){n.commenting||(n.commenting=!0)},n.versionSelect=function(e){n.commenting||(n.commenting=!0,n.selectedVersion=e)},n.cancel=function(){n.commenting=!1,n.pushing=!1,n.pushComment=null,n.selectedVersion=null,n.versionname=null},n.runPush=function(){n.commenting&&!n.pushing&&n.pushComment&&(n.selectedVersion?(n.pushing=!0,t.actions.actionPush(n.selectedVersion,n.pushComment)):n.versionname?(n.pushing=!0,t.actions.actionPush(n.versionname,n.pushComment)):(n.pushing=!1,n.commenting=!1))},n.update=function(){var e=t.runner();e&&e.done?(n.runner=e,n.runnerTemp=null):n.runnerTemp=e},e.updateRunner=function(){n.update()}}e.$inject=["$window","csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("ActionPushController",e)}(),function(){"use strict";function e(e,t){var n=this;n.versions=null,n.error=null,n.pulling=!1,n.actionRefresh=t.actions.actionRefresh,n.hasSelectedVersions=t.hasSelectedVersions,n.closePanel=t.closePanel,t.versions().then(function(e){n.versions=e})["catch"](function(e){n.error=e}),n.versionSelect=function(e){n.pulling||(n.pulling=!0,t.actions.actionPull(e))},n.cancel=function(){n.pulling=!1,n.runner=null},n.update=function(){var e=t.runner();e&&e.done?(n.runner=e,n.runnerTemp=null):n.runnerTemp=e},e.updateRunner=function(){n.update()}}e.$inject=["$window","csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("ActionPullController",e)}(),function(){"use strict";function e(e){var t=this;t.username=e.username,t.logout=e.auth.logout,t.openAccount=function(){var n=t.username;e.open.CSUrl(n)}}e.$inject=["csFrameworksJSCallbacks"],angular.module("appContentsyncSketch").controller("AccountController",e)}(),angular.module("appContentsyncSketch").run(["$templateCache",function(e){e.put("app/components/cs-error/cs-error.html",'<div class=cs-error ng-if=vm.error><div ng-if="vm.error == \'500\'"><h1>500 Error</h1><h2>Server Connection Issues</h2><h3>Make sure you have internet connection.</h3></div><div ng-if="vm.error.status == 402"><h1>Thank you for using ContentSync</h1><h2>Unfortunately your trial period is over.<br>We hope you enjoyed it!</h2><button class="btn btn-success" ng-click=vm.openBilling()>Add Billing Information</button></div><div ng-if="vm.error == 401 || vm.error.status == 401"><h1>Invalid Account</h1><h2>Looks like your logged in account is invalid.<br><br>Please try logging out and then back in.</h2><button class="btn btn-success" ng-click=vm.logout()>Log Out</button></div><div ng-if="vm.error != \'401\' && vm.error != \'500\' && vm.error.status != 402  && vm.error.status != 401"><h1>Error:</h1><h2 ng-if="vm.error && vm.error.error">{{ vm.error.error }}</h2><h2 ng-if="vm.error && !vm.error.error">{{ vm.error }}</h2><button class="btn btn-default" ng-click="vm.error = null;">OK</button></div><div style="padding: 15px 15px 0px 15px; font-size: 11px">If you have any questions, contact support at <a ng-click=vm.openSupport()>support@contentsync.io</a>.</div></div>'),e.put("app/components/cs-loading/cs-loading.html","<div class=section-loading>{{ vm.csText }} <span class=dot ng-class=\"{ 'dot_visible': vm.count >= 0, 'dot_invisible': vm.count < 0 }\">.</span> <span class=dot ng-class=\"{ 'dot_visible': vm.count >= 1, 'dot_invisible': vm.count < 1 }\">.</span> <span class=dot ng-class=\"{ 'dot_visible': vm.count >= 2, 'dot_invisible': vm.count < 2 }\">.</span> <span class=dot ng-class=\"{ 'dot_visible': vm.count >= 3, 'dot_invisible': vm.count < 3 }\">.</span></div>"),e.put("app/components/cs-page/cs-page.html","<div class=cs-page><ng-transclude></ng-transclude></div>"),e.put("app/components/cs-page-body/cs-page-body.html",'<div class="cs-page-body cs-page-panel" ng-class="{ \'cs-standalone-panel\': vm.standalone }"><cs-error error=vm.error></cs-error><div ng-if=!vm.error><div ng-if=vm.loading><cs-loading></cs-loading></div><div ng-if=!vm.loading class=cs-page-content><ng-transclude></ng-transclude></div></div></div>'),e.put("app/components/cs-project-select-button/cs-project-select-button.html","<div class=cs-project-select-button ng-click=vm.click()>{{ vm.project.owner.username }}/{{ vm.project.name }}</div>"),e.put("app/components/cs-section/cs-section.html","<div class=cs-section><ng-transclude></ng-transclude></div>"),e.put("app/components/cs-setting-row/cs-setting-row.html",'<div class=cs-setting-row><div class=row><div class=col-xs-2 style="text-align: right; padding-right: 10px"><div ng-transclude></div></div><div class=col-xs-6 style="text-align: left; padding-top: 5px"><div tooltip-append-to-body=true style="display: inline-block" uib-tooltip="{{ vm.tooltip() }}" tooltip-placement="{{ vm.tooltip_location }}">{{ vm.featureName }}</div><span class="label label-danger" style="font-size: 10px" ng-if=vm.error>{{ vm.error }}</span></div><div class=col-xs-4 style="padding: 2px 10px; text-align: right"><label ng-if=!vm.saving class=switch ng-class="{ \'saving\': vm.saving, \'error\': vm.saving_error }"><input type=checkbox ng-model=vm.is_feature_flag_set ng-click=vm.updateFeatureFlag();><div class="slider round"></div></label><button ng-if=vm.saving type=button class="btn btn-xs btn-success" ng-disabled=true>Saving...</button></div></div></div>'),e.put("app/components/cs-title/cs-title.html","<div class=cs-title ng-class=\"{ 'cs-title-spaced': vm.extraSpace }\"><ng-transclude></ng-transclude></div>"),e.put("app/components/cs-version-button/cs-version-button.html","<div class=cs-version-button ng-click=vm.click()>{{ vm.version.name }}</div>"),e.put("app/components/cs-version-select-button/cs-version-select-button.html",'<div class=cs-project-select-button ng-if="vm.version.name.length > 0" ng-click=vm.click()>{{ vm.version.name }}</div>'),e.put("app/components/navbar/navbar.html","<nav class=cs-header><div>{{ vm.title }}</div></nav>")}]);