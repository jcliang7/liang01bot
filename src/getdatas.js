const { router, text, payload, route } = require('bottender/router');
const { chain } = require('bottender');
const { fireDB } = require('./firebase')

// fireDB.collection("start").doc("user").get()
//     .then(result => {
//         console.log("I can get firestore data", result.data())
//     })
var errs = {};
var fs = require('fs');
async function getFirebaseData(context) {
    errs = {};
    const citiesRef = fireDB.collection('comms');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
        errs[doc.id] = doc.data();
    });
    // console.log(errs);
    try {
        tempData = fs.writeFileSync('./dataBak/comms_20211020.txt', JSON.stringify(errs));
        console.log("successful!!!!!!!!!!!!!!!");
    } catch (e) {
        console.log(e);
    }

    // fs.writeFile('./dataBak/err_20211201.txt', "abcdefg");
    await context.sendText('getData Over!!');
}

const converter = require('json-2-csv');
async function txtToCsv() {
    let readData, objData;
    try {
        readData = fs.readFileSync('./dataBak/comms_20211020.txt', 'utf8');
        // console.log(data)
        objData = JSON.parse(readData);
    } catch (err) {
        console.error(err)
    }
    let keys = Object.keys(objData);
    //console.log(objData[keys[0]]);
    let arrData = [];
    for (let i = 0; i < keys.length; i++) {
        // arrData.push(JSON.stringify(objData[keys[i]]));
        arrData.push(objData[keys[i]]);
    }
    console.log(arrData[0]);
    converter.json2csv(arrData, (err, csv) => {
        if (err) {
            throw err;
        }
    
        // print CSV string
        //console.log(csv);
    
        // write CSV to a file
        fs.writeFileSync('./dataBak/comms.csv', csv);
        
    });
    //console.log(objData.keys());
}


// const fs = require('fs')

// const content = 'Some content!'

// fs.writeFile('/Users/joe/test.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

function RuleBased(context, { next }) {
    return router([
        //text('課程資訊查詢', ShowInlineKB),
        // text('課程資訊查詢', ShowCourseInfoKB),
        // text('語法解說', showSyntaxHint),
        // text('help', ShowKB),
        // text('回主選單', ShowKB),
        // return the `next` action
        // text(/^\$/, showSyntax),
        text('getdata', getFirebaseData),
        text('tocsv', txtToCsv),
        route('*', next),
    ]);
}


module.exports = async function App(context) {
    return chain([
        RuleBased,
    ]);
};




