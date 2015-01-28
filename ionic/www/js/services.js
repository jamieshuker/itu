angular.module('starter.services', [])

/* these are used to share state between controllers */
.service('GMCService', function () {
    // private variable
    var _data = { gmcno: null };

    this.data = _data;
})

.service('FormDataService', function () {
    //eventially init from json @ server
    //or even just load a html file
    var _data = _globalFormConfig;

    //fetch data from js server?

    this.data = _data;
});
