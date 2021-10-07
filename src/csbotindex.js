const { router, text, payload, route } = require('bottender/router');
const { chain } = require('bottender');
//const qnaMaker = require('@bottender/qna-maker');
const qnaMaker = require('./my-qna-maker');
const { fireDB } = require('./firebase')

fireDB.collection("comms").doc("user").get()
.then(result=>{
  console.log("I can get firestore data", result.data())
})


async function Unknown(context) {
  await context.sendText('抱歉，我不清楚如何回答你的問題。');
  //DefaultAction;
  await context.sendText('輸入\"help\"會顯示功能選單。');
}

async function FSActions(context, props) {
  // Your web app's Firebase configuration
  // Initialize Firebase
  await fireDB
    .collection("posts")
    .doc("test")
    .get()
    .then(result => {
      context.sendText(result.data().name)		
    })
    .catch((e) => { 
      context.sendText("Error") 
    })

  return props.next;
}

var gtable = false

async function SheetActions(context, props) {
  const options = {
    sheetId: '1r6RV3jS5PPSMsheiEbCj-mJPD9t3JsQZx2UwED8MJaY',
    sheetNumber: 1,
  }
  GSheetReader(options, results => {
    let str = ""
    Object.getOwnPropertyNames(results[0]).forEach(colName => {
      str += colName
    });    
    context.sendText(str)
  })
  return props.next; 
}

async function OtherActions(context, props) {
  if (context.event.text === 'hi') {
    await context.sendText('New!');
    return;
  }
  return props.next;
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
  await context.sendText('請選擇您想要查詢的項目：', { replyMarkup });
};
async function showSyntaxHint(context) {
  await context.sendText('以＄開頭，後面輸入想要查詢的語法\n ex:$printf');
}

async function ShowCourseInfoKB(context) {
  const replyMarkup = {
    keyboard: [
      [
        { text: '老師資訊' },
        { text: '助教資訊' },
        { text: '計分方式' },
        { text: '實體/遠距日期' },
      ],
      [
        { text: '回主選單'}
      ]
    ],
    resizeKeyboard: true,
    oneTimeKeyboard: true,
    selective: false
  };
  await context.sendText('計算機概論(一）\n授課教師：王佳盈\n開課時間：\n電機一甲/1-234/科學館B06\n電機一乙/2-234/科學館B06', { replyMarkup })
  //await context.sendText('test', { replyMarkup });
};

function RuleBased(context, {next}){
  return router([
    //text('課程資訊查詢', ShowInlineKB),
    text('課程資訊查詢', ShowCourseInfoKB),
    //text('語法解說', showSyntaxHint),//搬到QnA執行。
    text(['help', '回主選單'], ShowKB),
    // return the `next` action
    route('*', next),
  ]);
}

module.exports = async function App(context) {
  try {
    if (context.event.isMessage) {
      let orimsg = context.event.message;
      let msg = {
        messageId: orimsg.messageId,
        userid: orimsg.from.id,
        // firstName: orimsg.from.firstName,
        // lastName: orimsg.from.lastName,
        date: orimsg.date,
        text: orimsg.text
      }
      let docid = msg.date.toString();
      //console.log(msg);
      if (docid != null) {
        fireDB.collection("comms").doc(docid).set(msg)
      }
    }
  } catch (error) {//Write code here when use console mode to do test.
    //console.log("THISerror");
    let errorDoc = {
      error: error.toString(),
    }

    let timeInMs = Date.now().toString();
    fireDB.collection("err").doc(timeInMs).set(errorDoc);
  }
  return chain([
    RuleBased,
    // SheetActions,
    //FSActions,
    OtherActions,
    QnaMaker, //
    Unknown,
  ]);
};
