const { router, text, payload, route, telegram } = require('bottender/router');
const { chain } = require('bottender');
//const qnaMaker = require('@bottender/qna-maker');
const qnaMaker = require('./my-qna-maker');
const { fireDB } = require('./firebase')

async function Unknown(context) {
  await context.sendText('抱歉，我不清楚如何回答你的問題。');
  //DefaultAction;
  await context.sendText('輸入\"help\"會顯示功能選單。');
}

const QnaMaker = qnaMaker({
  resourceName: process.env.RESOURCE_NAME,
  knowledgeBaseId: process.env.KNOWLEDGE_BASE_ID,
  endpointKey: process.env.ENDPOINT_KEY,
  scoreThreshold: 70,
});


async function DefaultAction(context) {
  await context.sendText('輸入\"help\"會顯示功能選單。');
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
          callback_data: '語法解說',
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

async function callBackCallKeyboard(context) {
  // let str = context.event.callbackQuery.data;
  // let myObj = {
  //   keyboard: [[{ text: 'row1' }], [{ text: 'row2' }], [{ text: 'row3' }],
  //   [{ text: 'row4' }], [{ text: 'row5' }], [{ text: 'row6' }]],
  // };
  // let myStr = JSON.stringify(myObj);
  // myStr = '<b>123</b>';
  // let isOkJson = 1;
  // try {
  //   console.log("try");
  //   JSON.parse(myStr)
  // } catch (e) {
  //   isOkJson = 0;
  //   console.log("catch" + e);
  // }
  // if (isOkJson) {
  //   const replyMarkup = JSON.parse(myStr);
  //   await context.sendText('請選擇您想要查詢的項目：', { replyMarkup });
  // } else {
  //   await context.sendText("error");
  // }
  const replyMarkup = {
    myStr:"請選擇，也可以直接輸入「題目名稱」或 「關鍵字」:",
    keyboard: [
      [{ text: '求兩數和 (N次)'}, { text: '求兩數和 (非零)' }],
      [{ text: '求兩數和 (檔尾)' }, { text: '求兩個數的最大公因數' }],
      [{ text: '求位數和' }, { text: ' ' }],
      // [{text:'btn'},{text:'btn'}, {text:'btn'}, {text:'btn'}],
      [{text: '作業參考答案'}],
      [{text: '回主選單'}],
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
  
  let str = JSON.stringify(replyMarkup);
  await context.sendText(str, { replyMarkup });
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
  await context.sendText('請選擇您想要查詢的項目：', { replyMarkup });
};


async function HandleCallbackQuery(context) {
  console.log("==========Callback Query==========");
  console.log(context.event.callbackQuery.data);
  //await context.sendText(context.event.callbackQuery.data);
  callBackCallKeyboard(context);
  console.log("==========Callback Query End==========");
}


function RuleBased(context, { next }) {
  return router([
    text('call', ShowInlineKB),
    telegram.callbackQuery(HandleCallbackQuery),
    text(['help', '回主選單'], ShowKB),
    route('*', next),
  ]);
}

module.exports = async function App(context) {
  return chain([
    RuleBased,
    // SheetActions,
    //FSActions,
    //OtherActions,
    QnaMaker, //
    Unknown,
  ]);
};
