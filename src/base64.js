const { router, text, payload, route } = require('bottender/router');
// const { chain } = require('bottender');

async function DefaultAction(context) {
    await context.sendText('輸入\"help\"會顯示功能選單。\n目前只有\'課程資訊查詢\'有回應。');
}


async function toBase64(context) {
    inputStr = context.event.text;
    var Buffer = require('buffer').Buffer;
    var buf = Buffer.from('Hello, world');
    outStr = buf.toString('base64');

    await context.sendText(outStr);
}



function RuleBased(context, { next }) {
    return router([
        //text('課程資訊查詢', ShowInlineKB),
        text('課程資訊查詢', ShowCourseInfoKB),
        text('語法解說', showSyntaxHint),
        text('help', ShowKB),
        text('回主選單', ShowKB),
        // return the `next` action
        text(/^\$/, showSyntax),
        route('*', next),
    ]);
}


module.exports = async function App(context) {

    toBase64(context);

    // if (context.event.isText) {
    //   if (context.event.text == "help1") {
    //     await context.sendMessage('請選擇：', { replyMarkup });
    //   }
    //   if (context.event.text == "help2") {
    //     await context.sendMessage('Keyboard 不出來', { replyMarkup2 });
    //   }
    //   //await context.sendText(`received the text message: ${context.event.text}`);
    // };



    // await context.sendMessage('請選擇', { replyMarkup2 });

    // await context.sendText('I success!');

};




