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
      [{ text: '基本輸出' }, { text: '印出字串' }, { text: '字串輸出' }],

      [{ text: '長方體體積' }, { text: '大寫換小寫' }, { text: '圓柱表面積' }, { text: '整數除法' }],

      [{ text: '三數排序' }, { text: '四數排序' }, { text: '判斷及調整成績' }, { text: '判斷月份' }],
      
      [{ text: '數字平方和' }, { text:'求數字和' }, { text:'質數判別' }, { text:'九九乘法表(單排)' }],
      
      [{ text: '求兩數和 (N次)'}, { text: '求兩數和 (非零)' }, { text: '求兩數和 (檔尾)' }, { text: '求兩個數的最大公因數' }, { text: '求位數和' }],
         [{ text: '倒印數列'}, { text: '找最大值及索引' }, { text: '向量內積' }],
       [{ text: '印字串及其長度'}, { text: '字串大小寫個數' }, { text: '數列兩兩對調' }, { text: '矩陣轉置' }, { text: '矩陣旋轉' }],
        [{ text: '1+(1+2)+(1+2+3)+...'}, { text: '印三角形函數' }, { text: '陣列平均值' }, { text: '3n+1 問題' }],
        [{ text: '費氏數列'}, { text: '爬樓梯' }, { text: '河內塔問題1' }, { text: '河內塔問題2' }],
        [{text: '開燈問題'}, {text:'生成元'}, {text:'鍵盤移位'}, {text:'蛇形填數'}],
        [{ text: '排序（10數，大到小）'}, { text: '排序(Ｎ個數)' }, { text: '反數相加' }, { text: '得分' }],
        [{ text: '成績指標'}, { text: '排序 (10數，特殊規則）' }, { text: '書本的位置' }],
        [{ text: '線段交集'}, { text: '資料排序'}],
        [{text: '幾A幾B'}, {text: '第k小的排列'}],
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
