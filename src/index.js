
const { router, telegram, text, route } = require('bottender/router');
const { chain } = require('bottender');
async function DefaultAction(context) {
  await context.sendText('輸入\"help\"會顯示功能選單。\n目前只有\'課程資訊查詢\'有回應。');
}

//顯示Inline kyeboard 的 function
async function ShowInlineKB(context) {
  //keyboard寫進一個變數裡
  const replyMarkup = {
    inlineKeyboard: [
      [
        {
          text: 'codeingHere 解題平台',
          url: 'https://www.jywglady.org/codinghereLab/',
        },
        {
          text: 'callback 不會用',
          callback_data: 'joke',
        },
      ],
      [
        {
          text: 'i-learning',
          url: 'https://i-learning.cycu.edu.tw',
        }
      ]
    ],

  };
  await context.sendText('請選擇：', { replyMarkup });
};

async function ShowKB(context) {
  const replyMarkup = {
    keyboard: [
      [
        {
          text: '語法解說',
          //學生輸入關鍵字，機器人提供程式語法的使用說明及範例程式碼。
        },
        {
          text: '課程資訊查詢',
          //課程相關說明與規定、老師助教聯絡資訊、實體與非同步課程時間等基本資料查詢。
        },
        {
          text: '常見問題解答',
          //提供一些基本範例，以及相關的解題思維
        }
      ],
      [
        {
          text:'作業相關查詢',
          //查詢作業及分數等基本資料。
        },
        {
          text:'作業參考答案',
          //對於已過期的程式作業，提供解題思維及相關的參考答案。
        },
        {
          text:'使用者回饋',
          //讓使用者回饋使用心得、使用建議及系統錯誤。
        }

      ]
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false

  };
  await context.sendText('Keyboard 出來吧！', { replyMarkup });
};
async function showSyntaxHint(context) {
  await context.sendText('以＄開頭，後面輸入想要查詢的語法\n ex:$print');
}
async function showSyntax(context) {
  await context.sendPhoto('https://i.imgur.com/r5PdC4o.png');
}
function RuleBased(context, {next}){
  return router([
    text('課程資訊查詢', ShowInlineKB),
    text('語法解說', showSyntaxHint),
    text('help', ShowKB),
    // return the `next` action
    text(/^\$/, showSyntax),
    route('*', next),
  ]);
}


module.exports = async function App(context) {

  return chain([
    RuleBased,
    DefaultAction
  ]);



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




