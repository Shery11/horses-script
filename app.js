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
    var jsonData = '4000.json',
        stream = fs.createReadStream(jsonData, {
            encoding: 'utf8'
        }),
        parser = JSONStream.parse('*');
    return stream.pipe(parser);
};


var sireundefined = 0;
var sireofdamundefined = 0;
var emptySireofDam = 0;
var emptySire = 0;
var validsireofdam = 0
var validsire = 0
var zeroscore = 0;
var counter = 0;
var total = 0;
var horsewithoutcompetitions = 0
var horsewithcompetitions = 0
var validURL = 0
var noURL = 0
var StallionSet = new Set;
var StallionArray = new Array;

getStream()
    .pipe(es.mapSync((data) => {

        // script to get list of all stallions

        // StallionSet.add(data.Sire);
        // StallionSet.add(data.Sire_of_Dam);
        // console.log(StallionSet);
        // script to get list of all stallions

        //////////////////////////////////////Script for Empty Non empty horse Calculation//////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        total++
        // console.log(data[Object.keys(data)[0]]);
        data = data[Object.keys(data)[0]]
        console.log("FEIID:"+data.FEIID)
        if (data.Competition) {
            horsewithcompetitions++
            let competitions = data.Competition
            let compCounter = 0;
            for (var key in competitions) {
                compCounter++
                if (competitions.hasOwnProperty(key)) {
                    if (competitions[key].Score == "") {
                        console.log("Missing Score")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Article == "") {
                        console.log("Missing Article")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Athlete == "") {
                        console.log("Missing Athlete")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Competition == "") {
                        console.log("Missing Competition")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Event == "") {
                        console.log("Missing Event")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].FEIID == "") {
                        console.log("Missing FEIID")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Obstheigh == "") {
                        console.log("Missing Obstheigh")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Pos == "") {
                        console.log("Missing Pos")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Score == "") {
                        console.log("Missing Score")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].Show == "") {
                        console.log("Missing Show")
                        // zeroscore++;
                        // break;
                    }
                    if (competitions[key].StartDate == "") {
                        console.log("Missing StartDate")
                        // zeroscore++;
                        // break;
                    }

                    // "Article": "274.2.5",
                    // "Athlete": "Tessa Leni THILLMANN (GER)",
                    // "Competition": "Two Phases",
                    // "Event": "CSIOCh",
                    // "FEIID": "10162403",
                    // "Obstheigh": "120",
                    // "Pos": "6",
                    // "Score": "0/0/22.48",
                    // "Show": "Samorin",
                    // "StartDate": "02/08/2018"

                    // if()

                    // else {
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
                    // if (data.Sire_of_Dam != undefined) {
                    //     sireofdam = data.Sire_of_Dam;
                    //     if (sireofdam.length == 0) {
                    //         emptySireofDam++
                    //     }
                    //     validsireofdam++;
                    //     // console.log(data.Sire_of_Dam)
                    //     data.Sire_of_Dam = data.Sire_of_Dam.trim()
                    //     data.Sire_of_Dam = data.Sire_of_Dam.toUpperCase();
                    //     console.log("Sire of dam: " + data.Sire_of_Dam)

                    //     if (data.Sire != undefined) {
                    //         // console.log("Sire: " + data.Sire)
                    //         if (data.Sire.length == 0) {
                    //             emptySire++
                    //         }
                    //         data.Sire = data.Sire.trim();
                    //         data.Sire = data.Sire.toUpperCase();
                    //         console.log("Sire: " + data.Sire)
                    //     }
                    //     var f = data.FEIID;
                    //     console.log(f)
                    //     data = {
                    //         [f]: data
                    //     };


                    //     // data = JSON.stringify(data)
                    //     // data = data.substring(1, data.length - 1);
                    //     // counter++;
                    //     // console.log(counter);
                    //     // ref.update(data).then(data => {

                    //     // }).catch(err => {
                    //     //     throw err;
                    //     // });
                    // } else {
                    //     sireundefined++
                    // }
                    // counter++
                    // break;

                    // }

                }
            }
            console.log("TOTAL Competitions:" + compCounter);
            if(compCounter > 50){
                fs.appendFile('50greater.txt', data.FEIID+",", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });  
            }
        } else {
            // console.log("in else");
            horsewithoutcompetitions++
            fs.appendFile('NoCompetitions.txt', data.FEIID+",", function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }

        if (data.Sire_of_Dam != undefined) {
            sireofdam = data.Sire_of_Dam;
            if (sireofdam.length == 0) {
                emptySireofDam++
                fs.appendFile('emptySireofDam.txt', data.FEIID+",", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            } else {
                validsireofdam++;
            }
            // console.log(data.Sire_of_Dam)
            data.Sire_of_Dam = data.Sire_of_Dam.trim()
            data.Sire_of_Dam = data.Sire_of_Dam.toUpperCase();
            // console.log("Sire of dam: " + data.Sire_of_Dam)


            // var f = data.FEIID;
            // console.log(f)
            // data = {
            //     [f]: data
            // };


            // data = JSON.stringify(data)
            // data = data.substring(1, data.length - 1);
            // counter++;
            // console.log(counter);
            // ref.update(data).then(data => {

            // }).catch(err => {
            //     throw err;
            // });
        } else {
            sireofdamundefined++
        }

        if (data.Sire != undefined) {
            // console.log("Sire: " + data.Sire)
            if (data.Sire.length == 0) {
                emptySire++;
                fs.appendFile('emptySire.txt', data.FEIID+",", function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });
            } else {
                validsire++
            }
            data.Sire = data.Sire.trim();
            data.Sire = data.Sire.toUpperCase();
            // console.log("Sire: " + data.Sire)
        } else {

            sireundefined++

        }

        if (data.URL.length == 0) {
            noURL++
            fs.appendFile('noURL.txt', data.FEIID+",\n", function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
            console.log("==========================================================================================FEIID:" + data.FEIID)

        } else {
            validURL++

        }

        console.log("Total Horses " + total);

        console.log("Sire of dam undefined " + sireofdamundefined);
        console.log("Sire undefined " + sireundefined);
        console.log("Valid sire of dam " + validsireofdam);
        console.log("Valid sire " + validsire);
        console.log("empty sire of dam " + emptySireofDam);
        console.log("empty sire " + emptySire);
        console.log("No URL " + noURL);
        console.log("Valid URL " + validURL);



        // // console.log("With Scores " + counter);

        console.log("Horse with out competitions " + horsewithoutcompetitions);
        console.log("Horse with competitions " + horsewithcompetitions);


        ////////////////////////////////////Script for Empty Non empty horse Calculation end//////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // console.log("No sire of dam " + sireundefined);
        // console.log("No sire of dam undefined " + sireofdamundefined);
        // console.log("Empty Sire of dam " + emptySireofDam);
        // console.log("Empty Sire of dam " + emptySire);
        // console.log("Valid sire of dam " + validsireofdam);


        console.log("======================================================================")
    })).on('finish', () => {

        // script to get list of all stallions
        // console.log(StallionSet);
        // StallionArray = Array.from(StallionSet);
        // fs.writeFile("StallionLIst", StallionArray, function(err) {
        //     if(err) {
        //         return console.log(err);
        //     }

        //     console.log("The file was saved!");
        // }); 
    });


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