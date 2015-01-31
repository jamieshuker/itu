angular.module('starter.controllers', [])

.controller('GMCController', function ($scope, $ionicPopup, GMCService,FormDataService) {
    //store gmc no at scoe
    $scope.data = GMCService.data;

    $scope.askForGMCNo = function () {
        // An elaborate, custom popup
        var gmcPopup = $ionicPopup.show({
            template: '<input type="number" autofocus ng-model="data.gmcno" placeholder="7 digit gmc no" min="1000000" max="9999999">',
            title: 'Enter your GMC no',
            scope: $scope,
            buttons: [
              //{ text: 'Cancel' },
              {
                  text: '<b>Ok</b>',
                  type: 'button-positive',
                  onTap: function (e) {
                      return $scope.data.gmcno;
                  }
              }
            ]
        });
    };

    if (GMCService.data.gmcno == undefined)
        $scope.askForGMCNo();

})

.controller('ContentController', function ($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };


})

.controller('FormController', function ($scope, $ionicModal, GMCService, FormDataService) {

    //index of visible form input fields
    $scope.activeForm = -1;
    $scope.activeProcess = -1;
    $scope.formData = FormDataService.data;
    $scope.gmcData = GMCService.data;

    $scope.writeToFirebase = function (obj) {
     //   var myFirebaseRef = new Firebase("https://brilliant-torch-5389.firebaseio.com/itu/");

     //   myFirebaseRef.push({ hospitalno: "ab1234", data: obj });
    }

    //serialize data here into new json object of just inputid/value
    $scope.formToIDandValues = function (form) {
        var result = [];
        for (var f = 0; f < form.length; f++) {
            for (c = 0; c < form[f].controls.length; c++) {
                if (form[f].controls[c].type == 'multicheckbox') {
                    for (m = 0; m < form[f].controls[c].checkBoxes.length; m++) {
                        var mobj = {};
                        mobj['id'] = form[f].controls[c].checkBoxes[m].inputid;
                        mobj['value'] = form[f].controls[c].checkBoxes[m].value;
                        result.push(mobj);
                    }
                }
                else {
                    var obj = {};
                    obj['id'] = form[f].controls[c].inputid;
                    obj['value'] = form[f].controls[c].value;
                    result.push(obj);
                }
            }
        }
        return result;
    }



    $scope.resetValuesToInitialValues = function (form) {
        var result = [];
        for (var f = 0; f < form.length; f++) {
            for (c = 0; c < form[f].controls.length; c++) {
                if (form[f].controls[c].type == 'multicheckbox') {
                    for (m = 0; m < form[f].controls[c].checkBoxes.length; m++) {
                        form[f].controls[c].checkBoxes[m].value = form[f].controls[c].checkBoxes[m].initialvalue;
                        
                    }
                }
                else {
                    form[f].controls[c].value = form[f].controls[c].initialvalue;
                }
            }
        }
        return result;
    }


    //handles next button click
    //saves history against form object
    $scope.nextForm = function () {
        var currentformid = $scope.activeForm;
        //if no route property on any value we always jump to the next entry

        if ($scope.nextFormID != null)
            $scope.activeForm = findArrayIndexByNameAndValue(FormDataService.data[$scope.activeProcess].processforms, "formid", $scope.nextFormID)
        else
            $scope.activeForm++;

        //record previous formid so back button is easy to manage
        FormDataService.data[$scope.activeProcess].processforms[$scope.activeForm].previousformindex = currentformid;
    }

    //navigates to preivous form 
    //form history
    $scope.previousForm = function () {
        $scope.activeForm = FormDataService.data[$scope.activeProcess].processforms[$scope.activeForm].previousformindex;
    }

    $scope.startForm = function (processIndex) {
        $scope.activeForm = 0;
        $scope.activeProcess = processIndex;
        $scope.resetValuesToInitialValues(FormDataService.data[$scope.activeProcess].processforms);
    }


    //overrides default routing
    $scope.controlChange = function (formValue, controlRoute, formToID) {
        if ((controlRoute != undefined) && (formValue == controlRoute.condition)) {
            $scope.nextFormID = controlRoute.toformid;
        }
        else if (formToID != undefined) {
            $scope.nextFormID = formToID;
        }
        else
            $scope.nextFormID = null;
    }


    //send data somewhere, tidy up
    $scope.submitForm = function () {
        //$("#mainform").css("display", "none");
        //$("#pleasewait").css("display", "block");
        //$("#pleasewait").css("display", "none");
        //$("#finished").css("display", "block");

        //need to just serialize data here into new json object of just inputid/value
        $scope.writeToFirebase($scope.formToIDandValues(FormDataService.data[$scope.activeProcess].processforms));

        //$scope.activeForm = 0;
    }

    //can do stuff here when form changes
    $scope.$watch("formControls", function () {
        //    console.log(FormDataService.data);
        //add lookup function here to find next form based on input
    }, true);


});