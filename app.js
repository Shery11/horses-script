var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');



var firebase = require('firebase');
firebase.initializeApp({
    // apiKey: "AIzaSyB5rfOtfzTE8cHnLDTyhoKBou-BSbkFJ_U",
    // authDomain: "uberuptest.firebaseapp.com",
    // databaseURL: "https://uberuptest.firebaseio.com",
    // projectId: "uberuptest",
    // storageBucket: "uberuptest.appspot.com",
    // messagingSenderId: "563944233944"
    // apiKey: "AIzaSyBhoBZ9Zjr-5BySgE_sdIjVan_CA2b-rlM",
    // authDomain: "battery-managment-system.firebaseapp.com",
    // databaseURL: "https://battery-managment-system.firebaseio.com",
    // projectId: "battery-managment-system",
    // storageBucket: "battery-managment-system.appspot.com",
    // messagingSenderId: "946958798915"
    apiKey: "AIzaSyBF4PzVpz2MVL3oApMSIRBGCwRGRT3YDC8",
    authDomain: "atrix-forms.firebaseapp.com",
    databaseURL: "https://atrix-forms.firebaseio.com",
    projectId: "atrix-forms",
    storageBucket: "atrix-forms.appspot.com",
    messagingSenderId: "973447590589"
});


var ref = firebase.app().database().ref('horses');

// ref.on('value',data=>{
//     console.log(data.getChildrenCount())
// })



var getStream = function () {
    var jsonData = 'data.json',
        stream = fs.createReadStream(jsonData, {
            encoding: 'utf8'
        }),
        parser = JSONStream.parse('*');
    return stream.pipe(parser);
};


var sireundefined = 0;
var emptySireofDam = 0;
var validsireofdam = 0
var zeroscore = 0;
var counter = 0;
var total = 0;
var horsewithoutcompetitions = 0

getStream()
    .pipe(es.mapSync((data) => {

        //////////////////////////////////////Script for Empty Non empty horse Calculation//////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        total++
        // script to find empty horses score
        if (data.Competition) {



            let competitions = data.Competition
            for (var key in competitions) {
                if (competitions.hasOwnProperty(key)) {
                    if (competitions[key].Score == "") {
                        console.log(data.FEIID)
                        zeroscore++;
                        break;
                    } else {
                        // ////////code to push in firebase//////
                        // var f = data.FEIID;
                        // console.log(f)
                        // data = {
                        //     [f]: data
                        // };
                        // ref.update(data).then(data => {

                        // }).catch(err => {
                        //     throw err;
                        // });
                        // ////////////////////////////////////////
                        // //////code for triming sireifdams
                        if (data.Sire_of_Dam != undefined) {
                            sireofdam = data.Sire_of_Dam;
                            if (sireofdam.length == 1) {
                                emptySireofDam++
                            }
                            validsireofdam++;
                            // console.log(data.Sire_of_Dam)
                            data.Sire_of_Dam = data.Sire_of_Dam.trim()
                            data.Sire_of_Dam = data.Sire_of_Dam.toUpperCase();
                            // console.log("Sire of dam: " + data.Sire_of_Dam)

                            if (data.Sire != undefined) {
                                // console.log("Sire: " + data.Sire)
                                data.Sire = data.Sire.trim();
                                data.Sire = data.Sire.toUpperCase();
                                // console.log("Sire: " + data.Sire)
                            }
                            var f = data.FEIID;
                            console.log(f)
                            data = {
                                [f]: data
                            };

                            // console.log(data);
                            // data = JSON.stringify(data)
                            // data = data.substring(1, data.length - 1);
                            // counter++;
                            // console.log(counter);
                            ref.update(data).then(data => {

                            }).catch(err => {
                                throw err;
                            });
                        } else {
                            sireundefined++
                        }
                        counter++
                        break;

                    }
                }
            }
        } else {
            horsewithoutcompetitions++
        }
        console.log("Zero Score " + zeroscore);
        console.log("With Scores " + counter);
        console.log("Total Horses " + total);
        console.log("Horse with out competitions " + horsewithoutcompetitions);
        //////////////////////////////////////Script for Empty Non empty horse Calculation end//////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        console.log("No sire of dam " + sireundefined);
        console.log("Empty Sire of dam " + emptySireofDam);
        console.log("Valid sire of dam " + validsireofdam);


        console.log("======================================================================")
    }));


function getCompetitionDateArray(competitions) {

    let compDateSet = new Set;
    let compDateArray = new Array;

    for (var key in competitions) {
        if (competitions.hasOwnProperty(key)) {
            // console.log(key + " -> " + competitions[key].StartDate.substr(6,9));
            // add them to set for uniqueness
            compDateArray.add(competitions[key]);
        }
    }
    return compDateArray;

}