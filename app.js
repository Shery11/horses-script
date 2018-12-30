var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');



var firebase = require('firebase');
firebase.initializeApp({
    apiKey: "AIzaSyB5rfOtfzTE8cHnLDTyhoKBou-BSbkFJ_U",
    authDomain: "uberuptest.firebaseapp.com",
    databaseURL: "https://uberuptest.firebaseio.com",
    projectId: "uberuptest",
    storageBucket: "uberuptest.appspot.com",
    messagingSenderId: "563944233944"
});


var ref = firebase.app().database().ref();

// ref.on('value',data=>{
//     console.log(data.getChildrenCount())
// })



var getStream = function () {
    var jsonData = 'testinghorse-9d892-horses-export.json',
        stream = fs.createReadStream(jsonData, {
            encoding: 'utf8'
        }),
        parser = JSONStream.parse('*');
    return stream.pipe(parser);
};


var sireundefined =0;
var emptySireofDam =0;
var competitionsundefined = 0;
var validsireofdam = 0;

getStream()
    .pipe(es.mapSync((data) => {


        let sireofdam;

        console.log(data.Sire_of_Dam);
        console.log(data.FEIID);

        if(data.Sire_of_Dam == undefined){
            sireundefined++
        }

       
      
         
        if(data.Sire_of_Dam != undefined){
            sireofdam = data.Sire_of_Dam;
            // console.log(sireofdam.length); 
             if(sireofdam.length == 1){
                // console.log(data.FEIID);
                emptySireofDam++
            }
        }

      

        if(data.Competition == undefined){
           competitionsundefined++
        }

        if(data.Sire_of_Dam != undefined){
            validsireofdam++;
        }


        console.log(sireundefined);
        console.log(emptySireofDam);
        console.log(competitionsundefined);
        console.log(validsireofdam);
        
        // if (data.Sire_of_Dam != undefined) {

        //     data.Sire_of_Dam = data.Sire_of_Dam.trim()
        //     data.Sire_of_Dam = data.Sire_of_Dam.toUpperCase();
        //     console.log(data.Sire_of_Dam)
        //     var f = data.FEIID;
        //     console.log(f)
        //     data = {
        //         [f]: data
        //     };

        //     // console.log(data);
        //     // data = JSON.stringify(data)
        //     // data = data.substring(1, data.length - 1);
        //     counter++;
        //     console.log(counter);
        //     // ref.update(data).then(data=>{

        //     //   }).catch(err=>{
        //     //       throw err;
        //     //   });

        // }
        console.log("======================================================================")
    }));