const { router, text, payload, route } = require('bottender/router');
const { chain } = require('bottender');
const { fireDB } = require('./firebase')

fireDB.collection("start").doc("user").get()
    .then(result => {
        console.log("I can get firestore data", result.data())
    })

var fs = require('fs');
async function getFirebaseData(context) {
    let str;
    fireDB.collection("err").get()
        .then(result => {
            console.log("I can get firestore data ", typeof (result));
            
            //str = JSON.parse(result);
        })
    //console.log(typeof (str));


    // fs.writeFile('./dataBak/err_20191019.txt', str, function (err) {
    //     if (err) {
    //         console.log(err);

    //     }
    //     else
    //         console.log('Write operation complete.');
    // });

    await context.sendText('輸入\"help\"會顯示功能選單。\n目前只有\'課程資訊查詢\'有回應。');


}


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
        route('*', next),
    ]);
}


module.exports = async function App(context) {
    return chain([
        RuleBased,
    ]);
};




