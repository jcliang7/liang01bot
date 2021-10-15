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
    keyboard: [
      [{ text: '基本輸出' }],
      [{ text: '印出字串' }],
      [{ text: '字串輸出' }],
      [{ text: '長方體體積' }],
      [{ text: '大寫換小寫' }],
      [{ text: '圓柱表面積' }],
      [{ text: '整數除法' }],
      [{ text: '三數排序' }],
      [{ text: '四數排序' }],
      [{ text: '判斷及調整成績' }],
      [{ text: '判斷月份' }],
    ]
  };
  await context.sendText('請選擇您想要查詢的項目：', { replyMarkup });
};
// let jsonStr = '{"keyboard": [[{"text": "row1"}],[{"text": "row2"}]]}';

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
