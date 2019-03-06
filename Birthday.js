var fs = require('fs'),
    JSONStream = require('JSONStream'),
    es = require('event-stream');


var getStream = function () {
    var jsonData = '8761.json',
        stream = fs.createReadStream(jsonData, {
            encoding: 'utf8'
        }),
        parser = JSONStream.parse('*');
    return stream.pipe(parser);
};


// 100000 [ 957, 498, 1383, 2337, 2748, 1405, 386, 112, 46, 48, 40, 40 ]
// 8761   [ 581, 287, 1084, 2143, 2686, 1390, 430, 96, 21, 21, 14, 8 ]
// total  [1538, 785, 2467, 4480, 5434, 2795, 816, 208, 67, 69, 54 , 48]

var months = new Array(12).fill(0);
console.log(months); 

var total = 0;
getStream()
    .pipe(es.mapSync((horse) => {



        // total++
        // gives us month

        
         console.log(horse['Date Of birth'])
         let month;
        let tempmonth = horse['Date Of birth'].split('/')[1]
        if(tempmonth > 9){
           month = tempmonth
        }else{
          month = tempmonth.charAt(1);
        }
        
        
        console.log(month);
        let valueatindex = months[month-1];
        valueatindex++;
        months[month-1] = valueatindex;
      
        console.log(months);
        // console.log(total);

        



        console.log("===============================Horse End=======================================")
    }));